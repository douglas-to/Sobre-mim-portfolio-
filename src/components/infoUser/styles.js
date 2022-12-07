import styled from "styled-components";
import Photo from '../../images/EU.jpg';

export const InfoContainer = styled.div`
    width:380px;
`
export const Info1 = styled.div`
    .info1-wrapper{
        display:flex;
        align-items:center;
        flex-direction:column;
        justify-content:center;
        width:85%;
        height:180px;
        background-color:#302F3D;
        margin-top:10px;
        border-radius:4%;

        @media(max-width:1350px){
            width:123%;
        }
    }
    
    .circle1{
        width:90px;
        height:90px;
        border-radius:100%;
        background-color:#CB92B1;
        background-image:url(${ Photo });
        background-position:center;
        background-size:cover;
        margin-bottom:10px;
    }

    h1, h4{
        color:#837E9F;
        font-size:17px;
        font-weight:700;
    }

    h4{
        font-size:13px;
        font-weight:400;
    }
`
export const Info2 = styled.div`
    .info2-wrapper{
        width:85%;
        height:240px;
        background-color:#302F3D;
        margin-top:10px;
        border-radius:4%;
        padding:2%;
        
        @media(max-width:1350px){
            width:123%;
        }
    }

    h2{
        font-size:14px;
        color:#837E9F;
        margin-top:15px;
    }

    p{
        padding-left:35px;
        margin-top:-17px;
        font-size:12px;
    }
`
export const Info3 = styled.div`
    .info3-wrapper{
        width:85%;
        height:140px;
        background-color:#302F3D;
        margin-top:10px;
        border-radius:4%;
        padding:4%;

        @media(max-width:1350px){
            width:123%;
        }
    }

    h3{
        color:#837E9F;
        font-size:15px;
        font-weight:700;
        margin-bottom:6px;  
    }

    span{
        width:20%;
        height:20px;
        display:inline-block;
        background-color:#CB92B1;
        border-radius:10%;
        font-size:9px;
        color:#000;
        padding:5px;
        margin:5px;
        text-align:center;
        margin-right:15px;
        margin-left:15px;

        @media(max-width:1350px){
            width:25%;
        }
    }
`