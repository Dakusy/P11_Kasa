import Collapse from "../components/modules/Collapse";
import Banner from "../components/modules/Banner";
import bannerImage from '../assets/Background2.png';

import '../css/Apropos.css';
import '../css/Collapse.css';

function Apropos() {
    const descriptions = {
        fiabilite: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        securite: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
    return (
        <div className="About">
            <Banner
                image={bannerImage}
            />
            <div className="AboutTxt">
                <Collapse title="Fiabilité">{descriptions.fiabilite}</Collapse>
                <Collapse title="Respect">{descriptions.respect}</Collapse>
                <Collapse title="Service" >{descriptions.service}</Collapse>
                <Collapse title="Sécurité" >{descriptions.securite}</Collapse>
            </div>
        </div>
    );
}

export default Apropos;