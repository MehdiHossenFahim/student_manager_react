# Student Management App

<p align="left">
  <a href="https://studentmanagerreact.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-studentmanagerreact.vercel.app-7c3aed?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19-6366f1?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind-CSS_v4-a855f7?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </a>
</p>

> **Live Deployment:** [https://studentmanagerreact.vercel.app/](https://studentmanagerreact.vercel.app/)

A simple and responsive Student Management web application built with React and Tailwind CSS. Features full CRUD functionality, real-time search, department filtering, total student counter, and browser local storage.

---

## Features

### Core Requirements
- **Student Registration Form:** Add students with Name, Email, Phone Number, and Department with field validation.
- **Student Directory:** View enrolled students in a structured table on desktop and responsive card view on mobile.
- **Real-Time Search:** Instant search filter by student name.
- **Delete Record:** Remove student records with a confirmation dialog to prevent accidental deletion.
- **Modern & Clean UI:** Aesthetic violet and purple design built using Tailwind CSS.

### Bonus Features Implemented
- **Edit Student:** Update existing student details through an edit modal.
- **Total Students Counter:** Metric card displaying the total number of enrolled students.
- **LocalStorage Persistence:** Automatically saves records in `localStorage` so data survives browser refreshes.
- **Department Filter & Sorting:** Quick dropdown to filter by department and sort alphabetically or by date added.
- **CSV Export:** Download the student list as a spreadsheet `.csv` file.
- **Reset Demo Data:** One-click button to restore sample records for testing.

---

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

---

## Project Structure

```
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── data/
    │   └── defaultStudents.js
    ├── hooks/
    │   └── useLocalStorage.js
    ├── utils/
    │   └── helpers.js
    └── components/
        ├── Navbar.jsx
        ├── StatsOverview.jsx
        ├── StudentForm.jsx
        ├── SearchAndFilter.jsx
        ├── StudentTable.jsx
        ├── EditStudentModal.jsx
        ├── DeleteConfirmModal.jsx
        └── Toast.jsx
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/MehdiHossenFahim/student_manager_react.git
cd student_manager_react
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```

---

## Author

- **Mehedi Hossen Fahim**
- GitHub: [@MehdiHossenFahim](https://github.com/MehdiHossenFahim)
- Live App: [studentmanagerreact.vercel.app](https://studentmanagerreact.vercel.app/)
