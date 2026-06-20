# Module 2: ARC Audit Engine

## Purpose
Apply the ARC Framework to the client's tasks to identify automation and optimization opportunities.

## Database: Task Audit
- **Task Name**: (e.g., "Monthly Invoicing").
- **Category**: (Dropdown: Sales, Ops, Finance, Marketing).
- **Frequency**: (Dropdown: Daily, Weekly, Monthly, Per Project).
- **Time per Instance (Mins)**: (Number).
- **Owner**: (Select: Client, VA, Automation).
- **ARC Recommendation**: (Select: **A** - Automate, **R** - Remove, **C** - Centralize, **K** - Keep As Is).

## Formulas
### Monthly Time Burden (Hours)
```notion
if(prop("Frequency") == "Daily", prop("Time per Instance (Mins)") * 22, 
if(prop("Frequency") == "Weekly", prop("Time per Instance (Mins)") * 4.3, 
if(prop("Frequency") == "Monthly", prop("Time per Instance (Mins)"), 
prop("Time per Instance (Mins)") * 1))) / 60
```

### Automation ROI (Monthly $)
- **Formula**: `prop("Monthly Time Burden (Hours)") * prop("Client Hourly Rate")`
- **Logic**: This shows the dollar value of the time that can be reclaimed.

## View: The "Big Wins" Gallery
A filtered view showing tasks with `ARC Recommendation == "Automate"` sorted by `Monthly Time Burden` descending.
