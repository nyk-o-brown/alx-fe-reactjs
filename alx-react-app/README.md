# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Key Files and Directories

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **eslint.config.js**: Configuration for ESLint, including plugins for React and hooks.
- **index.html**: The main HTML file that includes the root div for the React app.
- **package.json**: Lists the project dependencies and scripts.
- **public/**: Contains static assets like the Vite logo.
- **src/**: Contains the source code for the React application.
  - **App.css**: CSS file for styling the App component.
  - **App.jsx**: Main React component of the application.
  - **assets/**: Contains image assets like the React logo.
  - **index.css**: Global CSS styles.
  - **main.jsx**: Entry point for the React application, rendering the App component.
  - **WelcomeMessage.jsx**: A React component used in the App component.
- **vite.config.js**: Configuration file for Vite.

## Dependencies

- **react**: The core React library.
- **react-dom**: The React library for DOM manipulation.
- **@vitejs/plugin-react**: Vite plugin for React, enabling Fast Refresh.
- **eslint**: Linter for identifying and reporting on patterns in JavaScript.
- **eslint-plugin-react**: ESLint plugin for React.
- **eslint-plugin-react-hooks**: ESLint plugin for React hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Fast Refresh.
- **@eslint/js**: ESLint configuration for JavaScript.
- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **globals**: Global variables for ESLint.

## Scripts

- **dev**: Starts the development server using Vite.
- **build**: Builds the project for production using Vite.
- **lint**: Runs ESLint to check for code quality issues.
- **preview**: Previews the production build using Vite.

## Getting Started

1. Install dependencies:
   ```sh
   npm install