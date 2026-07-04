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

### 🚀 Next Sprint
Sprint 2.5 – Polish