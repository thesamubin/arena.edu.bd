"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export default function TrainingRequestPage() {
  const [formData, setFormData] = useState({ organization: "", contactName: "", email: "", type: "corporate", details: "" });
  const [errors, setErrors] = useState({ organization: "", contactName: "", email: "", details: "" });
  const [status, setStatus] = useState<"idle" | "error">("idle");

  const validate = () => {
    let valid = true;
    const newErrors = { organization: "", contactName: "", email: "", details: "" };
    
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization name is required.";
      valid = false;
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required.";
      valid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid corporate/government email is required.";
      valid = false;
    }
    if (!formData.details.trim()) {
      newErrors.details = "Training requirements are required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus("error");
    }
  };

  return (
    <>
      <Section background="warm" spacing="md">
        <Container>
          <Breadcrumbs 
            items={[
              { label: "Training", href: "/training" },
              { label: "Request Inquiry" }
            ]} 
            className="mb-8" 
          />
          <Heading level={1} kicker="Corporate & Government">
            Request Training Inquiry
          </Heading>
          <p className="mt-4 max-w-2xl text-academic-ink-secondary">
            Submit a formal inquiry for customized capability-building programs for your organization.
          </p>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container size="sm">
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-md" role="alert">
              <strong>Integration Required:</strong> The B2B/G2G submission endpoint is currently not configured. No backend CRM or email service is connected to handle this request.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-academic-navy mb-1">Organization Name</label>
                <input 
                  type="text" 
                  id="organization" 
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  className="w-full border border-academic-grey-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-academic-blue"
                  aria-invalid={!!errors.organization}
                />
                {errors.organization && <p className="text-red-600 text-xs mt-1">{errors.organization}</p>}
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-academic-navy mb-1">Point of Contact</label>
                <input 
                  type="text" 
                  id="contactName" 
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  className="w-full border border-academic-grey-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-academic-blue"
                  aria-invalid={!!errors.contactName}
                />
                {errors.contactName && <p className="text-red-600 text-xs mt-1">{errors.contactName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-academic-navy mb-1">Official Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border border-academic-grey-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-academic-blue"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-academic-navy mb-1">Organization Type</label>
              <select 
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full border border-academic-grey-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-academic-blue"
              >
                <option value="corporate">Corporate / Enterprise</option>
                <option value="government">Government / Defense</option>
                <option value="academic">Academic Institution</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-academic-navy mb-1">Training Requirements</label>
              <textarea 
                id="details" 
                rows={5}
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                placeholder="Briefly describe your objectives, target audience, and preferred delivery mode..."
                className="w-full border border-academic-grey-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-academic-blue"
                aria-invalid={!!errors.details}
              />
              {errors.details && <p className="text-red-600 text-xs mt-1">{errors.details}</p>}
            </div>

            <Button type="submit" className="w-full">
              Submit Formal Inquiry
            </Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
