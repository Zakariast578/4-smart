import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import team1 from '../assets/teammember1.jpeg';
import team2 from '../assets/teammember2.jpeg';
import team3 from '../assets/teammember3.jpeg';
import team4 from '../assets/teammember4.jpg';
import team5 from '../assets/teammember5.jpeg';
import team6 from '../assets/teammember6.png';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Iqra Ali',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in agricultural technology and sustainable farming practices in East Africa.',
      image: team6,
      email: 'Iqra@4smart.org.so',
    },
    {
      name: 'Zakaria Said',
      role: 'Chief Technology Officer',
      bio: 'IoT systems architect specializing in agricultural sensors and smart device integration for harsh environments.',
      image: team5,
      email: 'zakaria@4smart.org.so',
    },
    {
      name: 'Yahya Abdirashid',
      role: 'Head of Engineering',
      bio: 'Hardware and software engineering expert with deep knowledge of livestock management technologies.',
      image: team3,
      email: 'yahya@4smart.org.so',
    },
    {
      name: 'Muhidin Axmed',
      role: 'Head of Operations',
      bio: 'Operations strategist focused on scaling IoT solutions across Somalia\'s diverse agricultural regions.',
      image: team1,
      email: 'muhidin@4smart.org.so',

    },
    {
      name: 'Mohamed Adam',
      role: 'Field Operations Manager',
      bio: 'Agricultural specialist with extensive experience working directly with Somali farmers and pastoralists.',
      image: team2,
      email: 'mohamed@4smart.org.so',
    },
    {
      name: 'Abdimajid Ahmed',
      role: 'Product Manager',
      bio: 'Product development specialist ensuring our IoT solutions meet the real-world needs of Somali agriculture.',
      image: team4,
      email: 'abdimajid@4smart.org.so',
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-green-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts combines deep agricultural knowledge with cutting-edge 
            technology expertise to deliver innovative IoT solutions for Somalia's farming community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Photo */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-center group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 flex space-x-2"
                  >
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Mail size={16} className="text-green-600" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Linkedin size={16} className="text-green-600" />
                    </button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-600 hover:text-green-700 text-sm font-medium transition-colors duration-200"
                    >
                      {member.email}
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;