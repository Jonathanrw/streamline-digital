# Outreach Automation Hub - Technical Specifications

## 1. Outreach CRM & Lead Tracker
**Database: Outreach Pipeline**
- **Properties:**
  - `Lead Name`: Title.
  - `Company`: Text.
  - `Source`: Select (LinkedIn, Cold Email, Twitter, Referral).
  - `Status`: Select (Research, In-Queue, Contacted, Replied, Follow-up 1/2/3, Booked, Lost).
  - `Lead Score`: Formula (Weighting Fit, Value, and Engagement).
  - `Last Touch`: Date.
  - `Next Action`: Select (Research, Outreach, Follow-up, Close).
- **Views:**
  - `Active Pipeline`: Board view grouped by `Status`.
  - `Daily Outreach Queue`: Filtered for `Next Action = Outreach` OR `Follow-up`.
  - `High Value Leads`: Sorted by `Lead Score`.

## 2. Follow-up Sequence Templates
**Database: Template Library**
- **Properties:**
  - `Sequence Name`: Title (e.g., Cold Email v1, LinkedIn Soft Touch).
  - `Step`: Number (1, 2, 3...).
  - `Type`: Select (Email, LinkedIn Message, LinkedIn Connection).
  - `Subject/Headline`: Text.
  - `Body`: Markdown.
  - `Delay`: Number (Days since last touch).
- **Automation Logic:**
  - When `Status` in Pipeline changes to `Replied`, pause automatic follow-up reminders.

## 3. Lead Scoring Algorithm
**Formula Logic:**
- `Fit Score` (1-5) * 0.4
- `Value Score` (Estimated Deal Size) * 0.4
- `Engagement Score` (Response Speed/Count) * 0.2
- **Result:** Weighted Lead Score (0-100).

## 4. Conversion Dashboard
**Properties:**
- `Total Outreach`: Count of leads `Contacted`.
- `Response Rate`: `%` of Contacted leads with `Status = Replied`.
- `Meeting Rate`: `%` of Contacted leads with `Status = Booked`.
- `Average Follow-ups`: Average number of touches before `Booked`.
