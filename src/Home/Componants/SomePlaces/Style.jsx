import styled from "@emotion/styled";


export const SomePlacesWrapper = styled("section")`
   width: 100%;
   height: 100vh;
   direction: rtl;
   overflow: hidden;

   @media screen  and (max-width:1024px) {
      height: 115vh;
    }

   @media screen  and (max-width:830px) {
      height: 120vh;
    }

   @media screen  and (max-width:770px) {
      height: 135vh;
    }

   @media screen  and (max-width:700px) {
      height: 160vh;
    }

   @media screen  and (max-width:620px) {
      height: 170vh;
    }

   @media screen  and (max-width:510px) {
      height: 180vh;
    }

   @media screen  and (max-width:480px) {
      height: 190vh;
    }

   @media screen  and (max-width:440px) {
      height: 200vh;
    }

   @media screen  and (max-width:400px) {
      height: 220vh;
    }

`;

export const Div1 = styled("div")`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 4rem;

   @media screen  and (max-width:700px) {
      display: block;
      gap: 0;
    }

   span{
    width: 45%;

    h1{
      font-size: 35px;
      font-weight: normal;
      font-style: normal;
    }

    p{
        color: #888;
        line-height: 1.5rem;
    }
   }
`;

export const Div2 = styled("div")`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 4rem;

   @media screen  and (max-width:700px) {
      display: block;
      gap: 0;
    }

   span{
    width: 45%;

    h1{
      font-size: 35px;
      font-weight: normal;
      font-style: normal;
    }

    p{
        color: #888;
        line-height: 1.5rem;
    }
   }
`;

