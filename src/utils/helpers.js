export { DEPARTMENTS } from '../data/defaultStudents';

// Modern purple & indigo inspired pastel palette for student avatars
const AVATAR_COLORS = [
  { bg: 'bg-purple-100 text-purple-700 border-purple-200' },
  { bg: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { bg: 'bg-violet-100 text-violet-700 border-violet-200' },
  { bg: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200' },
  { bg: 'bg-sky-100 text-sky-700 border-sky-200' },
  { bg: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
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
  const d = dept.toLowerCase();
  if (d.includes('computer') || d.includes('cse')) {
    return 'bg-purple-50 text-purple-700 border-purple-200/80';
  }
  if (d.includes('electrical') || d.includes('eee')) {
    return 'bg-indigo-50 text-indigo-700 border-indigo-200/80';
  }
  if (d.includes('mechanical')) {
    return 'bg-sky-50 text-sky-700 border-sky-200/80';
  }
  if (d.includes('civil')) {
    return 'bg-amber-50 text-amber-700 border-amber-200/80';
  }
  if (d.includes('business') || d.includes('bba')) {
    return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
  }
  if (d.includes('pharmacy')) {
    return 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200/80';
  }
  if (d.includes('economics')) {
    return 'bg-teal-50 text-teal-700 border-teal-200/80';
  }
  if (d.includes('english')) {
    return 'bg-violet-50 text-violet-700 border-violet-200/80';
  }
  return 'bg-slate-100 text-slate-700 border-slate-200';
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

  const rawPhone = (data.phone || '').trim();
  const digitsOnly = rawPhone.replace(/\D/g, '');

  if (!rawPhone) {
    errors.phone = 'Phone Number is required.';
  } else {
    const isBDFormat =
      (digitsOnly.length === 11 && digitsOnly.startsWith('01')) ||
      (digitsOnly.length === 13 && digitsOnly.startsWith('8801'));

    if (!isBDFormat) {
      errors.phone = 'Please enter a valid phone number (e.g. 01712-345678).';
    }
  }

  if (!data.department || !data.department.trim()) {
    errors.department = 'Please select a department.';
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
