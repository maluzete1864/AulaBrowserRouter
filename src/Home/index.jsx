import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {useState} from "react";

export default function Home(){
    const [listaProdutosHome, setProdutosHome] = useState([
        { id: 1, titulo: 'As Vantagens de Ser Invisível', autor:'Stephen Chbosky', preco: 'R$ 30,00' },
        { id: 2, titulo: 'Six of Crows', autor:'Leigh Bardugo', preco: 'R$ 40,00' },
        { id: 3, titulo: 'Crooked Kingdom', autor:'Leigh Bardugo', preco: 'R$ 45,00' },
        { id: 4, titulo: 'Confidências de uma Ex-Popular', autor: 'Ray Tavares', preco: 'R$ 35,00'},
        { id: 5, titulo: 'Os Crimes ABC', autor: 'Agatha Christie', preco: 'R$ 20,00'}
    ]);
 
    
    
    return(
        <>
        <Header/>
        <p>Minha Home</p>
        </>
    );
}