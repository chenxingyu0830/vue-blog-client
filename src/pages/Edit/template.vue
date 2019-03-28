<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"  maxlength="30"  @input="verifyTitle"></el-input>
    <p :class="titleActive">{{ title.length }} / 30</p>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea"  v-model="description" :autosize="{ minRows: 2, maxRows: 6}"
    maxlength="50"  @input="verifyDescription"></el-input>
    <p :class="descriptionActive">{{ description.length }} / 50</p>
    <p class="msg">限50个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea"  v-model="content" :autosize="{ minRows: 4, maxRows: 30}" 
    maxlength="500"  @input="verifyContent"></el-input>
    <p :class="contentActive">{{ content.length }} / 500</p>
    <p class="msg">限500个字</p>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Edit/template.less" lang="less"></style>
