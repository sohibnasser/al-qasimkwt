import styled from "@emotion/styled";


export const TransportServicesWrapper = styled("section")`
   width: 100%;
   height: 90vh;
   display: flex;
   gap: 3rem;
   overflow: hidden;

   @media screen  and (max-width:1024px) {
      margin-bottom: 2%;
   }

   @media screen  and (max-width:850px) {
      display: block;
      height: 155vh;
      margin-bottom: 0;
   }

   @media screen  and (max-width:600px) {
      display: block;
      height: 165vh;
      margin-bottom: 0;
   }

   @media screen  and (max-width:550px) {
      display: block;
      height: 155vh;
      margin-bottom: 0;
   }

   @media screen  and (max-width:480px) {
      display: block;
      height: 170vh;
      margin-bottom: 0;
   }

   @media screen  and (max-width:420px) {
      display: block;
      height: 190vh;
      margin-bottom: 0;
   }
`;

export const Span1 = styled("span")`
   width: 50%;
   height: 100%;

   img{
      width: 100%;
      height: 100%;

      @media screen  and (max-width:850px) {
         height: 50%;
      }

      @media screen  and (max-width:550px) {
         height: 40%;
      }

      @media screen  and (max-width:385px) {
         height: 35%;
   }
   }
`;

export const Span2 = styled("span")`
   width: 50%;
   direction: rtl;

   h1{
      color: #333;
      font-size: 35px;
      font-weight: normal;
      font-style: normal;
   }

   p{
      font-size: 16px;
      line-height: 24px;
      color: #585757;
   }
`;