import "./App.css";
import star from "./assets/star.png";
import Card from "./Card";
import starland from "./assets/star_land.png";
import guauleria_v2 from "./assets/guauleria_landing.png";
import trail_guardians from "./assets/trail-guardians.png";
import portfolio from "./assets/portfolio_light.png";
import guauleria_v1 from "./assets/guauleria_v1.png";
import pulse_care from "./assets/health_app.png";
import little_lemon from "./assets/little_lemon_light.png";

function App() {
  return (
    <>
      <div>
        <div className="canvas-aura aura-wrapper">
          <div className="mask aura-wrapper"></div>
          <div className="canvas-holder aura-wrapper">
            <canvas width={2000} height={2000} className="canvas" />
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
                <Card
                  id={1}
                  img={starland}
                  title={"Star Land"}
                  subtitle={"Personal E-commerce Website"}
                />
                <Card
                  id={2}
                  img={guauleria_v2}
                  title={"Guauleria (v2)"}
                  subtitle={"Marketplace For Pets"}
                />
                <Card
                  id={3}
                  img={trail_guardians}
                  title={"TrailGuardians"}
                  subtitle={"Hiking Community Platform"}
                />
                <Card
                  id={4}
                  img={portfolio}
                  title={"Portfolio"}
                  subtitle={"Frontend developer portfolio"}
                />
                <Card
                  id={1}
                  img={guauleria_v1}
                  title={"Guauleria (v1)"}
                  subtitle={"Marketplace For Pets"}
                />
                <Card
                  id={2}
                  img={pulse_care}
                  title={"PulseCare"}
                  subtitle={"A Health Care App"}
                />
                <Card
                  id={3}
                  img={little_lemon}
                  title={"Little Lemon"}
                  subtitle={"Italian Restaurant"}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
