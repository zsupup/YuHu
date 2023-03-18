<template>
  <div>
    <div class="main-header">
      <el-select v-model="query" placeholder="请选择水库">
        <el-option :value="1">1</el-option>
      </el-select>
      <el-select
        v-model="query"
        placeholder="请选择阶段"
        class="margin-left-16"
      >
        <el-option :value="1">1</el-option>
      </el-select>
      <el-button>查询</el-button>
    </div>
    <div class="main-content2 flex" style="flex-wrap: wrap">
      <div style="width: 100%" class="flex">
        <div class="relative echarts-box">
          <div id="echarts3" class="echarts"></div>
          <span class="absolute text">浮游植物数量变化（104cell/L）</span>
        </div>
        <div class="relative echarts-box">
          <div id="echarts4" class="echarts"></div>
          <span class="absolute text">浮游生物数量变化（mg/L）</span>
        </div>
        <div class="relative echarts-box">
          <div id="echarts5" class="echarts"></div>
          <span class="absolute text">浮游动物数量变化（ind/L）</span>
        </div>
        <div class="relative echarts-box">
          <div id="echarts9" class="echarts"></div>
          <span class="absolute text">总磷变化</span>
        </div>
      </div>
      <div style="width: 100%" class="flex">
        <div class="relative echarts-box">
          <div id="echarts6" class="echarts"></div>
          <span class="absolute text">浮游动物生物量变化（mg/L）</span>
        </div>
        <div class="relative echarts-box">
          <div id="echarts7" class="echarts"></div>
          <span class="absolute text">浮游植物多样性变化</span>
        </div>
        <div class="relative echarts-box">
          <div id="echarts8" class="echarts"></div>
          <span class="absolute text">浮游动物多样性变化</span>
        </div>
        <div class="relative echarts-box">
          <div id="echarts10" class="echarts"></div>
          <span class="absolute text">总氮变化</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts3 from "@/utils/echarts3";
import mock from "@/hooks/mock";
export default {
  setup() {
    const { legendData, xAxisData, seriesData, legendData2, seriesData2 } =
      mock();
    return {
      legendData,
      xAxisData,
      seriesData,
      legendData2,
      seriesData2,
    };
  },
  data() {
    return {
      query: "",
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      echarts3("echarts3", this.legendData, this.xAxisData, this.seriesData);
      echarts3("echarts4", this.legendData, this.xAxisData, this.seriesData);
      echarts3("echarts5", this.legendData, this.xAxisData, this.seriesData);
      echarts3("echarts6", this.legendData, this.xAxisData, this.seriesData);
      echarts3("echarts7", this.legendData, this.xAxisData, this.seriesData);
      echarts3("echarts8", this.legendData, this.xAxisData, this.seriesData);
      echarts3("echarts9", this.legendData2, this.xAxisData2, this.seriesData2);
      echarts3(
        "echarts10",
        this.legendData2,
        this.xAxisData2,
        this.seriesData2
      );
    },
  },
};
</script>
