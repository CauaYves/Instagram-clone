import NavBar from "./NavBar"
import Stories from "./Stories"
import Posts from "./Posts"
import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Lista() {
    return (
        <>
            <NavBar />
            <div class="corpo">

                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>

                <div class="sidebar">
                    
                    <Usuario />
                    <Sugestoes />
                    

                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                        Hashtags • Idioma
                    </div>

                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
        </>
    )
}