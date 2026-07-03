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

## 🚧 v0.2.0 - Core Farming (In Progress)

### ✅ Completed
- Designed the Item Registry.
- Added the Crop Registry.
- Implemented the Inventory System.
- Created the Hotbar System.
- Added item selection.
- Implemented seed items.
- Added crop planting.
- Rendered planted crops.
- Improved the Hotbar UI.
- Added item quantity display.

### 🛠 Problems Solved
- Refactored item usage to use the Hotbar instead of directly accessing the Inventory.
- Improved rendering architecture by separating world rendering from UI rendering.
- Fixed Canvas rendering state issues affecting the world grid.
- Improved Hotbar rendering and item selection feedback.

### 📚 Lessons Learned
- Canvas rendering state should be isolated using `ctx.save()` and `ctx.restore()`.
- Registries make gameplay systems scalable and easier to maintain.
- Separating data (registries) from behavior (player, world) leads to cleaner architecture.
- UI systems should remain independent from gameplay systems.

### 🎯 Next Feature
- Watering Can
- Crop Growth
- Harvesting