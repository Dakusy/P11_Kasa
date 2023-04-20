import { useParams } from "react-router-dom";
import data from "../assets/data.json";
import Banner from "../components/modules/Banner";
import Collapse from "../components/modules/Collapse";
import Tags from "../components/modules/Tags";
import Slideshow from "../components/modules/Slideshow";

import '../css/Logement.css';

function Logement() {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);
    const [firstName, lastName] = logement.host.name.split(' ');

    return (
        <div className="House">
            <div className="SlideShow">
                <Slideshow pictures={logement.pictures}/>
            </div>
            <div className="content">
                <div className="top">
                    <div className="title">
                        <h1>{logement.title}</h1>
                        <h3>{logement.location}</h3>
                        <Tags tags={logement.tags} />
                    </div>
                    
                    <div className="lessor_rates">
                    </div>
                </div>

                <div className="host">
                    <div className="host-name">
                    <h4 className= "host-first-name">{firstName}</h4>
                    <h4 className="host-last-name">{lastName}</h4>
                    </div>

                    <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
                </div>

                <div className="texts">
                    <Collapse title="Description">{logement.description}</Collapse>
                    <Collapse title="Equipements">{logement.equipments} </Collapse>
                </div>
            </div>
        </div>
    );
}

export default Logement;