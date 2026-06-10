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
    
    const subject = `New Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}
Farm Size: ${formData.farmSize}

Services of Interest:
${formData.services.join(', ')}

Message:
${formData.message}
    `.trim();
    
    window.location.href = `mailto:Cloudceedtechltd@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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


      {/* About Cloudceed Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Cloudceed Technologies International Ltd</h2>
            <p className="text-xl text-green-600 font-semibold">Bridging Advanced Science with Practical Farm Solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Our Story */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                Cloudceed was established in 2017 by <span className="font-semibold text-green-600">Wellington Wambua Musyoka</span>, a certified hydrologist and PhD researcher at Southeast University, China. What began as a solar water pump installation venture in Lower Eastern Kenya has evolved into a full-service water and energy solutions provider, combining field experience with cutting-edge research.
              </p>
              <p className="text-gray-700 mb-4">
                With over 5 years of experience in Kenya's water sector, including roles at the Ministry of Water and Sanitation and as a solar project manager, we understand the unique challenges facing farmers:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">●</span>
                  <span>Unpredictable rainfall and frequent droughts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">●</span>
                  <span>Rising electricity costs and unreliable grid power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">●</span>
                  <span>Limited technical expertise in modern farming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">●</span>
                  <span>Need for sustainable, cost-effective solutions</span>
                </li>
              </ul>
            </div>

            {/* Our Mission & Approach */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower farmers with scientifically-sound, technology-driven water and energy solutions that increase productivity, reduce costs, and promote environmental sustainability.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">1. Science-Based</h4>
                    <p className="text-gray-700 text-sm">Every solution starts with proper data, hydrological surveys, soil analysis, and climate assessment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">2. Technology-Enabled</h4>
                    <p className="text-gray-700 text-sm">We leverage advanced modelling software, IoT sensors, and mobile connectivity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">3. Locally Adapted</h4>
                    <p className="text-gray-700 text-sm">Solutions designed for Kenya's diverse climates, from coastal regions to highlands to ASAL areas</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">4. Sustainable</h4>
                    <p className="text-gray-700 text-sm">Focus on water conservation, renewable energy, and long-term viability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials & Recognition */}
          <div className="bg-gradient-to-br from-gray-900 to-green-900 rounded-xl shadow-2xl p-8 text-white mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Credentials & Recognition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-3">Academic Qualifications:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• PhD Candidate in Civil Engineering – Intelligent Construction and Operations Management (Southeast University, China)</li>
                  <li>• Master of Engineering in Hydrology and Water Resources Engineering (Hohai University, China)</li>
                  <li>• Bachelor of Science in Meteorology (University of Nairobi)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-3">Professional Certifications:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Certified Floodplain Manager (CFM)</li>
                  <li>• Member: International Association of Hydrological Sciences</li>
                  <li>• Member: Hydrologist's Society of Kenya</li>
                  <li>• Published researcher with 3+ peer-reviewed publications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Partnerships */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Partnerships</h3>
            <p className="text-gray-700 text-center mb-6">
              We collaborate with leading Chinese manufacturers for cost-effective equipment, local county governments for water projects, and international organizations (UNDP, IAEA) on water security initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Meet Our Team
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Our Projects
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Download Company Profile
              </button>
            </div>
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
                    <span>P.O Box 245, 90300, Makindu Road, Wote, Kenya</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3987.7242018644934!2d37.662369476796556!3d-1.856439036518848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTEnMjMuMiJTIDM3wrMDM5JzUzLjgiRU!5e0!3m2!1sen!2s!4v1780854605581!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cloudceed Location"
                />
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
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/images/logo.png" alt="Cloudceed Technologies" className="h-10 w-auto" />
              <span className="font-semibold">Cloudceed Technologies International Ltd</span>
            </div>
            <p className="text-gray-400">© 2024 Cloudceed Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
