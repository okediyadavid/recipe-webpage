import React from 'react';

export default function User({ user }) {
  if (!user) return null; // Ensures no crashes if user data is undefined

  const { isAdmin, photoURL, displayName } = user;
  const fallbackImage = 'https://via.placeholder.com/40'; // Default avatar


  return (
    <div className="flex items-center shrink-0 gap-3">
      <img
        className="w-10 h-10 rounded-md object-cover"
        src={photoURL || fallbackImage}
        alt={displayName || 'User'}
        loading="lazy"
      />
      <span className={`hidden md:block ${isAdmin ? 'text-brand-active font-semibold' : ''}`}>
        {isAdmin ? 'Admin' : `Hi 👋🏻 ${displayName || 'Guest'}`}
      </span>
    </div>
  );
}
