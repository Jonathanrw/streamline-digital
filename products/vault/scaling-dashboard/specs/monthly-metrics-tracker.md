# Monthly Metrics Tracker Specification

This database tracks the high-level health of the solopreneur business on a month-to-month basis.

## Properties
- **Month**: `Title` (e.g., "June 2026")
- **Year**: `Select` (2025, 2026, 2027)
- **Revenue (Total)**: `Number` (Currency)
- **Expenses (Total)**: `Number` (Currency)
- **Hours Worked**: `Number`
- **New Leads**: `Number`
- **New Customers**: `Number`
- **Ad Spend**: `Number` (Currency)
- **Email List Size**: `Number`

## Formulas
- **Profit**: `Formula`
    ```notion
    prop("Revenue (Total)") - prop("Expenses (Total)")
    ```
- **Profit Margin %**: `Formula`
    ```notion
    round(prop("Profit") / prop("Revenue (Total)") * 100) / 100
    ```
- **Real Hourly Rate**: `Formula`
    ```notion
    prop("Profit") / prop("Hours Worked")
    ```
- **Conversion Rate**: `Formula`
    ```notion
    if(prop("New Leads") > 0, prop("New Customers") / prop("New Leads"), 0)
    ```
- **CAC (Customer Acquisition Cost)**: `Formula`
    ```notion
    if(prop("New Customers") > 0, prop("Ad Spend") / prop("New Customers"), 0)
    ```

## Views
- **Monthly Growth Table**: Shows Revenue, Profit, and Hourly Rate.
- **Conversion Analytics**: Shows New Leads, Customers, and Conversion Rate.
- **Year-over-Year**: Grouped by Year.
