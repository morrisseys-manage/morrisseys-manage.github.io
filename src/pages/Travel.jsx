import React from 'react';

export default function Travel() {
  // Helper function to open Google Maps
  const openGoogleMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  // Helper function to open hotel website
  const openHotelWebsite = (url) => {
    window.open(url, '_blank');
  };

  const hotels = [
    {
      name: "Holiday Inn Chicago - Tinley Park",
      address: "18320 N Creek Dr, Tinley Park, IL 60477",
      website: "https://www.ihg.com/holidayinn/hotels/us/en/tinley-park/chily/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-US-_-CHILY",
      icon: "🏨"
    },
    {
      name: "Even Hotel Chicago - Tinley Park",
      address: "18501 Convention Center Dr, Tinley Park, IL 60477", 
      website: "https://www.ihg.com/evenhotels/hotels/us/en/tinley-park/chitn/hoteldetail?cm_mmc=GoogleMaps-_-VN-_-US-_-CHITN",
      icon: "🏢"
    },
    {
      name: "Wingate by Wyndham - Tinley Park",
      address: "18421 N Creek Dr, Tinley Park, IL 60477",
      website: "https://www.wyndhamhotels.com/wingate/tinley-park-illinois/wingate-by-wyndham-tinley-park/overview?CID=LC:7hcm1fujuihd89e:7664&iata=00093796",
      icon: "🛏️"
    },
    {
      name: "Fairfield by Marriott - Tinley Park",
      address: "18511 N Creek Dr, Tinley Park, IL 60477",
      website: "https://www.marriott.com/en-us/hotels/chitp-fairfield-inn-and-suites-chicago-tinley-park/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
      icon: "🏩"
    }
  ];

  return (
    <section className="travel-section" style={{ 
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
            Travel & Accommodations
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', 
            color: '#666', 
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '1rem auto 0'
          }}>
            We recommend staying in Tinley Park by the convention center — it's the perfect location with equal distance to both our ceremony and reception venues.
          </p>
        </div>

        {/* Location Benefits */}
        <div style={{
          background: 'rgba(79, 121, 66, 0.05)',
          borderRadius: 'var(--radius)',
          border: '1px solid rgba(79, 121, 66, 0.1)',
          padding: 'clamp(1.5rem, 4vw, 2rem)',
          margin: '0 auto clamp(3rem, 6vw, 4rem)',
          maxWidth: '600px',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: 'clamp(1.3rem, 3vw, 1.5rem)', 
            color: 'var(--brand)', 
            margin: '0 0 1rem 0',
            fontWeight: '600'
          }}>
            📍 Perfect Central Location
          </h3>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.3vw, 1.1rem)', 
            color: '#555',
            lineHeight: '1.6',
            margin: 0
          }}>
            <strong>20 minutes to St Alexander Church</strong> (Ceremony)<br />
            <strong>20 minutes to Crow and Calico Tavern</strong> (Reception)
          </p>
        </div>

        {/* Hotel Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
          gap: 'clamp(2rem, 4vw, 2.5rem)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {hotels.map((hotel, index) => (
            <article 
              key={index}
              className="hotel-card" 
              style={{
                background: '#fff',
                borderRadius: 'var(--radius)',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                boxShadow: 'var(--shadow)',
                border: '1px solid rgba(79, 121, 66, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
            >
              
              {/* Hotel Icon */}
              <div style={{ 
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)' 
              }}>
                <div style={{
                  background: 'rgba(79, 121, 66, 0.1)',
                  borderRadius: '16px',
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    margin: 0
                  }}>
                    {hotel.icon}
                  </div>
                </div>
                
                <h2 style={{ 
                  fontSize: 'clamp(1.3rem, 3vw, 1.5rem)', 
                  color: 'var(--brand)', 
                  margin: '0',
                  fontWeight: '600',
                  lineHeight: '1.2'
                }}>
                  {hotel.name}
                </h2>
              </div>

              {/* Hotel Details */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  onClick={() => openGoogleMaps(hotel.address)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--brand)',
                    fontSize: 'clamp(0.95rem, 2.1vw, 1rem)',
                    cursor: 'pointer',
                    padding: 0,
                    margin: '0 0 1rem 0',
                    fontFamily: 'inherit',
                    lineHeight: '1.4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ textDecoration: 'none' }}>📍</span>
                  <span style={{ textDecoration: 'underline' }}>{hotel.address}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <button
                  onClick={() => openHotelWebsite(hotel.website)}
                  style={{
                    background: 'var(--brand)',
                    color: 'white',
                    padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                    borderRadius: '999px',
                    border: 'none',
                    fontSize: 'clamp(0.95rem, 2.1vw, 1rem)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(79, 121, 66, 0.3)',
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 30px rgba(79, 121, 66, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 20px rgba(79, 121, 66, 0.3)';
                  }}
                >
                  View Hotel & Book
                </button>
                
                <button
                  onClick={() => openGoogleMaps(hotel.address)}
                  style={{
                    background: 'transparent',
                    color: 'var(--brand)',
                    padding: 'clamp(0.5rem, 1.8vw, 0.6rem) clamp(0.8rem, 2.5vw, 1rem)',
                    borderRadius: '999px',
                    border: '2px solid var(--brand)',
                    fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--brand)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'var(--brand)';
                  }}
                >
                  Get Directions
                </button>
              </div>
            </article>
          ))}
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
          <h3 style={{ 
            fontSize: 'clamp(1.2rem, 2.8vw, 1.4rem)', 
            color: 'var(--brand)',
            margin: '0 0 1rem 0',
            fontWeight: '600'
          }}>
            ℹ️ Booking Information
          </h3>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.3vw, 1.1rem)', 
            color: '#555',
            lineHeight: '1.6',
            margin: 0
          }}>
            We are not offering room blocks. Please book directly with the hotels for the best rates and availability. 
            We recommend booking early as June is a popular wedding month!
          </p>
        </div>
      </div>
    </section>
  );
}