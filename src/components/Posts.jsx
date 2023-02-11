// (onde cada item será um componente diferente, o Post)

export default function Posts(){
    return (
        <div class="posts">
                        <div class="post">
                            <div class="topo">
                                <div class="usuario">
                                    <img src="assets/meowed.svg" alt="meowed" />
                                    meowed
                                </div>
                                <div class="acoes">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>

                            <div class="conteudo">
                                <img src="assets/gato-telefone.svg" alt="gato-telefone" />
                            </div>

                            <div class="fundo">
                                <div class="acoes">
                                    <div>
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>

                                <div class="curtidas">
                                    <img src="assets/respondeai.svg" alt="respondeai" />
                                    <div class="texto">
                                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="post">
                            <div class="topo">
                                <div class="usuario">
                                    <img src="assets/barked.svg" alt="barked" />
                                    barked
                                </div>
                                <div class="acoes">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>

                            <div class="conteudo">
                                <img src="assets/dog.svg" alt="dog" />
                            </div>

                            <div class="fundo">
                                <div class="acoes">
                                    <div>
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>

                                <div class="curtidas">
                                    <img src="assets/adorable_animals.svg" alt="adorable_animals" />
                                    <div class="texto">
                                        Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}