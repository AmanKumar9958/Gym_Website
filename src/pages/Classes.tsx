import { useState } from 'react';
import { motion } from 'framer-motion';

interface ClassInfo {
  id: number;
  name: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  schedule: string;
  instructor: string;
  duration: string;
  maxParticipants: number;
  equipment: string[];
  level: string;
  calories: string;
}

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const classesData: ClassInfo[] = [
    {
      id: 1,
      name: "Yoga & Meditation",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Find balance and inner peace",
      longDesc: "Our yoga classes combine traditional practices with modern techniques to help you achieve physical and mental wellness. Perfect for all skill levels, from beginners to advanced practitioners.",
      benefits: [
        "Improved flexibility and balance",
        "Stress reduction",
        "Better posture",
        "Enhanced mindfulness",
        "Increased strength"
      ],
      schedule: "Mon/Wed/Fri - 7:00 AM to 8:30 AM",
      instructor: "Sarah Johnson",
      duration: "90 minutes",
      maxParticipants: 20,
      equipment: ["Yoga mat", "Blocks", "Straps"],
      level: "beginner",
      calories: "200-300"
    },
    {
      id: 2,
      name: "Muscle Building",
      image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Build strength and muscle mass",
      longDesc: "Our muscle building program is designed to help you achieve your strength goals through progressive resistance training, proper nutrition guidance, and expert coaching.",
      benefits: [
        "Increased muscle mass",
        "Enhanced strength",
        "Improved metabolism",
        "Better body composition",
        "Professional guidance"
      ],
      schedule: "Tue/Thu/Sat - 6:00 PM to 7:30 PM",
      instructor: "Mike Stevens",
      duration: "60 minutes",
      maxParticipants: 15,
      equipment: ["Free weights", "Resistance bands", "Barbells"],
      level: "advanced",
      calories: "400-600"
    },
    {
      id: 3,
      name: "Weight Loss Program",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Transform your body, transform your life",
      longDesc: "Our comprehensive weight loss program combines high-intensity cardio, strength training, and nutritional guidance to help you achieve sustainable weight loss results.",
      benefits: [
        "Fat loss",
        "Increased endurance",
        "Nutritional coaching",
        "Personalized workouts",
        "Support community"
      ],
      schedule: "Mon/Wed/Fri - 5:30 PM to 7:00 PM",
      instructor: "Emily Rodriguez",
      duration: "90 minutes",
      maxParticipants: 12,
      equipment: ["Treadmill", "Kettlebells", "Jump rope"],
      level: "intermediate",
      calories: "500-700"
    }
  ];

  const filteredClasses = activeTab === 'all' 
    ? classesData 
    : classesData.filter(c => c.level === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 overflow-visible mt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-center text-primary mb-4">Our Classes</h1>
        <p className="mt-4 text-center text-gray-300 text-xl mb-12">
          Transform your body and mind with our expert-led fitness classes
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex justify-center space-x-4 mb-12">
        {['all', 'beginner', 'intermediate', 'advanced'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as typeof activeTab)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab
                ? 'bg-primary text-secondary font-bold'
                : 'bg-secondary text-gray-300 hover:text-primary border border-primary'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {filteredClasses.map((classItem) => (
          <motion.div
            key={classItem.id}
            variants={itemVariants}
            className="relative group cursor-pointer"
            onClick={() => setSelectedClass(classItem)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={classItem.image}
                alt={classItem.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">{classItem.name}</h3>
                <p className="text-white text-lg mb-2">{classItem.shortDesc}</p>
                <div className="flex items-center space-x-4 text-gray-300 mb-4">
                  <span>🕒 {classItem.duration}</span>
                  <span>🔥 {classItem.calories} cal</span>
                </div>
                <button className="mt-4 px-6 py-2 bg-primary text-secondary rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedClass && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-secondary rounded-2xl p-8 max-w-2xl w-full relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors duration-300"
              onClick={() => setSelectedClass(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-3xl font-bold text-primary mb-4">{selectedClass.name}</h3>
            <p className="text-gray-300 mb-6">{selectedClass.longDesc}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Duration</h4>
                <p className="text-gray-300">{selectedClass.duration}</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Calories Burned</h4>
                <p className="text-gray-300">{selectedClass.calories}</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Class Size</h4>
                <p className="text-gray-300">Max {selectedClass.maxParticipants} people</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Level</h4>
                <p className="text-gray-300 capitalize">{selectedClass.level}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-primary mb-3">Required Equipment:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedClass.equipment.map((item, index) => (
                  <span key={index} className="bg-primary bg-opacity-20 text-primary px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-primary mb-3">Benefits:</h4>
              <ul className="space-y-2">
                {selectedClass.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 mb-6">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Schedule:</h4>
                <p>{selectedClass.schedule}</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Instructor:</h4>
                <p>{selectedClass.instructor}</p>
              </div>
            </div>

            <button
              className="mt-8 w-full py-4 px-8 bg-primary text-secondary rounded-lg font-bold hover:bg-accent transition-colors duration-300"
              onClick={() => setSelectedClass(null)}
            >
              Join This Class
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Classes;