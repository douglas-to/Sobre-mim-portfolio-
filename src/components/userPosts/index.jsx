import { useEffect, useState } from 'react';
import {PostContainer, Post1, Post2, Post3, Post4} from './styles';


const UserPost = props => {
    const [repos, setRepos] = useState([]);
    const URL = "https://github.com/douglas-to/Clone-Netflix-Pagina-inicial-";
    const URL1 = "https://github.com/douglas-to/Github-Search-Profile"
    const URL2 = "https://github.com/douglas-to?tab=repositories";
    const CVurl = "https://drive.google.com/file/d/1cblcfzuKot8qWVgh991caI3sDM1LzmzA/view?usp=sharing";

    useEffect( () => {
        fetch('https://api.github.com/users/douglas-to/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
    }, [] )

    return(
        <PostContainer>
            <Post1>
                <div className="projects-wrapper">
                    <h1>Meus Projetos</h1>
                    <a onClick={() => {window.location.href = URL2}}>Veja+</a>
                </div>
            </Post1>
            <Post2>
                <div className="w50 post-wrapper">
                    {repos.map(repo => {
                        return(
                            <div className="left">
                                <a onClick={() => {window.location.href = URL}}><i className="fa-regular fa-folder"></i> {repo.name}</a>
                                <p>Projeto clone da pagina inicial da netflix, utilizando a API do the movie DB.</p>
                                <span>{repo.language} <i class="fa-solid fa-circle"></i></span> 
                            </div>
                        )
                    })}                         
                </div>
                <br/>
                <div className="w50 post-wrapper">
                    {repos.map(repo => {
                        return(
                            <div className="right">
                                <a onClick={() => {window.location.href = URL1}}><i className="fa-regular fa-folder"></i> {repo.name}</a>
                                <p>Projeto que busca perfis do github, e infomações sobre o perfil buscado.</p>
                                <span>{repo.language} <i class="fa-solid fa-circle"></i></span> 
                            </div>
                        )
                    })}
                </div>
            </Post2>
            <Post1>
                <div className="projects-wrapper">
                    <h2>Posts recentes</h2>
                </div>   
            </Post1>
            <Post3>
                <div className="posts-wrapper">
                    <div className="circle2"></div>
                    <p>Começando meus estudos sobre JS na rocketseat!! &#128512;<br/>
                    <span>2 anos atrás</span></p>
                </div>
            </Post3>
            <Post4>
                <div className="about-wrapper">
                    <h1><b>&lt;</b>Sobre mim<b>/&gt;</b></h1>
                    <p>
                        Olá meu nome é Douglas eu sou desenvolvedor web júnior, e eu estou estudando a área da tecnologia para me tornar um grande programador.
                        <br/>
                        Faz 2 anos que estou estudando desenvolvimento web focando inicialmente no front end, desde então adorei a área e com tempo vou melhorar as minhas habilidades como desenvolvedor.
                        <br/>
                        Tenho como objetivo virar um desenvolvedor full-stack, mas ainda tenho um longo caminho a percorrer.
                    </p>
                    <div className="btn-wrapper">
                        <a className="myButton" onClick={() => {window.location.href = CVurl}}>Meu CV</a>
                    </div>
                </div>
            </Post4>
        </PostContainer>
    )
}

export default UserPost;
