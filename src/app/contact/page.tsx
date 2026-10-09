"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "error">("idle");

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Intentional failure to meet requirement: "If no submission service exists, do not pretend it was submitted."
      setStatus("error");
    }
  };

  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs items={[{ label: "Contact" }]} className="mb-8" />
          <Heading level={1} kicker="Get in touch">
            Contact Us
          </Heading>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container size="md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Heading level={3} className="mb-4">Institute Information</Heading>
              <div className="space-y-4 text-academic-ink-secondary text-sm">
                <p>
                  <strong>Address:</strong><br />
                  Arena Web Security<br />
                  TODO: Add official verified address.
                </p>
                <p>
                  <strong>Email:</strong><br />
                  TODO: Add official email contact.
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  TODO: Add official phone number.
                </p>
              </div>
            </div>

            <div>
              <Heading level={3} className="mb-4">Send a Message</Heading>
              
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-md" role="alert">
                  <strong>Integration Required:</strong> The form submission endpoint is currently not configured. No backend service is connected to handle this request.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-academic-navy mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border border-academic-grey-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-academic-blue"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-academic-navy mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-academic-grey-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-academic-blue"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-academic-navy mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-academic-grey-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-academic-blue"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && <p id="message-error" className="text-red-600 text-xs mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
