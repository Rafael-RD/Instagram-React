function Post(props) {
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
                        <ion-icon name="bookmark-outline"></ion-icon>
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




export default function Posts() {

    return (
        <div class="posts">
            <Post imgUser="assets/img/meowed.svg" nameUser="meowed" img="assets/img/gato-telefone.svg" imgAlt="gato-telefone" likeUser="respondeai" likeUserImg="assets/img/respondeai.svg" likeNumber="101.523" />
            <Post imgUser="assets/img/barked.svg" nameUser="barked" img="assets/img/dog.svg" imgAlt="dog" likeUser="adorable_animals" likeUserImg="assets/img/adorable_animals.svg" likeNumber="99.159" />
        </div>
    )
}