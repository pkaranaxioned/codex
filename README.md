# Codex

Codex is the codename for a checklist manager which allows the users to fine, organize and contribute to our common body of knowledge.

At Axioned, we want this to be our internal codex (manuscript) of protocols and frameworks we cannot automate just yet.

## Goals and Objectives

- Allows teams to quickly find and execute on process thereby ensuring better and standardized quality
- Improve quality by establishing and broadening our common body of knowledge
- DIY/'Reinventing the wheel' should be a conscious option vs. a norm/necessity
- Encouraging sharing and collaboration of knowledge between team members

## Features

- Content Management by MDX
- Command Palettes (for search)
- Filters for Categories and Tags
- Category and Tags pages
- Featured checklists (which are highlighted and are sticky)
- Checking off items from checklist ✅ (of course!)
- Reset (local storage) and Print (optimzing using something like [this](https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles))
- Dark mode 🤟

If applicable:

- Code syntax highlighting (using something like [Prism.js](https://prismjs.com/))

**\*Note:** the MVP does not have any user-specific customizations involved. It is all-access, GitHub managed collection of checklists.\*

## Roadmap

- ➡️ Ideation: Define and Prepare for the MVP.
- MVP: Single-tenant version for internal use at Axioned. Using Markdown.
- Future: Multi-tenant version with SaaS version, with GUI to manage checklists.

## Tech Stack

To be decided. Below are the current preferences.

- **Frontend:** [Astro](https://docs.astro.build/en/tutorial/0-introduction/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [GitHub Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github) (If we did need something more, I'd prefer to use something like [Supabase](https://supabase.com/))
- **Hosting and CI/CD:** AWS Amplify

## Inspired by

- [Atölye15's Checklist](https://github.com/atolye15/checklist)
- [The Checklist Manifesto: How to Get Things Right by Atul Gawande](https://www.goodreads.com/book/show/6667514-the-checklist-manifesto)

## Support

For support, email anurag@axioned.com or join our Slack channel [#int-codex](https://axioned.slack.com/archives/C03CRH42VGD).
