import styled from "@emotion/styled";

export const AboutUsWrapper = styled("section")`
   width: 100%;
   height: 90vh;
   display: flex;
   gap: 3rem;
   overflow: hidden;
   margin: 5% auto 0 auto;

   @media screen  and (max-width:1024px) {
      height: 105vh;
   }

   @media screen  and (max-width:850px) {
      display: block;
      height: 155vh;
   }

   @media screen  and (max-width:700px) {
      display: block;
      height: 165vh;
   }

   @media screen  and (max-width:660px) {
      display: block;
      height: 170vh;
   }

   @media screen  and (max-width:550px) {
      display: block;
      height: 170vh;
   }

   @media screen  and (max-width:385px) {
      display: block;
      height: 170vh;
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
   height: 100%;
   direction: rtl;

   h1{
      color: #333;
      font-size: 30px;
      font-weight: normal;
      font-style: normal;
   }

   p{
      font-size: 16px;
      line-height: 24px;
      color: #585757;
   }
`;