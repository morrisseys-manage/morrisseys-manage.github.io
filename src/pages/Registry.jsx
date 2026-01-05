import React from 'react';

const Registry = () => {
    return (
        <section className="registry-section" style={{ 
            padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)', 
            background: 'rgba(255, 255, 255, 0.95)',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{ 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'clamp(2rem, 5vw, 3rem)'
                }}>
                    <h2 className="euphoria-script-regular" style={{ 
                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
                        color: 'var(--brand)', 
                        marginBottom: '1rem',
                        margin: 0
                    }}>
                        Wedding Registry
                    </h2>
                    
                    <p style={{ 
                        fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', 
                        color: '#666', 
                        lineHeight: '1.6',
                        marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                        margin: '0 0 clamp(1rem, 3vw, 1.5rem) 0'
                    }}>
                        Your presence at our wedding is the greatest gift of all! If you would like to honor us with a gift, 
                        we've created a registry to help us start our new life together.
                    </p>

                    <div style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'clamp(2rem, 5vw, 3rem)'
                    }}>
                        {/* Registry Icon */}
                        <div style={{
                            background: '#fff',
                            borderRadius: '20px',
                            padding: 'clamp(2rem, 5vw, 3rem)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(79, 121, 66, 0.1)'
                        }}>
                            <img 
                                src="/photos/registryIcon.png" 
                                alt="Wedding Registry" 
                                style={{
                                    width: 'clamp(120px, 20vw, 200px)',
                                    height: 'auto',
                                    display: 'block'
                                }}
                                onError={(e) => {
                                    // Fallback if image doesn't load
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            {/* Fallback content if image fails to load */}
                            <div style={{
                                display: 'none',
                                width: 'clamp(120px, 20vw, 200px)',
                                height: 'clamp(120px, 20vw, 200px)',
                                background: 'linear-gradient(135deg, var(--brand), #5a8149)',
                                borderRadius: '12px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                                fontWeight: 'bold'
                            }}>
                                🎁 Registry
                            </div>
                        </div>

                        {/* Shop Registry Button */}
                        <a 
                            href="https://www.amazon.com/wedding/share/morrisseys"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn registry-btn"
                            style={{
                                display: 'inline-block',
                                background: 'var(--brand)',
                                color: 'white',
                                padding: 'clamp(0.75rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                                borderRadius: '999px',
                                textDecoration: 'none',
                                fontSize: 'clamp(1.1rem, 2.5vw, 1.2rem)',
                                fontWeight: '600',
                                boxShadow: '0 10px 30px rgba(79, 121, 66, 0.3)',
                                transition: 'all 0.3s ease',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 15px 40px rgba(79, 121, 66, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 10px 30px rgba(79, 121, 66, 0.3)';
                            }}
                        >
                            Shop Registry
                        </a>
                    </div>

                    <p style={{ 
                        fontSize: 'clamp(0.95rem, 2.2vw, 1rem)', 
                        color: '#888', 
                        lineHeight: '1.5',
                        fontStyle: 'italic',
                        margin: 0
                    }}>
                        Thank you for helping us build our dream home together! 💕
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Registry;