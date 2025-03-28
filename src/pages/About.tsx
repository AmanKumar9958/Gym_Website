import { motion } from 'framer-motion';
import { GiWeightLiftingUp, GiMedal, GiGymBag } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-black bg-opacity-50 text-yellow-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 mb-20 items-center"
        >
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-yellow-400">Transform Your</span><br/>
              <span className="border-b-4 border-yellow-400 pb-2">Fitness Journey</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              At Iron Temple, we've been shaping champions since 2010. Our state-of-the-art facility 
              and expert trainers are committed to helping you smash your fitness goals.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800" 
              alt="Gym interior"
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="space-y-8">
            <div className="bg-yellow-400/10 p-8 rounded-xl border border-yellow-400/30">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower individuals through fitness, providing world-class facilities, 
                personalized training programs, and a community that inspires growth.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-yellow-400/10 p-6 rounded-xl">
                <div className="text-4xl font-bold text-yellow-400 mb-2">13+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-yellow-400/10 p-6 rounded-xl">
                <div className="text-4xl font-bold text-yellow-400 mb-2">5k+</div>
                <div className="text-sm">Clients Trained</div>
              </div>
              <div className="bg-yellow-400/10 p-6 rounded-xl">
                <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-yellow-400/10 p-8 rounded-xl hover:bg-yellow-400/20 transition-all">
            <GiWeightLiftingUp className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Expert Trainers</h3>
            <p className="text-gray-300">Certified professionals with minimum 10 years experience</p>
          </div>
          
          <div className="bg-yellow-400/10 p-8 rounded-xl hover:bg-yellow-400/20 transition-all">
            <GiMedal className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Proven Results</h3>
            <p className="text-gray-300">1000+ success stories and transformation journeys</p>
          </div>
          
          <div className="bg-yellow-400/10 p-8 rounded-xl hover:bg-yellow-400/20 transition-all">
            <GiGymBag className="text-4xl text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Modern Equipment</h3>
            <p className="text-gray-300">$1M+ invested in cutting-edge fitness technology</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className="bg-yellow-400 text-black p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Start Your Transformation Today</h2>
          <p className="text-lg mb-8">Choose from our flexible membership plans</p>
          <Link to="/pricing">
            <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all">
              View Pricing Plans
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;