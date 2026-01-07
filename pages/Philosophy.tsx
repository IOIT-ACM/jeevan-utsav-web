import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="bg-sand-beige min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center text-forest-green">
          Jeevan Vidya Philosophy
        </h1>
        
        <div className="prose prose-lg prose-green mx-auto text-gray-700">
          <p className="mb-6 leading-relaxed">
            At the heart of Jeevan Utsav Kendra lies the philosophy of <strong>Jeevan Vidya</strong> (Knowledge of Life). 
            It is a proposal to understand the reality of existence and the role of human beings within it. 
            We believe that harmony is the fundamental nature of existence, and human happiness is derived from 
            understanding and living in this harmony.
          </p>

          <h3 className="font-serif text-2xl font-semibold text-soil-brown mt-8 mb-4">Core Values</h3>
          <ul className="list-disc pl-6 space-y-3 mb-8">
            <li>
              <strong>Co-existence:</strong> Recognizing that we share this planet with animals, plants, and natural elements.
              Our survival and well-being are intrinsically linked to the well-being of the whole.
            </li>
            <li>
              <strong>Human Relations:</strong> Valuing trust, respect, and affection in our interactions. Building a society
              where every individual feels assured and related.
            </li>
            <li>
              <strong>Self-Regulation:</strong> Understanding our needs for physical facilities and ensuring we produce
              more than we consume, in a sustainable manner.
            </li>
          </ul>

          <h3 className="font-serif text-2xl font-semibold text-soil-brown mt-8 mb-4">Our Approach</h3>
          <p className="mb-6 leading-relaxed">
            We don&apos;t just preach these values; we practice them. Our residential school is a laboratory for these ideas,
            where children learn not through fear or competition, but through curiosity and cooperation. Our farming
            practices respect the soil as a living entity, not just a resource to be exploited.
          </p>

          <blockquote className="border-l-4 border-forest-green pl-4 italic text-gray-600 my-8">
            &quot;The goal of human life is to resolve conflicts within oneself, in the family, in society, and with nature.&quot;
          </blockquote>

          <p className="leading-relaxed">
            We invite you to visit us, engage in dialogue, and explore how these universal principles can be applied
            to modern life to create a more peaceful and sustainable world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;