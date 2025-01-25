import React from 'react';
import { Helmet } from 'react-helmet';
import Section1 from '../components/about/Section1';
import Section2 from '../components/about/Section2';
import Section3 from '../components/about/Section3';
import Section4 from '../components/about/Section4';
import Section5 from '../components/about/Section5';

function AboutPage() {
  return (
    <div className='bg-customGrayLight'>
      <Helmet>
        <title>About Us - Donna D' Stylist Salon</title>
        <meta
          name="description"
          content="Learn more about Donna D' Stylist Salon, a premium hair salon in Winnipeg offering professional hair care services."
        />
        <meta
          name="keywords"
          content="about, Donna D' Stylist Salon, hair salon, Winnipeg, beauty, professional hair care"
        />
        <meta property="og:title" content="About Us - Donna D' Stylist Salon" />
        <meta
          property="og:description"
          content="Learn more about Donna D' Stylist Salon, a premium hair salon in Winnipeg offering professional hair care services."
        />
        <meta property="og:image" content="/image/about/about-main.jpg" />
        <meta property="og:url" content="https://donnadstylistsalon.ca/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default AboutPage;
