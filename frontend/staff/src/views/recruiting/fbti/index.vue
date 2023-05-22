<template>
  <v-container class="fill-height" :class="{ 'd-none': landing }">
    <v-responsive class="align-center text-center fill-height">
      <v-img contain height="160" src="@/assets/intro.svg" />

      <div class="text-h5 font-weight-bold mt-3 mb-1">풋볼 성격유형 검사</div>

      <p class="text-subtitle-2 font-weight-regular">
        나에게 어울리는 미식축구 포지션은?
      </p>

      <div class="py-8" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="12" md="auto">
          <v-btn
            color="amber-darken-2 text-white"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            @click="() => (landing = true)"
          >
            <v-icon icon="fas fa-right-to-bracket" size="small" start />

            시작하기
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container class="fill-height" :class="{ 'd-none': !landing }">
    <v-responsive
      :class="{ 'd-none': landing }"
      class="align-center text-center fill-height"
    >
      <div class="text-h6 font-weight-bold mt-3 mb-10">
        풋볼 성격유형 검사 (FBTI)
      </div>
      <v-carousel
        v-model="fbti"
        height="400"
        hide-delimiters
        :show-arrows="false"
        progress="warning"
        scrollable
      >
        <v-carousel-item
          v-for="(question, i) in questions"
          :key="i"
          class="px-2 pt-10"
        >
          <v-radio-group v-model="answer[i]" mandatory>
            <template v-slot:label>
              <div
                class="text-subtitle-2 font-weight-bold mb-2 text-cyan-darken-3"
              >
                {{ question.title }}
              </div>
            </template>
            <v-radio
              v-for="(choice, index) in question.choices"
              :value="index + 1"
              :key="index"
              color="indigo-darken-3"
              class="mb-1"
            >
              <template v-slot:label>
                <div class="text-body-2">
                  {{ choice }}
                </div>
              </template>
            </v-radio>
            <v-btn
              :class="{ 'd-none': !lastPage }"
              class="mt-4 bg-green-accent-4 text-white"
              @click="submit()"
              block
            >
              결과 보기
            </v-btn>
          </v-radio-group>
        </v-carousel-item>
      </v-carousel>
      <div class="d-flex justify-space-around align-center py-4">
        <v-btn
          variant="text"
          icon="fas fa-arrow-left"
          @click="previousPage()"
        ></v-btn>
        {{ fbti + 1 }} / {{ questions.length }}
        <v-btn
          variant="text"
          icon="fas fa-arrow-right"
          @click="nextPage()"
        ></v-btn>
      </div>
    </v-responsive>
    <v-dialog v-model="invalid">
      <v-card class="pt-3">
        <v-card-title class="text-center text-amber-accent-2">
          <v-icon
            class="align-center"
            icon="fas fa-triangle-exclamation"
          ></v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          해당 질문에 응답하지 않았습니다.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="invalid = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="result">
      <v-card class="pt-3">
        <v-card-title class="text-center text-brown-darken-2">
          <v-icon class="align-center" icon="fas fa-football"></v-icon>
        </v-card-title>
        <v-card-text class="text-center">
          <h6 class="text-subtitle-1 font-weight-light mb-3">
            당신에게 추천하는 포지션은
          </h6>
          <h3 class="text-h4 font-weight-bold mb-3">" {{ recommand }} "</h3>
          <p class="text-subtitle-2 font-weight-medium mb-8">
            {{ recommandDesc }}
          </p>
          <v-btn class="bg-amber-accent-3 text-white my-3" block>
            카카오톡으로 공유하기(준비중)
          </v-btn>
          <v-btn
            class="bg-green-accent-4 text-white my-3"
            href="https://forms.gle/ywwo8QS4iyhs4mA89"
            block
          >
            미식축구부 지원하기
          </v-btn>
          <v-btn class="bg-indigo-accent-3 mb-3" href="/recruiting" block>
            확인
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const fbti = ref(0)
const answer = ref(new Array<string>(10))
const recommand = ref()
const recommandDesc = ref()
const positions = ref(['스태프', '쿼터백', '라인맨', '리시버', '러닝백'])
const lastPage = ref(false)
const landing = ref(false)
const invalid = ref(false)
const result = ref(false)
const questions = ref([
  {
    title: '사람이 가득찬 지하철에서 내려야할 때 당신은?',
    choices: [
      '시간도 많은데, 다음 환승역까지 간다',
      '이미 탈 때부터 내리는 문 바로 앞에서 존버중',
      '아무도 나를 막을 수 없다! 뚫고 내린다',
      '덩치큰 사람 뒤에 서서 따라 내린다',
      '어라... 자다가 지나쳤네'
    ]
  },
  {
    title: '맛집에서 고기를 먹기로 했는데 가게가 닫았으면?',
    choices: [
      '택시타고 멀리있는 맛집 간다',
      '포기하고 집에간다!',
      '배만 채우면 된다 아무거나 먹자',
      '다수결을 따른다',
      '어 안열리가 없는데..?'
    ]
  },
  {
    title: '잠을 자다 깼는데 강의 시작 10분전?',
    choices: [
      '모자만 쓰고 바로 튀어나간다',
      '오늘은 자체공강! 다시 잔다',
      '통학러^^',
      '그래도 씻고 나가야지'
    ]
  },
  {
    title: '식빵과 최고의 조합은?',
    choices: ['식빵엔 우유', '누텔라', '커피!', '말차 스프레드', '하체운동(?)']
  },
  {
    title: '공강시간 점심 먹을 식당을 찾을 때 당신은?',
    choices: [
      '밥이 무한리필?? 못참지~',
      '밥은 무슨 다이어트 해야지!',
      '인스타 감성 맛집!',
      '아직도 침대에서 자는중(?)',
      '국밥 OR 제육'
    ]
  },
  {
    title: '친구가 내 방에 놀러온다는 연락을 받았을 때',
    choices: [
      '헉! 빨리 청소해야겠다',
      '상남자특: 자취방 문 안잠그고 다님',
      '이미 깔끔해서 바로 들어와도 상관 없음',
      '여기가 사람이 사는 곳인가?',
      '귀찮아.. 잠수탄다'
    ]
  },
  {
    title: '기울어진 한국식 MBTI',
    choices: [
      '반민초, 부먹, 팥붕, 딱복',
      '반민초, 부먹, 팥붕, 물복',
      '반민초, 부먹, 슈붕, 딱복',
      '반민초, 찍먹, 슈붕, 물복',
      '반민초, 찍먹, 팥붕, 딱복',
      '반민초, 찍먹, 팥붕, 물복',
      '민초 어디감?'
    ]
  },
  {
    title: '길가다가 반대편에서 오는 친구를 봤을 때',
    choices: [
      '이름을 부르면서 달려간다',
      '이성과 같이 있을 경우 카메라로 도촬한다',
      '가까이 왔을 때 인사한다',
      '다른길로 피해간다'
    ]
  },
  {
    title: '하루 중 가장 좋아하는 시간대는?',
    choices: ['새벽', '아침', '점심', '낮', '저녁', '밤']
  },
  {
    title: '나는 아이돌이다 내 포지션은?',
    choices: [
      '확신의 센터상',
      '댄스는 내것 메인댄서',
      '무대는 내가 연다 오프닝요정',
      '직캠최다 엔딩요정',
      '내가 그리는 세상이 노래가 된다 메인래퍼'
    ]
  },
  {
    title: '친구들과 저녁을 먹고나서 나는?',
    choices: ['설빙', '코노(동노)', '당구장', '피시방']
  }
])

