import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-beige py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900">Visit Us</h1>
          <p className="text-gray-600 mt-2">We&apos;d love to show you around our campus.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Contact Info Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-serif text-2xl font-bold text-forest-green mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-soil-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Jeevan Utsav Kendra,
                    <br />
                    Near Nargol Beach,
                    <br />
                    Valsad District, Gujarat - 396135
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-soil-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@jeevanutsav.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-soil-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Have suggestions or feedback?</h3>
              <p className="text-sm text-gray-500 mb-4">
                We value your input to help us grow and serve better.
              </p>
              <a
                href="https://docs.google.com/forms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-green hover:bg-green-800 text-white px-5 py-2.5 rounded-lg font-medium transition-colors w-full sm:w-auto justify-center"
              >
                Fill Feedback Form <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative h-96 md:h-auto bg-gray-200">
            {/* Placeholder for Map - In a real app, use Google Maps Embed API or Leaflet */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.568478678654!2d72.7485!3d20.2345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE0JzA0LjIiTiA3MsKwNDQnNTQuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Jeevan Utsav Kendra Location"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
