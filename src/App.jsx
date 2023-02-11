import NavBar from "./components/NavBar"
import Stories from "./components/Stories"
import Posts from "./components/Posts"
import Usuario from "./components/Usuario"
import Sugestoes from "./components/Sugestoes"

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
                    <div className="sugestoes">
                    <Sugestoes />
                    </div>

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