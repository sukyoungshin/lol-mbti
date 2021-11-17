import React, { useEffect,        useState } from 'react';
import { resultcontent } from '../utilities/resultcontent';
import "./Result.css";

function Result({points, gameEnd}) {
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

  console.log(navigator.clipboard);

  return (
      <div className="mbti-entire-result-wrapper">

        {/* mbti 결과 */}
        <h2>✨ 당신의 성향과 찰떡인 LOL 챔피언은... ✨</h2>
        <div className="mbti-result-wrapper">
          <h2>{myCharacter.mbti} : {myCharacter.character}</h2>
          <img 
            src={myCharacter.characterImage} 
            alt={myCharacter.character} 
          />
          <p>{myCharacter.description}</p>
        </div>

        {/* 비슷한 유형의 다른 캐릭터 추천 */}
        <div className="mbti-entire-recommend-wrapper">
          <h3>👇 비슷한 유형의 다른 캐릭터 👇</h3>
          <div className="mbti-recommend-wrapper">
            {/*  myCharacter.similarCharacterImages 값이 들어있을때만 실행되도록 설정  */}
              {
                myCharacter.similarCharacterImages && myCharacter.similarCharacterImages.map(
                  (champs, index) => (
                    <div key={index} className="mbti-recommend">
                      <img 
                        src={champs} 
                        alt="비슷한 유형의 다른 캐릭터들"
                      />
                    </div>
                  )
                )
              }
          </div>
        </div> 
        {/* 링크 공유하기 */}
        <div className="btn-share-wrapper">
          <input 
            type="text" 
            name="urlshare" 
            value={currentURL} 
            readOnly
          />
          <button 
            type="button"
            className="btn-copy"
            onClick={(currentURL) => copyToClipBoard(currentURL)}
          >
          { copySuccess ? 'Copied!' : 'Url복사' }
          </button>
        </div>
        {/* mbti 처음부터 다시하기 */}
        <div className="btn-restart-wrapper">
          <button 
            type="button" 
            onClick={gameEnd}
            className="btn-restart" 
          >다시하기</button>
        </div>

      </div>
  );
}

export default Result;