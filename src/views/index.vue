<template>
  <div id="index2">
    <div class="header">
      <div v-for="item in headers" :key="item.title">
        <div class="button" :class="{ active }" @click="goPages(item.url)">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      headers: [
        {
          title: "基本水文信息",
          url: "/basic",
        },
        {
          title: "水生态修复效应",
          url: "/hydroecology",
        },
        {
          title: "阶段效益数据",
          url: '/stageBenefits',
        },
        {
          title: "阶段数据对比",
        },
        {
          title: "效益预测",
        },
      ],
    };
  },
  mounted() {
    this.cancelLoading();
  },
  methods: {
    goPages(url) {
      this.$router.push(url);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="less">
@import "../assets/less/index.less";
</style>
