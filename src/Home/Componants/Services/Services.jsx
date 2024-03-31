import { Container } from '@mui/material'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { Data, Div1, Image, OurServices, ServicesWrapper, Title } from './Style'
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"

export default function Services() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (

    <Container>

    <ServicesWrapper>

    <Title>
      <h1 data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">يسعدنا أن نقدم لكم خدماتنا المتميزة</h1>
      <p data-aos="fade-left"  data-aos-delay="200" data-aos-duration="1000">نقل عفش فك وتركيب جميع انواع الاثاث المنزلى والمكتبى عمالة مدربة خدمة سريعة نجار ايكيا.</p>
      <p data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">سيارات مجهزة جميع مناطق الكويت – اتصل نصل خدمة 24 ساعة اقل وافضل اسعار</p>
    </Title>

    <OurServices>
        <Div1 data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">
            <Image>
                <img src={img1} alt="فك وتركيب قطع الأثاث" />
            </Image>
            <Data>
                <h2>فك وتركيب قطع الأثاث</h2>
                <p>نقوم بفك جميع القطع المُراد نقلها للمكان الذي يريده العميل وهذا يتم من خلال عمالة مُدربة احترافية ،ونقوم بحماية هذه الأغراض من حدوث اي ضرر أو تلف يحدث لهذه الأغراض ،فعلينا أن نتواصل مع شركتنا لتنفيذ الخدمة المطلوبة ويتم تنفيذها في اسرع وقت مُمكن.</p>
            </Data>
        </Div1>
        

        <Div1 data-aos="fade-left"  data-aos-delay="200" data-aos-duration="1000">
            <Image>
                <img src={img2} alt="سيارات نقل معدة ومجهزة 24 ساعة" />
            </Image>
            <Data>
                <h2>سيارات نقل معدة ومجهزة 24 ساعة</h2>
                <p>يوجد عدد كبير من الشركات التي تعمل في مجال الأثاث المنزلي وشركة نقل اثاث بالكويت من الشركات التي لم يختلف عليها اثنان فمن ناحية الخدمة فهي تقدم خدمة بمستوى عالي ومن ناحية الأسعار فالشركة توفر جميع الخدمات بأسعار في متناول الجميع كما أن سيارات النقل معدة للعمل على مدار ال24 ساعة.</p>
            </Data>
        </Div1>

        <Div1 data-aos="fade-right"  data-aos-delay="200" data-aos-duration="1000">
            <Image>
                <img src={img3} alt="تغليف اثاث باحترافية عالية بالكويت" />
            </Image>
            <Data>
                <h2>تغليف اثاث باحترافية عالية بالكويت</h2>
                <p>لدينا مجموعة من الفنيين المتخصصين في مجال تغليف كما يتوفر لدينا كل أنواع المغلفات التي تتناسب مع كل أنواع الأثاث والتي توفر الحماية الكاملة للعفش مثل الاسترتش والكرتون والأكياس البلاستيكية  كما يتوفر لدينا مجموعة من الفنيين والمحترفين في مجال فك وتركيب الأثاث ويتوفر لدينا أيضًا صيانة الأثاث الخشبي.</p>
            </Data>
        </Div1>

      
    </OurServices>

    </ServicesWrapper>

    </Container>
  )
}
