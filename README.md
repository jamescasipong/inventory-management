# Inventory Management System Front-End

Welcome to the front-end client for the Inventory Management System. This application is built using React and styled with Tailwind CSS. It communicates with a Laravel backend to provide a seamless inventory and sales management experience.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Sign up, log in, and manage user sessions.
- **Dashboard**: Central hub for accessing inventory, sales, and user management.
- **Inventory Management**: CRUD operations, QR code generation and scanning.
- **Sales Management**: Record sales and generate sales reports.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Getting Started

To get started with the front-end client, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/docs/getting-started/) (for managing packages)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/inventory-management-client.git
2. Navigate to the project directory:
   
   ```bash
   cd inventory-management-client

3. Install dependencies:
   
   ```bash
   npm install
   # or
   yarn install

4. Create a .env file in the root directory and add the following environment variables:
   
   ```bash
   REACT_APP_API_URL=http://your-backend-url/api

## Running the Application

1. Start the development server:
   
   ```bash
   npm start
   # or
   yarn start

2. Open your browser and navigate to http://localhost:3000 to see the application in action.


## Project Structure

Here’s a brief overview of the project structure:

- `public/`: Static assets such as the `index.html` file.
- `src/`: Source code for the application.
  - `components/`: Reusable React components.
  - `pages/`: Page components corresponding to different routes.
  - `redux/`: Redux setup including actions and reducers.
  - `services/`: Functions for API calls.
  - `styles/`: Tailwind CSS configuration and global styles.
- `App.js`: Main application component and routing setup.
- `.env`: Environment variables for configuration.
- `package.json`: Project metadata and dependencies.

## Dependencies

- **React**: Frontend framework for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Routing library for navigating between views.
- **Redux**: State management library for managing application state.
- **Axios**: HTTP client for making API requests.

## Scripts

- `npm start` or `yarn start`: Start the development server.
- `npm run build` or `yarn build`: Build the project for production.
- `npm test` or `yarn test`: Run tests.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
