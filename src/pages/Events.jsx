import React from 'react';

export default function Events() {
  // Helper function to open Google Maps
  const openGoogleMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section className="events-section" style={{ 
      padding: 'clamp(4rem, 8vw, 6rem) 0', 
      background: 'rgba(255, 255, 255, 0.95)',
      minHeight: '80vh'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
          <h1 className="euphoria-script-regular" style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
            color: 'var(--brand)', 
            marginBottom: '1rem',
            margin: 0
          }}>
            Wedding Events
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', 
            color: '#666', 
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '1rem auto 0'
          }}>
            Join us for our special celebration on June 27, 2026
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
          gap: 'clamp(2rem, 5vw, 3rem)',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          
          {/* Wedding Ceremony */}
          <article className="event" style={{
            background: '#fff',
            borderRadius: 'var(--radius)',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            boxShadow: 'var(--shadow)',
            border: '1px solid rgba(79, 121, 66, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow)';
          }}>
            
            {/* Church Icon */}
            <div style={{ 
              textAlign: 'center', 
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)' 
            }}>
              <div style={{
                background: 'rgba(79, 121, 66, 0.1)',
                borderRadius: '16px',
                padding: 'clamp(1rem, 3vw, 1.5rem)',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                <img 
                  src="/photos/HolyFamily.png" 
                  alt="St Alexander Church" 
                  style={{
                    width: 'clamp(60px, 15vw, 80px)',
                    height: 'auto',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* Fallback icon */}
                <div style={{
                  display: 'none',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--brand)'
                }}>⛪</div>
              </div>
              <h2 className="euphoria-script-regular" style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', 
                color: 'var(--brand)', 
                margin: 0
              }}>
                Wedding Ceremony
              </h2>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)', 
                fontWeight: '600', 
                color: '#333',
                margin: '0 0 0.5rem 0'
              }}>
                Friday, June 27, 2026 — 3:00 PM
              </p>
              
              <p style={{ 
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)', 
                color: '#555',
                margin: '0 0 1rem 0',
                fontWeight: '500'
              }}>
                St Alexander Church
              </p>
              
              <button
                onClick={() => openGoogleMaps('7025 W 126th St, Palos Heights, IL 60463')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--brand)',
                  fontSize: 'clamp(0.95rem, 2.1vw, 1rem)',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                  margin: '0 0 1rem 0',
                  fontFamily: 'inherit'
                }}
              >
                7025 W 126th St, Palos Heights, IL 60463
              </button>
              
              <p style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
                color: '#666',
                lineHeight: '1.5',
                margin: 0
              }}>
                Please arrive by 2:30 PM
              </p>
            </div>
          </article>

          {/* Wedding Reception */}
          <article className="event" style={{
            background: '#fff',
            borderRadius: 'var(--radius)',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            boxShadow: 'var(--shadow)',
            border: '1px solid rgba(79, 121, 66, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow)';
          }}>
            
            {/* Reception Icon */}
            <div style={{ 
              textAlign: 'center', 
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)' 
            }}>
              <div style={{
                background: 'rgba(79, 121, 66, 0.1)',
                borderRadius: '16px',
                padding: 'clamp(1rem, 3vw, 1.5rem)',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                <img 
                  src="/photos/Reception.png" 
                  alt="Crow and Calico Tavern" 
                  style={{
                    width: 'clamp(60px, 15vw, 80px)',
                    height: 'auto',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* Fallback icon */}
                <div style={{
                  display: 'none',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--brand)'
                }}>🎉</div>
              </div>
              <h2 className="euphoria-script-regular" style={{ 
                fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', 
                color: 'var(--brand)', 
                margin: 0
              }}>
                Wedding Reception
              </h2>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)', 
                fontWeight: '600', 
                color: '#333',
                margin: '0 0 0.5rem 0'
              }}>
                Friday, June 27, 2026 — 5:30 PM
              </p>
              
              <p style={{ 
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)', 
                color: '#555',
                margin: '0 0 0.5rem 0',
                fontWeight: '500'
              }}>
                Cocktail Hour & Reception
              </p>
              
              <p style={{ 
                fontSize: 'clamp(1rem, 2.2vw, 1.1rem)', 
                color: '#555',
                margin: '0 0 1rem 0',
                fontWeight: '500'
              }}>
                Crow and Calico Tavern
              </p>
              
              <button
                onClick={() => openGoogleMaps('25956 S Egyptian Trail, Monee, IL 60449')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--brand)',
                  fontSize: 'clamp(0.95rem, 2.1vw, 1rem)',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                  margin: '0 0 1.5rem 0',
                  fontFamily: 'inherit'
                }}
              >
                25956 S Egyptian Trail, Monee, IL 60449
              </button>
              
              <div style={{ 
                background: 'rgba(255, 193, 7, 0.1)',
                border: '1px solid rgba(255, 193, 7, 0.3)',
                borderRadius: '8px',
                padding: 'clamp(0.75rem, 2vw, 1rem)',
                margin: '0 0 1rem 0'
              }}>
                <p style={{ 
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
                  color: '#856404',
                  margin: '0 0 0.5rem 0',
                  fontWeight: '600'
                }}>
                  📍 Outdoor Event Notice
                </p>
                <p style={{ 
                  fontSize: 'clamp(0.85rem, 1.9vw, 0.95rem)', 
                  color: '#856404',
                  lineHeight: '1.4',
                  margin: 0
                }}>
                  Reception is outside in an event tent. Please wear appropriate shoes for walking on grass.
                </p>
              </div>
              
              <p style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
                color: '#666',
                lineHeight: '1.5',
                margin: 0,
                fontWeight: '500'
              }}>
                Dress Code: Semi-Formal
              </p>
            </div>
          </article>
        </div>
        
        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(3rem, 6vw, 4rem)',
          padding: 'clamp(1.5rem, 4vw, 2rem)',
          background: 'rgba(79, 121, 66, 0.05)',
          borderRadius: 'var(--radius)',
          border: '1px solid rgba(79, 121, 66, 0.1)'
        }}>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.3vw, 1.1rem)', 
            color: '#555',
            lineHeight: '1.6',
            margin: 0,
            fontStyle: 'italic'
          }}>
            We can't wait to celebrate with you! 💕
          </p>
        </div>
      </div>
    </section>
  );
}
