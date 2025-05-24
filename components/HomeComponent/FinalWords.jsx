import Link from "next/link";
import React from "react";

const FinalWords = () => {
  return (
    <div className="mt-10 mb-5 px-5">
      <h3 className="text-2xl font-bold mb-4">Simplifying Time for Everyone</h3>
      <p className="text-gray-700 mb-4">
        In 2025, I set out to create something the world truly needed—a{" "}
        <strong>simple, accurate, and user-friendly time conversion tool</strong>.
        The idea for this website was born from my desire to make navigating global time zones easy and stress-free.
      </p>
      <p className="text-gray-700 mb-4">
        Most existing tools for time conversion felt overwhelming—complicated interfaces and unnecessary clutter made
        what should be a simple task frustrating. I wanted to change that by creating a platform that is{" "}
        <strong>simple to use, intuitive, and accessible to everyone</strong>.
      </p>
      <p className="text-gray-700 mb-4">
        This website was built with one mission:{" "}
        <strong>to help people worldwide understand and manage time effortlessly</strong>. Whether you're scheduling
        meetings across different time zones, organizing events, or just curious about world times, this tool is here
        to make things easier for you.
      </p>
      <p className="text-gray-700 mb-4">
        What sets this platform apart is its simplicity and accessibility. With a clean, user-friendly design and{" "}
        <strong>complete responsiveness</strong>, it works seamlessly across all devices. No complexity, no hassle—just
        accurate time conversions.
      </p>
      <p className="text-gray-700 mb-4">
        If you encounter any issues, find a bug, or have suggestions for improvement, please let us know through the{" "}
        <Link href="/contact" className="text-blue-600 underline">
          Contact Us
        </Link>{" "}
        page. Your feedback is invaluable in making this platform even better.
      </p>
    </div>
  );
};

export default FinalWords;
