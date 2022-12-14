import { useParams } from "react-router-dom";
import homes from "././../datas/DataHouse.json";
import Tag from "../components/tag";
import Rating from "../components/stars";
import AccordionLocation from "../components/layout/AccordionLocation";
import "../styles/housing.css";
import User from "../components/user";
import Slideshow from "../components/layout/Slideshow";

const InfoHome = () => {
  const { homeId } = useParams();
  const home = homes.find((home) => home.id === homeId);
  const { title, location, rating, host, equipments, description, pictures } =
    home;
  return (
    <div className="body_location_page">
      <div className="slideshow_location">
        <Slideshow img={pictures} />
      </div>

      <div className="presentation">
        <div className="home_header">
          <div>
            <h2 className="title_locationpage">{title}</h2>
            <p className="subtitle_locationpage">{location}</p>
          </div>

          <div className="singleproduct__tags">
            {home.tags.map((tag, index) => (
              <Tag key={index} getTag={tag} />
            ))}
          </div>
        </div>

        <div className="location_subheader">
          <div>
            <User name={host.name} picture={host.picture} />
          </div>

          <div className="main-container-stars">
            <Rating rating={rating} key={home.id} />
          </div>
        </div>
      </div>

      <div className="main-container-accordion">
        <div className="accordion-container-left">
          <AccordionLocation title="Description" content={description} />
        </div>
        <div className="accordion-container-right">
          <AccordionLocation
            title="Equipement"
            content={
              <ul>
                {equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};
export default InfoHome;
