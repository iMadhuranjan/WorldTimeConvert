import React from "react";

const ContactUs = () => {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>

      {/* Introduction */}
      <p className="text-gray-700 leading-relaxed mb-6">
        We’re here to help! If you have any questions, feedback, or concerns, 
        please don’t hesitate to reach out. Whether it’s a bug report, a feature 
        suggestion, or just a note to say hello, your input matters to us. 
        Let’s work together to make this platform even better!
      </p>

      {/* Contact Options */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Reach Us</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <strong>Email:</strong> You can email us at{" "}
            <a href="mailto:HeyMadhuranjan@gmail.com" className="text-blue-600 hover:underline">
              HeyMadhuranjan@gmail.com
            </a>. We typically respond within 24-48 hours.
          </li>
        
        </ul>
      </section>

      {/* Bug Reporting */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Found a Bug or Issue?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          If you encounter any issues or bugs while using our platform, we’d 
          greatly appreciate your help in letting us know. Please provide as 
          much detail as possible, including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
          <li>Steps to reproduce the issue</li>
          <li>Your browser or device details</li>
          <li>Screenshots, if applicable</li>
        </ul>
        <p className="text-gray-700 mt-3">
          Send your report to{" "}
          <a href="mailto:HeyMadhuranjan@gmail.com" className="text-blue-600 hover:underline">
            HeyMadhuranjan@gmail.com
          </a>
        </p>
      </section>

      {/* Closing Note */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
        <p className="text-gray-700 leading-relaxed">
          Thank you for taking the time to connect with us. Your feedback and 
          support mean the world to us. Together, we can continue to build a 
          tool that helps people worldwide manage their time more efficiently. 
          We look forward to hearing from you!
        </p>
      </section>
    </div>
  );
};

export default ContactUs;

export const metadata = {
    title: "Contact Us - WorldTimeConvert.Com",
    description:
      "Get in touch with us! Use the Contact Us page to report issues, share feedback, or ask questions. We're here to help you.",
}  