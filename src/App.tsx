import "./App.css";
import star from "./assets/star.png";

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
                          className="star skip loaded"
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
                          className="star skip loaded"
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
            <div className="cards content-main"></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
