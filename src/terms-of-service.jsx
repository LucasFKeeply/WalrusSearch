import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>


        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-gray-400 text-lg mb-8">
              Last updated: October 30, 2025
            </p>
            
            <p className="text-gray-300 mb-8">
              By accessing or using ContextSearch, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-bold mb-4">1. Service Description</h2>
            <p className="text-gray-300">
              ContextSearch is an AI-powered search tool that helps you find relevant Reddit 
              discussions by understanding context beyond simple keyword matching. We provide 
              search results with relevance scores and filtering capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Account Terms</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>You must provide a valid email address to use ContextSearch</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must be at least 18 years old to use this service</li>
              <li>You may not use the service for any illegal or unauthorized purpose</li>
              <li>One account per person or organization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Pricing and Payment</h2>
            <p className="text-gray-300 mb-4">
              <strong>Founding Member Plan:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>One-time payment of $28 for unlimited searches for 3 months</li>
              <li>Automatically converts to $19/month after 3 months (cancellable anytime)</li>
              <li>All prices are in USD</li>
              <li>Payments are processed securely through Stripe</li>
            </ul>
            <p className="text-gray-300 mb-4">
              <strong>Waitlist Members:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Receive 1 free search on launch day (November 30, 2025)</li>
              <li>Can purchase additional searches or subscribe at regular pricing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Cancellation and Refunds</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>You may cancel your subscription at any time</li>
              <li>Founding members can cancel before the 3-month period ends to avoid monthly charges</li>
              <li>No refunds are provided for partial months</li>
              <li>Refund requests must be submitted within 30 days of purchase</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
            <p className="text-gray-300 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Use the service to spam, harass, or harm others</li>
              <li>Attempt to reverse engineer or access our AI systems</li>
              <li>Share your account credentials with others</li>
              <li>Use automated tools to access the service without permission</li>
              <li>Resell or redistribute our search results</li>
              <li>Use the service for illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Service Availability</h2>
            <p className="text-gray-300">
              We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. 
              We reserve the right to modify or discontinue the service at any time with 
              reasonable notice. Scheduled maintenance will be announced in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The ContextSearch service, including our AI algorithms, design, and branding, 
              is protected by copyright and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Copy, modify, or create derivative works of our service</li>
              <li>Use our branding or trademarks without permission</li>
              <li>Claim ownership of our AI technology or algorithms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300">
              ContextSearch is provided "as is" without warranties of any kind. We are not 
              liable for any damages arising from your use of the service, including but not 
              limited to lost profits, data loss, or business interruption. Our total liability 
              shall not exceed the amount you paid for the service in the past 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Data and Privacy</h2>
            <p className="text-gray-300">
              Your use of ContextSearch is also governed by our Privacy Policy. We collect 
              and process data as described in our Privacy Policy. Reddit content accessed 
              through our service is subject to Reddit's own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <p className="text-gray-300">
              We may update these Terms of Service from time to time. We will notify you of 
              material changes via email or through the service. Your continued use of 
              ContextSearch after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <p className="text-gray-300">
              We reserve the right to suspend or terminate your account if you violate these 
              terms. Upon termination, your access to the service will be immediately revoked, 
              and we may delete your data in accordance with our data retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-gray-300">
              These terms shall be governed by the laws of [Your Jurisdiction], without regard 
              to conflict of law provisions. Any disputes shall be resolved through binding 
              arbitration in [Your Location].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="text-gray-300">
              Questions about these Terms of Service? Contact us at:
            </p>
            <p className="text-purple-400 mt-2">
              support@contextsearch.ai
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <p className="text-sm text-gray-400">
            <strong className="text-white">Note:</strong> This is a template terms of service. 
            Please consult with a legal professional to ensure these terms are appropriate for 
            your business and comply with applicable laws in your jurisdiction. Update the 
            [bracketed sections] with your specific information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;