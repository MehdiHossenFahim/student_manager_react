import React from 'react';
import { Mail, Phone, BookOpen, Trash2, Edit3, User, UserX } from 'lucide-react';
import { getInitials, getAvatarColor, getDepartmentBadgeColor } from '../utils/helpers';

export default function StudentTable({
  students,
  onEditStudent,
  onPromptDelete,
  searchQuery,
  selectedDepartment,
}) {
  if (!students.length) {
    const isFiltered = searchQuery || selectedDepartment;
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-3">
          <UserX className="w-7 h-7" />
        </div>
        <h3 className="text-base font-bold text-slate-800">
          {isFiltered ? 'No students found matching your criteria' : 'No students in the system'}
        </h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
          {isFiltered
            ? `Try checking for spelling errors or clearing your search filters.`
            : `Add your first student using the form on the left to get started!`}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Table Header Summary */}
      <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
          Student List ({students.length})
        </span>
        <span className="text-xs text-slate-400">
          Showing Name, Email, Phone & Department
        </span>
      </div>

      {/* Desktop Table View (Hidden on mobile) */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/70 text-slate-500 text-xs uppercase tracking-wider font-semibold">
              <th className="py-3 px-4">Student</th>
              <th className="py-3 px-4">Email Address</th>
              <th className="py-3 px-4">Phone Number</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {students.map((student) => {
              const avatarColor = getAvatarColor(student.name);
              const deptColor = getDepartmentBadgeColor(student.department);

              return (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  {/* Name with Avatar */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs border ${avatarColor.bg}`}
                      >
                        {getInitials(student.name)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {student.name}
                        </div>
                        <div className="text-xs text-slate-400">ID: {student.id}</div>
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="py-3.5 px-4 text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a
                        href={`mailto:${student.email}`}
                        className="hover:text-indigo-600 transition-colors"
                      >
                        {student.email}
                      </a>
                    </div>
                  </td>

                  {/* Phone */}
                  <td className="py-3.5 px-4 text-slate-600 font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{student.phone}</span>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${deptColor}`}
                    >
                      <BookOpen className="w-3 h-3" />
                      {student.department}
                    </span>
                  </td>

                  {/* Actions: Edit & Delete */}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onEditStudent(student)}
                        title="Edit Student"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all cursor-pointer"
                        aria-label={`Edit ${student.name}`}
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onPromptDelete(student)}
                        title="Delete Student"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 transition-all cursor-pointer"
                        aria-label={`Delete ${student.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile & Tablet Card Layout (Shown on small screens) */}
      <div className="lg:hidden divide-y divide-slate-100">
        {students.map((student) => {
          const avatarColor = getAvatarColor(student.name);
          const deptColor = getDepartmentBadgeColor(student.department);

          return (
            <div key={student.id} className="p-4 space-y-3 hover:bg-slate-50/60 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs border ${avatarColor.bg}`}
                  >
                    {getInitials(student.name)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{student.name}</h4>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium border mt-0.5 ${deptColor}`}
                    >
                      <BookOpen className="w-2.5 h-2.5" />
                      {student.department}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onEditStudent(student)}
                    className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg cursor-pointer"
                    aria-label={`Edit ${student.name}`}
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onPromptDelete(student)}
                    className="p-2 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer"
                    aria-label={`Delete ${student.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5 truncate">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={`mailto:${student.email}`} className="hover:text-indigo-600 truncate">
                    {student.email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{student.phone}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
