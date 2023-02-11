// (onde cada item será um componente diferente, o Sugestao)

const sugestDatas = [
    
    'adorable_animals',
    'bad.vibes.memes',
    'chibirdart',
    'razoesparaacreditar',
    'smallcutecats',

]

function SugestItem(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={`assets/${props.profile}.svg`} alt={props.profile} />
                <div className="texto">
                    <div className="nome">{props.profile}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestao() {
    return (
        sugestDatas.map((i) => {
            return <SugestItem profile={i} />
        })
    )
}