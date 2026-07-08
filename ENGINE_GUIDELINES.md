# 🌾 Harvest Engine Engineering Guidelines

> These guidelines define the architecture and development principles used throughout Harvest Engine.

Following these rules keeps the engine modular, scalable, and easy to maintain.

---

# Core Philosophy

Build systems before content.

A strong architecture allows new gameplay features to be added with minimal changes to existing code.

---

# General Rules

- One file = One responsibility.
- Prefer composition over duplication.
- Build reusable systems instead of one-time solutions.
- Refactor when architecture becomes unclear.
- Avoid quick fixes that create technical debt.

---

# Rendering

Rendering is responsible only for drawing.

Renderers must never:

- Update gameplay
- Modify world data
- Change inventory
- Spawn objects

Every renderer should have a single responsibility.

Current renderers:

- TerrainRenderer
- DecorationRenderer
- TreeRenderer
- CropRenderer

Future renderers:

- PlayerRenderer
- WeatherRenderer
- LightingRenderer
- UIRenderer

---

# Gameplay

Gameplay systems never draw graphics.

Examples:

Player

Responsible for:

- Movement
- Farming
- Tool usage
- Harvesting

Not responsible for:

- Drawing crops
- Drawing particles
- Drawing UI

---

# World

World stores data.

It should never contain rendering code.

Each tile stores only its state.

Example:

- Terrain
- Decoration
- Tree
- Crop
- Watered State

---

# Registries

All gameplay data belongs inside registries.

Avoid hardcoded values.

Examples:

- TileRegistry
- ItemRegistry
- CropRegistry
- TreeRegistry
- DecorationRegistry

Future:

- NPCRegistry
- AnimalRegistry
- ToolRegistry

---

# Assets

Assets are loaded only through AssetManager.

Never access image files directly.

Correct:

Assets.get("grass")

Incorrect:

new Image()

inside gameplay or renderer code.

---

# World Generation

Generation should remain modular.

Preferred architecture:

WorldGenerator

↓

TerrainGenerator

↓

DecorationGenerator

↓

TreeGenerator

↓

StructureGenerator

Each generator has one responsibility.

---

# Code Style

Prefer readable code over short code.

Good names are more valuable than clever code.

Keep functions focused.

If a function grows too large, split it.

---

# Project Structure

Gameplay

↓

World

↓

Rendering

↓

UI

Dependencies should always flow downward.

Avoid circular dependencies.

---

# Development Workflow

Every completed milestone should follow:

- Planning
- Development
- Testing
- Refactoring
- Documentation
- Git Commit
- Git Push
- Release Tag

---

# Long-Term Vision

Harvest Engine is designed to become a reusable JavaScript 2D game engine.

Farm Simulator is the first game built on top of it.

Future projects should reuse the engine instead of rebuilding common systems.