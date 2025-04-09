import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

const Quote = ({ text, author, textColor, fetchNextQuote }) => (
  <div className="quote">
    <p style={{ color: textColor, fontSize: "1.6em", fontWeight: "500" }}>
      <FontAwesomeIcon
        icon={faQuoteLeft}
        style={{ color: textColor, fontSize: "1em"}}
      /> {text}</p>
    <p style={{ color: textColor, textAlign: "right" }}>- {author}</p>
    <div className="buttons">
      <div className="social-icons">
      <a
        target="_blank"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
          '"' + text + '" ' + author
        )}`}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ color: 'white', backgroundColor:textColor,  width:'2.5em', height:'2.5em', padding:'10px', fontSize: "0.4em", borderRadius:'4px', cursor: "pointer" }}
        />
      </a>
      <a
        target="_blank"
        href={
          "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
          encodeURIComponent(author) +
          "&content=" +
          encodeURIComponent(text) +
          "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
        }
      >
        <FontAwesomeIcon
          icon={faTumblr}
          style={{ color: 'white', backgroundColor:textColor, width:'2.5em', height:'2.5em', padding:'10px', fontSize: "0.4em", borderRadius:'4px', cursor: "pointer", marginLeft:'5px'}}
        />
      </a>
      </div>
      <button
        onClick={fetchNextQuote}
        style={{
          bottom: "10px",
          left: "230px",
          backgroundColor: textColor,
          color: "white",
        }}
      >
        New Quote
      </button>
    </div>
  </div>
);

export default Quote;
