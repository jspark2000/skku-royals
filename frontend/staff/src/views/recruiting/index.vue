<template>
  <v-parallax height="1000" src="/recruiting/background.jpeg">
    <v-container class="fill-height px-5 pt-10">
      <v-responsive class="fill-height mt-3 text-center">
        <v-avatar size="75px">
          <v-img src="/recruiting/logo.png"></v-img>
        </v-avatar>
        <div class="text-h6 font-weight-black mt-5 text-white">SKKU ROYALS</div>

        <h1 class="text-subtitle-2 font-weight-regular text-white">
          2023년도 신입부원 모집
        </h1>

        <v-row class="d-flex align-content-center mt-4 justify-center">
          <v-col cols="12" class="mt-5 py-2">
            <v-btn
              prepend-icon="fa-brands fa-facebook"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              block
              href="https://www.facebook.com/skkuroyals"
            >
              FACEBOOK
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              prepend-icon="fa-brands fa-youtube"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              block
              href="https://youtu.be/sYT4eKDSgXo"
            >
              ROSTER
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              prepend-icon="fa-brands fa-instagram"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              block
              href="https://www.instagram.com/skku_royals_1957"
            >
              INSTAGRAM
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              prepend-icon="fa-solid fa-person"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              to="/recruiting/fbti"
              block
            >
              FBTI (풋볼TI)
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              prepend-icon="fas fa-trophy"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              block
              @click="() => (records = !records)"
            >
              RECORDS
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              prepend-icon="fas fa-newspaper"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              block
              @click="() => (cardnews = !cardnews)"
            >
              CARD NEWS
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              prepend-icon="fa-regular fa-comment"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              block
              href="https://open.kakao.com/o/soqCcXWd"
            >
              카카오톡 오픈채팅방
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              prepend-icon="fas fa-phone"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              @click="() => (call = !call)"
              block
            >
              연락처
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              prepend-icon="fas fa-envelope"
              variant="outlined"
              class="font-weight-bold text-white"
              size="large"
              rounded="pill"
              href="https://forms.gle/ywwo8QS4iyhs4mA89"
              block
            >
              CONTACT(입부신청서)
            </v-btn>
          </v-col>
          <v-col class="mt-6 text-center text-white" cols="12">
            © {{ new Date().getFullYear() }}
            <strong>SKKU ROYALS</strong>
          </v-col>
        </v-row>
      </v-responsive>
      <div class="text-center">
        <v-dialog v-model="records">
          <v-card class="text-center">
            <v-card-text class="font-weight-regular text-subtitle-2">
              <h3 class="font-weight-black mb-3">
                <v-icon
                  class="fas fa-football text-brown-darken-1"
                  size="20px"
                ></v-icon>
                SKKU ROYALS RECORDS
              </h3>
              <v-icon
                icon="fas fa-medal"
                class="text-amber-darken-1"
                size="17px"
              ></v-icon>
              2022년도 전국 대회 우승
              <br />
              <v-icon
                icon="fas fa-medal"
                class="text-amber-darken-1"
                size="17px"
              ></v-icon>
              2022년도 서울지역 추계 대회 우승
              <br />
              <v-icon
                icon="fas fa-medal"
                class="text-amber-darken-1"
                size="17px"
              ></v-icon>
              2022년도 서울지역 춘계 대회 우승
              <br />
              <v-icon
                icon="fas fa-medal"
                class="text-grey-darken-1"
                size="17px"
              ></v-icon>
              2021년도 서울지역 추계 대회 준우승
              <br />
              <v-icon
                icon="fas fa-medal"
                class="text-amber-darken-1"
                size="17px"
              ></v-icon>
              2019년도 전국 대회 우승
              <br />
              <v-icon
                icon="fas fa-medal"
                class="text-amber-darken-1"
                size="17px"
              ></v-icon>
              2019년도 서울지역 춘계 대회 우승
              <br />
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                class="bg-amber-accent-3 text-white"
                @click="records = false"
              >
                닫기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="call">
          <v-card class="text-center">
            <v-card-text class="font-weight-regular text-subtitle-2">
              <h3 class="font-weight-black mb-3">
                <v-icon icon="fas fa-phone" size="17px"></v-icon>
                연락처
              </h3>
              010-9756-6847 (주장 18 이창현)
              <br />
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                class="bg-amber-accent-3 text-white"
                @click="call = false"
              >
                닫기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <v-dialog v-model="cardnews">
        <v-carousel hide-delimiters show-arrows="hover" cycle interval="5000">
          <v-carousel-item
            v-for="(cardnewsUrl, i) in cardnewsUrls"
            :key="i"
            :src="cardnewsUrl.src"
          ></v-carousel-item>
        </v-carousel>
      </v-dialog>
    </v-container>
  </v-parallax>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const records = ref(false)
const cardnews = ref(false)
const call = ref(false)

const cardnewsUrls = ref([
  { src: '/cardnews/001.png' },
  { src: '/cardnews/002.png' },
  { src: '/cardnews/003.png' },
  { src: '/cardnews/004.png' },
  { src: '/cardnews/005.png' },
  { src: '/cardnews/006.png' },
  { src: '/cardnews/007.png' },
  { src: '/cardnews/008.png' },
  { src: '/cardnews/009.png' }
])
</script>
