import { useState, useCallback } from "react";

import { randomTetromino } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelper";

export const usePlayer = () => {
  //함수 컴포넌트는 this.state사용이 안되기 때문에 대신 useState Hook을 직접 컴포넌트에 호출한다.
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
