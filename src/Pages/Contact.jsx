import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Toaster, toast } from 'react-hot-toast';  // Import React Hot Toast

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xjkkpoqa");  // Formspree form ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Submit the form using Formspree
    handleSubmit(e);

    // If submission is successful, show toast
    if (state.succeeded) {
      toast.success("Thanks for your message!", {
        duration: 4000,  // Duration of toast in milliseconds
      });

      // Clear form fields after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 my-10 rounded-lg py-10 bg-[#c1e8ff64] md:gap-24 lg:p-20 md:p-10">
      {/* Left Side: Message Form */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#15A6FF] text-white font-bold py-2 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right Side: Contact Details */}
      <div className="w-full lg:w-1/2 md:right-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h2>
        <ul className="space-y-4">
          <li>
            <p className="text-lg">
              <strong>Location:</strong> Dhaka, Bangladesh
            </p>
          </li>
          <li>
            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:ekramul.hoque.ridoy@gmail.com"
                className="text-blue-500 underline hover:text-blue-700"
              >
                ekramul.hoque.ridoy@gmail.com
              </a>
            </p>
          </li>
          <li>
            <p className="text-lg">
              <strong>Mobile:</strong> +8801792243520
            </p>
          </li>
          <li>
            <p className="text-lg">
              <strong>WhatsApp:</strong> +8801521323556
            </p>
          </li>
        </ul>
      </div>

      {/* Toast Notifications Container */}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Contact;
