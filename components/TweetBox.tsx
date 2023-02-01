import {
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import React, { useState, useRef, MouseEvent } from "react";

const TweetBox = () => {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const addImageToTweet = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    if (!imageInputRef.current?.value) return;

    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";
    setImageUrlBoxIsOpen(false);
  };

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 rounded-full object-cover mt-4"
        src="assets/images/amal-malik.jpg"
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex space-x-2 text-twitter flex-1">
              <img src="assets/images/photograph.svg"
                onClick={() => setImageUrlBoxIsOpen((current) => !current)}
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <img
                src="assets/images/gif.svg"
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <img
                src="assets/images/poll.svg"
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <img src="assets/images/emojihappy.svg" className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <img
                src="assets/images/calendar.svg"
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <img src="assets/images/locationmarker.svg" className="h-5 w-5" />
            </div>
            <button
              type="submit"
              disabled={!input}
              className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          {imageUrlBoxIsOpen && (
            <div className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              <input
                type="text"
                ref={imageInputRef}
                placeholder="Enter Image Url"
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
              />
              <button
                onClick={addImageToTweet}
                type="submit"
                className="font-bold text-white"
              >
                Add image
              </button>
            </div>
          )}
          {image && (
            <img
              src={image}
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
              alt=""
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
