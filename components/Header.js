//react component therefore made use of a capital letter
//navbar 
import Link from 'next/link';

//re-usable header/navbar component that we'll drop into the page components
const Header = () => {
    return (
    <div>
        <Link href="/">
            <a > HOME </a>
        </Link>
        <Link href="/about">
            <a > ABOUT </a>
        </Link>
        <Link href="/projects">
            <a > PROJECTS </a>
        </Link>
        <Link href="/contact">
            <a > CONTACT </a>
        </Link>

        <style jsx> 
            {`
            div {
                padding: 2rem;
                background-color: white;
                width: 100%;
            }
            a {
                text-decoration: none;
                margin: 3px;
                color: black;
                font-size: 1rem;
                font-family: Arial;
            }
            a :hover {
                text-decoration: none;
                color: orange;
            }
            `}
        </style>
    </div>
    );
}

export default Header;