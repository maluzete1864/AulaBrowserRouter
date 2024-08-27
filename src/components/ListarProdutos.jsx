export default function ListaProdutos({listaProdutos}){
    return(
        <div>
            {
                listaProdutos.map((produto) =>
                    <div key={produto.id}>
                        <p>{produto.titulo}</p>
                        <p>{produto.autor}</p>
                        <p>{produto.editora}</p>
                        <p>{produto.genero}</p>
                        <p>{produto.preco}</p>
                        <img src= {produto.img}/>
                        { edicao.map((e)=>
                        <p>{e}</p>)}
                        <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
                    </div>
                )
            }
        </div>
        
    );
}