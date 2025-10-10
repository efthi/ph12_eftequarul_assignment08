````md
# 🦸‍♂️ Hero App — HERO IO  
### 🚀 Assignment 08 by **Efthaqur Alam (PH-B12)**

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Programming%20Hero%20Assignment-2ea44f?logo=book&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Completed-success?logo=check&logoColor=white)](#)


---

## 🌐 Live Demo

| Platform | Link |
|-----------|------|
| 🌍 **Netlify** | [https://appzone-ea.netlify.app/](https://appzone-ea.netlify.app/) |
| ⚡ **Surge** | [https://appzone-ea.surge.sh/](https://appzone-ea.surge.sh/) |
| ☁️ **Cloudflare Pages** | [https://appzone-ea.pages.dev/](https://appzone-ea.pages.dev/) |

---

## 🧾 Project Overview

**Hero App (HERO IO)** হলো একটি আধুনিক React ভিত্তিক অ্যাপ্লিকেশন যেখানে ইউজার ইন্টারঅ্যাকশন, ডেটা ফেচিং, এবং ডাইনামিক ভিজ্যুয়ালাইজেশন ফিচার অন্তর্ভুক্ত করা হয়েছে।  
এটি **Programming Hero Web Development Batch 12** এর অ্যাসাইনমেন্ট হিসেবে তৈরি।

---

## ✨ Key Features

✅ Modular Component-based React Architecture  
✅ Fully Responsive Layout with **Tailwind CSS** & **DaisyUI**  
✅ Smooth Navigation via **React Router**  
✅ Live Data Fetch using **Axios API**  
✅ Interactive **Charts** via Recharts  
✅ Toast Notifications with **React Toastify**  
✅ Clean & Optimized Code with **ESLint**

---

## ⚙️ Technologies Used

| Category | Tools & Libraries |
|-----------|------------------|
| ⚛️ **Frontend Framework** | React 19.1.1 |
| 🎨 **Styling** | Tailwind CSS 4.1.14, DaisyUI 5.1.28 |
| 🧭 **Routing** | React Router 7.9.3 |
| 📡 **API Handling** | Axios 1.12.2 |
| 📊 **Data Visualization** | Recharts 3.2.1 |
| 🔔 **Notification** | React Toastify 11.0.5 |
| 🧩 **Icons** | React Icons 5.5.0 |
| ⚙️ **Build Tool** | Vite 7.1.7 |
| 🧰 **Code Quality** | ESLint |

---

## 🧑‍💻 Installation & Local Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/appzone-ea.git

# 2️⃣ Navigate to the project directory
cd appzone-ea

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev
````

🔗 Then visit: **[http://localhost:5173](http://localhost:5173)**

---

## 📁 Folder Structure (Overview)

```bash
appzone-ea/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── hooks/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🌱 Future Improvements

* 🔐 Add User Authentication (Firebase/JWT)
* 🌓 Dark / Light Theme Toggle
* 🌍 Multi-language Support
* ⚡ Performance Optimization with React.lazy() and Suspense

---

## 👨‍💻 Author

**Efthaqur Alam**
Batch: PH-B12
🎓 Assignment for: *Programming Hero Web Development Course*
🌐 [Portfolio](https://efthaqur.mynetwall.info)
🐙 [GitHub](https://github.com/efthi)

---

## 📜 License

This project is developed for educational purposes under the
**Programming Hero Web Development Course (Batch 12)**.
All rights reserved © 2025 **Efthaqur Alam**

---



# 🦸‍♂️ Assignment 008 — Hero IO

### 📅 Deadline For 60 marks: 09 October , 2025 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 10 October , 2025 (11:59 pm⏱️)

### 📅 Deadline For 30 marks: Any time after 10 October , 2025.

---

# 🐣 Basic Requirements

- Make the Application Responsive for All the Devices
- Do minimum 5 commits to your github Repository
- Give a meaning full name to your application
- Make Sure on Production Application is error Free
- Add a Readme.md with App Name , Description & Technologies

---

# 🔧 Main Requirements

## 1. 🧱 Layout & Data Design

#### Header

- The header must include:
  - A logo.on clicking it user will be navigated to home page.
  - A navigation bar with links [ `home` , `apps` , `installation` ] and active route indication.
  - A `Contribution` button as Figma linking to the your GitHub profile.

#### Footer

- Design a custom footer using your own creativity and style.

#### Data

- Create an JSON Array of minimum 12-20 objects for app data using the following structure:
  ```js
  {
    image: string;
    title: string;
    companyName: string;
    id: number;
    description: string;
    size: number;
    reviews: number;
    ratingAvg: number;
    downloads: number;
    ratings: [
      { name: "1 star"; count: number },
      { name: "2 star"; count: number },
      { name: "3 star"; count: number },
      { name: "4 star"; count: number },
      { name: "5 star"; count: number }
    ];
  }
  ```

---

## 2. 🏠 Home Page

#### Banner

- Must contain a center-aligned heading, text, and two buttons.
- “App Store” button will redirect to the App Store.
- “Play Store” button will redirect to the Play Store.

#### States Section

- Must contain three state cards as shown in Figma.
- Each state should have a title and a unique background color or style.

#### Top Apps Section

- Display eight apps in a four-column layout.
- Each app card should display:
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on a card should navigate the user to the App Details page.
- Include a “Show All” button that navigates to the All Apps page.

---

## 3.📱 All Apps Page

#### Title Section

- Include a title and subtitle following the Figma design.

#### Search and States

- Display the total number of apps on the left and a search bar on the right.
- `Implement live search functionality`
  - filters apps by title as the user types.
  - Search will be case-insensitive
  - If no app matches, display a “No App Found” message.

#### App Section

- Display all apps from the JSON data.
- Each app card should include:
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on an app card should navigate to the App Details page.

---

## 4.📊 App Details Page

#### App Information

- Show app image on the left.
- Display app details such as title, rating, downloads, reviews.
- Include an `Install button`:
  - When clicked, it becomes disabled and the text changes to `Installed`.
  - Show a Success Toast after App installed

#### App Review Chart

- Implement a responsive chart using the **Recharts** library.
- Visualize the app’s review data as shown in the Figma design.

#### App Description

- Show the app details in description section as per Figma layout.

---

## 5. Error Page & Others

- Create a custom error page for invalid routes.

- Show a loading animation during: `Challenge Part`  

  - Page navigation. 
  - Search operation.

- Show a Relevant Not Found message app not found in app details section.

- Ensure that reloading any route after deployment does not cause an error.

---

# Challenge Requirement

### LocalStorage Features

#### App Installation

- When the “Install” button is clicked:
  - Save the app to localStorage.
  - If the app is already installed, show a disabled button with the text `Installed`.

#### My Installation Page

- Create a page named “My Installation” following the Figma design.
- Display all installed apps as cards.
- Include an Uninstall button:
  - Clicking it
    - removes the app from both the UI and localStorage.
    - Show an Toast with some relevant message

---

### Sort by Downloads

- Implement a dropdown for sorting apps by download count.
- The dropdown must include:
  - **High-Low:** Sort apps in ascending order by downloads.
  - **Low-High:** Sort apps in descending order by downloads.

---

### Loading Animation

- Show a loading animation during: 
  - Page navigation. 
  - Search operation

---

## 🚀 Deployment

- Deploy the project to Cloudflare / Netlify / Vercel.
- Reloading from any route must work correctly without showing a 404 error.

---
