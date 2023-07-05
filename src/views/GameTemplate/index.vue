<template>
  <div class="gameWindow">
    <LevelButton @levelClick="changeCurrentLevel" :data="5" :currentNumber="currentLevel"></LevelButton>
    <div class="myCanvas">
      <div class="gameRule">
        <h1>遊戲玩法：</h1>
        <div class="context">
        </div>
        <h1>準備好了嗎？點擊遊戲開始！</h1>
      </div>
    </div>
    <OptionButton :optionsExist="optionsExist"></OptionButton>
  </div>
</template>

<script>
import LevelButton from '@/components/LevelButton.vue';
import OptionButton from '@/components/OptionButton.vue';

export default {
  name: 'MA30',
  components: {
    LevelButton,
    OptionButton,
  },
  data() {
    return {
      gameData: [
        {"lives": 3, "bottom": [6, 6, 6, 6], "top": [1, 2, 3, 4]}
        , {"lives": 3, "bottom": [7, 7, 7, 7], "top": [2, 3, 4, 5]}
        , {"lives": 3, "bottom": [8, 8, 8, 8], "top": [3, 4, 5, 6]}
        , {"lives": 3, "bottom": [9, 9, 9, 9], "top": [5, 6, 7, 8]}
        , {"lives": 3, "bottom": [10, 10, 10, 10], "top": [6, 7, 8, 9]}
      ],
      currentLevel: 1,
      optionsExist: ["previous", "start", "next", "hint", "record", "submit"],
    };
  },
  methods: {
    changeCurrentLevel(number) {
      this.currentLevel = number;
    }
  },
  mounted() {
  },
};
</script>

<style>
.content {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.gameWindow {
    display: flex;
    flex-direction: column;
}

.myCanvas {
    position: relative;
    display: flex;
    width: 900px;
    height: 550px;
    background-color: #eee;
    border: 5px solid #ADC090;
    border-radius: 10px;
    box-sizing: content-box;
}

/* Rule */
.gameRule {
    position: absolute;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #eee;
}
.gameRule h1 {
    font-weight: bold;
    font-size: 40px;
}
.gameRule>:first-child {
    flex: 1;
    margin: 4rem;
}
.gameRule .context {
    flex: 8;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 8rem;
}
.gameRule>:last-child {
    display: flex;
    flex: 1;
    justify-content: end;
    align-items: end;
    margin: 4rem;
}
</style>