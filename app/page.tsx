'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Droplets, Sun, Map, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const slides = [
  {
    title: "Hydrological Surveys & Mapping",
    subtitle: "Precision water source identification and terrain analysis",
    description: "Utilizing advanced GIS mapping and geological data to identify optimal water sources and map your farm's terrain for maximum efficiency.",
    tagline: "The Future of Farming is Automated",
    subTagline: "Precision water mapping for sustainable agriculture",
    image: "/images/hydrological-survey-mapping.png",
    icon: <Map className="w-12 h-12" />
  },
  {
    title: "Irrigation Automation",
    subtitle: "Smart water delivery systems",
    description: "Implementation of intelligent sensors, automated valves, and high-efficiency delivery systems for optimal crop hydration.",
    tagline: "Smart Irrigation for Maximum Yield",
    subTagline: "Automated water delivery for optimal crop growth",
    image: "/images/irrigation-automation.png",
    icon: <Droplets className="w-12 h-12" />
  },
  {
    title: "Farm Lighting & Solarization",
    subtitle: "Sustainable energy solutions",
    description: "Solar-powered security lighting and energy systems for remote farm equipment and operations.",
    tagline: "Solar-Powered Farm Operations",
    subTagline: "Sustainable energy solutions for modern farming",
    image: "/images/farm-lighting.png",
    icon: <Sun className="w-12 h-12" />
  }
];

// const services = [
//   {
//     title: "Hydrological Surveying",
//     description: "Comprehensive GIS mapping and water table analysis to identify sustainable water sources for your agricultural operations.",
//     features: ["Terrain Analysis", "Water Table Mapping", "Source Identification", "Flow Rate Assessment"]
//   },
//   {
//     title: "Custom Irrigation Design",
//     description: "Tailored drip and sprinkler systems designed specifically for your farm's topography and crop requirements.",
//     features: ["Topography-Based Design", "Crop-Specific Solutions", "Automated Scheduling", "Water Conservation"]
//   },
//   {
//     title: "Solar Consulting",
//     description: "Professional energy audits and solar capacity planning to power your farm operations sustainably.",
//     features: ["Energy Audits", "Capacity Planning", "System Design", "ROI Analysis"]
//   }
// ];

const services = [
  {
    title: "Water Resources Assessment",
    description: "Professional hydrological surveys, flood risk mapping, and sustainable water source identification using HEC-RAS and GIS technology.",
    features: ["GIS Water Table Mapping", "Flood Plain Analysis", "Watershed Management", "Borehole Siting"],
  },
  {
    title: "Smart Irrigation Systems",
    description: "Data-driven irrigation solutions combining hydrological expertise with automation technology for 40%+ water savings.",
    features: ["Precision Drip Systems", "Soil Moisture Monitoring", "Solar-Powered Pumps", "Mobile App Control"],
    },
  {
    title: "Solar Energy Solutions",
    description: "Complete off-grid solar systems for irrigation, farm operations, and rural electrification with battery storage.",
    features: ["Solar Water Pumps", "Farm Electrification", "Security Lighting", "Energy Audits"], 
  }
];

