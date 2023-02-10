const sugestao=[
    {userImg:"assets/img/bad.vibes.memes.svg", userName:"bad.vibes.memes", reason:"Segue você"},
    {userImg:"assets/img/chibirdart.svg", userName:"chibirdart", reason:"Segue você"},
    {userImg:"assets/img/razoesparaacreditar.svg", userName:"razoesparaacreditar", reason:"Novo no Instagram"},
    {userImg:"assets/img/adorable_animals.svg", userName:"adorable_animals", reason:"Segue você"},
    {userImg:"assets/img/smallcutecats.svg", userName:"smallcutecats", reason:"Segue você"}
];




export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestao.map(e=><Sugestao key={e.userName} userImg={e.userImg} userName={e.userName} reason={e.reason} />)}
        </div>
    )
}


function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.userImg} alt={props.userName} />
                
                <div className="texto">
                    <div className="nome">{props.userName}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>        
    )
}