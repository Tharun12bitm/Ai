## 2024-05-18 - Hardcoded Database Credentials
**Vulnerability:** Found hardcoded database credentials (including password `Dinesh@2004`) in `db.js`.
**Learning:** Hardcoding credentials in source code exposes them to anyone with access to the repository, leading to potential unauthorized database access and data breaches.
**Prevention:** Use environment variables (e.g., `process.env`) to store and access sensitive information like database passwords. Do not commit `.env` files containing actual secrets.