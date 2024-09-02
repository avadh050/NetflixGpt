import React, { useRef } from "react";
import lang from "../utils/languagecontans";
import { useSelector } from "react-redux";
import openai from "../utils/openAi";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langkey = useSelector((store) => store?.config?.lang);

  const handleGptSearchClick = async () => {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: searchText.current.value }],
      });
      console.log(completion.choices);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-black h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg')",
      }}
    >
      <form
        className="py-4 px-6 w-1/2 bg-black rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-2 w-3/4  text-black rounded-sm"
          type="text"
          placeholder={lang[langkey].placeholder}
        />
        <button
          onClick={handleGptSearchClick}
          className=" px-4 py-2 ml-2 bg-red-500 rounded-sm "
        >
          {lang[langkey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
