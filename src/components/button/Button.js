import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'

export default function Button(){
    return(
        <button className='card-email-btn'>
                <FontAwesomeIcon icon={faEnvelope} />
                Email
        </button>
    )
}