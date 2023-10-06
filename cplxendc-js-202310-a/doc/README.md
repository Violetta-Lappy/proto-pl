# CPLXENDC
- Release Prefix : A
- Version Year Month: 202310
- Last Update: 20231006

# Table of Contents
- [CPLXENDC](#cplxendc)
- [Table of Contents](#table-of-contents)
- [Inspiration](#inspiration)
- [Design Philosophy](#design-philosophy)
- [Introduction](#introduction)
- [Important](#important)
- [Features](#features)
- [Design System](#design-system)
- [Folder](#folder)
- [Build System](#build-system)
- [Include](#include)
- [Variable Keywords](#variable-keywords)
- [Expression](#expression)
- [Comment](#comment)
- [Assign Variable](#assign-variable)
- [Function](#function)
- [Function End](#function-end)
- [Abandoning Feature](#abandoning-feature)

# Inspiration
- Dreambirb
- Flutter / Dart
- Rust
- WebGPU
- IBM Carbon Design System
- Renderer opposed to Webview

# Design Philosophy
- Focus on what matter the most, User Create Function Name rather then seeing standard type later
- Portable exe, everywhere and everywhere
- Backend Code is seperate from Frontend Code
- High Performance, Precision like C

# Introduction
cplxendc is a programming language designed for high performance (including pointer manipulation)
- Backend only
- WebGPU for most of the interaction

HTML / CSS / JS / HTMX
- Frontend GUI that interact with cplxendc process / function scripts

# Important
Please note that cplxendc will never use webview, but rather render the damn thing
DO NOT ADD UNNECESSARY FEATURES OR BLOAT STUFFS
- Desktop Application - 2x_build_desktop - convert .cplxendc to work with C++ with WebGPU
- Web Application - 2x_build_web - convert .cplxendc to work with JS / HTML / CSS / HTMX
- Mobile Application - C++ with WebGPU (I don't if this will ever supported)

# Features
- .cplxendc / 2x build tool
- header / class / pstt (processtrait)
- process (ps) / function (fn) - first word last word
- async / const / mut
- private / public / protected

# Design System
- cplxendc_carbon - inspired from IBM Carbon (single file and minimal performance)
- cplxendc_gui - retained or imgui style
- cplxendc_gui_bind - bind against html and htmx

# Folder
User create destination themself in the .2xconfig

Require the following folder to be create:
- data (contain font, audio)  
- src (source code)
- 3rdparty (package, external, vendor)

# Build System
- 2x command (2x main.cplxendc -o output)
- .2xconfig (work like cmake but more towards npm javascript and premake)

# Include
Use the main C++ but without bullshit syntax, a oneway to write this thing 
- #include <main.cplxendc> - use for in the same folder only, not affected by global config
- #include <path/main.cplxendc> - use specific folder based on config
- #include <path/main.cplxendc> from url - use for something on web based on config

# Variable Keywords
- let / var
- int
- float
- double
- char
- string

# Expression
- mut
- const (immutable)
- async

# Comment
The standard from C and C++ is enough, don't need to reinvent stuff
- //
- /**/

# Assign Variable
Write function like

```rust
const i32_pSomething = 3 as int*;
mut myCar = new Car();
mut i32_pSomething = 3 as int*;
```

# Function

```rust
Get_Something() : {int, int} {
    return 3, 7;
}
```

# Function End
The standard from C and C++ is enough, don't need to reinvent stuff
- ; (end at) 
- ! (priority, more just means below like header, max limit 3, only usable in process or function)

# Abandoning Feature
- let / var keyword, it just too redundant