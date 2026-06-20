# Distribution Log & Prompt Library Specification

## Distribution Log Database
This database tracks the execution of the "Echo" for every anchor piece.

### Properties
- **Post Title**: `Title` (e.g., "[LI] How to scale Notion")
- **Anchor Piece**: `Relation` (Link to Content Calendar/Anchor DB)
- **Platform**: `Relation` (Link to Platform Master)
- **Status**: `Select` 
    - ⏳ Pending (Automation triggered)
    - 🤖 AI-Drafted (Needs review)
    - ✅ Approved
    - 📅 Scheduled
    - 🚀 Live
- **Scheduled Date**: `Date`
- **Live Link**: `URL`
- **Draft Content**: `Text` (Where the AI output is stored)
- **Impressions**: `Number`
- **Engagement Rate**: `Formula` (`prop("Engagements") / prop("Impressions")`)

### Views
- **Echo Pipeline**: Board view grouped by Status.
- **Weekly Schedule**: Calendar view by Scheduled Date.
- **Analytics Board**: Table view sorted by Engagement Rate.

---

## AI Prompt Library Database
Stores the logic used to repurpose content. This is the "brain" of the Echo engine.

### Properties
- **Prompt Name**: `Title` (e.g., "Blog -> LinkedIn Story")
- **System Prompt**: `Text` (The "Persona" instructions)
- **User Prompt Template**: `Text` (The specific task with tokens like `{{Anchor_Content}}`)
- **Output Format**: `Select` (Markdown, JSON, Plain Text)
- **Constraints**: `Text` (e.g., "No emojis", "Maximum 3 sentences")
- **Examples (Few-Shot)**: `Text` (Provide 1-2 examples of previous high-performing posts)
- **Platform**: `Relation` (Link to Platform Master)

### Robust Prompt Structure (Example: LinkedIn)
**System Prompt:** 
"You are a professional solopreneur sharing tactical advice. Your tone is helpful, direct, and avoids corporate jargon. You focus on efficiency and systems."

**User Prompt Template:** 
"Convert the following anchor content into a high-engagement LinkedIn post. 
1. Use a 'Problem-Agitation-Solution' framework.
2. Ensure the hook is under 10 words.
3. End with a question to the audience.

Anchor Content: {{Anchor_Content}}"

**Constraints:** 
"Maximum 200 words. No more than 3 hashtags."
