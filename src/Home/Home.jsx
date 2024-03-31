import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet-async"
import "../MainStyle/Main.css"
import AboutUs from './Componants/AboutUs/AboutUs'
import ContactUs from './Componants/ContactUs/ContactUs'
import Footer from './Componants/Footer/Footer'
import Header from './Componants/Header/Header'
import Services from './Componants/Services/Services'
import Sidebar from './Componants/Sidebar/Sidebar'
import SomePlaces from './Componants/SomePlaces/SomePlaces'
import TransportServices from './Componants/TransportServices/TransportServices'


export default function Home() {

  const [cursor , setCursor] = useState({
    x: 0,
    y: 0
  });
  console.log(cursor);




  useEffect(()=> {

    const mouseMove = e =>{
      setCursor({
        x: e.clientX ,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove" , mouseMove)

    return ()=>{
      window.removeEventListener("mousemove" , mouseMove)
    }

  },[])


  const variants ={
    default:{
      x: cursor.x -16 ,
      y: cursor.y -16 ,
    }
  }

  return (
    <>

    <Helmet>
      <title>نقل عفش بالكويت</title>
      <meta name="description" content="الصفحة الرئيسية" />
      {/* <link rel="canonical" href="/" /> */}
    </Helmet>

      <a href="https://wsend.co/96550310352" className="WhatsUp">

        <span>تواصل عبر الواتساب</span>
        <span style={{fontSize: "25px"}}>
        <FontAwesomeIcon icon={faWhatsapp} />
        </span>
 
      </a>

      <Sidebar />
      <Header />
      <AboutUs />
      <Services />
      <TransportServices />
      <SomePlaces />
      <ContactUs />
      <Footer />

      <motion.div className="cursor"
       variants={variants}
       animate="default"
      ></motion.div>
    </>
  )
}
