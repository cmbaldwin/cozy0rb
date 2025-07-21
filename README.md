# Cozy0rb - Strudel Sample Collection & Patterns

A curated collection of audio samples and live coding patterns for [Strudel](https://strudel.cc), the web-based live coding environment for algorithmic music.

Developed for Define Games' "Wait & Bleed" project, work in progress.

## 🎵 What is this?

This repository serves as both:

- **Sample Library**: A collection of classic breakbeats, funk samples, and electronic sounds from github:yaxu/clean-breaks
- **Pattern Archive**: Saved Strudel compositions and experiments
- **GitHub Pages Site**: Direct integration with Strudel for easy sample loading

## 🚀 Getting Started

### Quick Start with Strudel

1. Go to [strudel.cc](https://strudel.cc)
2. Load samples from this repo in your Strudel code:

```javascript
// Load the main sample collection
samples(
  "https://raw.githubusercontent.com/cmbaldwin/cozy0rb/main/strudel.json?version=1"
);

// Or load the original collection
samples(
  "https://raw.githubusercontent.com/cmbaldwin/cozy0rb/main/strudel-original.json?version=1"
);

// Now use samples in your patterns
s("vindicator/4").fit();
s("do/4").fit();
```
