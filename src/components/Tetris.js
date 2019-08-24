import React from "react";

import { createStage } from "../gameHelper";

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </aside>
      <StartButton />
    </div>
  );
};

export default Tetris;
