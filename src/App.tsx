import "./App.css";
import star from "./assets/star.png";
import Card from "./Card";
import starland from "./assets/star_land.png";
import guauleria from "./assets/guauleria_landing.png";
import trail_guardians from "./assets/trail-guardians.png";
import portfolio from "./assets/portfolio_light.png";

function App() {
  return (
    <>
      <div>
        <div className="canvas-aura">
          <div className="mask"></div>
          <div className="canvas-holder">
            <canvas width={32} height={32} className="canvas" />
          </div>
        </div>
        <main className="main">
          <div className="content">
            <h1 className="header-main">
              <span className="header-span">
                <span className="holder section">
                  <span className="holder-content section">
                    Hi, I'm Viktor.
                    <span className="stars right section">
                      <figure className="figure">
                        <img
                          src={star}
                          alt="Star"
                          width={66}
                          height={66}
                          loading="lazy"
                          className="figure skip loaded"
                        />
                      </figure>
                    </span>
                  </span>
                </span>
                <span className="holder section">
                  <span className="holder-content section">
                    A Developer.{" "}
                    <span className="stars left section">
                      <figure className="figure">
                        <img
                          src={star}
                          alt="Star"
                          width={68}
                          height={68}
                          loading="lazy"
                          className="figure skip loaded"
                        />
                      </figure>
                    </span>
                  </span>
                </span>
              </span>
            </h1>
            <div className="wrapper under-header">
              <p className="under-header center">
                <span>
                  I'm passionate about crafting experiences that are engaging,
                  accessible, and user-centric.
                </span>
              </p>
            </div>
            <div className="cards cards-container">
              <div className="cards-content">
                <Card id={1} img={starland} />
                <Card id={2} img={guauleria} />
                <Card id={3} img={trail_guardians} />
                <Card id={4} img={portfolio} />
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
