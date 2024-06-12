import React from "react";
import { Link, useParams } from "react-router-dom";
import { campaignData } from "../../data2";
import "./campaignlearnmore.scss";
import Footers from "../Footers/Footers";
const CampaignLearnMore = () => {
  const { id } = useParams();

  const campaign = campaignData.find((c) => c.id === parseInt(id)); // Find the campaign by id
  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  return (
    <>
      <div className="campaign-details">
        <header className="header">
          <div className="breadcrumbs">
            <Link to="/campaign">All Posts</Link> &nbsp; / &nbsp;{" "}
            <Link to="/">Train of Thought</Link>
          </div>
          <div className="post-info">
            <p>Jun 16, 2023 &bull; 6 min read</p>
            <h1>{campaign.title}</h1>
            <p className="updated">Updated: Feb 2</p>
          </div>
        </header>
        <div className="content">
          <div className="image-container">
            <img src={campaign.imgSrc} alt={campaign.title} />
          </div>
          <div
            className="text-content"
            dangerouslySetInnerHTML={{ __html: campaign.detail }}
          ></div>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default CampaignLearnMore;
