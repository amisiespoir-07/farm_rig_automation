'use client';

import { useState } from 'react';
import { Droplets, Sun, CheckCircle, Star, Zap, Gauge, ShoppingCart } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products = [
    { id: 1, name: "Smart Irrigation Controller Pro", category: "control", description: "WiFi/4G enabled central control unit with weather-based automatic adjustment. Control up to 48 zones remotely.", features: ["48 Zone Control", "Weather Integration", "Mobile App", "Cloud Analytics"], price: "KES 150,000", image: "/images/Image-2.png", rating: 5 },
    { id: 2, name: "Soil Moisture Sensor Kit", category: "control", description: "Professional capacitive sensors with real-time monitoring and 5-year solar-powered battery life.", features: ["Real-time Data", "Solar Powered", "Depth Specific", "Wireless"], price: "KES 35,000", image: "/images/Image-3.png", rating: 5 },
    { id: 3, name: "Weather Station Complete", category: "control", description: "On-site microclimate monitoring with comprehensive data logging and cloud integration.", features: ["Full Sensors", "Cloud Storage", "Solar Powered", "API Access"], price: "KES 250,000", image: "/images/Image-4.png", rating: 5 },
    { id: 4, name: "Basic Irrigation Timer", category: "control", description: "Affordable programmable controller for small to medium farms with essential automation features.", features: ["12 Zone Control", "LCD Display", "Battery Backup", "Easy Setup"], price: "KES 45,000", image: "/images/Image-5.png", rating: 4 },
    { id: 5, name: "Premium Drip Irrigation Kit (1 Acre)", category: "irrigation", description: "Complete drip system with pressure-compensating drippers, UV-resistant HDPE piping, and filtration unit.", features: ["UV Resistant", "Fertigation Ready", "Complete Kit", "Easy Install"], price: "KES 180,000", image: "/images/Image-6.png", rating: 5 },
    { id: 6, name: "Rotary Sprinkler System", category: "irrigation", description: "High-efficiency rotary sprinklers with 50m coverage radius. Ideal for large-scale operations.", features: ["50m Coverage", "Adjustable", "Low Pressure", "Durable"], price: "KES 120,000", image: "/images/Image-7.png", rating: 5 },
    { id: 7, name: "Solar Water Pump 5000L/day", category: "irrigation", description: "Submersible solar pump with complete controller system. Perfect for boreholes up to 50m depth.", features: ["5000L/day", "50m Depth", "Solar Direct", "MPPT Controller"], price: "KES 180,000", image: "/images/Image-8.png", rating: 5 },
    { id: 8, name: "Solar Water Pump 20000L/day", category: "irrigation", description: "High-capacity submersible pump for commercial farms. Includes battery backup and remote monitoring.", features: ["20000L/day", "100m Depth", "Battery Backup", "Remote Monitor"], price: "KES 450,000", image: "/images/Image-9.png", rating: 5 },
    { id: 9, name: "Water Storage Tank 10,000L", category: "irrigation", description: "UV-stabilized polyethylene tank with inlet/outlet fittings and overflow system.", features: ["10,000L Capacity", "UV Stabilized", "Food Grade", "10 Year Warranty"], price: "KES 85,000", image: "/images/Image-10.png", rating: 4 },
    { id: 10, name: "Sand Filter System", category: "irrigation", description: "Professional-grade sand filtration system for drip irrigation. Prevents clogging and extends system life.", features: ["Auto Backwash", "High Flow", "Corrosion Resistant", "Easy Maintenance"], price: "KES 65,000", image: "/images/Image-11.png", rating: 5 },
    { id: 11, name: "Solar Home System 3kW", category: "solar", description: "Complete off-grid system with panels, inverter, and lithium batteries. Powers lights, TV, fridge, and small appliances.", features: ["3kW Output", "Lithium Battery", "Pure Sine Wave", "25yr Warranty"], price: "KES 350,000", image: "/images/Image-12.png", rating: 5 },
    { id: 12, name: "Solar Home System 5kW", category: "solar", description: "Mid-range system for farm operations. Includes expandable battery bank and hybrid inverter.", features: ["5kW Output", "Expandable", "Hybrid Inverter", "Remote Monitor"], price: "KES 550,000", image: "/images/Image-13.png", rating: 5 },
    { id: 13, name: "Solar Farm System 10kW", category: "solar", description: "Commercial-grade system for processing facilities, cold storage, and heavy machinery.", features: ["10kW Output", "3-Phase", "Grid Tie Option", "Professional Install"], price: "KES 850,000", image: "/images/Image-14.png", rating: 5 },
    { id: 14, name: "Solar Floodlight 100W", category: "solar", description: "High-intensity LED floodlight with motion sensor and 3-day battery autonomy.", features: ["100W LED", "Motion Sensor", "3 Day Battery", "Weatherproof IP66"], price: "KES 25,000", image: "/images/Image-15.png", rating: 5 },
    { id: 15, name: "Solar Street Light 60W", category: "solar", description: "All-in-one solar street light with dusk-to-dawn sensor. Perfect for farm pathways.", features: ["60W LED", "Auto On/Off", "5 Day Battery", "Easy Install"], price: "KES 18,000", image: "/images/Image-16.png", rating: 4 },
    { id: 17, name: "Lithium Battery 5kWh", category: "solar", description: "Deep-cycle lithium battery with BMS protection and 6000+ cycle life.", features: ["5kWh Capacity", "6000 Cycles", "BMS Protected", "10yr Warranty"], price: "KES 180,000", image: "/images/Image-18.png", rating: 5 },
    { id: 19, name: "pH/EC/TDS Meter Combo", category: "monitoring", description: "Professional 3-in-1 water quality tester with automatic temperature compensation.", features: ["3-in-1 Meter", "Auto Calibration", "Data Logging", "Waterproof"], price: "KES 25,000", image: "/images/Image-20.png", rating: 5 },
    { id: 20, name: "NPK Soil Test Kit", category: "monitoring", description: "Complete nutrient testing kit for nitrogen, phosphorus, and potassium analysis.", features: ["NPK Testing", "100 Tests", "Color Chart", "Portable Case"], price: "KES 18,000", image: "/images/Image-21.png", rating: 4 },
    { id: 21, name: "Digital Flow Meter", category: "monitoring", description: "High-accuracy electromagnetic flow meter with data logging and remote reading.", features: ["±0.5% Accuracy", "Data Logging", "Remote Reading", "Battery Powered"], price: "KES 45,000", image: "/images/Image-22.png", rating: 5 },
    { id: 22, name: "Water Level Logger", category: "monitoring", description: "Submersible pressure sensor for continuous groundwater level monitoring.", features: ["Submersible", "1 Year Battery", "USB Download", "Stainless Steel"], price: "KES 65,000", image: "/images/Image-23.png", rating: 5 },
    { id: 23, name: "Borehole Camera System", category: "monitoring", description: "Waterproof inspection camera with 100m cable for borehole and well inspection.", features: ["100m Cable", "HD Camera", "LED Lights", "Recording"], price: "KES 120,000", image: "/images/Image-24.png", rating: 5 },
    { id: 24, name: "Water Well Drilling Rigs", category: "equipment", description: "Reliable borehole drilling equipment engineered for Kenya's diverse geological conditions, from rocky highlands to sandy ASAL regions.", features: ["Up to 450m Depth", "Crawler & Trailer", "Air/Mud Compatible", "Rugged Design"], price: "Request Quote", image: "/images/drill.png", rating: 5 },
    { id: 25, name: "Compact Mini-Excavators", category: "equipment", description: "Versatile earth-moving machines designed for efficient farm development, irrigation trenching, and land preparation in confined spaces.", features: ["2.5m Digging Depth", "Low Ground Pressure", "Quick-Change Buckets", "Fuel Efficient"], price: "Request Quote", image: "/images/image-27.jpeg", rating: 5 }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: <Droplets className="w-5 h-5" /> },
    { id: 'control', name: 'Smart Controls', icon: <Zap className="w-5 h-5" /> },
    { id: 'irrigation', name: 'Irrigation', icon: <Droplets className="w-5 h-5" /> },
    { id: 'solar', name: 'Solar Energy', icon: <Sun className="w-5 h-5" /> },
    { id: 'monitoring', name: 'Monitoring', icon: <Gauge className="w-5 h-5" /> },
    { id: 'equipment', name: 'Heavy Equipment', icon: <Gauge className="w-5 h-5" /> }
  ];

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="relative h-[30vh] min-h-[250px] bg-gradient-to-br from-green-600 to-blue-600 mt-16">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg md:text-xl text-green-100">Professional-grade equipment for modern Kenyan agriculture</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Source Equipment Through Cloudceed?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-white text-center">
            <div><CheckCircle className="w-12 h-12 mx-auto mb-3" /><h3 className="font-bold mb-2">Technical Vetting</h3><p className="text-sm">Products tested for Kenyan conditions</p></div>
            <div><CheckCircle className="w-12 h-12 mx-auto mb-3" /><h3 className="font-bold mb-2">After-Sales Support</h3><p className="text-sm">Installation & warranty coordination</p></div>
            <div><CheckCircle className="w-12 h-12 mx-auto mb-3" /><h3 className="font-bold mb-2">Local Inventory</h3><p className="text-sm">Fast delivery across Kenya</p></div>
            <div><CheckCircle className="w-12 h-12 mx-auto mb-3" /><h3 className="font-bold mb-2">Bulk Discounts</h3><p className="text-sm">Special pricing for cooperatives</p></div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${selectedCategory === category.id ? 'bg-green-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category.icon}<span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">In Stock</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />))}
                    <span className="text-sm text-gray-600 ml-2">({product.rating}.0)</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-600 mr-1 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div><p className="text-sm text-gray-500">Price</p><p className="text-2xl font-bold text-green-600">{product.price}</p></div>
                    <button 
                      onClick={() => {
                        const message = `Hello, I'm interested in the ${product.name} (${product.price}). Please provide more information.`;
                        window.open(`https://wa.me/254712960060?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.price === "Request Quote" ? "Get Quote" : "Contact Us"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Custom Solutions or Bulk Orders?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">Contact us for special pricing on cooperative and county projects, or for custom system design.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.location.href = '/contact'} className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">Request Site Assessment</button>
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-white">Download Product Catalog</button>
          </div>
        </div>
      </section>

    {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/images/logo.png" alt="Cloudceed Technologies" className="h-10 w-auto" />
              <span className="font-semibold">Cloudceed & Technologies International Ltd</span>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Cloudceed & Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
