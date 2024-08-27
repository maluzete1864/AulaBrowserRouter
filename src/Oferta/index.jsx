import "../globals.css";
import {useState} from "react";
import ListaProdutos from "../components/ListarProdutos";

export default function Oferta(){
    const [listaProdutosOferta, setProdutosOferta] = useState([
        { id: 6, 
            titulo: 'Cidade dos Ossos', 
            autor:'Cassandra Claire',
            editora:"Galera Record",
            genero:"Fantasia",
            preco: 'R$ 43,50', 
            img:"https://i.pinimg.com/736x/2b/bb/d4/2bbbd4777fe0e8c5408f3a9836e11510--cassandra-clare-nova.jpg",
            edicao: ["primeira", "segunda", "terceira"]
        },

        { id: 7, titulo: 'Cidade das Cinzas', 
            autor:'Cassandra Claire', 
            editora:"Galera Record", 
            genero:"Fantasia",
            preco: 'R$ 25,99', 
            img:"https://tse3.mm.bing.net/th?id=OIP.EeCpVJXUqL_v9cQyps4rIgHaLF&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"]
         },

        { id: 8, titulo: 'Cidade de Vidro', 
            autor:'Cassandra Claire', 
            editora:"Galera Record", 
            genero:"Fantasia",
            preco: 'R$ 47,02',
            img:"https://tse2.mm.bing.net/th?id=OIP.hYzIqVip68Bcffj6shxPDAHaLA&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"] 
        },

        { id: 9, 
            titulo: 'Cidade dos Anjos Caídos', 
            autor:'Cassandra Claire', 
            editora:"Galera Record", 
            genero:"Fantasia",
            preco: 'R$ 34,92', 
            img:"https://tse2.mm.bing.net/th?id=OIP.Lk7GEMVCljjWOP95UOGc3wHaK_&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"]
         },

        { id: 10, 
            titulo: 'Cidade das Almas Perdidas', 
            autor:'Cassandra Claire', 
            editora:"Galera Record", 
            genero:"Fantasia",
            preco: 'R$ 59,89', 
            img:"https://tse3.mm.bing.net/th?id=OIP.ZkuRZcQAQ6aoLIPU6JgOXQHaK_&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"] 
        },

        { id: 11, 
            titulo: 'Cidade do Fogo Celestial', 
            autor:'Cassandra Claire', 
            editora:"Galera Record", 
            genero:"Fantasia",
            preco: 'R$ 40,00', 
            img:"https://tse3.mm.bing.net/th?id=OIP.Q1nLYsKMr0xVix7AbKAWqgAAAA&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"]
         },

        { id: 12, 
            titulo: 'Jack, O Estripador', 
            autor:'Kerri Maniscalco', 
            editora:"Dark Side", 
            genero:"Romance Policial",
            preco: 'R$ 37,50',
            img:"https://tse3.mm.bing.net/th?id=OIP.Q27KEfgZLnrDSZmnmMptTgHaHa&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"] 
        },

        { id: 13, 
            titulo: 'O Príncipe Drácula', 
            autor:'Kerri Maniscalco', 
            editora:"Dark Side", 
            genero:"Romance Policial",
            preco: 'R$ 50,85', 
            img:"https://tse3.mm.bing.net/th?id=OIP.2VjqQtlP605NCsLnh94I8gHaLG&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"] 
        },

        { id: 14, 
            titulo: 'O Grande Houdini', 
            autor:'Kerri Maniscalco', 
            editora:"Dark Side", 
            genero:"Romance Policial",
            preco: 'R$ 36,99', 
            img:"https://tse2.mm.bing.net/th?id=OIP.EvY0gpoJ3M2z9spgV7YxKAAAAA&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"]
         },

        { id: 15, 
            titulo: 'Holmes, O Maligno', 
            autor:'Kerri Maniscalco', 
            editora:"Dark Side", 
            genero:"Romance Policial",
            preco: 'R$ 35,99', 
            img:"https://tse1.mm.bing.net/th?id=OIP.gw6pZ59w5eWEXO8D8ET-4QHaKs&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"] }
    ]);
 
    return(
        <div>
            <Header/>
        
    <ListaProdutos listaProdutosOferta={listaProdutosOferta}/>

     <Footer/>
        </div>
    );
}