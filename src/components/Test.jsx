import React from 'react';

function FeatureList({ imageSrc, title, description }) {
  return (
    <section id="test" className="text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>{title}</h3>
            <p
              style={{
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '100',
              }}
            >
              {description}
            </p>
          </div>
          <div className="col-md-6 image-cover">
            <img
              src={imageSrc}
              alt="Dynamic Content"
              style={{
                width: '100%', // Ensure image fills the container
                maxWidth: '500px', // Limit the width to 500px
                height: 'auto', // Maintain aspect ratio
                objectFit: 'cover', // Ensures the image covers the area of the container
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureList;
