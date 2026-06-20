# Strategy Drop #4: The Social Media Echo

## Overview
The Social Media Echo is a system designed to maximize the reach of every single piece of content you create. Instead of manually posting to each platform, we build a "Hub and Spoke" automation model where one action triggers a cascade of tailored posts across your entire social presence.

## The Automation Workflow

### 1. The Trigger (The Hub)
*   **Action:** Change status to "Published" in the Notion `Anchor Content` database.
*   **Tool:** Make.com or Zapier.

### 2. The Tailoring (The Spokes)
The automation doesn't just copy-paste. It uses AI (OpenAI/Anthropic integration) to:
*   **Twitter:** Extract 3 punchy hooks or a thread.
*   **LinkedIn:** Rewrite the intro for a professional "business" tone.
*   **Instagram:** Create a text-based carousel summary.
*   **Threads:** Format as a casual conversation starter.

### 3. The Scheduling
*   Posts are sent to a buffer/queue (Buffer, Metricool, or Hypefury) to ensure optimal timing for each platform's unique algorithm.

## Notion Template Specs: The Echo Command Center

### 1. Platform Master Database
*   **Properties:** Platform Name (LI, TW, IG, etc.), Ideal Posting Time, Tone Guidelines, Character Limits.

### 2. Distribution Log (Linked to Anchor Content)
*   **Properties:** Platform (Relation), Scheduled Date, Live Link, Reach/Engagement (Manual or API entry), Status (Pending, AI-Drafted, Scheduled, Live).

### 3. Automation "Prompt" Library
*   **Database:** Templates for the AI prompts used to repurpose content for each specific platform to maintain brand voice.
