import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920")',
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
            <a
              href="https://forms.gle/EQruEqFRhkiYA85z7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-forest-green px-8 py-3 rounded-full font-bold transition-all shadow-lg"
            >
              Register for Youth Camp
            </a>
          </div>
        </div>
      </div>

      <section className="py-12 bg-soil-brown text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <span className="bg-white text-soil-brown px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  Upcoming Event
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Akshay Shrushti - Jeevan Drushti
                </h2>
                <p className="text-xl italic mb-6 text-sand-beige">
                  "हाथ लगे निर्माण में, नहीं मांगने, नहीं मारने"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-sand-beige" />
                    <span>04 - 10 April (7 Days)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-sand-beige" />
                    <span>For 10th Appeared Students</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-sand-beige" />
                    <span>Nargol, Gujarat</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <div className="text-center lg:text-right mb-4">
                  <p className="text-sm text-sand-beige">Contribution Fee</p>
                  <p className="text-4xl font-bold">₹2,500</p>
                  <p className="text-xs text-sand-beige opacity-80">Residence & Food included</p>
                </div>
                <a
                  href="https://forms.gle/EQruEqFRhkiYA85z7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest-green hover:bg-green-600 text-white text-center px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600"
                alt="Farming"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">Organic Farming</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600"
                alt="Education"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">Education</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600"
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
