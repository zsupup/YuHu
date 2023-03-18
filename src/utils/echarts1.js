import * as echarts from "echarts";

// 水库单阶段放养、捕捞量
function echarts1() {
  //   const bulao = [10, 20, 30];
  //   const guiyu = [100, 200, 300];
  //   const yongyu = [20, 30, 40];
  let chartDom = document.getElementById("echarts1");
  let myChart = echarts.init(chartDom);
  const colors = ["#5470C6", "#91CC75", "#EE6666"];
  let option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {
      right: "25%",
    },
    toolbox: {
      feature: {
        dataView: { show: false, readOnly: false },
        restore: { show: false },
        saveAsImage: { show: false },
      },
    },
    legend: {
      data: ["鲢鱼放养质量", "鳙鱼放养质量", "捕捞量"],
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        // prettier-ignore
        data: ['水库1', '水库2', '水库3', '水库4', '水库5', '水库6', '水库7']
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "鲢鱼放养质量",
        position: "right",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0],
          },
        },
        axisLabel: {
          formatter: "{value} kg",
        },
      },
      {
        type: "value",
        name: "鳙鱼放养质量",
        position: "right",
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[1],
          },
        },
        axisLabel: {
          formatter: "{value} kg",
        },
      },
      {
        type: "value",
        name: "捕捞量",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[2],
          },
        },
        axisLabel: {
          formatter: "{value}kg",
        },
      },
    ],
    series: [
      {
        name: "鲢鱼放养质量",
        type: "bar",
        data: [1500, 3000, 2000, 1500, 1600, 2010, 2500],
      },
      {
        name: "鳙鱼放养质量",
        type: "bar",
        yAxisIndex: 1,
        data: [1500, 3000, 2000, 1500, 1600, 2010, 2500],
      },
      {
        name: "捕捞量",
        type: "line",
        yAxisIndex: 2,
        data: [1500, 3000, 32000, 1500, 1600, 4010, 50000],
      },
    ],
  };

  option && myChart.setOption(option);
}

export default echarts1;
