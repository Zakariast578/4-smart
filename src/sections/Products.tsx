import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Star, ArrowRight } from 'lucide-react';
import product1 from '../assets/product1.jfif';
import product2 from '../assets/product2.jfif';
import product3 from '../assets/hero-bg.jpg';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: 'Qowsaar Livestock Tracker',
      category: 'Livestock Management',
      price: '$299',
      image: product1,
      shortDescription: 'Advanced GPS collar system for livestock tracking and health monitoring.',
      fullDescription: 'The Qowsaar Livestock Tracker is our flagship product designed specifically for Somali pastoralists. This robust, weather-resistant device provides comprehensive livestock management through advanced GPS tracking, health monitoring sensors, and intelligent alert systems.',
      features: [
        'Real-time GPS location tracking with 5m accuracy',
        'Health monitoring sensors (temperature, heart rate)',
        'Geofencing alerts for boundary violations',
        'Solar-powered with 30-day battery backup',
        'Waterproof and dustproof (IP68 rating)',
        'Mobile app with offline capabilities',
        'Emergency alert system',
        'Multi-animal tracking dashboard'
      ],
      specifications: {
        'Battery Life': '30 days with solar charging',
        'GPS Accuracy': '±5 meters',
        'Communication': '4G/LTE with SMS backup',
        'Operating Temperature': '-20°C to +60°C',
        'Weight': '180g',
        'Dimensions': '120mm × 80mm × 25mm'
      },
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: 'AgriSense Soil Monitor',
      category: 'Soil Management',
      price: '$149',
      image: product2,
      shortDescription: 'Multi-parameter soil monitoring system for precision agriculture.',
      fullDescription: 'The AgriSense Soil Monitor provides comprehensive soil analysis through multiple sensors that measure moisture, pH, nutrients, and temperature. Perfect for crop farmers looking to optimize their yield through data-driven decisions.',
      features: [
        'Multi-depth soil moisture monitoring',
        'pH and nutrient level analysis',
        'Temperature and conductivity sensors',
        'Wireless data transmission',
        'Weather-resistant housing',
        'Cloud-based analytics platform',
        'Automated irrigation triggers',
        'Historical data tracking'
      ],
      specifications: {
        'Sensor Depth': 'Up to 60cm',
        'Measurement Accuracy': '±2% moisture, ±0.1 pH',
        'Data Transmission': 'LoRaWAN, WiFi, Cellular',
        'Power Source': 'Solar panel with battery backup',
        'Operating Range': '-40°C to +85°C',
        'Installation': 'Easy push-in design'
      },
      rating: 4.7,
      reviews: 89
    },
    {
      id: 3,
      name: 'HydroSmart Water System',
      category: 'Water Management',
      price: '$599',
      image: product3,
      shortDescription: 'Intelligent water management and irrigation automation system.',
      fullDescription: 'HydroSmart revolutionizes water management for Somali farms with intelligent irrigation control, water quality monitoring, and conservation features designed for arid and semi-arid conditions.',
      features: [
        'Automated irrigation scheduling',
        'Water quality monitoring',
        'Flow rate and pressure sensors',
        'Weather-based irrigation adjustments',
        'Remote control via mobile app',
        'Water conservation algorithms',
        'Multiple zone management',
        'Emergency shutoff capabilities'
      ],
      specifications: {
        'Coverage Area': 'Up to 5 hectares',
        'Water Quality': 'pH, TDS, turbidity monitoring',
        'Pressure Range': '1-10 bar operating pressure',
        'Flow Rate': '0.1-100 L/min measurement',
        'Connectivity': 'WiFi, Cellular, Bluetooth',
        'Power Requirements': '12V DC, solar compatible'
      },
      rating: 4.9,
      reviews: 156
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge IoT devices and systems designed to address the specific challenges 
            of Somali agriculture and livestock management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-lg">
                    <span className="text-green-600 font-bold text-lg">{product.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mr-3">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.shortDescription}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                    <motion.button
                      onClick={() => setSelectedProduct(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <X size={20} className="text-gray-700" />
                  </button>
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-current" size={20} />
                          <span className="text-lg font-semibold text-gray-700 ml-1">{selectedProduct.rating}</span>
                          <span className="text-gray-500 ml-1">({selectedProduct.reviews} reviews)</span>
                        </div>
                        <span className="text-3xl font-bold text-green-600">{selectedProduct.price}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{selectedProduct.fullDescription}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedProduct.features.map((feature: string, index: number) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center"
                          >
                            <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Specifications</h4>
                      <div className="space-y-3">
                        {Object.entries(selectedProduct.specifications).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex justify-between items-center py-2 border-b border-gray-100"
                          >
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span className="text-gray-600">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                    >
                      Request Quote
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                    >
                      Download Datasheet
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;