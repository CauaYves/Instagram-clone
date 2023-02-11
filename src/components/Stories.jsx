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
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt="post"/>
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}

export default function Stories() {
    return (
        <div class="stories">
            {profilesImg.map((i) => <StoryItem imagem={`/assets/${i}.svg`} name={i}/> )}
        </div>
    )
}