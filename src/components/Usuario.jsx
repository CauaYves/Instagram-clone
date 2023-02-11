import { useState } from "react"

export default function Usuario() {

    const [foto, setFoto] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DCAdN8tADNbaWWmJ-Uu2imt-27pXoI_0544hFsCc9g&s')

    function changeFoto() {
        const newFoto = prompt('coloque o endereço URL da imagem')
        if (!newFoto) {
            setFoto(foto)
        } else {
            setFoto(newFoto)
        }
    }

    const [name, setName] = useState('@driven-aluno')

    function changeName() {
        const newName = prompt('digite seu nome')
        if (!newName) {
            setName(name)
        } else {
            setName(newName)
        }
    }

    return (
        <div className="usuario">
            <img src={foto} alt="imagem de perfil" onClick={changeFoto} data-test="profile-image"/>
            <div className="texto">
                <span>
                    <strong data-test="name">{name}</strong>
                    <ion-icon name="pencil-outline" onClick={changeName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}