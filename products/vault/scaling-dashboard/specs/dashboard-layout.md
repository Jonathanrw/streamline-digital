# Scaling Dashboard Layout Specification

The Scaling Dashboard is the ultimate "solopreneur cockpit." It summarizes data from the Metrics Tracker and OKR databases into a single, high-fidelity view.

## Visual Components

### 1. The Vital Signs Bar (Top Row)
- **Design**: 4-column layout using Callout blocks.
- **Block 1 (Revenue)**: Title "Monthly Revenue", Icon "💰", Value (Rollup from Tracker: `Sum of Revenue`).
- **Block 2 (Profit)**: Title "Monthly Profit", Icon "📈", Value (Rollup from Tracker: `Sum of Profit`).
- **Block 3 (Hourly Rate)**: Title "Effective Hourly Rate", Icon "⏱️", Value (Rollup from Tracker: `Average Hourly Rate`).
- **Block 4 (Growth)**: Title "Email List Size", Icon "📧", Value (Rollup from Tracker: `Latest List Size`).

### 2. Strategic Objectives (Middle Row)
- **Component**: Linked Database (Quarterly Goals OKRs)
- **View**: Gallery View
- **Properties Shown**: `Progress Bar`, `Status`, `Deadline`.
- **Filter**: `Quarter` is "Current Quarter" AND `Status` is not "Completed".

### 3. Historical Trends (Bottom Row)
- **Component**: Linked Database (Monthly Metrics Tracker)
- **View**: Board View OR External Chart Block.
- **X-Axis**: Month
- **Y-Axis**: Profit
- **Note**: Recommended to use a Notion Chart (if available) or an image placeholder for a third-party tool like **Rows** to show the Profit line graph.

### 4. Navigation Links
- [View All Metrics]
- [Quarterly Planning Page]
- [Finance Archive]

## High-Fidelity Design Note
Use a "Pastel" color scheme for the OKR gallery cards (Status tags: Green for On Track, Red for At Risk) to ensure immediate visual priority recognition.
