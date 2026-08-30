---
title: EverCare
description: A camera-only vitals monitor and AI voice companion for patients experiencing memory-related distress episodes — built at DeltaHacks XII.
tags:
  - projects
  - fastapi
  - cohere
  - mongodb
  - elevenlabs
  - swift
  - nextjs
---

January 2026 — DeltaHacks XII Submission · [Source on GitHub](https://github.com/ShreyShingala/EverCare)

An AI voice companion that detects distress episodes from nothing but a phone camera and responds with a calming, context-aware voice — built for patients experiencing memory-related distress (e.g. dementia care). Collaborated with Shrey Shingala, Arulini Muthu, and Franklin Zhu

## Vitals from a camera, not a wearable

The patient-facing iOS app (Built using Swift) integrates Presage Technologies' SmartSpectra SDK to run remote photoplethysmography (rPPG) — extracting heart rate, breathing rate, and movement signals from the phone's camera feed alone, with no wearable hardware required. The app also captures the patient's voice locally and streams both the vitals payload and transcript to the backend.

## Backend: detection and response

A FastAPI backend receives the voice transcript and vitals in a single request. When the vitals signal crosses a stress threshold, the server routes the transcript through Cohere to extract what's actually being said and generate a personalized, calming reply grounded in the patient's recent conversation history. That reply is sent to ElevenLabs' text-to-speech API and streamed back to the iPhone as spoken audio, so the response reaches the patient as a voice, not text on a screen.

## Memory

Every event — transcript, vitals, generated response — is persisted to MongoDB, keyed per patient. This is what lets the assistant reference earlier conversations instead of responding to each episode in isolation.

## Caregiver dashboard

A separate Next.js/TypeScript app (shadcn/Radix UI, Tailwind, Recharts) gives caregivers a dashboard view into vitals trends and episode history over time.

**Stack:** Swift (SmartSpectra SDK), FastAPI, Cohere, Ollama/Gemma (fallback), ElevenLabs, MongoDB, Next.js/TypeScript

Back to [[projects/index|Projects]].
