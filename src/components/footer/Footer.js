import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <footer>
        <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
        <FontAwesomeIcon className='footer-icon' icon={faFacebook} />
        <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
        <FontAwesomeIcon className='footer-icon' icon={faGithub} />
        
    </footer>
    )
}