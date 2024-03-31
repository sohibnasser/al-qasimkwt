import styled from "@emotion/styled";


export const FooterWrapper = styled("section")`
    width: 100%;
    height: 70vh;
    direction: rtl;
    background-color: #0c0c0c;

    @media screen  and (max-width:800px) {
        height: 115vh;
        text-align: center;
    }

    div{
        width: 100%;
        display: flex;
        gap: 7%;

        @media screen  and (max-width:800px) {
            display: block;
            padding-top: 1%;
        }

        p{
            width: 30%;
            font-size: 17px;
            color: #c1bebe;

        @media screen  and (max-width:800px) {
            width: 100%;
        }

            h2{
                width: 100%;
                font-weight: normal;
                font-style: normal;
            }

            p{
                width: 100%;
                font-size: 16px;
            }
        }
    }
`;

export const P = styled("p")`
    width: 30%;
    font-size: 17px;
    color: #c1bebe;
    margin-top: 4%;
    line-height: 2rem;
`;

export const CopyRight = styled("div")`
    width: 100%;
    height: 8rem;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        text-align: center;
    }
`;