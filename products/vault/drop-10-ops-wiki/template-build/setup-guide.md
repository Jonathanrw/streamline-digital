# Operations Wiki & SOP Hub: Setup Guide

## Step 1: Create the Core Databases
Create the following four databases in your Notion workspace using the schemas provided in the `databases/` folder:
1. **Internal Wiki**
2. **SOP Library**
3. **Team Onboarding**
4. **Tech Stack Directory**

*Tip: Use the 'Table' view as your default when setting up properties.*

## Step 2: Configure Relations
Ensure the following relations are established:
- **SOP Library** ↔ **Internal Wiki**: Name the property "Related Article".
- **Team Onboarding** ↔ **Onboarding Tasks**: (Onboarding Tasks is a sub-database for specific steps).
- **Onboarding Tasks** ↔ **Internal Wiki/SOP Library**: To link training materials directly to onboarding steps.

## Step 3: Build the Dashboard
1. Create a new page titled "Operations Hub".
2. Create three rows using `/columns`.
3. Use `/link to database` to bring in the views specified in the `dashboards/main-hub.md` blueprint.

## Step 4: Populate Your Content
- **Start with Category Templates**: Set up database templates for each Category (e.g., a "Marketing Wiki" template with a specific icon).
- **The First 7 Days**: Tag your most essential articles with "Onboarding" to ensure they show up in the new hire view.

## Customization Tips
- **Branding**: Update the cover images and icons to match your agency's brand.
- **Automation**: Use Notion Buttons to quickly add a new SOP or start an onboarding process for a new hire.
