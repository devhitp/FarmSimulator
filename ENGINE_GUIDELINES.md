# 🌾 Harvest Engine Engineering Guidelines

> These guidelines define the architecture, coding standards, and engineering principles used throughout Harvest Engine.

Following these rules keeps the engine modular, scalable, reusable, and easy to maintain as the project grows.

---

# Core Philosophy

Build systems before content.

A strong engine architecture allows new gameplay features to be added with minimal changes to existing code.

Every feature should be built on top of reusable systems rather than one-time implementations.

---

# Engineering Principles

- One file = One responsibility.
- One system = One responsibility.
- Prefer reusable systems over feature-specific code.
- Prefer composition over duplication.
- Build data-driven systems whenever possible.
- Refactor before complexity becomes technical debt.
- Never sacrifice architecture for short-term convenience.

---

# Rendering

Rendering is responsible **only** for drawing.

Renderers must never:

- Update gameplay
- Modify world data
- Spawn objects
- Handle player logic
- Change inventory
- Process input

Current Renderers:

- TerrainRenderer
- BuildingRenderer
- FarmObjectRenderer
- DecorationRenderer
- TreeRenderer
- CropRenderer
- PlayerRenderer

Future Renderers:

- WeatherRenderer
- LightingRenderer
- ShadowRenderer
- WaterRenderer
- UIRenderer

---

# Layered Rendering

Top-down games require multiple rendering layers.

Current rendering order:

```
Terrain
↓

Buildings (Base)
↓

Farm Objects
↓

Ground Decorations
↓

Tree Ground Layer
↓

Crops
↓

Player
↓

Building Roofs
↓

Tall Decorations
↓

Tree Overhead Layer
↓

Particle Effects
↓

UI
```

Never break the rendering order unless introducing a new rendering layer.

---

# Gameplay

Gameplay systems never render graphics.

Example:

## Player

Responsible for:

- Movement
- Collision
- Farming
- Tool usage
- Planting
- Watering
- Harvesting

Not responsible for:

- Drawing sprites
- Playing particle effects
- Rendering UI
- Loading assets

---

# World

World stores data and provides world queries.

Responsible for:

- Tile data
- Tile utilities
- Collision queries
- Crop updates
- Spawn information

World must never:

- Draw graphics
- Handle player input
- Update UI

---

# Buildings

Buildings are assembled using Builders.

Builders create world objects.

Renderers draw them.

Registries describe them.

Current Building Systems:

- HouseBuilder
- BuildingRenderer
- BuildingRegistry

Future:

- BarnBuilder
- CoopBuilder
- GreenhouseBuilder

---

# Farm Objects

Farm Objects are independent world objects.

Current:

- Shipping Bin
- Mailbox

Future:

- Fence
- Fence Gate
- Well
- Lamp
- Sign
- Scarecrow

Each farm object should contain:

- Position
- Dimensions
- Collision
- Asset reference

---

# Collision

Collision belongs to the World.

Gameplay asks the World whether movement is allowed.

Gameplay never performs collision calculations directly.

Collision data should remain independent from rendering.

---

# Registries

Gameplay data belongs inside registries.

Avoid hardcoded values.

Current Registries:

- TileRegistry
- ItemRegistry
- CropRegistry
- TreeRegistry
- BuildingRegistry
- FarmObjectRegistry

Future Registries:

- NPCRegistry
- AnimalRegistry
- WeatherRegistry
- ToolRegistry
- SoundRegistry

---

# Builders

Builders assemble complex objects.

Current Builders:

- HouseBuilder
- ShippingBinBuilder
- MailboxBuilder

Future Builders:

- BarnBuilder
- FenceBuilder
- BridgeBuilder

Builders should never render.

Builders should never update gameplay.

Builders only construct objects.

---

# Generators

Generators create world content.

Current:

- WorldGenerator
- FarmGenerator

Future:

- TerrainGenerator
- DecorationGenerator
- TreeGenerator
- StructureGenerator

Generators should never render.

---

# Assets

Assets are loaded only through AssetManager.

Correct:

```javascript
Assets.get("grass");
```

Incorrect:

```javascript
new Image();
```

inside gameplay or rendering systems.

---

# Utilities

Utility functions should remain pure.

Examples:

- getTileAt()
- getPlayerTile()

Utilities should never modify gameplay state.

---

# Code Style

Prefer readable code over clever code.

Guidelines:

- Use descriptive variable names.
- Keep functions focused.
- Keep files focused.
- Avoid unnecessary nesting.
- Group related code together.
- Add section comments for large files.

If a function becomes difficult to understand, split it.

---

# Project Structure

Dependencies should always flow downward.

```
Game
↓

Gameplay

↓

World

↓

Rendering

↓

UI
```

Avoid circular dependencies.

---

# Development Workflow

Every completed milestone follows:

1. Planning
2. Development
3. Testing
4. Refactoring
5. Documentation
6. Git Commit
7. Git Push
8. Version Update
9. Changelog Update

Never skip documentation after completing a major system.

---

# Git Guidelines

Every commit should represent one logical feature.

Examples:

- Add Building Renderer
- Implement Crop Growth
- Add Collision System

Avoid mixing unrelated features into a single commit.

---

# Long-Term Vision

Harvest Engine is designed to become a reusable JavaScript 2D game engine.

Farm Simulator is the first game built on top of the engine.

Future games should reuse the engine rather than rebuilding common systems.

The goal is to create a modular engine capable of supporting multiple 2D games while keeping gameplay code separate from engine code.