# Social Media Echo - Notion Template Specs

This directory contains the technical specifications for **Strategy Drop #4: The Social Media Echo**.

## Purpose
To transform a "Hub and Spoke" content strategy into a semi-automated engine. Users publish one "Anchor" piece (Blog, YouTube, Newsletter), which then triggers the creation of tailored social posts across multiple platforms.

## Components
1. **[Platform Master Database](./specs/platform-master.md)**: Stores rules and guidelines for each social platform.
2. **[Distribution Log & AI Prompt Library](./specs/log-and-prompts.md)**: Tracks every "Echo" and houses the prompts that drive the AI repurposing.
3. **[Social Media Echo Dashboard](./specs/dashboard.md)**: The central workspace for reviewing drafts and tracking performance.

## Key Integration Point: Seamless AI Repurposing
This template is optimized for connection with tools like Make.com or Zapier. The **AI Prompt Library** serves as the "brain," allowing for highly granular control over how content is repurposed.

### What makes it seamless?
- **Token System**: Uses `{{Anchor_Content}}` placeholders for automated replacement.
- **Granular Constraints**: Allows users to set hard limits (word counts, hashtag limits) per platform.
- **Few-Shot Learning**: Built-in support for examples ensures the AI perfectly mimics the user's specific writing style.
