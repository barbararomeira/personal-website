---
title: "Weekly Multi-Agent Reports"
date: 2026-05-20
summary: "Weekly manufacturing reports written by an AI and fact-checked by a second AI — running locally on a laptop, no cloud infrastructure to set up."
tags: ["Multi-agent", "Claude Code", "Manufacturing", "Automation"]
---

{{< project name="Weekly Multi-Agent Reports"
           tagline="Weekly manufacturing reports written by an AI and fact-checked by a second AI — running locally on a laptop, no cloud infrastructure to set up."
           problem="Customer-facing reports need to be factually right. But LLMs hallucinate — they'll confidently invent numbers, twist methodology, or call trends that aren't there. Most pipelines write the report first and (maybe) check it after — which is too late: once a wrong number is in front of a customer, the trust hit is irreversible."
           impact="Weekly reports run on autopilot, with a separate AI agent sitting between the writer and the published page. It checks every numeric claim against the underlying data before any HTML is rendered — bad claims trigger an auto-fix or halt the run, so wrong numbers don't reach customers. Built end-to-end with Claude Code and runs entirely on a laptop, so there's no cloud orchestration to maintain. Each report covers loss rate per productive hour, broken down by shift and by weekday, with the per-shift trend over time. It splits losses by cause (machine wait, material, operator absent, rework, changeover) and surfaces the LLM's top three suggested actions for the coming week."
           tech="Python, Multi-agent AI, Claude Code, Plotly, Jinja2"
           github="https://github.com/barbararomeira/weekly-automated-multi-agent-reports" >}}
{{< step icon="📊" label="Raw Data"       sub="weekly batch" >}}
{{< step icon="🧮" label="KPI Pipeline"   sub="Python · self-audit" >}}
{{< step icon="✍️"  label="Writer Agent"   sub="Sonnet · writes" >}}
{{< step icon="✅" label="Verifier Agent" sub="Haiku · checks" >}}
{{< step icon="📄" label="HTML Report"    sub="charts + narrative" >}}
{{< /project >}}
