## 2024-05-18 - Hardcoded Database Credentials in db.js
**Vulnerability:** Found hardcoded database credentials (including password "Dinesh@2004") directly in the source code in `db.js`.
**Learning:** Hardcoding credentials in source code exposes sensitive information to anyone with access to the repository, potentially leading to unauthorized database access. It existed likely due to a lack of awareness about environment variables during early development.
**Prevention:** Always use environment variables (`process.env`) to configure sensitive information like database credentials. Never commit secrets to version control.
