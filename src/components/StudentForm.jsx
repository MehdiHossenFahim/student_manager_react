import React, { useState } from 'react';
import { User, Mail, Phone, BookOpen, PlusCircle } from 'lucide-react';
import { DEPARTMENTS, validateStudent } from '../utils/helpers';

export default function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const validation = validateStudent({ ...formData, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: validation.errors[name] || '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validation = validateStudent(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: validation.errors[name] || '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      department: true,
    });

    const validation = validateStudent(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    const newStudent = {
      id: 'std-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      department: formData.department.trim(),
      createdAt: new Date().toISOString(),
    };

    onAddStudent(newStudent);

    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xs p-5 sm:p-6 transition-all">
      <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-stone-100">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
          <PlusCircle className="w-4 h-4" />
        </div>
        <h2 className="text-base font-bold text-stone-900">
          Add Student
        </h2>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Student Name */}
        <div>
          <label htmlFor="student-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Student Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <User className="w-4 h-4" />
            </div>
            <input
              id="student-name"
              name="name"
              type="text"
              placeholder="e.g. Tanvir Ahmed"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-stone-50/60 focus:bg-white focus:outline-hidden transition-all ${
                errors.name
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200/50'
                  : touched.name && !errors.name && formData.name
                  ? 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50'
                  : 'border-stone-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="student-email" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Email <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="student-email"
              name="email"
              type="email"
              placeholder="e.g. tanvir.ahmed@gmail.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-stone-50/60 focus:bg-white focus:outline-hidden transition-all ${
                errors.email
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200/50'
                  : touched.email && !errors.email && formData.email
                  ? 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50'
                  : 'border-stone-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="student-phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              id="student-phone"
              name="phone"
              type="tel"
              placeholder="e.g. 01712-345678"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-stone-50/60 focus:bg-white focus:outline-hidden transition-all ${
                errors.phone
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200/50'
                  : touched.phone && !errors.phone && formData.phone
                  ? 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50'
                  : 'border-stone-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{errors.phone}</p>
          )}
        </div>

        {/* Department */}
        <div>
          <label htmlFor="student-department" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Department <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <select
              id="student-department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pl-9 pr-8 py-2 text-sm rounded-xl border bg-stone-50/60 focus:bg-white focus:outline-hidden appearance-none transition-all cursor-pointer ${
                errors.department
                  ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200/50'
                  : touched.department && !errors.department && formData.department
                  ? 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50'
                  : 'border-stone-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
              }`}
            >
              <option value="">Select Department...</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.department && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{errors.department}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm text-stone-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 border border-amber-500/30 shadow-xs transition-all cursor-pointer disabled:opacity-60"
          >
            <PlusCircle className="w-4 h-4 text-stone-900" />
            <span>Add Student</span>
          </button>
        </div>
      </form>
    </div>
  );
}
