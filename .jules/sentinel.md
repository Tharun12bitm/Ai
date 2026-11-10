## 2026-11-10 - [Hardcoded Database Credentials]
**Vulnerability:** The application stored database credentials (`host`, `user`, `password`, `database`) in plaintext in `db.js`.
**Learning:** Hardcoding credentials exposes sensitive info if source code is leaked, making the database vulnerable to unauthorized access.
**Prevention:** Always use environment variables (`process.env.DB_*`) for credentials instead of embedding them directly in source code.
