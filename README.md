# NextASP Boilerplate

A modern, type-safe full-stack boilerplate featuring **Next.js** for the frontend and **ASP.NET Core** for the backend, integrated in a **pnpm monorepo**.

## 🚀 Key Features

- **Monorepo Architecture**: Managed with `pnpm` and `Turborepo` for efficient local development and builds.
- **ASP.NET Core Backend**: Robust, high-performance API with built-in Swagger/OpenAPI documentation.
- **Next.js Frontend**: Modern App Router, React 19, and Ant Design for rapid UI development.
- **Type-safe SDK**: Automatically generated API client using `Orval`, ensuring frontend-backend type synchronization.
- **Responsive Design**: Pre-configured with `antd` and `antd-style`.

## 📂 Project Structure

- `apps/backend`: ASP.NET Core Web API.
- `apps/web`: Next.js web application.
- `packages/sdk`: Generated API client and shared utilities.

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [pnpm](https://pnpm.io/) (v9+)
- [.NET SDK](https://dotnet.microsoft.com/download) (v9.0+)

### Installation

```bash
pnpm install
```

### Development

Run both the backend and frontend simultaneously:

```bash
pnpm dev
```

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **Swagger UI**: [http://localhost:5000/swagger](http://localhost:5000/swagger)

### 🔄 Synchronizing the SDK

When you make changes to the backend API controllers or models, you need to update the frontend SDK.

1. Ensure the backend is running (to serve `swagger.json`).
2. Run the generation script:

```bash
pnpm sdk:generate
```

This command uses `Orval` to read the Swagger definition and regenerate the TypeScript client in `packages/sdk/generated`.

## 🧪 Testing

```bash
# Frontend
pnpm --filter web lint
```

## 📜 License

ISC
