import styled from "@emotion/styled";


export const ContactUsWrapper = styled("section")`
    width: 100%;
    height: 175vh;
    text-align: center;
    overflow: hidden;

    @media screen  and (max-width:800px) {
      height: 175vh;
    }

    @media screen  and (max-width:650px) {
      height: 180vh;
    }

    @media screen  and (max-width:600px) {
      height: 370vh;
    }

    @media screen  and (max-width:440px) {
      height: 380vh;
    }

`;

export const Title = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 14px;

    @media screen  and (max-width:700px) {
            line-height: 18px;
        }

    h1{
      color: #333;
      font-size: 35px;
      font-weight: normal;
      font-style: normal;
      margin-bottom: 4rem;

    }

    p{
      font-size: 15px;
      color: #585757;
   }
`;

export const Places = styled("div")`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 14px;

    h1{
      color: #333;
      font-size: 25px;
      font-weight: normal;
      font-style: normal;
      margin: 3rem 0;
      line-height: 25px;
    }

`;

export const City = styled("div")`
    width: 100%;
    display: flex;
    text-align: center;
    gap: 5%;
    direction: rtl;

    @media screen  and (max-width:600px) {
            display: block;
            gap: 0;
        }
    
    div{
        width: 30%;

        @media screen  and (max-width:600px) {
            width: 100%;
        }

        p{
            font-size: 17px;
            color: #6d6d6d;
        }
    }
`;