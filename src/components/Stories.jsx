// (onde cada item será um componente diferente, o Story)
const profilesImg = [
    
    '9gag',
    'adorable_animals',
    'bad.vibes.memes',
    'barked',
    'catanacomics',
    'chibirdart',
    'dog',
    'filomoderna',
    'gato-telefone',
    'memeriagourmet',
    'meowed',
    'nathanwpylestrangeplanet',
    'razoesparaacreditar',
    'respondeai',
    'smallcutecats',
    'wawawicomics',

]
function StoryItem(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.imagem} alt="post"/>
            </div>
            <div className="usuario">
                {props.name}
            </div>
        </div>
    )
}

export default function Stories() {
    return (
        <div className="stories">
            {profilesImg.map((i) => <StoryItem imagem={`/assets/${i}.svg`} name={i}/> )}
        </div>
    )
}