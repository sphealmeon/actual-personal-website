---
title: FRC Scouting & Strategy App
description: A full-stack scouting, analytics, and playoff-prediction platform built for FRC Team 610's 2025 Reefscape season.
tags:
  - projects
  - nextjs
  - typescript
  - firebase
  - tailwind
---

2025 FRC season · [Source on GitHub](https://github.com/sphealmeon/610-scouting-app-2025-clone)

A Next.js/TypeScript scouting and strategy app built for FRC Team 610 during the 2025 Reefscape season, while I was serving as an executive on the team. Not a solo effort — several teammates contributed. This is a public clone of the team's private repo with API keys and credentials stripped out.

## Match scouting

Scouts step through a guided flow per match — start position, autonomous (leave, coral, algae), teleop (coral scoring, algae pickup, endgame), and human player scoring — each screen backed by its own component under `scout/`. A match review screen lets scouts double-check auto and teleop point totals before a match is submitted to Firebase, alongside pit scouting for robot capabilities collected between matches.

## Live data via The Blue Alliance

`blueAlliance/fetchMatches`, `fetchTeams`, and `fetchTeamsInMatch` pull match schedules and team rosters directly from The Blue Alliance API, so scouts are always assigned against the live event schedule rather than a manually entered one.

## Stats and analytics

The `stats` section aggregates submitted match data into per-team tables (auto, teleop, endgame, human player, points-per-game) and box plots for scoring distributions, plus a radar chart on the `compare` page for putting several teams' performance profiles side by side.

## Strategy and prediction

The `strategy` section layers prediction on top of the raw data: a match predictor and ranking-points predictor model likely outcomes, a rankings predictor projects final standings, a playoff bracket predictor projects elimination results, and a prediction-accuracy view tracks how those predictions held up against real results — feeding into a pick list for alliance selection.

**Stack:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, Firebase, The Blue Alliance API

Back to [[projects/index|Projects]].