const products = [
  {
    category: "Automation Gear",
    items: [
      { name: "Smart Timers", description: "Programmable irrigation controllers with mobile app integration" },
      { name: "Soil Moisture Sensors", description: "Real-time soil monitoring and automated watering triggers" },
      { name: "Pump Controllers", description: "Automated pump systems with pressure regulation" }
    ]
  },
  {
    category: "Water Delivery",
    items: [
      { name: "HDPE Piping", description: "High-durability piping systems for efficient water transport" },
      { name: "Automated Valves", description: "Smart valve systems for precise flow control" },
      { name: "Specialized Sprinklers", description: "Efficiency-optimized sprinkler heads for various crop types" }
    ]
  },
  {
    category: "Solar & Lighting",
    items: [
      { name: "Solar Floodlights", description: "High-intensity security lighting powered by solar energy" },
      { name: "Motion Sensor Lights", description: "Smart garden lighting with motion detection" },
      { name: "PV Panel Systems", description: "Complete solar panel installations for farm operations" }
    ]
  }
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Slideshow */}
      <section id="home" className="relative h-[70vh] mt-16">
        <div className="relative h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="relative z-20 h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-5xl">
                  <div className="flex justify-center mb-6">
                    {slide.icon}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Smart Water & Solar Solutions for Kenya & Sub-Saharan Agriculture</h1>
                  <h2 className="text-xl md:text-2xl mb-8 text-green-200">Expert hydrological surveying, intelligent irrigation systems, and solar-powered solutions engineered for Kenya and Sub-Saharan Africa's diverse climate zones, from ASAL regions to highland farms</h2>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Slide controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic tagline overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-8">
          <div className="max-w-7xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500">
              {slides[currentSlide].tagline}
            </h2>
            <p className="text-xl text-gray-200 mb-6 transition-all duration-500">
              {slides[currentSlide].subTagline}
            </p>
          </div>
        </div>
      </section>

      {/* Key Value Propositions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">PhD Researcher</h3>
              <p className="text-gray-600 text-sm">Intelligent Water Systems, Southeast University</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Presidential Task Force</h3>
              <p className="text-gray-600 text-sm">Big-4 Water Security Initiative Member</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Embassy-Certified</h3>
              <p className="text-gray-600 text-sm">Technical Consultant (KESCA Focal Person)</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">5+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Transforming Kenyan Agriculture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Real Projects, Real Results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Project 1: Machakos County */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/Image-25.png"
                  alt="Machakos County Horticulture Farm"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                  2023
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Machakos County Horticulture Farm</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600">5-acre vegetable farm facing water scarcity and high KPLC bills</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">Solar-powered drip irrigation with automated scheduling</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-green-600">55%</p>
                      <p className="text-sm text-gray-600">Water usage reduction</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">90%</p>
                      <p className="text-sm text-gray-600">Energy cost decrease</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-yellow-600">40%</p>
                      <p className="text-sm text-gray-600">Crop yield increase</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-purple-600">18mo</p>
                      <p className="text-sm text-gray-600">ROI achieved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Nyeri Tea Farm */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/Image-26.png"
                  alt="Nyeri Tea Farm Irrigation Automation"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                  2024
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nyeri Tea Farm Irrigation Automation</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600">50-acre tea plantation with manual irrigation inefficiencies</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">Smart irrigation system with soil moisture sensors and weather integration</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Automated 12 irrigation zones</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">45% water savings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Remote monitoring via mobile app</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Labor cost reduction: KES 180,000/year</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </section>

      {/* About Company CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Want to Learn More About Cloudceed?</h2>
              <p className="text-green-200">Discover our story, mission, and the expertise behind our solutions</p>
            </div>
            <button 
              onClick={() => window.location.href = '/contact#about'}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
            >
              About Our Company
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional capabilities and technical expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 cursor-pointer ${
                  hoveredService === null 
                    ? index === 1 
                      ? 'transform scale-105 shadow-2xl' 
                      : 'transform scale-100 shadow-lg hover:shadow-xl'
                    : hoveredService === index
                    ? 'transform scale-105 shadow-2xl bg-gradient-to-br from-gray-900 to-green-900 text-white'
                    : 'transform scale-95 shadow-md bg-gray-100'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredService === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-6 transition-colors duration-300 ${
                  hoveredService === index ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center transition-colors duration-300 ${
                      hoveredService === index ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 transition-colors duration-300 ${
                        hoveredService === index ? 'text-green-400' : 'text-green-600'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 cursor-pointer ${
                  hoveredService === null 
                    ? index === 1 
                      ? 'transform scale-105 shadow-2xl' 
                      : 'transform scale-100 shadow-lg hover:shadow-xl'
                    : hoveredService === index
                    ? 'transform scale-105 shadow-2xl bg-gradient-to-br from-gray-900 to-green-900 text-white'
                    : 'transform scale-95 shadow-md bg-gray-100'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredService === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-6 transition-colors duration-300 ${
                  hoveredService === index ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
                <div className="mb-6">
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    hoveredService === index ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center transition-colors duration-300 ${
                      hoveredService === index ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 transition-colors duration-300 ${
                        hoveredService === index ? 'text-green-400' : 'text-green-600'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    const sectionId = index === 0 ? 'service-intro' : index === 1 ? 'solar-light' : 'irrigation-automation';
                    window.location.href = `/services#${sectionId}`;
                  }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    hoveredService === index 
                      ? 'bg-white text-gray-900 hover:bg-gray-100' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-xl text-green-200">Hardware and tangible solutions for modern farming</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((category, catIndex) => {
              const categoryIcons = {
                'Automation Gear': <Droplets className="w-8 h-8 text-green-400" />,
                'Water Delivery': <Droplets className="w-8 h-8 text-blue-400" />,
                'Solar & Lighting': <Sun className="w-8 h-8 text-yellow-400" />
              };
              
              return (
                <div key={catIndex} className="group">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-green-500/20 p-8 hover:bg-green-800/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400/50">
                    {/* Circular Category Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-2xl border-4 border-green-400/30 group-hover:from-green-500 group-hover:to-green-700 transition-all duration-300">
                        {categoryIcons[category.category as keyof typeof categoryIcons]}
                      </div>
                    </div>
                    
                    {/* Category Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors duration-300 text-center">
                      {category.category}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-6 text-center">
                      {category.items.length} Products Available
                    </p>
                    
                    {/* Product Preview */}
                    <div className="space-y-2 mb-6">
                      {category.items.slice(0, 2).map((product, idx) => (
                        <div key={idx} className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          • {product.name}
                        </div>
                      ))}
                      {category.items.length > 2 && (
                        <div className="text-sm text-green-400 group-hover:text-green-300 transition-colors duration-300">
                          • +{category.items.length - 2} more
                        </div>
                      )}
                    </div>
                    
                    {/* View Button */}
                    <a 
                      href="/products"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center group-hover:bg-green-500"
                    >
                      View Products
                      <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to transform your farm? Let's discuss your specific needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" placeholder="e.g., +254 7XX XXX XXX" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" placeholder="Your email address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Farm/Business Location *</label>
                  <input type="text" placeholder="County and specific area (e.g., Machakos County, Katangi)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size of Operation *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Small-scale (&lt;2 acres)</option>
                    <option>Medium (2-10 acres)</option>
                    <option>Large (10-50 acres)</option>
                    <option>Commercial (50+ acres)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest *</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray-700">Hydrological Survey & Water Assessment</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray-700">Smart Irrigation System Design</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray-700">Solar Water Pump Installation</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-gray-700">Flood Risk Assessment</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea rows={4} placeholder="Tell us about your current challenges, water sources, power situation, and goals..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM EAT</p>
                  <p>Saturday: 9:00 AM - 1:00 PM EAT</p>
                  <p>Sunday: Closed (Emergency support available)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Support</h3>
                <p className="text-gray-600 mb-4">Need help with existing systems? Our technical team is here to assist you.</p>
                <button 
                  onClick={() => window.location.href = '/contact#faq'}
                  className="flex items-center text-green-600 hover:text-green-700 font-medium cursor-pointer"
                >
                  View FAQ & Maintenance Guides
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
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
