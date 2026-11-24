import React from 'react';
import { Users, Building2, SearchCheck } from 'lucide-react';

export default function StatsOverview({ totalStudents, departmentsCount, filteredCount, isFiltering }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {/* Total Students */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-4 transition-all hover:border-indigo-200">
        <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
          <Users className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Total Students
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-bold text-slate-900">{totalStudents}</span>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
              Enrolled
            </span>
          </div>
        </div>
      </div>

      {/* Departments Count */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-4 transition-all hover:border-indigo-200">
        <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
          <Building2 className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Departments
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-bold text-slate-900">{departmentsCount}</span>
            <span className="text-xs font-medium text-slate-500">Active</span>
          </div>
        </div>
      </div>

      {/* Filtered Count */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-4 transition-all hover:border-indigo-200">
        <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
          <SearchCheck className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {isFiltering ? 'Matching Results' : 'Search Status'}
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-bold text-slate-900">{filteredCount}</span>
            <span className="text-xs font-medium text-slate-500">
              {isFiltering ? `of ${totalStudents} students` : 'All displayed'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
