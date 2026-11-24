export { DEPARTMENTS } from '../data/defaultStudents';

// Color palette for student avatars based on their name
const AVATAR_COLORS = [
  { bg: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { bg: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { bg: 'bg-amber-100 text-amber-700 border-amber-200' },
  { bg: 'bg-rose-100 text-rose-700 border-rose-200' },
  { bg: 'bg-purple-100 text-purple-700 border-purple-200' },
  { bg: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
  { bg: 'bg-blue-100 text-blue-700 border-blue-200' },
];

export function getInitials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (!parts.length || !parts[0]) return 'ST';
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function getAvatarColor(name = '') {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

export function getDepartmentBadgeColor(dept = '') {
  switch (dept.toLowerCase()) {
    case 'computer science':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'electrical engineering':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'mechanical engineering':
      return 'bg-cyan-50 text-cyan-700 border-cyan-200';
    case 'business administration':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'mathematics':
      return 'bg-purple-50 text-purple-700 border-purple-200';
    case 'physics':
      return 'bg-violet-50 text-violet-700 border-violet-200';
    case 'civil engineering':
      return 'bg-orange-50 text-orange-700 border-orange-200';
    case 'economics':
      return 'bg-teal-50 text-teal-700 border-teal-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
}

export function validateStudent(data) {
  const errors = {};

  if (!data.name || !data.name.trim()) {
    errors.name = 'Student Name is required.';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email (e.g. name@domain.com).';
  }

  // Allow various international phone formats, minimum 7 digits
  const phoneDigits = (data.phone || '').replace(/\D/g, '');
  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Phone Number is required.';
  } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Please provide a valid phone number (7-15 digits).';
  }

  if (!data.department || !data.department.trim()) {
    errors.department = 'Please select or enter a department.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function exportToCSV(students) {
  if (!students || !students.length) return;

  const headers = ['ID', 'Student Name', 'Email', 'Phone Number', 'Department', 'Date Added'];
  const rows = students.map((s) => [
    `"${s.id}"`,
    `"${s.name.replace(/"/g, '""')}"`,
    `"${s.email.replace(/"/g, '""')}"`,
    `"${s.phone.replace(/"/g, '""')}"`,
    `"${s.department.replace(/"/g, '""')}"`,
    `"${s.createdAt || new Date().toISOString()}"`,
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `students_export_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
