import React from 'react';

function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-4xl font-bold mt-8 mb-6 text-pr text-center">
                Terms of Service
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Welcome to MediConnect. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our services.
            </p>
            
            <h2 className="text-2xl mt-8 font-bold mb-4 text-pr">
                1. Introduction
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                MediConnect provides a platform that connects patients with healthcare providers. Our mission is to facilitate access to healthcare services for everyone.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pr">
                2. User Responsibilities
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                You agree to use MediConnect in accordance with applicable laws and regulations. You are responsible for maintaining the confidentiality of your account information.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pr">
                3. Services Provided
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                MediConnect offers various services including hospital locator, appointment booking, telemedicine services, and patient reviews.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pr">
                4. Limitation of Liability
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                MediConnect is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pr">
                5. Changes to Terms
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                We may update these terms from time to time. You will be notified of any changes, and continued use of our services indicates your acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-pr">
                6. Contact Us
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                For any questions regarding these terms, please contact us through our contact page. We are here to help you!
            </p>
        </div>
    );
}

export default TermsOfService;
