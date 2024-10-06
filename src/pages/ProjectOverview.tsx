import "../App.css";
import { useParams } from "react-router-dom";
import { projectsData } from "../constants/data";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useStaggeredLoad } from "../hooks/useStaggeredLoad";

const ProjectOverview = () => {
  const { isHeaderLoaded, isSubHeaderLoaded, isCardsLoaded } =
    useStaggeredLoad();

  const { slug } = useParams();

  const project = projectsData.find((proj) => proj.slug === slug);

  return (
    <div>
      <div id="canvas-aura" className="canvas-aura aura-wrapper">
        <div className="mask aura-wrapper"></div>
        <div className="canvas-holder aura-wrapper">
          <canvas width={2000} height={2000} className="canvas" />
        </div>
      </div>
      <main className="main">
        <h1 className={`${isHeaderLoaded && "h-loaded"} header-main`}>
          <span className="top-title">
            <span className="holder">{project?.title}.</span>
          </span>
        </h1>
        <div id="sub-header">
          <div className="grid sub-header">
            <div
              className={`${
                isSubHeaderLoaded && "sub-h-loaded"
              } item sub-header loaded`}
            >
              <div className="overview sub-header-wrap">
                <div className="block sub-header-wrap">
                  <div className="title sub-header-wrap">Timeline</div>
                  <div className="inner sub-header-wrap">{project?.year}</div>
                </div>
                <div className="block sub-header-wrap">
                  <div className="title sub-header-wrap">Source</div>
                  <div className="inner sub-header-wrap">
                    <Link to={project!.github} className="link" target="_blank">
                      GitHub
                    </Link>
                  </div>
                </div>
                <div className="block sub-header-wrap">
                  <div className="title sub-header-wrap">Tools</div>
                  <div className="inner sub-header-wrap">{project?.tools}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="card-holder">
          <div className={`${isCardsLoaded && "c-loaded"} hero hero-wrap`}>
            <div className="inner hero-wrap image">
              <div className="hero-image-holder hero-wrap image">
                <figure className="figure skeleton">
                  <img
                    src={project?.img}
                    alt={project?.title}
                    width={1200}
                    height={650}
                    loading="lazy"
                    className="figure skip fullwidth loaded"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div id="overview">
          <div className="grid sub-header lg">
            <div className="item sub-header">
              <h2>Overview</h2>
              <p>{project?.overview.first}</p>
              <p>{project?.overview.second}</p>
            </div>
          </div>
        </div>
        <div className="cta navigate">
          <Link to={project!.url} target="_blank" className="button navigate">
            <span className="navigate">Live Project</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectOverview;
