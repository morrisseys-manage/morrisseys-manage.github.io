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
            padding: 'clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)', 
            background: 'rgba(255, 255, 255, 0.95)',
            minHeight: '80vh'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
                    <h2 className="euphoria-script-regular" style={{ 
                        fontSize: 'clamp(2rem, 6vw, 3rem)', 
                        color: 'var(--brand)', 
                        marginBottom: 'clamp(0.5rem, 2vw, 1rem)' 
                    }}>
                        Our Journey Together
                    </h2>
                    <p style={{ 
                        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
                        color: '#666', 
                        maxWidth: '900px', 
                        margin: '0 auto',
                        textAlign: 'left',
                        lineHeight: '1.8',
                        padding: '0 clamp(1rem, 3vw, 2rem)'
                    }}>
                        Aidan and Rebecca's journey began on a dating app in late January 2023, where Aidan was instantly captivated by Rebecca's charming profile. Her love for <b>French toast</b>, <b>turtles</b>, and <b>bird banding</b> immediately caught his attention. But beyond her quirky interests, it was Rebecca's beauty and warmth that truly drew him in. Without hesitation, Aidan asked her out to dinner just days later. Although Rebecca was nervous about going on a blind date, she felt a divine nudge that gave her the courage to go.
                        <br /><br />
                        When Rebecca walked into the restaurant, Aidan was struck by how even more beautiful she appeared in person. Their first date felt magical as they connected over laughter and deep conversation for hours, eventually being the last ones to leave the restaurant. Just before Aidan left for a family vacation in Florida, he realized he had already begun to miss Rebecca—it was truly love at first sight for them both. They made it a point to chat almost daily, with Aidan even bringing back seashells from Florida as a sweet memento of their budding romance.
                        <br /><br />
                        On <b>St. Patrick's Day 2023</b>, Aidan and Rebecca officially became a couple. Aidan soon moved back to the suburbs to be closer to family and dedicate himself to Rebecca, knowing from the start that their connection was something special and divinely ordained. Together, they nurtured a relationship centered on love and faith, helping each other grow into better versions of themselves.
                        <br /><br />
                        Fast forward to <b>September 2025</b>, Aidan found himself with the same butterflies he experienced on their first date when he proposed to Rebecca on the sandy beaches of the Florida Keys. Surrounded by the beauty of the ocean, they spent the week basking in their new engagement, ready to embrace the next wonderful chapter of their life together.
                    </p>
                </div>

                <div className="photo-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                    gap: 'clamp(1rem, 3vw, 1.5rem)',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 clamp(1rem, 3vw, 2rem)'
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
                    marginTop: 'clamp(1.5rem, 4vw, 2rem)',
                    padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1rem, 4vw, 1.5rem)',
                    background: 'rgba(79, 121, 66, 0.1)',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                    maxWidth: '400px',
                    margin: 'clamp(1.5rem, 4vw, 2rem) auto 0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginLeft: 'clamp(1rem, 3vw, auto)',
                    marginRight: 'clamp(1rem, 3vw, auto)'
                }}>
                    <h3 style={{ color: 'var(--brand)', marginBottom: '0.5rem', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', margin: '0 0 0.5rem 0' }}>
                        Photos Captured & Produced by:
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.4', margin: 0, fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
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