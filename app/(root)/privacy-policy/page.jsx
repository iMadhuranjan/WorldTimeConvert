import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        Privacy Policy
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Your privacy is important to us. This Privacy Policy outlines how we
        handle your information, ensuring transparency about what we do (and
        don’t do) with your data. By using our platform, you agree to the
        practices outlined here.
      </p>

      {/* No Data Collection */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          We Do Not Collect Personal Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We value your privacy and take it seriously. Our platform does not
          collect, store, or share any of your personal information, such as
          your name, email address, or location. You can use our website freely
          without worrying about your data being tracked or monitored.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          All interactions with our website are anonymous, and no personally
          identifiable information is required to access or use any of our tools
          or features.
        </p>
      </section>

      {/* Third-Party Ads */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Third-Party Advertising
        </h2>
        <p className="text-gray-700 leading-relaxed">
          To keep our platform free and accessible, we may display third-party
          advertisements in the future. These ads are managed by external
          providers and may use cookies or similar technologies to deliver
          relevant content. However:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-3">
          <li>
            We do not share your data with advertisers, as we do not collect any
            personal information.
          </li>
          <li>
            Any data collected by third-party advertisers is governed by their
            respective privacy policies. We encourage you to review these
            policies to understand their practices.
          </li>
        </ul>
      </section>

      {/* Use of Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our platform may use cookies to enhance your browsing experience.
          These cookies are typically used to:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-3">
          <li>Analyze website performance and improve user experience.</li>
          <li>
            Provide functionality such as saving your preferences or settings.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          Cookies are small text files stored on your device and do not include
          personally identifiable information. You can control or disable
          cookies through your browser settings if you prefer.
        </p>
      </section>

      {/* Future Updates */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          As our platform evolves, we may update this Privacy Policy to reflect
          new practices or features. Any changes will be communicated clearly,
          and we recommend reviewing this page periodically to stay informed
          about how we protect your privacy.
        </p>
      </section>

      {/* Contact Us */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions or concerns about this Privacy Policy or how
          your privacy is handled, please feel free to reach out to us through
          the{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact Us
          </Link>{" "}
          page. We’re here to address your concerns and ensure your experience
          on our platform remains safe and secure.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

export const metadata = {
  title: "Privacy Policy - WorldTimeConvert.Com",
  description:
    "Read our Privacy Policy to understand how we handle your data. We value your privacy and do not collect personal information. Learn about our use of cookies, third-party ads, and data protection practices.",
};
