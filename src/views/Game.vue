<template>
    <header>
      <nav class="container navbar navbar-expand-md navbar-dark sticky-top">
        <div class="container-fluid d-flex flex-row justify-content-center align-items-center" style="width: 100%;">
          <div class="d-flex justify-content-start align-items-center flex-row w-100">
            <a class="navbar-brand" href="#" alt="Home">
              <img src="@/assets/images/nav_bar/logo.png" class="img-fluid" />
            </a>
          </div>
          

          <div class="w-100 d-flex align-items-center" style="height: 100%'';">
            <ol class="breadcrumb ">
              <li class="breadcrumb-item"><a href="#">主頁</a></li>
              <li class="breadcrumb-item" aria-current="page"><router-link :to="{ name: 'GameSelect', params:{ id:this.Grade }}">{{ this.Grade }}年級 {{ Subjects[Subject] }}</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><a>{{this.GameID}}</a></li>
            </ol>
          </div>
        </div>
      </nav>
    </header>
    <section>
        <div class="row container-fluid mt-3">
            <div class="col-md-10">
              <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <canvas id="myChart" class="mx-auto"></canvas>
              </div>
              <!-- Other content for tabs goes here -->
              </div>
              </div>
              <div class="col-md-2 card sidebar d-flex row flex-direction-column align-items-stretch">
                <div class="card-body">
                  <p class="card-title h4">功能區</p>
                  <div class="d-grid gap-3">
                    <a><img src="@/assets/button2/previous.png"></a>
                    <a><img src="@/assets/button2/next.png"></a>
                    <a><img src="@/assets/button2/submit.png"></a>
                    <a><img src="@/assets/button2/start.png"></a>
                    <a><img src="@/assets/button2/restart.png"></a>
                    <a><img src="@/assets/button2/hint.png"></a>
                    <a><img src="@/assets/button2/info.png"></a>
                  </div>
                </div>
              </div>
        </div>
    </section>
</template>

<script>
import fetchJson from '@/utilitys/fetch-json.js';
export default {
  data() {
    return {
      GameID: "",
      Subject: "",
      Grade: "",
      Subjects:{
        Math: "數學",
        Chinese: "國語",
        Technology: "多元科技",
      },//NF Very Bad Code
      GameConfig: {},
      FakeButton:['previous','next','submit','start','restart','hint','info']
    }
  },
  created() {
    this.GameID = this.$route.params.id;
    this.Subject = this.$route.params.Subject;
    this.Grade = this.$route.params.Grade;
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
    doAction(){
      console.log("doAction");
    }
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
  height: 80vh;
}
.breadcrumb .breadcrumb-item {
  a {
    color: #000; /* 替換為你想要的顏色 */
    font-size: 1.2em;
  }

}
canvas {
  width: 95%;
  background-color: #fff;
  border-radius: 10px;
  border: #000 1px solid;
  height: 80vh;
}
</style>
