import { useState } from "react";

const posts = [
    { imgUser: "assets/img/meowed.svg", nameUser: "meowed", img: "assets/img/gato-telefone.svg", imgAlt: "gato-telefone", likeUser: "respondeai", likeUserImg: "assets/img/respondeai.svg", likeNumber: "101523" },
    { imgUser: "assets/img/barked.svg", nameUser: "barked", img: "assets/img/dog.svg", imgAlt: "dog", likeUser: "adorable_animals", likeUserImg: "assets/img/adorable_animals.svg", likeNumber: "99159" },
    { imgUser: "assets/img/Anônimo.png", nameUser: "Anônimo", img: "assets/img/gato-telefone.svg", imgAlt: "gato-telefone", likeUser: "9gag", likeUserImg: "assets/img/9gag.svg", likeNumber: "3101523" }
];

export default function Posts() {
    return (
        <div className="posts">
            {posts.map(e => <Post key={e.imgUser} imgUser={e.imgUser} nameUser={e.nameUser} img={e.img} imgAlt={e.imgAlt} likeUser={e.likeUser} likeUserImg={e.likeUserImg} likeNumber={e.likeNumber} />)}
        </div>
    )
}

function Post(props) {
    const [salvo, setSalvo]=useState('bookmark-outline');
    const [curtido, setCurtido]=useState(false);
    const [overlay, setOverlay]=useState(false);
    const [animacao, setAnimacao]=useState(false);




    function salvar(){
        if(salvo==='bookmark-outline'){
            setSalvo('bookmark');
        }else setSalvo('bookmark-outline')
    }

    function curtirBtn(){
        if(curtido===false){
            setCurtido(true);
        } 
        else setCurtido(false)
    }

    function curtirImg(){
        setCurtido(true);
        setOverlay(true);
        setTimeout(() => {
            setAnimacao(true)
        }, 1);
        setTimeout(() => {
           setOverlay(false);
           setAnimacao(false)
        }, 500);
    }

    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUser} alt={props.nameUser} />
                    {props.nameUser}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onDoubleClick={curtirImg} src={props.img} alt={props.imgAlt} />
                <div className={overlay?'shown':'hidden'}>
                    <ion-icon class={animacao?'grow':''} name="heart"></ion-icon>
                </div>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" class={curtido?'red':''} onClick={curtirBtn} name={curtido?"heart":"heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={salvar} name={salvo}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likeUserImg} alt={props.likeUser} />
                    <div className="texto">
                        Curtido por <strong>{props.likeUser}</strong> e <strong data-test="likes-number">outras {(Number(props.likeNumber)+(curtido?1:0)).toLocaleString('pt-BR')} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}