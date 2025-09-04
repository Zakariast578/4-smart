import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Company: ['About Us', 'Our Team', 'Careers', 'News'],
    Services: ['IoT Tracking', 'Smart Monitoring', 'Soil Sensors', 'Farm Software'],
    Products: ['Qowsaar Tracker', 'AgriSense Monitor', 'HydroSmart System', 'All Products'],
    Support: ['Documentation', 'Technical Support', 'Installation', 'Maintenance'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 mb-6"
              >
                <div className="text-3xl font-bold text-green-400">4SMART</div>
              </motion.div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Transforming Somali agriculture through innovative IoT solutions. 
                We empower farmers and livestock keepers with smart technology for sustainable growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <motion.a
                  href="tel:+252613328355"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span>+252 613 328 355</span>
                </motion.a>
                <motion.a
                  href="mailto:info@4smart.org.so"
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <Mail size={18} />
                  <span>info@4smart.org.so</span>
                </motion.a>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <MapPin size={18} />
                  <span>Mogadishu, Somalia</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {['Home', 'About', 'Team', 'Services', 'Products', 'Contact'].map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <nav className="space-y-3">
                {footerLinks.Services.map((link, index) => (
                  <motion.a
                    key={link}
                    href="#services"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="block text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-300">
                  Get the latest updates on our IoT innovations and agricultural technology.
                </p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 4SMART. All rights reserved. Innovating Somali Agriculture.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;