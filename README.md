# WorkStation Manager

## Description
This project is a WorkStation Manager application built with React.js. It allows users to view and manage workstations in a workspace.

## Features
- Displays workstations with their availability status.
- Allows users to mark workstations as occupied or vacant.
- Provides an admin dashboard for managing workstations.
- Supports user authentication and logout functionality.
- Enables users to log in with their email and password.
- Allows admins to view and manage user departments.
- Allows new users to sign up for an account.

## Installation
1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd workstation-manager`
3. Install dependencies: `npm install`

## Usage
1. Start the development server: `npm start`
2. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Technologies Used
- React.js
- JavaScript
- CSS
- JSON
- Cookies (js-cookie)
- React Router DOM

## File Structure
- `src/`: Contains the source code files.
  - `components/`: Contains React components.
    - `MainPage.js`: Main component for displaying workstations and managing them.
    - `Logout.js`: Component for logging out the user.
    - `AdminDashboard.js`: Component for displaying the admin dashboard.
    - `Login.js`: Component for user authentication.
    - `DepartmentChange.js`: Component for changing user departments.
    - `Aanmelding.js`: Component for user registration.
  - `CSS/`: Contains CSS files for styling.
    - `mainpage.css`: Stylesheet for the main page.
    - `logout.css`: Stylesheet for the logout button.
  - `mockData.json`: JSON file containing mock data for workstations and users.

## Code Explanation
- `Aanmelding.js`: This file contains a component for user registration.
  - It imports `useState` and `useNavigate` from `react-router-dom`.
  - It defines state variables for email, password, and username.
  - It defines a function `handleAanmelding` to handle user registration.
  - It renders input fields for entering email, username, and password, and a button for registration.

## Credits
- This project was created by Kyandro casti.
