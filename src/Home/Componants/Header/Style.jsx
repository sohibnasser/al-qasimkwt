import styled from "@emotion/styled";

export const HeaderWrapper = styled("section")`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    @media screen and (max-width:800px) {
      height: 88vh;
   }

    @media screen and (max-width:450px) {
      height: 77vh;
   }

    @media screen and (max-width:400px) {
      height: 75vh;
   }
`;
