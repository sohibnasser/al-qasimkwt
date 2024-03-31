import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@mui/material';
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import WebSiteLogo from "./Logo/Logo.jpg";
import { Call, Clock, Information, Logo, SidebarWrapper } from './Style';

export default function Sidebar() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <Container>
      <SidebarWrapper>


      <Information data-aos="fade-down"  data-aos-delay="200" data-aos-duration="1000">

      <Clock>
        <span>ساعات العمل : 8 ص - 10 م</span>
        <span>
        <FontAwesomeIcon icon={faClock} />
        </span>
      </Clock>

      <Call>
        <span>اتصل بنا علي : 50310352 </span>
        <span>
        <FontAwesomeIcon icon={faPhone} />
        </span>
      </Call>

      </Information>

      <Logo data-aos="fade-left"  data-aos-delay="200" data-aos-duration="1000">
        <img src={WebSiteLogo}  alt="WebSiteLogo"/>
      </Logo>

      </SidebarWrapper>

      </Container>
  )
}
