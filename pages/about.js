//about me page
//include educational + work history , who I am and what I'm passionate about
import Image from "next/image";

const About = () => (
    <div>
     <div className="row">
        <div className="two columns main-col">
           <img src="/static/images/circle-cropped.png " width="400px" height="400px" alt="My Profile Pic" />
           <h2>Who Am I? </h2>
           <article>I am young, ambitious, entry-level full stack web developer who is inspired by original
            and independent thinkers that focus on making the world a better place. I currently reside in Cape Town,
            South Africa and am eager to enter the coding industry! I have a passion for creatively solving 
            complex problems and find them deeply satisfying. I'm eager to deepen my knowledge as a full stack 
            web developer and am an effective communicator. Even though I take my work seriously, I do have a good 
            sense of humour :p !</article>
        </div>

        <div className="column">
        <h4> EDUCATION </h4>
       <ul>
           <li> - University of the Western Cape || 2018-2020 || BCom Information Systems </li>
           <li> - HyperionDev || 2021 || Full Stack Web Developer Bootcamp</li>
       </ul>
            <h4> PREVIOUS WORK </h4>
       <ul>
           <li> - iStore Tygervalley Sales Consultant (2019-2020)</li>
           <li> - Ignite Events Waitress (2018)</li>
           <li> - Discovery Car Insurance Promoter (2018) </li>
           <li> - Stodels employee at kids play area </li>
       </ul>
       </div>
       <div className="column">
       <h4> PASSIONS </h4>
       <ul>
           <li> - Reading </li>
           <li> - Philosphy</li>
           <li> - Technology </li>
       </ul>
      
       </div>
     </div>

   <style jsx>{`
   h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 5rem;
    text-align: center;
   }
   article {
       margin-left: 510px;
       margin-top: 2rem;
       font-family: 'DM Serif Display', serif;
    font-size: 1rem;
   }
   h4 {
    font-family: 'DM Serif Display', serif;
    font-size: 3rem;
    text-align: center;
    padding: 1rem;
   }
   li {
    list-style: none;
   }
   img {
       padding: 1.5rem;
       float: left;
    }
    div {
        text-align: center;
        margin: 0 auto;
        padding: 2rem;
    }
      `}
      </style>
 </div>
)

export default About;