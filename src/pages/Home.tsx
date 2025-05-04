import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[150vh] bg-secondary overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            filter: "brightness(0.5)"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-8 top-text">
                TRANSFORM YOUR BODY
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-white mb-8 mid-text">
                TRANSFORM YOUR LIFE
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl bottom-text">
                Join the ultimate fitness experience where strength meets dedication.
              </p>
              
              <div className="mt-10 flex justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary px-8 py-3 text-lg font-semibold text-secondary shadow-sm hover:bg-accent transition duration-300"
                >
                  <span className="start">Start Now</span>
                </a>
                <Link to={"/classes"} className="rounded-md bg-secondary px-8 py-3 text-lg font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-secondary transition duration-300">
                  <span className="learn">Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-2 border-primary rounded-lg feature">
              <h3 className="text-xl font-bold text-primary mb-4">Expert Trainers</h3>
              <p className="text-gray-300">Professional guidance to help you achieve your fitness goals.</p>
            </div>
            <div className="text-center p-6 border-2 border-primary rounded-lg feature">
              <h3 className="text-xl font-bold text-primary mb-4">Modern Equipment</h3>
              <p className="text-gray-300">State-of-the-art facilities for optimal workout experience.</p>
            </div>
            <div className="text-center p-6 border-2 border-primary rounded-lg feature">
              <h3 className="text-xl font-bold text-primary mb-4">Flexible Hours</h3>
              <p className="text-gray-300">Open 24/7 to fit your busy schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;