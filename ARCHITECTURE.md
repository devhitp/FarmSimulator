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
├── Renderer
├── World
├── Player
├── Inventory
├── Hotbar
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

- World
- Crops
- Player
- Hotbar
- Inventory UI

Renderer never updates game logic.

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
- Lakes

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

---

# Inventory System

## Inventory

Stores every collected item.

Handles:

- Add items
- Stack items
- Item lookup

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

# Registries

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

# Design Philosophy

Harvest Engine follows these principles:

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
- Player Movement
- Camera
- World Generation
- Tile Registry
- Brush System
- Farming Sprint 2
- Inventory
- Hotbar
- Crop Growth
- Harvesting
- Architecture Cleanup

---

# Planned Systems

- Trees
- Rocks
- Flowers
- Weather
- Seasons
- NPCs
- Animals
- Shop
- Save / Load
- Audio
- Particles
- Lighting

---

# Engine Version

Harvest Engine v0.2