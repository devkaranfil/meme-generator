import { useState } from "react";
import memesData from "../memesData";

export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    radomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  console.log(meme)


  function getImages() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form" action="">
        <input
          type="text"
          className="input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="button" onClick={getImages}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  );
}
