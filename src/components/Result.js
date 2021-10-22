import React, { useEffect, useState } from 'react';
import { Wrapper } from '../styles/myComponents';
import { resultcontent } from '../utilities/resultcontent';
import "./Result.css";
import { Swiper, SwiperSlide } from "swiper/react"; //
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core'; 
// install Swiper modules
SwiperCore.use([EffectFade,Navigation,Pagination]); 

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
    
  }, [myCharacter, points]); // 1번만 실행

  return (
      <Wrapper>
        <h2 style={{ fontSize: 14}}>당신의 성향과 찰떡인 LOL 챔피언은...</h2>
        <h2>"{myCharacter.mbti} {myCharacter.character}"입니다!</h2>
        <img src={myCharacter.characterImage} alt={myCharacter.character} style={{borderRadius: 16}} />
        <p style={{fontSize: 14, maxWidth: 500}}>{myCharacter.description}</p>
        <h3>비슷한 유형의 다른 캐릭터 :</h3>

        {/* Swiper 슬라이더 */}
        <Swiper 
          spaceBetween={30} 
          effect={'fade'} 
          navigation={true} 
          pagination={{"clickable": true}} 
          className="mySwiper"
        >
        {/*  myCharacter.similarCharacterImages 값이 들어있을때만 실행되도록 설정  */}
          {
            myCharacter.similarCharacterImages && myCharacter.similarCharacterImages.map(
              (champs, index) => (
                <SwiperSlide key={index}>
                  <img src={champs} alt="비슷한 유형의 다른 캐릭터들" />
                </SwiperSlide>
              )
            )
          }
        </Swiper>
        <button className="btn-restart" type="button" onClick={gameEnd}>다시하기</button>
      </Wrapper>
  );
}

export default Result;