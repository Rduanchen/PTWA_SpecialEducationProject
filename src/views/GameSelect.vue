<!-- PC 11/22 -->
<!-- This document wait for add js and vue Feature -->


<template>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark sticky-top">
        <div class="container-fluid" style="width: 100%;">
          <a class="navbar-brand" href="#" alt="Home">
            <img src="@/assets/images/nav_bar/logo.png" class="img-fluid" />
          </a>
          <div class="collapse navbar-collapse sticky-top" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 navbar-nav-scroll">
              <!-- <li class="nav-item">
                <a class="nav-link" aria-current="page" href="https://programtheworld.tw/donate/donate" alt="捐款" target="_blank">
                  <div class="nav1">
                    <img src="@/assets/images/nav_bar/donate.png" class="img-fluid" />
                  </div>
                </a>
              </li> -->
              <li class="nav-item">
                <!-- <a class="nav-link" href="#grade-title" alt="遊戲">
                  <img src="@/assets/images/nav_bar/sharing.png" class="img-fluid" />
                  
                </a> -->
                <!-- <p class="h1">數學</p> -->
                <a class="nav-link h1" onclick="ChangeSubject('Math')">數學</a>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link" href="https://programtheworld.tw/works/index" alt="耕耘" target="_blank">
                  <img src="@/assets/images/nav_bar/effort.png" class="img-fluid" />                  
                </a> -->
                <!-- <p class="h1">國語</p> -->
                <a class="nav-link h1" onclick="ChangeSubject('Chinese')">國語</a>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link" href="https://programtheworld.tw/about/about?pagetarget=us" alt="關於" target="_blank">
                  <img src="@/assets/images/nav_bar/about2.png" class="img-fluid" />                  
                </a> -->
                <!-- <p class="h1">自然科技</p> -->
                <a class="nav-link h1" onclick="ChangeSubject('Technology')">自然科技</a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="https://www.facebook.com/program.the.world" alt="facebook" target="_blank">
                  <img src="@/assets/images/nav_bar/facebook.png" class="img-fluid" />
                </a>
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">主頁</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{Subjects[Subject]}}</li>
        </ol>
      </nav>

    </header>

    <section class="GameSelectSection mt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 SideBar">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mt-2">請選擇科目</h5>
                        <div class="list-group mt-2" v-for="(items,key) in ShowInfo[Subject]" v-if="ShowInfo">
                          <a class="list-group-item list-group-item-action" v-on:click="SelectChapter(key)">{{ items.Title }}</a>
                        </div>
                      
                    </div>
                  </div>
                </div>
                <!-- NF 以for渲染-->
                <div class="col-9 container-fluid ItemFrame" v-if="a">
                  <div class="card Charpter mb-4 px-0">
                    <div class="card-body" v-for="items in ShowInfo[Subject][SelectedChapter].Section" v-if="ShowInfo">
                      <h5 class="card-title mb-3">{{ items.Title }}</h5>
                      <div class="row flex" style="overflow-x: auto;">
                        <div v-for="item in items.Games" class="col-md-3">
                          <div class="card GameCard mx-2 mb-2" style="width: 200px !important;">
                            <div class="card-body">
                              <img src="../assets/images/pics/cover_info.jpeg" class="card-img-top" alt="...">
                              <p class="h5 card-title mt-2">{{item.Name}}</p>
                              <p class="card-text">{{ item.Description }}</p>
                            </div>
                          </div>
                        </div>
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
import { setTransitionHooks } from 'vue';
export default {
  data() {
    return {
      ShowGrade: 0,
      Subject: "Math", //預設科目
      ShowInfo: null,//準備渲染的資料
      Subjects:{
        Math: "數學",
        Chinese: "國語",
        Technology: "多元科技",
      },
      SelectedChapter: null,
      a:false
      //定義科目種類
    };
  },
  created() {
    // 在這裡你可以存取 this.$route.params.id
    this.ShowGrade = this.$route.params.id;
    (async () => {
      const res = await fetchJson("/grade"+this.ShowGrade+".json");
      this.ShowInfo = res.data;
      console.log(this.ShowInfo["Math"]);
    })();
  },
  methods: {
    SelectChapter(key){
      this.SelectedChapter = String(key);
      console.log(this.SelectedChapter);
      this.a = true;
    },
    ChangeSubject(Subject){
      this.Subject = Subject;
    }
  },
}
</script>

<style scope lang="scss">
.navbar {
  background-color: #57B9D9; 
  height: 10vh; 
  width: 100%; 
  margin: 0;
  .navbar-brand {
    img{
        max-width: 70%
    }
  }
  img {
    max-width: 80%;
  }
  
}
.ItemFrame {
    height: 550px;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE/Edge */
}
.SideBar {
    // border-radius: 5%;
    // border: 1px solid black;
    height: 550px; 
    overflow-y: auto;
}
// .GameFrameGroup {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }

</style>