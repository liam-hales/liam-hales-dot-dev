# Workflow

How Liam approaches his day-to-day work as a senior software engineer — task management,
deep work, PR culture, and AI usage.

## Daily Structure

- Works from an ADO board with pre-assigned tasks, processed in priority order
- Meetings are scheduled as needed; daily standup is fixed
- Prefers the afternoon for deep work and focused development
- Mornings tend to be lighter — better suited for reviews, comms, and planning


## Task Management

- ADO board is the source of truth for active work
- User stories and bugs are pre-assigned and worked through in priority order without self-triaging
- The individual tasks beneath them are created as work starts — automated by his `start-work` skill
- Context switching is minimised by batching similar work where possible
- Strong believer in task visibility — clear descriptions, statuses kept up to date, comments left when context is needed
- Any owned task should be self-explanatory to anyone on the team without needing a verbal handover
- A task named "WIP" with no description is the opposite of how he works


# Communication

- Microsoft Teams is the primary tool for day-to-day team interaction
- Acts as an informal knowledge-sharer — surfaces useful findings to the team rather than keeping them to himself
- Particularly keen to share new AI workflow techniques, tools, and skills


## PR Reviews

- Holds a high bar for code quality — having built entire codebases from scratch, he is protective of standards and consistency
- Reviews are thorough; reads carefully and flags issues rather than letting things slide
- Leaves comments for author to resolve rather than fixing himself, trusting them to own their code and learn from feedback


## Raising PRs

- Keeps PR descriptions deliberately brief — the code and the diff should speak for themselves
- This is intentional —PRs carry context in the commits, whereas tasks need explicit descriptions for team visibility


## AI Workflow

- Uses GitHub Copilot at work for code assistance
- Primary use cases: debugging & troubleshooting, writing and reviewing code, brainstorming architecture, and planning
- Preferred dynamic is close back-and-forth pairing — iterative and conversational rather than delegating whole tasks
- Treats AI as a collaborator, not a replacement for engineering judgement
- Actively explores new AI techniques and tools, feeding useful discoveries back to the team

### GitHub Copilot Process

A structured approach to agentic development, driven by his own custom skills built around
the ones by Matt Pocock which can be found on his [GitHub repo](https://github.com/mattpocock/skills):

1. **Plan** — Use the `/start-work` skill with a more capable model (such as Claude Opus); it wraps `/grill-with-docs` to grill him with questions until a solid, agreed plan is reached
2. **Set up** — The same skill then creates the branch and the ADO task under the parent user story or bug, links the branch to that task, assigns it to the right person and moves it to "In Progress" before implementation begins
3. **Steer** — Actively guides the agent during implementation, adjusting direction as needed — reaching for Matt's `/wait-what` skill when a model (usually Claude Opus) explains itself in a way that is hard to follow
4. **Capture** — Whenever steering is required, prompts agent to update its own `AGENTS.md` to encode that decision — then manually validate updates
5. **Ship** — Use the `/create-pr` skill to raise the PR against a set template and move the corresponding ADO task to "QA"

> The goal is a tightening loop: every intervention becomes a rule, and every rule means less intervention.

> Prefers `/start-work` over standard plan mode. Having the agent ask plenty of questions up front produces a solid plan
> from the start, rather than rectifying a flawed plan — it front-loads the thinking instead of correcting it after the fact.

> Building his own skills on top of Matt's is deliberate — the generic skills handle the thinking,
> his wrappers handle the parts specific to how his team works, so the boring steps never get skipped.


### Local vs Cloud Agents

- Currently works exclusively with local agents; adopting cloud agents is a goal for the future
- While the tooling is still new, steering a local agent feels more intuitive than letting a cloud agent run unsupervised — keeping a close hand on the wheel
- Sees continually improving agent instructions (e.g. `AGENTS.md`) as the key to building enough trust and structure to lean on cloud agents more in the future


## Personal Projects

- Builds in his spare time using Claude Code and WebStorm
- No task management or planning — just ships
- Most projects are public on his GitHub
