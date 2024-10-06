import React from "react";

function Faq() {
    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-4xl font-bold mt-8 mb-6 text-pr text-center">
                Frequently asked questions (FAQs)            
                </h1>
            {/* Question 1 */}
            <h2 className="text-2xl mt-8 font-bold mb-4 text-pr">
                1. What is MediConnect ?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                MediConnect is a hospital management system designed to streamline healthcare operations and manage patient records and appointments.
            </p>

            {/* Question 2 */}
            <h2 className="text-2xl font-bold mb-4 text-pr">
                2. How can I book an appointment?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                You can easily book an appointment by signing into your account and navigating to the "Booking" section. From there, select your preferred doctor and available time slot to confirm your appointment.
            </p>

            {/* Question 3 */}
            <h2 className="text-2xl font-bold mb-4 text-pr">
                3. Is my personal data safe with MediConnect?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Yes, your data is secure. You can view our <a href="./privacy" className="text-pr hover:underline">privacy policy</a> for more details.
            </p>

            {/* Question 4 */}
            <h2 className="text-2xl font-bold mb-4 text-pr">
                4. How can I access my health records?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                After logging into your account, go to the "Profile" section where you can view, download, or share your health records securely.
            </p>

            {/* Question 5 */}
            <h2 className="text-2xl font-bold mb-4 text-pr">
                5. Can I cancel or reschedule an appointment?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Yes, you can cancel or reschedule an appointment by visiting the "Booking" section and selecting the respective appointment. Follow the instructions provided to complete the process.
            </p>

            {/* Question 6 */}
            <h2 className="text-2xl font-bold mb-4 text-pr">
                6. What should I do if I forget my password?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Click on the "Forgot Password" link on the login page and follow the instructions to reset your password. You will receive an email with a link to set up a new password.
            </p>

            {/* Question 7 */}
            <h2 className="text-2xl font-bold mb-4 text-pr">
                7. How do I contact customer support?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                If you have any questions or need assistance, please contact our support team via email at <span className="font-bold text-pr">Mediconnect@gmail.com</span>.
            </p>
        </div>
    );
}

export default Faq;
