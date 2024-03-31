import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@mui/material'
import AOS from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import { CopyRight, FooterWrapper, P } from './Style'

export default function Footer() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (

    <>

    <FooterWrapper>


            <Container>
        <div>

            <P data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">
                شركة القاسم هي اكبر شركة نقل أثاث في الكويت تقوم شركتنا بتوفير عمالة ومشرفين متفوقين في نقل
                العفش بحرس وبدون اي تلف او خدش العفش اثناء
                النقل ولذالك يتم التغليف جيد جدا للحرص اثاث منزلك
                امانة معنا لذالك نقدم الخدمة  بمنتهي الحرص
            </P>

            <p data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">
                <h2>خدمات نقل الأثاث :</h2>
                <p>نقل الأثاث من مكان إلى آخر</p>
                <p>فك وتركيب الأثاث</p>
                <p>تغليف الأثاث بأدوات التغليف المناسبة</p>
                <p>نقل الأثاث باستخدام الرافعات والشاحنات والسيارات المغلقة</p>
                <p>تخزين الأثاث في مخازن آمنة</p>
                <p>تنظيف الأثاث قبل وبعد عملية النقل</p>
                <p>بيع وشراء الأثاث المستعمل</p>
            </p>

            <p data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">
                    <p>
                    <span>
                    <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>اتصل بنا علي : 50310352 </span>
                    </p>

                    <p>
                    <span>
                    <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span>ساعات العمل : 8 ص - 10 م</span>
                    </p>

                    <p>
                    <span>تابعنا علي : </span>

                    <a  href="https://www.instagram.com/alkoe2020?igsh=cmJob2Nma2l5MDA=">
                    <span style={{color: "#ea7575"}}>
                    <FontAwesomeIcon style={{background : "white" , width: '25px' , height: "25px"}} icon={faInstagram} />
                    </span>
                    </a>
                    
                    </p>
            </p>

        </div>
            </Container>

      
    </FooterWrapper>

    <CopyRight>
        <div>
            <h3>جميع الحقوق محفوظة لشركة القاسم لنقل الأثاث</h3>
            <h3>تنفيذ شركة لوجين للبرمجيات</h3>
        </div>
    </CopyRight>

    </>

  )
}
