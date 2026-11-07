## 2024-11-07 - Hardcoded database credentials
**Vulnerability:** Hardcoded database password (Dinesh@2004) and user/host credentials found in db.js.
**Learning:** The database credentials were hardcoded directly in the source code instead of using environment variables, likely for ease of local development.
**Prevention:** Always use process.env to read secrets from environment variables and ensure .env files are included in .gitignore.
