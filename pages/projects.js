//page needs to contain a list of all my best work
//include at least 1 project deployed to Heroku (previous Capstone Project)
//push some projects to Github and link the repo's here
import Layout from "../components/Layout";
import Link from 'next/link';

const Project = () => (

    <div>
        <h1> Some of my best work ... </h1>
        <div className="row">
        <div className="two columns main-col">
        <h4> An Online Store Created Using HTML and CSS</h4>
        <img src="/static/images/store.png" alt="online store" width="600px" height="500px" /> 
        <img src="/static/images/store2.png" alt="online store" width="600px" height="500px" /> 

        <div className="two columns main-col">
        <h4> A Memory Game Created Using React.js</h4>
        <img src="/static/images/reactmem3.png" alt="online store" width="600px" height="500px" /> 
        <img src="/static/images/reactmem2.png" alt="online store" width="600px" height="500px" /> 
        </div>
        </div>
        </div>
        <h6> Find more at : 
            <br/>
            <Link href="https://github.com/AmyMarais"> 
            <a> GitHub </a>
             </Link>
            <br/>
            <Link href="https://task21.herokuapp.com/"> 
            <a> An iTunes Search API Created Using Express And React on Heroku </a> 
            </Link>
        </h6>

        <style jsx> {`
        h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 6rem;
            text-align: center;
            padding: 4rem 0 2rem 0;
        }
        h4 {
            font-family: 'DM Serif Display', serif;
            font-size: 2rem;
            text-align: center;
            caption-side: top;
            color: grey;
        }
        div {
            margin: 0 auto;
        }
        h6 {
            font-family: 'DM Serif Display', serif;
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 2rem;
        }
        a {
            text-decoration: none;
            color: black;
        }
        a :hover {
            color: orange;
        }
        img {
            padding: 4rem;
            float: left;
            margin: 0 auto;
            object-fit: cover;
         }
        `}
        </style>
    </div>
 
)

export default Project;