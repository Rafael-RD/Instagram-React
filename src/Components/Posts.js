import { useState } from "react";

const posts = [
    { imgUser: "assets/img/meowed.svg", nameUser: "meowed", img: "assets/img/gato-telefone.svg", imgAlt: "gato-telefone", likeUser: "respondeai", likeUserImg: "assets/img/respondeai.svg", likeNumber: "101.523" },
    { imgUser: "assets/img/barked.svg", nameUser: "barked", img: "assets/img/dog.svg", imgAlt: "dog", likeUser: "adorable_animals", likeUserImg: "assets/img/adorable_animals.svg", likeNumber: "99.159" },
    { imgUser: "assets/img/Anônimo.png", nameUser: "Anônimo", img: "assets/img/gato-telefone.svg", imgAlt: "gato-telefone", likeUser: "9gag", likeUserImg: "assets/img/9gag.svg", likeNumber: "3.101.523" }
];

export default function Posts() {
    return (
        <div class="posts">
            {posts.map(e => <Post imgUser={e.imgUser} nameUser={e.nameUser} img={e.img} imgAlt={e.imgAlt} likeUser={e.likeUser} likeUserImg={e.likeUserImg} likeNumber={e.likeNumber} />)}
        </div>
    )
}

function Post(props) {
    const [salvo, setSalvo]=useState('bookmark-outline');

    function salvar(){
        if(salvo==='bookmark-outline'){
            setSalvo('bookmark');
        }else setSalvo('bookmark-outline')
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUser} alt={props.nameUser} />
                    {props.nameUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.img} alt={props.imgAlt} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvar} name={salvo}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeUserImg} alt={props.likeUser} />
                    <div class="texto">
                        Curtido por <strong>{props.likeUser}</strong> e <strong>outras {props.likeNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}