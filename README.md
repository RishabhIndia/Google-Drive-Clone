# Google Drive Frontend Project

## Overview

This project is a frontend clone of Google Drive built using the React framework and Firebase for real-time data handling and storage. The application includes features such as file uploading, file listing, and switching between grid and list views.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **File Uploading**: Upload files to Firebase storage.
- **File Listing**: List uploaded files with details such as name, owner, last modified, and file size.
- **View Switching**: Switch between grid and list views for file display.
- **Real-time Updates**: Real-time file listing updates using Firebase Firestore.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Firebase**: Backend-as-a-Service (BaaS) for authentication, Firestore database, and storage.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Material-UI**: React components for faster and easier web development.
- **React Icons**: Icons library for React.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/google-drive-clone.git
   cd Google Drive

2. **Install dependencies:**
  ```sh npm install
   

3. **Setup Firebase:**
-**Go to Firebase Console.**
-Create a new project.
-Add a web app to your project.
-Copy the Firebase configuration details.
-Create a firebase.js file in the src directory and add your Firebase configuration:
```sh
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

4.**Start the development server:**
```sh
npm start

5.Open your browser and navigate to -**http://localhost:5173/**.

##Usage
-**Upload Files:** Click the "New" button to open the upload modal and select files to upload.
-**View Files:**Uploaded files will be displayed in either grid or list view.
-**Switch Views:** Use the icons on the top-right to switch between grid and list views.

##Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

##License
This project is licensed under the **Geekster** License. 

