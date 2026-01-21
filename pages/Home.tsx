import { ArrowRight } from 'lucide-react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax-like effect */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: 'url("https://picsum.photos/seed/nature/1920/1080")',
            filter: 'brightness(0.6)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Embracing Sustainable Living & Jeevan Vidya
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md">
            A sanctuary for organic farming, holistic education, and the pursuit of harmonious
            co-existence in Nargol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/philosophy"
              className="bg-forest-green hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Our Philosophy <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/activities"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/50 px-8 py-3 rounded-full font-medium transition-all"
            >
              Explore Activities
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4 bg-sand-beige">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-soil-brown font-bold tracking-wider uppercase text-sm mb-2 block">
            Welcome
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Community Rooted in Nature
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Jeevan Utsav Kendra is an NGO initiative located in the serene surroundings of Nargol,
            near Vapi. We are dedicated to exploring and living the principles of Jeevan Vidya.
            Through our residential school, organic farming practices, and skill development
            centers, we strive to build a community that lives in harmony with nature and humanity.
          </p>
          <div className="h-1 w-20 bg-forest-green mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Quick Visuals */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src="/images/organic.jpg"
                alt="Farming"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">Organic Farming</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src="/images/edu.jpg"
                alt="Education"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">Education</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src="/images/skill.jpg"
                alt="Skills"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">Skill Development</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
