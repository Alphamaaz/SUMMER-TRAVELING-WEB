import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Heo'
import WhyChoose from './../components/WhyChoose';
import Services from '../components/Services';
import Holiday from '../components/Holiday';
import Offer from '../components/Offer';
import OurClients from '../components/OurClients';
import OurBlogs from '../components/OurBlogs';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

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



        {/* <div className='px-[72px]'>

        </div> */}
    </div>
  )
}

export default Home