import { useState } from "react"

function Post(props) {

    const [like, setLike] = useState('assets/heart-outline.svg')

    function likePost(param){

        console.log(param)
        if(param === "assets/heart-outline.svg"){
            setLike('assets/heart-red.svg')
        }else{
            setLike('assets/heart-outline.svg')
        }

    }

    function likePostImg(){
        setLike('assets/heart-red.svg')
    }

    const [save, setSave] = useState('bookmark-outline')

    function savePost(ico){

        if(ico === 'bookmark-outline'){
            setSave('bookmark')
        }else{
            setSave('bookmark-outline')
        }

    }

    return (
        <div className="post" data-test="post">
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
                <img src={`assets/${props.post}.svg`} alt="post" onClick={() => likePostImg()} data-test="post-image"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <img src={like} className="icon" alt="heart" onClick={ () => likePost(like) } data-test="like-post"/>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={save} data-test="save-post" onClick={() => savePost(save)} ></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={`assets/${props.knewProf}.svg`} alt="knew profile" />
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras <span data-test="likes-number">{props.likes}</span> pessoas</strong>
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
            likes: 1925
        },
        {
            profile: 'barked',
            post: 'dog',
            knewProf: 'adorable_animals',
            likes: 129
        },
        {
            profile: '9gag',
            post: 'gato-telefone',
            knewProf: 'smallcutecats',
            likes: 455
        }
    ]


    return (
        <div className="posts">
            {ImgsPosts.map((i) => {
                return <Post profile={i.profile} post={i.post} knewProf={i.knewProf} likes={i.likes}/>
            })}
        </div>
    )
}