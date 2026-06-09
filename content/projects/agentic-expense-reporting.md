---
title: "Agentic Expense Reporting System"
date: 2026-06-06
summary: "A three-agent expense-reimbursement pipeline redesigned to be safe to ship — hallucination guardrails, tiered human approvals, and EU privacy controls, with a runnable version that tests offline."
tags: ["Agentic AI", "Multi-agent", "Product Leadership", "Privacy & Compliance"]
---

{{< project name="Agentic Expense Reporting System"
           tagline="Stepping in as the product leader to modernize a legacy manufacturer's expense process — turning a fast-but-risky agentic system into one that's actually safe to put in front of employees and finance."
           problem="An AI system that photographs receipts and auto-approves reimbursements is fast — but fragile in ways that cost real money. A single unflagged hallucination by the extraction agent writes a wrong number into the spreadsheet, and it cascades silently: the computation agent trusts it, the decision agent trusts that, and the company overpays or underpays with no component knowing anything went wrong. Auto-approving everything also ignores the parts a business actually cares about: high-value sign-off, fraud risk, and — once you expand into the EU — data-privacy obligations on personal and payment data."
           impact="Redesigned the system across six product decisions so it can ship without those risks. A confidence gate blocks low-confidence extractions before they reach the spreadsheet, killing the hallucination cascade at its source. A tiered approval gate routes by stakes — auto-pay under $500, one human approver above it, and two approvers from two different departments for high-risk expenses (large amount, reporting-line conflict, or high-fraud category). EU privacy controls add encryption in transit, EU-hosted retention-limited storage, minimal-field reads, and a no-training DPA clause on the third-party LLM. A final cost analysis shows where the agents' running costs actually concentrate. Delivered as a runnable Python package with 24 tests that pass with no API key and no network — so the design is demonstrably real, not just a diagram."
           github="https://github.com/barbararomeira/agentic-expense-reporting-system" >}}
{{< step icon="📸" label="Receipt"    sub="photo capture" >}}
{{< step icon="🔍" label="Extraction" sub="Agent 1 · confidence gate" >}}
{{< step icon="🧮" label="Compute"    sub="Agent 2 · policy · VAT" >}}
{{< step icon="⚖️"  label="Decision"   sub="Agent 3 · approve / reject" >}}
{{< step icon="👥" label="Approval"   sub="tiered · 1 or 2 approvers" >}}
{{< step icon="💳" label="Payment"    sub="EU · DPA-bound" >}}
{{< /project >}}
