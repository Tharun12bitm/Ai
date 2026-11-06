## 2024-11-06 - Hardcoded Database Credentials

**Vulnerability:** Hardcoded database password (`Dinesh@2004`) in `db.js`.
**Learning:** Hardcoded credentials expose sensitive information directly in the source code.
**Prevention:** Use environment variables (e.g., `process.env.DB_PASSWORD`) to configure credentials securely and avoid checking them into version control.