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
// Load the main sample collection and the classic beat loops from: github:yaxu/clean-breaks
samples(
  "https://raw.githubusercontent.com/cmbaldwin/cozy0rb/main/strudel.json?version=1"
);
samples(
  "https://raw.githubusercontent.com/cmbaldwin/cozy0rb/main/classic-beat-loops.json?version=1"
);

// Now use samples in patterns
s("vindicator/4").fit();
s("do/4").fit();
```

### Local Development

You can also develop sounds locally before deployment using @strudel/sampler:

1. Navigate to your samples directory:

```bash
cd samples
npx @strudel/sampler
```

2. Load samples from your local server in Strudel:

```javascript
samples("http://localhost:5432/");

n("<0 1 2>").s("swoop smash");
```

This allows you to test and iterate on your samples locally without needing to deploy them first.
