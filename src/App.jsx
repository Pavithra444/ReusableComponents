import React from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Test from './components/Test';
import FeatureList2 from './components/FeatureList2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const testimonialsData = [
    {
      text: "This is fantastic!Thanks so much guys!",
      author: "Margaret E",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg", // Add an image URL
    },
    {
      text: "Bootstarp is amazing.I've been using it to create lots of super nice landing pages.",
      author: "Fred S",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg", // Add an image URL
    },
    {
      text: "Thanks so much for making these free resources available to us!",
      author: "Sarah W",
      image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg", // Add an image URL
     
    },
  ];

  return (
    <div>
      <HeroSection
        title="Generate More Leads With A Professional Landing Page"
        backgroundImage="https://www.shutterstock.com/image-photo/summer-daytime-seascape-okinawa-japan-260nw-1531307414.jpg"
        placeholder="Email Address"
        buttonText="Submit"/>
      <Features />
      {/* <Test /> */}

      <Test
        title="Fully Responsive Design"
        description="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop. The page will behave responsively!"
        imageSrc="https://static.toiimg.com/thumb/msid-97900311,imgsize-14076,width-400,resizemode-4/97900311.jpg"
      />

      <FeatureList2
        title="Updated For Bootstrap 5"
        description="Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1YakoPi1Coh8E9PZonMWPNmwhlGcUgRLBGgxB46yQa8tDV4af"
      />
      
      <Test
        title="Easy to Use &amp; Customize"
        description="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
        imageSrc="https://static.toiimg.com/thumb/msid-102789054,imgsize-271185,width-400,height-225,resizemode-72/102789054.jpg"
      />
    
      <Testimonials
        title="What People are Saying..."
        testimonials={testimonialsData}
      />
      <HeroSection
        title="Ready to get Started? Sign up now!"
        backgroundImage="https://www.shutterstock.com/image-photo/summer-daytime-seascape-okinawa-japan-260nw-1531307414.jpg"
        placeholder="Email Address"
        buttonText="Submit"/>
      <Footer />
    </div>
  );
}

export default App;
