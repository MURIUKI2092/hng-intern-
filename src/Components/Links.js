import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: "twitter",
    link: "https://twitter.com/ohallo_jackson",
    title: "Twitter",
  },
  {
    id: "btn__zuri",
    link: "https://training.zuri.team/",
    title: "Zuri Team",
  },
  {
    id: "books",
    link: "https://training.zuri.team/",
    title: "Zuri Team",
  },

  {
    id: "book__python",
    link: "https://books.zuri.team/python-for-beginners?ref_id=jacksonOhallo",
    title: "Python Books",
  },
  {
    id: "pitch",
    link: "https://books.zuri.team/",
    title: "Background  Check for Coders",
  },
  {
    id: "book__design",
    link: "https://books.zuri.team/design-rules",
    title: "Design Books",
  },
];

const Links = () => {
  return (
    <div className="App links">
      {data.map((e, index) => {
        return (
          <a key={index} id={e.id} href={e.link}>
            {e.title}
          </a>
        );
      })}
      <Link to="/contact" id="contact">
        Contact
      </Link>
    </div>
  );
};

export default Links;
