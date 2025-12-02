import React from 'react';

const Photos = () => {
  // Your actual wedding photos
  const photos = [
    { src: '/photos/R&A.jpg', alt: 'Rebecca and Aidan', caption: 'Our love story' },
    { src: '/photos/R&A-2.jpg', alt: 'Rebecca and Aidan', caption: 'Together forever' },
    { src: '/photos/R&A-17.jpg', alt: 'Rebecca and Aidan', caption: 'Perfect moment' },
    { src: '/photos/R&A-19.jpg', alt: 'Rebecca and Aidan', caption: 'Pure joy' },
    { src: '/photos/R&A-21.jpg', alt: 'Rebecca and Aidan', caption: 'Sweet memories' },
    { src: '/photos/R&A-22.jpg', alt: 'Rebecca and Aidan', caption: 'Beautiful day' },
    { src: '/photos/R&A-25.jpg', alt: 'Rebecca and Aidan', caption: 'Loving glance' },
    { src: '/photos/R&A-27.jpg', alt: 'Rebecca and Aidan', caption: 'Adventure together' },
    { src: '/photos/R&A-33.jpg', alt: 'Rebecca and Aidan', caption: 'Natural beauty' },
    { src: '/photos/R&A-37.jpg', alt: 'Rebecca and Aidan', caption: 'Tender moment' },
    { src: '/photos/R&A-38.jpg', alt: 'Rebecca and Aidan', caption: 'Celebration' },
    { src: '/photos/R&A-42.jpg', alt: 'Rebecca and Aidan', caption: 'True love' },
    { src: '/photos/R&A-48.jpg', alt: 'Rebecca and Aidan', caption: 'Happy hearts' },
    { src: '/photos/R&A-49.jpg', alt: 'Rebecca and Aidan', caption: 'Wonderful time' },
    { src: '/photos/R&A-54.jpg', alt: 'Rebecca and Aidan', caption: 'Special connection' },
    { src: '/photos/R&A-59.jpg', alt: 'Rebecca and Aidan', caption: 'Magical moment' },
    { src: '/photos/R&A-61.jpg', alt: 'Rebecca and Aidan', caption: 'Picture perfect' },
    { src: '/photos/R&A-64.jpg', alt: 'Rebecca and Aidan', caption: 'Endless love' },
    { src: '/photos/R&A-65.jpg', alt: 'Rebecca and Aidan', caption: 'Bright future' },
    { src: '/photos/R&A-71.jpg', alt: 'Rebecca and Aidan', caption: 'Journey begins' },
    { src: '/photos/R&A-72.jpg', alt: 'Rebecca and Aidan', caption: 'Forever yours' }
  ];

  return (
    <section className="photos-section" style={{ 
      padding: '4rem 0', 
      background: 'rgba(255, 255, 255, 0.95)',
      minHeight: '80vh'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="euphoria-script-regular" style={{ 
            fontSize: '3rem', 
            color: 'var(--brand)', 
            marginBottom: '1rem' 
          }}>
            Our Journey Together
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Our Together is Forever
          </p>
        </div>

        <div className="photo-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="photo-item" 
              style={{
                backgroundColor: '#fff',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
            >
              <div style={{ 
                aspectRatio: '4/3', 
                overflow: 'hidden',
                background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)'
              }}>
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={(e) => {
                    // Show placeholder if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  Photo placeholder<br />
                  <small>{photo.caption}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photographer credit */}
        <div style={{
          marginTop: '2rem',
          padding: '1.25rem 1.5rem',
          background: 'rgba(79, 121, 66, 0.1)',
          borderRadius: 'var(--radius)',
          textAlign: 'center',
          maxWidth: '400px',
          margin: '2rem auto 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h3 style={{ color: 'var(--brand)', marginBottom: '0.5rem', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>
            Photos Captured & Produced by:
          </h3>
          <p style={{ color: '#666', lineHeight: '1.4', margin: 0 }}>
            <a 
              href="https://www.norainnoflowersphotography.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--brand)',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              No Rain No Flowers Photography
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photos;