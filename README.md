# Student Management App

A simple and responsive Student Management web application built with React and Tailwind CSS. This project was developed as part of a front-end assignment to manage student records (add, view, search, edit, delete, and persist data).

**Developer:** Mehedi Hossen Fahim  
**Live Repository:** [https://github.com/MehdiHossenFahim/student_manager_react](https://github.com/MehdiHossenFahim/student_manager_react)

---

## Features

### Core Requirements
1. **Student Registration Form:**
   - Add new students with Name, Email, Phone Number, and Department.
   - Includes validation for required fields, valid email format, and Bangladeshi phone numbers (`01XXXXXXXXX` or `+8801XXXXXXXXX`).
2. **Student Directory / List:**
   - Shows all enrolled students in a clean table view on desktop and responsive card view on mobile.
   - Displays Student Name, Email, Phone Number, and Department with color-coded badges.
3. **Delete Student:**
   - Delete button for each student record.
   - Shows a confirmation modal before deleting so records aren't removed by accident.
4. **Search Functionality:**
   - Instant search bar to filter students by name in real-time.
5. **Clean & Responsive UI:**
   - Built with Tailwind CSS.
   - Works smoothly on mobile phones, tablets, and desktop screens.

### Bonus Features Implemented
- **Edit Student:** Update any existing student's name, email, phone, or department via an edit modal.
- **Student Statistics:** Live count of total students, active departments, and search match counter.
- **LocalStorage Support:** All changes (adds, edits, deletes) automatically save in the browser's LocalStorage so data isn't lost on page refresh.
- **Department Filter & Sorting:** Quick filter dropdown by department and sorting options (A-Z, Z-A, newest, oldest).
- **Export to CSV:** Download the student list as a CSV file for spreadsheets.
- **Reset Demo Data:** One-click reset button to restore the initial Bangladeshi student records for easy testing.

---

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Lucide React** (icons)

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
To test the built production files locally:
```bash
npm run preview
```

---

## Author

- **Mehedi Hossen Fahim**
- GitHub: [@MehdiHossenFahim](https://github.com/MehdiHossenFahim)
