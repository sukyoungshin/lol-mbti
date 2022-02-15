import React, { useEffect, useState } from 'react';
import { resultcontent } from 'mock/resultcontent'; 
import { StyledSection, StyledArticle, StyledDivImage, StyledDivImageList, StyledDivURL, StyledInput } from './Result.style';
import { Button } from 'components';

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
  const copyEventHandler = (currentURL) => copyToClipBoard(currentURL);

  return (
      <StyledSection>
        {/* mbti 결과 */}
        <h1>✨ 당신의 성향과 찰떡인 LOL 챔피언은... ✨</h1>
        <h2>{mbti} : {character}</h2>
        <img 
          src={characterImage} 
          alt={similarCharacters}
          className="result" 
        />
        <p>{description}</p>

        <StyledArticle>
          <h3>👇 비슷한 유형의 다른 캐릭터 👇</h3>
          <StyledDivImage>
            <StyledDivImageList>
              {/*  myCharacter.similarCharacterImages 값이 들어있을때만 실행되도록 설정  */}
              { similarCharacterImages && similarCharacterImages.map((champ, index) => (
                  <img 
                    key={index}
                    src={champ} 
                    alt="비슷한 유형의 다른 캐릭터"
                  />
              ))}
            </StyledDivImageList>
          </StyledDivImage>
        </StyledArticle> 

        <article>
          <h3>Copy URL</h3>
          <StyledDivURL>
            <StyledInput 
              type="text" 
              value={currentURL} 
              readOnly
            />
            <span>🔗</span>
            <Button onClick={copyEventHandler} copy>
              { copySuccess ? 'Copied!' : 'Url복사' }
            </Button>
          </StyledDivURL>
        </article>

        <Button onClick={gameEnd}>
          다시하기
        </Button>
      </StyledSection>
  );
}

export default Result;