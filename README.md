# Directus Template

A minimal self-hosted Directus 11.x setup using Node.js package installation with schema snapshot support.

---

## 🚀 Tech Stack

- Directus v11.3.5
- Node.js
- PostgreSQL (can be configured for other databases)
- Simple schema snapshot/restore system via Directus CLI

---

## 📦 Project Structure

```bash
.
├── package.json         # Project dependencies and scripts
├── .env                 # Environment variables file (not committed)
├── snapshot.yaml        # (Optional) Schema snapshot for version control
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Create `.env` file

Create an `.env` file in your root directory:

```bash
touch .env
```

Example `.env`:

```env
HOST=0.0.0.0
PORT=8055
PUBLIC_URL=http://localhost:8055

DB_CLIENT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=directus
DB_USER=directus
DB_PASSWORD=your_db_password

SECRET=your_random_secret_key

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=supersecret
```

- Update the database credentials.
- `ADMIN_EMAIL` and `ADMIN_PASSWORD` are used to create the first admin user (only on first bootstrap).
- Use a strong random string for `SECRET`.

---

## 🚀 Running Directus

### Bootstrap (First Time Only)

```bash
npm run bootstrap
```

This initializes the database schema.

### Start Server

```bash
npm run start
```

Directus will be available at:  
**http://localhost:8055**

---

## 🔄 Schema Management

### Backup Schema

```bash
npm run backup
```

This will create/update `snapshot.yaml`.

### Restore Schema

```bash
npm run restore
```

This applies the schema snapshot to your database.

---

## 🔗 Useful Links

- [Directus Documentation](https://docs.directus.io/)
- [Directus Configuration Options](https://docs.directus.io/self-hosted/configuration/)

---

## 📌 Notes

- This project uses the Directus CLI via `npx` for schema management.
- Works with any Node.js-based deployment or Docker setup.
- Can be easily extended to production with Docker Compose.

---

## ✅ Next Steps (Optional Improvements)

- Add Docker Compose
- Set up production hosting
- Add Flows, Webhooks, Extensions
- CI/CD integration

---

## 👨‍💻 Author

- Sambit @ Weframetech
---
