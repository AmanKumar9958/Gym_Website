import { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Yoga Classes",
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: [
        "Expert yoga instructors",
        "All levels welcome",
        "Meditation sessions",
        "Flexibility training",
        "Weekly workshops"
      ],
      color: "primary"
    },
    {
      name: "Muscle Building",
      monthlyPrice: 69.99,
      yearlyPrice: 699.99,
      features: [
        "Personal trainer",
        "Custom workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Supplement advice"
      ],
      color: "accent"
    },
    {
      name: "Weight Loss Program",
      monthlyPrice: 59.99,
      yearlyPrice: 599.99,
      features: [
        "Cardio sessions",
        "HIIT training",
        "Diet planning",
        "Body composition analysis",
        "Support group access"
      ],
      color: "primary"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pt-20">
      <h1 className="text-5xl font-bold text-center text-primary mb-4">Membership Plans</h1>
      <p className="mt-4 text-center text-gray-300 text-xl mb-12">
        Choose the perfect plan for your fitness journey
      </p>

      {/* Pricing Toggle */}
      <div className="flex justify-center items-center space-x-4 mb-16">
        <span className={`text-lg ${!isYearly ? 'text-primary' : 'text-gray-400'}`}>Monthly</span>
        <button
          className="relative w-16 h-8 rounded-full bg-secondary border-2 border-primary"
          onClick={() => setIsYearly(!isYearly)}
        >
          <div
            className={`absolute w-6 h-6 bg-primary rounded-full top-0.5 transition-transform duration-300 
            ${isYearly ? 'translate-x-8' : 'translate-x-1'}`}
          />
        </button>
        <span className={`text-lg ${isYearly ? 'text-primary' : 'text-gray-400'}`}>Yearly</span>
      </div>

      {/* Savings Notice */}
      {isYearly && (
        <p className="text-center text-primary mt-5 mb-5 text-lg">
          Save up to 20% with yearly plans!
        </p>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 bg-secondary border-2 border-${plan.color} transform hover:scale-105 transition-transform duration-300`}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold text-white mb-8">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-lg text-gray-400">/{isYearly ? 'year' : 'month'}</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-primary mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 px-8 rounded-lg bg-${plan.color} text-secondary font-bold hover:bg-opacity-90 transition-colors duration-300`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;