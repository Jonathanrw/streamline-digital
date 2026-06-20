# Quarterly Goals (OKRs) Specification

This database manages strategic objectives and tracks progress toward "Big Wins" for the quarter.

## Properties
- **Objective**: `Title` (e.g., "Scale The Vault to 500 members")
- **Quarter**: `Select` (Q1, Q2, Q3, Q4)
- **Status**: `Select` (Not Started, In Progress, On Track, At Risk, Completed)
- **Key Results**: `Text` (Bulleted list of milestones)
- **Target Value**: `Number` (The numerical goal, e.g., 500)
- **Current Value**: `Number` (The current progress, e.g., 120)
- **Progress Bar**: `Formula`
    ```notion
    slice("▓▓                   ", 0, floor(prop("Current Value") / prop("Target Value") * 20)) + " " + format(round(prop("Current Value") / prop("Target Value") * 100)) + "%"
    ```
- **Deadline**: `Date`
- **Owner**: `Person`

## Relationships
- **Related Projects**: `Relation` (Link to the core Project Manager database)
- **Related Metrics**: `Relation` (Link to Monthly Metrics Tracker)

## Views
- **Active OKRs**: Gallery view showing the Progress Bar and Deadline.
- **Quarterly Roadmap**: Board view grouped by Quarter.
- **At Risk Objective**: List view filtered by `Status` = "At Risk".
