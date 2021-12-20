import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="container">
        {data.map((d) => (
          <div className="item">
            {/* <a href={d.link} target="_blank"> */}
              <img
                src={d.img}
                alt=""
              />
            {/* </a> */}
            <h3>     
              <div className="webLink">       
              <a href={d.link} target="_blank">
              {d.title}
              </a>
              </div>
              {
              d.github &&
                <div className="gitLink">
                <a href={d.github} target="_blank">
                GitHub
                </a>
                </div>
              }
            </h3>
            {/* {
              d.github &&
              <h4>            
                <a href={d.github} target="_blank">
                GitHub
                </a>
              </h4>
            } */}
          </div>
        ))}
      </div>
    </div>
  );
}