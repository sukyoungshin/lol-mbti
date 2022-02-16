import React from 'react';
import { useCopyURL, useCountMbti } from './hooks';
import { StyledSection, StyledArticle, StyledDivImage, StyledDivImageList, StyledDivURL, StyledInput, StyledImg } from './Result.style';
import { Button } from 'components';

const Result = ({ points, gameEnd }) => {

  /* 클립보드로 링크 복사하기 */
  const { currentURL, copySuccess, copyEventHandler } = useCopyURL();
  
  /* Character 점수합산 */
  const { myCharacter } = useCountMbti({ points });
  const { mbti, character, characterImage, description, similarCharacters, similarCharacterImages } = myCharacter;

  return (
      <StyledSection>
        <h1>
          ✨ 당신의 성향과 찰떡인 LOL 챔피언은... ✨
        </h1>
        <h2>
          {mbti} : {character}
        </h2>
        <StyledImg 
          src={characterImage} 
          alt={similarCharacters}
        />
        <p>
          {description}
        </p>

        <StyledArticle>
          <h3>
            👇 비슷한 유형의 다른 캐릭터 👇
          </h3>
          <StyledDivImage>
            <StyledDivImageList>
              { similarCharacterImages && similarCharacterImages.map((champ, index) => (
                  <StyledImg 
                    key={index}
                    src={champ} 
                    alt="비슷한 유형의 다른 캐릭터"
                  />
              ))}
            </StyledDivImageList>
          </StyledDivImage>
        </StyledArticle> 

        <article>
          <h3>
            Copy URL
          </h3>
          <StyledDivURL>
            <StyledInput 
              type="text" 
              value={currentURL} 
              readOnly
            />
            <span>
              🔗
            </span>
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