<template>
  <div class="box">
    <div class="title">
      <img class="arrow" src="../assets/images/left-arrow.png" />
      <p>我的预约</p>
    </div>


    <!-- tabs -->
    <mt-navbar class="tab" v-model="selected">
      <mt-tab-item class="tab-til" id="1">待审核</mt-tab-item>
      <mt-tab-item class="tab-til" id="2">待放行</mt-tab-item>
      <mt-tab-item class="tab-til" id="3">已放行</mt-tab-item>
    </mt-navbar>

	  <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- 待审核内容 -->
        <div class="audit">
          <div class="card-header">
            <p>待审核</p>
            <a href="">查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>单位：</p>
              </div>
              <p class="text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>随行：</p>
              </div>
              <p class="text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="text time" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

        <!-- 待审核内容 -->
        <div class="audit">
          <div class="card-header">
            <p>待审核</p>
            <a href="">查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>单位：</p>
              </div>
              <p class="text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>随行：</p>
              </div>
              <p class="text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="text time" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

        <!-- 待审核内容 -->
        <div class="audit">
          <div class="card-header">
            <p>待审核</p>
            <a href="">查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>单位：</p>
              </div>
              <p class="text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>随行：</p>
              </div>
              <p class="text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="text time" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <!-- 待放行内容 -->
        <div class="audit">
          <div class="card-header">
            <p class="daifangxing">待放行</p>
            <a href="">查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>单位：</p>
              </div>
              <p class="text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>随行：</p>
              </div>
              <p class="text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="text time" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

        <!-- 待放行内容 -->
        <div class="audit">
          <div class="card-header">
            <p class="daifangxing">待放行</p>
            <a href="">查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>单位：</p>
              </div>
              <p class="text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>随行：</p>
              </div>
              <p class="text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="text time" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

        <!-- 待放行内容 -->
        <div class="audit">
          <div class="card-header">
            <p class="daifangxing">待放行</p>
            <a href="">查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>单位：</p>
              </div>
              <p class="text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>随行：</p>
              </div>
              <p class="text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess">
                <div class="img-backgro"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="text time" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        
        <!-- 已放行内容 -->
        <div class="audit">
          <div class="card-header">
            <p class="yifangxing">已放行</p>
            <a class="yiwancheng" >查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="fulfill-text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>单位：</p>
              </div>
              <p class="fulfill-text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>随行：</p>
              </div>
              <p class="fulfill-text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="fulfill-text" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

        <!-- 已放行内容 -->
        <div class="audit">
          <div class="card-header">
            <p class="yifangxing">已放行</p>
            <a class="yiwancheng" >查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="fulfill-text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>单位：</p>
              </div>
              <p class="fulfill-text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>随行：</p>
              </div>
              <p class="fulfill-text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="fulfill-text" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

        <!-- 已放行内容 -->
        <div class="audit">
          <div class="card-header">
            <p class="yifangxing">已放行</p>
            <a class="yiwancheng">查看通行证</a>
          </div>
          
          <div class="content-box">
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>姓名：</p>
              </div>
              <p class="fulfill-text name">王长阳</p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>单位：</p>
              </div>
              <p class="fulfill-text">昆山XXXXX精密仪器股份有限公司 </p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>随行：</p>
              </div>
              <p class="fulfill-text">码云/ 马化腾/ 李彦宏</p>
            </div>
            <div class="content">
              <div class="mess fulfill-box">
                <div class="img-backgro fulfill-img"><img /></div>
                <p>来访日期：</p>
              </div>
              <p class="fulfill-text" style="font-size: 0.08rem;">2019/07/23 09:00～2019/07/25 18:00</p>
            </div>
          </div>

        </div>

      </mt-tab-container-item>
    </mt-tab-container>


    <!-- 底部栏 -->
    <div class="bottom-column">
      
      <router-link tag="a" to="/appointment"><img src="../assets/images/appointment.png" />我要预约</router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'MyReservation',
  data() {
    return {
      selected: '1'
    }
  }
}
</script>


<style lang="less">
.box {
  margin: 0;
  width: 100%;
  margin: 3.6rem 0;

  // 顶部
  .title {
  width: 100%;
  height: 3.6rem;
  text-align: center;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
  box-shadow: 0  0.1rem 0.1rem 0 rgba(0,0,0,0.12);
  position: fixed;
  top: 0;
  z-index: 10;

    .arrow {
      width: 2.2rem;
      height: 2.2rem;
      position: absolute;
      left: 1.4rem;
      margin-top: 0.6rem;
    }

    p {
      margin: 0;
      font-size: 1.7rem;
      display: inline-block;
      line-height: 3.6rem;
    }
  }

  // tab
  .tab {
    margin: 0 1.5rem;

    .tab-til {
      font-size: 2rem;
    }
    
  }

  .audit {
    margin: 1.3rem;

    .card-header {
      height: 4.5rem;
      width: 100%;
      background: #fa7f0c;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      color: #FFFFFF;

      // 待放行标签
      .daifangxing {
        background: #00A83B;
        box-shadow: 0 0.1rem 0.2rem 0 rgba(107, 245, 43, 0.75);
      }

      // 已放行标签
      .yifangxing {
        background: #ACACAC;
        box-shadow: 0 0.1rem 0.2rem 0 rgba(112, 112, 112, 0.315);
      }
      // 已放行
      .yiwancheng {
        text-decoration: line-through;
        color: #C2C2C2;
      }


      p {
        display: inline-block;
        margin: 0;
        width: 5rem;
        height: 2rem;
        background: #FF0000;
        box-shadow: 0 0.1rem 0.2rem 0 rgba(204,151,31,0.75);
        border-radius: 0 0 0.5rem 0.5rem;
        text-align: center;
        margin-left: 2rem;
        font-size: 1.3rem;
      }

      a {
        display: block;
        width: 6rem;
        line-height: 2rem;
        text-align: center;
        align-content: center;
        background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFF5E1 100%);
        border-radius: 0.4rem;
        float: right;
        text-decoration: none;
        color: #FF4F00;
        margin: 1.3rem 1.5rem 0 0;
      }
    }

    .content-box {
      border: 1px solid #DDDDDD;
      padding: 1rem;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;

      .content {
        margin-top: 0.5rem;
        display: flex;
        border-bottom: 1px solid #DDDDDD;
        justify-content: space-between;

        // 已放行
        .fulfill-box {
          color: #c2c2c2;

        }

        .mess {
          display: flex;
          
          .img-backgro {
            width: 1.7rem;
            height: 1.7rem;
            background: #F6CD80;
            border-radius: 50%;
            margin-bottom: 2px;
          }

          .fulfill-img {
            background: #C2C2C2;
          }

          p {
            margin-left: 5px; 
          }
        
        }

        

        .fulfill-text {
          color: #C2C2C2;
        }

        p {
          margin: 0;
        }

        .name {
          font-weight: bold;
          font-size: 1.5rem;
        }

        .time {
          color: #FF0000;
        }
      }
    }
  
  }

  // 底部栏
  .bottom-column {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    text-align: center;
    background: #FFFFFF;
    border-top: 0.1rem solid #DFDFDF;
    align-content: center;

    a {
      margin: 0;
      font-size: 1.8rem;
      display: flex;
      text-align: center;
      line-height: 3.5rem;
      justify-content: center;
      align-content: center;
      text-decoration: none;
      color: #232323;

      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
        margin-top: 1rem;
      }
    }
    
  }


}

</style>



