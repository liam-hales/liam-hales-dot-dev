# Projects

A selection of projects Liam has built. Each project has a name, a short description, its GitHub
repository link, an optional live link, and a list of details about it such as the tech stack
and notable features.

## My Website

This very website — Liam's personal site, built as an AI chat that responds as Liam himself in the
first person. Rather than static pages, visitors chat with an LLM that  answers questions about Liam,
grounded entirely in data returned from tools.

- GitHub: https://github.com/liam-hales/liam-hales-dot-dev.git
- Live: https://liamhales.dev

### Details

- Built with TypeScript, Next.js, React and Tailwind CSS
- Uses the AI SDK with Amazon Bedrock running Claude Haiku 4.5
- Tool and input schema validation powered by Zod
- Hosted on Vercel, with the model served through AWS Bedrock
- Tool-based architecture — each capability (skills, experience, contact and more) is a separate LLM tool
- The LLM speaks as Liam in the first person and only uses facts returned from tools
- Includes a "Manc mode" toggle that gives responses a Manchester accent and turn of phrase


## Terminal

A collection of web-based developer tools wrapped in a dev-friendly, terminal-style
interface — the kind of quick utilities a developer reaches for, all in one place.

- GitHub: https://github.com/liam-hales/terminal.git
- Live: https://t.liamhales.dev

### Details

- Built with TypeScript, Next.js, React and Tailwind CSS
- Hosted on AWS Amplify with CI/CD deploys straight from the main branch
- Shared blocks backed by DynamoDB, plus file storage for sharing data between sessions
- Dev-friendly 80's retro terminal-style interface as the main way to interact with the tools


## Homebridge CLI

An interactive command-line tool for configuring and managing Homebridge straight from the
terminal, using the same API that powers the official Homebridge UI.

- GitHub: https://github.com/liam-hales/homebridge-cli.git

### Details

- Built with TypeScript and React, rendered in the terminal using Ink, running on Node.js
- Talks to the same API that powers the official Homebridge UI
- Interactive, terminal-based configuration interface
- Installed via a curl install script
- An unofficial, community-built tool
