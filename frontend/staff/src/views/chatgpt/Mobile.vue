<template>
  <v-responsive class="chat-container">
    <v-container class="pb-5 w-100">
      <v-row class="overflow-y-auto">
        <v-col cols="12">
          <v-col cols="12">
            <div class="d-flex align-content-center justify-center">
              <div class="text-cyan-lighten-2 text-h6 font-weight-medium">
                GPT-3.5-Turbo 👋
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <div ref="chat" id="chat">
              <div
                id="chats"
                v-for="(chat, index) in chatList"
                :key="index"
                class="w-100 mt-4"
              >
                <div
                  v-if="chat.role === 'user'"
                  width="100%"
                  class="justify-end d-flex"
                >
                  <v-card class="pa-2 me-2" maxWidth="80%">
                    <p v-html="handleNewLine(chat.content)"></p>
                  </v-card>
                  <p class="text-amber-accent-3 font-weight-medium">:You</p>
                </div>
                <div
                  v-if="chat.role === 'assistant'"
                  width="100%"
                  class="text-start justify-start d-flex"
                >
                  <div class="text-grey-lighten-1 me-2 font-weight-medium">
                    ChatGPT:
                  </div>
                  <v-card class="pa-2" maxWidth="80%">
                    <p v-html="handleNewLine(chat.content)"></p>
                  </v-card>
                </div>
              </div>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="px-15 w-75 hello">
      <div class="d-flex">
        <v-textarea rows="1" variant="solo">
          <template v-slot:append-inner>
            <v-icon size="20px" icon="fa-regular fa-paper-plane"></v-icon>
          </template>
        </v-textarea>
      </div>
    </v-container>
    <v-container class="msg-input px-7 w-100">
      <div class="d-flex">
        <v-textarea
          @keypress.enter="ask()"
          auto-grow
          rows="1"
          v-model="input"
          variant="solo"
          hint="여기에 질문을 입력하세요"
          :disabled="processing"
        >
          <template v-slot:append-inner>
            <v-icon size="20px" icon="fa-regular fa-paper-plane"></v-icon>
          </template>
        </v-textarea>
      </div>
    </v-container>
  </v-responsive>
</template>

<script lang="ts" setup>
import { axiosInstance } from '@/common/store/auth'
import { Ref } from 'vue'
import { nextTick } from 'vue'
import { ref } from 'vue'

const input = ref('')

const processing = ref(false)

const chatList: Ref<{ role: string; content: string }[]> = ref([])

async function ask() {
  const question = {
    role: 'user',
    content: input.value
  }

  chatList.value.push(question)

  await nextTick(async () => {
    input.value = ''
    const div = document.getElementById('chat')
    if (div) {
      window.scrollTo({ top: div.scrollHeight, behavior: 'smooth' })
    }
  })

  processing.value = true

  const answer = {
    role: 'assistant',
    content: ''
  }

  await axiosInstance
    .post('/api/chat-gpt/ask', { messages: chatList.value })
    .then((result) => (answer.content = result.data.answer))
    .catch((error) => {
      answer.content = error.message
    })

  chatList.value.push(answer)

  await nextTick(async () => {
    input.value = ''
    const div = document.getElementById('chat')
    if (div) {
      window.scrollTo({ top: div.scrollHeight, behavior: 'smooth' })
    }
    processing.value = false
  })
}

function handleNewLine(str: string) {
  return String(str).replace(/(?:\r\n|\r|\n)/g, '<br>')
}
</script>
<style>
.msg-input {
  bottom: 0;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  right: 0;
}

.chat-container {
  height: 100%;
}

.hello {
  visibility: hidden;
}

#chats {
  font-size: 12px;
  font-weight: 400;
}
</style>
