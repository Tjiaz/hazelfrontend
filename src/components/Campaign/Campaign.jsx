import React from "react";
import "./campaign.scss";
import Campaigncard from "./Campaigncard";
import teamData from "../../data";
import Footers from "../Footers/Footers";

const Campaign = () => {
  return (
    <div className="campaign">
      <main>
        <section className="main-title">
          <h1>People's Helped 2023</h1>
          <p>Hazel Charity Foundation 2023</p>
        </section>
        <section className="people-helped">
          {teamData.map((team) => (
            <Campaigncard
              key={team.id}
              id={team.id}
              imgSrc={team.imgSrc}
              title={team.title}
              description={team.description}
              buttonText={team.buttonText}
              link={team.link}
            />
          ))}
        </section>
      </main>
      <Footers />
    </div>
  );
};

export default Campaign;
