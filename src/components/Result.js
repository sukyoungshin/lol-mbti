import React, { useEffect,        useState } from 'react';
// RESULT data
import { resultcontent } from '../utilities/resultcontent'; 
// STYLE
import styled from 'styled-components'; 
// COMPONENT
import { MobileButton } from './Home';

// STYLE
const RSectionWrapper = styled.section`
  font-size: 0;

  h1, h2, h3, p {
    text-align: center;
    color: var(--color-black);
  }
  h1 {
    margin: 0 0 16px 0;
    font-size: var(--font-size-medium);
  }
  h2 {
    font-size: var(--font-size-heading);
  }
  h3 {
    margin: 0 0 8px 0;
    font-size: var(--font-size-main);
  }
  p {
    font-size: var(--font-size-medium);
  }

  img.result{
    margin: 8px 0;
    width: 100%;
  }

`;
const RArticle = styled.article`
  margin: 16px 0;
  padding: 16px 0;
  width: 100%;

  border-top: 1px solid var(--color-black);  
  border-bottom: 1px solid var(--color-black);  
`;
const URLshareWrapper = styled.div`
  margin: 0 0 8px 0;
  width: 100%;

  display: inline-flex;
  flex-direction: row;

  position: relative;

  input[type="text"] {
    flex: 1;
    padding-left: 32px;
    background-color: var(--color-white);
    border-radius: 8px 0 0 8px;
  }
  input[type="text"] + span {
    display: inline-block;
    width: 24px;
    height: 24px;

    position: absolute;
    top: 5px;
    left: 6px;

    font-size: var(--font-size-medium);
    opacity: 0.7;
  }

  input[type="text"], 
  button[type="button"] {
    border: none;
    outline: none;  

    height: 32px;
  }
  button[type="button"] {
    padding: 0px 16px;
    color: var(--color-white);
    font-size: var(--font-size-medium);
    cursor: copy;

    transition: all 0.4s;
    background-color: rgba(0,0,0,0.1);
    border-radius: 0 8px 8px 0;
    
    &:hover, &:focus, &:active {
      background-color: rgba(0,0,0,0.4);
    }
  }

`;
const ImageWrapper = styled.div`
  overflow-x: auto;
`;
const ImageList = styled.div`
  display: inline-flex;
  flex-direction: row;
  grid-gap: 8px;
  gap: 8px;

  img {
    width: 120px;
    height: 140px;
  }
`;

// COMPONENT
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
              { similarCharacterImages && similarCharacterImages.map(
                (champ, index) => (
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

        {/* mbti 처음부터 다시하기 */}
        <MobileButton 
          type="button" 
          onClick={gameEnd}
          className="btn-restart" 
        >다시하기</MobileButton>

      </RSectionWrapper>
  );
}

export default Result;