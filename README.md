## Next.js 15 Starter

- Created by [Hélio Fila (@h3lio2f)](https://github.com/h3lio2f)

### Key Libraries

This starter uses the following main libraries:

- Next.js 15
- React 19 rc
- TypeScript
- TanStack React Query
- Axios
- Next-auth
- Next-intl
- Framer Motion
- Tailwind CSS
- Class Variance Authority & clsx
- Lucide React
- React Hot Toast
- React Shimmer Effects

### Getting Started

To run this project locally:

1. Clone the repository
   ```bash
   git clone https://github.com/H3lio2f/Next.js-15-Starter.git
   cd nextjs-14-starter
   ```

2. Install dependencies
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using yarn:
   ```bash
   yarn
   ```
   
   Using pnpm:
   ```bash
   pnpm install
   ```

3. Start the development server
   
   Using npm:
   ```bash
   npm run dev
   ```
   
   Using yarn:
   ```bash
   yarn dev
   ```
   
   Using pnpm:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Folder Structure

This starter comes with a pre-configured folder structure designed to facilitate clean and efficient code organization:

- `app/`: Contains the main application code, including pages and API routes.
  - `_components/`: Reusable React components for the specific page/route.
  - `_lib/`: Shared logic, configurations, and API-related functions for the specific page/route:
    - `actions.ts`: Server actions for Next.js
    - `mutations.ts`: Mutation functions for React Query
    - `queries.ts`: Query functions for React Query
- `components/`: Reusable React components.
- `helpers/`: Utility functions and helper methods.
- `lib/`: Shared logic and configurations.
- `providers/`: React context providers for state management.
- `services/`: API service functions and data fetching logic.
- `styles/`: Global styles and Tailwind CSS configuration.
- `types/`: TypeScript type definitions.
- `public/`: Static assets like images and fonts.

This structure aims to promote modularity, maintainability, and separation of concerns in your Next.js project. It provides clear locations for different aspects of your application, making it easier to navigate and scale your codebase.