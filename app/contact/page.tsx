'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageSquare, Droplets } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    farmSize: 'small',
    services: [] as string[],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services: updatedServices });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[25vh] min-h-[200px] bg-gradient-to-br from-green-600 to-green-800 mt-16">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg md:text-xl text-green-100">Ready to transform your farm? Let's discuss your specific needs</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., +254 7XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Farm/Business Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="County and specific area (e.g., Machakos County, Katangi)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size of Operation *</label>
                  <select
                    name="farmSize"
                    value={formData.farmSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="small">Small-scale (&lt;2 acres)</option>
                    <option value="medium">Medium (2-10 acres)</option>
                    <option value="large">Large (10-50 acres)</option>
                    <option value="commercial">Commercial (50+ acres)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest *</label>
                  <div className="space-y-2">
                    {[
                      'Hydrological Survey & Water Assessment',
                      'Smart Irrigation System Design',
                      'Solar Water Pump Installation',
                      'Complete Farm Automation',
                      'Flood Risk Assessment',
                      'Solar Electrification',
                      'Product Purchase Inquiry'
                    ].map((service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="mr-2"
                        />
                        <span className="text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your current challenges, water sources, power situation, and goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-green-600" />
                    <span>+254 712 960 060</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-green-600" />
                    <span>Cloudceedtech@yahoo.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-green-600" />
                    <span>Nairobi, Kenya (Serving all counties)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM EAT</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM EAT</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Sunday</span>
                    <span>Closed (Emergency support available)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Support Options</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Technical Support</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">Already have a system? Our technical team provides remote troubleshooting, on-site maintenance, and system optimization.</p>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      View FAQ & Maintenance Guides →
                    </button>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">Emergency Support</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">24/7 emergency hotline for existing clients. Rapid response within 24-48 hours with spare parts inventory in Nairobi.</p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Call Emergency Line: +254 712 960 060 →
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-3">After-Sales Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Installation and commissioning</li>
                  <li>✓ Staff training on system operation</li>
                  <li>✓ Maintenance contracts available</li>
                  <li>✓ 24/7 emergency technical support</li>
                  <li>✓ Warranty honored nationwide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our services and solutions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does a hydrological survey take?</h3>
              <p className="text-gray-600">Typically 2-3 weeks depending on the size of your property and complexity of the terrain. We use advanced HEC-RAS and GIS technology for accurate results.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer financing options?</h3>
              <p className="text-gray-600">Yes, we work with several agricultural financing companies to offer flexible payment plans. We can also provide ROI analysis to help with financing applications.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What kind of warranty do your products have?</h3>
              <p className="text-gray-600">All our products come with manufacturer warranties (typically 2-5 years). Solar panels have 25-year warranties. We honor all warranties nationwide and provide local support.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you work in ASAL regions?</h3>
              <p className="text-gray-600">Absolutely! We specialize in arid and semi-arid land solutions. Our team has extensive experience in Lower Eastern Kenya and other ASAL regions.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide training for farm staff?</h3>
              <p className="text-gray-600">Yes, comprehensive training is included with all system installations. We also offer refresher courses and ongoing technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Droplets className="w-6 h-6 text-green-400" />
              <span className="font-semibold">Cloudceed Technologies International Ltd</span>
            </div>
            <p className="text-gray-400">© 2024 Cloudceed Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
