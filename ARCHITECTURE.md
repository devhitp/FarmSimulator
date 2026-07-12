<!--
Built completely from scratch using HTML5 Canvas and Vanilla JavaScript.

Harvest Engine follows a modular, data-driven architecture inspired by modern game engine design principles.
-->

# 🌾 Farm Simulator — Harvest Engine Architecture

## Overview

Farm Simulator is a 2D browser-based farming simulation game built entirely from scratch using **HTML5 Canvas**, **CSS**, and **Vanilla JavaScript**.

The project focuses on building every gameplay and engine system without external libraries or game engines while maintaining a clean, scalable architecture.

Every system has a single responsibility and communicates through reusable managers, builders, renderers, generators, and registries.

---

# Engine Structure

```
Game
│
├── Input
├── Camera
├── World
├── Renderer
├── Player
├── Inventory
├── Hotbar
├── Asset Manager
├── Particle Manager
├── Effects
├── Building System
├── Farm Object System
├── World Generation
└── Registries
```

---

# Core Systems

## Game

Responsible for:

- Engine initialization
- Game loop
- Updating every system
- Rendering every frame

---

## Input

Responsible for:

- Keyboard input
- Mouse input
- One-frame key presses
- Canvas mouse coordinate conversion

---

## Camera

Responsible for:

- Following the player
- World bounds
- Camera translation

Future:

- Camera shake
- Smooth follow
- Zoom

---

## Renderer

Responsible for coordinating every visual system.

Draw order:

- Terrain
- Buildings (Base)
- Farm Objects
- Ground Decorations
- Tree Trunks
- Crops
- Player
- Building Roofs
- Tall Decorations
- Tree Overhead
- Particle Effects
- UI

Renderer never updates gameplay logic.

---

# Rendering Systems

## Building Renderer

Responsible for:

- Building base rendering
- Roof rendering
- Layered rendering

---

## Farm Object Renderer

Responsible for rendering:

- Shipping Bin
- Mailbox

Future:

- Scarecrow
- Wells
- Fences
- Signs

---

## Crop Renderer

Responsible for:

- Crop rendering
- Growth stages
- Future crop animations

---

## Tree Renderer

Responsible for:

- Ground layer
- Overhead layer
- Future tree animations

---

## Particle Manager

Responsible for:

- Harvest particles
- Water splash particles

Future:

- Rain
- Snow
- Leaves
- Dust
- Fire

---

## Effects

High-level visual effects.

Current:

- Harvest Effect

Future:

- Mining
- Tree Chopping
- Water Splash
- Magic

---

# World System

## World

Stores every world tile.

Responsible for:

- Tile updates
- Crop growth
- Collision queries
- Tile utilities

---

## World Generator

Responsible for generating:

Current:

- Grass
- Lakes
- Trees
- Farm Area

Future:

- Forests
- Rivers
- Villages
- Secret Areas

---

## Farm Generator

Responsible for:

- Farm generation
- House placement
- Shipping Bin placement
- Mailbox placement
- Player spawn

---

## Brush System

Utility used by World Generator.

Current Brushes:

- Circle Brush

Future Brushes:

- Rectangle
- Blob
- Noise
- Flood Fill

---

# Building System

## House Builder

Responsible for:

- Multi-tile house construction
- Roof generation
- Wall generation
- Door placement
- Window placement

Future Buildings:

- Barn
- Coop
- Greenhouse
- Shed

---

# Farm Object System

Current Objects:

- Shipping Bin
- Mailbox

Future Objects:

- Well
- Fence
- Fence Gate
- Lamp
- Sign
- Scarecrow

---

# Player System

Responsible for:

- Movement
- Collision
- Tool usage
- Farming
- Planting
- Watering
- Harvesting

Future:

- Stamina
- Health
- Fishing
- Mining

---

# Farming System

## Crop Registry

Stores crop definitions.

Current Crop:

- Turnip

Future Crops:

- Potato
- Tomato
- Corn
- Pumpkin
- Blueberry

Current Features:

- Growth Stages
- Growth Time
- Harvest Item

---

## Tree Registry

Stores tree definitions.

Current Trees:

- Oak
- Pine

Future Trees:

- Birch
- Maple

---

# Inventory System

## Inventory

Responsible for:

- Item collection
- Item stacking
- Harvest rewards
- Item lookup

---

## Inventory UI

Responsible for:

- Inventory window
- Item slots
- Tooltips
- Item quantities

---

## Hotbar

Current Features:

- 3 Slots
- Tool selection

Future:

- Drag & Drop
- Slot swapping
- Scroll wheel support

---

# Registries

Current Registries:

- Tile Registry
- Item Registry
- Crop Registry
- Tree Registry
- Building Registry
- Farm Object Registry

---

## Item Registry

Stores:

- Tools
- Seeds
- Crops
- Harvest Items

Examples:

- Hoe
- Watering Can
- Turnip Seed
- Turnip

---

## Tile Registry

Stores tile properties.

Examples:

- Grass
- Soil
- Water

---

# Asset System

## Asset Manager

Responsible for:

- Image loading
- Asset lookup
- Asset storage

Future:

- Sprite Sheets
- Animations
- Audio
- Loading Screen

---

# Utilities

Shared helper functions.

Examples:

- getTileAt()
- getPlayerTile()

Future:

- Collision helpers
- Math helpers
- Random utilities

---

# Design Philosophy

Harvest Engine follows modern game engine principles.

- Modular Architecture
- Separation of Rendering and Gameplay
- Single Responsibility
- Data-Driven Registries
- Builder Pattern
- Generator Pattern
- Reusable Managers
- Easy Expansion
- Consistent File Structure
- Readable Code

---

# Current Engine Status

## ✅ Completed

- Engine Foundation
- Game Loop
- Camera System
- Input Manager
- World Generation
- Brush System
- Farm Generator
- Tile Registry
- Item Registry
- Crop Registry
- Tree Registry
- Building Registry
- Farm Object Registry
- House Builder
- Building Renderer
- Farm Object Renderer
- Crop Renderer
- Tree Renderer
- Player System
- Farming System
- Inventory
- Hotbar
- Crop Growth
- Harvesting
- Particle Manager
- Effects System
- Asset Manager
- Collision System
- Layered Rendering

---

# Planned Systems

- Starter Farm
- Wooden Fences
- Fence Gates
- Dirt Paths
- Save / Load
- Weather
- Seasons
- NPCs
- Animals
- Shop
- Mining
- Fishing
- Crafting
- Audio
- Lighting

---

# Engine Version

## Harvest Engine v0.2.0

---

# Rendering Pipeline

```
Renderer
│
├── Terrain
├── Buildings (Base)
├── Farm Objects
├── Ground Decorations
├── Tree Ground Layer
├── Crops
├── Player
├── Building Roof Layer
├── Tall Decorations
├── Tree Overhead Layer
├── Particle Effects
├── Hotbar
└── Inventory UI
```

The renderer coordinates every visual system while keeping rendering completely independent from gameplay logic.