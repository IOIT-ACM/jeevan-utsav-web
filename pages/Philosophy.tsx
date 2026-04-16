import React from 'react';

//HANDCRAFTED PHILOSOPHY PAGE: pamphlet-like, textured, narrative typography.
const Philosophy: React.FC = () => {
  return (
    <>
      <main className="philosophy-page" style={{ background: '#efe7d0', minHeight: '100vh' }}>
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(0,0,0,.04) 1px, transparent 1px)',
            backgroundSize: '2px 2px',
            opacity: 0.25,
          }}
        />
        <section
          className="max-w-4xl mx-auto p-8"
          style={{
            background: '#f5ecda',
            borderRadius: 20,
            border: '1px solid #e6d5bd',
            boxShadow: '0 20px 60px rgba(0,0,0,.04)',
          }}
        >
          <div className="mb-6" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              aria-hidden
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                display: 'inline-grid',
                placeItems: 'center',
                background: '#fff',
                boxShadow: 'inset 0 0 0 2px #d6c4a0',
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 2,
                  background: '#7a4e23',
                  display: 'block',
                  transform: 'rotate(12deg)',
                }}
              />
            </span>
            <h1
              style={{
                fontFamily: 'Merriweather, serif',
                fontSize: '2rem',
                margin: 0,
                color: '#2b2b2b',
              }}
            >
              Jeevan Vidya Philosophy
            </h1>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#584a2f', lineHeight: 1.75 }}>
            At the heart of Jeevan Utsav Kendra lies the philosophy of Jeevan Vidya (Knowledge of
            Life). It invites us to understand the reality of existence and our role within it. We
            seek harmony with land, learning, and living wisdom—practical ethics for classrooms,
            farms, and families.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <section
              style={{
                padding: '1rem 1.25rem',
                border: '1px solid #e8d6bd',
                borderRadius: 12,
                background: '#fffef8',
              }}
            >
              <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: '1.25rem', margin: 0 }}>
                Core Values
              </h3>
              <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                <li>Co-existence with animals, plants, and nature</li>
                <li>Human relations built on trust and care</li>
                <li>Self-regulation and sustainable living</li>
              </ul>
            </section>
            <section
              style={{
                padding: '1rem 1.25rem',
                border: '1px solid #e8d6bd',
                borderRadius: 12,
                background: '#fffdf8',
              }}
            >
              <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: '1.25rem', margin: 0 }}>
                Our Approach
              </h3>
              <p
                style={{
                  marginTop: 6,
                  fontFamily: 'Inter, sans-serif',
                  color: '#5a4a2f',
                  lineHeight: 1.75,
                }}
              >
                We practice these values daily: students learn through curiosity and cooperation,
                not fear. Our farming treats soil as a living partner, not a commodity to be
                exploited.
              </p>
            </section>
          </div>

          <blockquote
            className="mt-6"
            style={{
              borderLeft: '6px solid #7a4e23',
              paddingLeft: 12,
              fontFamily: 'Merriweather, serif',
              fontStyle: 'italic',
              color: '#3a2f1f',
            }}
          >
            “The goal of human life is to resolve conflicts within oneself, in the family, in
            society, and with nature.”
          </blockquote>

          <p style={{ fontFamily: 'Inter, sans-serif', color: '#5a4a2f', lineHeight: 1.8 }}>
            We invite you to visit, engage in dialogue, and explore how timeless principles can
            guide modern life toward peace and sustainability.
          </p>
        </section>
      </main>
    </>
  );
};

export default Philosophy;
