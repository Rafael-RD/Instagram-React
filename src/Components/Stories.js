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
        <div className="stories">
            {stories.map(e=><Story key={e.user} img={e.img} user={e.user} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}


function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.img} alt={props.user} />
            </div>
            <div className="usuario">
                {props.user}
            </div>
        </div>
    )
}