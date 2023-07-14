<template>
  <div class="gameWindow">
    <LevelButton @levelClick="changeCurrentLevel" :data="1" :currentNumber="currentLevel"></LevelButton>
    <div class="board">
      <div class="top">
        <div class="blanksLeft">
          <table>
            <tr>
              <th style="width:80px;">
                <div class="title">
                  <b>羽毛球</b>
                  <em>躲避球</em>
                </div>
              </th>
              <th>喜歡</th>
              <th>不喜歡</th>
              <th>合計(人)</th>
            </tr>
            <tr v-for="content in blankContent1">
              <td class="name">
                {{ content.title }}
              </td>
              <td v-for="inputId in columnIndex1">
                <input type="text" :id="'inputId-'+inputId">
              </td>
            </tr>
          </table>
        </div>
        <div class="description">
          <p>註：🞅 表示喜歡，🞪 表示不喜歡</p>
        </div>
        <div class="blanksRight">
          <table>
            <tr>
              <th>座號</th>
              <th>羽毛球</th>
              <th>躲避球</th>
            </tr>
            <tr v-for="content in blankContent2">
              <td class="name">
                {{ content.seatNumber }}
              </td>
              <td v-for="like in content.likes" style="color: black;">
                {{ like }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="bottom">
        <ol>
          <li v-for="(question, qid) in data.questions">
            <h4 v-if="qid === 0">{{ question }}</h4>
            <h4 v-if="qid !== 0">
              {{ question }}（<input type="text" v-model="answers[qid]">）位
            </h4>
          </li>
        </ol>
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
  name: 'MA3016',
  components: {
    LevelButton,
    OptionButton,
  },
  data() {
    return {
      gameId: 'MA3016',
      data: {
        id: 123,
        questions: []
      },
      currentLevel: 1,
      answers: [],
      optionsActive: ["previous", "start", "next", "hint", "record", "submit"],
      levels: 1,
      blankContent1: [
        {
          title: '喜歡'
        },
        {
          title: '不喜歡'
        },
        {
          title: '合計(人)'
        }
      ],
      blankContent2:[
        {
          seatNumber: '1',
          likes: ['🞅', '🞅']
        },{
          seatNumber: '2',
          likes: ['🞅', '🞅']
        },{
          seatNumber: '3',
          likes: ['🞪', '🞅']
        },{
          seatNumber: '4',
          likes: ['🞅', '🞪']
        },{
          seatNumber: '5',
          likes: ['🞪', '🞪']
        },{
          seatNumber: '6',
          likes: ['🞪', '🞅']
        },{
          seatNumber: '7',
          likes: ['🞪', '🞅']
        },{
          seatNumber: '8',
          likes: ['🞅', '🞪']
        },{
          seatNumber: '9',
          likes: ['🞅', '🞅']
        },{
          seatNumber: '10',
          likes: ['🞪', '🞪']
        }
      ],
      rowIndex1: 3,
      columnIndex1: 3,
      rowIndex2: 10,
      columnIndex2: 2
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
    }
  },
  mounted() {
    (async () => {
      const res = await fetchJson('/math/grade30-game-info.json');
      this.data = res.data.unit_6.filter((item) => {
        return item.id === this.gameId;
      })[0];
      console.log(this.data);
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
  display: flex;
  flex-direction: column;
  position: relative;
  width: 900px;
  height: 650px;
  background-color: #eee;
  border: 5px solid #ADC090;
  border-radius: 10px;
  box-sizing: content-box;
}

.board .top{
  margin: 0;
  padding: 0;
}

.board .blanksLeft{
  position: relative;
  top: 15%;
  left: 4%;
}

.board .blanksRight{
  position: relative;
  top: -22.5%;
  left: 70%;
}

.description{
  position: absolute;
  top: 9.5%;
  right: 4.5%;
  font-size: 18px;
}

.blanksLeft input{
  width: 130px;
  border: none;
  text-align: center;
}

table {
  border-collapse: collapse;
  border: 1px #525152 solid;
  background-color: #fff;
}

th, td{
  padding: 0;
  border: 1px #525152 solid;
  text-align: center;
}

th {
  background: #9cc1dd;
}
tr td:first-child {
  background: #bdc3d8;
}

td.name{
  font-weight: bold;
}

.blanksLeft th, .blanksLeft td {
  font-size: 24px;
  line-height: 60px;
}

.blanksRight th, .blanksRight td{
  font-size: 20px;
  line-height: 37px;
}

.blanksRight td{
  width: 80px;
}

.blanksRight .name{
  width: 70px;
}

.blanksLeft .title {
  border-top: 60px #9cc1dd solid; /*表格第一行行高*/
  width: 0px; 
  height: 0px; 
  border-left: 110px #bdc3d8 solid; /*表格第一行第一格宽度*/
  position: relative; 
}

b, em {
  font-size: 17px;
}

.blanksLeft b {
  font-style: normal;
  display: block;
  position: absolute;
  top: -75px;
  left: -60px;
  width: 55px;
}
.blanksLeft em {
  font-style: normal;
  display: block;
  position: absolute;
  top: -45px;
  left: -105px;
  width: 55x;
}

.blanksRight b {
  font-style: normal;
  display: block;
  position: absolute;
  top: -75px;
  left: -60px;
  width: 55px;
}

.board .bottom{
  position: absolute;
  bottom: 5%;
  left: 3%;
}

.bottom h4{
  margin: 15px;
  margin-left: 0;
}

.bottom input{
  border: none;
  background-color: transparent;
  width: 60px;
  text-align: center;
  font-size: 24px;
}

.bottom input:focus{
  border: none;
  outline: none;
}

ol li::marker{
  font-size: 24px;
}
</style>