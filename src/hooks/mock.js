import { ref } from "vue";
export default function mock() {
  let legendData = ref([
    "库首网内",
    "库首网外",
    "库中网内",
    "库中网外",
    "库尾网内",
    "库尾网外",
  ]);

  let legendData2 = ref(["网内", "网外"]);

  let xAxisData = ref(["一季度", "二季度", "三季度", "四季度"]);

  let seriesData = ref([
    { key: "库首网内", data: [320, 332, 301, 334, 390] },
    { key: "库首网外", data: [220, 182, 191, 234, 290] },
    { key: "库中网内", data: [150, 232, 201, 154, 190] },
    { key: "库中网外", data: [98, 77, 101, 99, 40] },
    { key: "库尾网内", data: [98, 77, 101, 99, 40] },
    { key: "库尾网外", data: [100, 200, 300, 150] },
  ]);

  let seriesData2 = ref([
    { key: "网内", data: [320, 332, 301, 334, 390] },
    { key: "网外", data: [220, 182, 191, 234, 290] },
  ]);

  return {
    legendData,
    xAxisData,
    seriesData,
    legendData2,
    seriesData2,
  };
}
