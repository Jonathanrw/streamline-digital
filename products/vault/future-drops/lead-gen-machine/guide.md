# Strategy Drop #3: The Lead Gen Machine

## Overview
As you scale, you can't afford to spend time on low-quality leads. The Lead Gen Machine is a system for automatically qualifying and scoring incoming leads so you can focus your energy on the highest-value opportunities.

## The Lead Scoring System

### 1. The Qualification Form
Replace your basic contact form with a Qualification Form (Typeform, Tally, or Fillout).
*   **Essential Questions:** Budget range, Timeline, Project Type, Business Size.
*   **The Hidden Logic:** Use conditional logic to show different "Success" pages based on their answers.

### 2. The Scoring Algorithm
Assign points to specific answers:
*   **Budget:** $5k+ (50 pts), $2k-$5k (25 pts), Under $2k (0 pts).
*   **Timeline:** Immediate (20 pts), 1-3 months (10 pts), Researching (0 pts).
*   **Industry:** Ideal Fit (30 pts), Neutral (10 pts), Bad Fit (-50 pts).

### 3. Automatic Sorting
*   **Score > 70:** "Hot Lead" - Automatically send your booking link (Calendly).
*   **Score 40-70:** "Nurture" - Add to your email sequence.
*   **Score < 40:** "Low Fit" - Send a polite automated email with links to lower-cost resources or your shop.

## Notion Template Specs: The Lead Scorer

### 1. Inquiries Database
*   **Properties:** Name, Email, Source, Score (Rollup/Formula), Status (Hot, Nurture, Low Fit, Closed), Project Type.
*   **Views:**
    *   **Hot Leads Only:** Filtered by Status = Hot.
    *   **Nurture Pipeline:** Board view by current email sequence step.

### 2. Service Catalog
*   **Database:** Services.
*   **Properties:** Service Name, Base Price, Ideal Persona (Linked to CRM).
*   **Usage:** Automatically suggest a service based on lead answers.
