function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userImg} alt={props.userName} />
                
                <div class="texto">
                    <div class="nome">{props.userName}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}


export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestao userImg="assets/img/bad.vibes.memes.svg" userName="bad.vibes.memes" reason="Segue você" />
            <Sugestao userImg="assets/img/chibirdart.svg" userName="chibirdart" reason="Segue você" />
            <Sugestao userImg="assets/img/razoesparaacreditar.svg" userName="razoesparaacreditar" reason="Novo no Instagram" />
            <Sugestao userImg="assets/img/adorable_animals.svg" userName="adorable_animals" reason="Segue você" />
            <Sugestao userImg="assets/img/smallcutecats.svg" userName="smallcutecats" reason="Segue você" />
        </div>
    )
}