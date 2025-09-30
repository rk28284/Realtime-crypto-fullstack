import React from "react";

export const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
    <div className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center">
      <div className="mb-6 animate-bounce">

        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
      </div>
      <h1 className="text-7xl font-extrabold text-blue-600 mb-2 tracking-tight drop-shadow">404</h1>
      <p className="text-2xl text-gray-800 mb-4 font-semibold">Oops! Page Not Found</p>
      <p className="text-lg text-gray-500 mb-8 text-center max-w-xs">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-7 py-3 text-lg bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300"
      >
        Go Home
      </a>
    </div>
  </div>
);
