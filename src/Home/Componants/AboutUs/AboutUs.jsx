import { Container } from '@mui/material';
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { AboutUsWrapper, Span1, Span2 } from './Style';
import imageAboutUs from "./images/imageAboutUs.jpg";

export default function AboutUs() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container>

    <AboutUsWrapper>

      <Span1>
        <img src={imageAboutUs} alt="imageAboutUs" />
      </Span1>

      <Span2 data-aos="fade-left"  data-aos-delay="200" data-aos-duration="1000">
          <h1>لماذا نحن أفضل شركة نقل عفش في الكويت</h1>
          <p><span style={{color: "#0f5f99" , fontSize: "18px" , fontWeight: "bold"}}>الخبرة : </span>تتمتع شركات نقل العفش بخبرة واسعة في مجال نقل الأثاث من مكان إلى آخر، مما يضمن لك نقلًا آمنًا وسريعًا دون حدوث أي تلف للعفش.</p>
          <p><span style={{color: "#0f5f99" , fontSize: "18px" , fontWeight: "bold"}}>المعدات : </span> تمتلك شركات نقل العفش جميع المعدات اللازمة لنقل الأثاث بأمان، مثل: الرافعات، والشاحنات، والسيارات المغلقة، وأدوات التغليف.</p>
          <p><span style={{color: "#0f5f99" , fontSize: "18px" , fontWeight: "bold"}}>العمالة المدربة : </span> تمتلك شركات نقل العفش عمالة مدربة على فك وتركيب الأثاث وتغليفه بشكل صحيح، مما يضمن لك نقلًا آمنًا دون حدوث أي خدوش أو كسر.</p>
          <p><span style={{color: "#0f5f99" , fontSize: "18px" , fontWeight: "bold"}}>التأمين : </span>توفر بعض شركات نقل العفش تأمينًا ضد الأضرار، مما يضمن لك تعويضًا في حال حدوث أي تلف للعفش أثناء عملية النقل.</p>
          <p><span style={{color: "#0f5f99" , fontSize: "18px" , fontWeight: "bold"}}>الأسعار التنافسية : </span>تقدم شركات نقل العفش أسعارًا تنافسية تناسب جميع الميزانيات.</p>
          <p><span style={{color: "#0f5f99" , fontSize: "18px" , fontWeight: "bold"}}>الوقت : </span>نعمل 24 ساعة على مدار الأسبوع لنجعلك تختار الوقت الذى يناسبك للحفاظ على راحتك.</p>
      </Span2>
      
    </AboutUsWrapper>

    </Container>
  )
}
