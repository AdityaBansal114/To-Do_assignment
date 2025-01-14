# To-Do App

A feature-rich, user-friendly to-do application built with React, Redux, and TypeScript. This app enhances task management with persistent storage, weather integration, and login/signup functionality. TailwindCSS is used for an intuitive and responsive user interface.

## Features

### Core Functionalities
- **Task Management**: Add, edit, delete, and mark tasks as complete.
- **Outdoor Tasks**: Mark tasks as outdoor to get weather-based recommendations.
- **Persistent Storage**: Tasks are saved locally using local storage, ensuring no data loss on page reloads.

### Weather Integration
- **Current Weather**: Displays real-time weather for the user’s location.
- **Outdoor Task Recommendations**: Facilitates task prioritization based on weather conditions.

### Authentication
- **Login/Signup**: Secure authentication system with sign-up and login functionality.
- **Session Management**: Keeps the user logged in until they explicitly log out.

### UI and Responsiveness
- **TailwindCSS**: Provides a sleek, mobile-friendly interface.
- **Dynamic Views**: Ensures a consistent and pleasant user experience across all devices.

## Tech Stack

### Frontend
- **React**: Component-based library for building the user interface.
- **Redux**: Manages application state efficiently.
- **TypeScript**: Adds static typing for better code quality and maintainability.
- **TailwindCSS**: Simplifies styling with utility-first CSS classes.

### Additional Tools
- **Local Storage**: Ensures task persistence without a backend.
- **OpenWeather API**: Fetches real-time weather data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repository
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the `.env` file:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     REACT_APP_WEATHER_API_KEY=your_openweather_api_key
     ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

1. **Authentication**:
   - Sign up with a new account or log in with existing credentials.
2. **Task Management**:
   - Add new tasks and specify if they are outdoor tasks.
   - View tasks categorized by their completion status.
   - Edit or delete tasks as needed.
3. **Weather Integration**:
   - Check the current weather conditions displayed in the header.
   - Prioritize outdoor tasks based on the weather forecast.

## Screenshots


![Task List](path/to/screenshot1.png)
![Weather Integration](path/to/screenshot2.png)

## Folder Structure

```plaintext
src/
├── components/        # Reusable UI components
├── pages/             # Page-level components
├── redux/             # Redux slices and store setup
├── utils/             # Helper functions and utilities
├── App.tsx            # Root component
├── index.tsx          # Application entry point
└── styles/            # TailwindCSS configurations
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.


## Acknowledgments

- **OpenWeather API**: For providing real-time weather data.
- **TailwindCSS**: For the responsive and elegant design framework.

---

Feel free to customize this README to suit your repository. If you have additional features or details you'd like included, let me know!

