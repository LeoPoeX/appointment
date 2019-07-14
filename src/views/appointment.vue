<template>
  <div class="index-box">

    <!-- 头部 -->
    <mt-header title="预 约" style="background-image: linear-gradient(-180deg, #FFFFFF 0%, #FFFDF8 100%);
box-shadow: 0 1px 1px 0 rgba(0,0,0,0.12); color: #333333; font-size: 1.7rem;">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="details">
      <div class="yuyueTitle">预约详情</div>
      <div class="visitor">
        <div class="danhao">
          <div>
            <p>单号：</p>
            <p class="num">YY19000145</p>
          </div>
          <div class="people">
            <p>人数：</p>
            <p class="num">4 人</p>
          </div>
        </div>

        <div class="GoTime">
          <input type="text" placeholder="到达（必填）" />
          <input type="text" placeholder="离开（必填）" />
        </div>

        <div class="receiver">
          <input type="text" placeholder="接待人（必填）" />
          <input type="text" placeholder="接待人电话（必填）" />
        </div>

        <div class="content">
          <div class="img-backgro"><img /></div>
          <input type="text" placeholder="来访姓名（必填）" />
        </div>

        <div class="content">
          <div class="img-backgro"><img /></div>
          <input type="text" placeholder="电话（必填）" />
        </div>

        <div class="content">
          <div class="img-backgro"><img /></div>
          <input type="text" placeholder="职位（必填）" />
        </div>

        <div class="content">
          <div class="img-backgro"><img /></div>
          <input type="text" placeholder="公司（必填）" />
        </div>

        <div class="content">
          <div class="img-backgro"><img /></div>
          <input type="text" placeholder="车牌（选填）" />
        </div>

        <div class="reasons">
          <p>选择来访事由：</p>
          <select>
            <option value ="供应商来访">供应商来访</option>
            <option value ="商务交流">商务交流</option>
            <option value="客户来访">客户来访</option>
            <option value="技术交流">技术交流</option>
            <option value="其他">其他</option>
          </select>
        </div>

      </div>
    </div>

  </div>
</template>


<script>
export default {
  
}
</script>


<style lang="less">
.index-box {

  .details {
    margin: 2rem 1.3rem 1.3rem 1.3rem;
    border: 1px solid #D6D6D6;
    border-radius: 10px;
    
    .yuyueTitle {
      line-height: 4rem;
      padding-left: 1rem;
      font-size: 1.4rem;
      letter-spacing: 1.56px;
      border-bottom: 1px solid #ECECEC;
    }

    .visitor {
      padding: 1rem 1.3rem;

      .danhao {
        background: #FFFAF5;
        display: flex;
        line-height: 3rem;
        font-size: 1.4rem;

        p {
          margin: 0;
          display: inline-block;
        }

        .people {
          margin-left: 4rem;
        }

        .num {
          color: #FF8C09;
        }
      }

      .GoTime {
        display: flex;

        input {
          width: 49%;
          line-height: 3rem;
          border: 0;
          background: #FFFAF5;
          margin-top: 1rem;
          margin-left: 2%;
          border-bottom: 0.5px solid #DEDEDE;

          &:first-child {
            margin-left: 0;
          }
        }
      }

      .receiver {
        display: flex;

        input {
          width: 49%;
          line-height: 3rem;
          border: 0;
          background: #FFFAF5;
          margin-top: 1rem;
          margin-left: 2%;
          border-bottom: 0.5px solid #DEDEDE;

          &:first-child {
            margin-left: 0;
          }
        }
      }

      .content {
        display: flex;
        margin-top: 1rem;

        .img-backgro {
          width: 1.7rem;
          height: 1.7rem;
          background: #F6CD80;
          border-radius: 50%;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          border: 0;
          margin-left: 5px;
          border-bottom: 0.5px solid #DEDEDE;
        }
      }

      .reasons {
        display: flex;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;

        p {
          margin: 0;
          color: #999999;
          font-size: 1.4rem;
        }

        select {
          border: none;
          outline: none;
          width: 8.2rem;
          border-bottom: 0.5px solid #DEDEDE;
        }
      }
    
    }
  }

}

</style>

