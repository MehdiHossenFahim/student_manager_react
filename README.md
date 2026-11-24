# Student Management App

A responsive web application built with React and Tailwind CSS for managing student records. Users can add, view, search, edit, delete, and persist student information.

**Author:** Mehedi Hossen Fahim  
**Repository:** [https://github.com/MehdiHossenFahim/student_manager_react](https://github.com/MehdiHossenFahim/student_manager_react)

---

## Features

### Core Features
- **Student Form:** Add students with Name, Email, Phone Number, and Department with input validation.
- **Student List:** View all student records in a responsive table on desktop and card layout on mobile devices.
- **Search:** Search students by name in real-time.
- **Delete:** Remove student records with a confirmation dialog to avoid accidental deletion.
- **Responsive UI:** Clean and modern interface built using Tailwind CSS.

### Additional Features
- **Edit Student:** Update existing student records through an edit modal.
- **Statistics Overview:** Displays total students count, active departments, and search match counters.
- **Local Storage:** Automatically saves student records in the browser so data persists across refreshes.
- **Filter & Sort:** Filter records by department and sort alphabetically or by date added.
- **Export to CSV:** Export the student table to a CSV file.
- **Reset Demo Data:** Option to restore default sample records for easy testing.

---

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **Lucide React**

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

### 4. Build for production
```bash
npm run build
```

---

## Author

- **Mehedi Hossen Fahim**
- GitHub: [@MehdiHossenFahim](https://github.com/MehdiHossenFahim)
