import React from "react";

function Privacy() {
    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            {/* Title */}
            <h1 className="text-4xl font-bold mt-8 mb-6 text-pr text-center">
                Privacy Policy
            </h1>

            {/* Content */}
            <div className="mb-4 text-lg leading-relaxed text-gray-700">
                <p className="mb-6">
                    We are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and share your data when you use our site.
                </p>

                {/* Section 1 */}
                <h2 className="text-2xl font-bold mb-4 text-pr">1. Information We Collect</h2>
                <p className="mb-6">
                    <strong>Personal Information:</strong> We collect personal information such as name, contact details, health records, etc.
                </p>
                <p className="mb-6">
                    <strong>Usage Data:</strong> We collect information about how users interact with the system, including login times, pages visited, and other system usage data.
                </p>

                {/* Section 2 */}
                <h2 className="text-2xl font-bold mb-4 text-pr">2. How We Use Your Information</h2>
                <p className="mb-6">
                    <strong>To Provide Services:</strong> We use personal information to provide healthcare services, manage appointments, store health records, etc.
                </p>
                <p className="mb-6">
                    <strong>To Improve the System:</strong> Usage data helps us improve our services, ensure system security, and make enhancements.
                </p>

                {/* Section 3 */}
                <h2 className="text-2xl font-bold mb-4 text-pr">3. Sharing Your Information</h2>
                <p className="mb-6">
                    <strong>With Healthcare Providers:</strong> Information is shared with authorized healthcare providers to facilitate treatment.
                </p>

                {/* Section 4 */}
                <h2 className="text-2xl font-bold mb-4 text-pr">4. Data Security</h2>
                <p className="mb-6">
                    We use industry-standard security measures, including encryption, firewalls, and access control, to protect your personal information.
                </p>

                {/* Section 5 */}
                <h2 className="text-2xl font-bold mb-4 text-pr">5. Your Rights</h2>
                <p className="mb-6">
                    <strong>Access and Correction:</strong> You have the right to access your personal information and request corrections.
                </p>
                <p className="mb-6">
                    <strong>Deletion:</strong> You may request the deletion of your data, subject to legal or contractual obligations.
                </p>

                {/* Section 6 */}
                <h2 className="text-2xl font-bold mb-4 text-pr">6. Cookies and Tracking Technologies</h2>
                <p className="mb-6">
                    We use cookies to enhance your experience on our website. Cookies help us understand your preferences and offer you a personalized experience.
                </p>

                {/* Section 7 */}
                <h2 className="text-2xl font-bold mb-4 text-pr">7. Contact Us</h2>
                <p className="mb-6">
                    If you have any questions or concerns about our Privacy Policy, please contact us at:
                </p>
                <p className="font-bold text-pr">Email: Mediconnect@gmail.com</p>
            </div>
        </div>
    );
}

export default Privacy;
