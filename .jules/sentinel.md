## 2026-11-03 - Hardcoded Database Credentials
**Vulnerability:** Found hardcoded database credentials (including password "Dinesh@2004") in `db.js`.
**Learning:** In simple Node.js apps without extensive build setups or standard project structure (e.g., missing package.json), developers often hardcode secrets for ease of connection during early development.
**Prevention:** Always use environment variables (`process.env.DB_PASSWORD`) or a `.env` file even in prototyping phases to avoid accidental commits of sensitive credentials.