'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[25vh] min-h-[200px] bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center pt-8">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-green-100">Professional capabilities and technical expertise for modern farming</p>
          </div>
        </div>
      </section>

      {/* Service Introduction Section */}
      <section id="service-intro" className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="w-4/5 mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-green-50 p-6 sm:p-8 lg:p-12">
            {/* Morphic and Mirror Effect Container */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Image with Morphic Effect */}
              <div className="relative order-2 md:order-1">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  {/* Mirror Effect on Right Side */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full skew-x-12 opacity-60 hidden sm:block"></div>
                  
                  {/* Main Image */}
                  <img
                    src="/images/service-intro.png"
                    alt="Service Introduction - Farm Automation Solutions"
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl transform transition-all duration-700 hover:scale-105 object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  
                  {/* Morphic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Right Side - Description */}
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Transform Your Farm with Smart Solutions
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    <span className="font-semibold text-green-700">Hydrological Surveying:</span> State-of-the-art GIS technology and geological data analysis for comprehensive water source identification. We conduct thorough terrain analysis, create detailed water table maps, and assess flow rates for sustainable water management.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    <span className="font-semibold text-green-700">Comprehensive Automation:</span> Cutting-edge technology combined with agricultural expertise to deliver solutions that increase efficiency, reduce costs, and promote sustainable farming practices.
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">
                      <strong>Precision Technology:</strong> Advanced sensors and automation systems
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">
                      <strong>Sustainable Solutions:</strong> Eco-friendly approaches that reduce impact
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">
                      <strong>Expert Support:</strong> Professional consultation and ongoing assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Light Section */}
      <section id="solar-light" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
        <div className="w-4/5 mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-green-500/20 p-6 sm:p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Description */}
              <div className="space-y-4 sm:space-y-6 order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Solar-Powered Lighting Solutions
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    <span className="font-semibold text-yellow-400">Comprehensive Systems:</span> Security floodlights, garden illumination, and custom installations that harness solar energy for reliable, eco-friendly lighting without grid dependency.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    <span className="font-semibold text-yellow-400">Off-Grid Independence:</span> Perfect for remote farm locations and sustainable operations, providing reliable lighting that operates independently of traditional power sources.
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-300">
                      <strong>Energy Independence:</strong> Complete off-grid operation with battery storage
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-300">
                      <strong>Motion Detection:</strong> Smart sensors for enhanced security and efficiency
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-300">
                      <strong>Weatherproof Design:</strong> Built to withstand harsh agricultural conditions
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="relative order-2">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  {/* Mirror Effect on Right Side */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent transform translate-x-full skew-x-12 opacity-60 hidden sm:block"></div>
                  
                  {/* Main Image */}
                  <img
                    src="/images/solar-light.png"
                    alt="Solar Light Solutions - Farm Lighting Systems"
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl transform transition-all duration-700 hover:scale-105 object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  
                  {/* Morphic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Irrigation Automation Section */}
      <section id="irrigation-automation" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="w-4/5 mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Image */}
              <div className="relative order-2 md:order-1">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                  {/* Mirror Effect on Right Side */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent transform translate-x-full skew-x-12 opacity-60 hidden sm:block"></div>
                  
                  {/* Main Image */}
                  <img
                    src="/images/irrigation-automation-service.png"
                    alt="Irrigation Automation - Smart Water Management"
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl transform transition-all duration-700 hover:scale-105 object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  
                  {/* Morphic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Right Side - Description */}
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Smart Irrigation Automation
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    <span className="font-semibold text-blue-700">Custom System Design:</span> Perfectly suited to your farm's unique topography and crop requirements. Our solutions include topography-based design, crop-specific methods, and advanced conservation techniques.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    <span className="font-semibold text-blue-700">Intelligent Management:</span> Revolutionize water management with soil moisture sensors, automated scheduling, and precision delivery for optimal crop hydration while conserving water and reducing labor costs.
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">
                      <strong>Smart Sensors:</strong> Real-time soil moisture and weather monitoring
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">
                      <strong>Automated Control:</strong> Remote management via mobile app and web interface
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-gray-700">
                      <strong>Water Conservation:</strong> Precision delivery reduces waste by up to 40%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve maximum efficiency and sustainability in your agricultural operations.
          </p>
          <button className="bg-white text-green-700 hover:bg-green-50 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="font-semibold">FarmAuto</span>
            </div>
            <p className="text-gray-400">© 2024 Farm Automation & Mechanization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
