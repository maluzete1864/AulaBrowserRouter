import {useState} from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";
import Header from "../components/Header";
import ListaProdutos from "../components/ListarProdutos";

export default function Home(){
    const [listaProdutos, setProdutosHome] = useState([
        { id: 1, 
            titulo: 'As Vantagens de Ser Invisível', 
            autor:'Stephen Chbosky', 
            editora:"Rocco", 
            genero:"Romance",
            preco: 'R$ 30,00', 
            img:"https://tse1.mm.bing.net/th?id=OIP.vqHR5K92kyT5Pxyjnu2EygHaJg&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"] },

        { id: 2, 
            titulo: 'Six of Crows', 
            autor:'Leigh Bardugo', 
            editora:"Gutenberg", 
            genero:"Fantasia",
            preco: 'R$ 40,00',
            img:"https://tse3.mm.bing.net/th?id=OIP.ASAw9YNjCa_g2f-ohIC1iwHaK_&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"] },

        { id: 3, 
            titulo: 'Crooked Kingdom', 
            autor:'Leigh Bardugo', 
            editora:"Gutenberg", 
            genero:"Fantasia",
            preco: 'R$ 45,00', 
            img:"https://tse1.mm.bing.net/th?id=OIP.gadgaRi2nZqH_4ntdVfkjwHaKq&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"] },

        { id: 4, 
            titulo: 'Confidências de uma Ex-Popular', 
            autor: 'Ray Tavares', 
            editora:"Galera Record", 
            genero:"Romance",
            preco: 'R$ 35,00', 
            img:"https://tse1.mm.bing.net/th?id=OIP.M-iO6oHqgPLYFV5feHUa5AHaLM&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"]},

        { id: 5, 
            titulo: 'Os Crimes ABC', 
            autor: 'Agatha Christie', 
            editora:"HarperCollins", 
            genero:"Romance Policial",
            preco: 'R$ 20,00',
            img:"https://tse3.mm.bing.net/th?id=OIP.8YF1UIYAwUbBd4VZ1DPx6QAAAA&pid=Api&P=0&h=180",
            edicao: ["primeira", "segunda", "terceira"]}
    ]);
 
    
    return(
        <div>
        <Header/>
        <p>Minha Home</p>
        <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        >
            <div>
                <img src="https://br.images.search.yahoo.com/images/view;_ylt=AwrhdrjzD8xmexQXRLL16Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzY0ZGZiN2I5Nzk3MDdiNjk5MGY1YWEyNjQxNzJkYjBlBGdwb3MDMTMEaXQDYmluZw--?back=https%3A%2F%2Fbr.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlivros%26type%3DE211BR105G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D13&w=1380&h=920&imgurl=mercadoeconsumo.com.br%2Fwp-content%2Fuploads%2F2020%2F04%2Flivros.jpg&rurl=https%3A%2F%2Fmercadoeconsumo.com.br%2F2020%2F04%2F07%2Fvarejo-de-livros-no-brasil-ja-sente-os-efeitos-da-pandemia%2F&size=135.9KB&p=livros&oid=64dfb7b979707b6990f5aa264172db0e&fr2=piv-web&fr=mcafee&tt=Varejo+de+livros+no+Brasil+j%C3%A1+sente+os+efeitos+da+pandemia+-+Mercado+...&b=0&ni=21&no=13&ts=&tab=organic&sigr=myl54x3aI9WV&sigb=i7iGbWsOrnwn&sigi=WlSWbrNphmh9&sigt=bOLxt2dEIWHp&.crumb=/8DFfd388ua&fr=mcafee&fr2=piv-web&type=E211BR105G0" alt="Slide1"/>
            </div>

            <div>
                <img src="https://br.images.search.yahoo.com/images/view;_ylt=AwrFGs9QEMxmlOIeocX16Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzUyMDczOTEyZmM4OTY4NzBkZmNkZWFmNjM0NDhmZGIyBGdwb3MDNTkEaXQDYmluZw--?back=https%3A%2F%2Fbr.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcita%25C3%25A7%25C3%25B5es%2Bde%2Blivros%26ei%3DUTF-8%26type%3DE211BR105G0%26fr%3Dmcafee%26fr2%3Dsa-gp-search%26tab%3Dorganic%26ri%3D59&w=619&h=435&imgurl=i.pinimg.com%2Foriginals%2Fd6%2F1c%2Fac%2Fd61cac781fa25450504ec08cdb457c8b.png&rurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F556687203931243627%2F&size=388.4KB&p=cita%C3%A7%C3%B5es+de+livros&oid=52073912fc896870dfcdeaf63448fdb2&fr2=sa-gp-search&fr=mcafee&tt=Orgulho+e+Preconceito+-+Jane+Austen+Prejudice+Quotes%2C+Pride+And+...&b=0&ni=140&no=59&ts=&tab=organic&sigr=_yRiMKwoICM5&sigb=wyyJ8WPVItm7&sigi=Ar9mC8GZTl0W&sigt=ALLrCeYSpCIQ&.crumb=/8DFfd388ua&fr=mcafee&fr2=sa-gp-search&type=E211BR105G0" alt="Slide1"/>
            </div>

            <div>
                <img src="https://br.images.search.yahoo.com/images/view;_ylt=Awrhdrj5D8xm2JIYO1D16Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2RkNzEwNzg4NWNmNGRiNTAxYmE1OGMwMmEwNzQ5NjgxBGdwb3MDOTgEaXQDYmluZw--?back=https%3A%2F%2Fbr.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlivros%26type%3DE211BR105G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D98&w=1200&h=673&imgurl=png.pngtree.com%2Fbackground%2F20230517%2Foriginal%2Fpngtree-book-shelf-picture-image_2639167.jpg&rurl=https%3A%2F%2Fpt.pngtree.com%2Ffreebackground%2Fbook-shelf_2639167.html&size=1208.5KB&p=livros&oid=dd7107885cf4db501ba58c02a0749681&fr2=piv-web&fr=mcafee&tt=Fundo+Estante+De+Livros+Fundo%2C+Biblioteca+Antiga+Com+Livros%2C+Estante+De+...&b=61&ni=21&no=98&ts=&tab=organic&sigr=5nXKMPGiSaXt&sigb=rka9HK6.7MV3&sigi=2rT8oLv_IX_L&sigt=yCl8X4P92m5F&.crumb=/8DFfd388ua&fr=mcafee&fr2=piv-web&type=E211BR105G0" alt="Slide1"/>
            </div>

        </Carousel>

        <ListaProdutos listaProdutos={listaProdutos}/>

        <Footer/>

        </div>
    );
}