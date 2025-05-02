import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0iolawo', 'template_id7j0xj', form.current, 'kEFmi_3W_v3jDX1KZ')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Clear the form after success
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-8">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or need assistance? We’re here to help. Reach out to us
          through any of the options below, and we’ll get back to you as soon as
          possible.
        </p>
      </header>

      {/* Contact Information Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {/* Address and Contact Details */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-indigo-500 mb-4">
            Our Office
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong>Address:</strong>
            <br />
            Lewis University
          </p>
          <p className="text-gray-300 text-lg mt-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:highlinemotor14@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              nshaik@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-lg mt-4">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+1234567890"
              className="text-indigo-400 hover:underline"
            >
              +123 456 789
            </a>
          </p>
          <p className="text-gray-300 text-lg mt-4">
            <strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-indigo-500 mb-4">
            Get in Touch
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-400 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-400 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-400 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-500 mb-6">
          Find Us Here
        </h2>
        <div className="w-full h-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Google Maps Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.8203928820185!2d-88.08234495287842!3d41.60495448770898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5de7e212468d%3A0x209b430a53abcc7c!2sLewis%20University!5e0!3m2!1sen!2sin!4v1744734864447!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.8203928820185!2d-88.08234495287842!3d41.60495448770898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5de7e212468d%3A0x209b430a53abcc7c!2sLewis%20University!5e0!3m2!1sen!2sin!4v1744734864447!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>