# Student Management App

<p align="left">
  <a href="https://studentmanagerreact.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-studentmanagerreact.vercel.app-059669?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19-22c55e?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind-CSS_v4-eab308?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </a>
</p>

> **Live Deployment:** [https://studentmanagerreact.vercel.app/](https://studentmanagerreact.vercel.app/)

A responsive web application for managing student records. Built with React and Tailwind CSS featuring full CRUD operations, live search, department filtering, statistics, and browser local storage.

---

## Features

### Core Capabilities
- **Student Form:** Add students with Name, Email, Phone Number, and Department with field validation.
- **Student Directory:** View enrolled students in an adaptive layout — structured table on desktop and mobile-optimized cards on smaller screens.
- **Real-Time Search:** Instant search filter by student name.
- **Delete Record:** Remove student records with a confirmation dialog to prevent accidental deletion.
- **Responsive Theme:** Clean, modern interface designed with an earthy emerald and warm amber color palette.

### Additional Highlights
- **Edit Student:** Update existing student details through an edit modal.
- **Live Statistics:** At-a-glance metrics for total enrolled students, active departments, and search match counters.
- **Local Storage Persistence:** Automatically syncs changes to `localStorage` so data remains intact on page reload.
- **Filter & Sort:** Filter records by department and sort alphabetically or chronologically.
- **CSV Export:** Download the current student list directly to a `.csv` spreadsheet file.
- **Reset Data:** Quick option to restore default sample records for testing.

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
