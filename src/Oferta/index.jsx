// fazer 10 objetos

import {useState} from "react";

export default function Oferta(){
    const [listaProdutosOferta, setProdutosOferta] = useState([
        { id: 6, titulo: 'Cidade dos Ossos', autor:'Cassandra Claire', preco: 'R$ 43,50' },
        { id: 7, titulo: 'Cidade das Cinzas', autor:'Cassandra Claire', preco: 'R$ 25,99' },
        { id: 8, titulo: 'Cidade de Vidro', autor:'Cassandra Claire', preco: 'R$ 47,02' },
        { id: 9, titulo: 'Cidade dos Anjos Caídos', autor:'Cassandra Claire', preco: 'R$ 34,92' },
        { id: 10, titulo: 'Cidade das Almas Perdidas', autor:'Cassandra Claire', preco: 'R$ 59,89' },
        { id: 11, titulo: 'Cidade do Fogo Celestial', autor:'Cassandra Claire', preco: 'R$ 40,00' },
        { id: 12, titulo: 'Jack, O Estripador', autor:'Kerri Maniscalco', preco: 'R$ 37,50' },
        { id: 13, titulo: 'O Príncipe Drácula', autor:'Kerri Maniscalco', preco: 'R$ 50,85' },
        { id: 14, titulo: 'Houdini, O Grande', autor:'Kerri Maniscalco', preco: 'R$ 36,99' },
        { id: 15, titulo: 'Holmes, O Maligno', autor:'Kerri Maniscalco', preco: 'R$ 35,99' }
    ]);
 
    return(
        <div>
            <Header/>
        {
            listaProdutosOferta.map((produto) =>
                <div key={produto.id}>
                    <p>{produto.titulo}</p>
                    <p>{produto.autor}</p>
                    <p>{produto.preco}</p>
                    <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
                </div>
            )
        }
    
        </div>
    );
}