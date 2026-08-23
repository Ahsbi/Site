# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository has no code yet, but `.llm/prd.md` now contains a PRD for the intended project: a marketing/landing site for a BI and data-automation consultancy targeting accounting firms. The PRD specifies React, Next.js, TypeScript, and Tailwind CSS as the intended stack, a mobile-first responsive design, and a component-based design system — but none of that has been scaffolded yet. `README.md` remains an empty placeholder.

Since there is no build system, package manager, or test suite in place yet, do not assume the stack from the PRD is already set up — check for `package.json` or other config files before proposing commands, and consult `.llm/prd.md` for product/design requirements when scaffolding the project.

Once real code and tooling are added, update this file with:
- Build/lint/test commands (including how to run a single test)
- The high-level architecture and how major pieces fit together
