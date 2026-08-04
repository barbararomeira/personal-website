---
title: "Product Discovery Agents"
date: 2026-08-04
summary: "Roadmap validation, customer feedback, new feature requests and gaps — read out of every customer-facing call and kept in one accumulating backlog, ranked by who asked, how strongly they said it, and how many times it came back."
flow: "Capture → Structure → Signal Matrix → Briefs → You Decide"
icons: "💬 📄 📊 📝 🧑"
blurb: "Roadmap validation, feature requests and gaps — evidence, not whoever remembers loudest."
tags: ["Agentic AI", "Multi-agent", "Claude Code", "Product Management", "Product Discovery", "Automation"]
---

{{< project name="Product Discovery Agents"
           tagline="Reads every customer-facing call and keeps one accumulating backlog, ranked by who asked, how strongly they said it, and how many times it came back — with their own words attached, and no score the agents made up."
           problem="Validating a roadmap used to mean a very large coffee and an afternoon of \"do you remember when they said…\" — product, sales, customer success and the CI engineers in a room, reconstructing from memory what customers had actually asked for. Or from dozens of transcripts, if there were a week for it. There never was.<br><br>The arithmetic is why. Five customer-facing people running about thirty calls a week generate roughly 790 hours of conversation a year — near 100 working days of listening. Nobody has that, so the calls go unreviewed and the signal is not triaged, it is lost. What survives is whatever stuck in someone's memory, which means prioritization quietly becomes an argument about recall dressed up as an argument about strategy. It works at five people. It stops working the moment you scale, and nothing announces the moment it stops."
           impact="One file that accumulates, instead of a report regenerated each day. Each row is a real customer need carrying who asked, how strongly, how many times, and a verbatim quote per account.<br><br>Ranking is evidence only: the sum of stated importances multiplied by mentions. Importance is 1 or 2 and the test is whether the customer attached a consequence — a deal condition, a compliance gate, a number they quantified. An earlier version had the agent estimate impact and effort; both were deleted. Impact re-encoded what the customer had already said, and effort was a guess at something only engineers know. Effort now enters where it belongs: in a room, with the people who will build the thing.<br><br>The coordinator never reads a transcript — that fans out to a cheap model in parallel — and never delegates the merge, because deciding \"this is the same need as that row\" is the one step that can silently corrupt the evidence base. When it cannot tell, it refuses to guess and asks. A ledger of processed calls makes runs idempotent, so a missed day heals itself rather than being lost.<br><br>The unplanned part turned out to be the most useful: because the same system knows what customers asked and what is actually on the roadmap, it keeps catching promises made ahead of it — the delivery date nobody wrote down, the feature described as in development that exists on no plan."
           github="https://github.com/barbararomeira/product-discovery-agents" >}}
{{< step icon="💬" label="Capture"       sub="every external call" >}}
{{< step icon="📄" label="Structure"     sub="signals + quotes" >}}
{{< step icon="📊" label="Signal Matrix" sub="evidence, not opinion" >}}
{{< step icon="📝" label="Briefs"        sub="only past the bar" >}}
{{< step icon="🧑" label="You Decide"    sub="the loop closes here" >}}
{{< /project >}}
