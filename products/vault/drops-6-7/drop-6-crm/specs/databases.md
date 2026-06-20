# Drop #6: Advanced CRM & Lifecycle Tracker

## Database 1: Relationship Master
- **Name**: (Client or Partner Name)
- **Category**: (Client, Prospect, Referral Partner, Influencer)
- **Status**: (Active, Nurture, Dormant, Lost)
- **Health Score**: (Formula: Calculated based on last touchpoint date and engagement frequency)
- **Total LTV**: (Rollup from Finance Tracker)
- **Source**: (Where they came from)

## Database 2: Touchpoint Log
- **Date**:
- **Type**: (Call, Email, DM, Gift)
- **Summary**:
- **Next Follow-up Date**: (Formula: Date + 30/60/90 days based on Priority)

## Database 3: Referral Network
- **Partner Name**:
- **Referral Count**: (Rollup)
- **Commission Paid**: (Number)
- **Tier**: (Bronze, Silver, Gold based on Referral Count)

## Key Formula: Relationship Health
```notion
if(dateBetween(now(), prop("Last Touchpoint"), "days") < 30, "🔥 Hot", 
if(dateBetween(now(), prop("Last Touchpoint"), "days") < 60, "🌱 Warm", 
"❄️ Cold"))
```
