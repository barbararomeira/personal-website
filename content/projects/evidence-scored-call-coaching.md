---
title: "Evidence-Scored Call Coaching"
date: 2026-08-02
summary: "Turns sales-call transcripts into rubric scores and per-rep coaching — with a verbatim quote behind every point given or withheld, and no score at all on calls the rubric was never asking about."
flow: "Transcript → Extract Once → Scope Gate → Two Scores → Coach Brief"
icons: "📞 🧩 🚦 ⚖️ 🗣️"
blurb: "Scores sales calls against a rubric — and refuses to score the wrong ones."
tags: ["Agentic AI", "Multi-agent", "Claude Code", "Evaluation", "Sales Enablement", "Automation"]
---

{{< project name="Evidence-Scored Call Coaching"
           tagline="Turns sales-call transcripts into rubric scores and per-rep coaching — with a verbatim quote behind every point given or withheld, and no score at all on calls the rubric was never asking about."
           problem="A team agrees on a new message, rolls it out, and then nobody can answer whether it is actually being said. Reviewing a call properly takes about twenty minutes, so fifteen calls a week is five hours of attention nobody has — which means coaching runs on whichever calls a manager happened to sit in on. The obvious fix, scoring every call against a rubric, creates a worse problem: a scorer that always returns a number will mark a pricing negotiation as a failed pitch, and that number arrives with a person's name attached."
           impact="Each transcript is read once into a structured record that several consumers score without re-reading it, so the coaching and the analysis can never disagree about what was said.<br><br>Three rules keep it honest. Every point carries a verbatim quote — including the points it takes away, so a disputed score becomes a conversation about a sentence rather than about the model. Calls that were never a pitch get no score at all, rather than a low one. And every aggregate prints its sample size, with the verdict withheld below five calls.<br><br>Message coverage and buyer engagement stay two numbers, never averaged: a strong meeting with an off-message pitch is exactly the case worth catching. Only the extraction step is a model — what to say to a rep is chosen by rules, so the same evidence always produces the same coaching.<br><br>Published as a template that runs offline in one command, with no install and no API key. The rubric lives in one folder, so pointing it at support tickets, interview scorecards or teaching observations is a text edit rather than a fork."
           github="https://github.com/barbararomeira/evidence-scored-call-coaching" >}}
{{< step icon="📞" label="Transcript"    sub="any notetaker" >}}
{{< step icon="🧩" label="Extract Once"  sub="one read, quoted" >}}
{{< step icon="🚦" label="Scope Gate"    sub="pitch, or refuse" >}}
{{< step icon="⚖️"  label="Two Scores"    sub="message · engagement" >}}
{{< step icon="🗣️"  label="Coach Brief"   sub="rules, not vibes" >}}
{{< /project >}}
