# Affiliate Success Hub: Promotion Calendar Spec

## 1. Promo Calendar Database [DB]
*Focus: Helping partners plan and schedule their promotions.*

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **Promo Title** | Title | e.g., "Oct Launch - Email 1" |
| **Date** | Date | Scheduled date for the post/email |
| **Status** | Status | `Idea`, `Planned`, `Scheduled`, `Done` |
| **Swipe Asset** | Relation | Link to the `Swipe File Library` |
| **Affiliate Link** | URL | Their custom tracking link |
| **Platform** | Select | `X`, `LI`, `IG`, `Email`, `Podcast` |

## 2. Views
- **Launch Roadmap**: Timeline view of upcoming promos.
- **My Schedule**: Calendar view for monthly planning.
- **Completed Promos**: Table view of everything they've sent.
