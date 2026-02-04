# Blog Post Style Guide

Guidelines for writing consistent, readable blog posts on kbd3v.com.

## Frontmatter (Required)

```yaml
---
title: "Project Name: A Descriptive Subtitle"
description: "One sentence summary for SEO and social previews."
pubDate: "YYYY-MM-DD"
heroImage: "./optional-hero-image.png"  # Optional
ogImage: "/og-image.png"                # Optional, defaults to site OG image
---
```

## Post Structure

### 1. Opening Hook (1-2 paragraphs)
Start with the problem or pain point. Make it personal and relatable.

> *"I got tired of X. Most solutions are either too simple or too complex."*

### 2. Introduce the Solution (1 paragraph)
Name the project, explain what it does, and include the live link early.

> *"That's why I built **ProjectName**. It's a [brief description]."*
> 
> *"Check it out at [projectname.com](https://projectname.com)."*

### 3. Why This Project? (Bullet list)
Explain the key features/value propositions. Use bold labels:

```markdown
## Why ProjectName?

Brief intro sentence about the approach.

- **Feature One:** Explanation of benefit.
- **Feature Two:** Explanation of benefit.
- **Feature Three:** Explanation of benefit.
```

### 4. Tech Stack (Bullet list)
List the technologies used. Good for SEO and developer readers:

```markdown
## The Tech Stack

Brief sentence about your goals (fast, type-safe, etc.):

- **Framework:** Technology choice (with brief justification)
- **Database:** Technology choice
- **Auth:** Technology choice
- **Hosting:** Technology choice
```

### 5. Closing / What's Next (1-2 paragraphs)
Current status, future plans, and call to action:

> *"ProjectName is live and I'm using it for X. It's been a game-changer."*
> 
> *"If you're looking for Y, give [projectname.com](https://projectname.com) a try. I'd love to hear what you think!"*

## Formatting Rules

### Headings
- Use `##` for main sections (h2)
- Use `###` for subsections (h3)
- Keep headings short and scannable

### Links
- Link to live projects early in the post
- Repeat the link in the closing CTA
- Use descriptive link text, not "click here"

### Lists
- Use bullet lists for features and tech stacks
- Bold the label, then colon, then description
- Keep list items concise (one line if possible)

### Emphasis
- **Bold** for project names, feature labels, key terms
- *Italics* sparingly for emphasis or Norwegian translations
- `Code` for technical terms, file names, commands

## Tone

- First person ("I built", "I wanted")
- Conversational but professional
- Direct and concise - no fluff
- Show personality through specific details, not adjectives

## Length

- Target: 300-600 words
- Enough to explain the what/why/how
- Not so long that readers bounce

## Example Post

See `tidwerk.md` for a reference implementation of this structure.
