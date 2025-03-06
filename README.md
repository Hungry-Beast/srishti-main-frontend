# Srishti Main Frontend

This repository contains the frontend codebase for the Srishti application.

## About Srishti

Srishti is a platform designed to facilitate the management and visualization of data related to environmental and ecological projects. It provides a user-friendly interface for researchers and practitioners to input, analyze, and present their data.

## Getting Started

These instructions will guide you through setting up and running the Srishti frontend on your local machine for development and testing purposes.

### Prerequisites

* Node.js (version >= 18.0.0)
* npm (version >= 8.0.0)

### Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/Hungry-Beast/srishti-main-frontend.git](https://github.com/Hungry-Beast/srishti-main-frontend.git)
    ```

2.  Navigate to the project directory:

    ```bash
    cd srishti-main-frontend
    ```

3.  Install dependencies using npm:

    ```bash
    npm install
    ```

### Running the Application

1.  Start the development server:

    ```bash
    npm run dev
    ```

    This will launch the application in your default web browser at `http://localhost:5173`.

### Building for Production

1.  Build the application for production:

    ```bash
    npm run build
    ```

    This will create a `dist` directory containing the optimized production build of the application.

### Deployment

The application is designed to be deployed on platforms that support static site hosting, such as Netlify, Vercel, or AWS S3.

1.  After building the application, upload the contents of the `dist` folder to your preferred hosting provider.
2.  Configure your hosting provider to serve the `index.html` file as the root of your application.

### Technologies Used

* **React:** For building the user interface.
* **TypeScript:** For static typing and improved code quality.
* **Vite:** For fast development and build processes.
* **Tailwind CSS:** For utility-first CSS styling.
* **React Router:** For client-side routing.
* **Axios:** For making HTTP requests to the backend API.
* **Zustand:** For state management.
* **React Query:** For data fetching and caching.
* **Chart.js:** For data visualization.
* **Leaflet:** For interactive maps.

### Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Ensure your code adheres to the project's coding standards (linting and formatting).
4.  Write clear and concise commit messages.
5.  Submit a pull request with a detailed description of your changes.

### License

This project is licensed under the MIT License.
