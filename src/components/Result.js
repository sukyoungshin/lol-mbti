import React, { useEffect, useState } from 'react';
// RESULT data
import { resultcontent } from '../utilities/resultcontent'; 
// STYLED-COMPONENTS
import { RSectionWrapper, RArticle, ImageWrapper, ImageList, URLWrapper, URLshareWrapper, MobileButton } from './common/Styled';

const Result = ({points, gameEnd}) => {
  // MBTI유형
  const [ myCharacter, setCharacter ] = useState([]);
  useEffect(() => {
    const {e, s, t, j} = points;

    let result = '';
    result += e > 0 ? "E" : "I";
    result += s > 0 ? "S" : "N";
    result += t > 0 ? "T" : "F";
    result += j > 0 ? "J" : "P";

    const MBTI = resultcontent.filter(content => content.mbti === result);
    setCharacter(MBTI[0]);

  }, [myCharacter, points]); 
  const { mbti, character, characterImage, description, similarCharacters, similarCharacterImages } = myCharacter; // destructuring

  // 클립보드로 링크 복사하기
  const currentURL = window.location.href;   // 현재 url 받아오기
  const [ copySuccess, setCopySuccess ] = useState(null); // 복사완료되면 보여줄 문구
  const copyToClipBoard = async() => {
    try {
      await navigator.clipboard.writeText(`${currentURL}`);
      setCopySuccess(currentURL);
    } catch (err) {
      setCopySuccess(err);
    }
  };

  return (
      <RSectionWrapper>
        {/* mbti 결과 */}
        <h1>✨ 당신의 성향과 찰떡인 LOL 챔피언은... ✨</h1>
        <h2>{mbti} : {character}</h2>
        <img 
          src={characterImage} 
          alt={similarCharacters}
          className="result" 
        />
        <p>{description}</p>

        {/* 비슷한 유형의 다른 캐릭터 추천 */}
        <RArticle>
          <h3>👇 비슷한 유형의 다른 캐릭터 👇</h3>
          <ImageWrapper>
            <ImageList>
              {/*  myCharacter.similarCharacterImages 값이 들어있을때만 실행되도록 설정  */}
              { similarCharacterImages && similarCharacterImages.map((champ, index) => (
                  <img 
                    key={index}
                    src={champ} 
                    alt="비슷한 유형의 다른 캐릭터"
                  />
              ))}
            </ImageList>
          </ImageWrapper>
        </RArticle> 

        {/* 링크 공유하기 */}
        <URLWrapper>
          <h3>Copy URL</h3>
          <URLshareWrapper>
            <input 
              type="text" 
              name="urlshare" 
              value={currentURL} 
              readOnly
            />
            <span>🔗</span>
            <button 
              type="button"
              className="btn-copy"
              onClick={(currentURL) => copyToClipBoard(currentURL)}
            >
            { copySuccess ? 'Copied!' : 'Url복사' }
            </button>
          </URLshareWrapper>
        </URLWrapper>

        {/* mbti 처음부터 다시하기 */}
        <MobileButton 
          type="button" 
          onClick={gameEnd}
        >다시하기</MobileButton>

      </RSectionWrapper>
  );
}

export default Result;