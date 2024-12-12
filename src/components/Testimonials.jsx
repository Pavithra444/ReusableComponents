import React from 'react';

function Testimonials({ title = 'What People are Saying...', testimonials }) {
  return (
    <section id="testimonials" className="bg-light py-5">
      <div className="container text-center">
        {/* Use the title prop */}
        <h2>{title}</h2>
        <div className="row">
          {/* Loop through the testimonials array */}
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4" key={index}>
              <blockquote className="blockquote">
                <div className="author-info">
                  {/* Display the author's photo in a circle */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="author-photo"
                    style={{
                      width: '250px', // Size of the circle
                      height: '250px', // Size of the circle
                      objectFit: 'cover', // Ensures the image fills the circle without distortion
                      borderRadius: '50%', // Makes the image a circle
                      marginRight: '10px', // Space between the image and the name
                      marginBottom: '10px',
                      border: '3px solid #fff', // Optional: Adds a white border around the circle
                    }}
                  />
                  <footer className="blockquote-footer">
                    {testimonial.author}
                  </footer>
                </div>
                <p>"{testimonial.text}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

