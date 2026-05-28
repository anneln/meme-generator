import { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: allMemes[Math.floor(Math.random() * allMemes.length)].url,
    }));
  }

  function handleChange(event) {
    const { name, value, type } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <div className="input-section">
          <input
            type="text"
            className="form-title"
            placeholder="shut up"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            type="text"
            className="form-text"
            placeholder="and take my money"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button onClick={getMemeImage} className="form-btn">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} className="meme-img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
