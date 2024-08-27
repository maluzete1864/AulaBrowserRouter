import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
        <div>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/oferta">
                        <li>Oferta</li>
                    </Link>
                    <Link to="/produto">
                        <li>Produto</li>
                    </Link>
                </ul>
            </nav>
            </div>
        </>
    )
}