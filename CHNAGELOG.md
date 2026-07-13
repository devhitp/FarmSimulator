# 📜 Changelog

All notable changes to this project will be documented here.

---

## [v0.1.0] - Engine Foundation

### Added
- Harvest Engine
- Game Loop
- Camera Follow
- Smooth Player Movement
- Procedural World Generation
- Brush System
- Tile Registry
- Hoe Tool

### Changed
- Replaced hardcoded tile rendering with Tile Registry.
- Improved collision using axis-separated movement.

### Fixed
- Player collision edge cases.
- Water collision consistency.
- Diagonal movement speed.

---

## [v0.2.0] - Core Farming

### Added
- Item Registry
- Crop Registry
- Inventory System
- Hotbar
- Seed Planting
- Watering System
- Crop Growth
- Harvesting
- Inventory UI (Debug)

### Improved
- Player tool architecture
- Renderer structure
- World update system
- Crop management

### Fixed
- Duplicate methods
- Tool cooldown conflict
- Inventory synchronization
- Harvesting pipeline
- Registry architecture

---

## [v0.3.0] - Visual Polish & World Expansion

### Added

#### Rendering
- Crop Renderer
- Tree Renderer
- Particle Manager
- Effects System

#### World
- Tree Registry
- Procedural Tree Generation
- Grass Variation
- Soil Texturing

#### Visual Effects
- Harvest Particle Effects
- Water Feedback Effects

#### Engine
- Asset Manager (Foundation)

### Improved
- Rendering pipeline architecture
- Renderer responsibility separation
- Inventory UI
- Visual feedback
- World generation

### Fixed
- Inventory tooltip mouse positioning
- Mouse coordinate scaling with browser zoom
- Rendering organization
- Particle effect integration

---

## [v0.4.0] - Farm Foundation

### Added

#### Buildings
- House Builder
- Multi-tile farmhouse
- Modular roof system
- Door rendering
- Window rendering

#### Farm Objects
- Shipping Bin
- Mailbox
- Farm Object Registry
- Farm Object Renderer

#### World
- Farm Generator
- House placement
- Shipping Bin placement
- Mailbox placement
- Player spawn generation

#### Rendering
- Building Renderer
- Layered building rendering
- Roof rendering layer
- Building base rendering

#### Engine
- Building Registry
- Collision system for buildings
- Collision system for farm objects

### Improved
- Renderer layering
- World generation pipeline
- Engine architecture
- Building construction workflow
- Rendering order
- Player spawn positioning

### Fixed
- House rendering alignment
- Roof overlap rendering
- Door placement
- Window placement
- Building depth rendering
- House collision
- Shipping Bin collision
- Mailbox collision
- Building rendering order

---

## [v0.5.0] - Starter Farm

### Added

#### Builders
- Fence Builder
- Field Builder

#### Registries
- Fence Registry

#### Rendering
- Fence Renderer
- Fence rendering pipeline integration

#### Farm Layout
- Procedural rectangle fence generation
- Configurable fence opening system
- Automatic starter field generation
- Starter farm layout generation

#### Engine
- Reusable builder architecture
- Builder-driven farm generation pipeline

### Improved
- Procedural farm generation workflow
- Builder architecture consistency
- World generation pipeline
- Farm layout generation
- Fence generation flexibility
- Engine modularity

### Fixed
- World generation initialization order
- Fence rendering integration
- Fence asset loading
- Field generation timing
- Builder responsibility separation
- Farm generation workflow
- Replaced gate-based entrance with a cleaner opening system