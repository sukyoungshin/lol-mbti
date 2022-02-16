import { useState } from 'react';
import { MbtiType } from 'constants/MbtiType';

const { E, S, T, J } = MbtiType;
export const useCountMbti = () => {
  // 답변을 끝난 문항 수
  const [ count, setCount ] = useState(0); 

  // 각 유형별 점수
  const [ e, setE ] = useState(0); 
  const [ s, setS ] = useState(0);
  const [ t, setT ] = useState(0);
  const [ j, setJ ] = useState(0);

  // 점수합산
  const selectAnswer = (btnNum, type) => {
    if (btnNum === 1) {
      if (type === E) { setE(e + 1) }
      if (type === S) { setS(s + 1) }
      if (type === T) { setT(t + 1) }
      if (type === J) { setJ(j + 1) }
    } else {
      if (type === E) { setE(e - 1) }
      if (type === S) { setS(s - 1) }
      if (type === T) { setT(t - 1) }
      if (type === J) { setJ(j - 1) }
    };
    setCount(count + 1);
  };

  return {count, e, s, t, j, selectAnswer};
};