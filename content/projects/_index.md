---
title: "Projects"
url: "/projects/"
summary: "Selected projects and experiments — most live on GitHub."
---

A running list of side projects, prototypes, and experiments. Most live on [GitHub](https://github.com/barbararomeira).

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

{{< project name="AI Manufacturing Digest"
           tagline="A daily news bot for AI in manufacturing — read everything for me, every morning."
           problem="To stay current on how AI is being used in factories, you need to read 20+ blogs and newsletters every day. Most of what's out there repeats the same story across sites, or is just company marketing dressed as news. It takes too much time, and the real signal gets lost in the noise."
           impact="Reading 20+ sites used to take a real chunk of the morning, and most of what I read was repetition or marketing. Now a quick scan of one curated Notion page surfaces only the stories that actually move the field — real deployments, real outcomes. Over time, the database becomes a searchable archive of AI-in-manufacturing trends I can mine when client conversations or product decisions need recent evidence."
           tech="Python, GitHub Actions, LLM · OpenRouter, Notion API, RSS"
           github="https://github.com/barbararomeira/ai-manufacturing-digest" >}}
{{< step icon="📰" label="RSS Feeds"  sub="22+ sources" >}}
{{< step icon="🔍" label="Filter"     sub="dedupe + relevance" >}}
{{< step icon="✨" label="LLM"        sub="OpenRouter" >}}
{{< step icon="📋" label="Notion DB"  sub="daily digest" >}}
{{< /project >}}
