<template>
    <header>
      <nav class="container navbar navbar-expand-lg navbar-light sticky-top justify-content-center" style="justify-content: flex-start !important;">
          <a class="navbar-brand mt-2 mb-2" href="#" alt="Home">
              <img src="@/assets/images/nav_bar/logo.png" class="img-fluid" />
          </a>
          <div class="container sticky-top" style="--bs-breadcrumb-divider:'>';">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><i class="bi bi-house"></i><a href="#">  主頁</a></li>
              <li class="breadcrumb-item" aria-current="page"><i class="bi bi-book-half"></i>  <router-link :to="{ name: 'GameSelect', params:{ id:this.Grade }}">  {{ this.Grade }}  年級 {{ Subjects[Subject] }}</router-link></li>
              <li class="breadcrumb-item active" aria-current="page"><i class="bi bi-pen"></i><a>  {{this.Name}}</a></li>
            </ol>
          </div>     
      </nav>
    </header>
    <section>
      <div class="container-fluid">
        <div class="row mt-3 justify-content-center">
          <div class="col-8 GameArea">
            <!-- <TrueFalseGame></TrueFalseGame> -->
            <canvas></canvas>
          </div>
          <div class="col-3 card SideBar">
              <p class="card-title h4 mt-3">功能區</p>
              <div class="card-body" style="border-style: none;">
                <div class="list-group mt-1">
                  <a class="list-group-item list-group-item" @click="PreviousQuestion()"><img src="@/assets/buttonV3/previous.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item" @click="NextQuestion()"><img src="@/assets/buttonV3/next.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item" v-if="GameStatus=='Progressing'"><img src="@/assets/buttonV3/submit.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item" v-if="GameStatus=='NotStart'"><img src="@/assets/buttonV3/start.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item" @click="reloadPage()" v-if="GameStatus=='Progressing'|| 'Done'"><img src="@/assets/buttonV3/restart.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item" v-if="GameStatus=='Progressing'"><img src="@/assets/buttonV3/hint.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item" @click="tocsv(this.download_data)" v-if="GameStatus=='Done'" ><img src="@/assets/buttonV3/download.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="@/assets/buttonV3/info.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item"><img src="@/assets/buttonV3/calculator.png" class="img-hover-zoom"></a>
                  <a class="list-group-item list-group-item"><img src="@/assets/buttonV3/record.png" class="img-hover-zoom"></a>
                </div>
                <!-- Temp check box
                For Switch Game Status
                <select v-model="GameStatus">
                  <option value="">請選擇一個選項</option>
                  <option value="NotStart">NotStart</option>
                  <option value="Progressing">Progressing</option>
                  <option value="Done">Done</option>
                </select> -->
            </div>
          </div>
            <!--Modal -->
              <div class="fade modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">不會玩嗎?請看教學影片:</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body justify-content-center">
                    <img src="@/assets/images/game_images/elephant.gif">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">我知道了!</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>    
    </section>
</template>

<script>
import fetchJson from '@/utilitys/fetch-json.js';
import array2csv from '@/utilitys/array2csv.js';
import TrueFalseGame from '@/views/GameTemplate/PublicSample.vue';
export default {
    data() {
      return {
        GameStatus: "Done", //遊戲狀態
        download_data: "", //下載的資料，格式為二維陣列。
        GameID: "",
        Subject: "",
        Grade: "",
        Name: "",
        Subjects: {
            Math: "數學",
            Chinese: "國語",
            Technology: "多元科技",
        },
        GameConfig: {},
        FakeButton: ['previous', 'next', 'submit', 'start', 'restart', 'hint', 'info']
      };
    },
    created() {
        this.GameID = this.$route.params.id;
        this.Subject = this.$route.params.Subject;
        this.Grade = this.$route.params.Grade;
        this.Name = this.$route.params.GameName;
        console.log(this.GameID);
        console.log(this.Subject);
        console.log(this.Grade);
        (async () => {
            const res = await fetchJson("/GameConfig.json");
            this.GameConfig = res.data;
            console.log(this.GameConfig);
            console.log(this.GameConfig.Button["previous"]);
        })();
    },
    methods: {
        doAction() {
            console.log("doAction");
        },
        tocsv(data) {
            //Get Data From Component
            console.log(data);
            array2csv(data);
        },
        reloadPage() {
          location.reload();
        },
        NextQuestion() {
            console.log("NextQuestion");
        },
        PreviousQuestion() {
            console.log("PreviousQuestion");
        }
    },
    components: {
        TrueFalseGame,
    }
}
</script>
<style scoped lang="scss">
header{
  background-color: #F19C79;
  height: 10vh;
}
.navbar {
  background-color: #F19C79; 
  height: 10vh; 
  .navbar-brand {
    img{
        max-width: 70%
    }
  }
  img {
    max-width: 80%;
  } 
}
.sidebar {
  height: 85vh;
}

.img-hover-zoom {
  transition: transform 0.3s ease; /* 平滑的過渡效果 */
}

.img-hover-zoom:hover {
  transform: scale(1.07); /* 放大至原大小的 110% */
}


.breadcrumb .breadcrumb-item {
  a {
    color: #FFF; /* 替換為你想要的顏色 */
    font-size: 1.2em;
  }
}
.img-hover-zoom {
  max-width: 100%; /* 或者是卡片寬度的百分比 */
  height: auto; /* 保持圖片的比例 */
}
.list-group {
  border: none !important; /* 移除邊框 */
}
.list-group-item {
  border: none !important; /* 移除每個 list-group-item 的邊框 */
}
/* 如果按鈕內有圖片，也要確保圖片不會超出按鈕的寬度 */
.function-btn img {
  max-width: 100%;
  height: auto; /* 保持圖片的比例 */
}
.GameArea {
  // width: 80%;
  background-color: #fff;
  border-radius: 10px;
  // border: #000 1px solid;
  height: 85vh;
}
canvas {
  width: 95%;
  background-color: #fff;
  border-radius: 10px;
  border: #000 1px solid;
  height: 80vh;
}
</style>
