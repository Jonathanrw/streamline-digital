# Agency OS: Client Onboarding & Portals Specification

## 1. Client Database
A master database to track all client relationships.

**Properties:**
*   **Client Name** (Title)
*   **Status** (Select: Lead, Active, Onboarding, Offboarding, Past Client)
*   **Account Manager** (Person)
*   **Primary Contact Email** (Email)
*   **Contract Link** (URL)
*   **Portal Link** (URL - Linked to the specific Client Portal page)
*   **Total Contract Value** (Number/Currency)
*   **Onboarding Progress** (Formula: Progress bar based on Checklist)

## 2. Onboarding Checklist Database
A task-based database specifically for onboarding new clients. Linked to the Client Database.

**Template Tasks:**
*   Kickoff meeting scheduled
*   Contract signed
*   Initial deposit paid
*   Questionnaire sent/received
*   Tools access granted (Slack, Notion, etc.)

## 3. Client Portal Template
A standardized page template that is duplicated for each client and shared with them.

**Portal Sections:**
*   **Welcome Area:** Introduction and key links.
*   **Project Tracker:** A filtered view of the master Project Database for THIS client.
*   **Deliverables Gallery:** Links to final files and assets.
*   **Feedback Hub:** A simple table for clients to leave feedback on specific items.
*   **Shared Notes:** For meeting minutes and collaborative drafting.
