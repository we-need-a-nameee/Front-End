import React from "react";

export default function Support() {
  return (
    <div className="support-container">
      <header className="support-header bg-light text-dark p-4 text-center">
        <h1 className="text-3xl font-bold">Your Health, Our Priority</h1>
        <p className="mt-2">
          Find Care Fast, Discover Hospitals, Book Instantly.
        </p>
      </header>

      <section className="support-content p-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-2">
          If you have any questions or need assistance, please don't hesitate to
          reach out to us. Our support team is here to help you.
        </p>
        <div className="contact-info mt-4">
          <p>
            <strong>Email:</strong> support@wellnessway.com
          </p>
          <p>
            <strong>Phone:</strong> +1-800-123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Wellness St, Health City, HC 45678
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="faq mt-4">
          <h3 className="text-xl font-semibold">How do I reset my password?</h3>
          <p>
            To reset your password, go to the login page and click on "Forgot
            Password". Follow the instructions sent to your email to reset your
            password.
          </p>
        </div>
        <div className="faq mt-4">
          <h3 className="text-xl font-semibold">
            How can I book an appointment?
          </h3>
          <p>
            Visit the Appointment Booking page, select your preferred doctor and
            time slot, and follow the prompts to confirm your appointment.
          </p>
        </div>
        <div className="faq mt-4">
          <h3 className="text-xl font-semibold">
            What should I do if I encounter a technical issue?
          </h3>
          <p>
            If you encounter any technical issues, please contact our support
            team via email or phone, and we will assist you as soon as possible.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6">Support Request Form</h2>
        <form className="support-form mt-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />

          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />

          <label htmlFor="message" className="block mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit Request
          </button>
        </form>
      </section>
    </div>
  );
}
