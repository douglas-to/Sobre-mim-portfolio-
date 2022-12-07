import {InfoContainer, Info1, Info2, Info3} from './styles';

const UserInfo = props => {
return(
    <InfoContainer>
        <Info1>
            <div className="info1-wrapper">
                <div className="circle1"></div>
                <h1>Douglas Trigueiro</h1>
                <h4>Desenvolvedor web</h4>
            </div>
        </Info1>
        <Info2>
            <div className="info2-wrapper">
                <div><h2><i className="fa-solid fa-location-dot"></i><p>Brasil</p></h2></div>
                <div><h2><i className="fa-solid fa-briefcase"></i><p>Freelancer</p></h2></div>
                <div><h2><i className="fa-brands fa-github"></i><p>DouglasTO</p></h2></div>
                <div><h2><i className="fa-solid fa-city"></i><p>Cotia/SP</p></h2></div>
                <div><h2><i className="fa-brands fa-instagram"></i><p>arroba_gago</p></h2></div>
                <div><h2><i className="fa-solid fa-mobile-retro"></i><p>11 91671-6530</p></h2></div>
                <div><h2><i className="fa-solid fa-envelope"></i><p>dougoliveira564@gmail.com</p></h2></div>
            </div>
        </Info2>
        <Info3>
            <div className="info3-wrapper">
                <h3>Tecnologias</h3>
                <span>HTML</span>
                <span>CSS</span> 
                <span>JavaScript</span>
                <span>JQuery</span> 
                <span>ReactJS</span> 
                <span>Bootstrap</span>
                <span>mySQL</span>
                <span>Git</span>
                <span>PHP</span>
            </div>            
        </Info3>
    </InfoContainer>
)} 

export default UserInfo;