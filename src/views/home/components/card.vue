<template>
  <el-row :gutter="12">
    <el-col :span="6">
      <el-card shadow="hover" style="height: 110px">
        <img class="keda" src="../../../assets/home/keda.jpeg" alt="" />
        <span class="span-ya">蔡达鸭</span>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover" style="height: 110px">
        <img class="miao" src="../../../assets/home/miao.jpg" alt="" />
        <span class="span-wa">喵酱</span>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover" style="height: 110px">
        <img class="miaowa" src="../../../assets/home/miaowa.jpg" alt="" />
        <span class="span-wa">妙蛙种子</span>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover" style="height: 110px">
        <img class="pika" src="../../../assets/home/pika.jpg" alt="" />
        <span class="span-ya">漩涡鸣丘</span>
      </el-card>
    </el-col>
  </el-row>
</template>
<script></script>

<style scoped lang="scss">
  .keda,
  .pika {
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
  .miao,
  .miaowa {
    width: 120px;
    height: 120px;
    margin-left: -15px;
    overflow: hidden;
  }

  .span-ya {
    position: relative;
    top: -40px;
    margin: 20px;
  }
  .span-wa {
    position: relative;
    top: -60px;
  }
</style>
