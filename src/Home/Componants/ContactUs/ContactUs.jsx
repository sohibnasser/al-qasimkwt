import { Container } from '@mui/material'
import AOS from 'aos'
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import { City, ContactUsWrapper, Places, Title } from './Style'

export default function ContactUs() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <Container>

    <ContactUsWrapper>

      <Title>
        <h1 data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">الاتصال بنا بسهولة</h1>
        <p data-aos="fade-left"  data-aos-delay="200" data-aos-duration="1000">: نوفرلك عميلنا العزيز طريقة مختصرة للاتصال بنا، وخطواتها هي</p>
        <p data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">إتصل على هذه  الرقم 50310352 لكي تخطر مندوب الشركة بطلب نقل اثاث منزلك</p>
        <p data-aos="fade-left"  data-aos-delay="200" data-aos-duration="1000">أخبره عن بلغنا عدد مقتنيات العفش المطلوب نقلها</p>
        <p data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">حدد الوقت المناسب لإستقباله من أجل البدء في أعمال النقل</p>
      </Title>

      <Places>
        <h1 data-aos="fade-down"  data-aos-delay="200" data-aos-duration="1000">نحن في خدمتك في جميع انحاء الجمهورية</h1>

        <City>
            <div data-aos="fade-up"  data-aos-delay="200" data-aos-duration="2000">

                <p>نقل عفش القادسية</p>
                <p>نقل عفش قرطبة</p>
                <p>نقل عفش السرة</p>
                <p>نقل عفش اليرموك</p>
                <p>نقل عفش الفنطاس</p>
                <p>نقل عفش العقيلة</p>
                <p>نقل عفش المهبولة</p>
                <p>نقل عفش ابو حليفة</p>
                <p>نقل عفش الاحمدي</p>
                <p>نقل عفش حولي</p>
                <p>نقل عفش الشعب</p>
                <p>نقل عفش السالمية</p>
                <p>نقل عفش الرميثية</p>
                <p>نقل عفش الجابرية</p>
                <p>نقل عفش مشرف</p>
                <p>نقل عفش بيان</p>
                <p>نقل عفش البدع</p>
                <p>نقل عفش النقرة</p>
                <p>نقل عفش ميدان حولي</p>

            </div>

            <div data-aos="fade-up"  data-aos-delay="200" data-aos-duration="2000">

                <p>نقل عفش الشهداء</p>
                <p>نقل عفش العدان</p>
                <p>نقل عفش القصور</p>
                <p>نقل عفش القرين</p>
                <p>نقل عفش صباح السالم</p>
                <p>نقل عفش المسيلة</p>
                <p>نقل عفش المسايل</p>
                <p>نقل عفش ابو فطيرة</p>
                <p>نقل عفش ابو الحصانية</p>
                <p>نقل عفش الفنيطيس</p>
                <p>نقل عفش مبارك الكبير</p>
                <p>نقل عفش داخل المنزل</p>
                <p>نقل عفش نجار ايكيا</p>
                <p>نقل عفش جميع مناطق الكويت</p>
                <p>نقل عفش داخل الكويت</p>
                <p>نقل عفش في الكويت</p>
                <p>نقل عفش بالكويت</p>
                <p>نقل عفش السلام</p>
                <p>نقل عفش حطين</p>
                
            </div>

            <div data-aos="fade-up"  data-aos-delay="200" data-aos-duration="2000">

                <p>نقل عفش بنيد القار</p>
                <p>نقل عفش كيفان</p>
                <p>نقل عفش الدسمة</p>
                <p>نقل عفش الدعية</p>
                <p>نقل عفش المنصورية</p>
                <p>نقل عفش عبدالله السالم</p>
                <p>نقل عفش النزهة</p>
                <p>نقل عفش الفيحاء</p>
                <p>نقل عفش الشامية</p>
                <p>نقل عفش الروضة</p>
                <p>نقل عفش العديلية</p>
                <p>نقل عفش الخالدية</p>
                <p>نقل عفش مبارك العبد الله الجابر</p>
                <p>نقل عفش سلوي</p>
                <p>نقل عفش جنوب السرة</p>
                <p>نقل عفش الزهراء</p>
                <p>نقل عفش الصديق</p>

            </div>
        </City>
      </Places>


    </ContactUsWrapper>

    

    </Container>
  )
}
