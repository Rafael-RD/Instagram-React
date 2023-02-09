const stories=[
    {img:"assets/img/9gag.svg", user:"9gag"},
    {img:"assets/img/meowed.svg", user:"meowed"},
    {img:"assets/img/barked.svg", user:"barked"},
    {img:"assets/img/nathanwpylestrangeplanet.svg", user:"nathanwpylestrangeplanet"},
    {img:"assets/img/wawawicomics.svg", user:"wawawicomics"},
    {img:"assets/img/respondeai.svg", user:"respondeai"},
    {img:"assets/img/filomoderna.svg", user:"filomoderna"},
    {img:"assets/img/memeriagourmet.svg", user:"memeriagourmet"}    
];

export default function Stories() {
    return (
        <div class="stories">
            {stories.map(e=><Story img={e.img} user={e.user} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}


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