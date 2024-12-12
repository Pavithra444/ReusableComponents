import React from 'react';

function HeroSection({ title, backgroundImage, placeholder, buttonText, onSubmit }) {
  return (
    <header
      className="hero bg-primary text-white text-center py-5"
      style={{
        backgroundImage: `url(${backgroundImage || 'https://www.shutterstock.com/image-photo/summer-daytime-seascape-okinawa-japan-260nw-1531307414.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <h1 className="display-4">{title || 'Generate More Leads With A Professional Landing Page'}</h1>
        
        <input
          className="lead mx-3"
          placeholder={placeholder || 'Email Address'}
        />
        <button
          className="btn bg-primary text-white text-center mx-3"
          onClick={onSubmit}
        >
          {buttonText || 'Submit'}
        </button>
      </div>
    </header>
  );
}

export default HeroSection;
