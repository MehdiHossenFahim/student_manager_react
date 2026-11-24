import React from 'react';
import { Users, Building2, SearchCheck } from 'lucide-react';

export default function StatsOverview({ totalStudents, departmentsCount, filteredCount, isFiltering }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {/* Total Students */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs flex items-center gap-4 transition-all hover:border-emerald-300">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
          <Users className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Total Students
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-bold text-stone-900">{totalStudents}</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
              Enrolled
            </span>
          </div>
        </div>
      </div>

      {/* Departments Count */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs flex items-center gap-4 transition-all hover:border-amber-300">
        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0">
          <Building2 className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Departments
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-bold text-stone-900">{departmentsCount}</span>
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Filtered Count */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs flex items-center gap-4 transition-all hover:border-lime-300">
        <div className="w-12 h-12 rounded-xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-700 shrink-0">
          <SearchCheck className="w-6 h-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            {isFiltering ? 'Matching Results' : 'Search Status'}
          </p>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-bold text-stone-900">{filteredCount}</span>
            <span className="text-xs font-medium text-stone-500">
              {isFiltering ? `of ${totalStudents} students` : 'All displayed'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
