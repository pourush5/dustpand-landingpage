# DustPan — Official Landing Page & Web Showcase

Official high-performance, modern landing page for **DustPan**: a privacy-first, conservative disk triage and space recovery desktop application engineered natively for Windows 10 & 11 (x64).

[![Platform: Windows 10/11](https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011%20x64-0078d4.svg)](#)
[![License: Commercial / Free Tier](https://img.shields.io/badge/License-Community%20%7C%20Pro%20Lifetime-10b981.svg)](#)
[![Privacy: Zero Telemetry](https://img.shields.io/badge/Telemetry-Zero%20%2F%20100%25%20Local-06b6d4.svg)](#)

---

## 🌟 Key Product Pillars

DustPan replaces destructive, blind "cleaners" with conservative, non-destructive assisted triage:

- **🛡️ Zero Surprise Deletions:** Read-only analysis by default. Selected candidates move to an isolated review folder with an atomic JSON reversal manifest (`manifest.json`) that can be restored with 1 click.
- **☁️ Win32 Cloud-Hydration Guard:** Inspects Windows kernel attributes (`FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS`) to identify dehydrated offline cloud-synced files and skip them safely, preventing multi-gigabyte downloads.
- **🔍 Cryptographic Header-Hasher:** 3-stage duplicate finder (size bucketing ➔ 64 KB header SHA-256 ➔ full payload match) to catch byte-identical duplicates with different filenames.
- **💾 Inspectable Robocopy Backup Scripts:** Generates native `.bat` scripts with restartable `/Z` flags for USB drives and external SSD archiving.
- **🔒 100% Local Loopback & Zero Telemetry:** Embedded Go loopback server (`127.0.0.1:8484`); no disk metadata or file contents ever leave the machine.

---

## 💻 Landing Page Highlights & Tech Stack

Built in accordance with modern web design standards:

- **Vanilla HTML5 & CSS3:** Custom cyber-night glassmorphic design system with radial glow meshes, fluid typography (`Plus Jakarta Sans` & `JetBrains Mono`), and responsive layouts.
- **Interactive Triage Simulator:** Pure Vanilla JavaScript simulation widget letting visitors run mock scans, filter candidates (`To Delete`, `To Backup`, `Duplicates`), generate real Robocopy `.bat` scripts, and export sample CSV manifests client-side.
- **Technical Architecture Showcase:** Tabbed code viewer highlighting native Win32 attribute checking, Robocopy generation, and rollback manifests.
- **SEO & Social Metadata:** Complete Open Graph, Twitter Cards, and Schema.org `SoftwareApplication` JSON-LD structured data.

---

## 📦 Downloads & Licensing

- **Windows Installer:** Download [`DustPan-Setup-1.0.0.exe`](https://github.com/pourush5/dustpand-landingpage/releases/download/v1.0.0/DustPan-Setup-1.0.0.exe) from [GitHub Releases v1.0.0](https://github.com/pourush5/dustpand-landingpage/releases/tag/v1.0.0).
- **Pro Lifetime License ($14):** [Gumroad Product Page](https://pourush0.gumroad.com/l/dustpan)
- **Creator Portfolio:** [Pourush Pandey](https://pourushpandey.vercel.app)
- **Support Indie Dev:** [Buy Me a Coffee](https://buymeacoffee.com/pourush)

---

© 2026 Pourush Pandey. All rights reserved.