// STF, QB, LINE, WR, RB

const scores = [
  [
    [0, 1, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0]
  ],
  [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]
  ],
  [
    [0, 1, 0, 1, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0]
  ],
  [
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0]
  ],
  [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 1, 0]
  ],
  [
    [1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1]
  ],
  [
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ],
  [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0]
  ],
  [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0]
  ],
  [
    [0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0],
    [0, 0, 0, 0, 2],
    [0, 2, 0, 0, 0],
    [2, 0, 0, 0, 0]
  ],
  [
    [1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0]
  ]
]

const descriptions: any = {
  스태프:
    '섬세함을 지닌 당신! 미식축구부의 운영을 책임지는 스태프로 활동해보는 것은 어떤까요?',
  쿼터백:
    '리더의 자질을 지닌 당신! 팀의 게임 플레이를 지휘하는 쿼터백으로 활동해보는 것은 어떤가요?',
  라인맨:
    '듬직한 당신! 게임 플레이의 기반을 책임지는 라인맨으로 활동해보는 것은 어떤가요?',
  리시버:
    '인싸력을 지닌 당신! 화려한 패싱 플레이로 주목 받아보는 것은 어떤가요?',
  러닝백: '강한 추진력을 가진 당신! 러닝백으로 마음껏 달려보는 것은 어떤가요?'
}

function previousPage() {
  console.log(answer.value)
  fbti.value = Math.max(fbti.value - 1, 0)
  lastPage.value = false
}

function nextPage() {
  console.log(answer.value)
  if (!answer.value[fbti.value]) {
    invalid.value = true
  } else {
    fbti.value = Math.min(fbti.value + 1, questions.value.length - 1)
    lastPage.value = fbti.value === questions.value.length - 1 ? true : false
  }
}

function submit() {
  if (!answer.value[fbti.value]) {
    invalid.value = true
  } else {
    const positionRank = [0, 0, 0, 0, 0]
    answer.value.forEach((select, index) => {
      const positionScore = scores[index][parseInt(select) - 1]
      positionRank.forEach((item, index) => {
        positionRank[index] += positionScore[index]
      })
    })

    let max = 0

    positionRank.forEach((value, index) => {
      if (positionRank[index] >= positionRank[max]) max = index
    })

    const duplicate = new Array<number>()
    positionRank.forEach((value, index) => {
      if (value === positionRank[max]) duplicate.push(index)
    })

    if (duplicate.length > 1) {
      max = duplicate[Math.floor(Math.random() * duplicate.length)]
    }

    recommand.value = positions.value[max]
    recommandDesc.value = descriptions[positions.value[max]]
    result.value = true
  }
}
</script>
