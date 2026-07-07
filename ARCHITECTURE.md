<!-- Built from scratch using HTML5 Canvas and Vanilla JavaScript.
Designed with a modular architecture inspired by modern game engine principles. -->
# 🌾 Farm Simulator — Harvest Engine Architecture

## Overview

Farm Simulator is a 2D browser-based farming game built completely from scratch using **HTML5 Canvas**, **CSS**, and **Vanilla JavaScript**.

The project follows a modular architecture where every system has a single responsibility.

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
└── Registries
```

---

# Core Systems

## Game

**Responsibility**

- Initializes the engine
- Starts the game loop
- Updates all systems
- Renders every frame

---

## Input

**Responsibility**

- Keyboard input
- Mouse input
- One-frame key presses
- Canvas mouse coordinate conversion

---

## Camera

**Responsibility**

- Follows the player
- Keeps the camera inside world bounds

Future:

- Camera shake
- Smooth follow
- Zoom

---

## Renderer

**Responsibility**

Draws:

Draws:

- Terrain
- Trees
- Crops
- Player
- Particle Effects
- Hotbar
- Inventory UI

The renderer delegates specialized drawing to dedicated renderers:

- TreeRenderer
- CropRenderer

Renderer never updates game logic.

---

---

# Rendering Systems

## Crop Renderer

Responsible for:

- Crop rendering
- Crop growth visuals
- Future crop animations

---

## Tree Renderer

Responsible for:

- Tree rendering
- Future tree sprites
- Future tree animations

---

## Particle Manager

Responsible for:

- Harvest particles
- Water splash particles

Future:

- Rain
- Snow
- Dust
- Leaves
- Fire

---

## Effects

High-level visual effects.

Current:

- Harvest effect

Future:

- Water splash
- Mining
- Tree chopping
- Magic

---


# World System

## World

Stores every tile.

Responsible for:

- Tile updates
- Crop growth
- Tile utilities

---

## World Generator

Generates the world.

Current generation:

- Grass
- Grass Variation
- Lakes
- Trees

Future generation:

- Forests
- Rocks
- Flowers
- Spawn Areas
- Rivers

---

## Brush

Utility used by World Generator.

Current brushes:

- Circle Brush

Future brushes:

- Rectangle
- Noise
- Blob
- Flood Fill

---

# Player System

Responsible for:

- Movement
- Collision
- Farming
- Tool usage
- Harvesting
- Planting
- Watering

---

# Farming System

## Crop Registry

Contains crop definitions.

Current crop:

- Turnip

Future crops:

- Potato
- Tomato
- Corn
- Pumpkin

Current Features:

- Growth Stages
- Growth Time
- Harvest Item

---

## Tree Registry

Stores all tree definitions.

Current tree:

- Oak Tree

Future:

- Pine
- Birch
- Maple

---


# Inventory System

## Inventory

Stores every collected item.

Handles:

- Item Collection
- Item Stacking
- Item Lookup
- Harvest Rewards

---

## Inventory UI

Draws:

- Inventory window
- Item slots
- Tooltips
- Item quantities

---

## Hotbar

Quick-access inventory.

Current features:

- 3 slots
- Tool selection

Future:

- Slot swapping
- Drag & Drop

---

Registries

Current Registries:

- Tile Registry
- Item Registry
- Crop Registry
- Tree Registry

## Item Registry

Stores every item.

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

# Utilities

Shared helper functions.

Examples:

- getTileAt()
- getPlayerTile()

---

# Asset System

## Asset Manager

Responsible for:

- Loading image assets
- Storing loaded assets
- Providing asset lookup

Future:

- Sprite Sheets
- Audio
- Animations
- Loading Screen

---


# Design Philosophy

Harvest Engine follows modern game engine principles:

- Separation of Rendering and Gameplay
- Reusable Managers
- Single Responsibility
- Modular Systems
- Data-Driven Registries
- Easy Expansion
- Readable Code
- Consistent File Structure

---

# Current Engine Status

## ✅ Completed

- Engine Foundation
- Camera System
- Input Manager
- World Generation
- Brush System
- Tile Registry
- Farming System
- Inventory
- Hotbar
- Crop Growth
- Harvesting
- Crop Renderer
- Tree Renderer
- Particle Manager
- Effects System
- Asset Manager
- Architecture Cleanup

---

# Planned Systems

- Rocks
- Flowers
- Asset Integration
- Multi-Tile Objects
- Weather
- Seasons
- NPCs
- Animals
- Shop
- Save / Load
- Audio
- Lighting

---

# Engine Version

Harvest Engine v0.4

---

# Rendering Pipeline

```
Game
    │
    ▼
Renderer
    │
    ├── Terrain
    ├── TreeRenderer
    ├── CropRenderer
    ├── ParticleManager
    ├── Player
    ├── Hotbar
    └── Inventory UI
```

The renderer coordinates every visual system while keeping gameplay logic completely separate from rendering.