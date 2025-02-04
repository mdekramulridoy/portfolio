import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Toaster } from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xjkkpoqa");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);

    if (state.succeeded) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonColor: "#15A6FF",
      });

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 my-16 lg:my-24 py-12 bg-[#ECF8FF] rounded-3xl shadow-xl gap-12">
      {/* Left Side: Contact Form */}
      <div className="w-full lg:w-1/2 p-8 bg-white rounded-2xl shadow-lg ">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center lg:text-left">Get in Touch</h2>
        <p className="text-gray-600 mb-8 text-center lg:text-left">
          Let's discuss how I can help you! Fill out the form and I'll get back to you soon.
        </p>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
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
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15A6FF] transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
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
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15A6FF] transition-all"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15A6FF] transition-all"
              rows="4"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#15A6FF] text-white font-bold py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side: Contact Details */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          You can also reach out via email, phone, or social media.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
            <FaMapMarkerAlt className="text-[#15A6FF] text-2xl" />
            <p className="text-lg">Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
            <FaEnvelope className="text-[#15A6FF] text-2xl" />
            <a
              href="mailto:ekramul.hoque.ridoy@gmail.com"
              className="text-lg text-blue-600 hover:underline"
            >
              ekramul.hoque.ridoy@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
            <FaPhoneAlt className="text-[#15A6FF] text-2xl" />
            <p className="text-lg">+8801792243520 <span className="text-slate-400">(Also on WhatsApp)</span></p>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Contact;
