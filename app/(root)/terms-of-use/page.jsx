import Link from "next/link";
import React from "react";

const TermsOfUse = () => {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Terms of Use</h1>

      {/* Introduction */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Welcome to our platform. By accessing or using this website, you agree to 
        comply with the following Terms of Use. Please read these terms carefully. 
        If you do not agree with any part of these terms, you must not use our 
        website or services.
      </p>

      {/* General Use */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">General Use</h2>
        <p className="text-gray-700 leading-relaxed">
          This platform is designed to provide tools and resources for global time 
          management, including time conversion, world time zone data, and related 
          services. You agree to use this website for lawful purposes only and in a 
          way that does not infringe upon the rights of others or restrict their 
          use of the website.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-3">
          <li>
            You must not misuse our services by attempting to hack, modify, or 
            disrupt the platform's functionality.
          </li>
          <li>
            The content provided on this website is for informational purposes 
            only. We do not guarantee the accuracy, completeness, or reliability 
            of the information provided.
          </li>
          <li>
            The platform is intended for personal and non-commercial use. Any 
            unauthorized commercial use is prohibited.
          </li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Intellectual Property
        </h2>
        <p className="text-gray-700 leading-relaxed">
          All content, designs, trademarks, logos, and other intellectual property 
          displayed on this platform are owned by us or licensed to us. You may not 
          copy, reproduce, or distribute any part of this website without prior 
          written consent.
        </p>
      </section>

      {/* Third-Party Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Third-Party Links and Ads
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This website may contain links to third-party websites or advertisements. 
          These links are provided for convenience only, and we are not responsible 
          for the content, policies, or practices of these external sites. Clicking 
          on third-party links is at your own risk, and we encourage you to review 
          their terms and privacy policies.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
        <p className="text-gray-700 leading-relaxed">
          The information and services provided on this platform are offered "as is" 
          and without warranties of any kind, whether express or implied. While we 
          strive to ensure the accuracy of our tools and data, we do not guarantee 
          that the platform will be error-free or meet your expectations. Use this 
          platform at your own discretion and risk.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-3">
          <li>
            We are not liable for any inaccuracies, delays, or errors in the 
            time data provided by our platform.
          </li>
          <li>
            We do not guarantee uninterrupted or secure access to the website. 
            Technical issues or updates may occasionally disrupt services.
          </li>
          <li>
            Any reliance you place on the information provided is strictly at 
            your own risk.
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          To the fullest extent permitted by law, we disclaim all liability for 
          damages arising from your use of this website, including but not limited 
          to direct, indirect, incidental, or consequential damages.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Limitation of Liability
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Under no circumstances shall we be held liable for any loss or damage 
          resulting from the use of this platform. This includes but is not limited 
          to:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-3">
          <li>Loss of data or profits.</li>
          <li>Disruption caused by technical failures.</li>
          <li>Misuse of information provided by the platform.</li>
        </ul>
      </section>

      {/* Changes to Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Changes to These Terms
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to update these Terms of Use at any time. Any 
          changes will be posted on this page, and it is your responsibility to 
          review these terms periodically. Your continued use of the website after 
          changes have been made constitutes your acceptance of the revised terms.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions or concerns regarding these Terms of Use, please 
          contact us through the{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact Us
          </Link>{" "}
          page. We’re here to help.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;


export const metadata = {
  title: "Terms of Use - WorldTimeConvert.Com",
  description:
    "Review the Terms of Use for WorldTimeConvert. Understand your rights and responsibilities when using our platform. Learn about intellectual property, disclaimers, and liabilities.",
}