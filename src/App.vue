<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main" class="main">
      <router-view />
      <el-backtop target="#main" bottom="15">
        <div class="upicon">UP</div>
      </el-backtop>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>



<style lang="less" >
@import "./assets/common.less";

html,
body,
#app {
  height: 100%;
}

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "main   main   main  "
    "footer footer footer";
}

#header {
  grid-area: header;
  padding-left: 12%;
  padding-right: 12%;
}

#main {
  grid-area: main;
  word-break: break-all;
  overflow: auto;
  padding-left: 12%;
  padding-right: 12%;
}

#footer {
  grid-area: footer;
  padding-left: 12%;
  padding-right: 12%;
}

.upicon {
  height: 100%;
  width: 100%;
  border-radius: 20%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 10px auto 10px;

    #header,
    #footer {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
