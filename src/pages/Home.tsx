import { useNavigate } from "react-router-dom";
import star from "../assets/star.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { projectsData } from "../constants/data";
import { useEffect, useState } from "react";
import { useStaggeredLoad } from "../hooks/useStaggeredLoad";

const Home = () => {
  const { isStarsLoaded, isHeaderLoaded, isSubHeaderLoaded, isCardsLoaded } =
    useStaggeredLoad();

  const navigate = useNavigate();

  function handleClick(slug: string) {
    navigate(`/projects/${slug}`);
  }
  return (
    <>
      <div>
        <div id="canvas-aura" className="canvas-aura aura-wrapper">
          <div className="mask aura-wrapper"></div>
          <div className="canvas-holder aura-wrapper">
            <canvas width={2000} height={2000} className="canvas" />
          </div>
        </div>
        <main className="main">
          <div className="content">
            <h1 className={`${isHeaderLoaded && "h-loaded"} header-main`}>
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
                          className={`${isStarsLoaded && "skip loaded"} figure`}
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
                          className={`${isStarsLoaded && "skip loaded"} figure`}
                        />
                      </figure>
                    </span>
                  </span>
                </span>
              </span>
            </h1>
            <div
              className={`${
                isSubHeaderLoaded && "sub-h-loaded"
              } wrapper under-header`}
            >
              <p className="under-header center">
                <span>
                  I'm passionate about crafting experiences that are engaging,
                  accessible, and user-centric.
                </span>
              </p>
            </div>
            <div className="cards cards-container">
              <div className={`${isCardsLoaded && "c-loaded"} cards-content`}>
                {projectsData.map((project) => (
                  <div
                    id={`card-container${project.id}`}
                    key={project.id}
                    onClick={() => handleClick(project.slug)}
                  >
                    <Card
                      img={project.img}
                      title={project.title}
                      subtitle={project.subtitle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
