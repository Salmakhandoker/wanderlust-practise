'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DeleteModal from './DeleteModal';

export default function DestinationActions({ destinationId, destinationName }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/admin/destinations/${destinationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.push('/destinations');
      } else {
        alert('Failed to delete destination');
      }
    } catch (error) {
      alert('Connection failed');
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <Link 
          href={`/admin/edit/${destinationId}`}
          className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors"
        >
          <span className="material-symbols-outlined text-[1.2rem]">edit</span>
          Edit
        </Link>
        <button 
          onClick={() => setIsDeleteModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border border-error text-error rounded-lg hover:bg-error-container transition-colors"
        >
          <span className="material-symbols-outlined text-[1.2rem]">delete</span>
        </button>
      </div>

      <DeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        destinationName={destinationName}
      />
    </>
  );
}
