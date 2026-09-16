# AI News Automation System

An automated AI and technology news pipeline for discovering, evaluating, verifying, prioritizing, preparing, and publishing relevant updates.

This public case study documents the architecture while excluding API keys, Telegram credentials, private channel information, and operational state.

## Project Scale

- 105 Python files
- 47 test files
- Multiple discovery and publishing pipelines
- Persistent history and deduplication state
- Automated verification and quality gates

## Core Pipeline

```text
Discovery
  ↓
Candidate Collection
  ↓
Filtering & Deduplication
  ↓
Importance Evaluation
  ↓
Content Verification
  ↓
Writing
  ↓
Quality Assurance
  ↓
Publishing Queue
  ↓
Telegram Publishing
```

## Core Components

### Discovery

- broad_news_discovery.py
- future_news_discovery.py
- ai_release_discovery.py

### Selection & Prioritization

- daily_engine.py
- future_news_selector.py
- ai_release_importance_gate.py

### Writing & QA

- future_news_writer.py
- ai_release_writer.py
- future_news_qa.py
- ai_release_quality_gate.py

### Publishing & Monitoring

- future_news_to_queue.py
- publish_future_news.py
- ai_release_publisher.py
- urgent_monitor.py

## Engineering Features

- Duplicate detection
- Event lifecycle tracking
- Publication history
- Persistent queues
- Transaction-style publishing records
- AI request budgeting
- Verification stages
- Quality gates
- Automated tests

## Technology

- Python
- Telegram Bot API
- Gemini API
- Automated content pipelines
- JSON-based queues and state
- Automated testing and verification

## Security

The following are intentionally excluded from this public case study:

- API keys
- Telegram bot tokens
- Telegram channel identifiers
- Environment files
- Credentials
- Private operational data

## Status

Active development.
