# Digital Event Scheduler System

## Overview

The **Digital Event Scheduler System** is a React-based web application designed to help authenticated users manage and organize events efficiently. The platform provides users with the ability to create, read, update, and delete (CRUD) events, offering an intuitive and seamless experience for event management. Whether you're organizing a conference, meeting, or social event, this application serves as a comprehensive tool for scheduling and managing events with ease.

# Purpose

1. **Streamlined Event Management:** Simplifies the process of creating, organizing, and managing events, making it easier for users to plan and track events efficiently.

2. **User-Focused Organization:** Provides authenticated users with a personalized platform to manage their events, ensuring secure access and control over event details.

3. **Collaboration and Flexibility:** Facilitates smooth collaboration for event organizers, allowing them to update, edit, or delete events as needed, ensuring events are kept up-to-date and relevant.

## Technologies used

1. React(`TypeScript`)

2. Express(JWT, CORS)

3. `Mongoose`

4. Node

## Core features

1. Added `Gemini AI` for help.
2. Authentication using firebase.

3. Add, Edit, and Read of your events.

4. Admin can manage all events.

5. Admin can manage all users.

6. Private routing(User, Admin).

7. Admin can make general user as admin.

8. Toggling between light mood and dark mood.

## Dependencies

1. TanStack
2. Axios
3. Firebase
4. Motion dev
5. Sweet Alert

## Users

1. General
   - Email: moeen@gmail.com
   - Password: 1234aA

## Live links

1. Live link: [visit](https://digital-event-scheduler-system.web.app)

## Server Repo

1. Repo: [visit](https://github.com/sakib-333/digital-event-scheduler-system-server)

## How to in local machine

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:sakib-333/digital-event-scheduler-system-client.git

   cd digital-event-scheduler-system-client
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env.local` file root of the folder and all of your secret keys.

   ```bash
   VITE_apiKey=<your-firebase-apiKey>
   VITE_authDomain=<your-firebase-authDomain>
   VITE_projectId=<your-firebase-projectId>
   VITE_storageBucket=<your-firebase-storageBucket>
   VITE_messagingSenderId=<your-firebase-messagingSenderId>
   VITE_appId=<your-firebase-appId>
   VITE_BASE_URL=<your-server-base-url>
   VITE_IMGBB_API_KEY=<your-imgbb-api-key>
   VITE_EMAILJS_SERVICE_ID=<your-emailjs-service-id>
   VITE_EMAILJS_TEMPLATE_ID=<your-emailjs-template-id>
   VITE_EMAILJS_PUBLIC_KEY=<your-emailjs-public-key>
   VITE_GEMINI_API_KEY=<your-gemini-api-key>


   ```

4. Start server

   ```bash
   npm run dev
   ```

5. Your server should now be running on `http://localhost:5173`.
