<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-btn text href="/docs" rounded>文獻</v-btn>
      <v-btn text href="/about" rounded>關於</v-btn>
      <v-btn text href="/price" rounded>定價</v-btn>
      <v-btn text href="https://github.com/eadai" rounded>Github</v-btn>
      <v-btn text href="/contact" rounded>聯繫</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- 頁面主要內容 -->
    <v-main>
      <v-container class="text-center" style="height: 30vh;">
        <!-- 頂部至中部文字 -->
        <v-row class="fill-height" align="center" justify="center">
          <v-col>
            <h1>輕鬆地為你的企業產出高質量的數據分析報表</h1>
          </v-col>
        </v-row>

        <!-- 中間大按鈕 -->
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-btn large color="primary" href="/dashboard" rounded size="x-large">免費試用</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- 底部信息 -->
    <v-footer app>
      <v-col class="text-center" cols="12">
        國立宜蘭大學 113-1 大數據分析與智慧運算 期末專題報告 第四組 指導教授 : 吳政瑋
        <br>
        團隊成員 : B1143015 林宣佑 B1143027 陳伯豪 B1143028 詹朝成 B1143036 黃啟庭 B1043006 姜政宇
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
h1 {
  color:rgb(23, 255, 93);
}
</style>
