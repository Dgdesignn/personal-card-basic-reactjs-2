import './card.css'
import cardPhoto from '../img/dgdesign.jpg'
import Content from './content/Content';
import Footer from './footer/Footer'


export default function Card(){
    return(
        <div className='card'>

            <figure className='card-phto'>
                <img src={cardPhoto}/>
            </figure>
            <Content/>
            <Footer/>
        </div>
    )
}