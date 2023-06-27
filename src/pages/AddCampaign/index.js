import React from "react";

export default function AddCampaign() {
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

    return (
        <div>
            <h1>Nova Campanha</h1>
            <hr/>

            <label>Titulo</label>   
            <input onChange={alterarTitulo} placeholder="Digite aqui"/>
            <br/>

            <label>Descrição</label>   
            <input onChange={alterarDescricao} placeholder="Digite aqui"/>
            <br/>

            <label>Imagem</label>   
            <input onChange={alterarImagem} placeholder="Digite aqui"/>
            <br/>

            Titulo: {titulo}
            <br/>
            descricao: {descricao}
            <br/>
            Imagem: {imagem}
        </div>
    )
}