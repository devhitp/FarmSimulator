# 🌾 Farm Simulator Development Log

---

# 🚀 v0.1.0 - Engine Foundation

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
- Implemented player facing direction.
- Added tool cooldown.

### 🛠 Problems Solved
- Fixed Git detached HEAD issue.
- Refactored movement using axis-separated collision.
- Replaced hardcoded tile logic with a data-driven Tile Registry.
- Improved world generation using reusable brushes.

### 📚 Lessons Learned
- Engine architecture should come before gameplay.
- Small reusable systems scale better than large monolithic files.
- Data-driven registries simplify future expansion.

---

# 🚀 v0.2.0 - Core Farming

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
- Built a temporary Inventory UI.

### 🛠 Problems Solved
- Refactored Player actions into reusable tool methods.
- Added reusable `getFacingTile()` helper.
- Fixed duplicate function definitions.
- Fixed tool cooldown conflict.
- Fixed inventory synchronization.
- Fixed crop harvesting pipeline.
- Improved gameplay architecture.

### 📚 Lessons Learned
- Separate gameplay logic from item definitions.
- Registries make systems easier to expand.
- Build gameplay first, visuals second.

---

# 🚀 v0.3.0 - Visual Polish & Rendering Systems

### ✅ Completed

#### 🌿 Visual Improvements
- Added Grass Variation system.
- Improved soil rendering.
- Added Water Feedback effects.
- Added Harvest Particle Effects.

#### 🎨 Rendering Systems
- Created Crop Renderer.
- Created Tree Renderer.
- Separated rendering responsibilities from the main Renderer.
- Improved rendering pipeline.

#### ✨ Effects
- Added Particle Manager.
- Built reusable Effects system.
- Connected harvesting with particles.

#### 🌍 World
- Added Tree Registry.
- Implemented procedural tree generation.
- Added basic tree rendering.

#### 🖼 Asset Pipeline
- Created Asset Manager.
- Added PNG asset loading.
- Prepared the engine for sprite integration.

### 🛠 Problems Solved
- Refactored rendering into dedicated renderers.
- Fixed inventory tooltip mouse positioning.
- Fixed browser zoom mouse coordinate issues.
- Reduced renderer responsibilities.
- Improved engine scalability.

### 📚 Lessons Learned
- Rendering and gameplay should always remain independent.
- Specialized renderers keep the engine maintainable.
- Placeholder graphics are acceptable while building systems.

---

# 🚀 v0.4.0 - Farm Foundation

### ✅ Completed

#### 🏡 Building System
- Created House Builder.
- Built a modular multi-tile farmhouse.
- Added roof construction system.
- Added wall generation.
- Added door rendering.
- Added window rendering.

#### 🌾 Farm Generation
- Created Farm Generator.
- Reserved a dedicated farm area.
- Added automatic house placement.
- Added automatic player spawn generation.
- Added Shipping Bin placement.
- Added Mailbox placement.

#### 📦 Farm Objects
- Created Farm Object Registry.
- Created Farm Object Renderer.
- Added Shipping Bin.
- Added Mailbox.

#### 🎨 Rendering
- Built Building Renderer.
- Added layered building rendering.
- Split building rendering into base and roof layers.
- Added roof overlap rendering.
- Integrated buildings into the rendering pipeline.

#### 🚧 Collision
- Added building collision.
- Added Shipping Bin collision.
- Added Mailbox collision.
- Improved collision architecture for future expansion.

### 🛠 Problems Solved
- Fixed house tile alignment.
- Fixed roof rendering order.
- Fixed building layering.
- Fixed house collision boundaries.
- Fixed player spawn positioning.
- Fixed farm object rendering.
- Improved renderer organization.

### 📚 Lessons Learned
- Layered rendering creates proper depth in top-down games.
- Builders simplify complex multi-tile structures.
- Collision should be independent from rendering.
- Separating base and overhead layers improves flexibility.
- Engine architecture becomes easier to extend when systems remain modular.

---

# 🚀 v0.5.0 - Starter Farm

### ✅ Completed

#### 🪵 Fence System
- Created Fence Registry.
- Created Fence Builder.
- Created Fence Renderer.
- Added procedural horizontal fence generation.
- Added procedural vertical fence generation.
- Built reusable rectangle fence generation.
- Added configurable fence opening system.
- Integrated fences into the rendering pipeline.

#### 🌾 Field System
- Created Field Builder.
- Added automatic starter field generation.
- Integrated fields into Farm Generator.
- Prepared the engine for future crop layouts.

#### 🏡 Farm Layout
- Generated a complete starter farm.
- Added fenced farming area.
- Added entrance to the farm.
- Positioned the starter field inside the fenced area.
- Improved overall farm presentation.

#### 🧩 Engine Architecture
- Expanded the Builder architecture.
- Standardized Builder → Generator workflow.
- Improved procedural world generation pipeline.
- Reduced hardcoded farm generation logic.

### 🛠 Problems Solved
- Fixed world generation initialization order.
- Fixed fence rendering integration.
- Fixed asset loading path issues.
- Fixed field generation timing.
- Improved builder responsibility separation.
- Replaced fence gate with a cleaner opening system.
- Improved procedural farm generation architecture.

### 📚 Lessons Learned
- Builders should generate reusable structures rather than hardcoded layouts.
- World generation should operate on temporary world data before initialization completes.
- Small reusable builders make procedural generation easier to expand.
- Engine systems become cleaner when each builder owns a single responsibility.
- Designing APIs around concepts (like "openings") is more flexible than designing around specific assets (like "gates").

---

# 🚀 Next Sprint

## Sprint 5 – Farm Polish & Soil System

### Planned Goals

- 🌱 Connected Soil Rendering System
- 💧 Watered Soil Rendering
- 🛤 Dirt Path Generation
- 🌼 Decorative Flowers
- 🪨 Decorative Rocks
- 🌿 Decorative Grass
- 🌳 Farm Border Decoration
- 🎨 Farm Layout Polish

**Goal:** Improve the visual quality of the starter farm while expanding Harvest Engine with reusable terrain rendering systems.

---

# 🚀 v0.5.1 - Environment Improvements

### ✅ Completed

#### 🌿 World
- Added flower grass variation.
- Improved world decoration variety.

#### 🪵 Fences
- Added fence collision.
- Integrated fences into the world collision system.

#### 🏗 Engine
- Improved collision architecture consistency.
- Refined starter farm generation.
- Planned the connected Soil Rendering System.

---

### 🛠 Problems Solved

- Fixed fence collision lookup.
- Fixed fence collision integration.
- Simplified fence collision by using placed fence instance data.

---

### 📚 Lessons Learned

- Placed world objects should own their gameplay properties.
- Small environmental details significantly improve world quality.
- Consistent collision systems reduce complexity across engine components.
- Planning rendering systems before implementation leads to cleaner engine architecture.