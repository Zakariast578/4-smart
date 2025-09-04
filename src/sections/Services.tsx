import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Thermometer, Droplets, BarChart3, Satellite, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'IoT Livestock Tracking',
      description: 'Advanced GPS and health monitoring systems for livestock, providing real-time location tracking, health alerts, and breeding management.',
      features: ['Real-time GPS tracking', 'Health monitoring sensors', 'Automated alerts', 'Mobile app integration'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Thermometer,
      title: 'Smart Greenhouse Monitoring',
      description: 'Intelligent climate control systems that monitor temperature, humidity, and air quality to optimize crop growth conditions.',
      features: ['Climate monitoring', 'Automated irrigation', 'Growth optimization', 'Remote control'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Droplets,
      title: 'Soil & Water Sensors',
      description: 'Comprehensive soil analysis and water quality monitoring to ensure optimal growing conditions and efficient water usage.',
      features: ['Soil moisture tracking', 'Nutrient analysis', 'Water quality testing', 'Irrigation automation'],
      color: 'from-teal-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Farm Management Software',
      description: 'Complete digital farm management platform providing analytics, planning tools, and comprehensive reporting systems.',
      features: ['Crop planning', 'Financial tracking', 'Analytics dashboard', 'Yield predictions'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Satellite,
      title: 'Precision Agriculture',
      description: 'Satellite-based crop monitoring and precision farming techniques to maximize yield and minimize resource waste.',
      features: ['Satellite imagery', 'Crop health analysis', 'Precision planting', 'Resource optimization'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Shield,
      title: 'Agricultural Insurance',
      description: 'Technology-backed insurance solutions providing coverage and risk assessment for crops and livestock.',
      features: ['Risk assessment', 'Weather monitoring', 'Claim processing', 'Coverage optimization'],
      color: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IoT solutions designed specifically for Somalia's agricultural needs, 
            from smart livestock management to precision farming technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4"
                  >
                    <service.icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;