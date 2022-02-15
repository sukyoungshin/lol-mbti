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
    characterImage: '/assets/akali.webp',
    description: 'ISTJ 유형은 한번 시작한 일은 끝까지 해내는 뚝심있는 사람들이죠. 기회를 엿보며 숨죽이다가 멋지게 해결하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['바드', '이블린', '이렐리아', '말파이트', '마오카이', '나서스', '노틸러스', '뽀삐', '라이즈', '탈론', '쓰레쉬', '우디르', '바루스', '베인', '신짜오', '야스오'],
    similarCharacterImages: ['/assets/bard.webp', '/assets/evelynn.webp', '/assets/irelia.webp', '/assets/malaphite.webp', '/assets/maokai.webp', '/assets/nasus.webp', '/assets/nautilus.webp', '/assets/poppy.webp', '/assets/ryze.webp', '/assets/talon.webp','/assets/thresh.webp', '/assets/udyr.webp', '/assets/varus.webp', '/assets/vayne.webp', '/assets/yasuo.webp'],
  },
  {
    id: 2,
    mbti: 'ISFJ',
    character: '브라움',
    characterImage: '/assets/braum.webp',
    description: 'ISFJ 유형은 성실하고 온화하며 협조를 잘하는 사람들이죠. 팀원들의 의견에 귀 기울여듣고, 승리의 기회를 만들어내는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['갈리오', '잔나', '루시안', '소라카', '탈리야', '요릭'],
    similarCharacterImages: ['/assets/galio.webp', '/assets/janna.webp', '/assets/lucian.webp', '/assets/soraka.webp', '/assets/talialiyah.webp', '/assets/yorick.webp'],
  },
  {
    id: 3,
    mbti: 'INFJ',
    character: '애니비아',
    characterImage: '/assets/anivia.webp',
    description: 'INFJ 유형은 사람에 관한 뛰어난 통찰력을 가진 사람이죠. 팀원들의 의견을 듣고 상황을 멋지게 정리하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['다이애나', '카르마', '카서스', '킨드레드', '타릭', '자크', '질리언'],
    similarCharacterImages: ['/assets/diana.webp', '/assets/karma.webp', '/assets/karthus.webp', '/assets/kindred.webp'],
  },
  {
    id: 4,
    mbti: 'INTJ',
    character: '아우렐리온 솔',
    characterImage: '/assets/aurelionsol.webp',
    description: 'INTJ 유형은 전체를 조합해 비전을 제시하는 사람이죠. 나무보다 숲을 보고 나아가는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['르블랑', '말자하', '마스터 이', '스웨인', '빅토르', '볼리베어', '제라스'],
    similarCharacterImages: ['/assets/leblanc.webp', '/assets/malzahar.webp', '/assets/masteryi.webp', '/assets/swain.webp', '/assets/viktor.webp', '/assets/volibear_0.webp', '/assets/xeratth.webp'],
  },
  {
    id: 5,
    mbti: 'ISTP',
    character: '케이틀린',
    characterImage: '/assets/caitlyn.webp',
    description: 'ISTP 유형은 논리적이며 뛰어난 상황 적응력을 갖춘 사람이죠. 필요한 순간에 센스있게 상황을 해결하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['문도박사', '그레이브즈', '카직스', '리 신', '람머스', '쉔', '티모'],
    similarCharacterImages: ['/assets/drmundo.webp', '/assets/graves.webp', '/assets/khazix.webp', '/assets/leesin.webp', '/assets/rammus.webp', '/assets/shen.webp', '/assets/teemo.webp'],
  },
  {
    id: 6,
    mbti: 'ISFP',
    character: '진',
    characterImage: '/assets/jhin.webp',
    description: 'ISFP 유형은 따뜻한 감성을 가진 겸손한 사람이죠. 팀원들이 한타하러 가자고 제안하면 합류하여 기회를 만들어내는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['니달리', '소나'],
    similarCharacterImages: ['/assets/nidalee.webp', '/assets/sona.webp'],
  },
  {
    id: 7,
    mbti: 'INFP',
    character: '아무무',
    characterImage: '/assets/amumu.webp',
    description: 'INFP 유형은 이상적인 세상을 만들어가는 사람이죠. 팀의 승리를 그리며 게임에 임하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['룰루'],
    similarCharacterImages: ['/assets/lulu.webp'],
  },
  {
    id: 8,
    mbti: 'INTP',
    character: '오리아나',
    characterImage: '/assets/orianna.webp',
    description: 'INTP 유형은 비평적인 관점을 가진 뛰어난 전략가들이죠. 묵묵히 제 할 일을 하며 기회를 만들어내는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['하이머딩거', '카사딘', '신지드', '벨코즈'],
    similarCharacterImages: ['/assets/heimerdinger.webp', '/assets/kassadin.webp', '/assets/singed.webp', '/assets/velkoz.webp'],
  },
  {
    id: 9,
    mbti: 'ESTP',
    character: '아리',
    characterImage: '/assets/ahri.webp',
    description: 'ESTP 유형은 친구, 운동, 음식 등 다양함을 선호하는 사람들이죠. 호기심도 많고 다양한 챔피언에 도전하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['코르키', '드레이븐', '이즈리얼', '잭스', '카타리나', '킨드레드', '클레드', '퀸', '렝가', '트위스티드 페이트', '바이', '워윅'],
    similarCharacterImages: ['/assets/corki.webp', '/assets/draven.webp', '/assets/ezreal.webp', '/assets/jax.webp', '/assets/katarina.webp', '/assets/kindred.webp', '/assets/kled.webp', '/assets/quinn.webp', '/assets/rengar.webp', '/assets/twistedfate.webp', '/assets/vi.webp', '/assets/warwick.webp'],
  },
  {
    id: 10,
    mbti: 'ESFP',
    character: '탐 켄치',
    characterImage: '/assets/tahmkench.webp',
    description: 'ESFP 유형은 분위기를 고조시키는 우호적인 성격의 사람들이죠. 팀에 활력을 불어넣고 게임을 즐기는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['애니', '브랜드', '나르', '징크스', '미스 포츈', '올라프'],
    similarCharacterImages: ['/assets/annie.webp', '/assets/brand.webp', '/assets/gnar.webp', '/assets/jinx.webp', '/assets/missfortune.webp','/assets/olaf.webp',],
  },
  {
    id: 11,
    mbti: 'ENFP',
    character: '모르가나',
    characterImage: '/assets/morgana.webp',
    description: 'ENFP 유형은 열정적으로 새 관계를 만드는 사람들이죠. 다양한 플레이, 다양한 챔피언에 누구보다도 진심인 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['그라가스', '누누', '오공'],
    similarCharacterImages: ['/assets/gragas.webp', '/assets/nunu.webp', '/assets/monkeyking.webp'],
  },
  {
    id: 12,
    mbti: 'ENTP',
    character: '에코',
    characterImage: '/assets/ekko.webp',
    description: 'ENTP 유형은 풍부한 상상력으로 새로운 것에 도전하는 사람들이죠. 결과보단 게임 자체를 즐기는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['피즈', '제이스', '케넨', '럼블', '샤코', '트리스타나', '트위치', '베이가', '직스'],
    similarCharacterImages: ['/assets/fizz.webp', '/assets/jayce.webp', '/assets/kennen.webp', '/assets/rumble.webp', '/assets/shaco.webp', '/assets/tristana.webp', '/assets/twitch.webp', '/assets/veigar.webp', '/assets/ziggs.webp'],
  },
  {
    id: 13,
    mbti: 'ESTJ',
    character: '알리스타',
    characterImage: '/assets/alistar.webp',
    description: 'ESTJ 유형은 사무적, 실용적, 현실적으로 일을 많이 하는 사람들이죠. 한타를 해야할 때와 빠져야할 상황을 잘 판단하여 플레이에 임하는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['카밀', '피오라', '갱플랭크', '이블린', '자르반 4세', '칼리스타', '케일', '모데카이저', '판테온', '레넥톤', '리본', '세주아니', '사이온', '트린다미어', '우르곳'],
    similarCharacterImages: ['/assets/camille.webp', '/assets/fiora.webp', '/assets/gangplank.webp', '/assets/evelynn.webp', '/assets/jarvaniv.webp', '/assets/kalista.webp', '/assets/kayle.webp', '/assets/mordekaiser.webp', '/assets/pantheon.webp', '/assets/renekton.webp', '/assets/riven.webp', '/assets/sejuani.webp', '/assets/sion.webp', '/assets/tryndamere.webp', '/assets/urgot.webp'],
  },
  {
    id: 14,
    mbti: 'ESFJ',
    character: '블리츠크랭크',
    characterImage: '/assets/blitzcrank.webp',
    description: 'ESFJ 유형은 친절, 현실감을 바탕으로 타인에게 봉사하는 사람들이죠. 개인전보다는 팀 전을 선호하고 즐기는 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['레오나', '럭스', '쉬바나', '스카너'],
    similarCharacterImages: ['/assets/leona.webp', '/assets/lux.webp', '/assets/shyvana.webp', '/assets/skarner.webp'],
  },
  {
    id: 15,
    mbti: 'ENFJ',
    character: '아트록스',
    characterImage: '/assets/aatrox.webp',
    description: 'ENFJ 유형은 타인의 성장을 도모하고 협동하는 사람들이죠. 내가 아닌 다른 사람이 주인공이 되었을때 기꺼이 박수를 쳐주는 멋진 당신! 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['애쉬', '일라오이', '나미'],
    similarCharacterImages: ['/assets/ashe.webp', '/assets/illaoi.webp', '/assets/nami.webp'],
  },
  {
    id: 16,
    mbti: 'ENTJ',
    character: '아지르',
    characterImage: '/assets/azir.webp',
    description: 'ENTJ 유형은 비전을 갖고 타인을 활력적으로 인도하는 사람들이죠. 오합지졸인 우리팀이여 나를 따르라! 역할분담을 해주고 방향을 지시하는 리더십의 아이콘인 당신. 당신의 성향과 찰떡인 챔피언들을 플레이해보는건 어떨까요?',
    similarCharacters: ['카시오페아', '다리우스', '엘리스', '헤카림', '리산드라'],
    similarCharacterImages: ['/assets/cassiopeia.webp', '/assets/darius.webp', '/assets/elise.webp', '/assets/hecarim.webp', '/assets/lissandra.webp'],
  }
];