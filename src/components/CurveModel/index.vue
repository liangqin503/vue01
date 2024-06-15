<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div>
    <div class="headerContainerMain" style="margin: auto">
      <h1>编辑曲线模型</h1>
      <el-divider></el-divider>
    </div>
    <div id="main" style="width: 800px; height: 400px; margin: auto"></div>
    <!-- <div style="width: 800px; height: 400px; margin: auto" class="conMain"> -->
    <div class="containerMain" style="margin: auto">
      <el-form
        :inline="true"
        :model="formInline"
        :rules="rules"
        ref="formInline"
        class="demo-form-inline"
        style="margin-top: 3px"
      >
        <el-row>
          <span style="demo-block demo-zh-CN demo-input">曲线属性</span>
          <el-button
            style="float: right"
            @click="resetForm('formInline')"
            >重置</el-button
          >
        </el-row>
        <div class="">
          <el-form-item label="烟草品种" required style="margin-left: 47px" prop="region">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="烟草部位"
            style="float: right; margin-right: 86px"
            required
          >
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="">
          <el-form-item label="天气" required style="margin-left: 47px">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="海拔（米）"
            style="float: right; margin-right: 86px"
            required
          >
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="">
          <el-form-item label="成熟度" required style="margin-left: 47px">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="气候"
            style="float: right; margin-right: 86px"
            required
          >
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="">
          <el-form-item
            label="室外温度（°C）"
            required
            style="margin-left: 47px"
          >
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="种植环境"
            style="float: right; margin-right: 86px"
            required
          >
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-divider></el-divider>
        <el-row style="float: right">
          <el-button>取消</el-button>
          <el-button type="primary" @click="submitForm('')"
            >保存</el-button
          >
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<style >
.containerMain {
  width: 800px;
  height: 400px;
}
.headerContainerMain {
  margin-left: 8px;
  width: 800px;
}
.containerMain .OptionLabel {
  margin-top: 15px;
  margin-left: 2%;
}
.el-form-item__label {
  width: 125px;
}
</style>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import * as echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      formInline: {
        region: "",
      },
      rules: {
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },

      formInline: {
        user: "",
        region: "",
      },
      charts: "",
      opinionData: [
        "31",
        "32",
        "33",
        "34",
        "36",
        "37",
        "38",
        "40",
        "42",
        "45",
        "46",
        "48",
        "49",
        "50",
        "54",
        "55",
        "60",
        "60",
      ],
      opinionDataYel: [
        "30",
        "30",
        "31",
        "31.5",
        "32",
        "32",
        "33",
        "33",
        "33",
        "34",
        "34",
        "35",
        "35",
        "36",
        "36",
        "37",
        "38",
        "40",
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
      value2: [],
      specialSymbol: {
        color: "red",
      },
      leftOptionLabel: {
        marginTop: "5px",
        marginLeft: "9%",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        color: ["#4a86e8", "#6db84d"], //修改曲线的颜色
        title: {
          text: "曲线模型",
          textStyle: {
            //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontFamily: "Arial, Verdana, sans...",
          },
          left: "",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["近七日收益"],
        },
        //设置网格样式
        grid: {
          left: "10%",
          right: "10%",
          bottom: "3%",
          //   borderColor :"$012f4a",//边框颜色
          containLabel: true, //包括文字
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},//保存图片按钮
        //   },
        // },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          nameLocation: "middle",
          boundaryGap: false,
          data: [
            "00:00",
            "8:00",
            "16:00",
            "30:00",
            "44:00",
            "58:00",
            "71:00",
            "83:00",
            "95:00",
            "108:00",
            "122:00",
            "129:00",
            "147:00",
            "160:00",
            "172:00",
            "183:00",
            "194:00",
            "203:00",
          ],
          axisTick: {
            show: true, //去除刻度线
          },
          axisLine: {
            show: true, //去除轴线
            lineStyle: {
              color: "#4c9bfd", //x轴轴线颜色
            },
          },
          axisLabel: {
            interval: 1, //设置x轴显示一半
            color: "#4c9bfd", //x轴文本颜色
          },
        },
        yAxis: {
          name: "温度(℃)",
          type: "value",
          boundaryGap: false,
          axisLine: {
            show: true, //去除轴线
            lineStyle: {
              color: "black", //y轴轴线颜色
            },
            // z:2//层级
          },
          axisTick: {
            show: true, //去除刻度线
          },
          splitLine: {
            show: true,
            lineStyle: {
              show: true,
              type: "solid", // y轴分割线类型
              color: "#bfbfbf", //分割线颜色
            },
          },
        },
        series: [
          {
            name: "温度",
            type: "line",
            // stack: "x",数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
            data: this.opinionData,
            markArea: {
              //分区显示
              data: [
                [
                  {
                    name: "变黄期", // 标域名称
                    xAxis: "00:00",
                    itemStyle: {
                      color: "#FFFCE9",
                      opacity: 0.7, //透明度
                    },
                  },
                  {
                    xAxis: "58:00",
                  },
                ],
                [
                  {
                    name: "定色干叶区", // 标域名称
                    xAxis: "58:00",
                    itemStyle: {
                      color: "#D9F7DC",
                      opacity: 0.7, //透明度
                    },
                  },
                  {
                    xAxis: "129:00",
                  },
                ],
                [
                  {
                    name: "干筋期", // 标域名称
                    xAxis: "129:00",
                    itemStyle: {
                      color: "#E0E7E0",
                      opacity: 0.7, //透明度
                    },
                  },
                  {
                    xAxis: "203:00",
                  },
                ],
              ],
            },
          },
          {
            name: "湿度",
            type: "line",
            data: this.opinionDataYel,
          },
        ],
      });
    },
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.drawLine("main");
    });
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>