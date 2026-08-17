# Projects

A selection of projects Liam has built. Each project has a name, a short description, its status,
its type, the dates it was worked on, its GitHub repository link, an optional live link, and a list
of details about it such as the tech stack and notable features.

## My Website

This very website — Liam's personal site, built as an AI chat that responds as Liam himself in the
first person. Rather than static pages, visitors chat with an LLM that  answers questions about Liam,
grounded entirely in data returned from tools.

_May 2026 — Present_

- **Status —** Active — Maintained
- **Type —** Web app
- **GitHub —** https://github.com/liam-hales/liam-hales-dot-dev.git
- **Live —** https://liamhales.dev

### Details

- Built with TypeScript, Next.js, React and Tailwind CSS
- Uses the AI SDK with Amazon Bedrock running Claude Sonnet 4.6
- Tool and input schema validation powered by Zod
- Hosted on Vercel, with the model served through AWS Bedrock
- Tool-based architecture — each capability (skills, experience, contact and more) is a separate LLM tool
- The LLM speaks as Liam in the first person and only uses facts returned from tools
- Includes a "Manc mode" toggle that gives responses a Manchester accent and turn of phrase


## Terminal

A collection of web-based developer tools wrapped in a dev-friendly, terminal-style
interface — the kind of quick utilities a developer reaches for, all in one place.

_May 2023 — Present_

- **Status —** Active — Maintained
- **Type —** Web app
- **GitHub —** https://github.com/liam-hales/terminal.git
- **Live —** https://t.liamhales.dev

### Details

- Built with TypeScript, Next.js, React and Tailwind CSS
- Hosted on AWS Amplify with CI/CD deploys straight from the main branch
- Shared blocks backed by DynamoDB, plus file storage for sharing data between sessions
- Dev-friendly 80's retro terminal-style interface as the main way to interact with the tools


## Homebridge CLI

An interactive command-line tool for configuring and managing Homebridge straight from the
terminal, using the same API that powers the official Homebridge UI.

_Apr 2026 — Present_

- **Status —** Active — Maintained
- **Type —** Command-line interface
- **GitHub —** https://github.com/liam-hales/homebridge-cli.git

### Details

- Built with TypeScript and React, rendered in the terminal using Ink, running on Node.js
- Talks to the same API that powers the official Homebridge UI
- Interactive, terminal-based configuration interface
- Installed via a curl install script
- An unofficial, community-built tool


## Network Monitor

A self-hosted web app with server-side monitoring tools designed to monitor
your network and help you better understand it.

_Nov 2025 — Dec 2025_

- **Status —** Archived — Shift in focus
- **Type —** Web app
- **GitHub —** https://github.com/liam-hales/network-monitor.git

### Details

- Has been deprioritized due to a shift in focus on other projects
- Built with TypeScript, Next.js, React and Tailwind CSS
- Self-hosted, so all the network data stays on your own machine
- Runs scheduled speed test and ping cron jobs server-side, started automatically on boot
- Tracks throughput, latency and jitter using Cloudflare's speed test package
- Monitors uptime by pinging Cloudflare and Google DNS
- Stores every reading in an embedded LokiJS database
- Charts each metric with Recharts, with a dedicated panel per metric
- Info page showing host device and public network details, with the connection plotted on a map


## Chat

A web app created to converse with a range of different AI models,
all in one convenient unified place.

_Aug 2025 — Jan 2026_

- **Status —** Archived — Shift in focus
- **Type —** Web app
- **GitHub —** https://github.com/liam-hales/chat.git

### Details

- Has been deprioritized due to a shift in focus on other projects
- Built with TypeScript, Next.js, React and Tailwind CSS, hosted on Vercel
- Chat with 14 models from one interface — OpenAI, Anthropic, Google, xAI, DeepSeek, MiniMax and Qwen
- Every model reached through a single OpenRouter integration using the AI SDK
- Responses streamed from a server action to the client using the AI SDK's RSC streamable values
- Web search toggle backed by OpenRouter's Exa plugin, with the sources returned alongside the answer
- "Deep think" toggle that raises the model's reasoning effort, showing the reasoning and how long it took
- Custom system prompt per chat, wrapped in guardrails so a user prompt can't override the app's own rules
- Per-model message and chat length limits to keep API costs in check
- Markdown responses with GFM support and syntax-highlighted code blocks
