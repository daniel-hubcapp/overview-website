import logo from "./logo.svg";
import "../src/fonts/stylesheet.css"
import video from '../src/hero.mp4';
// import React, { useState } from "react"; 
// import ReactPlayer from "react-player";

function App() {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-end py-10 px-6">
        <div className="flex flex-col text-center max-w-3xl">
          <h1 className="text-6xl font-bold mb-4">Can You See It?</h1>
          <p className="text-lg">
            The Overview Effect is a cognitive shift in awareness reported by
            astronauts during spaceflight, often while viewing the Earth from
            orbit or from the lunar surface. It refers to the experience of
            seeing firsthand the reality of the Earth in space, which is
            immediately understood to be a tiny, fragile ball of life, hanging
            in the void, shielded and nourished by a paper-thin atmosphere.
          </p>
      </div>
      <div>
      {/* <ReactPlayer url="https://createpen.com/wp-content/uploads/2018/02/5dcx8.mp4" width="100%" height="100%" controls={true} /> */}
      </div>
    </div>
  );
}

export default App;
