import { useState } from "react";

import { randomTetromino } from "../tetrominos";

export const usePlayer = () => {
  //함수 컴포넌트는 this.state사용이 안되기 때문에 대신 useState Hook을 직접 컴포넌트에 호출한다.
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  });
  return [player];

  // 동일
  // const playerState = useState();
  // const player = playerState[0]
  // const setPlayer = playerState[1]
};
