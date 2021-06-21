//contact page
//email, cell nr etc
//include static image here
import Link from 'next/link';
import Card from 'react-bootstrap/Card'


const Contact = () => (
  <div>
    <h2> Connect With Me </h2>
    <span> amy.marais99@gmail.com </span>
    <span> 073 318 8140</span>

    <style jsx>{`
    h2 {
      font-family: 'DM Serif Display', serif;
      font-size: 7rem;
      text-align: center;
      padding-top: 8rem;
      padding-bottom: 2rem;
     }
     span {
      font-family: 'DM Serif Display', serif;
      font-size: 1.5rem;
      text-align: center;
      margin: 10rem 11rem;
      padding: 6rem;
     }
    `}</style>
  </div>
)

export default Contact;