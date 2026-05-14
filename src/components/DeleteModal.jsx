import React from 'react';

export default function DeleteModal({ isOpen, onClose, onConfirm, destinationName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4 font-hanken">
      {/* Modal Card */}
      <div className="bg-white w-full max-w-md mx-4 rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-red-50 text-red-600 rounded-full">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-800 font-literata">Delete Travel Package</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        {/* Modal Body */}
        <div className="px-6 py-8">
          <p className="text-slate-600 leading-relaxed">
            Are you sure you want to delete <span className="font-bold text-slate-900">'{destinationName}'</span>? 
            This action cannot be undone and will permanently remove this package and all associated data from the system.
          </p>
        </div>
        
        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-800 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-all uppercase tracking-widest"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-bold text-white bg-error hover:bg-red-700 rounded shadow-sm transition-all flex items-center gap-2 uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">delete</span>
            Delete Package
          </button>
        </div>
      </div>
    </div>
  );
}
