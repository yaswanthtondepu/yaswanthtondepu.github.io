import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import styled from "styled-components";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                  />

                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <>
        <section id="portfolio">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
            <ProjectDetailsModal
              show={this.state.detailsModalShow}
              onHide={detailsModalClose}
              data={this.state.deps}
            />
          </div>
          <Btn>
            <button type="button"
              onClick={() => window.open('https://yaswanth-projects.netlify.app/', '_blank').focus()}>
              View All Projects
            </button>
          </Btn>
        </section>

      </>
    );
  }
}

export default Projects;

const Btn = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  button {
    background-color: #212529;
    padding: 1rem;
    border-radius: 5px;
    color: #fff !important;
    font-size: 1.4rem;
    transition: all 0.5s ease-in;
    outline: none;
  }
  button:hover {
    transform:scale(1.15,1.15);
    -webkit-transform:scale(1.15,1.15);
    -moz-transform:scale(1.15,1.15);
  }
`;