<<<<<<< HEAD
# Filmster
Search for Movies &amp; More
=======
# React Application with Vite, Tailwind CSS, and Redux Toolkit

This project is a modern React application, built with **Vite** for blazing-fast development and optimized builds. It leverages **Tailwind CSS** for a utility-first approach to styling, ensuring rapid development and responsive designs. Additionally, **Redux Toolkit** is used for efficient and scalable state management.

## Features

- **Vite** for faster builds and hot module replacement.
- **React** as the robust and popular library for building user interfaces.
- **Tailwind CSS** for efficient and customizable styling.
- **Redux Toolkit** for simplified and scalable state management.
- Scalable and maintainable architecture.

---

## Getting Started

Follow the steps below to set up and run the application locally:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [Git](https://git-scm.com/)

### Installation and Setup

1. **Clone the Repository**

   Clone the repository to your local machine using the command below:

   ```bash
   git clone https://github.com/cis-muzahid/ai-companion-frontend.git
   cd ai-companion-frontend
   ```

2. **Install Dependencies**

   Install all necessary dependencies using npm:

   ```bash
   npm install
   ```

3. **Start the Development Server**

   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:5173](http://localhost:5173).

---

### Build and Deployment

1. **Build for Production**

   Generate an optimized production build with the following command:

   ```bash
   npm run build
   ```

   The output will be available in the `dist` directory, ready for deployment.

2. **Preview the Production Build**

   Test the production build locally to ensure everything works as expected:

   ```bash
   npm run preview
   ```

---

## Project Structure

A quick overview of the project's folder structure:

```plaintext
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable React components
    ├── assets/           # Images Added here
    ├── api/ 
    ├── config/ 
        ├── utils.js
        ├── constants.js 
    ├── hooks/            #Reusable Custom hooks 
│   ├── redux/            # Redux slices and state management logic
        ├── reducers/  
        ├── actions/ 
        ├── slices/  
        ├── store/ 
│   ├── pages/            # Application pages
│   ├── styles/           # Tailwind CSS styles
│   ├── App.jsx           # Main application file
│   └── main.jsx          # Entry point
├── package.json          # Project dependencies and scripts
├── eslint.config.js      # Eslint configuration
└── vite.config.js        # Vite configuration
```

>>>>>>> a47f14f (first commit)
