# Platform Master Specification

The Platform Master database serves as the source of truth for all platform-specific constraints and stylistic preferences used by the automation engine.

## Properties
- **Platform Name**: `Title` (e.g., LinkedIn, X/Twitter, Instagram, Threads)
- **Status**: `Select` (Active, Testing, Paused)
- **Character Limit**: `Number`
- **Ideal Posting Times**: `Multi-select` (Morning, Afternoon, Evening, Weekend)
- **Tone Guidelines**: `Text` (e.g., "Professional, insightful, no hashtags in first 2 lines")
- **Repurposing Format**: `Select` (Thread, Carousel, Single Post, Short Video Script)
- **AI Prompt Template**: `Relation` (Link to Prompt Library)
- **Anchor Pieces**: `Relation` (Backlink from Anchor Content)

## Sample Data
| Platform Name | Character Limit | Tone Guidelines | Repurposing Format |
| :--- | :--- | :--- | :--- |
| **LinkedIn** | 3000 | Professional, story-driven, focus on "Value" | Single Post |
| **X/Twitter** | 280 | Punchy, controversial hooks, 🧵 formatting | Thread |
| **Instagram** | 2200 | Visual focus, use "Link in Bio" CTA | Carousel |
| **Threads** | 500 | Conversational, "low-stakes" sharing | Single Post |

## Views
- **Active Platforms**: Gallery view showing Tone Guidelines and Limits.
- **Posting Schedule**: Table view grouped by Ideal Posting Times.
