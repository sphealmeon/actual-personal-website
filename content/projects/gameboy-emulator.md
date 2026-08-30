---
title: Game Boy Emulator
description: A cycle-driven Game Boy emulator in C++ — custom SM83 CPU core, PPU, and SDL2 front end, running the original Tetris ROM.
tags:
  - projects
  - c++
  - emulation
  - sdl2
---

June 2026 – Aug 2026 · [Source on GitHub](https://github.com/sphealmeon/GameboyTetris)

A from-scratch Game Boy emulator in C++, built to run the original Tetris cartridge at full speed.

## CPU core

The heart of the emulator is a custom SM83 CPU class (`cpu.cpp`/`cpu.h`) implementing the full fetch–decode–execute cycle: the entire instruction set , a memory bus with correct read/write semantics, the interrupt-dispatch cycle, and the edge cases around `HALT`/`STOP`. Correctness was validated against Blargg's CPU instruction test ROMs.

## PPU and timing

A separate PPU class renders the Game Boy's tile and sprite-based graphics, reproducing the four-shade DMG green palette (`#9BBC0F` → `#0F380F`) rather than a generic grayscale approximation. Frame pacing is tuned to the real hardware rate — 70,224 T-cycles per frame at roughly 60 Hz — so gameplay speed matches an actual DMG. A dedicated Timer class handles the CPU's internal timer/divider registers on their own schedule, independent of the PPU.

## Front end

Rendering and input run through SDL2: a 160×144 framebuffer scaled to a window, with keyboard input mapped to the D-pad and buttons (WASD for movement, J/K for A/B, N/M for Select/Start). The emulator takes any Game Boy ROM file as a command-line argument — it was built and tested against the original Tetris cartridge.

**Stack:** C++17, SDL2, custom CPU/PPU/Timer architecture

Back to [[projects/index|Projects]].
