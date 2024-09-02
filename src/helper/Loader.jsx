import React from 'react';

function Loader() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-90"
    >
      <div className="relative">
        <div
          className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-orange-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
        </div>
        <span className="absolute top-0 left-0 mt-6 ml-10 text-white">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
