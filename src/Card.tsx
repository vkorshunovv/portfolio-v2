import "./App.css";
import star from "./assets/star.png";

const Card = ({ id, img }: { id: number; img: string }) => {
  return (
    <div className={`card-container${id}`}>
      <a href="#" className="card card-wrapper">
        <div className="card-flourish card-wrapper">
          <img
            src={star}
            alt="Star"
            style={{ top: "-80px", left: "70px" }}
            className="card-wrapper"
          />
        </div>
        <div className="card-wrap card-wrapper">
          <div className="info card-wrapper">
            <span className="card-wrapper">Help Scout</span>
            <h2>AI</h2>
          </div>
          <div className="inner card-wrapper">
            <div className="image-holder docs image-wrapper">
              <figure className="figure">
                <img
                  src={img}
                  alt="Star Land web site"
                  width={810}
                  height={422}
                  loading="lazy"
                  className="figure skip loaded"
                  style={{ borderRadius: "15px" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
