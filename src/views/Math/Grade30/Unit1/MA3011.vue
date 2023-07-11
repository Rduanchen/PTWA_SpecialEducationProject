<template>
  <div class="gameWindow">
    <LevelButton @levelClick="changeCurrentLevel" :data="5" :currentNumber="currentLevel"></LevelButton>
    <div class="board">
      <div class="question">
        <span v-if="data"> {{ getQuestion(currentLevel) }}是 </span>
        <input type="text">
        <span>個1和</span>
        <input type="text">
        <span>個0.1合起來的</span>
      </div>
      <div class="blocks">
        <div class="ditgit">
          <div class="text"> 個位數 </div>
          <input type="number" class="control">
        </div>
        <div class="decile">
          <div class="text"> 十分位 </div>
          <input type="number" class="control">
        </div>
      </div>
    </div>
    <OptionButton :optionsActive="optionsActive" @optionsEvent="optionsEvent"></OptionButton>
  </div>
</template>

<script>
import LevelButton from '@/components/LevelButton.vue';
import OptionButton from '@/components/OptionButton.vue';
import fetchJson from '@/utilitys/fetch-json.js';

export default {
  name: 'MA3013',
  components: {
    LevelButton,
    OptionButton,
  },
  data() {
    return {
      gameId: 'MA3013',
      data: null,
      currentLevel: 0,
      optionsActive: ["previous", "start", "next", "hint", "record", "submit"],
      
    };
  },
  methods: {
    changeCurrentLevel(number) {
      this.currentLevel = number;
      console.log(number);
    },
    optionsEvent(option) {
      console.log(option);
      // 請在這裡寫開始遊戲、上一關、下一關等等等的邏輯
    },
    getQuestion(level){
      let qid = Math.floor(Math.random() * 5)
      return this.data.questions[level][qid]
    },
  },
  mounted() {
    (async () => {
      const res = await fetchJson('/math/grade30-game-info.json');
      this.data = res.data.unit_3.filter((item) => {
        return item.id === this.gameId;
      })[0];
      console.log(this.data.questions);
    })();
  },
};
</script>

<style>
.gameWindow {
  display: flex;
  flex-direction: column;
}

.board {
  position: relative;
  display: flex;
  width: 900px;
  height: 650px;
  background-color: #eee;
  border: 5px solid #ADC090;
  border-radius: 10px;
  box-sizing: content-box;
}

*{
  border: 1px solid #000;
}


</style>