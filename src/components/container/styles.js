import styled from "styled-components";

export const Container = styled.div`
    max-width:1280px;
    padding:2%;
    margin:0 auto;
    display:flex;
    flex-direction:row;

    @media(max-width:1350px){
        display:flex;
        flex-direction:column;
    }
`