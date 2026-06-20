# Lead Gen Machine - Notion Template Specs

This directory contains the full technical specifications for the **Strategy Drop #3: The Lead Gen Machine**.

## Components
1. **[Inquiries Database Specification](./specs/inquiries-db.md)**: Detailed property list, scoring formula, and status logic.
2. **[Service Catalog Database Specification](./specs/service-catalog.md)**: Service structure and sample data for auto-matching.
3. **[Lead Gen Machine Dashboard](./specs/dashboard.md)**: UI layout and visualization components.

## Key Feature: The Scoring Algorithm
The template uses a specific scoring system based on Budget, Timeline, and Industry fit to automatically categorize leads as **Hot**, **Nurture**, or **Low Fit**.

### Formula Breakdown (Robust & Simple)
We use a point-based system to ensure high-value leads rise to the top:
1.  **Budget (Max 50 pts)**: Prioritizes leads with the financial capacity for our services.
2.  **Timeline (Max 20 pts)**: Identifies leads ready to start immediately vs. just researching.
3.  **Industry Fit (Max 30 pts)**: Rewards leads that fall within our "Ideal Customer Profile" (ICP).

**Resulting Categories:**
-   **🔥 Hot (70+ pts)**: High budget and ready to start. *Action: Send booking link.*
-   **🌱 Nurture (40-69 pts)**: Good fit but maybe lower budget or further out. *Action: Add to email sequence.*
-   **❌ Low Fit (<40 pts)**: Doesn't match our criteria. *Action: Refer to low-cost resources.*

## Installation Notes
Users will need to ensure their external form tool (Tally, Typeform, etc.) maps to the Select properties in the Inquiries database for the scoring to trigger automatically.
