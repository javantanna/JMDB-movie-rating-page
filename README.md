# JMDB - Movie Search Application

## Project Overview

JMDB is a modern movie search application built with React, TypeScript, and Vite. It allows users to search for movies and view details, providing a seamless and responsive experience. This project serves as a portfolio piece to showcase skills in frontend development and API integration.

## Features

-   **Movie Search:** Search for movies using the TMDB API.
-   **Movie Details:** View essential information for each movie, including poster, title, rating, language, and release year.
-   **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.
-   **Loading & Error States:** Clear feedback for users during API calls and error handling.
-   **Debounced Search:** Efficient API calls with debounced search input to prevent excessive requests.

## Technologies Used

-   **Frontend:**
    -   [React 19.2.0](https://react.dev/)
    -   [TypeScript](https://www.typescriptlang.org/docs/)
    -   [Vite](https://vitejs.dev/)
-   **Styling:**
    -   [Tailwind CSS v4](https://tailwindcss.com/docs)
    -   [Flowbite React UI components](https://flowbite-react.com/)
-   **API Integration:**
    -   TMDB API
    -   Appwrite (Though not explicitly used for movie fetching in the provided `App.tsx`, it's listed in `AGENTS.md` for potential future use or other project aspects).
-   **Utilities:**
    -   [react-use](https://github.com/streamich/react-use) (for `useDebounce`)
-   **Code Quality:**
    -   ESLint 9

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
-   Node.js (LTS version recommended)
-   npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/JMDB.git
    cd JMDB
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Variables:**
    Create a `.env.local` file in the root of the project and add your TMDB API key:
    ```
    VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
    ```
    You can obtain a TMDB API key from [The Movie Database (TMDB) website](https://www.themoviedb.org/documentation/api).

### Running Locally

To start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

### Build for Production

To build the application for production:
```bash
npm run build
```
This will generate a `dist` folder containing the optimized production build.

### Linting & Type Checking

-   **Run ESLint on all files:**
    ```bash
    npm run lint
    ```
-   **Type check without emitting files:**
    ```bash
    npx tsc --noEmit
    ```

## Usage

![banner](https://raw.githubusercontent.com/javantanna/JMDB-movie-rating-page/git-assets/screenshot.png)

## Screenshots

(Add screenshots of your application here to showcase its features and design.)

## Acknowledgements

-   [The Movie Database (TMDB)](https://www.themoviedb.org/) for the movie data API.
-   [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/docs/), [Vite](https://vitejs.dev/) communities.
-   [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS.
-   [Flowbite React](https://flowbite-react.com/) for UI components.
