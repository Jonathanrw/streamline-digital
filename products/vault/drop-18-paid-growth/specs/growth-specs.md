# Paid Growth Blueprint - Technical Specifications

## 1. The Ad Creative Bank
**Database: Creative Library**
- **Properties:**
  - `Creative Name`: Title.
  - `Hook`: Text.
  - `Body Copy`: Text.
  - `Asset Type`: Select (Image, Video, Carousel, Text-only).
  - `Platform`: Multiselect (Meta, LinkedIn, Google, X).
  - `Status`: Select (Idea, Draft, Active, Winner, Archive).
  - `CTR %`: Number (Percentage).
- **Views:**
  - `Winning Creative`: Filtered for `Status = Winner`.
  - `Creative Pipeline`: Board view grouped by `Status`.

## 2. Dynamic ROI Calculator
**Database: Campaign Performance**
- **Logic:**
  - `Spend`: Currency.
  - `Leads`: Number.
  - `Sales`: Number.
  - `Revenue`: Currency.
  - `CAC`: Formula (`Spend / Leads`).
  - `ROAS`: Formula (`Revenue / Spend`).
  - `ROI %`: Formula (`(Revenue - Spend) / Spend * 100`).
- **Views:**
  - `Monthly ROI`: Grouped by Month.
  - `Platform Breakdown`: Grouped by Platform.

## 3. Audience Targeting Matrix
**Database: Audience Segments**
- **Properties:**
  - `Segment Name`: Title.
  - `Platform`: Select.
  - `Type`: Select (Cold/Interest, Lookalike, Retargeting).
  - `Demographics/Keywords`: Text.
  - `Size`: Number.
  - `Offer Match`: Relation to Products database.
- **Views:**
  - `Targeting Map`: Table view sorted by Platform and Type.

## 4. Campaign Optimization Log
**Database: Optimization Journal**
- **Properties:**
  - `Date`: Date.
  - `Campaign/Ad Set`: Relation to Campaign Performance.
  - `Observation`: Text (e.g., "CAC spiked on Monday").
  - `Action Taken`: Select (Scale Budget, Kill Ad, Change Creative, No Action).
  - `Result`: Text.
- **Automation Points:**
  - Auto-link to `Campaign Performance` to see real-time data while journaling.
