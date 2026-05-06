'use client';

import { useState } from 'react';
import { Droplets, Sun, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Navbar from '../../components/Navbar';

const productCategories = [
  {
    category: "Automation Gear",
    icon: <Droplets className="w-8 h-8 text-green-400" />,
    description: "Advanced control systems and smart devices for automated farm management",
    products: [
      { 
        name: "Smart Timers", 
        description: "Programmable irrigation controllers with mobile app integration and weather-based scheduling",
        features: ["Mobile App Control", "Weather Integration", "Multi-Zone Support", "Energy Efficient"],
        price: "$299"
      },
      { 
        name: "Soil Moisture Sensors", 
        description: "Real-time soil monitoring and automated watering triggers with precision accuracy",
        features: ["Real-time Monitoring", "Automated Triggers", "Precision Accuracy", "Wireless Connectivity"],
        price: "$199"
      },
      { 
        name: "Pump Controllers", 
        description: "Automated pump systems with pressure regulation and remote monitoring capabilities",
        features: ["Pressure Regulation", "Remote Monitoring", "Auto-Shutoff", "Energy Optimization"],
        price: "$449"
      }
    ]
  },
  {
    category: "Water Delivery",
    icon: <Droplets className="w-8 h-8 text-blue-400" />,
    description: "High-efficiency water transport and distribution systems for optimal irrigation",
    products: [
      { 
        name: "HDPE Piping", 
        description: "High-durability piping systems for efficient water transport with minimal friction loss",
        features: ["UV Resistant", "High Durability", "Low Friction", "Easy Installation"],
        price: "$2.49/ft"
      },
      { 
        name: "Automated Valves", 
        description: "Smart valve systems for precise flow control with remote operation capabilities",
        features: ["Precise Control", "Remote Operation", "Leak Detection", "Auto-Cleaning"],
        price: "$189"
      },
      { 
        name: "Specialized Sprinklers", 
        description: "Efficiency-optimized sprinkler heads for various crop types and field conditions",
        features: ["Crop-Specific", "Water Efficiency", "Adjustable Patterns", "Low Maintenance"],
        price: "$79"
      }
    ]
  },
  {
    category: "Solar & Lighting",
    icon: <Sun className="w-8 h-8 text-yellow-400" />,
    description: "Sustainable energy solutions and lighting systems for farm operations",
    products: [
      { 
        name: "Solar Floodlights", 
        description: "High-intensity security lighting powered by solar energy with motion detection",
        features: ["Motion Detection", "High Intensity", "Battery Backup", "Weatherproof"],
        price: "$159"
      },
      { 
        name: "Motion Sensor Lights", 
        description: "Smart garden lighting with motion detection and adjustable sensitivity settings",
        features: ["Motion Detection", "Adjustable Sensitivity", "LED Technology", "Solar Powered"],
        price: "$89"
      },
      { 
        name: "PV Panel Systems", 
        description: "Complete solar panel installations for farm operations with battery storage",
        features: ["Battery Storage", "Grid Tie Option", "Remote Monitoring", "25 Year Warranty"],
        price: "From $2,999"
      }
    ]
  }
];

export default function ProductsPage() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[25vh] min-h-[200px] bg-gradient-to-br from-gray-900 to-green-900">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center pt-8">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg md:text-xl text-green-100">Hardware and tangible solutions for modern farming</p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, catIndex) => (
              <div key={catIndex} className="relative">
                {/* Category Header */}
                <div className="flex items-center justify-center mb-12">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-2xl border-4 border-green-400/30">
                      {category.icon}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full shadow-lg">
                      <h3 className="text-lg font-bold">{category.category}</h3>
                    </div>
                  </div>
                </div>

                {/* Category Description */}
                <div className="text-center mb-8">
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">{category.description}</p>
                </div>

                {/* Condensed Product Card */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:bg-green-800/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                          {category.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">{category.category}</h4>
                          <p className="text-gray-300">{category.products.length} Products Available</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setExpandedCategory(expandedCategory === catIndex ? null : catIndex)}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                      >
                        {expandedCategory === catIndex ? 'Hide' : 'View'} Products
                        <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                          expandedCategory === catIndex ? 'rotate-90' : ''
                        }`} />
                      </button>
                    </div>

                    {/* Expanded Product Details */}
                    {expandedCategory === catIndex && (
                      <div className="space-y-6 mt-8 pt-8 border-t border-green-500/20">
                        {category.products.map((product, prodIndex) => (
                          <div key={prodIndex} className="bg-gray-900/50 rounded-xl p-6 border border-green-500/10">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h5 className="text-xl font-bold text-white mb-2">{product.name}</h5>
                                <p className="text-gray-300 mb-4">{product.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {product.features.map((feature, idx) => (
                                    <span key={idx} className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-green-400">{product.price}</div>
                                <div className="flex items-center mt-2">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                              Get Quote
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our team can design custom solutions tailored to your specific farm requirements and operational needs.
          </p>
          <button className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Request Custom Quote
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
