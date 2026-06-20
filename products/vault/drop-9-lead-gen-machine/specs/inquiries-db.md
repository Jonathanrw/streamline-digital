# Inquiries Database Specification (v2 - Advanced)

## Properties
- **Name**: `Title`
- **Email**: `Email`
- **Source**: `Select` (Organic, LinkedIn, X, Cold Outreach, Referral)
- **Campaign**: `Text` (e.g., "Spring Automation Offer")
- **Budget Score**: `Select`
    - High-Ticket ($10k+) [50 pts]
    - Mid-Range ($3k-$10k) [25 pts]
    - Entry ($1k-$3k) [10 pts]
    - Micro (<$1k) [0 pts]
- **Urgency Score**: `Select`
    - This Month [30 pts]
    - 1-3 Months [15 pts]
    - Just Browsing [0 pts]
- **Strategic ICP Fit**: `Select`
    - Bullseye (Perfect Niche) [20 pts]
    - Relevant [10 pts]
    - Out of Scope [-100 pts]
- **Total Lead Score**: `Formula`
    ```notion
    (
      if(prop("Budget Score") == "High-Ticket ($10k+)", 50, if(prop("Budget Score") == "Mid-Range ($3k-$10k)", 25, if(prop("Budget Score") == "Entry ($1k-$3k)", 10, 0))) +
      if(prop("Urgency Score") == "This Month", 30, if(prop("Urgency Score") == "1-3 Months", 15, 0)) +
      if(prop("Strategic ICP Fit") == "Bullseye (Perfect Niche)", 20, if(prop("Strategic ICP Fit") == "Relevant", 10, -100))
    )
    ```
- **Tier (Formula)**: `Formula`
    ```notion
    if(prop("Total Lead Score") >= 80, "🔥 Tier 1: Immediate Booking", 
    if(prop("Total Lead Score") >= 50, "🌱 Tier 2: Sequence Nurture", 
    if(prop("Total Lead Score") >= 20, "🛡️ Tier 3: Resource Gate", "❌ Tier 4: Disqualified")))
    ```
- **Assigned Services**: `Relation` (Link to Service Catalog)
- **Lifecycle Status**: `Select` (New, Qualified, Proposal Sent, Won, Lost, Future)

## New Views
- **🏆 Top Targets**: Priority list of Tier 1 leads.
- **📈 Attribution Report**: Pivot table showing Lead Count by `Source`.
- **📅 Follow-up Board**: Grouped by `Lifecycle Status`.
