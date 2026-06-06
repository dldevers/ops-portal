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
