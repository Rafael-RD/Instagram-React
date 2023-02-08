function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt={props.user} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}

export default function Stories() {
    return (
        <div class="stories">
            <Story img="assets/img/9gag.svg" user="9gag" />
            <Story img="assets/img/meowed.svg" user="meowed" />
            <Story img="assets/img/barked.svg" user="barked" />
            <Story img="assets/img/nathanwpylestrangeplanet.svg" user="nathanwpylestrangeplanet" />
            <Story img="assets/img/wawawicomics.svg" user="wawawicomics" />
            <Story img="assets/img/respondeai.svg" user="respondeai" />
            <Story img="assets/img/filomoderna.svg" user="filomoderna" />
            <Story img="assets/img/memeriagourmet.svg" user="memeriagourmet" />
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}