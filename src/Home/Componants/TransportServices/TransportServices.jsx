import { Container } from '@mui/material'
import AOS from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import { Span1, Span2, TransportServicesWrapper } from './Style'
import imageTransportServices from "./images/imageTransportServices.jpg"

export default function TransportServices() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container>

    <TransportServicesWrapper>

      <Span1>
        <img src={imageTransportServices} alt="imageTransportServices" />
      </Span1>

      <Span2 data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">
          <h1>أهم ما يميز شركة القاسم : </h1>

          <p>اذا كنت تحتاج عمال بخدمة نقل عفش الكويت داخل المنزل ماهره ومدربه في نقل الأثاث والتغليف من غرفه الي غرفه شركة
          القاسم في خدمتكم من اي تلف خلال فتره النقل والشحن بالعربية المختصة بالنقل الي منزلك 🚛 الأخر  نصلك فورا أينما كنت بمحافظات الكويت دقة والالتزام بالمواعيد المحدده لك في اثناء المكالمة التي اجرئتها معانا خلال تواصلك بنا خدمة 24 ساعه
          نقدم هذا الخدمة بجميع محافظات ومدن الكويت ولدينا هاف لوري بجميع المحافظات سرعة تنفيذ الطلب بعد اجراء التواصل معنا لتلبية طلبك سريعا كما وعدناكم نتميز
          <br/> 
          شركتنا بتوفر عمالة ومشرفين متفوقين في نقل
          العفش بحرس وبدون اي تلف او خدش العفش اثناء
          النقل ولذالك يتم التغليف جيد جدا لحرص اثاث منزلك
           امانة معنا لذالك نقدم الخدمة  بمنتهي الحرص ، لذلك ادواتنا في النجاح هي :</p>

          <p>1. الخبرة والكفاءة في مجال نقل الأثاث
          <br/>2. استخدام أحدث المعدات والأدوات لنقل الأثاث بأمان
          <br/>3. توفير عمالة مدربة وذات خبرة
          <br/>4. تقديم خدمات إضافية تلبي احتياجات العملاء
          <br/>5. تقديم أسعار تنافسية</p>
      </Span2>
      
    </TransportServicesWrapper>

    </Container>
  )
}
