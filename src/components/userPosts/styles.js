import styled from "styled-components";
import Photo from '../../images/EU.jpg';

export const PostContainer = styled.div`
    width:900px;
`
export const Post1 = styled.div`
    .projects-wrapper{
        width:100%;
        height:60px;
        background-color:#302F3D;
        padding:10px 15px;
        margin-top:10px;
        border-radius:10px;
        
        @media(max-width:1350px){
            width:52%;
        }
    }

    .projects-wrapper h1, .projects-wrapper a{
        display:inline-block;
        font-size:17px;
        color:#837E9F;
    }

    .projects-wrapper a{
        float:right;
        cursor:pointer;
    }

    .projects-wrapper h2{
        font-size:17px;
        color:#837E9F;
        text-align:center;
        line-height:40px;
    }
`
export const Post2 = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:10px;

    @media(max-width:1350px){
            width:104%;
            display:flex;
            flex-direction:column;
    }
    
    .w50{
        width:50%;
        padding:10px 15px;
        background-color:#302F3D;
        border-radius:10px;
        border:3px solid #22212C;
    }

    .left, .right{
        display:none;
    }

    .left:nth-of-type(4), .right:nth-of-type(6){
        font-size:14px;
        color:#837E9F;
        display:block;
        cursor:pointer;
    }
    
    .left p, .right p{
        padding-top:5px;
        color:#837E9F;
        font-size:11px;
    }

    .left span, .right span{
        padding-top:5px;
        font-size:11px;
    }

    .left span i, .right span i{
        margin-left:2px;
        font-size:7px;
        color:yellow;
    }
`
export const Post3 = styled.div`

    .posts-wrapper{
        width:100%;
        height:60px;
        margin-top:10px;
        background-color:#302F3D;
        padding:10px 15px;
        border-radius:10px;
        display:flex;
        align-items:center;
        flex-direction:row;
        justify-content:flex-start;
        @media(max-width:1350px){
            width:52%;
            height:50px;

            .circle2{
                width:70px;
                height:70px;
            }
        }
    }

    .circle2{
        width:90px;
        height:90px;
        border-radius:100%;
        background-color:#CB92B1;
        background-image:url(${ Photo });
        background-position:center;
        background-size:cover;
        padding:1%;
        display:inline-block;
    }

    .posts-wrapper p, span{
        margin-left:10px;
        color:#837E9F;
        font-size:15px;
    }

    .posts-wrapper span{
        margin-left:0;
        font-size:12px;
    }

    @media(max-width:1350px){
        .posts-wrapper p{
            font-size:12px;
        }

        .posts-wrapper span{
            font-size:10px;
        }
    }
`

export const Post4 = styled.div`

    .about-wrapper{
        display:flex;
        align-items:center;
        flex-direction:column;
        justify-content:center;
        width:100%;
        height:220px;
        border-radius:10px;
        margin-top:10px;
        background-color:#302F3D;
        color:#837E9F;

        @media(max-width:1350px){
            width:52%;
        }
    }

    .about-wrapper h1{
        margin-top:25px;
        font-size:20px;
        color:#CB92B1;
        padding-top:5px;
    }

    .about-wrapper p{
        width:60%;
        font-size:14px;
        text-align:justify;
        margin-top:20px;
        line-height:20px;
        @media(max-width:1350px){
            width:100%;
            padding:10px;
            margin:0;
            font-size:12px;
        }
    }
   
    .myButton {
        background-color:#CB92B1;
        background-color:;
        border-radius:6px;
        border:1px solid #CB92B1;
        display:inline-block;
        cursor:pointer;
        color:#000;
        font-size:15px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
    }
`