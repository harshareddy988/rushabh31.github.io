import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from '../../containers/certifications/Certifications';
import CompetitiveSites from '../../components/competitiveSites/CompetitiveSites';
import {competitiveSites}  from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Particles from 'react-particles-js';

class Education extends Component {
  render() {
    return (
      <div className="education-main">
        <Header />
        <div className="basic-education">
          <Fade bottom duration={1000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img src={require("../../assests/images/education.svg")} alt="" />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text">Education</h1>


<h3 style={{fontSize: "30px" ,fontFamily: "Google Sans Regular", textAlign: "center", marginBottom: "10px"}}> Basic Education & Skills </h3>
                <h3 className="heading-sub-text">

                  <text style={{fontSize:'80px',position:'relative',right:'-10px',bottom:'-35px' }}> &#8220; </text>

                  Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations/>
          <Certifications />

        </div>
        <Footer />

      </div>
    );
  }
}

export default Education;
