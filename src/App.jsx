import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import StatsOverview from './components/StatsOverview';
import StudentForm from './components/StudentForm';
import SearchAndFilter from './components/SearchAndFilter';
import StudentTable from './components/StudentTable';
import EditStudentModal from './components/EditStudentModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import Toast from './components/Toast';
import { useLocalStorage } from './hooks/useLocalStorage';
import { DEFAULT_STUDENTS } from './data/defaultStudents';
import { exportToCSV } from './utils/helpers';

const CURRENT_YEAR = new Date().getFullYear();

export default function App() {
  // LocalStorage state persistence (Bonus Task)
  const [students, setStudents] = useLocalStorage('student_mgmt_records_v1', DEFAULT_STUDENTS);

  // Search & Filter state (Requirement 4)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');

  // Modals state (Bonus Task & Requirement 3)
  const [editingStudent, setEditingStudent] = useState(null);
  const [deletingStudent, setDeletingStudent] = useState(null);

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Filter and sort students
  const filteredStudents = useMemo(() => {
    return students
      .filter((student) => {
        // Requirement 4: Search students by name
        const matchesName = student.name
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase());

        // Department filter
        const matchesDept = selectedDepartment
          ? student.department.toLowerCase() === selectedDepartment.toLowerCase()
          : true;

        return matchesName && matchesDept;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'name-desc') {
          return b.name.localeCompare(a.name);
        }
        if (sortBy === 'dept-asc') {
          return a.department.localeCompare(b.department);
        }
        if (sortBy === 'newest') {
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        }
        if (sortBy === 'oldest') {
          return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
        }
        return 0;
      });
  }, [students, searchQuery, selectedDepartment, sortBy]);

  // Statistics (Bonus Task: Show total number of students)
  const totalStudents = students.length;
  const uniqueDepartmentsCount = useMemo(() => {
    const set = new Set(students.map((s) => s.department).filter(Boolean));
    return set.size;
  }, [students]);

  const isFiltering = Boolean(searchQuery.trim() || selectedDepartment);

  // 1. Add Student Handler (Requirement 1)
  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [newStudent, ...prev]);
    showToast(`Student "${newStudent.name}" was added successfully!`, 'success');
  };

  // 2. Edit Student Handler (Bonus Task)
  const handleSaveEdit = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
    setEditingStudent(null);
    showToast(`Updated "${updatedStudent.name}" successfully!`, 'success');
  };

  // 3. Delete Student Handler (Requirement 3)
  const handleConfirmDelete = (studentId) => {
    const studentToDelete = students.find((s) => s.id === studentId);
    setStudents((prev) => prev.filter((s) => s.id !== studentId));
    setDeletingStudent(null);
    showToast(
      `Student "${studentToDelete ? studentToDelete.name : 'Record'}" was removed.`,
      'info'
    );
  };

  // Reset to Demo Data
  const handleResetDemo = () => {
    setStudents(DEFAULT_STUDENTS);
    setSearchQuery('');
    setSelectedDepartment('');
    showToast('Student records reset to default demo data.', 'info');
  };

  // Export to CSV
  const handleExportCSV = () => {
    exportToCSV(filteredStudents.length > 0 ? filteredStudents : students);
    showToast('Exported student list to CSV file!', 'success');
  };

  // Clear search and filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedDepartment('');
    setSortBy('name-asc');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Navigation Bar */}
      <Navbar
        onResetDemo={handleResetDemo}
        onExportCSV={handleExportCSV}
        studentCount={totalStudents}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Statistics Cards (Bonus: Total count & Department overview) */}
        <StatsOverview
          totalStudents={totalStudents}
          departmentsCount={uniqueDepartmentsCount}
          filteredCount={filteredStudents.length}
          isFiltering={isFiltering}
        />

        {/* Responsive Grid: Left Column Form, Right Column List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Create Student Form (Requirement 1) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <StudentForm onAddStudent={handleAddStudent} />
          </div>

          {/* Student List & Search Area (Requirements 2, 3, 4) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Search & Filter Toolbar */}
            <SearchAndFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedDepartment={selectedDepartment}
              onDepartmentChange={setSelectedDepartment}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onClearFilters={handleClearFilters}
              hasActiveFilters={isFiltering || sortBy !== 'name-asc'}
            />

            {/* Display Student List / Table */}
            <StudentTable
              students={filteredStudents}
              onEditStudent={setEditingStudent}
              onPromptDelete={setDeletingStudent}
              searchQuery={searchQuery}
              selectedDepartment={selectedDepartment}
            />
          </div>
        </div>
      </main>

      {/* Edit Student Modal (Bonus Task) */}
      {editingStudent && (
        <EditStudentModal
          key={editingStudent.id}
          student={editingStudent}
          isOpen={true}
          onClose={() => setEditingStudent(null)}
          onSave={handleSaveEdit}
        />
      )}

      {/* Delete Confirmation Modal (Requirement 3) */}
      <DeleteConfirmModal
        student={deletingStudent}
        isOpen={Boolean(deletingStudent)}
        onClose={() => setDeletingStudent(null)}
        onConfirm={handleConfirmDelete}
      />

      {/* Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {CURRENT_YEAR} Student Management App. Built with React & Tailwind CSS.</p>
          <p className="text-slate-400">
            Features: Add, View, Search, Delete, Edit, Statistics & LocalStorage.
          </p>
        </div>
      </footer>
    </div>
  );
}
