<template>
    <header>
      <nav class="container navbar navbar-expand-md navbar-dark sticky-top">
        <div class="container-fluid d-flex flex-column justify-content-start align-items-start" style="width: 100%;">
          <div class="d-flex justify-content-start align-items-center flex-row w-100">
            <a class="navbar-brand" href="#" alt="Home">
              <img src="@/assets/images/nav_bar/logo.png" class="img-fluid" />
            </a>
          </div>
          <div class="w-100">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">主頁</a></li>
              <li class="breadcrumb-item active" aria-current="page">{{Subjects[Subject]}}</li>
            </ol>
          </div>
        </div>
      </nav>
    </header>
    <section>
        <div class="row container-fluid mt-3">
            <div class="col-md-9">
              <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Game Display Frame Content</div>
              <!-- Other content for tabs goes here -->
              </div>
              </div>
              <div class="col-md-3 card sidebar">
                <div class="card-body">
                  <p class="card-title">功能區</p>
                  <div class="d-grid gap-2" v-for="item in FakeButton">
                    <button class="btn btn-primary mt-3" type="button">{{FakeFunction[item]}}</button>
                  </div>
                </div>
              </div>
        </div>
    </section>
</template>

<script>
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
      FakeFunction: {
        'previou': "上一題",
        'next': "下一題",
        'submit': "提交",
        'start': "開始",
        'restart': "重新開始",
        'hint': "提示",
        'teach':"教學"
      },
      FakeButton:['previou','next','submit','start','restart','hint','teach']
    }
  },
  created() {
    this.GameID = this.$route.params.id;
    this.Subject = this.$route.params.Subject;
    this.Grade = this.$route.params.Grade;
    console.log(this.GameID);
    console.log(this.Subject);
    console.log(this.Grade);
    console.log(this.FakeFunction['previou']);
  }
}
</script>
<style scoped lang="scss">
header{
  background-color: #F19C79
}
.navbar {
  background-color: #F19C79; 
  height: 15vh; 
  .navbar-brand {
    img{
        max-width: 70%
    }
  }
  img {
    max-width: 80%;
  } 
}
</style>
