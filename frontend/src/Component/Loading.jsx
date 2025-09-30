import React from 'react';

export const Loading = () => (
  <div className="flex flex-col items-center justify-center min-h-[200px] py-8">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-3"></div>
    <div className="text-lg text-blue-600 font-medium">Loading...</div>
  </div>
);
