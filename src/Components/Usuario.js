import { useState } from "react"

export default function Usuario() {
    const [user, setUser]=useState(localStorage.getItem("user") ? localStorage.getItem("user") : "Anônimo");
    const [img, setImg]=useState(localStorage.getItem("img") ? localStorage.getItem("img") : "assets/img/Anônimo.png");
    
    function trocarNome(){
        const novoNome=prompt('Qual o seu nome?');
        if(novoNome!==''){
            setUser(novoNome);
            localStorage.setItem('user', novoNome);
        }
    }

    function trocarImg(){
        const novaImg=prompt('Url da imagem');
        if(novaImg!==''){
            setImg(novaImg);
            localStorage.setItem('img', novaImg);
        }
    }

    return (
        <div className="usuario">
            <img data-test="profile-image" onClick={trocarImg} src={img} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong data-test="name">{user}</strong>
                    <ion-icon data-test="edit-name" onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}