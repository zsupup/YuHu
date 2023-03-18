<template>
    <div>
      <div class="main-header">
        <el-select v-model="query">
          <el-option :value="1">1</el-option>
        </el-select>
        <el-button>查询</el-button>
      </div>
      <div class="main-content">
        <div class="flex top">
          <!-- 水库面积 -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th>水库常年面积</th>
                <td>亩</td>
              </tr>
              <tr>
                <th>水库最大面积</th>
                <td>亩</td>
              </tr>
              <tr>
                <th>水库最小面积</th>
                <td>亩</td>
              </tr>
            </table>
          </div>
          <!-- 阶段放养规格 -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th colspan="2" width="300px">阶段放养规格</th>
              </tr>
              <tr>
                <th>鲢鱼</th>
                <td>50</td>
              </tr>
              <tr>
                <th>鳙鱼</th>
                <td>50</td>
              </tr>
            </table>
          </div>
          <!-- 阶段放养存活率 -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th colspan="2" width="300px">阶段放养存活率</th>
              </tr>
              <tr>
                <th>鲢鱼</th>
                <td>50</td>
              </tr>
              <tr>
                <th>鳙鱼</th>
                <td>50</td>
              </tr>
            </table>
          </div>
          <!-- 阶段捕规格 -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th colspan="2" width="300px">阶段捕规格</th>
              </tr>
              <tr>
                <th>鲢鱼</th>
                <td>50</td>
              </tr>
              <tr>
                <th>鳙鱼</th>
                <td>50</td>
              </tr>
            </table>
          </div>
          <!-- 阶段投放时间 -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th colspan="2" width="300px">阶段投放时间</th>
              </tr>
              <tr>
                <th>鲢鱼</th>
                <td>2022-12-19 18:00:00</td>
              </tr>
              <tr>
                <th>鳙鱼</th>
                <td>2022-12-19 18:00:00</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="flex bottom">
          <!--  -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th>氨含量</th>
                <td>mg/L</td>
              </tr>
              <tr>
                <th>磷含量</th>
                <td>mg/L</td>
              </tr>
              <tr>
                <th>高锰酸钾</th>
                <td>mg/L</td>
              </tr>
              <tr>
                <th>叶绿素</th>
                <td>mg/L</td>
              </tr>
            </table>
          </div>
          <!-- 多样性 -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th>浮游动物多样性：</th>
                <td>暂定</td>
              </tr>
              <tr>
                <th>浮游植物多样性：</th>
                <td>暂定</td>
              </tr>
            </table>
          </div>
          <!-- 密度 -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th>浮游动物平均密度：</th>
                <td>cell/L</td>
              </tr>
              <tr>
                <th>浮游植物平均密度：</th>
                <td>个/L</td>
              </tr>
            </table>
          </div>
          <!-- 生物量 -->
          <div>
            <table border="1" cellspacing="0">
              <tr>
                <th>浮游动物平均生物量：</th>
                <td>mg/L</td>
              </tr>
              <tr>
                <th>浮游植物平均生物量：</th>
                <td>mg/L</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="flex footer">
          <div id="echarts1"></div>
          <div id="echarts2"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import echarts1 from '@/utils/echarts1'
  import echarts2 from '@/utils/echarts2'
  export default {
    data() {
      return {
        query: "",
      };
    },
    mounted() {
      this.initEcharts()
    },
    methods: {
      initEcharts() {
          echarts1()
          echarts2()
      }
    }
  };
  </script>
  