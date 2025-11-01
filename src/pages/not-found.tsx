import type { FC } from "react";

const NotFound: FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-orange-400 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
    <p className="text-gray-500 mb-6">Sorry, the page you are looking for does not exist.</p>
    <a href="/" className="text-orange-400 hover:underline text-lg">Go to Home</a>
  </div>
);

export default NotFound;
