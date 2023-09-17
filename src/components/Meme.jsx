import { useState } from "react";
import memesData from "../memesData";

export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    radomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

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
          name=""
          id=""
        />
        <input
          type="text"
          className="input"
          placeholder="Bottom Text"
          name=""
          id=""
        />
        <button className="button" onClick={getImages}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className="meme-image" alt="" />
    </main>
  );
}
