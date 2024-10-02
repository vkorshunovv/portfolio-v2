import "../App.css";
import star from "../assets/star.png";

interface CardProps {
  img: string;
  title: string;
  subtitle: string;
}

const Card = ({ img, title, subtitle }: CardProps) => {
  return (
    <div className="card card-wrapper">
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
          <span className="card-wrapper">{subtitle}</span>
          <h2>{title}</h2>
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
                style={{ borderRadius: "1rem" }}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
