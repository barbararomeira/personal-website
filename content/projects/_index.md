---
title: "Projects"
url: "/projects/"
summary: "Selected projects and experiments — most live on GitHub."
---

A running list of side projects, prototypes, and experiments. Most live on [GitHub](https://github.com/barbararomeira).

<div class="project-card">
  <div class="project-header">
    <h2 class="project-name">AI Manufacturing Digest</h2>
    <p class="project-tagline">A GitHub Actions workflow that scrapes 22+ AI &amp; manufacturing RSS feeds every day, deduplicates, summarises with an LLM, and posts the results to a Notion database.</p>
  </div>

  <div class="project-flow" aria-label="Project flow: RSS feeds to filter to LLM to Notion">
    <div class="flow-node">
      <span class="flow-icon">📰</span>
      <span class="flow-label">RSS Feeds</span>
      <span class="flow-sub">22+ sources</span>
    </div>
    <div class="flow-arrow"><span class="flow-dot"></span></div>
    <div class="flow-node">
      <span class="flow-icon">🔍</span>
      <span class="flow-label">Filter</span>
      <span class="flow-sub">dedupe + relevance</span>
    </div>
    <div class="flow-arrow"><span class="flow-dot" style="animation-delay:0.5s"></span></div>
    <div class="flow-node">
      <span class="flow-icon">✨</span>
      <span class="flow-label">LLM</span>
      <span class="flow-sub">OpenRouter</span>
    </div>
    <div class="flow-arrow"><span class="flow-dot" style="animation-delay:1s"></span></div>
    <div class="flow-node">
      <span class="flow-icon">📋</span>
      <span class="flow-label">Notion DB</span>
      <span class="flow-sub">daily digest</span>
    </div>
  </div>

  <div class="project-tech">
    <span class="project-tag">Python</span>
    <span class="project-tag">GitHub Actions</span>
    <span class="project-tag">LLM · OpenRouter</span>
    <span class="project-tag">Notion API</span>
    <span class="project-tag">RSS</span>
  </div>

  <a class="project-link" href="https://github.com/barbararomeira/ai-manufacturing-digest" target="_blank" rel="noopener">View on GitHub →</a>
</div>
