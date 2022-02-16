import { useState, useEffect } from 'react';
import { resultcontent } from 'mock/resultcontent';
import { MbtiType } from 'constants/MbtiType';

export const useCopyURL = () => {
  const currentURL = window.location.href;   // 현재 url 받아오기
  // eslint-disable-next-line
  const [ copySuccess, setCopySuccess ] = useState(null); // 복사완료되면 보여줄 문구
  const copyToClipBoard = async() => {
    try {
      await navigator.clipboard.writeText(currentURL);
      setCopySuccess(currentURL);
    } catch (err) {
      setCopySuccess(err);
    }
  };
  const copyEventHandler = (currentURL) => copyToClipBoard(currentURL);

  return { currentURL, copyEventHandler, copySuccess };
};

const { E, S, T, J, I, N , F, P } = MbtiType;
export const useCountMbti = ({ points }) => {
  const [ myCharacter, setCharacter ] = useState([]);
  useEffect(() => {
    const {e, s, t, j} = points;

    let result = '';
    result += e > 0 ? E : I;
    result += s > 0 ? S : N;
    result += t > 0 ? T : F;
    result += j > 0 ? J : P;

    const MBTI = resultcontent.filter(content => content.mbti === result.toUpperCase());
    setCharacter(MBTI[0]);
  }, [myCharacter, points]); 

  return { myCharacter };
};