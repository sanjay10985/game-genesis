"use client";

import { useState } from "react";

export default function ContactForm({ data }) {
  const {
    heading,
    subheading,
    fields,
    submitButtonText,
    successMessage,
    showContactInfo,
  } = data;
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement your form submission logic here
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({});
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {(heading || subheading) && (
          <div className="text-center mb-12">
            {heading && <h2 className="text-4xl font-bold mb-4">{heading}</h2>}
            {subheading && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div
          className={`grid ${
            showContactInfo ? "md:grid-cols-2" : "md:grid-cols-1"
          } gap-12`}
        >
          <div>
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-green-800">
                {successMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {fields.map((field, index) => (
                  <div key={index}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium mb-2"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Sending..." : submitButtonText}
                </button>
              </form>
            )}
          </div>

          {showContactInfo && (
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              {/* This would be populated from global settings */}
              <div className="space-y-4 text-gray-600">
                <p>
                  Contact details will be displayed here from global settings.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
