<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark sticky-top">
        <div class="container-fluid" style="width: 100%;">
          <a class="navbar-brand" href="#" alt="Home">
            <img src="@/assets/images/nav_bar/logo.png" class="img-fluid" style="max-width: 90%;" />
          </a>
          <div class="collapse navbar-collapse sticky-top" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="https://programtheworld.tw/donate/donate" alt="捐款" target="_blank">
                  <div class="nav1">
                    <img src="@/assets/images/nav_bar/donate.png" class="img-fluid" />
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#grade-title" alt="遊戲">
                  <img src="@/assets/images/nav_bar/sharing.png" class="img-fluid" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://programtheworld.tw/works/index" alt="耕耘" target="_blank">
                  <img src="@/assets/images/nav_bar/effort.png" class="img-fluid" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://programtheworld.tw/about/about?pagetarget=us" alt="關於" target="_blank">
                  <img src="@/assets/images/nav_bar/about2.png" class="img-fluid" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.facebook.com/program.the.world" alt="facebook" target="_blank">
                  <img src="@/assets/images/nav_bar/facebook.png" class="img-fluid" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <header class="header container-fluid">
    <div class="container d-flex align-items-center justify-content-start h-100 mb-5">
      <div class="text-end text-white content">
        <p class="h1">網站名稱</p>
        <p class="h2">用遊戲翻轉教育，在遊戲中成長</p>
      </div>
    </div>
  </header>

  <section class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="row">
      <div class="col-6">
        <img src="../assets/images/pics/cover_story.png" style="object-fit: cover;" class="w-100" width="400">
      </div>
      <div class="col-6 d-flex flex-column justify-content-center ">
        <div class="row d-flex justify-content-start align-content-start flex-column">
          <p class="h1">請選擇年級</p>
          <p>選擇年級以及進入遊戲</p>
        </div>
        <div class="row GradeSelectMenu">
          <div class="col-2">
            <router-link :to="{ name: 'GameSelect', params: { id: 1 } }" class="submenu-link-block">
              <img src="@/assets/images/grade_btn/grade1-3.png" class="img-fluid" alt="一年遊戲">
            </router-link>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'GameSelect', params: { id: 2 } }" alt="二年遊戲" class="submenu-link-block">
              <img src="@/assets/images/grade_btn/grade2-3.png" class="img-fluid" >
            </router-link>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'GameSelect', params: { id: 3 } }" alt="三年遊戲" class="submenu-link-block">
              <img src="@/assets/images/grade_btn/grade3-3.png" class="img-fluid" >
            </router-link>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'GameSelect', params: { id: 4 } }" alt="四年遊戲" class="submenu-link-block">
              <img src="@/assets/images/grade_btn/grade4-3.png" class="img-fluid" >
            </router-link>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'GameSelect', params: { id: 5 } }" alt="五年遊戲" class="submenu-link-block">
              <img src="@/assets/images/grade_btn/grade5-3.png" class="img-fluid" >
            </router-link>
          </div>
          <div class="col-2">
            <router-link :to="{ name: 'GameSelect', params: { id: 6 } }" alt="六年遊戲" class="submenu-link-block">
              <img src="@/assets/images/grade_btn/grade6-3.png" class="img-fluid" >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--NF 頁尾設定 -->
  <section class="">
  <footer class="text-center text-white" style="background-color: #0a4275;">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright:
      <a class="text-white" href="https://programtheworld.tw/">programtheworld.tw</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</section>
 
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.navbar {
  background-color: #F19C79;
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

.header {
  display: flex;
  height: 90vh;
  position: relative; 
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/pics/cover_info.jpeg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: brightness(50%);
  z-index: -1; /* 確保背景圖片位於內容之後 */
}
.content {
  z-index: 1; /* 將這個元素放置於 ::before 元素上方 */
}


.GradeSelectMenu {
  .col-2 {  
    transition: transform 0.3s ease;
    img {
      transition: transform 0.3s ease;
    }
    &:hover {
      transform: scale(1.1);
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>