# Inquiries Database Specification

## Properties
- **Name**: `Title`
- **Email**: `Email`
- **Source**: `Select` (LinkedIn, Twitter, Website, Referral)
- **Budget Range**: `Select`
    - Over $5k (Value: 50)
    - $2k - $5k (Value: 25)
    - Under $2k (Value: 0)
- **Timeline**: `Select`
    - Immediate (Value: 20)
    - 1-3 Months (Value: 10)
    - Researching (Value: 0)
- **Industry Fit**: `Select`
    - Ideal Fit (Value: 30)
    - Neutral (Value: 10)
    - Bad Fit (Value: -50)
- **Score (Hidden Formula)**: `Formula`
    ```notion
    (
      if(prop("Budget Range") == "Over $5k", 50, if(prop("Budget Range") == "$2k - $5k", 25, 0)) +
      if(prop("Timeline") == "Immediate", 20, if(prop("Timeline") == "1-3 Months", 10, 0)) +
      if(prop("Industry Fit") == "Ideal Fit", 30, if(prop("Industry Fit") == "Neutral", 10, -50))
    )
    ```
- **Status (Formula)**: `Formula`
    ```notion
    if(prop("Score") >= 70, "🔥 Hot Lead", if(prop("Score") >= 40, "🌱 Nurture", "❌ Low Fit"))
    ```
- **Next Action**: `Select` (Book Call, Send Nurture, Resource Guide)
- **Project Type**: `Select` (Automation Setup, System Audit, Custom Build)
- **Assigned Services**: `Relation` (Link to Service Catalog)

## Views
- **🔥 Hot Leads**: Table view filtered by `Status` contains "Hot". Sorted by `Score` descending.
- **🌱 Nurture Pipeline**: Board view grouped by `Next Action`.
- **📥 All Inquiries**: List view sorted by `Date Created` descending.
