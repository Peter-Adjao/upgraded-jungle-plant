import { FaFacebook, FaInstagram } from "react-icons/fa";



function SocialMedia() {
    return(
        <div>
            <a href="#" aria-label="Facebook">
                  <FaFacebook size={20} />
                </a>  

                <a href="#" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a> 
        </div>

    ); 
}

export default SocialMedia;