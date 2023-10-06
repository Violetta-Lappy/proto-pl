# CPLXENDC
- Release Prefix : A
- Version Year Month: 202310
- Last Update: 20231006

# Table of Contents
- [CPLXENDC](#cplxendc)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Folder](#folder)
- [Build System](#build-system)
- [Variable Keywords](#variable-keywords)

# Features
- #include <main.js> //no bullshit
- .cplxendc / 2x build tool
- cplxendc_gui / cplxendc_carbon - inspired from IBM Carbon (single file and minimal performance) - imgui & retained
- header / class / pstt (processtrait)
- process (ps) / function (fn) - first word last word
- async / const / mut
- private / public / protected
- let something = 0;
- always end with ; (end at) or ! (priority, more just means below like header, max limit 3, only usable in process or function)

# Folder
- data
  - font
  - audio
- src
- 3rdparty (external, vendor)

# Build System
- 2x command (2x main.cplxendc -o output)
- .2xconfig (work like cmake but more towards npm javascript and premake)

# Variable Keywords
- let
- int
- float
- double
- char
- string