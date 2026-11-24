# 🎓 Student Management App

A responsive, modern, and clean **Student Management Web Application** built with **React**, **Tailwind CSS**, and **Vite**.

This project provides a full-featured interface for educational institutions or administrators to manage student records with real-time validation, search, filtering, editing, deletion with confirmation, and persistent storage.

---

## ✨ Features & Highlights

### 1. 📝 Create Student Form (Requirement 1)
- Form fields:
  - **Student Name** (minimum 2 characters, validated)
  - **Email** (format-validated, e.g. `user@university.edu`)
  - **Phone Number** (digit and format validation)
  - **Department** (dropdown selection across major departments)
- **Submit Button**: Validates all inputs and creates a new student entry with immediate feedback.
- Real-time inline error hints and touched-state indicators.

### 2. 📋 Display Student List (Requirement 2)
- Displays all registered students in a structured, readable format.
- Shows **Name**, **Email**, **Phone Number**, and **Department**.
- **Responsive Layout**:
  - Full-featured **data table** on desktop and tablet screens.
  - Mobile-optimized **card layout** on smaller screens to prevent horizontal overflow.
- Distinct color-coded department badges and avatar initials.

### 3. 🗑️ Delete Student (Requirement 3)
- Dedicated **Delete button** for every student record.
- **Safety Confirmation Dialog**: Displays a confirmation modal with student details before deletion to prevent accidental loss of data.
- Instant toast notification upon removal.

### 4. 🔍 Search Student (Requirement 4)
- Real-time search bar that filters students **by name** instantly as you type.
- Clear search (`X`) button for quick reset.
- Shows total matching count vs total enrolled students.

### 5. 🎨 Modern & Responsive Design (Requirement 5)
- Designed with **Tailwind CSS** using a crisp, clean slate and indigo aesthetic.
- Fully responsive across desktop, tablet, and mobile devices (320px+).
- Polished micro-interactions, accessible focus rings, and intuitive icons via `lucide-react`.

---

## 🌟 Bonus Tasks Implemented

- ✅ **Edit Student Feature**:
  - Click the **Edit** icon on any student row or card.
  - Opens a modal with pre-filled student details.
  - Validates changes and updates the record instantly.
- ✅ **Total Number of Students & Stats**:
  - Live metric cards at the top displaying:
    - **Total Students** enrolled
    - **Active Departments** count
    - **Matching Results** counter when searching or filtering
- ✅ **LocalStorage Persistence**:
  - Automatically saves all student data to browser `localStorage`.
  - Survives page refreshes and browser restarts.
  - Includes sensible default demo data on first launch with a **Reset Demo** button to restore sample data at any time.
- ✅ **Additional Enhancements**:
  - **Department Filter**: Filter students by specific department.
  - **Sort Records**: Sort alphabetically by name (A-Z, Z-A), by department, or by newest/oldest added.
  - **Export to CSV**: Download the current or filtered student list as a spreadsheet-compatible `.csv` file with one click.
  - **Toast Notifications**: Clean feedback for every action (add, edit, delete, reset, export).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### 1. Clone or Download the Repository
```bash
git clone <your-repository-url>
cd student-management-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Architecture

```
student-management-app/
├── index.html                   # HTML entry point with fonts & meta
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite configuration with Tailwind CSS v4
├── public/                      # Static public assets
└── src/
    ├── App.jsx                  # Main application orchestrator & state
    ├── main.jsx                 # React root render
    ├── index.css                # Global CSS & Tailwind imports
    ├── data/
    │   └── defaultStudents.js   # Default initial dataset & departments list
    ├── hooks/
    │   └── useLocalStorage.js   # Custom hook for localStorage persistence
    ├── utils/
    │   └── helpers.js           # Validation, avatar colors, CSV export
    └── components/
        ├── Navbar.jsx           # Top navigation with branding & quick actions
        ├── StatsOverview.jsx    # Metric cards (Total, Departments, Filtered)
        ├── StudentForm.jsx      # Create student form with field validations
        ├── SearchAndFilter.jsx  # Search by name, department filter & sort
        ├── StudentTable.jsx     # Responsive table (desktop) & cards (mobile)
        ├── EditStudentModal.jsx # Modal dialog for editing student details
        ├── DeleteConfirmModal.jsx # Confirmation dialog before deletion
        └── Toast.jsx            # Action notification banners
```

---

## 📤 Submission Instructions (GitHub)

Follow these steps to upload this project to your GitHub account:

### 1. Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "feat: complete student management app with all requirements and bonus features"
```

### 2. Create a New Repository on GitHub
1. Go to [GitHub](https://github.com/) and click **New repository** (or `+` in top right).
2. Name your repository (e.g. `student-management-app`).
3. Keep it **Public**.
4. Do **not** initialize with README or .gitignore (this project already includes them).
5. Click **Create repository**.

### 3. Link Remote and Push
```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### 4. Submit
Copy your GitHub repository URL (e.g., `https://github.com/username/student-management-app`) and submit it as requested.
