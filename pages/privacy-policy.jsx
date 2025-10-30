import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <a 
          href="/" 
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-gray-400 text-lg mb-8">
              Last updated: October 30, 2025
            </p>
            
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              When you sign up for WalrusSearch, we collect:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Email address</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Search queries and usage data</li>
              <li>Browser and device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Provide and improve our AI-powered search service</li>
              <li>Send you search results and service updates</li>
              <li>Process payments and prevent fraud</li>
              <li>Respond to customer support inquiries</li>
              <li>Analyze usage patterns to improve our product</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
            <p className="text-gray-300">
              We implement industry-standard security measures to protect your data. All payment 
              information is processed through Stripe's secure payment infrastructure. We never 
              store your credit card information on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Service providers (Stripe for payments, hosting providers)</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-gray-300">
              We use cookies to improve your experience, analyze usage, and remember your 
              preferences. You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this privacy policy from time to time. We will notify you of any 
              significant changes via email or through our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="text-gray-300">
              If you have questions about this privacy policy or your data, contact us at:
            </p>
            <p className="text-purple-400 mt-2">
              support@walrussearch.ai
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <p className="text-sm text-gray-400">
            <strong className="text-white">Note:</strong> This is a template privacy policy. 
            Please consult with a legal professional to ensure compliance with applicable laws 
            (GDPR, CCPA, etc.) in your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;