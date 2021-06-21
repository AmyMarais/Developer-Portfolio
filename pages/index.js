//acts as home page or the App.js file with React
import Layout from '../components/Layout'; //contains main styling
//import all components
import Header from '../components/Header';

const Home = () => (
    <div>
        <h1>Hello , I'm Amy </h1>
        <small> ( A Full Stack Web Developer ) </small>

        <style jsx>{`
        h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 10rem;
            text-align: center;
            padding-top: 8rem;
        }
        small {
            font-family: 'DM Serif Display', serif;
            font-size: 1.5rem;
            margin-left: 510px;
            padding: 4rem;
        }
        `}
        </style>

    </div>
)

export default Home;

