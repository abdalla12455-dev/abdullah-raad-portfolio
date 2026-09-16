# English Learning Automation Bot

A bilingual English-learning content automation system built around AI-assisted generation, content quality checks, novelty detection, Telegram publishing, and local publication history.

## What it does

The system prepares multiple forms of English-learning content, including:

- Vocabulary posts
- Common mistake corrections
- Reusable phrases
- Interactive quizzes
- Conversation-based learning content

## AI content pipeline

The project includes dedicated logic for:

- AI-assisted content generation
- Structured content generation
- Arabic-language cleanup
- Mixed Arabic/English layout repair
- Content quality gates
- Duplicate and similarity detection
- Phrase quality checks
- Vocabulary quality checks
- Learning-anchor extraction
- Conversation-domain detection

The AI layer uses Groq through a private API key that is not included in this repository.

## Telegram integration

The publishing workflow supports:

- Standard Telegram posts
- Telegram quiz polls
- Telegram channel publishing
- Telegram content reading through Telethon for selected workflows

Credentials, API IDs, hashes, channel identifiers, and bot tokens are intentionally excluded.

## Content history

Published content is tracked locally using SQLite.

At the time this case study was prepared, the database contained:

**150 published posts**

Stored records include:

- Post type
- Content
- Publication timestamp

This history is used by the content system to reduce repetition and compare new material against previous posts.

## Example real outputs

Recent content included:

### Vocabulary

**delay**

The system generated both noun and verb usages, Arabic explanations, and example sentences.

### Phrase

**I'll loop you in**

The post explained the phrase in Arabic and provided a practical software-project example.

### Common mistake

Incorrect:

`We arrived to the airport at 5 pm.`

Correct:

`We arrived at the airport at 5 pm.`

The system also explained the relevant preposition rule and produced another example.

### Quiz

A recent Telegram quiz asked learners to choose the correct form in:

`She is ___ horror movies; she watches them every weekend.`

The stored quiz included answer options, the correct option index, and an Arabic explanation.

## Architecture

Main components include:

- `ai_content.py`
  - AI generation
  - quality gates
  - novelty checks
  - similarity analysis
  - language-layout repair

- `bot.py`
  - Telegram publishing
  - quiz publishing

- `database.py`
  - SQLite initialization
  - publication storage
  - recent-post retrieval

- `content.py`
  - published-content retrieval
  - local content selection

- `quote_ai_preview.py`
  - Telegram reading
  - quote-based content generation
  - additional quality validation

## Technology

- Python
- Groq
- Telegram Bot API
- Telethon
- SQLite

## Public case study scope

This repository intentionally does **not** include:

- Telegram bot tokens
- Telegram API credentials
- Groq API keys
- Channel identifiers
- The private SQLite database
- Private session files
- Full production source code

This case study exists to document the system architecture and real capabilities without exposing operational credentials or private project data.
