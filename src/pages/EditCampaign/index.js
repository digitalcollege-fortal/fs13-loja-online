import React from "react";

export default function EditCampaign() {
    const [titulo, setTitulo] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [imagem, setImagem] = React.useState('');

    const alterarTitulo = (event) => {
        setTitulo(event.target.value);
    }
    
    const alterarDescricao = (event) => {
        setDescricao(event.target.value);
    }

    const alterarImagem = (event) => {
        setImagem(event.target.value);
    }

    const enviar = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: titulo,
                text: descricao,
                image: imagem
            })
        });

        alert("Foi");
    }

    return (
        <div>
            <h1>Editar Campanha</h1>
            <hr/>

            <form onSubmit={enviar}>
                <label>Titulo</label>   
                <input onChange={alterarTitulo} placeholder="Digite aqui"/>
                <br/>

                <label>Descrição</label>   
                <input onChange={alterarDescricao} placeholder="Digite aqui"/>
                <br/>

                <label>Imagem</label>   
                <input onChange={alterarImagem} placeholder="Digite aqui"/>
                <br/>
                
                <button>Pronto</button>
            </form>
        </div>
    )
}