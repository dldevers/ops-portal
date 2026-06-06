# Self-Service Subscription Portal
![CI](https://github.com/dldevers/ops-portal/actions/workflows/ci.yml/badge.svg)
## Overview

Ops Portal is a sanitized DevOps/platform engineering demo that models a real internal operations workflow, replacing manual ticket-driven API changes with a self-service portal, validation, audit logging, and CI/CD automation.

The project demonstrates how platform teams can reduce operational toil by safely delegating repetitive administrative tasks to self-service workflows.
## Planned Stack
- Node.js
- Express
- SQLite or PostgreSQL
- Docker / Docker Compose
- GitHub Actions
- Kubernetes manifests
- Basic RBAC
- Audit logging
## MVP Goals
- Lookup client/user records
- View service subscriptions
- Toggle subscriptions safely
- Write all changes to an audit log
- Run locally via Docker Compose
## Running with Docker

```bash
docker compose up --build
```

The application will be available at:

```text
http://localhost:3000
```

## Operational Principles

- Design for failure
- Automate repetitive validation
- Keep recovery paths simple
- Make system state visible
- Treat reliability as a product feature

## CI/CD

This repository uses GitHub Actions to validate every push and pull request.

Current pipeline:

- Install dependencies with npm ci
- Run lint if configured
- Run test validation
- Run build validation

## Roadmap

- Add operational dashboard UI
- Add health/status endpoint documentation
- Add Docker-based local runtime instructions
- Add basic automated tests
- Add deployment workflow
- Add observability/logging examples
## Operational Principles

This project is built around the same principles used in production DevOps and SRE work:

- Design for failure
- Automate repetitive validation
- Keep recovery paths simple
- Make system state visible
- Minimize operational burden
- Treat reliability as a product feature

## CI/CD

This repository uses GitHub Actions to validate changes on every push and pull request.

Current pipeline:

- Install dependencies with `npm ci`
- Run lint validation when configured
- Run test validation
- Run build validation

The pipeline is intentionally simple at this stage. The goal is to establish a reliable validation path early so future changes can be made with fast feedback.

## Current Status

This is an actively developed prototype intended to demonstrate DevOps, operations, and reliability engineering practices.

Current capabilities:

- Node/Express application runtime
- Docker-based local runtime support
- GitHub Actions CI pipeline
- Basic npm validation scripts
- Recruiter-facing documentation foundation

## Roadmap

Planned improvements:

- Add operational dashboard UI
- Add health and status endpoint documentation
- Add service status cards
- Add incident/runbook sections
- Add basic automated tests
- Add Docker image validation in CI
- Add deployment workflow
- Add observability/logging examples