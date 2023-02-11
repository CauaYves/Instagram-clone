// (onde cada item será um componente diferente, o Post)

function Post(props) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={`assets/${props.profile}.svg`} alt="profile" />
                    {props.profile}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={`assets/${props.post}.svg`} alt="post" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`assets/${props.knewProf}.svg`} alt="knew profile" />
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    const ImgsPosts = [

        {
            profile: 'meowed',
            post: 'gato-telefone',
            knewProf: 'respondeai',
        },
        {
            profile: 'barked',
            post: 'dog',
            knewProf: 'adorable_animals',
        },
        {
            profile: '9gag',
            post: 'gato-telefone',
            knewProf: 'smallcutecats',
        }
    ]

    return (
        <div className="posts">
            {ImgsPosts.map((i) => { 
               return <Post profile={i.profile} post={i.post} knewProf={i.knewProf} /> 
            })}
        </div>
    )
}