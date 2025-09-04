import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb } from 'lucide-react';
import aboutImg from '../assets/aboutB.png';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize Somali agriculture through innovative IoT solutions that increase productivity and sustainability for farmers and livestock keepers.',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Empowering thousands of Somali farmers with smart technology that improves crop yields and livestock management across the region.',
    },
    {
      icon: Award,
      title: 'Innovation Excellence',
      description: 'Leading the agricultural technology transformation in Somalia with cutting-edge IoT devices designed specifically for local farming needs.',
    },
    {
      icon: Lightbulb,
      title: 'Smart Solutions',
      description: 'Developing intelligent systems that provide real-time monitoring, automated irrigation, and predictive analytics for optimal farm management.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About <span className="text-green-600">4SMART</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded with a vision to transform Somalia's agricultural landscape, 4SMART emerged from 
                the recognition that traditional farming methods needed smart, technology-driven solutions 
                to address the unique challenges faced by Somali farmers and pastoralists.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began when we witnessed the struggles of local farmers dealing with unpredictable 
                weather patterns, livestock diseases, and inefficient resource management. We knew that 
                innovative IoT technology could bridge these gaps and create sustainable solutions.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <feature.icon className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={aboutImg}
                  alt="Modern farming in Somalia"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent" />
              </motion.div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">Farmers Served</div>
                  </div>
                  <div className="h-10 w-px bg-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Devices Deployed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;