import { Watch } from "lucide-react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-gray-800 p-5">
      {/* Icon */}
      <Watch className="w-20 h-20 text-gray-500 mb-4" />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <h2 className="text-lg md:text-2xl text-gray-600 mb-6 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </h2>

      {/* CTA */}
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Custom404;
