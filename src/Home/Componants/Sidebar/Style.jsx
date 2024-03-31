import styled from "@emotion/styled";

export const SidebarWrapper = styled("section")`
   width: 100%;
   height: 60px;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 8rem;
   overflow: hidden;

   @media screen and (min-width:900px) and (max-width:1024px) {
      gap: 0;
   }

   @media screen  and (max-width:800px) {
     gap: 1rem;
   }

   @media screen and (min-width:601px) and (max-width:700px) {
      gap: 1rem;
   }

   @media screen and (min-width:501px) and (max-width:600px) {
      gap: 1rem;
   }
`;

export const Information = styled("div")`
   width: 70%;
   display: flex;
   gap: 2rem;

   @media screen and (min-width:900px) and (max-width:1024px) {
      width: 90%;
      text-align: center;
      margin-left: 7%;
      gap: 1rem;
   }

   @media screen and (min-width:601px) and (max-width:700px) {
      width: 90%;
      text-align: center;
      margin-left: 7%;
      gap: 1rem;
   }

   @media screen and (min-width:501px) and (max-width:600px) {
      width: 90%;
      text-align: center;
      margin-left: 7%;
      gap: 1rem;
   }

   @media screen and (max-width:500px) {
      display: none;
   }
`;

export const Clock = styled("div")`
   display: flex;
   gap :.5rem ;
   color: #FAB207;
   font-size: 13px;
   font-weight: bold;

   @media screen and (min-width:601px) and (max-width:700px) {
      font-size: 10px;
      gap :  0 ;
   }

   @media screen and (min-width:501px) and (max-width:600px) {
      font-size: 10px;
      gap :0 ;
   }
`;


export const Call = styled("div")`
   display: flex;
   gap :.5rem ;
   color: #FAB207;
   font-size: 13px;
   font-weight: bold;

   @media screen and (min-width:601px) and (max-width:700px) {
      font-size: 10px;
      gap :  0 ;
   }

   @media screen and (min-width:501px) and (max-width:600px) {
      font-size: 10px;
      gap :0 ;
   }
`;



export const Logo = styled("div")`
      width: 10%;
      padding-top: .6%;

   @media screen and (min-width:900px) and (max-width:1024px) {
      width: 10%;
      margin-right: 50px;
   }

   @media screen and (min-width:601px) and (max-width:700px) {
      width: 10%;
      margin-right: 35px;
   }

   @media screen and (min-width:501px) and (max-width:600px) {
      width: 10%;
      margin-right: 55px;
   }

   @media screen and (max-width:500px) {
      width: 10%;
      margin-right: 55px;
   }
      
   img{
      width: 100px;
      
   @media screen and (min-width:701px) and (max-width:900px) {
      width: 80px;
   }

   @media screen and (min-width:501px) and (max-width:700px) {
      width: 70px;
   }

   @media screen and (min-width:350px) and (max-width:500px) {
      width: 100px;
   }
   }
`;