import React from "react";
import {useParams} from "react-router-dom";

export default function EditCampaign() {
    const {id} = useParams();
    const [titulo, setTitulo] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [imagem, setImagem] = React.useState('');

    React.useEffect(() => {
        fetch('http://localhost:8000/campaigns/'+id)
            .then(res => res.json())
            .then(dados => {
                setTitulo(dados.title);
                setDescricao(dados.text);
                setImagem(dados.image);
            })
    }, [id]);

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

        fetch('http://localhost:8000/campaigns/'+id, {
            method: 'PATCH',
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
                <input value={titulo} onChange={alterarTitulo} placeholder="Digite aqui"/>
                <br/>

                <label>Descrição</label>   
                <input value={descricao} onChange={alterarDescricao} placeholder="Digite aqui"/>
                <br/>

                <label>Imagem</label>   
                <input value={imagem} onChange={alterarImagem} placeholder="Digite aqui"/>
                <br/>
                
                <button>Pronto</button>
            </form>
        </div>
    )
}