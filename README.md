# 🎬 Filmster

 - Search for Movies & More :

A modern and scalable **React** application built with **Vite**, **Redux Toolkit**, and **Bootstrap CSS**, allowing users to search movies, view details, manage watchlists, and more.

---

## 🔥 Features

- ✅ **User Authentication**: Users can log in and are automatically navigated to the home page after successful login.
- 🔍 **Movie Search**: Integrated with the [OMDB API](https://www.omdbapi.com/) to fetch and display movies based on search queries.
- 🔄 **Infinite Scrolling**: Automatically fetches more movies as the user scrolls instead of using pagination.
- 🎴 **Movie Details**: Displays full movie information on card click using the movie’s IMDb ID.
- ⭐ **Watchlist Functionality**: Users can add movies to a personalized watchlist and also remove them as needed.
- 💾 **Redux Persist**: Ensures logged-in user data and watchlist data are saved even after browser refreshes.
- ⚛️ **React + Vite**: Fast development environment with hot module replacement and optimized builds.
- 🎨 **Bootstrap CSS**: For responsive and clean UI components.
- 🧠 **Redux Toolkit**: Efficient and scalable state management.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 📦 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [Git](https://github.com/khushbooVa/Filmster)

### 🔧 Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/khushbooVa/Filmster.git

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
    ├── config/ 
        ├── utils.js
        ├── constants.js 
│   ├── redux/            # Redux slices and state management logic
        ├── thunk/  
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

