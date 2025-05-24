import React from "react";

const AboutUs = () => {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Connecting the World Through Time
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in <strong>2025</strong>, our mission is simple: to make
          navigating global time zones easy, accurate, and stress-free. Time is
          a universal connector, yet the complexities of time zones can often
          create unnecessary challenges. That's where we come in. Our platform
          is designed to provide a{" "}
          <strong>simple, user-friendly, and reliable tool</strong> for managing
          time across the world.
        </p>
      </section>

      {/* Why We Built This Tool */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Why We Built This Tool
        </h2>
        <p className="text-gray-700 leading-relaxed">
          While there are many time conversion tools available online, most of
          them feel overwhelming, cluttered, or difficult to use. Recognizing
          this gap, we created this platform to be a{" "}
          <strong>breath of fresh air</strong>—a tool that combines simplicity
          with precision. Whether you're scheduling international meetings,
          planning virtual events, or simply curious about global time zones,
          our platform is here to make it effortless.
        </p>
      </section>

      {/* Features We Offer */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">What We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>
            <strong>Time Converter:</strong> Effortlessly convert and compare
            time zones across the globe.
          </li>
          <li>
            <strong>World Time Zone Explorer:</strong> View detailed time zone
            information for countries and cities worldwide.
          </li>
          <li>
            <strong>Responsive Design:</strong> Our platform is fully optimized
            for use on any device, whether you're on desktop, tablet, or mobile.
          </li>
          <li>
            <strong>Event Countdown:</strong> Track upcoming events with
            accurate countdown timers.
          </li>
          <li>
            <strong>Widget Integration:</strong> Add customizable clocks and
            time zone widgets to your website or app.
          </li>
        </ul>
      </section>

      {/* Our Mission and Values */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Our Mission and Values
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At the heart of our mission is a commitment to helping people save
          time and improve productivity. We believe in:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-3">
          <li>
            <strong>Trustworthiness:</strong> Providing accurate, up-to-date
            time zone data sourced from reliable authorities.
          </li>
          <li>
            <strong>Simplicity:</strong> Delivering a clean and intuitive
            experience for every user.
          </li>
          <li>
            <strong>Accessibility:</strong> Ensuring our platform is easy to use
            and available in multiple languages.
          </li>
          <li>
            <strong>Innovation:</strong> Continuously improving our tools to
            meet the evolving needs of a global audience.
          </li>
        </ul>
      </section>

      {/* Feedback and Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Your Feedback Matters
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We are constantly striving to improve our platform and provide the
          best experience for our users. If you encounter any issues, spot a
          bug, or have suggestions for new features, please let us know. Your
          feedback helps us grow and serve you better. Reach out to us anytime
          through the{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact Us
          </a>{" "}
          page.
        </p>
      </section>

      {/* Closing Note */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Thank You for Trusting Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We are honored to be a part of your global journey, helping you
          connect, plan, and communicate seamlessly across time zones. Thank you
          for making us your trusted partner in time management.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

export const metadata = {
  title: "About us - WorldTimeConvert.Com",
  description:
    "Learn more about us and why we created this website. WorldTimeCOnvert.com stroy and Build Process",
};
