import { useState } from "react"

// const novoNome=prompt('Qual o seu nome?');
//         setUser(novoNome);S
//         localStorage.setItem('user', novoNome);


// localStorage.setItem('user', user);
// setUser(prompt('Qual o seu nome?'));

// const [user,setUser]=useState("Anônimo")

export default function Usuario() {
    const [user, setUser]=useState(localStorage.getItem("user") ? localStorage.getItem("user") : "Anônimo");
    const [img, setImg]=useState(localStorage.getItem("img") ? localStorage.getItem("img") : "assets/img/Anônimo.png");
    
    function trocarNome(){
        const novoNome=prompt('Qual o seu nome?');
        setUser(novoNome);
        localStorage.setItem('user', novoNome);
    }

    function trocarImg(){
        const novaImg=prompt('Url da imagem');
        setImg(novaImg);
        localStorage.setItem('img', novaImg);
    }

    return (
        <div class="usuario">
            <img onClick={trocarImg} src={img} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{user}</strong>
                    <ion-icon onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}