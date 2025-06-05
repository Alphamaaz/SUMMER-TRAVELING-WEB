import React from 'react'
import Navbar from '../components/Navbar'

import WhyChoose from './../components/WhyChoose';
import Services from '../components/Services';
import Holiday from '../components/Holiday';
import Offer from '../components/Offer';
import OurClients from '../components/OurClients';
import OurBlogs from '../components/OurBlogs';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import Hero from './../components/Hero';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
       < WhyChoose/>
       <Services/>
       <Holiday/>
       <Offer/>
       <OurClients/>
       <OurBlogs/>
       <Partners/>
       <Footer/>

    </div>
  )
}

export default Home