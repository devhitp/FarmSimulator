# 🌾 Farm Simulator Development Log
---

## v0.1.0 - Engine Foundation

### ✅ Completed
- Created the Harvest Engine architecture.
- Implemented the game loop and renderer.
- Added smooth player movement.
- Implemented camera follow.
- Built a procedural world generator.
- Added reusable Brush System.
- Implemented Tile Registry.
- Added player collision with water.
- Added hoe tool.
- Added player facing direction.
- Implemented tool cooldown.

### 🛠 Problems Solved
- Fixed Git detached HEAD issue.
- Refactored movement using axis-separated collision.
- Replaced hardcoded tile logic with a data-driven Tile Registry.
- Improved world generation using reusable brushes.

---

---

## 🎉 v0.2.0 - Core Farming Complete

### ✅ Completed
- Added Item Registry.
- Added Crop Registry.
- Implemented Inventory System.
- Created the Hotbar System.
- Added item selection.
- Implemented seed planting.
- Added watering mechanic.
- Implemented crop growth stages.
- Added harvesting system.
- Connected harvested crops to the inventory.
- Built a temporary Inventory UI for debugging.

### 🛠 Problems Solved
- Refactored Player actions into reusable tool methods.
- Added reusable `getFacingTile()` helper.
- Fixed duplicate function definitions.
- Fixed tool cooldown conflict.
- Fixed inventory data flow.
- Fixed crop harvesting pipeline.
- Fixed Item Registry and Crop Registry separation.
- Improved overall gameplay architecture.

### 📚 Lessons Learned
- Separate gameplay data from item definitions.
- Avoid duplicate object methods.
- Registries make gameplay systems scalable.
- Debugging data flow is more effective than guessing.
- Build mechanics first, visuals second.


---

## 🎉 v0.3.0 - Visual Polish & Rendering Systems

### ✅ Completed

#### 🌿 Visual Improvements
- Added Grass Variation system.
- Improved soil rendering with visual texturing.
- Added Water Feedback effects.
- Implemented Harvest Particle Effects.

#### 🎨 Rendering Systems
- Created a dedicated Crop Renderer.
- Created a dedicated Tree Renderer.
- Separated rendering responsibilities from the main Renderer.
- Improved rendering pipeline architecture.

#### ✨ Effects
- Added Particle Manager.
- Added reusable Effects system.
- Connected harvesting with particle effects.
- Built reusable visual effect architecture.

#### 🌍 World
- Added Tree Registry.
- Implemented procedural tree generation.
- Added basic tree rendering.

#### 🖼 Asset Pipeline
- Created Asset Manager.
- Designed the foundation for future sprite loading.
- Prepared the engine for PNG asset integration.

---

### 🛠 Problems Solved

- Refactored the rendering pipeline into dedicated renderers.
- Fixed inventory tooltip mouse coordinate issues.
- Fixed browser zoom mouse position bug.
- Reduced rendering responsibility inside Renderer.
- Created reusable particle architecture.
- Improved overall engine scalability.

---

### 📚 Lessons Learned

- Separate rendering from gameplay logic.
- Every major system should have a single responsibility.
- Build reusable managers instead of feature-specific code.
- Temporary placeholder graphics are acceptable while building gameplay systems.
- A clean architecture makes future asset integration significantly easier.

---

### 🚀 Next Sprint

## Sprint 4 – Asset Engine

Planned goals:

- Integrate real pixel-art assets.
- Replace placeholder tree rendering.
- Replace terrain rendering with sprites.
- Build sprite rendering pipeline.
- Support multi-tile world objects.
- Continue world expansion with rocks and flowers.
