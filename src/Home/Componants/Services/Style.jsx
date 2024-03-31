import styled from "@emotion/styled";

export const ServicesWrapper = styled("section")`
    width: 100%;
    height: 210vh;
    overflow: hidden;
    

    @media screen  and (max-width:700px) {
        height: 290vh;
    }

    @media screen  and (max-width:550px) {
        height: 300vh;
   }

`;

export const Title = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h1{
      color: #333;
      font-size: 35px;
      font-weight: normal;
      font-style: normal;
    }

    p{
      font-size: 15px;
      color: #585757;
   }
`;

export const OurServices = styled("div")`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`;

export const Div1 = styled("div")`
    width: 90%;
    height: 18rem;
    display: flex;
    gap: 1.5rem;
    direction: rtl;
    border-radius: 1rem 1rem;
    background-color: #b3b5b7;
    box-shadow: gray 0 0 5px 5px;

    @media screen  and (max-width:700px) {
      display: block;
      height: 28rem;
      border-radius: 1rem 1rem;
    }
`;

export const Image = styled("div")`
    width: 50%;
    height: 100%;

    @media screen  and (max-width:700px) {
        width: 100%;
        height: 50%;
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 0 1rem 1rem 0 ;

    @media screen  and (max-width:700px) {
            border-radius: 1rem 1rem 0 0 ;
    }
    }
`;

export const Data = styled("div")`
    width: 50%;
    height: 100%;
    color: white;
    text-align: center;

    @media screen  and (max-width:700px) {
      width: 100%;
      text-align: center;
    }

    h2{
        color: #0f5f99;

        @media screen  and (max-width:950px) {
            font-size: 20px;
        }

        @media screen  and (max-width:800px) {
            font-size: 17px;
        }

        @media screen  and (max-width:700px) {
            font-size: 23px;
        }
    }

    p{
        font-weight: bold;
        line-height: 1.5rem;
        width: 90%;

        @media screen  and (max-width:950px) {
            font-size: 14px;
        }

        @media screen  and (max-width:800px) {
            font-size: 12px;
        }

        @media screen  and (max-width:700px) {
            font-size: 12px;
            line-height: 1.2rem;
            text-align: center;
            margin: 0 auto;
        }

        @media screen  and (max-width:440px) {
            font-size: 10px;
            line-height: 1rem;
            text-align: center;
        }
    }
`;