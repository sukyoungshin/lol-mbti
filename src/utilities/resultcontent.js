/* 
객체 하나당 키
type: 16개의 성격유형 중 하나 (예: INTP)
description: 해당 성격에 대한 설명 (창작하기)

기타 다른 키는 본인이 만들고 싶은 앱에 맞게 만들기 !
*/
/* 
REFERENCES
챔피언 mbti 분석 : https://www.reddit.com/r/leagueoflegends/comments/5nxj7f/lol_champions_and_their_mbti/

*/

export const resultcontent = [
  {
    id: 1,
    mbti: 'ISTJ',
    character: '아칼리',
    characterImage: '/assets/akali.jpg',
    description: 'ISTJ 유형은 한번 시작한 일은 끝까지 해내는 뚝심있는 사람들이죠. 기회를 엿보며 숨죽이다가 멋지게 해결하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['바드', '이블린', '이렐리아', '말파이트', '마오카이', '나서스', '노틸러스', '뽀삐', '라이즈', '탈론', '쓰레쉬', '우디르', '바루스', '베인', '신짜오', '야스오'],
    similarCharacterImages: ['/assets/bard.jpg', '/assets/evelynn.jpg', '/assets/irelia.jpg', '/assets/malaphite.jpg', '/assets/maokai.jpg', '/assets/nasus.jpg', '/assets/nautilus.jpg', '/assets/poppy.jpg', '/assets/ryze.jpg', '/assets/talon.jpg','/assets/thresh.jpg', '/assets/udyr.jpg', '/assets/varus.jpg', '/assets/vayne.jpg', '/assets/yasuo.jpg'],
  },
  {
    id: 2,
    mbti: 'ISFJ',
    character: '브라움',
    characterImage: '/assets/braum.jpg',
    description: 'ISFJ 유형은 성실하고 온화하며 협조를 잘하는 사람들이죠. 팀원들의 의견에 귀 기울여듣고, 승리의 기회를 만들어내는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['갈리오', '잔나', '루시안', '소라카', '탈리야', '요릭'],
    similarCharacterImages: ['/assets/galio.jpg', '/assets/janna.jpg', '/assets/lucian.jpg', '/assets/soraka.jpg', '/assets/talialiyah.jpg', '/assets/yorick.jpg'],
  },
  {
    id: 3,
    mbti: 'INFJ',
    character: '애니비아',
    characterImage: '/assets/anivia.jpg',
    description: 'INFJ 유형은 사람에 관한 뛰어난 통찰력을 가진 사람이죠. 팀원들의 의견을 듣고 상황을 멋지게 정리하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['다이애나', '카르마', '카서스', '킨드레드', '타릭', '자크', '질리언'],
    similarCharacterImages: ['/assets/diana.jpg', '/assets/karma.jpg', '/assets/karthus.jpg', '/assets/kindred.jpg'],
  },
  {
    id: 4,
    mbti: 'INTJ',
    character: '아우렐리온 솔',
    characterImage: '/assets/aurelionsol.jpg',
    description: 'INTJ 유형은 전체를 조합해 비전을 제시하는 사람이죠. 나무보다 숲을 보고 나아가는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['르블랑', '말자하', '마스터 이', '스웨인', '빅토르', '볼리베어', '제라스'],
    similarCharacterImages: ['/assets/leblanc.jpg', '/assets/malzahar.jpg', '/assets/masteryi.jpg', '/assets/swain.jpg', '/assets/viktor.jpg', '/assets/volibear_0.jpg', '/assets/xeratth.jpg'],
  },
  {
    id: 5,
    mbti: 'ISTP',
    character: '케이틀린',
    characterImage: '/assets/caitlyn.jpg',
    description: 'ISTP 유형은 논리적이며 뛰어난 상황 적응력을 갖춘 사람이죠. 필요한 순간에 센스있게 상황을 해결하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['문도박사', '그레이브즈', '카직스', '리 신', '람머스', '쉔', '티모'],
    similarCharacterImages: ['/assets/drmundo.jpg', '/assets/graves.jpg', '/assets/khazix.jpg', '/assets/leesin.jpg', '/assets/rammus.jpg', '/assets/shen.jpg', '/assets/teemo.jpg'],
  },
  {
    id: 6,
    mbti: 'ISFP',
    character: '진',
    characterImage: '/assets/jhin.jpg',
    description: 'ISFP 유형은 따뜻한 감성을 가진 겸손한 사람이죠. 팀원들이 한타하러 가자고 제안하면 합류하여 기회를 만들어내는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['니달리', '소나'],
    similarCharacterImages: ['/assets/nidalee.jpg', '/assets/sona.jpg'],
  },
  {
    id: 7,
    mbti: 'INFP',
    character: '아무무',
    characterImage: '/assets/amumu.jpg',
    description: 'INFP 유형은 이상적인 세상을 만들어가는 사람이죠. 팀의 승리를 그리며 게임에 임하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['룰루'],
    similarCharacterImages: ['/assets/lulu.jpg'],
  },
  {
    id: 8,
    mbti: 'INTP',
    character: '오리아나',
    characterImage: '/assets/orianna.jpg',
    description: 'INTP 유형은 비평적인 관점을 가진 뛰어난 전략가들이죠. 묵묵히 제 할 일을 하며 기회를 만들어내는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['하이머딩거', '카사딘', '신지드', '벨코즈'],
    similarCharacterImages: ['/assets/heimerdinger.jpg', '/assets/kassadin.jpg', '/assets/singed.jpg', '/assets/velkoz.jpg'],
  },
  {
    id: 9,
    mbti: 'ESTP',
    character: '아리',
    characterImage: '/assets/ahri.jpg',
    description: 'ESTP 유형은 친구, 운동, 음식 등 다양함을 선호하는 사람들이죠. 호기심도 많고 다양한 챔피언에 도전하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['코르키', '드레이븐', '이즈리얼', '잭스', '카타리나', '킨드레드', '클레드', '퀸', '렝가', '트위스티드 페이트', '바이', '워윅'],
    similarCharacterImages: ['/assets/corki.jpg', '/assets/draven.jpg', '/assets/ezreal.jpg', '/assets/jax.jpg', '/assets/katarina.jpg', '/assets/kindred.jpg', '/assets/kled.jpg', '/assets/quinn.jpg', '/assets/rengar.jpg', '/assets/twistedfate.jpg', '/assets/vi.jpg', '/assets/warwick.jpg'],
  },
  {
    id: 10,
    mbti: 'ESFP',
    character: '탐 켄치',
    characterImage: '/assets/tahmkench.jpg',
    description: 'ESFP 유형은 분위기를 고조시키는 우호적인 성격의 사람들이죠. 팀에 활력을 불어넣고 게임을 즐기는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['애니', '브랜드', '나르', '징크스', '미스 포츈', '올라프'],
    similarCharacterImages: ['/assets/annie.jpg', '/assets/brand.jpg', '/assets/gnar.jpg', '/assets/jinx.jpg', '/assets/missfortune.jpg','/assets/olaf.jpg',],
  },
  {
    id: 11,
    mbti: 'ENFP',
    character: '모르가나',
    characterImage: '/assets/morgana.jpg',
    description: 'ENFP 유형은 열정적으로 새 관계를 만드는 사람들이죠. 다양한 플레이, 다양한 챔피언에 누구보다도 진심인 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['그라가스', '누누', '오공'],
    similarCharacterImages: ['/assets/gragas.jpg', '/assets/nunu.jpg', '/assets/monkeyking.jpg'],
  },
  {
    id: 12,
    mbti: 'ENTP',
    character: '에코',
    characterImage: '/assets/ekko.jpg',
    description: 'ENTP 유형은 풍부한 상상력으로 새로운 것에 도전하는 사람들이죠. 결과보단 게임 자체를 즐기는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['피즈', '제이스', '케넨', '럼블', '샤코', '트리스타나', '트위치', '베이가', '직스'],
    similarCharacterImages: ['/assets/fizz.jpg', '/assets/jayce.jpg', '/assets/kennen.jpg', '/assets/rumble.jpg', '/assets/shaco.jpg', '/assets/tristana.jpg', '/assets/twitch.jpg', '/assets/veigar.jpg', '/assets/ziggs.jpg'],
  },
  {
    id: 13,
    mbti: 'ESTJ',
    character: '알리스타',
    characterImage: '/assets/alistar.jpg',
    description: 'ESTJ 유형은 사무적, 실용적, 현실적으로 일을 많이 하는 사람들이죠. 한타를 해야할 때와 빠져야할 상황을 잘 판단하여 플레이에 임하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['카밀', '피오라', '갱플랭크', '이블린', '자르반 4세', '칼리스타', '케일', '모데카이저', '판테온', '레넥톤', '리본', '세주아니', '사이온', '트린다미어', '우르곳'],
    similarCharacterImages: ['/assets/camille.jpg', '/assets/fiora.jpg', '/assets/gangplank.jpg', '/assets/evelynn.jpg', '/assets/jarvaniv.jpg', '/assets/kalista.jpg', '/assets/kayle.jpg', '/assets/mordekaiser.jpg', '/assets/pantheon.jpg', '/assets/renekton.jpg', '/assets/riven.jpg', '/assets/sejuani.jpg', '/assets/sion.jpg', '/assets/tryndamere.jpg', '/assets/urgot.jpg'],
  },
  {
    id: 14,
    mbti: 'ESFJ',
    character: '블리츠크랭크',
    characterImage: '/assets/blitzcrank.jpg',
    description: 'ESFJ 유형은 친절, 현실감을 바탕으로 타인에게 봉사하는 사람들이죠. 개인전보다는 팀 전을 선호하고 즐기는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['레오나', '럭스', '쉬바나', '스카너'],
    similarCharacterImages: ['/assets/leona.jpg', '/assets/lux.jpg', '/assets/shyvana.jpg', '/assets/skarner.jpg'],
  },
  {
    id: 15,
    mbti: 'ENFJ',
    character: '아트록스',
    characterImage: '/assets/aatrox.jpg',
    description: 'ENFJ 유형은 타인의 성장을 도모하고 협동하는 사람들이죠. 내가 아닌 다른 사람이 주인공이 되었을때 기꺼이 박수를 쳐주는 멋진 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['애쉬', '일라오이', '나미'],
    similarCharacterImages: ['/assets/ashe.jpg', '/assets/illaoi.jpg', '/assets/nami.jpg'],
  },
  {
    id: 16,
    mbti: 'ENTJ',
    character: '아지르',
    characterImage: '/assets/azir.jpg',
    description: 'ENTJ 유형은 비전을 갖고 타인을 활력적으로 인도하는 사람들이죠. 오합지졸인 우리팀이여 나를 따르라! 역할분담을 해주고 방향을 지시하는 리더십의 아이콘인 당신. 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['카시오페아', '다리우스', '엘리스', '헤카림', '리산드라'],
    similarCharacterImages: ['/assets/cassiopeia.jpg', '/assets/darius.jpg', '/assets/elise.jpg', '/assets/hecarim.jpg', '/assets/lissandra.jpg'],
  }
];