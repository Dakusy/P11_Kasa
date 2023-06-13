import { useParams, Navigate } from "react-router-dom";
import data from "../assets/data.json";
import Collapse from "../components/modules/Collapse";
import Tags from "../components/modules/Tags";
import Slideshow from "../components/modules/Slideshow";
import Rating from "../components/modules/Raiting";


import '../css/Logement.css';
import '../css/Slideshow.css';

function Logement() {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);


    if (!logement) {
        return <Navigate to="error" />;
      }

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
                        <Tags tagValue={logement.tags} />
                    </div>
                    
                    <div className="lessor_rates">
                    </div>
                </div>

                <div className="host">
                    <div className="host-info">
                    <h4 className= "host-first-name">{firstName}</h4>
                    <h4 className="host-last-name">{lastName}</h4>
                    <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <Rating data={logement} />
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