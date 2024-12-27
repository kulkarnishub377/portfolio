import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">Phone (optional)</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="tel" id="phone" name="phone" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4" required></textarea>
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Submit</button>
        </form>
        <div className="social-links text-center mt-8">
          <a href="https://linkedin.com/in/shubhamkulkarni" className="text-blue-500 hover:underline mx-2">LinkedIn</a>
          <a href="https://github.com/shubhamkulkarni" className="text-blue-500 hover:underline mx-2">GitHub</a>
          <a href="https://instagram.com/shubhamkulkarni" className="text-blue-500 hover:underline mx-2">Instagram</a>
          <a href="https://wa.me/1234567890" className="text-blue-500 hover:underline mx-2">WhatsApp</a>
          <a href="mailto:shubham@example.com" className="text-blue-500 hover:underline mx-2">Email</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
