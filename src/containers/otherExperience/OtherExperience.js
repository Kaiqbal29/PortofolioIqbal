import React, {useContext} from "react";
import "./OtherExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {OtherExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function OtherExperience() {
  const {isDark} = useContext(StyleContext);
  if (OtherExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="Experience">
            <div>
              <h1 className="experience-heading">Other Experiences</h1>
              <div className="experience-cards-div">
                {OtherExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
