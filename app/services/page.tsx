'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Droplets, Sun, Map, Zap, Shield, TrendingUp } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] bg-gradient-to-br from-green-600 to-green-800 mt-16">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Professional Water & Energy Solutions</h1>
            <p className="text-lg md:text-xl text-green-100">Backed by Advanced Science & Local Expertise</p>
          </div>
        </div>
      </section>

      {/* Service 1: Water Resources Assessment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Map className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Water Resources Assessment & Flood Management</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Professional hydrological surveys, flood risk mapping, and sustainable water source identification for farms and communities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">GIS-Based Water Table Mapping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Flood Plain Analysis & Early Warning Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Watershed Studies & Catchment Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Borehole Siting & Groundwater Assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Environmental Impact Assessments</span>
                </li>
              </ul>
              <button 
                onClick={() => setExpandedService(expandedService === 1 ? null : 1)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {expandedService === 1 ? 'Show Less' : 'Learn More'}
              </button>
            </div>
            <div>
              <img
                src="/images/hydrological-survey-mapping.png"
                alt="Hydrological Survey and Mapping"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Expanded Content for Service 1 */}
          {expandedService === 1 && (
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Hydrological Surveying</h3>
              <p className="text-gray-700 mb-6">
                Leveraging state-of-the-art HEC-RAS and HEC-HMS modelling software, combined with GIS technology and geological data analysis, we provide:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Core Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Terrain Analysis & Topographic Mapping</li>
                    <li>✓ Water Table Assessment & Groundwater Modelling</li>
                    <li>✓ Flow Rate Analysis & Seasonal Variability Studies</li>
                    <li>✓ Flood Risk Mapping & Early Warning Systems</li>
                    <li>✓ Watershed Delineation & Catchment Management</li>
                    <li>✓ Water Quality Assessment & Monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Our Expertise</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Certified Floodplain Manager (CFM)</li>
                    <li>• PhD Researcher in Intelligent Water Systems</li>
                    <li>• Member: International Association of Hydrological Sciences (IAHS)</li>
                    <li>• Member: Hydrologist's Society of Kenya (HSK)</li>
                    <li>• Former Task Force Member: Presidential Big-4 Water Security Initiative</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Software Technology We Use</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold text-blue-600 mb-2">HEC-RAS & HEC-HMS</p>
                    <p>High-fidelity floodplain mapping & hydrodynamic analysis</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600 mb-2">SWMM</p>
                    <p>Urban drainage & stormwater systems modeling</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600 mb-2">GIS & Remote Sensing</p>
                    <p>Python, R for spatial analysis & watershed delineation</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white mb-6">
                <h4 className="font-bold mb-4">Innovative AI-Powered Solutions</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">🤖 Hydro-Semantic Agent</p>
                    <p>Automated hydraulic modeling using LLM-powered agents</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">📄 "Text-to-Hydraulics" Interface</p>
                    <p>Converts PDFs, BIM/IFC files to SWMM/HEC-RAS input files</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">📊 Automated Compliance Reporting</p>
                    <p>AI-generated regulatory compliance reports</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">📈 Smart Demand Forecasting</p>
                    <p>Integrated water demand prediction system</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">Ideal For</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold text-green-600 mb-2">Agricultural Sector:</p>
                    <ul className="space-y-1">
                      <li>• Large-scale farms seeking sustainable water sources</li>
                      <li>• Horticulture operations requiring precision irrigation</li>
                      <li>• Properties in flood-prone areas</li>
                      <li>• Greenhouse farms requiring climate-resilient management</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-green-600 mb-2">Community & Infrastructure:</p>
                    <ul className="space-y-1">
                      <li>• Communities facing water scarcity in ASAL regions</li>
                      <li>• Urban developments requiring stormwater management</li>
                      <li>• Real estate projects requiring environmental compliance</li>
                      <li>• County governments implementing flood warning systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service 2: Smart Irrigation */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/irrigation-automation.png"
                alt="Smart Irrigation Automation"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Smart Irrigation & Water Management Systems</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Data-driven irrigation solutions combining hydrological expertise with modern automation technology.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Precision Drip & Sprinkler Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Soil Moisture Monitoring & Automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Solar-Powered Irrigation Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Water Conservation Solutions (40%+ savings)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Remote Monitoring via Mobile App</span>
                </li>
              </ul>
              <button 
                onClick={() => setExpandedService(expandedService === 2 ? null : 2)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {expandedService === 2 ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>

          {/* Expanded Content for Service 2 */}
          {expandedService === 2 && (
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Irrigation Automation</h3>
              <p className="text-gray-700 mb-6">
                Precision Water Management for Maximum Yield
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    Custom System Design
                  </h4>
                  <p className="text-gray-700 mb-4">Every farm is unique. We design irrigation systems based on:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Your farm's specific topography and slope analysis</li>
                    <li>• Crop water requirements and growth cycles</li>
                    <li>• Soil type and infiltration rates</li>
                    <li>• Available water sources and flow capacity</li>
                    <li>• Climate patterns and seasonal variation</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    Smart Technology Integration
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Real-time soil moisture sensors</li>
                    <li>✓ Automated weather-based scheduling</li>
                    <li>✓ Remote control via mobile app (iOS & Android)</li>
                    <li>✓ Precision drip and sprinkler delivery</li>
                    <li>✓ Water usage analytics and reporting</li>
                    <li>✓ Leak detection and system diagnostics</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white mb-8">
                <h4 className="font-bold mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Water Conservation Expected Results
                </h4>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold mb-1">40-60%</p>
                    <p className="text-sm">Reduce water waste</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">70%</p>
                    <p className="text-sm">Lower labor costs</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">25-35%</p>
                    <p className="text-sm">Increase crop yields</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">100%</p>
                    <p className="text-sm">Optimize fertigation</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">System Features</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Solar-powered pump integration</li>
                    <li>• Battery backup for uninterrupted operation</li>
                    <li>• Multi-zone control for different crop types</li>
                    <li>• Rain sensors and weather forecasting integration</li>
                    <li>• Pressure regulation and filtration systems</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Perfect For</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Horticulture farms (vegetables, flowers, fruits)</li>
                    <li>• Greenhouse operations</li>
                    <li>• Large-scale maize and cereal farms</li>
                    <li>• Coffee and tea plantations</li>
                    <li>• Pasture and livestock watering</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service 3: Solar Power Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Agriculture-Friendly Solar Energy Solutions</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Complete off-grid solar systems for irrigation, farm operations, and rural electrification.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Solar Water Pump Installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Farm Electrification Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Solar Lighting & Security Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Energy Audits & ROI Analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Battery Storage Solutions</span>
                </li>
              </ul>
              <button 
                onClick={() => setExpandedService(expandedService === 3 ? null : 3)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {expandedService === 3 ? 'Show Less' : 'Learn More'}
              </button>
            </div>
            <div>
              <img
                src="/images/solar-light.png"
                alt="Solar Power Systems"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Expanded Content for Service 3 */}
          {expandedService === 3 && (
            <div className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solar Power Systems for Agriculture</h3>
              <p className="text-gray-700 mb-6">Clean, Reliable Energy for Off-Grid Operations</p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">1. Solar Water Pumping Systems</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <ul className="space-y-2">
                      <li>→ Surface and submersible pump installations</li>
                      <li>→ Flow rates from 5,000 to 100,000 liters/day</li>
                      <li>→ DC and AC pump configurations</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>→ Battery backup or direct solar operation</li>
                      <li>→ Ideal for boreholes, rivers, and dams</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">2. Farm Electrification</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <ul className="space-y-2">
                      <li>→ Complete off-grid power systems</li>
                      <li>→ Power for farm buildings, cold storage, processing</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>→ Scalable from 1kW to 100kW+ systems</li>
                      <li>→ Grid-tie and hybrid options available</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-4">3. Solar Lighting & Security</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <ul className="space-y-2">
                      <li>→ Perimeter floodlights with motion sensors</li>
                      <li>→ Homestead and pathway lighting</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>→ CCTV camera power solutions</li>
                      <li>→ Emergency backup lighting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 text-white mb-6">
                <h4 className="font-bold mb-4">Why Solar for Kenyan Farms?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2">
                    <li>→ Eliminate high electricity bills (KPLC costs rising 15% annually)</li>
                    <li>→ Reliable power in remote areas</li>
                    <li>→ Low maintenance (25+ year panel lifespan)</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>→ Government tax incentives for agricultural solar</li>
                    <li>→ Increase property value</li>
                    <li>→ Reduce carbon footprint</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Our Track Record</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Former Project Manager at Sun-Culture Kenya (2016-2019)</li>
                  <li>• Installed 50+ solar water pump systems in Lower Eastern region</li>
                  <li>• Specialized in arid and semi-arid land (ASAL) solutions</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service 4: Flood Management */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flood Management & Climate Resilience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect Your Investment from Extreme Weather. Given Kenya's increasing climate variability, flood management is critical.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Flood Risk Assessment</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Detailed floodplain mapping using HEC-RAS</li>
                <li>• Historical flood data analysis</li>
                <li>• Climate change impact projections</li>
                <li>• Property vulnerability assessment</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Early Warning Systems</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Real-time rainfall monitoring</li>
                <li>✓ Automated SMS alerts for flood warnings</li>
                <li>✓ Community-based early warning protocols</li>
                <li>✓ Integration with Kenya Meteorological Department</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Mitigation Solutions</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>→ Drainage system design and implementation</li>
                <li>→ Flood barriers and retention structures</li>
                <li>→ Land grading and water diversion</li>
                <li>→ Insurance documentation and compliance</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-600 rounded-xl p-6 text-white text-center">
            <h4 className="font-bold mb-2">Expert Credentials</h4>
            <p className="text-sm">Certified Floodplain Manager (CFM) • Published researcher in flood early warning systems • Experience with UNDP-GEF flood management projects</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve maximum efficiency and sustainability.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Free Consultation
          </button>
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
