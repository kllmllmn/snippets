module.exports = {
  htmlStr: `(<!DOCTYPE html>
<html>
  <head>
    <meta charset="gbk" />
    <meta name="author" content="Tencent-CP" />
    <meta http-equiv="x-ua-compatible" content="IE=edge" />
    <meta name="Copyright" content="Copyright (c) 2006-2015 TENCENT" />
    <meta
      name="description"
      content="王者荣耀英雄介绍,全部英雄大全,英雄属性，英雄图片,英雄技能定位，英雄故事，英雄图文视频攻略，助您荣登最强王者宝座!"
    />
    <meta
      name="keywords"
      content="王者荣耀英雄,王者荣耀英雄介绍,王者荣耀英雄大全,王者荣耀英雄资料"
    />
    <meta name="applicable-device" content="pc" />
    <link rel="alternate" href="https://pvp.qq.com/m/m201706/heroList.shtml" />
    <title>英雄资料列表页-英雄介绍-王者荣耀官方网站-腾讯游戏</title>
    <link
      href="//game.gtimg.cn/images/yxzj/web201706/css/comm-v1.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="css/hero.css" />
  </head>

  <body class="old-header">
    <div id="header" class="header tganime-header-fix">
      <div class="header-inner">
        <h1>
          <a
            href="//pvp.qq.com/"
            class="logo pa"
            title="王者荣耀"
            onclick="PTTSendClick('headNav','logo','logo');"
            >王者荣耀</a
          >
        </h1>
        <!--=========主导航==========-->
        <ul class="main-nav clearfix">
          <li>
            <a
              href="/web201605/herolist.shtml"
              target="_blank"
              title="游戏资料"
              onclick="PTTSendClick('link','data','游戏资料');"
              >游戏资料<em>DATA</em></a
            >
          </li>
          <li>
            <a
              href="/raiders/"
              target="_blank"
              title="内容中心"
              onclick="PTTSendClick('link','strategy','内容中心');"
              >内容中心<em>CONTENTS</em></a
            >
          </li>
          <li>
            <a
              href="https://kpl.qq.com/?ADTAG=pvp.index.nav.matchcenter"
              target="_blank"
              title="赛事中心"
              onclick="PTTSendClick('link','match','赛事中心');"
              >赛事中心<em>MATCH</em></a
            >
          </li>
          <li>
            <a
              href="/cp/a20171023pvppc/"
              target="_blank"
              title="百态王者"
              onclick="PTTSendClick('link','CULTURE','百态王者');"
              >百态王者<em>CULTURE</em></a
            >
          </li>
          <li>
            <a
              href="javascript:void(0)"
              title="社区互动"
              onclick="PTTSendClick('link','Community','社区互动');"
              >社区互动<em>COMMUNITY</em></a
            >
          </li>
          <li>
            <a
              href="javascript:void(0)"
              title="玩家支持"
              onclick="PTTSendClick('link','player','玩家支持');"
              >玩家支持<em>PLAYER</em></a
            >
          </li>
          <li>
            <a
              href="javascript:void(0)"
              title="IP新游"
              onclick="PTTSendClick('link','ipnewgame','IP新游');"
              >IP新游<em>NEW GAMES</em></a
            >
          </li>
        </ul>
      </div>
      <!--=====二级导航=====-->
      <div id="J_subNav" class="sub-nav" style="visibility: hidden">
        <ul class="sub-nav-inner">
          <li class="down-nav">
            <a
              href="/cp/a20170829bbgxsm/index.html"
              target="_blank"
              title="版本介绍"
              onclick="PTTSendClick('link','version','版本介绍');"
              >版本介绍</a
            >
            <a
              href="/web201605/introduce.shtml"
              target="_blank"
              title="游戏介绍"
              onclick="PTTSendClick('link','gameinfomation','游戏介绍');"
              >游戏介绍</a
            >
            <a
              href="/web201605/herolist.shtml"
              target="_blank"
              title="英雄资料"
              onclick="PTTSendClick('link','hero','英雄资料');"
              >英雄资料</a
            >
            <a
              href="/coming/v2/"
              target="_blank"
              title="爆料站"
              onclick="PTTSendClick('link','data_coming','爆料站');"
              ><i class="icon-hot"></i>爆料站</a
            >
            <a
              href="/ip/index.html?adtag=pvp.pc"
              target="_blank"
              title="世界观体验站"
              onclick="PTTSendClick('link','data_story','世界观体验站');"
              ><i class="icon-fans"></i>世界观体验站</a
            >
            <a
              href="/web201605/wallpaper.shtml"
              target="_blank"
              title="游戏壁纸"
              onclick="PTTSendClick('link','wallpaper','游戏壁纸');"
              >游戏壁纸</a
            >
          </li>
          <li class="down-nav">
            <a
              href="/raiders/"
              target="_blank"
              title="攻略中心"
              onclick="PTTSendClick('link','strategy_center','攻略中心');"
              >攻略中心</a
            >
            <a
              href="/sucai/"
              target="_blank"
              title="开放素材库"
              onclick="PTTSendClick('link','strategy_sucai','开放素材库');"
              >开放素材库</a
            >
            <a
              href="https://yyds.qq.com/creation"
              target="_blank"
              title="内容共创平台"
              onclick="PTTSendClick('link','creation','内容共创平台');"
              ><i class="icon-fans"></i>内容共创平台</a
            >
          </li>
          <li class="down-nav">
            <a
              href="/match/kpl/kingproleague/index.html"
              target="_blank"
              title="KPL职业联赛"
              onclick="PTTSendClick('link','match_KPL','KPL');"
              ><i class="icon-hot"></i>KPL</a
            >
            <a
              href="/cp/kic2022/index.html"
              target="_blank"
              title="世界冠军杯"
              onclick="PTTSendClick('link','match_worldcup','世界冠军杯');"
              ><i class="icon-hot"></i>世界冠军杯</a
            >
            <a
              href="/match/WCC/KCC2021S2/index.html"
              target="_blank"
              title="挑战者杯"
              onclick="PTTSendClick('link','match_kcc','挑战者杯');"
              ><i class="icon-fans"></i>挑战者杯</a
            >
            <a
              href="/cp/a20220328qgds/index.shtml"
              target="_blank"
              title="全国大赛"
              onclick="PTTSendClick('link','match_city','全国大赛');"
              ><i class="icon-hot"></i>全国大赛</a
            >
            <a
              href="/match/KWO/index.html"
              target="_blank"
              title="女子公开赛"
              onclick="PTTSendClick('link','match_kwo','女子公开赛');"
              >女子公开赛</a
            >
            <a
              href="/match/kgl/index.html"
              target="_blank"
              title="K甲联赛"
              onclick="PTTSendClick('link','match_Kjia','K甲联赛');"
              >K甲联赛</a
            >
            <a
              href="/cp/a20220315open/index.shtml"
              target="_blank"
              title="王者高校联赛"
              onclick="PTTSendClick('link','match_gaoxiao','王者高校联赛');"
              >高校联赛</a
            >
            <a
              href="/saibao/index.shtml"
              target="_blank"
              title="王者赛宝"
              onclick="PTTSendClick('link','match_saibao','saibao');"
              ><i class="icon-fans"></i>王者赛宝</a
            >
            <a
              href="/matchdata/index.html"
              target="_blank"
              title="赛事数据"
              onclick="PTTSendClick('link','match_datamore','赛事数据');"
              ><i class="icon-fans"></i>赛事数据</a
            >
          </li>
          <li class="down-nav">
            <a
              href="/memory/index.html"
              target="_blank"
              title="荣耀·传承"
              onclick="PTTSendClick('link','culture','荣耀·传承');"
              >荣耀·传承</a
            >
            <a
              href="/history/"
              target="_blank"
              title="王者文化站"
              onclick="PTTSendClick('link','history','王者文化站');"
              >王者文化站</a
            >
            <a
              href="/wonder/"
              target="_blank"
              title="万千世界"
              onclick="PTTSendClick('link','wonder','万千世界');"
              >万千世界</a
            >
            <a
              href="/cp/a20190102starlight/index.html"
              target="_blank"
              title="星光殿堂"
              onclick="PTTSendClick('link','star','星光殿堂');"
              >星光殿堂</a
            >
            <a
              href="/cp/a20210427ipgzzt/"
              target="_blank"
              title="IP共创计划"
              onclick="PTTSendClick('link','ip','IP共创计划');"
              ><i class="icon-fans"></i>IP共创计划</a
            >
            <a
              href="//igame.qq.com/newcss/pvp/privilegePC/index.html"
              target="_blank"
              title="商户特权"
              onclick="PTTSendClick('link','wifi','商户特权');"
              >商户特权</a
            >
            <a
              href="https://wangzhe.recogame.com/wangzhe.html"
              target="_blank"
              title="龙翼王者卡"
              onclick="PTTSendClick('link','wangka','龙翼王者卡');"
              ><i class="icon-fans"></i>龙翼王者卡</a
            >
          </li>
          <li class="down-nav">
            <a
              href="//pvp.qq.com/hdy/p1/index.html"
              title="创意互动营"
              onclick="PTTSendClick('link','creative_community','创意互动营');"
              ><i class="icon-hot"></i>创意互动营</a
            >
            <a
              href="javascript:void(0)"
              title="王者营地"
              onclick="TGDialogS('zhushou');PTTSendClick('link','Community_tools','王者营地');"
              ><i class="icon-hot"></i>王者营地</a
            >
            <a
              href="javascript:void(0)"
              title="微信圈子"
              onclick="TGDialogS('weiquan');PTTSendClick('link','Community_wx','微信圈子');"
              >微信圈子</a
            >
            <a
              href="//weibo.com/heromoba"
              target="_blank"
              title="官方微博"
              onclick="PTTSendClick('link','Community_wb','官方微博');"
              >官方微博</a
            >
            <a
              href="javascript:void(0)"
              title="微信公众号"
              onclick="TGDialogS('weixin');PTTSendClick('link','Community_wxgzh','微信公众号');"
              >微信公众号</a
            >
            <a
              href="javascript:void(0)"
              title="手Q订阅号"
              onclick="TGDialogS('qq');PTTSendClick('link','Community_qqdyh','手Q订阅号');"
              >手Q订阅号</a
            >
          </li>
          <li class="down-nav">
            <a
              href="https://game.qq.com/act/a20210705protect/index.html"
              target="_blank"
              title="腾讯游戏防沉迷"
              onclick="PTTSendClick('link','player_addict','腾讯游戏防沉迷');"
              >腾讯游戏防沉迷</a
            >
            <a
              href="https://jiazhang.qq.com/jz/home.html"
              target="_blank"
              title="成长守护平台"
              onclick="PTTSendClick('link','player_watch','成长守护平台');"
              ><i class="icon-guard"></i>成长守护平台</a
            >
            <a
              href="/cp/a20190909talk/index.html"
              target="_blank"
              title="对局环境情报站"
              onclick="PTTSendClick('link','player_drj','对局环境情报站');"
              >对局环境情报站</a
            >
            <a
              href="javascript:void(0)"
              title="客服专区"
              onclick="TGDialogS('kefu');PTTSendClick('link','player_kf','客服专区');"
              >客服专区</a
            >
            <a
              href="/webplat/info/news_version3/15592/24091/24092/24095/m15241/201508/370256.shtml"
              title="礼包兑换"
              onclick="PTTSendClick('link','player_feedback','礼包兑换');"
              target="_blank"
              >礼包兑换</a
            >
            <a
              href="https://tool.helper.qq.com/v3/wzry/official_website/index.html"
              title="自助服务"
              onclick="PTTSendClick('link','player_service','自助服务');"
              target="_blank"
              >自助服务</a
            >
          </li>
          <li class="down-nav">
            <a
              href="https://world.qq.com/"
              target="_blank"
              title="世界"
              onclick="PTTSendClick('link','shijie','世界');"
              ><i class="icon-fans"></i>王者荣耀·世界</a
            >
            <a
              href="https://poxiao.qq.com?ADTAG=pvp.nav.hokpc"
              target="_blank"
              title="破晓"
              onclick="PTTSendClick('link','poxiao','破晓');"
              ><i class="icon-fans"></i>代号:破晓</a
            >
            <a
              href="https://pvp.qq.com/web201605/newsDetail.shtml?G_Biz=18&tid=488378"
              target="_blank"
              title="启程"
              onclick="PTTSendClick('link','qicheng','启程');"
              ><i class="icon-fans"></i>代号:启程</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
      <!-- 内容区域1 S -->
      <div class="zkcontent">
        <div class="zk-con-box">
          <!-- 位置信息 S -->
          <div class="zk-con1 zk-con">
            <div class="con1-pos">
              <i class="tb1 icon fl"></i>
              <a href="/" target="_blank" title="王者荣耀首页">王者荣耀首页</a>
              <span>></span>
              <label>英雄介绍</label>
            </div>
            <h1 class="herolist-title">英雄介绍</h1>
            <ul class="herolist-nav">
              <li class="current">
                <a href="herolist.shtml" target="_blank">英雄</a>
              </li>
              <li><a href="item.shtml" target="_blank">局内道具</a></li>
              <li><a href="summoner.shtml" target="_blank">召唤师技能</a></li>
            </ul>
          </div>
          <!-- 位置信息 E -->
          <!-- 英雄介绍 S -->
          <div class="herolist-box">
            <div class="clearfix herolist-types">
              <ul class="types-left">
                <li>综合</li>
                <li>职业</li>
              </ul>
              <ul class="clearfix types-ms">
                <li data-ptype="10">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>本周免费</label>
                </li>
                <li data-ptype="11">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>新手推荐</label>
                </li>
              </ul>
              <ul class="clearfix types-ms">
                <li class="current" data-type="0">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>全部</label>
                </li>
                <li data-type="3">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>坦克</label>
                </li>
                <li data-type="1">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>战士</label>
                </li>
                <li data-type="4">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>刺客</label>
                </li>
                <li data-type="2">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>法师</label>
                </li>
                <li data-type="5">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>射手</label>
                </li>
                <li data-type="6">
                  <span class="ms-radio"><i class="i"></i></span>
                  <label>辅助</label>
                </li>
              </ul>
              <div class="herosearch">
                <input
                  type="text"
                  id="search"
                  name="search"
                  class="herosearch-input"
                  value="请输入你想要搜索的英雄名"
                />
                <a
                  href="javascript:void(0);"
                  class="herosearch-icon"
                  title="点击搜索"
                  id="searchBtn"
                ></a>
              </div>
            </div>
            <div class="herolist-content">
              <p id="JErroTips" style="display: none">
                输入英雄不存在，请重新输入
              </p>
              <ul class="herolist clearfix">
                <li>
                  <a href="herodetail/506.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
                      width="91"
                      height="91"
                      alt="云中君"
                    />云中君</a
                  >
                </li>
                <li>
                  <a href="herodetail/505.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"
                      width="91"
                      height="91"
                      alt="瑶"
                    />瑶</a
                  >
                </li>
                <li>
                  <a href="herodetail/529.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"
                      width="91"
                      height="91"
                      alt="盘古"
                    />盘古</a
                  >
                </li>
                <li>
                  <a href="herodetail/511.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"
                      width="91"
                      height="91"
                      alt="猪八戒"
                    />猪八戒</a
                  >
                </li>
                <li>
                  <a href="herodetail/515.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"
                      width="91"
                      height="91"
                      alt="嫦娥"
                    />嫦娥</a
                  >
                </li>
                <li>
                  <a href="herodetail/513.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"
                      width="91"
                      height="91"
                      alt="上官婉儿"
                    />上官婉儿</a
                  >
                </li>
                <li>
                  <a href="herodetail/507.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"
                      width="91"
                      height="91"
                      alt="李信"
                    />李信</a
                  >
                </li>
                <li>
                  <a href="herodetail/312.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg"
                      width="91"
                      height="91"
                      alt="沈梦溪"
                    />沈梦溪</a
                  >
                </li>
                <li>
                  <a href="herodetail/508.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"
                      width="91"
                      height="91"
                      alt="伽罗"
                    />伽罗</a
                  >
                </li>
                <li>
                  <a href="herodetail/509.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
                      width="91"
                      height="91"
                      alt="盾山"
                    />盾山</a
                  >
                </li>
                <li>
                  <a href="herodetail/137.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
                      width="91"
                      height="91"
                      alt="司马懿"
                    />司马懿</a
                  >
                </li>
                <li>
                  <a href="herodetail/510.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
                      width="91"
                      height="91"
                      alt="孙策"
                    />孙策</a
                  >
                </li>
                <li>
                  <a href="herodetail/125.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"
                      width="91"
                      height="91"
                      alt="元歌"
                    />元歌</a
                  >
                </li>
                <li>
                  <a href="herodetail/504.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg"
                      width="91"
                      height="91"
                      alt="米莱狄"
                    />米莱狄</a
                  >
                </li>
                <li>
                  <a href="herodetail/503.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"
                      width="91"
                      height="91"
                      alt="狂铁"
                    />狂铁</a
                  >
                </li>
                <li>
                  <a href="herodetail/197.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg"
                      width="91"
                      height="91"
                      alt="弈星"
                    />弈星</a
                  >
                </li>
                <li>
                  <a href="herodetail/502.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
                      width="91"
                      height="91"
                      alt="裴擒虎"
                    />裴擒虎</a
                  >
                </li>
                <li>
                  <a href="herodetail/176.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"
                      width="91"
                      height="91"
                      alt="杨玉环"
                    />杨玉环</a
                  >
                </li>
                <li>
                  <a href="herodetail/199.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"
                      width="91"
                      height="91"
                      alt="公孙离"
                    />公孙离</a
                  >
                </li>
                <li>
                  <a href="herodetail/501.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"
                      width="91"
                      height="91"
                      alt="明世隐"
                    />明世隐</a
                  >
                </li>
                <li>
                  <a href="herodetail/179.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"
                      width="91"
                      height="91"
                      alt="女娲"
                    />女娲</a
                  >
                </li>
                <li>
                  <a href="herodetail/198.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
                      width="91"
                      height="91"
                      alt="梦奇"
                    />梦奇</a
                  >
                </li>
                <li>
                  <a href="herodetail/194.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
                      width="91"
                      height="91"
                      alt="苏烈"
                    />苏烈</a
                  >
                </li>
                <li>
                  <a href="herodetail/195.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"
                      width="91"
                      height="91"
                      alt="百里玄策"
                    />百里玄策</a
                  >
                </li>
                <li>
                  <a href="herodetail/196.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
                      width="91"
                      height="91"
                      alt="百里守约"
                    />百里守约</a
                  >
                </li>
                <li>
                  <a href="herodetail/193.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
                      width="91"
                      height="91"
                      alt="铠"
                    />铠</a
                  >
                </li>
                <li>
                  <a href="herodetail/189.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"
                      width="91"
                      height="91"
                      alt="鬼谷子"
                    />鬼谷子</a
                  >
                </li>
                <li>
                  <a href="herodetail/182.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg"
                      width="91"
                      height="91"
                      alt="干将莫邪"
                    />干将莫邪</a
                  >
                </li>
                <li>
                  <a href="herodetail/187.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
                      width="91"
                      height="91"
                      alt="东皇太一"
                    />东皇太一</a
                  >
                </li>
                <li>
                  <a href="herodetail/191.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"
                      width="91"
                      height="91"
                      alt="大乔"
                    />大乔</a
                  >
                </li>
                <li>
                  <a href="herodetail/192.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"
                      width="91"
                      height="91"
                      alt="黄忠"
                    />黄忠</a
                  >
                </li>
                <li>
                  <a href="herodetail/190.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"
                      width="91"
                      height="91"
                      alt="诸葛亮"
                    />诸葛亮</a
                  >
                </li>
                <li>
                  <a href="herodetail/180.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"
                      width="91"
                      height="91"
                      alt="哪吒"
                    />哪吒</a
                  >
                </li>
                <li>
                  <a href="herodetail/186.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
                      width="91"
                      height="91"
                      alt="太乙真人"
                    />太乙真人</a
                  >
                </li>
                <li>
                  <a href="herodetail/184.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"
                      width="91"
                      height="91"
                      alt="蔡文姬"
                    />蔡文姬</a
                  >
                </li>
                <li>
                  <a href="herodetail/183.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"
                      width="91"
                      height="91"
                      alt="雅典娜"
                    />雅典娜</a
                  >
                </li>
                <li>
                  <a href="herodetail/178.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"
                      width="91"
                      height="91"
                      alt="杨戬"
                    />杨戬</a
                  >
                </li>
                <li>
                  <a href="herodetail/177.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"
                      width="91"
                      height="91"
                      alt="成吉思汗"
                    />成吉思汗</a
                  >
                </li>
                <li>
                  <a href="herodetail/175.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"
                      width="91"
                      height="91"
                      alt="钟馗"
                    />钟馗</a
                  >
                </li>
                <li>
                  <a href="herodetail/174.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"
                      width="91"
                      height="91"
                      alt="虞姬"
                    />虞姬</a
                  >
                </li>
                <li>
                  <a href="herodetail/173.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"
                      width="91"
                      height="91"
                      alt="李元芳"
                    />李元芳</a
                  >
                </li>
                <li>
                  <a href="herodetail/171.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
                      width="91"
                      height="91"
                      alt="张飞"
                    />张飞</a
                  >
                </li>
                <li>
                  <a href="herodetail/170.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"
                      width="91"
                      height="91"
                      alt="刘备"
                    />刘备</a
                  >
                </li>
                <li>
                  <a href="herodetail/169.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
                      width="91"
                      height="91"
                      alt="后羿"
                    />后羿</a
                  >
                </li>
                <li>
                  <a href="herodetail/168.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
                      width="91"
                      height="91"
                      alt="牛魔"
                    />牛魔</a
                  >
                </li>
                <li>
                  <a href="herodetail/167.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
                      width="91"
                      height="91"
                      alt="孙悟空"
                    />孙悟空</a
                  >
                </li>
                <li>
                  <a href="herodetail/166.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"
                      width="91"
                      height="91"
                      alt="亚瑟"
                    />亚瑟</a
                  >
                </li>
                <li>
                  <a href="herodetail/163.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
                      width="91"
                      height="91"
                      alt="橘右京"
                    />橘右京</a
                  >
                </li>
                <li>
                  <a href="herodetail/162.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"
                      width="91"
                      height="91"
                      alt="娜可露露"
                    />娜可露露</a
                  >
                </li>
                <li>
                  <a href="herodetail/157.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"
                      width="91"
                      height="91"
                      alt="不知火舞"
                    />不知火舞</a
                  >
                </li>
                <li>
                  <a href="herodetail/156.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg"
                      width="91"
                      height="91"
                      alt="张良"
                    />张良</a
                  >
                </li>
                <li>
                  <a href="herodetail/154.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"
                      width="91"
                      height="91"
                      alt="花木兰"
                    />花木兰</a
                  >
                </li>
                <li>
                  <a href="herodetail/153.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"
                      width="91"
                      height="91"
                      alt="兰陵王"
                    />兰陵王</a
                  >
                </li>
                <li>
                  <a href="herodetail/152.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"
                      width="91"
                      height="91"
                      alt="王昭君"
                    />王昭君</a
                  >
                </li>
                <li>
                  <a href="herodetail/150.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
                      width="91"
                      height="91"
                      alt="韩信"
                    />韩信</a
                  >
                </li>
                <li>
                  <a href="herodetail/149.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
                      width="91"
                      height="91"
                      alt="刘邦"
                    />刘邦</a
                  >
                </li>
                <li>
                  <a href="herodetail/148.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"
                      width="91"
                      height="91"
                      alt="姜子牙"
                    />姜子牙</a
                  >
                </li>
                <li>
                  <a href="herodetail/146.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"
                      width="91"
                      height="91"
                      alt="露娜"
                    />露娜</a
                  >
                </li>
                <li>
                  <a href="herodetail/144.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
                      width="91"
                      height="91"
                      alt="程咬金"
                    />程咬金</a
                  >
                </li>
                <li>
                  <a href="herodetail/142.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"
                      width="91"
                      height="91"
                      alt="安琪拉"
                    />安琪拉</a
                  >
                </li>
                <li>
                  <a href="herodetail/141.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"
                      width="91"
                      height="91"
                      alt="貂蝉"
                    />貂蝉</a
                  >
                </li>
                <li>
                  <a href="herodetail/140.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"
                      width="91"
                      height="91"
                      alt="关羽"
                    />关羽</a
                  >
                </li>
                <li>
                  <a href="herodetail/139.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"
                      width="91"
                      height="91"
                      alt="老夫子"
                    />老夫子</a
                  >
                </li>
                <li>
                  <a href="herodetail/136.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg"
                      width="91"
                      height="91"
                      alt="武则天"
                    />武则天</a
                  >
                </li>
                <li>
                  <a href="herodetail/135.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"
                      width="91"
                      height="91"
                      alt="项羽"
                    />项羽</a
                  >
                </li>
                <li>
                  <a href="herodetail/134.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"
                      width="91"
                      height="91"
                      alt="达摩"
                    />达摩</a
                  >
                </li>
                <li>
                  <a href="herodetail/133.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"
                      width="91"
                      height="91"
                      alt="狄仁杰"
                    />狄仁杰</a
                  >
                </li>
                <li>
                  <a href="herodetail/132.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"
                      width="91"
                      height="91"
                      alt="马可波罗"
                    />马可波罗</a
                  >
                </li>
                <li>
                  <a href="herodetail/131.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"
                      width="91"
                      height="91"
                      alt="李白"
                    />李白</a
                  >
                </li>
                <li>
                  <a href="herodetail/130.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"
                      width="91"
                      height="91"
                      alt="宫本武藏"
                    />宫本武藏</a
                  >
                </li>
                <li>
                  <a href="herodetail/129.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"
                      width="91"
                      height="91"
                      alt="典韦"
                    />典韦</a
                  >
                </li>
                <li>
                  <a href="herodetail/128.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"
                      width="91"
                      height="91"
                      alt="曹操"
                    />曹操</a
                  >
                </li>
                <li>
                  <a href="herodetail/127.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"
                      width="91"
                      height="91"
                      alt="甄姬"
                    />甄姬</a
                  >
                </li>
                <li>
                  <a href="herodetail/126.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
                      width="91"
                      height="91"
                      alt="夏侯惇"
                    />夏侯惇</a
                  >
                </li>
                <li>
                  <a href="herodetail/124.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg"
                      width="91"
                      height="91"
                      alt="周瑜"
                    />周瑜</a
                  >
                </li>
                <li>
                  <a href="herodetail/123.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"
                      width="91"
                      height="91"
                      alt="吕布"
                    />吕布</a
                  >
                </li>
                <li>
                  <a href="herodetail/121.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"
                      width="91"
                      height="91"
                      alt="芈月"
                    />芈月</a
                  >
                </li>
                <li>
                  <a href="herodetail/120.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"
                      width="91"
                      height="91"
                      alt="白起"
                    />白起</a
                  >
                </li>
                <li>
                  <a href="herodetail/119.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg"
                      width="91"
                      height="91"
                      alt="扁鹊"
                    />扁鹊</a
                  >
                </li>
                <li>
                  <a href="herodetail/118.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
                      width="91"
                      height="91"
                      alt="孙膑"
                    />孙膑</a
                  >
                </li>
                <li>
                  <a href="herodetail/117.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"
                      width="91"
                      height="91"
                      alt="钟无艳"
                    />钟无艳</a
                  >
                </li>
                <li>
                  <a href="herodetail/116.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"
                      width="91"
                      height="91"
                      alt="阿轲"
                    />阿轲</a
                  >
                </li>
                <li>
                  <a href="herodetail/115.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg"
                      width="91"
                      height="91"
                      alt="高渐离"
                    />高渐离</a
                  >
                </li>
                <li>
                  <a href="herodetail/114.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
                      width="91"
                      height="91"
                      alt="刘禅"
                    />刘禅</a
                  >
                </li>
                <li>
                  <a href="herodetail/113.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
                      width="91"
                      height="91"
                      alt="庄周"
                    />庄周</a
                  >
                </li>
                <li>
                  <a href="herodetail/112.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
                      width="91"
                      height="91"
                      alt="鲁班七号"
                    />鲁班七号</a
                  >
                </li>
                <li>
                  <a href="herodetail/111.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"
                      width="91"
                      height="91"
                      alt="孙尚香"
                    />孙尚香</a
                  >
                </li>
                <li>
                  <a href="herodetail/110.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg"
                      width="91"
                      height="91"
                      alt="嬴政"
                    />嬴政</a
                  >
                </li>
                <li>
                  <a href="herodetail/109.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"
                      width="91"
                      height="91"
                      alt="妲己"
                    />妲己</a
                  >
                </li>
                <li>
                  <a href="herodetail/108.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"
                      width="91"
                      height="91"
                      alt="墨子"
                    />墨子</a
                  >
                </li>
                <li>
                  <a href="herodetail/107.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"
                      width="91"
                      height="91"
                      alt="赵云"
                    />赵云</a
                  >
                </li>
                <li>
                  <a href="herodetail/106.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg"
                      width="91"
                      height="91"
                      alt="小乔"
                    />小乔</a
                  >
                </li>
                <li>
                  <a href="herodetail/105.shtml" target="_blank"
                    ><img
                      src="//game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"
                      width="91"
                      height="91"
                      alt="廉颇"
                    />廉颇</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- 英雄介绍 E -->
        </div>
      </div>
    </div>
    <!-- 右侧漂窗 2022-06-14-asiadai -->
    <style>
      .down_detail {
        position: fixed;
        z-index: 99;
        top: 50%;
        right: 2px;
        width: 128px;
        height: 247px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      .down_detail img {
        display: block;
      }

      .down_detail .d_open {
        width: 128px;
        height: 247px;
        background: url(https://game.gtimg.cn/images/yxzj/web201706/images/comm/floatwindow/down-open.png)
          no-repeat center;
        background-size: 100% auto;
      }
      .down_detail .d_open .d_qrcode {
        width: 90px;
        height: 90px;
        position: relative;
        top: 124px;
        left: 50%;
        transform: translateX(-50%);
      }
    </style>

    <div class="down_detail" exposure-tag="down_detail,内页下载浮窗">
      <div class="d_open">
        <img
          class="d_qrcode"
          src="https://game.gtimg.cn/images/yxzj/web201706/images/comm/floatwindow/wzry_qrcode.jpg"
          width="107"
          height="107"
          alt="下载游戏"
        />
      </div>
    </div>

    <script>
      window.onload = function () {
        // 页面加载完成上报一次
        PTTSendClick("down-nav", "down_detail", "内页下载");
      };
    </script>
    <!-- Lib  -->
    <script src="//game.gtimg.cn/images/js/jquery/jquery-1.11.3.min.js"></script>
    <script src="//game.gtimg.cn/images/yxzj/web201706/js/lazyload.min.js"></script>
    <!-- <script src="//game.gtimg.cn/images/js/milo/milo.js"></script> -->
    <script
      src="//ossweb-img.qq.com/images/js/milo_bundle/milo.js"
      crossorigin="anonymous"
    ></script>
    <script src="//game.gtimg.cn/images/js/ide/latest/ide.gbk.min.js"></script>
    <!-- Site header footer  -->
    <!-- <script src="ossweb-img/js/header.js"></script> -->
    <script src="//game.gtimg.cn/images/yxzj/web201706/js/header.js"></script>
    <script src="//game.gtimg.cn/images/yxzj/web201706/js/footer.js"></script>
    <script src="//game.gtimg.cn/images/js/title.js"></script>
    <!-- AMS KV Link -->
    <div id="kvLinkSetDiv" style="display: none">
      <div
        class="kv-bg"
        style="
          background-image: url(//ossweb-img.qq.com/upload/webplat/info/yxzj/20221202/24170257750974.jpg);
        "
      >
        <a
          href="https://pvp.qq.com/coming/v2/heros/544.shtml"
          onClick="PTTSendClick('btn','topkv','进入专题');"
          class="kv_link"
          title="查看详情"
          target="_blank"
          >查看详情</a
        >
      </div>
    </div>
    <!-- Page js -->
    <!-- 统计代码 -->
    <script src="//game.gtimg.cn/images/js/PTT/ping_tcss_tgideas_https_min.js"></script>
    <script type="text/javascript">
      var setSite = {
        //设置网站属性
        siteType: "os",
        pageType: "herolist", //必填项:本页面的定位；按照页面含义填写例如main||list||detail||download||share||page1||pageN
        pageName: "英雄列表-PC", //必填项:页面中文名
        osact: "pc", //选填项:是否是官网专题(在官网运营的专题)boolean；默认是0；可以在链接上加入参数osact=1来灵活设置
        project: "base", //选填项:是否需要统计停留时长boolean；默认是1
      };
      if (typeof pgvMain == "function") pgvMain();
    </script>
    <script>
      need("biz.login-min", function (LoginManager) {
        LoginManager.checkLogin(function () {
          $("#login_qq_span").html(LoginManager.getUserUin());
        });
      });
      var dataList = new Array();
      (function () {
        $.ajax({
          type: "get",
          url: "/web201605/js/herolist.json",
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          success: function (data) {
            $.each(data, function (i, n) {
              dataList.push(n);
            });
            init(data);
          },
          error: function (err) {
            alert(err);
          },
        });
      })();
      var setall = $(".herolist-types li"),
        faceInit = function (data) {
          var heroContent = $(".herolist");
          var html = "";
          var len = data.length - 1;
          $.each(data, function (i) {
            // var imgurl = '//game.gtimg.cn/images/yxzj/img201606/heroimg/'+this.ename+'/';
            // html += '<li><a href="herodetail/'+this.ename+'.shtml" target="_blank"><img src="'+imgurl+this.ename+'.jpg" width="91" alt="'+this.cname+'">'+this.cname+'</a></li>';
            var f = parseInt(len - i);
            var _ename = data[f].ename,
              _cname = data[f].cname,
              _imgurl =
                "//game.gtimg.cn/images/yxzj/img201606/heroimg/" + _ename + "/";
            html +=
              '<li><a href="herodetail/' +
              _ename +
              '.shtml" target="_blank"><img src="' +
              _imgurl +
              _ename +
              '.jpg" width="91" height="91" alt="' +
              _cname +
              '">' +
              _cname +
              "</a></li>";
          });
          heroContent.html(html);
        },
        init = function (data) {
          var totalValidatData = [];
          var curPage = 0;
          var getValidateData = function (type) {
            if (!type) {
              return data;
            }
            var arr = [];
            $.each(data, function () {
              if (
                this.hero_type == type ||
                this.hero_type2 == type ||
                this.pay_type == type
              ) {
                arr.push(this);
              }
            });
            return arr;
          };
          faceInit(getValidateData());

          var typeMap = {
            3: "坦克",
            1: "战士",
            2: "法师",
            4: "刺客",
            5: "射手",
            6: "辅助",
            10: "限免",
            11: "新手",
          };
          //导航事件绑定
          $(".herolist-types").on("click", "li", function () {
            var type = $(this).data("type")
              ? $(this).data("type")
              : $(this).data("ptype");
            var typeString = "全部";
            if (typeMap[type]) {
              typeString = typeMap[type];
            }
            PTTSendClick("btn", "tabtype", typeString);
            setall.removeClass("current");
            $(this).addClass("current");
            faceInit(getValidateData(type));
          });
        },
        LoadItem = function (ItemValue) {
          var html = [];
          for (j = 0; j < dataList.length; j++) {
            var ItemName = dataList[j].cname;
            if (ItemName.indexOf(ItemValue) != "-1") {
              var num = j + 1;
              var imgurl =
                "//game.gtimg.cn/images/yxzj/img201606/heroimg/" +
                dataList[j].ename +
                "/";
              html.push(
                '<li><a href="herodetail/' +
                  dataList[j].ename +
                  '.shtml" target="_blank"><img src="' +
                  imgurl +
                  dataList[j].ename +
                  '.jpg" width="91px" alt="' +
                  dataList[j].cname +
                  '">' +
                  dataList[j].cname +
                  "</a></li>"
              );
              PTTSendClick("btn", "search", "搜索");
            }
          }
          if (html.length == 0) {
            $(".herolist").html(" ");
            //$("#JErroTips").show();
            return;
          }
          $(".herolist").html(html.join(""));
        },
        checkInput = function (inptid) {
          var inpt = document.getElementById(inptid),
            valu = inpt.value;
          inpt.onblur = function () {
            if (this.value == "") this.value = valu;
          };
          inpt.onfocus = function () {
            if (this.value == valu) this.value = "";
          };
        };
      checkInput("search");
      $("#search").keyup(function () {
        LoadItem(this.value);
        setall.removeClass("current");
        $(setall[4]).addClass("current");
      });
    </script>
    <script
      type="text/javascript"
      src="//ossweb-img.qq.com/htdocs/weiguanwang/statistics.js"
      charset="utf-8"
    ></script>
  </body>
</html>
)`,
  teacherData: `<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta name="keywords" content="师资力量,讲师介绍" />
<meta name="description" content="黑马程序员拥有一支教学和研发水平较高、锐意进取、年龄结构合理的师资力量，关于黑马程序员全部讲师介绍，请关注黑马程序员官网师资力量。" />
<link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
<link rel="stylesheet" type="text/css" href="/css/reset.css"/>
<link rel="stylesheet" type="text/css" href="/2020gw/css/style.css"/>
<link rel="stylesheet" type="text/css" href="/css/style.css"/>
<link rel="stylesheet" type="text/css" href="/2020gw/css/tea.css?v20220714"/>
<link rel="stylesheet" type="text/css" href="/2020gw/css/jquery.mCustomScrollbar.css"/>
<script type="text/javascript" src="/js/jquery-1.9.1.min.js"></script>
<title>师资力量|讲师介绍_黑马程序员</title>

</head>
<body>
<script type="text/javascript">
    // borwserRedirect
    (function browserRedirect(){
      var sUserAgent = navigator.userAgent.toLowerCase();
      var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
      var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
      var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
      var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
      var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
      var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
	  var bIsAndroid = sUserAgent.match(/android/i) == 'android';

      if(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid ){
        window.location.href = 'http://m.itheima.com/itheima/phoneteacher.html';
      }
    })();
 </script>
<header>
	<!-- 导航区域 S -->
	<!-- 快速通道 -->
		<div class="topbar">
		<div class="inner">
			<div class="top_l">
				<p><a href="http://www.itcast.cn" target="_blank">A股上市公司传智教育（股票代码 003032）旗下高端IT教育品牌</a></p>				
			</div>
			<div class="top_r">
				<p class="slogan">全国咨询/投诉热线：400-618-9090</p>				
			</div>				
		</div>
	</div>
	<!-- 通用导航 -->
		<div class="header">
		<div class="city_bg"></div>
		<div class="header_con">
			<div class="head_up">
				<div class="leftlogo"><a href="http://www.itheima.com"><img src="/images/logo.png" rel="nofollow" alt="黑马程序员" /></a></div>										
				<img src="/images/slogan3.jpg" alt="好口碑IT培训机构" class="slogan"/>
				<div class="city">
					   
  <h3>全国中心</h3>


					<div class="city_in">
						<span class="city_nav">&nbsp;</span>
						<div class="city_con" style="display: none;">
							<!-- <strong></strong> -->
							<ul><li class="xq_bjcp"><a href="http://vr.itcast.cn/vr/Zjg2ZjlmMWYtOTIyZS01NGZkLWEzYTAtMjBmYTFjOGZhNWMx.html" rel="nofollow" target="_blank" class="sj360">北京昌平</a><a href="http://bjcp.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/bj_city.jpg"/></span><span class="s_name">北京昌平</span></a></li><li class="xq_bjsy"><a href="http://vr.itcast.cn/vr/NDk2M2RjZTgtOWIzOS04MjczLTg2Y2UtOTRiNDFlZThhZTI1.html" rel="nofollow" target="_blank" class="sj360">北京顺义</a><a href="http://bjsy.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/bj_city.jpg"/></span><span class="s_name">北京顺义</span></a></li><li class="xq_tj"><a href="http://tj.itheima.com/" target="_blank"><span class="imgbox" style="bottom: 26px;"><img src="http://www.itcast.cn/2018czgw/images/city/tj_city.jpg"/></span><span class="s_name">天津</span></a></li><li class="xq_sh"><a href="http://sh.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/sh_city.jpg"/></span><span class="s_name">上海</span></a></li><li class="xq_gz"><a href="http://vr.itcast.cn/vr/NDVjYzY5Y2QtNDI4NC1kZmQ3LWZmODAtNWIyNGZhMzU1N2Fl.html" rel="nofollow" target="_blank" class="sj360">广州</a> &nbsp; &nbsp; &nbsp; &nbsp;<a href="http://gz.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/gz_city.jpg"/></span><span class="s_name">广州</span></a></li><li class="xq_sz"><a href="http://vr.itcast.cn/vr/YzU1MTI2MmMtZDVmZS03MzA2LWIwMGUtZmI1ZDQwMWEyODhl.html" rel="nofollow" target="_blank" class="sj360">深圳</a><a href="http://sz.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/sz_city.jpg"/></span><span class="s_name">深圳</span></a></li><li class="xq_wh"><a href="http://vr.itcast.cn/vr/ODQyZTFiZGUtNjM4Zi0xNTA2LTE4MzgtZTI5MmVjNjI1OTYx.html" rel="nofollow" target="_blank" class="sj360">武汉</a> &nbsp; &nbsp; &nbsp; &nbsp;<a href="http://wh.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/wh_city.jpg"/></span><span class="s_name">武汉</span></a></li><li class="xq_zz"><a href="http://vr.itcast.cn/vr/ZDhmYTEwY2QtNTIwYi00MDIwLTBkYTUtN2VmYzgwNWYwYmZh.html" rel="nofollow" target="_blank" class="sj360">郑州</a> &nbsp; &nbsp; &nbsp; &nbsp;<a href="http://zz.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/zz_city.jpg"/></span><span class="s_name">郑州</span></a></li><li class="xq_xa"><a href="http://xa.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/xa_city.jpg"/></span><span class="s_name">西安</span></a></li><li class="xq_cs"><a href="http://vr.itcast.cn/vr/NzhhODUwZDItNzA3Yi00YTIyLTJiYzYtYjUxNTBhYzNkYjk1.html" rel="nofollow" target="_blank" class="sj360">长沙</a><a href="http://cs.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/cs_city.jpg"/></span><span class="s_name">长沙</span></a></li><li class="xq_jn"><a href="http://jn.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/jn_city.jpg"/></span><span class="s_name">济南</span></a></li><li class="xq_cq"><a href="http://cq.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/cq_city.jpg"/></span><span class="s_name">重庆</span></a></li><li class="xq_nj"><a href="http://nj.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/nj_city_new.jpg"/></span><span class="s_name">南京</span></a></li><li class="xq_hz"><a href="http://hz.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/hz_city_new.jpg"/></span><span class="s_name">杭州</span></a></li><li class="xq_sjz"><a href="http://sjz.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/sjz_city_new.jpg"/></span><span class="s_name">石家庄</span></a></li><li class="xq_cd"><a href="http://cd.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/cd_city_new.jpg"/></span><span class="s_name">成都</span></a></li><li class="xq_hf"><a href="http://hf.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/hefei.jpg"/></span><span class="s_name">合肥</span></a></li><li class="xq_ty"><a href="http://ty.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/ty.png"/></span><span class="s_name">太原</span></a></li><li class="xq_xm"><a href="http://vr.itcast.cn/vr/MzRkOTVmNzktZGFlNS0yNzE2LWJkNDgtMjZjNGVlZjdmMzY3.html" rel="nofollow" target="_blank" class="sj360">厦门</a><a href="http://xm.itheima.com" target="_blank"><span class="imgbox"><img src="/images/city/xm.jpg"/></span><span class="s_name">厦门</span></a></li><li class="xq_sy"><a href="http://sy.itheima.com" target="_blank"><span class="imgbox"><img src="http://www.itheima.com/images/newslistPIC/1533274183917_sy.jpg"/></span><span class="s_name">沈阳</span></a></li></ul>
							
							
							
							
							
							
							
							
							
							
						</div>
					</div>
				</div>
			</div>
			<p class="clear_s"></p>			
		</div>
		<div class="head_nav">
			<ul>
				<li><a href="javascript:;" class="all a_js" rel="nofollow">全部课程</a></li>
				<li><a href="http://www.itheima.com" class="a_default a2_js">首页</a></li>
				<li><a href="http://yun.itheima.com/map?hm" target="_blank" class="a_default a2_js">免费教程</a></li>
					<li><a href="/teacher.html" target="_blank" class="a_default a2_js">教研团队</a></li>
					<li><a href="/special/hmschool/index.shtml" target="_blank" class="a_default a2_js">开班时间</a></li>
					<li><a href="/flow/flow.html" target="_blank" class="a_default a2_js">报名流程</a></li>
					<li><a href="http://resource.ityxb.com/booklist/find.html" target="_blank" class="a_default a2_js">原创书籍</a></li>
					<li><a href="https://pip.itcast.cn?hmgw" target="_blank" class="a_default a2_js">项目库</a></li>
					<li><a href="http://bbs.itheima.com/" target="_blank" class="a_default a2_js">技术社区</a></li>
			</ul>
		</div>
		<div class="fdnav">
			<ul>
				<li class="java_icon">
					<a href="http://java.itheima.com/?javaeezly" rel="nofollow" target="_blank"><em><img src="/2020gw/images/subjavaee.png"/></em><span>JavaEE</span></a>
				</li>
				<li class="web_icon">
					<a href="http://web.itheima.com/?webzly" rel="nofollow" target="_blank"><em><img src="/2020gw/images/subweb.png"/></em><span>HTML&amp;JS+前端</span></a>
				</li>
				<li class="python_icon">
					<a href="http://python.itheima.com/?pythonzly" rel="nofollow" target="_blank"><em><img src="/2020gw/images/subpython.png"/></em><span>Python+大数据开发</span></a>
				</li>
				<li class="ai_icon">
					<a href="http://ai.itheima.com/?aizly" rel="nofollow" target="_blank"><em><img src="/2020gw/images/subai.png"/></em><span>人工智能开发</span></a>
				</li>
				<li class="ui_icon">
					<a href="http://ui.itheima.com/?uizly" rel="nofollow" target="_blank"><em><img src="/2020gw/images/subui.png"/></em><span>UI/UE设计</span></a>
				</li>
				<li class="test_icon">
					<a href="http://test.itheima.com/?testzly" rel="nofollow" target="_blank"><em><img src="/2020gw/images/subtest.png"/></em><span>软件测试</span></a>
				</li>
				<li class="xmt_icon">
					<a href="http://netmaket.itheima.com/?xmtzly" rel="nofollow" target="_blank"><em><img src="/2020gw/images/subxmt.png"/></em><span>新媒体+短视频</span></a>
				</li>
				<li class="pm_icon">
					<a href="http://pm.itheima.com/?pmzly" target="_blank"><em><img src="/2020gw/images/subpm.png"/></em><span>产品经理</span></a>
				</li>
			</ul>
		</div>
	</div>
	<!-- 导航区域 E -->
</header>
<section>
	<!-- <div class="tea_ban">&nbsp;</div> -->
</section>
<div class="wrapper tea_main">
	<div id="webim" style="display: none;"></div>
	<div id="webimclosebutton" style="display: none;"></div>
	<div class="tea_ban teacher_banner">
		<div id="slideBox" class="slideBox">
			<!-- <div class="hd">
				<ul><li></li><li></li></ul>
			</div> -->
			<div class="bd">
				<!-- <ul> -->
					<li class="ban1"><img src="/2020gw/images/teaimg/ban1.jpg"></li>
				<!-- </ul> -->
			</div>
		</div>
	</div>
	<!--box1开始-->
	<div class="tea_box1">
		<div class="inner">
			<div class="tea1_hd">
				<h2>对教育怀揣敬畏之心，用爱成就每一位学生</h2>
				<p>10余年来，传智始终秉承“为中华民族伟大复兴而讲课，为千万学生少走弯路而著书”的使命，已向IT产业培养了30余万名IT高精尖人才</p>
			</div>
			<div class="main">
				<p class="mainp1">教研背后的故事<i></i></p>
				<ul>	
					<li class="bianlan"><a href="javascript:;"><p>传智教育广纳互联网技术精英，构建实力强大的技术大牛团队</p></a></li>
					<li><a href="javascript:;"><p>传智课改团队，克服重重艰难，终让梦想照进现实</p></a></li>
					<li><a href="javascript:;"><p>心系前端未来，一路勇往的传智人</p></a></li>
					<li><a href="javascript:;"><p>用爱成就每一位学生</p></a></li>
					<li><a href="javascript:;"><p>心系学员，用爱与奉献践行公司使命</p></a></li>
					<li><a href="javascript:;"><p>做教育，就是对每一位学生负责【讲师篇】</p></a></li>
					<li><a href="javascript:;"><p>扎根教学一线，潜心授课育人</p></a></li>
					<li><a href="javascript:;"><p>品质教育，匠心打磨【JavaEE篇】</p></a></li>
				</ul>
				<div class="tea_video">
					<video width="100%" src="http://v.itheima.com/czbkzjtd/2020fbhcf11.mp4" controls="controls" >
						<source src="http://v.itheima.com/czbkzjtd/2020fbhcf11.mp4" type="video/mp4"  />
						<object data="http://v.itheima.com/czbkzjtd/2020fbhcf11.mp4" >
							<embed src="http://v.itheima.com/czbkzjtd/2020fbhcf11.mp4" />
						</object>
					</video>
					<div class="tea_maskvideo">
						<img src="/2020gw/images/tea/tea_img3.png"/>
						<p>传智教育广纳互联网技术精英，构建实力强大的技术大牛团队</p>
					</div>
				</div>
				<script>
					const videoes = ["http://v.itheima.com/czbkzjtd/2020fbhcf11.mp4","http://v.itheima.com/czgwsp/mxszhb.mp4","http://v.itheima.com/CZGWSP/李天成团队.mp4","http://v.itheima.com/传智人/2019传智人爱成就每位学生.mp4","http://v.itheima.com/dd/huodong/2018teachersday.mp4","http://v.itheima.com/dd/huodong/s1jiaoshijiejiangshipian.mp4","http://v.itheima.com/java/jiaoshi/1.mp4","http://v.itheima.com/czgwsp/javaxkft.mp4"]
					const title = ["传智教育广纳互联网技术精英，构建实力强大的技术大牛团队","传智课改团队，克服重重艰难，终让梦想照进现实","心系前端未来，一路勇往的传智人","用爱成就每一位学生","心系学员，用爱与奉献践行公司使命","做教育，就是对每一位学生负责【讲师篇】","扎根教学，潜心授课育人","品质教育，匠心打磨【JavaEE篇】"]
					$(".tea_box1 .main ul li").click(function(){
						$(this).addClass("bianlan").siblings().removeClass("bianlan")
						$(".tea_video video").attr("src",videoes[$(this).index()])
						$(".tea_maskvideo p").text($(this).find("p").text())
						$(".tea_maskvideo").show()
					})
					$(".tea_maskvideo").click(function(){
						$(this).hide();
						$(".tea_video video").trigger("play")
					})
				</script>
			</div>
		</div>
	</div>
	<!--teabox2-->
	<div class="tea_box2">
		<div class="inner">
			<div class="tea1_hd">
				<h2>专职课程研发团队</h2>
				<p>每年<span>“亿元级”</span>投资，倾力打造高标准百人团队</p>
			</div>
			<div class="teabox2_con">
				<div class="teabox2_hd teabox2_hd1"><i></i><p><span>人才筛选标准<em></em></span>16级标准严选专职课研老师，严控课程研发质量</p></div>
				<!--课研人才标准-->
<div class="teamain_bot">
	<div class="botlists">
		<h2>人才筛选<br /><span>4项标准</span></h2>
		<ul class="clears">
			<li><div class="h4">标准化研发人才画像</div><p>大厂背景，技术深度、广度，<span>大型项目经验</span></p><img src="/2020gw/images/teacherpic7.jpg" /></li>
			<li><div class="h4">多维面试（五面）</div><p>背景调查，技术360°鉴定，<span>新课题设计 ，课程随机演绎，</span>职业定位、发展规划</p><img src="/2020gw/images/teacherpic7.jpg" /></li>
			<li><div class="h4">研究院小组诊断测评</div><p>教育情怀、价值观，进<span>取精神、培养潜力</span></p><img src="/2020gw/images/teacherpic7.jpg" /></li>
			<li><div class="h4">全链路面试流程监控</div><p>CEO审核，信息存档</p></li>
		</ul>
	</div>
	<div class="botlists botlists2">
		<h2>人才考核<br /><span>8大环节</span></h2>
		<div class="teacherpic8">
			<img src="/2020gw/images/teacherpic8.png" />
			<div class="bot2con">
				<p><span><i>1</i>课研人员素质考核</span><span><i>5</i>视频录制考核</span></p>
				<p><span><i>2</i>课程设计考核</span><span><i>6</i>课堂试炼考核</span></p>
				<p><span><i>3</i>大纲设计考核</span><span><i>7</i>产品全方位审评</span></p>
				<p><span><i>4</i>讲义撰写考核</span><span><i>8</i>考核答辩</span></p>
			</div>
		</div>
	</div>
	<div class="botlists botlists3">
		<h2>人才培训及<br />发展规划</h2>
		<img src="/2020gw/images/teacherpic9.jpg" class="teacherpic9" />
		<div class="bot3con">
			<p>平台、组件  <br />技术开源历练</p>
			<p style="padding-top: 35px;">技术私享会</p>
			<p style="padding-top: 35px;">大牛技术沙龙</p>
			<p>企业对对碰<br />技术共享</p>
		</div>
	</div>
</div>
				<div class="teabox2_hd teabox2_hd2"><i></i><p><span>研发体系标准<em></em></span>以“五库模式”为基础，打造真实企业级研发体系</p></div>
				<div class="teabox2_main2">
					<ul class="clears">
						<li class="main2li1">
							<h3><i></i>信息库</h3>
							<p>应用市场调研+大数据分析获取前沿发展方向</p>
						</li>
						<li class="main2li2">
							<h3><i></i>课题研究库</h3>
							<p>提出前沿热门课题，完成深入原理剖析+技术攻坚保障课程前瞻性</p>
						</li>
						<li class="main2li3">
							<h3><i></i>研发人才库</h3>
							<p>来自华为、IBM等百人大牛团，每年耗资亿元研发行业标杆优质课程</p>
						</li>
						<li class="main2li4">
							<h3><i></i>解决方案库</h3>
							<p>基于市场主流技术研发解决方案，应对职场常见技术难题</p>
						</li>
						<li class="main2li5">
							<h3><i></i>项目库</h3>
							<p>基于热门行业领域联合大牛顾问团研发“大厂级”深度项目</p>
						</li>
					</ul>
				</div>
				<div class="teabox2_hd teabox2_hd3"><i></i><p><span>研发老师履历<em></em></span>源源不断引进大厂技术大牛，课程与企业需求实时接轨</p></div>
				<div class="teabox2_main4">
					<i class="before_b"></i>
					<div id="demo" class="showcase ibox5_con">
						<section id="examples">
							<div id="content-8" class="content maincon">
								<ul class="clears">
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210611091755娄迎新.jpg"/></div>
    <div class="main_bot">
        <h2>娄老师<span>课程研究员</span></h2>
        <h3>
            <span>大唐高鸿</span>
            <span>20年经验</span>
             </h3>
        <p>研发成果：
            <span>餐掌柜项目</span>
            <span> 立可得项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>娄老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年01月</h3>

        <p> 原北京六六八八项目经理，主导大型电商项目E动商网的研发。后曾在多家软件企业担任系统架构师、技术负责人。2014年在大唐高鸿某事业部担任技术总监，主导“敲敲运营平台”的开发。 精通Dubbo、SpringCloud等分布式架构技术以及Vue.js等前端框架。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/2020080614573920200701165824王友军.jpg"/></div>
    <div class="main_bot">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>
            <span>北大毕业</span>
            <span> 中科软架构师</span>
             </h3>
        <p>研发成果：
            <span>数据库原理</span>
            <span> 数据库建模设计课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>入职时间：2014年03月</h3>

        <p> 10多年IT从业经验，北大计算机毕业，曾在中科软从事系统分析与架构工作，精通OOM、PD、DDD建模；对计算机原理、体系结构、常用算法有深入研究；熟练分布式和微服务环境下的主流技术架构。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20210115103117高老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>高老师<span>课程研究员</span></h2>
        <h3>
            <span>用友</span>
            <span> React 技术大牛</span>
             </h3>
        <p>研发成果：
            <span> 黑马头条 PC 管理项目</span>
            <span> 黑马头条移动端项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>高老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 8年软件开发经验. 原用友架构师,开发装配式的移动开发平台,移动界面设计器,采用React.js为基础技术栈,对所有的组件进行动态渲染和拖拽式设计,针对不懂前端的后端工程师,实现几分钟配置一个移动界面的开发需求. 对配置化、零编码的开发平台有较强的技术和架构能力。				</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20220722155441陈长宏(1).png"/></div>
    <div class="main_bot">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>
            <span>宜信</span>
            <span>8年经验</span>
             </h3>
        <p>研发成果：
            <span>微服务架构</span>
            <span> 架构师课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年01月</h3>

        <p> 11年互联网项目研发经验级教学经验，曾担任过软件工程师，技术部经理等职务。精通Java技术栈、对SpringBoot、Redis、ElasticSearch、RabbitMQ、Docker、SpringCloud等有深入研究。专注于分布式、高可用、高性能、微服务架构的设计。				</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20210610101636前端刘晓强1.jpg"/></div>
    <div class="main_bot">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>
            <span>10年经验 </span>
            <span> pink老师    </span>
             </h3>
        <p>研发成果：
            <span>经典前端视频教程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>入职时间：2013年11月</h3>

        <p> 曾参与国家开放大学module教育平台，环球影视(中国)等多个大型项目。拥有丰富的前端教学经验，擅长设计课程与教学。课程内容为先，但是让学生学得开心，听得懂也很重要；pink，拼死也要克服前端。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20210721173201李东旭1.jpg"/></div>
    <div class="main_bot">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>
            <span>Vue技术大牛</span>
            <span>可视化</span>
             </h3>
        <p>研发成果：
            <span>vue双元视频 </span>
            </p>
    </div>
    <div class="main_mask">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 6年前端开发与教学经验, 具备全端开发能力, 精通主流框架vue。曾担任多家上市公司前端组长, 拥有丰富的项目经验。授课风趣幽默, 情绪饱满, 思路清晰, 擅长把复杂抽象的专业知识, 以通俗易懂的语言传授给学生, 并启发学生的学习能力和解决问题能力。	</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20210520115959前端-北京总部-赵玉川.jpg"/></div>
    <div class="main_bot">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>
            <span>Vue</span>
            <span>小程序</span>
            <span>可视化</span>
             </h3>
        <p>研发成果：
            <span>小兔鲜儿</span>
            <span>黑马优购</span>
            <span>智能看板</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年11月</h3>

        <p> Web前端工程师，具有多年Web开发经验，熟悉前端技术开发架构，喜爱并热衷于前端开发，特别在Vue、Node.js、React等主流技术领域实践并积累了丰富的经验，提出并成功主导了B2C、社交、O2O、IM、OA等众多领域的技术解决方案，同时在结合&nbsp;Linux&nbsp;服务器相关技术优化提升网站性能方面具有丰富的实践经验。</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20210520141018前端-上海-刘玺.jpg"/></div>
    <div class="main_bot">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>
            <span>React 技术大牛</span>
            <span>TypeScript</span>
             </h3>
        <p>研发成果：
            <span>React好客租房项目</span>
            <span>React Hooks</span>
            <span>小兔鲜儿</span>
            <span>TypeScript</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年10月</h3>

        <p> 后端开发出身，曾在金和软件参与大型SOA项目开发；后入职国美集团旗下，负责前端开发工作。基础扎实，深入原理。热爱技术，喜欢读书，看过大量有关前端方面的书籍。 为人友善，知识面广泛。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20210115110415原老师-课程.jpg"/></div>
    <div class="main_bot">
        <h2>原老师<span>课程研究员</span></h2>
        <h3>
            <span>人工智能</span>
            <span> 大数据</span>
             </h3>
        <p>研发成果：
            <span>金融风控项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>原老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年07月</h3>

        <p> 北京大学计算机硕士，擅长大数据/人工智能。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/cloud/20210126144435孔老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>孔老师<span>课程研究员</span></h2>
        <h3>
            <span>DolphinScheduler社区贡献者</span>
             </h3>
        <p>研发成果：
            <span>新零售离线数仓项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>孔老师<span>课程研究员</span></h2>
        <h3>入职时间：2018年07月</h3>

        <p> Apache DolphinScheduler社区贡献者，离线数仓领域。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/20210623172521杜老师.jpg"/></div>
    <div class="main_bot">
        <h2>杜老师<span>课程研究员</span></h2>
        <h3>
            <span>10年经验</span>
            <span>人工智能博士</span>
             </h3>
        <p>研发成果：
            <span>仇恨言论检测项目</span>
            <span> 多模态视频内容标签</span>
            <span> 多模态商品图文匹配</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>杜老师<span>课程研究员</span></h2>
        <h3>入职时间：2021年03月</h3>

        <p> 人工智能博士，曾就职多家知名互联网人工智能公司，善于并引入深度学习领域的新进展。在算法架构及算法模型方面都有较深的造诣，在多模态、内容理解及内容安全、情感计算等方面具备多年实践经验，发表国内外论文多篇。项目经历：多模态内容标签、多模态安全检测、知识图谱。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/2022011818181020210608133509大数据-北京总部-赵晨杰.jpg"/></div>
    <div class="main_bot">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>
            <span>人工智能</span>
            <span> 算法领域</span>
             </h3>
        <p>研发成果：
            <span>SparkMl机器学习</span>
            <span> 推荐系统</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年05月</h3>

        <p> 人工智能领域技术，多年模式识别和数据挖掘开发经验，主导研发多项国家和省级科研项目，负责企业级信贷风控模型和智能医疗数据平台开发，专注ML/DL/PR/KG领域相关算法的应用，曾任职美团搜索部负责NER及Bert搜索排序优化对Hadoop、SparkTensorflow和PyTorch等大数据、人工智能技术有多年企业实践经验。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220125142451课程研究员李老师.jpg"/></div>
    <div class="main_bot">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>
            <span>UI设计学科负责人</span>
             </h3>
        <p>研发成果：
            <span>早期设计学科视觉部分的全套课程体系</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>入职时间：2012年04月</h3>

        <p> 场景式教学倡导者，10余年一线美术设计经验，在交互设计、视觉传达以及美术史论等方向有深入研究。尤其在美术设计教学领域具备多年课程体系研发经验，对于设计类岗位需求动态具备敏锐洞察力，独立研发的艺术设计课程在多个高校被作为核心教学内容。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20200701174119谭周洲.jpg"/></div>
    <div class="main_bot">
        <h2>谭老师<span>课程研究员</span></h2>
        <h3>
            <span>腾讯</span>
            <span> 站酷</span>
             </h3>
        <p>研发成果：
            <span>爱游网项目</span>
            <span> 易起贷项目</span>
            <span> 海洋之谜项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>谭老师<span>课程研究员</span></h2>
        <h3>入职时间：2014年07月</h3>

        <p> 14年互联网设计经验，首批移动互联网UI设计师，知名WEB设计师，对视觉设计、平面设计、界面设计、体验设计、交互设计、动画制作、影视后期等多方面有研究。曾主导腾讯、小米、IBM、路虎汽车、湖南卫视、上海世博会等500强企业互联网项目。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20210115161515李老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>
            <span>好未来</span>
            <span>美团</span>
             </h3>
        <p>研发成果：
            <span>黑马头条</span>
            <span> 性能测试综合项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>入职时间：2018年05月</h3>

        <p> 曾经在美团负责IM通讯系统的研发；在大型电商公司负责后台系统的研发和测试平台的搭建工作；在好未来培优事业部担任测试开发工程师，负责自动化测试和性能测试；拥有丰富的项目开发、性能测试、自动化测试及测试平台的开发经验。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20210115161730肖老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>肖老师<span>课程研究员</span></h2>
        <h3>
            <span>小红书</span>
            <span>华为</span>
             </h3>
        <p>研发成果：
            <span>安享智慧理财项目研发</span>
            <span> 白盒测试设计方法专题</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>肖老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年05月</h3>

        <p> 在华为核心网产品线担任测试工程师；在腾讯即时通讯产品线，负责QQ空间产品项目的迭代交付；在小红书负责武汉测试团队的人员和技术建设。熟悉多种单元测试、接口自动化、UI自动化的技术框架，熟悉docker等自动化的运维体系。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20210610144935新媒体-深圳-王德春.jpg"/></div>
    <div class="main_bot">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>
            <span>8年教学经验</span>
            <span>SEO技术</span>
             </h3>
        <p>研发成果：
            <span>抖音分析师作者</span>
            <span> SEO优化黑帽课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>入职时间：2013年09月</h3>

        <p> 在多家高热度网站拥有个人专栏，拥有忠实粉丝圈，口碑在业界广为人知。公开揭秘黑帽SEO技术，自创关键词灰排方法，先后创办过游戏辅助网，攻防技术交流论坛等网站。利用自创关键词排名方法，在搜索引擎霸屏每月为企业带来50万IP流量，月销售额提升50%以上。</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20210622115823陈宇峰.jpg"/></div>
    <div class="main_bot">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>
            <span>跨境电商</span>
            <span>早教</span>
             </h3>
        <p>研发成果：
            <span>内容实战</span>
            <span> 电商项目</span>
            <span> 尚学教务管理</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年04月</h3>

        <p> 互联网行业从业近十年，从事过开发和产品工作。任职过跨境电商、社交、内容付费、早教等诸多领域，其中不乏互联网独角兽企业，同时在C端和B端产品均有多年实战经验。擅长产品战略规划、产品设计、交互设计、数据分析等方向。</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20210610171727新媒体-北京-高镇国.jpg"/></div>
    <div class="main_bot">
        <h2>高老师<span>课程研究员</span></h2>
        <h3>
            <span>上市公司推广经理</span>
             </h3>
        <p>研发成果：
            <span>新媒体运营课程</span>
            <span>社群运营课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>高老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年06月</h3>

        <p> 新媒体运营、擅长网络营销实战，7年大型上市互联网公司运营经验，3年网络营销团队管理经验，6年上市培训企业讲师经验。精通社会化媒体营销、新媒体运营。曾为数百家B2B门户网站提供整体网络营销服务。擅长运用新兴互联网思维，授课深入浅出。	</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210126134437惠老师_课研2.jpg"/></div>
    <div class="main_bot">
        <h2>惠老师<span>课程研究员</span></h2>
        <h3>
            <span>IT名企架构师</span>
            <span>7年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            <span> Spring课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>惠老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年03月</h3>

        <p> 先后在国内IT名企担任软件开发工程师、项目经理等职务。
掌握Java SE，Java Web、MySQL、Redis以及Dubbo、ZooKeeper 、SpringBoot、SpringCloud等分布式架构技术以及Vue.js等前端框架，曾主导多个企业级项目的研发，主要所涉及的领域有金融，电子商务等。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20220722155803刘意(1).png"/></div>
    <div class="main_bot">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>
            <span>架构师</span>
            <span>15年经验</span>
             </h3>
        <p>研发成果：
            <span>Java SE课程</span>
            <span> 架构师课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>入职时间：2012年03月</h3>

        <p> 曾参与江苏电信网上营业厅系统，甘肃电信代理商系统，中央电视台媒体资产管理系统，南海区综治信访维稳中心管理系统等软件的项目需求及开发。主要研发方向为Java企业架构及ORACLE数据库应用。在数据库的设计及Java流行框架的使用上有很丰富的开发经验。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/2020080615102020200702172405沈坤林.jpg"/></div>
    <div class="main_bot">
        <h2>沈老师<span>课程研究员</span></h2>
        <h3>
            <span>三维度</span>
            <span>8年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            <span> 秒杀专题</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>沈老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年06月</h3>

        <p> 先后在三维度、中润四方、中保鸿业担任项目经理或技术总监，精通Java企业平台技术，熟练掌握企业搜索引擎、分布式架构、SOA架构、微服务架构。曾研发广西税务系统、易迅网络发票、三维度商城、三维度支付系统，主导B2B2C大型电商，神州培训网、万语网、金融平台的研发与重构。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210126134857许老师_课研2.jpg"/></div>
    <div class="main_bot">
        <h2>许老师<span>课程研究员</span></h2>
        <h3>
            <span>高德</span>
            <span>8年经验</span>
             </h3>
        <p>研发成果：
            <span>双元课程V10.0</span>
            <span>泰康人寿极速理赔系统</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>许老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年06月</h3>

        <p> 8年软件开发及教学经验。先后入职过高德软件公司和泰康保险公司，担任软件开发工程师。精通Java SE、Java Web、MySQL、前端技术、SSM框架技术等。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210126134831许老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>许老师<span>课程研究员</span></h2>
        <h3>
            <span>10年开发经验</span>
             </h3>
        <p>研发成果：
            <span>十次方项目</span>
            <span>通用权限专题</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>许老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年07月</h3>

        <p> 多年软件开发工作，历任软件工程师、项目经理、培训师等职务，熟练掌握SSM、SSH等框架技术，Dubbo、SpringCloud、ServiceComb等分布式架构技术、Node.js、Vuejs等前端技术。
授课思路清晰，通俗易懂。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210126142718张老师_课研2.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>架构师</span>
            <span>  10年经验</span>
             </h3>
        <p>研发成果：
            <span>Spring</span>
            <span> SpringMVC</span>
            <span> MyBatis</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年04月</h3>

        <p> 10年企业一线开发经验，多家企业担任架构师，项目经理等职位。参与或主持中航信-航意险、中彩网、网上商城等项目的开发。专注Java EE开发，深入研究Spring全家桶、Mybatis、Dobuo等流行框架，对分布式，微服务架构体系有独到的见解。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210126135023张老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>中国银行</span>
            <span> 12年经验 </span>
             </h3>
        <p>研发成果：
            <span>万信金融项目课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2014年07月</h3>

        <p> 12年研发经验，曾主导/参与过：中国银行网点规划系统、河南移动网上营业厅、郑州市科技局综合性门户网站等项目。曾经参与策划和编写过多本书籍并出版发行，如《Ajax+JSP巧学巧用》、《Struts2框架开发从入门到精通》、《EJB3从入门到精通》等。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210531171610杨磊.jpg"/></div>
    <div class="main_bot">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>
            <span>北大方正</span>
            <span> 12年经验</span>
             </h3>
        <p>研发成果：
            <span>Redis</span>
            <span> RabbitMQ</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>入职时间：2018年10月</h3>

        <p> 10年以上IT相关经验，曾在北大方正担任项目经理。2010年起转架构，在互联网，游戏公司担任技术经理职务。精通Spring相关开发框架，在项目中熟练运用缓存技术和消息中间技术，对分布式及微服务架构有深入理解。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20220722155243JavaEE教研部-讲师-徐磊2新(2).png"/></div>
    <div class="main_bot">
        <h2>徐老师<span>课程研究员</span></h2>
        <h3>
            <span>华为鼎桥</span>
            <span> 7年经验</span>
             </h3>
        <p>研发成果：
            <span>Git</span>
            <span> Maven</span>
            <span> Dubbo</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>徐老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 10年Java从业经验，曾负责安防视频监控系统、华为VMS语言邮箱系统、电信网络质量监控系统、溯源APP等。精通Java SE，Java EE，SSM/SSH，Spring全家桶。对NoSQL、消息队列、服务集成、流程引擎、微服务、持续集成及各种开源技术有着深厚的研究。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210126133910李老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>
            <span>9年经验</span>
            <span> 国家电网</span>
             </h3>
        <p>研发成果：
            <span>SpringBoot</span>
            <span> SpringData</span>
            <span> SpringCloud</span>
            <span> Doc</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年02月</h3>

        <p> 对Java Web以及Spring、SpringMVC、Struts2、微服务架构SpringBoot、SpringData等有深入研究。熟练应用VueJs,Node.Js等前端框架。精通MySQL、Oracle、Redis等数据的搭建和优化等，曾参与研发黑龙江联通管理系统，国家电网，中国电建招标平台系统等开发工作。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210623135112陈老师_课程研究员.jpg"/></div>
    <div class="main_bot">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>
            <span>国家电网</span>
            <span> 8年经验</span>
             </h3>
        <p>研发成果：
            <span>JavaWeb</span>
            <span> Spring框架</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年09月</h3>

        <p> 6年研发经验，2年Java教学经验，先后负责国家电网、质检总局、广西海关等单位的多个大型系统研发，后期主做在线教育互联网项目。精通MVC框架、分布式框架、微服务框架。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20200702175857陈辉.jpg"/></div>
    <div class="main_bot">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>
            <span>7年经验</span>
            <span> 凤凰网</span>
             </h3>
        <p>研发成果：
            <span>Java SE课程</span>
            <span> 微服务课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 7年软件研发、项目管理与教学经验。先后在凤凰网、恒信东方担任技术主管、项目经理等职位。主导研发超过5个以上大型项目与平台，包括紫马5.0，凤凰房产小区二手房业务平台，恒信合家欢等项目。精通微服务架构，擅长解决高并发，亿级数据量等架构设计。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/cloud/20210121183838魏老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>魏老师<span>课程研究员</span></h2>
        <h3>
            <span>Flink技术</span>
             </h3>
        <p>研发成果：
            <span>一站制造</span>
            <span>星途车联网项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>魏老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年09月</h3>

        <p> 多年大数据开发工程师经验，先后涉足Java、大数据、云计算等领域，熟悉大数据服务开发与云计算平台开发，专注于互联网APP后台数据统计、分析、建模等流程；熟悉车辆网领域云计算平台开发，拥有丰富的企业级大数据应用架构及开发经验。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20210115162017朱老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>
            <span>京东</span>
            <span>ACP认证</span>
             </h3>
        <p>研发成果：
            <span>Ego微商小程序项目</span>
            <span> 短视频项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年07月</h3>

        <p> 8年软件测试及项目管理经验，先后在不同互联网名企担任软件测试工程师、测试主管等职务，参与测试的项目有网络安全类、互联网出行类、电子商务类项目，擅长功能测试，接口测试，及自动化测试。具有国家信息系统项目管理师认证、ACP认证。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220125143136课程研究员杨老师.jpg"/></div>
    <div class="main_bot">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>
            <span>阿里巴巴</span>
            <span>培训师</span>
             </h3>
        <p>研发成果：
            <span>小米莉、志高空调、凌志咖啡机等电商设计项目课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年03月</h3>

        <p> 拥有8年的设计经验，长期奋斗在北京电商服务设计岗位，曾为阿里巴巴多家商家做设计及运营培训，专注于天猫、淘宝、京东等第三方平台设计以及运营，精通PS/AI/ID/CDR/C4D等设计软件。风趣幽默的授课方式，对待学生认真负责，耐心引导，条理清晰，深受学生的喜爱。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20210622115812孙长生.jpg"/></div>
    <div class="main_bot">
        <h2>孙老师<span>课程研究员</span></h2>
        <h3>
            <span>工信部</span>
            <span>创新创业</span>
             </h3>
        <p>研发成果：
            <span>在线教育</span>
            <span> 互联网医疗</span>
            <span> 智慧城市</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>孙老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年08月</h3>

        <p> 近10年的互联网产品研发和团队管理工作经历，曾担任工信部教育产品及企业大型电商产品负责人，高校客座讲师和大学生创新创业大赛评委，对产品的设计、交互、数据分析、用户增长等拥有造诣和分享经验，对教育、电商、金融等行业领域有深刻研究。</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/2022012011552720200917150153新媒体-深圳-梁婧.jpg"/></div>
    <div class="main_bot">
        <h2>梁老师<span>课程研究员</span></h2>
        <h3>
            <span>抖音知识创作达人</span>
             </h3>
        <p>研发成果：
            <span>短视频副业类账号课程</span>
            <span> 直播人货场课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>梁老师<span>课程研究员</span></h2>
        <h3>入职时间：2018年07月</h3>

        <p> 7年互联网营销推广工作经验，对互联网+新营销有独到的见解和认知，曾为中国移动，中国电信，爱立信一线运营部进行营销培训，擅长以营销思维和锋利的创意解决问题。讲课风格循序渐进，让受训学员看得见、摸得着、体验得到的亲民教学，落到实处。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20220228103014软件测试-广州-韩雷.jpg"/></div>
    <div class="main_bot">
        <h2>韩老师<span>课程研究员</span></h2>
        <h3>
            <span>电信</span>
            <span> 南航</span>
             </h3>
        <p>研发成果：
            <span>CI持续集成</span>
            <span> DOCKER</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>韩老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年04月</h3>

        <p> 在电信核心管线项目中担任过测试工程师，落实项目自动化实施；负责过南航飞机载重、呼叫中心重大项目测试实施和性能测试方案落实。组过两个互联网电商系统团队，建立落实自动化解决方案、性能优化方案等。有丰富项目质量体系规划落实经验，熟悉各种自动化方案（接口、UI）体系、性能测试、CI体系等。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805181112大数据-北京总部-曹宇.jpg"/></div>
    <div class="main_bot">
        <h2>曹老师<span>课程研究员</span></h2>
        <h3>
            <span>Flink源码贡献者</span>
             </h3>
        <p>研发成果：
            <span>Python-ETL项目实战</span>
            <span> PySpark源码剖析</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>曹老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> Apache Flink源码贡献者，大数据云平台技术领域。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/2020080615224520200702165855郝以绅.jpg"/></div>
    <div class="main_bot">
        <h2>郝老师<span>课程研究员</span></h2>
        <h3>
            <span>架构师</span>
             </h3>
        <p>研发成果：
            <span>JavaV12.0 基础课程</span>
            <span> Git课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>郝老师<span>课程研究员</span></h2>
        <h3>入职时间：2014年07月</h3>

        <p> 5年软件开发及教学经验，Android、Java方向软件开发工程师，研发项目涉及教育、新闻、娱乐直播等。对Android、Java SE、Java Web、MySQL、前端等技术深入研究。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/cloud/20210121183954张老师_课研3.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>Flink源码贡献者</span>
             </h3>
        <p>研发成果：
            <span>亚秒级实时计算进阶课</span>
            <span> Flink源码剖析</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> Apache Flink源码贡献者，专注大数据实时计算领域，ApacheCon Asia 2022亚洲峰会特邀讲师		</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220217114644高志远.jpg"/></div>
    <div class="main_bot">
        <h2>高老师<span>课程研究员</span></h2>
        <h3>
            <span>腾讯、UI中国</span>
             </h3>
        <p>研发成果：
            <span>PS基础课程、优选网APP项目、Sketch实战、数智慧B端</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>高老师<span>课程研究员</span></h2>
        <h3>入职时间：2013年05月</h3>

        <p> 13年设计工作经验。国内设计色彩搭配知名博主、Adobe认证讲师。擅长软件：Photoshop、Illustrator、CorelDRAW、Sketch、AxureRP、C4D、Principle等。知名客户有：欧莱雅、万科地产、嘉顿食品、盛大游戏、宝马、阿里巴巴、新浪网、腾讯大粤网等。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/2022012012001120200917150324新媒体-深圳-刘贵鹏.jpg"/></div>
    <div class="main_bot">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>
            <span>香港卫视</span>
            <span> 凤凰社</span>
             </h3>
        <p>研发成果：
            <span>口播类文案类账号，2021版本短视频课程相关研发</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年08月</h3>

        <p> 8年新媒体运营经验，对文字营销和视频营销有着独到的见解，曾为上百家企业做过新媒体营销策划方案；2个月的时间孵化出0到200万的种草推荐类短视频账号,对热点事件极具敏感性，网感强；擅长讲故事，脱口秀，喜欢用轻松幽默的方式授课。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220218104108曾明杰.jpg"/></div>
    <div class="main_bot">
        <h2>曾老师<span>课程研究员</span></h2>
        <h3>
            <span>华润</span>
            <span> 招商</span>
            <span> 香港珠宝</span>
             </h3>
        <p>研发成果：
            <span>C4D阶段课程，平面设计阶段课程，字体设计课程等</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>曾老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年10月</h3>

        <p> 10年设计行业经验，熟悉IT与传统教育模式。曾在互联网公司担任设计师、设计师总监。擅长项目制作、字体设计、C4D三维设计、品牌设计等，项目经验丰富。曾服务企业有招商地产、香港珠宝、深圳海洋局、华润集团等。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20220803101620苏彬.jpg"/></div>
    <div class="main_bot">
        <h2>苏老师<span>课程研究员</span></h2>
        <h3>
            <span>阿里</span>
            <span>网易</span>
            <span>当当</span>
             </h3>
        <p>研发成果：
            <span>营销中心</span>
            <span> 优惠券</span>
            <span> 拼团活动</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>苏老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 10余年互联网产品设计及团队管理工作，曾就职于阿里，网易，当当，民生电商等互联网企业，并主导过多个从零到一上线的项目。在C端和B端产品均有多年实战经验，在需求分析，产品设计，用户体验及项目管理等方面有着深入的理解。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/cloud/20210121183930张老师_课研2.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>实时领域</span>
             </h3>
        <p>研发成果：
            <span>金融实时计算项目实战</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年04月</h3>

        <p> 实时领域，拥有金融行业大数据应用架构及开发经验。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20200703103140朱得君.jpg"/></div>
    <div class="main_bot">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>
            <span>多年开发经验</span>
            <span> 机器学习 </span>
             </h3>
        <p>研发成果：
            <span>NLP基础课程</span>
            <span> 在线医生项目 </span>
            </p>
    </div>
    <div class="main_mask">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年01月</h3>

        <p> 多年机器学习, 人工智能相关领域算法分析,研发经验。熟悉C++, Python语言, 对框架Tensorflow, Pytorch有熟练掌握,对机器学习, 自然语言处理相关理论和工程实践有深入研究。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20210121182848朱老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>
            <span>爱奇艺</span>
            <span> 用友</span>
             </h3>
        <p>研发成果：
            <span>Febo Monitor 前端监控系统课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年07月</h3>

        <p> 北京科技大学计算机类硕士，曾任爱奇艺前端开发，用友开发经理等职位。在移动端开发、大屏可视化、微信公众号、钉钉有丰富经验。技术栈主要是React，熟悉nodejs后台开发，阅读过jQuery，React源码。														</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20220623152107软件测试-北京-何飞飞.jpg"/></div>
    <div class="main_bot">
        <h2>何老师<span>课程研究员</span></h2>
        <h3>
            <span>国美</span>
            <span>五八同城</span>
            <span>全时</span>
             </h3>
        <p>研发成果：
            <span>测试平台</span>
            <span> 测试工具</span>
            <span> 接口自动化框架</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>何老师<span>课程研究员</span></h2>
        <h3>入职时间：2022年03月</h3>

        <p> 拥有15年的互联网从业经验，掌握测试开发和后端开发技能，做过工具开发，测试平台的开发，熟练掌握Java和Python，做过Spring MVC,SprintBoot相关的项目，对搭建自动化测试框架有着丰富的经验，精通Linux, Docker,K8S等运维知识。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20220803102014毕鹏.jpg"/></div>
    <div class="main_bot">
        <h2>毕老师<span>课程研究员</span></h2>
        <h3>
            <span>企业转型</span>
            <span>创业</span>
            <span>创新</span>
             </h3>
        <p>研发成果：
            <span>社交</span>
            <span>TMS</span>
            <span>物流管理</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>毕老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 13年互联网行业从业经验，9年产品设计经验，从事过开发、运营和产品工作，对互联网产品全周期管理有丰富的 实战经验，涉足社交、TMT、在线教育、电商、B端等行业，曾主导完成多家传统企业互联网转型，0-1项目经验 丰富。对于产品设计、产品创新、产品开发、产品规划等方面有丰富经验。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805181826大数据-北京昌平-赵佳乐.jpg"/></div>
    <div class="main_bot">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>
            <span>Pulsar社区贡献者</span>
             </h3>
        <p>研发成果：
            <span>湖仓一体项目实战</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> Apache Pulsar社区贡献者，数仓领域。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20210115161626束老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>束老师<span>课程研究员</span></h2>
        <h3>
            <span>紫光国信 </span>
            <span>10年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>束老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年10月</h3>

        <p> 10年工作经验，架构师，对sharding-jdbc、redis、memcached、rocketMQ、rabbitmq、xxl-job、quartz、dubbo、springboot等框架有深入理解，主要负责参与的项目《全国数字物价监测中心》、《上海浦发银行信用卡客户服务中心》、《意真金融平台统一支付中心》等。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20200921163203姚晓莹.jpg"/></div>
    <div class="main_bot">
        <h2>姚老师<span>课程研究员</span></h2>
        <h3>
            <span>硕士</span>
            <span> GIS行业工程</span>
             </h3>
        <p>研发成果：
            <span>智慧交通项目</span>
            <span> 图像处理基础课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>姚老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年05月</h3>

        <p> 毕业于哈尔滨工程大学，GIS行业工程实战，在图像分割、检测、追踪等方面有多年从业经历，参与多项国家级/部委级重大项目，具备丰富的工程落地经验。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220125142624课程研究员李老师搜狐畅游.jpg"/></div>
    <div class="main_bot">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>
            <span>搜狐畅游</span>
            <span> 优视科技</span>
             </h3>
        <p>研发成果：
            <span>CorelDRAW</span>
            <span> illustrator</span>
            <span> 设计进阶</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年07月</h3>

        <p> 13年互联网设计经验，UI设计师，拥有十多年互联网UI视觉设计及管理经验，擅长2B/2C领域，熟悉并精通互联网产品/设计工作和运营工作中的各个环节和流程。曾任职UC浏览器设计团队及畅游VC设计团队team leader，服务过盛大网络、阿里巴巴、中兴通信、搜狐等公司。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220125142847课程研究员刘老师京东.jpg"/></div>
    <div class="main_bot">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>
            <span>京东</span>
             </h3>
        <p>研发成果：
            <span>交互设计</span>
            <span> UI阶段营销</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 11年互联网产品设计经验，3年教学管理经验，熟悉IT教育模式、经营管理与市场运作。擅长项目制作，产品设计、交互设计、UI设计，可独立完成课程体系建设等工作。曾主导参与《京东金融app》《喵咔app》《逛购B端APP》《逛购C端APP》等大型互联网项目。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20220120134833新媒体-孙彤彤.jpg"/></div>
    <div class="main_bot">
        <h2>孙老师<span>课程研究员</span></h2>
        <h3>
            <span>7年经验</span>
            <span>喜马拉雅</span>
            <span> 花椒直播</span>
             </h3>
        <p>研发成果：
            <span>短视频拍摄制作课程</span>
            <span> 种草类账号</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>孙老师<span>课程研究员</span></h2>
        <h3>入职时间：2018年04月</h3>

        <p> 7年新媒体运营经验，擅长互联网内容的策划制作与运营，对于营销和策划有独到见解，在喜马拉雅平台策划编导千万级音频节目，曾担任花椒直播主播经纪人，参与策划生存直播真人秀生存之王挑战。善于在案例中萃取底层运营逻辑，被学员誉为“干货型”讲师。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20221102145635黄坚宇、.jpg"/></div>
    <div class="main_bot">
        <h2>黄老师<span>课程研究员</span></h2>
        <h3>
            <span>医疗</span>
            <span> 地产</span>
            <span> 早教</span>
             </h3>
        <p>研发成果：
            <span>智慧医疗</span>
            <span> CRM系统</span>
            <span> 地产管理</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>黄老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 多年产品经理实战经验，涉足医疗、早教、地产、社区等诸多领域，负责过用户量百万级的产品，在 C端和B端产品均有多年实战经验。擅长产品规划、需求分析、产品设计、数据分析等方向。				</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20210115103612周老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>周老师<span>课改研究员</span></h2>
        <h3>
            <span>vuejs开源贡献者</span>
             </h3>
        <p>研发成果：
            <span>Vue3小兔鲜儿电商前台</span>
            <span> Vue3+TS优医问诊项目课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>周老师<span>课改研究员</span></h2>
        <h3>入职时间：2015年11月</h3>

        <p> 曾参与过大型国有银行、地区银行的项目开发，大型电子商务购物平台开发。曾任Java开发工程师、项目组长、前端开发工程师、前端主管职位。参与开发的项目有：青岛银行生活通LBS项目、中国银行创业在线项目、孔夫子电子商务平台建设、书店项目、拍卖项目。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20210115161227白老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>白老师<span>课程研究员</span></h2>
        <h3>
            <span>11年研发经验</span>
            <span>技术经理</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>白老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年06月</h3>

        <p> 在金融公司担任架构师，在系统架构设计，分布式、微服务、高可用等技术架构具有丰富的实战经验。 对Spring、MyBatis、SpringBoot等架构经验，源码有较深的研究，专注于架构设计，研发以及解决方案的研究。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20200922150226王守文.jpg"/></div>
    <div class="main_bot">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>
            <span>新东方</span>
            <span>12年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            <span>红包雨专题</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年08月</h3>

        <p> 10年以上it相关经验，曾在新东方在线网络课堂项目担任技术主管，2015年起转架构。后在互联网金融，电子商务等项目担任一线架构师职务。精通Spring相关开发框架、熟练运用常用缓存、消息等中间件。对分布式及微服务环境，docker容器化及k8s编排等技术有线上实施经验。														</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20210126144910董老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>董老师<span>课程研究员</span></h2>
        <h3>
            <span>华为</span>
            <span> H5游戏开发</span>
             </h3>
        <p>研发成果：
            <span>黑马面面移动端 </span>
            </p>
    </div>
    <div class="main_mask">
        <h2>董老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年10月</h3>

        <p> 精通canvas，精通常用算法，尤其善长动效制作，后期主要担任前端架构师，曾主导多个大型项目前端项目开发工作，如：中国电信大数据、东风日产官网、农业银行智能营销平台等。这期间制作过h5游戏、门户网站、、直播app、小程序等涉及多领域，精通前端各主流技术。														</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20210121182900朱老师_课研2.jpg"/></div>
    <div class="main_bot">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>
            <span>京东</span>
            <span>ACP认证</span>
             </h3>
        <p>研发成果：
            <span>Ego微商小程序项目</span>
            <span> 短视频项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年07月</h3>

        <p> 8年软件测试及项目管理经验，先后在不同互联网名企担任软件测试工程师、测试主管等职务，参与测试的项目有网络安全类、互联网出行类、电子商务类项目，擅长功能测试，接口测试，及自动化测试。具有国家信息系统项目管理师认证、ACP认证。														</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/20210623173106凌俊.jpg"/></div>
    <div class="main_bot">
        <h2>凌老师<span>课程研究员</span></h2>
        <h3>
            <span>硕士</span>
            <span>AI独角兽公司数据科学家</span>
             </h3>
        <p>研发成果：
            <span>电信行业客户流失预测分析</span>
            <span> 千人千面智能营销系统</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>凌老师<span>课程研究员</span></h2>
        <h3>入职时间：2021年03月</h3>

        <p> 硕士研究生，曾就职于AI独角兽公司及多家互联网公司，担任数据科学家，算法工程师等职务，参与多家企业的AI+项目开发落地，在机器学习，深度学习的算法架构和模型调优方面有较深的造诣，在项目全流程解决方案方面有较深的行业理解及项目落地能力。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20221102144906金老师.jpg"/></div>
    <div class="main_bot">
        <h2>金老师<span>课程研究员</span></h2>
        <h3>
            <span>内容</span>
            <span>运营</span>
            <span>数据分析</span>
             </h3>
        <p>研发成果：
            <span>AARRR </span>
            <span> 内容项目</span>
            <span> UML-序列图 </span>
            </p>
    </div>
    <div class="main_mask">
        <h2>金老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 7年互联网产品从业经验，涉足金融、社交、工具、内容等多个领域，策划过多款百万级用户的产品。擅长产品策划、产品运营、项目管理、数据分析等，对产品策划和产品运营有深入的理解。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20221125101951郝强勇.png"/></div>
    <div class="main_bot">
        <h2>郝老师<span>课程研究员</span></h2>
        <h3>
            <span>融商</span>
            <span>10年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            <span> Kafka课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>郝老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年08月</h3>

        <p> 前融商集团CTO、P2P架构师，汇金融商所架构师，天津智慧城市项目负责人，研究院项目研究员、互联网企业内训师。专注于大型分布式架构，擅长自定义服务框架，深度参与 0 到 1 亿用户的技术架构体系搭建与架构优化工作。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20200921163124周明震.jpg"/></div>
    <div class="main_bot">
        <h2>周老师<span>课程研究员</span></h2>
        <h3>
            <span>硕士 </span>
            <span> 人工智能大牛</span>
             </h3>
        <p>研发成果：
            <span>传智大脑</span>
            <span> 中文标签化系统</span>
            <span> 泛娱乐推荐系统</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>周老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年04月</h3>

        <p> Sklearn机器学习工具源码贡献者；Google Tensorflow中文社区开发者；具有多年企业级AI项目开发经验，对推荐系统，NLP，知识图谱，问答系统有较深入研究。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20220722155344Java-北京-张玮.png"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>中国移动</span>
            <span>平安保险</span>
             </h3>
        <p>研发成果：
            <span>人工智能家居系统开发</span>
            <span>机票预习系统开发</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2016年06月</h3>

        <p> 6年软件开发及教学经验。先后入职过中国移动和平安保险公司，担任软件开发工程师。参与过人工智能家居系统开发，机票预习系统开发等。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20210115103538刘老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>
            <span>MAITROX</span>
             </h3>
        <p>研发成果：
            <span>webpack 基础课程 </span>
            <span>  Vue 基础课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年08月</h3>

        <p> 985学士，5年前端开发经验，具备全栈开发能力，曾就职于跨国公司和知名国企，参与多个大型项目研发，丰富的企业面试经验和员工内训经验。
深剖原理，谙熟本质。关注前端主流技术的发展，保持热度，迭代技术。
							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/2021062510531520211531171513782.jpg"/></div>
    <div class="main_bot">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>
            <span>北大方正</span>
            <span> 12年经验</span>
             </h3>
        <p>研发成果：
            <span>Redis</span>
            <span> RabbitMQ</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>入职时间：2018年10月</h3>

        <p> 10年以上IT相关经验，曾在北大方正担任项目经理。2010年起转架构，在互联网，游戏公司担任技术经理职务。精通Spring相关开发框架，在项目中熟练运用缓存技术和消息中间技术，对分布式及微服务架构有深入理解。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/2022012013424620210604110016王顺顺1.jpg"/></div>
    <div class="main_bot">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>
            <span>6年经验</span>
            <span> 代运营总监</span>
             </h3>
        <p>研发成果：
            <span>脚本文案高效写作法</span>
            <span> 个人IP短视频账号的暴力起号法</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>入职时间：2021年03月</h3>

        <p> 6年新媒体运营经验，曾担任多家公司运营总监，擅长社群、公号、短视频整合式运营，曾服务雀巢中国、宝马中国、广汽丰田，和君咨询、奇正藏药集团等大型品牌的短视频运营和新媒体公号运营业务。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220310142202dy-h高老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>高老师<span>课程研究员</span></h2>
        <h3>
            <span>用友</span>
            <span> React 技术大牛</span>
             </h3>
        <p>研发成果：
            <span> 黑马头条 PC 管理项目</span>
            <span> 黑马头条移动端项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>高老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 8年软件开发经验. 原用友架构师,开发装配式的移动开发平台,移动界面设计器,采用Reactjs为基础技术栈,对所有的组件进行动态渲染和拖拽式设计,针对不懂前端的后端工程师,实现几分钟配置一个移动界面的开发需求. 对配置化、零编码的开发平台有较强的技术和架构能力。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20221102143456马老师.jpg"/></div>
    <div class="main_bot">
        <h2>马老师<span>课程研究员</span></h2>
        <h3>
            <span>婚礼纪</span>
            <span> B端</span>
            <span> 电商</span>
             </h3>
        <p>研发成果：
            <span>CRM移动端</span>
            <span> 客服系统</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>马老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 10年+的互联网从业经验，曾任职于婚礼纪、团车网等行业独角兽公司，具有丰富的产品实战经验，涉及电商、新零售、O2O等行业，擅长用户端、中后台产品规划设计，精通用户调研、需求分析及管理、原型设计、项目管理及数据分析等。	</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/2020080615433420200702172728王松岩.jpg"/></div>
    <div class="main_bot">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>
            <span>中科软TL</span>
            <span>7年经验</span>
             </h3>
        <p>研发成果：
            <span>TMS系统开发</span>
            <span>短信中台</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年03月</h3>

        <p> 7年研发经验，先后在 中科软、开元金融、蜂网供应链等公司，任职TL、研发经理等职位，擅长企业信息化、供应链、互联网金融等系统的研发管理。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20220722155926满一航(1).png"/></div>
    <div class="main_bot">
        <h2>满老师<span>课程研究员</span></h2>
        <h3>
            <span>15年经验</span>
            <span> 中科富星</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>满老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年04月</h3>

        <p> 16年软件开发与教学经验。先后在中科富星、Radvision、河北恒信等企业担任软件工程师、架构师等职务。主导和参与的项目有吉林长春市公民信息查询与核查系统、iContact、iCM等视频会议产品的研发维护、恒信卡包项目、恒信pbox内容分发系统等。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20210115103036凡老师-课研.jpg"/></div>
    <div class="main_bot">
        <h2>凡老师<span>课程研究员</span></h2>
        <h3>
            <span>京东商城</span>
             </h3>
        <p>研发成果：
            <span> Vue 原理进阶课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>凡老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年05月</h3>

        <p> 曾供职于京东商城，先后参加多个大型管理系统开发，负责前端技术架构，公共业务组件封装,精通前端技术体系，熟练使用CSS3、ES6，TypeScript、Vue、React、Node.js、MySQL等前后端技术。擅长将工作经验融入教学实践，授课清晰，认真负责，热衷于传播实战开发技能，深受学员认可。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20200922151048沈坤林.jpg"/></div>
    <div class="main_bot">
        <h2>沈老师<span>课程研究员</span></h2>
        <h3>
            <span>三维度</span>
            <span>8年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            <span> 秒杀专题</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>沈老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年06月</h3>

        <p> 先后在三维度、中润四方、中保鸿业担任项目经理或技术总监，精通Java企业平台技术，熟练掌握企业搜索引擎、分布式架构、SOA架构、微服务架构。曾研发广西税务系统、易迅网络发票、三维度商城、三维度支付系统，主导B2B2C大型电商，神州培训网、万语网、金融平台的研发与重构。														</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220125142732课程研究员刘老师acaa设计专家.jpg"/></div>
    <div class="main_bot">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>
            <span>acaa设计，adobe认证设计师</span>
             </h3>
        <p>研发成果：
            <span>电商设计新课程，年货节手绘课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>刘老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年11月</h3>

        <p> 拥有9年设计经验，曾服务北京正邦品牌策划，百度用户体验中心，北京资海科技集团，龙采科技集团，优逸客科技教育集团，洛杉矶张大钦律师事务所等众多一线互联网设计与外包平台。担任视觉设计师。致力于研究视觉界面设计、品牌服务设计、人机交互等方向，项目经验丰富。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20210622092338产品经理-dy-张玮.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>中国移动</span>
            <span>平安保险</span>
             </h3>
        <p>研发成果：
            <span>人工智能家居系统开发</span>
            <span>机票预习系统开发</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2016年06月</h3>

        <p> 6年软件开发及教学经验。先后入职过中国移动和平安保险公司，担任软件开发工程师。参与过人工智能家居系统开发，机票预习系统开发等。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20210622092946产品经理-dy-陈金.jpg"/></div>
    <div class="main_bot">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>
            <span>国家电网</span>
            <span> 8年经验</span>
             </h3>
        <p>研发成果：
            <span>JavaWeb</span>
            <span> Spring框架</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年09月</h3>

        <p> 6年研发经验，2年java教学经验，先后负责国家电网、质检总局、广西海关等单位的多个大型系统研发，后期主做在线教育互联网项目。精通MVC框架、分布式框架、微服务框架。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/pm/20210622093919产品经理-dy-杨松.jpg"/></div>
    <div class="main_bot">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>
            <span>尚德机构</span>
            <span>  10年经验</span>
             </h3>
        <p>研发成果：
            <span>传智健康项目</span>
            <span> Redis</span>
            <span> zookeeper</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年12月</h3>

        <p> 15年软件开发与教学经验。先后在品西互动、盈联电子、尚德机构担任研发总监、移动开发经理职务，先后主导社区管家、供销回收系统等项目；拥有丰富的Java教学与企业级培训经验，曾先后为中创、新华人寿、齐鲁银行等公司进行企业级Java培训。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20220113102324DY-上海-张凯.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>15年经验</span>
            <span> 全栈</span>
             </h3>
        <p>研发成果：
            <span>工程化</span>
            <span> 服务化</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 14年的软件开发经验，曾任职于FIS、IBM等国际知名企业，从事金融、零售、政企互联网相关的大数据分析和业务系统的前后端研发工作。拥有全栈开发能力，精通各类 Web 前端开发技术以及后端Java技术栈、Node.js技术栈等。乐于帮助学生成长为专业软件开发从业者。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/cloud/20210121184019赵老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>
            <span>IT名企架构师</span>
            <span>12年经验</span>
             </h3>
        <p>研发成果：
            <span>通用权限系统课程</span>
            <span>架构师课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>入职时间：2012年07月</h3>

        <p> 14年软件开发与教学经验，具有丰富的技术团队管理经验，精通Java 
 EE(JSPServlet、JDBC、Struts2、Spring、Hibernate、MyBatis)，以及 WebService、Ajax、Oracle、DB2、MySQL、NoSQL、分布式RPC框架Dubbo、SpringCloud、ZooKeeper、MQ、Redis等。曾先后参与江苏媒资系统、中信银行大客户对公平台、胜利油田办公自动化平台、武警部队信息化系统的研发和管理工作。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20210121182547惠老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>惠老师<span>课程研究员</span></h2>
        <h3>
            <span>IT名企架构师</span>
            <span>7年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            <span> Spring课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>惠老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年03月</h3>

        <p> 先后在国内IT名企担任软件开发工程师、项目经理等职务。
掌握JavaSE，JavaWeb、MySql、Redis以及Dubbo、Zookeeper、Spring Boot、Spring Cloud等分布式架构技术以及vue.js等前端框架，曾主导多个企业级项目的研发，主要所涉及的领域有金融，电子商务等。													</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/20220118180851王老师.jpg"/></div>
    <div class="main_bot">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>
            <span>硕士</span>
            <span> 深度学习技术</span>
             </h3>
        <p>研发成果：
            <span>NLP技术项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>入职时间：2014年01月</h3>

        <p> 毕业于山东大学，计算机硕士。具有10年以上项目开发经验，主持开发过的项目涉及银行、政府等应用领域。专注自然语言处理NLP、计算机视觉CV等深度学习领域研究。 多年企业内训培训师，讲课深入浅出，深受学生和企业员工的好评。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220310143204dy-pz张老师-教研.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>中国移动</span>
            <span>平安保险</span>
             </h3>
        <p>研发成果：
            <span>人工智能家居系统开发</span>
            <span>机票预习系统开发</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2016年06月</h3>

        <p> 6年软件开发及教学经验。先后入职过中国移动和平安保险公司，担任软件开发工程师。参与过人工智能家居系统开发，机票预习系统开发等。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805181916大数据-李锋涛.jpg"/></div>
    <div class="main_bot">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>
            <span>Doris社区贡献者</span>
             </h3>
        <p>研发成果：
            <span>在线教育离线数仓项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>李老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 985计算机硕士，Apache Doris社区贡献者。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805182021Python-北京-朱得君.jpg"/></div>
    <div class="main_bot">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>
            <span>人工智能</span>
            <span>大数据</span>
             </h3>
        <p>研发成果：
            <span>推荐系统实战</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 985计算机硕士，大数据/人工智能。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20220826162541胡凌浩.jpg"/></div>
    <div class="main_bot">
        <h2>胡老师<span>课程研究员</span></h2>
        <h3>
            <span>Vue</span>
            <span>  React</span>
            <span> TypeScript</span>
             </h3>
        <p>研发成果：
            <span>品优购Node中间层项目</span>
            <span>Vue面经PC移动端项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>胡老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年08月</h3>

        <p> 从事软件开发工作多年，涉及.Net, HTML5, Unity3d, iOS等平台，曾参与乌龟猜猜,敲打乐敲你妹等跨平台游戏项目的开发，之后投身教育行业,授课过程中擅长使用图片、动画把知识点化繁为简,深受学员喜爱。		</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20200702175236罗学勇.jpg"/></div>
    <div class="main_bot">
        <h2>罗老师<span>课程研究员</span></h2>
        <h3>
            <span>日立</span>
            <span> 人人贷</span>
            <span> 11年经验</span>
             </h3>
        <p>研发成果：
            <span>黑马头条项目课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>罗老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年04月</h3>

        <p> 在电子政务、办公、电商、社交等行业开发方面有丰富的实战经验。先后在成都融特、日立、人人贷担任TeamLeader、技术经理等职位，负责全国政协门户、Wradio+、Chinaface、居然在线、个贷官网、人人U学大数据平台等项目研发。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/202211241715551-赵艳秋-昌平校区.jpg"/></div>
    <div class="main_bot">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>
            <span>JavaScript</span>
            <span> Vue.js</span>
             </h3>
        <p>研发成果：
            <span>前端入门视频教程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>入职时间：2014年03月</h3>

        <p> 多年开发经验，精通HTML5、CSS3、JavaScript、jQuery、Vue、React等前端技术，曾先后主导多个大型项目开发。授课认真负责、深入浅出，致力于让不同基础的学生日有所学、日有所长。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20210126135245张老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>物流项目</span>
             </h3>
        <p>研发成果：
            <span>10年软件开发经验</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年06月</h3>

        <p> 10年软件研发、架构和管理经验，曾在中国移动、蜂网供应链、精英路通等公司担任技术负责人。精通供应链管理、物联网等业务和spring相关框架、熟悉运用常用缓存、消息等中间件。对分布式及微服务环境，docker容器化，自动部署和持续集成上有丰富的经验。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/netmaket/20220120135915杨鑫治.jpg"/></div>
    <div class="main_bot">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>
            <span>自动化数据采集</span>
             </h3>
        <p>研发成果：
            <span>电商数据采集</span>
            <span>电商数据大屏可视</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年06月</h3>

        <p> 有丰富项目开发架构经验，曾任职某网络安全公司，参与过多个政府部门的安全项目，熟悉C/C++、Python，shell等编程语言，熟悉linux系统编程，数据库等，精通Python爬虫、数据分析、自动化、自动化测试开发						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805182120大数据-康健.jpg"/></div>
    <div class="main_bot">
        <h2>康老师<span>课程研究员</span></h2>
        <h3>
            <span>数据挖掘技术</span>
             </h3>
        <p>研发成果：
            <span>车联网项目实战</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>康老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 985硕士，数据库与数据挖掘技术领域。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805182336大数据-上海-江宗海.jpg"/></div>
    <div class="main_bot">
        <h2>江老师<span>课程研究员</span></h2>
        <h3>
            <span>数仓领域</span>
             </h3>
        <p>研发成果：
            <span>金融保险项目实战</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>江老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 擅长数仓领域，有丰富的金融大数据行业经验。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805182449大数据-上海-闻耀.jpg"/></div>
    <div class="main_bot">
        <h2>闻老师<span>课程研究员</span></h2>
        <h3>
            <span>数仓领域</span>
             </h3>
        <p>研发成果：
            <span>Kafka源码剖析</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>闻老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 擅长数仓领域，擅长海量数据下的流式计算和离线数据处理。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20220211113541前端-柴鹏1.jpg"/></div>
    <div class="main_bot">
        <h2>柴老师<span>课程研究员</span></h2>
        <h3>
            <span>vue</span>
            <span> react</span>
             </h3>
        <p>研发成果：
            <span>小兔鲜儿PC电商</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>柴老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年03月</h3>

        <p> Web前端开发工程师，五年开发经验，两年团队管理经验，Vue用户。先后参加多个大型管理系统开发，负责前端技术架构，公共业务组件封装；精通前端技术体系，熟练使用CSS3、ES6、Vue、React等前端技术；授课清晰和蔼，擅长调用学员的思考能力，深受学员喜爱。			</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20211213160348前端-上海-蒋鹏.jpg"/></div>
    <div class="main_bot">
        <h2>蒋老师<span>课程研究员</span></h2>
        <h3>
            <span>Vue</span>
            <span> React</span>
            <span> TypeScript</span>
            <span> Node</span>
             </h3>
        <p>研发成果：
            <span>Koa</span>
            <span> Egg</span>
            <span> NoSql</span>
            <span> SSR</span>
            <span> 服务端渲染</span>
            <span> serverless</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>蒋老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年07月</h3>

        <p> Web前端工程师，多年前端开发和实践教学经验，精通JavaScript、Ajax、jQuery、Vue、React、小程序以及Node.js、PHP、MySQL等前后端技术。喜欢钻研，热爱源码封装，授课风趣幽默，由浅入深，广为好评！					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/2022112417165111-吕佳琪-总部.jpg"/></div>
    <div class="main_bot">
        <h2>吕老师<span>课程研究员</span></h2>
        <h3>
            <span>JavaScript</span>
            <span> React</span>
             </h3>
        <p>研发成果：
            <span>优医问诊H5患者端</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>吕老师<span>课程研究员</span></h2>
        <h3>入职时间：2022年04月</h3>

        <p> 前端开发工程师，曾就职于滴滴，参与研发公司内的大型中后台项目以及企业内部组件库的搭建，擅长HTML、CSS、JavaScript、React等各种前端技术，喜欢钻研新技术，项目经验丰富。				</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/web/20220826163007前端-苏杰豪.jpg"/></div>
    <div class="main_bot">
        <h2>苏老师<span>课程研究员</span></h2>
        <h3>
            <span>Vue</span>
            <span> TypeScript</span>
            <span> 小程序</span>
             </h3>
        <p>研发成果：
            <span>小兔鲜儿小程序项目</span>
            <span>小兔鲜儿Vue3+TS项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>苏老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年12月</h3>

        <p> 6年+从业经验，精通HTML5, CSS3, JavaSript,熟悉Vue, React, Angular,j Query, BootStrap。特别擅长微信小程序，首次研发和实施了完整的微信小程序商城项目。教学细腻，能够深入浅出地剖析知识点。</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20200708152903Java-总部-于洪波.jpg"/></div>
    <div class="main_bot">
        <h2>于老师<span>课程研究员</span></h2>
        <h3>
            <span>10年软件开发经验</span>
             </h3>
        <p>研发成果：
            <span>物流项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>于老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年06月</h3>

        <p> 8年软件开发及教学经验，先后在360、亚信、众信旅游担任软件工程师，技术经理等职位。精通Spring、SpringBoot、SpringCloud、Docker微服务开发等。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210623135300张老师_课程研究员.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>10年软件开发经验</span>
             </h3>
        <p>研发成果：
            <span>物流项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年06月</h3>

        <p> 10年软件研发、架构和管理经验，曾在中国移动、蜂网供应链、精英路通等公司担任技术负责人。精通供应链管理、物联网等业务和Spring相关框架、熟悉运用常用缓存、消息等中间件。对分布式及微服务环境，Docker容器化，自动部署和持续集成上有丰富的经验。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805182542大数据-北京总部-孙阳征.jpg"/></div>
    <div class="main_bot">
        <h2>孙老师<span>课程研究员</span></h2>
        <h3>
            <span>数仓领域</span>
             </h3>
        <p>研发成果：
            <span>传统数仓及数据可视化项目实战</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>孙老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年08月</h3>

        <p> 数仓领域，主导千亿级数据项目。				</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220218150838UI-北京-赵雅芳.jpg"/></div>
    <div class="main_bot">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>
            <span>百度</span>
            <span> ps营销课程</span>
             </h3>
        <p>研发成果：
            <span>智慧网v4.0改版</span>
            <span> ps营销课程</span>
            <span>短视频等项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>入职时间：2021年03月</h3>

        <p> 5年设计经验，具备多年的网页与APP项目开发经验。涉及领域包括UI设计、网站设计、平面印刷广告、包装设计、手绘、VI设计等。曾服务百度、阿里巴巴、汽车之家、北京理工等一线互联网设计与外包平台。曾主导参与《中国评测云门户》《北理工会议系统》《北理工材料管理系统》《瞄再买App》《互联教育APP》等互联网项目。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20220228103427dy-p赵文成.jpg"/></div>
    <div class="main_bot">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>
            <span>DevOps Master</span>
            <span> 云计算架构</span>
             </h3>
        <p>研发成果：
            <span>《黑马DevOps中台》</span>
            <span> 《传智大脑》</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>入职时间：2020年04月</h3>

        <p> 多年IT基础设施运维和研发经验，精通Python、Golang、TypeScript、JavaScript等开发语言，全栈开发践行者。擅长运维架设计和自动化运维中台研发，对云计算和云原生服务平台也有较深入的研究。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/python/20220805182853赵晨杰.jpg"/></div>
    <div class="main_bot">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>
            <span>大数据</span>
            <span> 人工智能</span>
             </h3>
        <p>研发成果：
            <span>用户画像项目实战</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>赵老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年05月</h3>

        <p> 85计算机硕士，多年深耕大数据、人工智能领域，ApacheCon Asia 2022亚洲峰会特邀讲师		</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20210126134932杨老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>
            <span>尚德机构</span>
            <span>  10年经验</span>
             </h3>
        <p>研发成果：
            <span>传智健康项目</span>
            <span> Redis</span>
            <span> ZooKeeper</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>杨老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年12月</h3>

        <p> 15年软件开发与教学经验。先后在品西互动、盈联电子、尚德机构担任研发总监、移动开发经理职务，先后主导社区管家、供销回收系统等项目；拥有丰富的Java教学与企业级培训经验，曾先后为中创、新华人寿、齐鲁银行等公司进行企业级Java培训。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20210531165904徐老师.jpg"/></div>
    <div class="main_bot">
        <h2>徐老师<span>课程研究员</span></h2>
        <h3>
            <span>华为鼎桥</span>
            <span> 7年经验</span>
             </h3>
        <p>研发成果：
            <span>git</span>
            <span> maven</span>
            <span> dubbo</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>徐老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 7年软件开发经验,精通Java, Git, Maven, Dubbo, ZooKeeper, es, RabbitMQ, SpringBoot/Cloud等,参与四川电信核心计费系统,华为OMC专网,华为智能光伏解决方案,保险等项目的开发与设计。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20210531170525郝以绅.jpg"/></div>
    <div class="main_bot">
        <h2>郝老师<span>课程研究员</span></h2>
        <h3>
            <span>架构师</span>
             </h3>
        <p>研发成果：
            <span>JavaV12.0 基础课程</span>
            <span> Git 课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>郝老师<span>课程研究员</span></h2>
        <h3>入职时间：2014年07月</h3>

        <p> 5年软件开发及教学经验，Android、Java方向软件开发工程师，研发项目涉及教育、新闻、娱乐直播等。对Android、Java SE、JavaWeb、MySQL、前端等技术深入研究。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/2020080614561720200702172548王守文.jpg"/></div>
    <div class="main_bot">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>
            <span>新东方</span>
            <span>12年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            <span>红包雨专题</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>王老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年08月</h3>

        <p> 10年以上it相关经验，曾在新东方在线网络课堂项目担任技术主管，2015年起转架构。后在互联网金融，电子商务等项目担任一线架构师职务。精通Spring相关开发框架、熟练运用常用缓存、消息等中间件。对分布式及微服务环境，docker容器化及k8s编排等技术有线上实施经验。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20220722155318Java-北京-郝强勇(1).png"/></div>
    <div class="main_bot">
        <h2>郝老师<span>课程研究员</span></h2>
        <h3>
            <span>融商</span>
            <span>10年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            <span> Kafka课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>郝老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年08月</h3>

        <p> 前融商集团CTO、P2P架构师，汇金融商所架构师，天津智慧城市项目负责人，研究院项目研究员、互联网企业内训师。专注于大型分布式架构，擅长自定义服务框架，深度参与 0 到 1 亿用户的技术架构体系搭建与架构优化工作。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/20220123163011陈老师.jpg"/></div>
    <div class="main_bot">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>
            <span>7年经验</span>
            <span> 凤凰网</span>
             </h3>
        <p>研发成果：
            <span>微服务课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 7年软件研发、项目管理与教学经验。先后在凤凰网、恒信东方担任技术主管、项目经理等职位。主导研发超过5个以上大型项目与平台，包括紫马5.0，凤凰房产小区二手房业务平台，恒信合家欢等项目。精通微服务架构，擅长解决高并发，亿级数据量等架构设计。				</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/20220317161424dy-t白云鹏-课研.jpg"/></div>
    <div class="main_bot">
        <h2>白老师<span>课程研究员</span></h2>
        <h3>
            <span>11年研发经验</span>
            <span>技术经理</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>白老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年06月</h3>

        <p> 在金融公司担任架构师，在系统架构设计，分布式、微服务、高可用等技术架构具有丰富的实战经验。 对Spring、mybatis、SpringBoot等架构经验，源码有较深的研究，专注于架构设计，研发以及解决方案的研究。					</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/20220317163256dy-P上海-课研惠东鹏.jpg"/></div>
    <div class="main_bot">
        <h2>惠老师<span>课程研究员</span></h2>
        <h3>
            <span>移动端架构师</span>
             </h3>
        <p>研发成果：
            <span>利安社区</span>
            <span>荣华果园等</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>惠老师<span>课程研究员</span></h2>
        <h3>入职时间：2015年05月</h3>

        <p> 多年软件开发经验和丰富的教学经验，先后在多家公司担任团队技术负责人。熟悉Python、C、Objective-C、Swift等编程语言,带领团队开发出《利安社区》《荣华果园》《爱遇》《WinShop》等。授课风趣幽默，善于引导学生主动思考问题。								</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/20220317163642dy-朱老师_课研.jpg"/></div>
    <div class="main_bot">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>
            <span>爱奇艺</span>
            <span> 用友</span>
             </h3>
        <p>研发成果：
            <span>Febo Monitor 前端监控系统课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>朱老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年07月</h3>

        <p> 北京科技大学计算机类硕士，曾任爱奇艺前端开发，用友开发经理等职位。在移动端开发、大屏可视化、微信公众号、钉钉有丰富经验。技术栈主要是React，熟悉nodejs后台开发，阅读过jQuery，React源码。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ai/20220317164617dy-t束文奇-课研.jpg"/></div>
    <div class="main_bot">
        <h2>束老师<span>课程研究员</span></h2>
        <h3>
            <span>紫光国信 </span>
            <span>10年经验</span>
             </h3>
        <p>研发成果：
            <span>架构师课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>束老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年10月</h3>

        <p> 10年工作经验，架构师，对sharding-jdbc、redis、memcached、rocketMQ、rabbitmq、xxl-job、quartz、dubbo、springboot等框架有深入理解，主要负责参与的项目《全国数字物价监测中心》、《上海浦发银行信用卡客户服务中心》、《意真金融平台统一支付中心》等。							</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/test/20220228103720dy-h胡聪聪.jpg"/></div>
    <div class="main_bot">
        <h2>胡老师<span>课程研究员</span></h2>
        <h3>
            <span>vue</span>
            <span> react</span>
            <span> typescript</span>
             </h3>
        <p>研发成果：
            <span>react基础</span>
            <span>  react极客网</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>胡老师<span>课程研究员</span></h2>
        <h3>入职时间：2016年03月</h3>

        <p> 曾就职于神州泰岳股份有限公司，先后参与了Ultra-EMS、Ultra-PASME等多个项目的开发，精通javaee与前端开发。有丰富的开发经验和教学经验，上课风趣幽默，善于将繁杂晦涩的知识点以通俗易懂的方式进行讲解，让学生知其然，更知其所以然。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/javaee/20220228104122陈老师.jpg"/></div>
    <div class="main_bot">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>
            <span>7年经验</span>
            <span> 凤凰网</span>
             </h3>
        <p>研发成果：
            <span>Java SE课程</span>
            <span> 微服务课程</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>陈老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年03月</h3>

        <p> 7年软件研发、项目管理与教学经验。先后在凤凰网、恒信东方担任技术主管、项目经理等职位。主导研发超过5个以上大型项目与平台，包括紫马5.0，凤凰房产小区二手房业务平台，恒信合家欢等项目。精通微服务架构，擅长解决高并发，亿级数据量等架构设计。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220310144211dy-t吴锦涛-课研.jpg.png"/></div>
    <div class="main_bot">
        <h2>吴老师<span>课程研究员</span></h2>
        <h3>
            <span>13年软件开发经验</span>
            <span>技术总监</span>
             </h3>
        <p>研发成果：
            <span>通用网关项目</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>吴老师<span>课程研究员</span></h2>
        <h3>入职时间：2019年08月</h3>

        <p> 先后就职于中搜网络、中国支付网、和创金服、牛油果科技并历任各公司开发组长、技术经理，技术总监及CTO5、在企业带领团队先后开发并上线了搜索新闻频道系统、银行卡收单系统、消费金融平台系统、互金信贷系统、风控系统。						</p>
    </div>
</li>
<li>
    <div class="main_pic"><img src="/images/teacher/ui/20220310141649dy-j张福全_课研2.jpg"/></div>
    <div class="main_bot">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>
            <span>架构师</span>
            <span>  10年经验</span>
             </h3>
        <p>研发成果：
            <span>Spring</span>
            <span>SpringMVC</span>
            <span>Mybatis</span>
            </p>
    </div>
    <div class="main_mask">
        <h2>张老师<span>课程研究员</span></h2>
        <h3>入职时间：2017年04月</h3>

        <p> 10年企业一线开发经验，多家企业担任架构师，项目经理等职位。参与或主持中航信-航意险、中彩网、网上商城等项目的开发。专注JavaEE开发，深入研究Spring全家桶、Mybatis、dobuo等流行框架，对分布式，微服务架构体系有独到的见解。							</p>
    </div>
</li>
</ul>

							</div>
						</section>
					</div>
				</div>
			</div>
			<img src="/2020gw/images/flowimg/flowbg1.png" class="flowbg1" />
		</div>	
	</div>
	<div class="tea_box2">
		<div class="inner">
			<div class="tea1_hd">
				<h2>专职教学团队</h2>
				<p>严控教学质量，精心搭建实力雄厚的超千人团队</p>
			</div>
			<div class="teabox2_con">
				<div class="teabox2_hd teabox2_hd1"><i></i><p><span>讲师筛选标准<em></em></span>优中选优，教学老师录取率<3%，从源头严控师资及授课质量</p></div>
				<!--课研人才标准-->
<div class="teamain_bot">
	<div class="botlists botlists4">
		<h2>人才筛选<br /><span>4项标准</span></h2>
		<ul class="clears">
			<li><div class="h4">标准化讲师画像</div><p>业务技能、性格<span>特色、沟通能力</span></p><img src="/2020gw/images/tea/box5_icon1.png" /></li>
			<li><div class="h4">初试技术深度</div><p>框架能力、底层原理、性能与<span>安全、算法与数据结构</span></p><img src="/2020gw/images/tea/box5_icon1.png" /></li>
			<li><div class="h4">复试授课质量<div><p>课程设计、授课逻辑互动与<span>交互、代码规范</span></p><img src="/2020gw/images/tea/box5_icon1.png" /></li>
			<li><div class="h4">终试价值观</div><p>抗压能力、学习动力、<span>专业程度、培养潜力</span></p></li>
		</ul>
	</div>
	<div class="botlists botlists2 botlists5">
		<h2>人才考核<br /><span>8大环节</span></h2>
		<div class="teacherpic8">
			<img src="/2020gw/images/teacherpic10.png" />
			<div class="bot2con">
				<p><span><i>1</i>定制个性化考核方案</span><span><i>5</i>教育心理考核</span></p>
				<p><span><i>2</i>讲师素质考核</span><span><i>6</i>教学方法考核</span></p>
				<p><span><i>3</i>排课、备课产出物考核</span><span><i>7</i>课堂试讲考核</span></p>
				<p><span><i>4</i>视频录制考核</span><span><i>8</i>正式授课答辩</span></p>
			</div>
		</div>
	</div>
	<div class="botlists botlists3 botlists6">
		<h2>人才培训及<br />发展规划</h2>
		<img src="/2020gw/images/tea/box5_img2.png" class="teacherpic9" />
		<div class="bot3con">
			<p>每日授课<br>学员满意度打分</p>
			<p>阶段课程实施<br>评审组审核</p>
			<p>传智培训院<br>多维培养计划</p>
			<p style="padding-left: 106px;width: 80px;">讲师专属<br>晋升通道</p>
		</div>
	</div>
</div>
				<div class="teabox2_hd teabox2_hd2"><i></i><p><span>三大教法标准<em></em></span>教学团队创三大教学法，讲透技术重难点</p></div>
				<div class="teabox2_main3">
					<ol class="clears">
						<li class="cur"><span>情景式教学法</span></li>
						<li><span>场景式授课法</span></li>
						<li><span>OPEN教学法</span></li>
					</ol>
					<ul class="clears">
						<li class="clears cur">
							<div class="main3_left">
								<div class="left_con1">
									<h3>情景式教学是指教研人员根据人对知识的理解和消化规律，将教学过程形象化的一种授课方法，集风趣、知识、故事场景于一体，可大大提高学员对知识的理解和吸收主要分为以下三个阶段：</h3>
									<p><span><b>1.感知阶段</b>培养兴趣</span>引入知识点情景，形成表象，幽默故事，<br />解读晦涩难懂概念</p>
									<p class="p2"><span><b>2.理解阶段</b>故事代码双结合</span>深入故事场景，故事与代码结合，<br />更好理解代码编写规律。让代码不陌生，<br />不知不觉掌握每个知识点</p>
									<p class="p3"><span><b>3.深化阶段</b>深入知识延展</span>继续深入知识点的其他使用或底层原理，<br />保障知识点牢固掌握</p>
								</div>
								<div class="left_con2">
									<h3>对比传统教学方法的优势</h3>
									<p>技术定义纯罗列，理解困难<span>引入故事场景，好理解</span></p>
									<p>复杂概念记不住，难以吸收<span>代码结合剧情，易吸收</span></p>
									<p>抽象概念不理解，无法应用<span>深入原理讲解，牢掌握</span></p>
								</div>
							</div>
							<div class="main3_right">
								<img src="/2020gw/images/teaimg/teabox2pic1.jpg" class="teabox2pic1" />
							</div>
						</li>
						<li class="clears">
							<div class="main3_left">
								<div class="left_con1 left_con3">
									<h3>整合优质教学资源，系统化提炼数十个企业真实开发环境中的业务场景，独创了场景式教学法。该教学法通过分析场景特点、梳理场景流程、呈现给定场景下技术的实现3个步骤，向学员清晰的展现了开发的全流程。</h3>
								</div>
								<div class="left_con4">
									<h3>场景式教学法的优势</h3>
									<div class="con2list">
										<p><i></i><span>场景多样</span>学员工作后的各类<br />业务场景基本覆盖</p>
										<p><i></i><span>场景真实</span>真实还原企业Java开发<br />中的业务场景</p>
										<p><i></i><span>强化吸收</span>根据人的认知规律进行课程设计<br />学员吸收度大大提升</p>
										<p><i></i><span>内容生动</span>场景与技术紧密结合<br />将枯燥的知识点活化</p>
									</div>
								</div>
							</div>
							<div class="main3_right">
								<img src="/2020gw/images/teaimg/teabox2pic2.jpg" class="teabox2pic2" />
							</div>
						</li>
						<li class="clears">
							<div class="main3_left main3_left2">
								<div class="left_con1 left_con3">
									<h3>OPEN 教学法是由传智教育培训院创办的一套教学方法论，旨在「用更短的时间讲明白一个知识点」，只有老师用更短的时间把课讲清楚，学生才能有更多的时间做刻意练习，从而达到教练结合融会贯通。</h3>
								</div>
								<div class="left_con5">
									<h3>OPEN 教学法四大核心要素</h3>
									<p><span>Objective（目标）</span>具体要交付给学生的能力，学生可以用来解决具体的问题</p>
									<p><span>Path（路径）</span>基于学生既有知识储备，设计学习线路</p>
									<p><span>Experience（体验）</span>按照路径顺序授课，主线清晰，保证学习体验</p>
									<p><span>Note（落地结论）</span>交付给学生经过提炼的知识干货，降低复习难度，提高学习效率</p>
								</div>
								<div class="left_con6">
									<h3>OPEN教学法的作用</h3>
									<p><span>1. 规避常见授课问题</span>4.用更短的时间授课，给学生更多的时间练习</p>
									<p><span>2. 授课结构好、清晰度高</span>5. 缩短老师培养周期，提升授课质量</p>
									<p><span>3. 授课标准化、可量化、可衡量</span>6. 提供风格统一的教学视频，学生吸收更迅速</p>
								</div>
							</div>
							<div class="main3_right main3_right2">
								<img src="/2020gw/images/teaimg/teabox2pic3.jpg" class="teabox2pic3" />
							</div>
						</li>
					</ul>
				</div>
				<div class="teabox2_hd teabox2_hd3"><i></i><p><span>授课老师履历<em></em></span>千余位授课经验丰富的教学老师，带你乘风破浪</p></div>
				<div class="graybg tea_main">
					<div style="position: relative;" class="clears">
						<div class="tea_hd">
		<ul>
				<li bz="ajavaee" class='ajavaee cur' ><span>JavaEE</span></li>
				<li bz="aweb" class='aweb' ><span>HTML&JS+前端</span></li>
				<li bz="apython" class='apython' ><span>Python+大数据开发</span></li>
				<li bz="aai" class='aai' ><span>人工智能开发</span></li>
				<li bz="aui" class='aui' ><span>UI/UE设计</span></li>
				<li bz="atest" class='atest' ><span>软件测试</span></li>
				<li bz="anetmaket" class='anetmaket' ><span>新媒体+短视频直播运营</span></li>
				<li bz="apm" class='apm' ><span>产品经理</span></li>
				<li bz="aLinux" class='aLinux' ><span>Linux云计算+运维开发</span></li>
				<li bz="arobot" class='arobot' ><span>智能机器人软件开发</span></li>
				<li bz="auids" class='auids' ><span>电商视觉运营设计</span></li>
		</ul>
</div>
<div class="tea_con">
		<div class="tea_txt tea_txt_cur">			<ul>
				<li>
					<img src='images/teacher/javaee/2020080614082620200701111556黄建响.jpg'>
					<div class="li_txt">
						<h3>黄老师</h3>
						<h4>高级讲师</h4>
						<p>15年+的软件开发与教学经验，参与中国联通VOP系统，中国联通在线计费系统，道路交通事故救助基金管理系统等的开发工作；
拥有丰富的教学经验。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080614120520200701111628杨海峰.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>深入研究过C、C++、VB、VC等语言，后采用Java开发，数据库使用Oracle、SQLServer、MySQL、熟练掌握JavaScript、CSS、XML等技术，掌握C/S、B/S开发模式。曾开发过C/S系统，B/S模式使用JSP和Java、Struts、Hibernate等。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20210126134142马老师_讲师.jpg'>
					<div class="li_txt">
						<h3>马老师</h3>
						<h4>高级讲师</h4>
						<p>丰富项目实战经验，精通Java、JSP、Servlet、Oracle、MySQL、SQL server等编程语言和数据库技术。对Struts1/2、Spring等流行技术框架有深入理解。曾参与项目《银行薪酬管理系统》 《亿佰商城》等的分析设计和研发。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080614171120200701111719姜涛.jpg'>
					<div class="li_txt">
						<h3>姜老师</h3>
						<h4>高级讲师</h4>
						<p>擅长Java EE企业级应用，十余年项目管理经验，曾担任开发工程师，架构师等重要角色。主导多个大型项目的架构设计、管理等工作。在互联网项目领域具备丰富的经验，精通微服务架构，擅长解决高并发，亿级数据量等架构设计，拥有广泛的技术面与实践经验。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080614405220200701165643娄迎新.jpg'>
					<div class="li_txt">
						<h3>娄老师</h3>
						<h4>高级讲师</h4>
						<p>19年软件开发及教学经验，先后在国内IT名企担任软件开发工程师、项目经理、系统架构师、技术总监等职务。精通Dubbo  、SpringCloud等分布式架构技术以及Vue.js等前端框架，曾主导几十个企业级项目的研发，涉及的领域有电子商务、电子政务、ERP等企业级应用。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20210126133739杜老师_讲师.jpg'>
					<div class="li_txt">
						<h3>杜老师</h3>
						<h4>高级讲师</h4>
						<p>15年软件开发与教学经验，熟练掌握MySQL、Redis、SSM框架、Dubbo、ZooKeeper、SpringBoot、SpringCloud等技术,主持与参与过市级财务系统，企业管理等系统开发。熟悉分布式技术，了解微服务架构，具备多个行业项目产品开发与管理经验，对培训有深刻的理解和把握。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080614281920200701112408石坤.jpg'>
					<div class="li_txt">
						<h3>石老师</h3>
						<h4>高级讲师</h4>
						<p>具有多年开发经验,曾先后在重庆科普、微创、爱奇艺等多家软件公司担任软件开发工程师、项目经理等职务，精通Java EE、Struts2、Spring、Hibernate应用开发。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2022092110304220220722155441陈长宏(1).png'>
					<div class="li_txt">
						<h3>陈老师</h3>
						<h4>高级讲师</h4>
						<p>11年互联网项目研发经验级教学经验，曾担任过开发工程师，技术部经理等职务。精通Java技术栈、对SpringBoot、Redis、RabbitMQ、ElasticSearch、Docker、SpringCloud等有深入研究。专注于分布式、高可用、高性能、微服务架构的设计。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220725134148赵庆轩(1).png'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>14年软件开发与教学经验，具有丰富的技术团队管理经验，精通Java 
 EE(JSPServlet、JDBC、Struts2、Spring、Hibernate、MyBatis)，以及 WebService、Ajax、Oracle、DB2、MySQL、NoSQL、分布式RPC框架Dubbo、SpringCloud、ZooKeeper、MQ、Redis等。曾先后参与江苏媒资系统、中信银行大客户对公平台、胜利油田办公自动化平台、武警部队信息化系统的研发和管理工作。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220921103105满一航.png'>
					<div class="li_txt">
						<h3>满老师</h3>
						<h4>高级讲师</h4>
						<p>16年软件开发与教学经验。先后在中科富星、Radvision、河北恒信等企业担任工程师、架构师等职务。主导和参与的项目有吉林长春市公民信息查询与核查系统、iContact、iCM等视频会议产品的研发维护、恒信卡包项目、恒信pbox内容分发系统等。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302110642郭老师高级讲师6年软件开发与教学经验.jpg'>
					<div class="li_txt">
						<h3>郭老师</h3>
						<h4>高级讲师</h4>
						<p>6年软件开发与教学经验，曾在北京航天四创、中科软等单位担任研发经理职务，曾主持参与浙江省机要系统、国家电网系统、济宁市医疗平台、中国电信网络规划平台、人民日报社扶贫APP的设计开发工作。精通分布式、大数据、微服务、高并发、高可用等相关技术架构。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302113404年老师高级讲师多年软件开发与教学经验.jpg'>
					<div class="li_txt">
						<h3>年老师</h3>
						<h4>高级讲师</h4>
						<p>7年软件开发与教学经验，曾负责游戏大数据平台可视化、国家公开信息采集系统、企业电商架构构建等。精通JavaEE，SSM/SSH、Spring全家桶技术。对NoSQL、消息队列、服务集成、微服务、持续集成及各种开源技术有着深厚的研究。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080614431420200701112911付鼎程.jpg'>
					<div class="li_txt">
						<h3>付老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发和教学经验，曾在三星（中国）参与过大型跨国项目担任开发工程师，授课风趣幽默，精通Java EE、数据库、MyBatis、Spring全家桶等企业级常用技术；分布式系统开发经验丰富，对SpringBoot、SpringCloud、Dubbo、ZooKeeper 、ES、Solr、Redis、MQ等分布式技术深有研究。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220725134359张虎翼(1).png'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>8年Java后台开发及教育工作经验，熟悉Java SE, Java EE, Spring,MyBatis, MySQL等常用框架，熟悉ELK技术栈，SpringCloud生态圈技术。熟练使用Vue.js, Node.js, Webpack等前端技术。曾在多家大型公司担任软件工程师，项目经理职务，涉及在线教育、证券交易、电商等不同领域。目前授课范围：SpringMVC, MyBatis, Lucene, Solr, SolrCloud, 乐优商城。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080615450120200701113000张伟.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>10年企业一线开发经验，在多家企业担任开发工程师，架构师，项目经理等职位，参与或主持航信-航意险，中彩网，网上商城等项目的开发。专注于JavaEE开发，深入研究Spring全家桶、MyBatis、Dobuo等流行框架，对分布式，微服务架构体系有独到的见解。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220824155024Java-北京-张志君.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>10年以上开发以及教育经验，参与过大型的电子商务购物平台、中国电信在线营业厅等项目的开发，在我友科技、杭州数云信息技术担任开发经理职位。曾参与项目：《NewBI》《我友商城》《中国电信套餐直通车》等。
</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325113310Java-成都-张庆福.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>10年软件开发管理与教学经验，毕业于兰州大学；曾在华大基因担任生物信息学研发、清华大学计算机中心担任研发和技术leader；拥有丰富的教学和企业级培训经验，擅长将工作经验融入教学实践。授课清晰，认真负责，深受学员认可。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080614381820200701113215廖剑彬.jpg'>
					<div class="li_txt">
						<h3>廖老师</h3>
						<h4>高级讲师</h4>
						<p>13年软件开发管理与教学经验；软件与大数据开发认证工程师，项目经理。曾开发管理过信诚人寿、美的、民生银行、青岛啤酒、联想、SGS e-learning、国家工商总局市场信用分类监管系统等。熟悉分布式、微服务等J2EE及大数据生态圈技术知识体系。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080614320220200701113234余聘.jpg'>
					<div class="li_txt">
						<h3>余老师</h3>
						<h4>高级讲师</h4>
						<p>6年Java EE开发和教学经验,精通Java EE技术体系；对主流框架SSH,SSM,SpringBoot,SpringCloud Dubbo等有深入研究。精通分布式技术以及微服务架构；曾主导多个企业级项目的研发,具备多个行业项目产品开发与管理经验。讲课生动透彻, 通俗易懂。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/2020080615374820200707150902王东.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>曾在中科软信息担任系统架构和设计工作，并有丰富的授课经验，精通常用算法数据结构、Java EE相关技术，尤其是当前流行的MyBatis,Struts1/2,Spring Ajax,jQuery,DWR等框架技术。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220803104834Java-沈阳-董大坤(1).jpg'>
					<div class="li_txt">
						<h3>董老师</h3>
						<h4>高级讲师</h4>
						<p>15年软件研发及项目管理经验，曾从事于汽车、政府、金融等各个行业，先后担任项目经理、技术经理、架构师等职务，并在企业内部进行项目技术培训工作；精通Java, C/C++等语言，熟练使用Java核心框架、掌握互联网分布式架构设计和J2EE开发，对主流框架SpringMVC ,Spring, SpringCloud, MyBatis, MQ, Redis等具有丰富的开发经验及项目实战经验。曾参与大型金融系统、大型汽车智能物流系统、智慧供热系统等项目的研发和管理工作。		</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302135552周老师高级讲师理等职位具有多年的银行金融.jpg'>
					<div class="li_txt">
						<h3>周老师</h3>
						<h4>高级讲师</h4>
						<p>曾就职于文思海辉金融事业部，担任过软件开发工程师、项目经理等职位， 具有多年的银行金融方面的开发经验。任职期间参与开发了各大银行的金融IC卡交易平台开发，银行安卓、苹果支付平台搭建和中国银联商务卡系统项目。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302113755谭老师高级讲师五年研发与教学经验.jpg'>
					<div class="li_txt">
						<h3>谭老师</h3>
						<h4>高级讲师</h4>
						<p>9年研发与教学经验，精通Java开发技术，曾主导过中国银行积分商城和信用卡商城项目的研发。精通Dubbo, ZooKeeper, Redis, Elasticsearch, SSM, SpringCloud等相关技术，拥有广泛的技术面与实践经验。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302115454杨老师高级讲师5年软件开发及教学经验.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>5年软件开发及教学经验，先后在多家IT公司担任Android、Java方向软件开发工程师，研发项目涉及,新闻,理财,社交,教育等方向对Android、Java SE、Java Web、MySQL、前端等技术深入研究。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302115921于老师高级讲师8年软件开发及教学经验.jpg'>
					<div class="li_txt">
						<h3>于老师</h3>
						<h4>高级讲师</h4>
						<p>11年软件开发及教学经验，曾先后在360、亚信联创、众信旅游担任研发工程师、技术经理岗位。擅长Java后台程序设计、微服务开发等，特别是在互联网领域有很强的开发经验。授课思路清晰，对学生认真负责，注重学生学习效果。研发以及录制大型新闻资讯项目《黑马头条》。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112420Java-郑州-朱培元.jpg'>
					<div class="li_txt">
						<h3>朱老师</h3>
						<h4>高级讲师</h4>
						<p>毕业于解放军信息工程大学，曾经主导参与过：郑州商品交易所银期通系统, KodakCreate@HomeWeb+Client等项目，担任过柯达软件工程师，亚创博彦Java工程师。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302111257金老师高级讲师7年Java软件开发及相关.jpg'>
					<div class="li_txt">
						<h3>金老师</h3>
						<h4>高级讲师</h4>
						<p>7年Java软件开发及相关教育工作，熟悉JavaEE技术体系，精通Java开发技术，HTML、MySQL、Redis、jQuery、SSH框架、SSM框架等。热衷于主流Java开源框架技术，尤以擅长Java Web技术和框架开发，对jQuery有深入的研究。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302112904芦老师具有4年开发经验和3年的教学经验.jpg'>
					<div class="li_txt">
						<h3>芦老师</h3>
						<h4>高级讲师</h4>
						<p>具有6年开发经验和6年教学经验,曾就职于中软,银监会等机构,具有多年开发物流系统、银行系统的经验并担任软件开发工程师职务, 掌握C/S、B/S开发模式，熟练掌握Java SE, Java EE, Struts, Spring, Hibernate, MyBatis, SpringMVC, Oracle, MySQL, SpringBoot和SpringCloud微服务架构技术等技术。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302113627师老师高级讲师2009年入行.jpg'>
					<div class="li_txt">
						<h3>师老师</h3>
						<h4>高级讲师</h4>
						<p>13年的项目开发和教育培训经验，精通Java EE的主流开发框架、Oracle和MySQL等关系型数据库。曾在中科院遥感应用研究所、慧点科技、达利本斯等公司担任软件开发工程师、项目总监，带团队做过边防部队、人寿集团、平安集团等多个企业的大型项目，之后在互联网公司知果科技担任开发经理，完成知果果网的核心产品开发。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302115641杨老师高级讲师北京航空航天大学计算机毕业.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>北京航空航天大学 计算机毕业。10年技术开发与管理经验。曾在北大方正、知名游戏公司、互联网公司等担任研发工程师、技术经理。参与移动聊天工具企业版、新媒体营销平台、档案信息管理系统等大型项目研发工作。擅长总结和梳理知识点，深入的对每个技术点进行讲解，引导式教学，注重培养学员能力。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302115741杨老师高级讲师从事Java开发和教育10余年.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>从事Java开发和教育10余年,参与项目涉及保险、互联网金融、酒店等行业,参与人保报案平台、人保集审平台等项目设计与开发,精通Java SE、Java Web、jQuery、AJAX等技术,熟练应用SSM、SSH、MySQL、Solr等框架与技术。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302120011于老师高级讲师客户对公平台CRM系统.jpg'>
					<div class="li_txt">
						<h3>于老师</h3>
						<h4>高级讲师</h4>
						<p>多年教学和开发经验对Java EE技术体系结构、Java Web原理有深刻理解。精通RPC、消息中间件、SSM、SpringCloud等技术，曾参与中国移动门户系统、中国移动集团客户对公平台、CRM系统、健康管理系统等。热衷于技术研究，善于用引导方式教学；授课思路清晰，注重学生基础知识掌握扎实，注重培养学生自主解决问题的能力。		</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20191112100242y.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>15年软件开发与教学经验，具有丰富的技术团队管理经验；先后在品西互动、盈联电子、尚德机构担任研发总监、事业部总监、移动开发经理职务，先后主导社区管家、供销回收系统等项目；拥有丰富的Java教学与企业级培训经验，曾先后为中创、新华人寿、齐鲁银行等公司进行企业级Java培训。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302115239许老师高级讲师多年软件开发工作历任.jpg'>
					<div class="li_txt">
						<h3>许老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发工作，历任软件开发工程师、项目经理、培训师等职务，熟练掌握 Java SE、Java EE、Struts、Spring、Hibernate、MyBatis、SpringMVC、Oracle、MySQL、JavaScript、AJAX等技术。授课思路清晰，通俗易懂。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220429160803Java-石家庄-李永刚.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>8年Java EE企业级开发经验，5年开发团队管理经验，曾任某大型国有企业项目负责人，对于构建高吞吐、低延迟、分布式架构有丰富经验。精通Java SE、Java Web、Spring、SpringMVC、MyBatis和微服务等主流技术栈。具备丰富的项目重构和性能调优实战经验。秉承“复杂问题简单化，抽象问题具体化”的教学理念，注重学员解决问题能力和个人综合能力的全方位培养。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302115827叶老师高级讲师9年开发3年授课.jpg'>
					<div class="li_txt">
						<h3>叶老师</h3>
						<h4>高级讲师</h4>
						<p>9年开发经验，3年授课经验。精通Oracle、DB2、MySQL等数据库使用，精通SSM、MQ、Security等框架使用，熟练Redis、SOA、微服等高可用架构的搭建。曾就职于联想信息产品（深圳）有限公司研发实验室，从事Think产品研发系统的开发与维护。工作积极认真与强烈的责任感、思维视野开阔。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302113854童老师高级讲师12年开发经验.jpg'>
					<div class="li_txt">
						<h3>童老师</h3>
						<h4>高级讲师</h4>
						<p>12年开发经验，7年管理经验，曾任技术总监。精通Java技术栈、熟悉全栈开发。对分布式、高可用、高性能、微服务架构有深入研究。教学深入浅出，擅长用原理图方式讲解复杂知识点。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325113235Java-广州-唐明权.jpg'>
					<div class="li_txt">
						<h3>唐老师</h3>
						<h4>高级讲师</h4>
						<p>985/211双一流重点大学计算机毕业，多年软件开发、设计、管理经验，具有基于Java,Go等后端语言及Vue.js,Node.Js等Web前端框架丰富的项目实战经验，曾主导东风集团数字化协同办公平台《智悦轻舟App》，博智林机器人《通用物流机器人调度平台》的设计和研发。精通Java EE技术体系，基于SpringCloud微服务架构丰富的设计及研发经验。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302113443彭老师高级讲师多年开发与教学经验.jpg'>
					<div class="li_txt">
						<h3>彭老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发与教学经验，精通Java EE,OC,MySQL,等编程语言和数据库技术。先后担任过软件开发工程师，项目经理等职位，曾开发过物流系统、oa系统,电商系统等不同类型软件，有着比较丰富的开发经验，同时具有丰富的教学经验，授课认真负责。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302113536沈老师高级讲师5年开发经验3年教学经验.jpg'>
					<div class="li_txt">
						<h3>沈老师</h3>
						<h4>高级讲师</h4>
						<p>5年开发经验，3年教学经验，精通Java企业平台技术，熟练掌握企业搜索引擎、分布式架构、SOA架构、微服务架构。曾参与广西税务系统、易迅网络发票、三维度商城、三维度支付系统，主导新品网B2B2C大型电商研发，主导神州培训网线上教育平台重构。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112821Java-石家庄-刘鹏.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>10年一线软件开发与5年教学经验，先后任职于北京永利蓝图科技、北京王府井百货公司，参与北京尚品折扣线上线下O2O项目、北京王府井百货移动收银台等多个大型互联网项目，精通SpringCloud、SpringBoot、Spring、MyBatis、MyBatis-Plus、Redis、Nginx、ES、MQ等框架技术，上课通俗易懂，知识讲解深入浅出，注重培养学生独立解决问题和独立分析需求的能力。	</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302111709刘老师高级讲师8年企业级JavaEE的开发经验.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>8年企业级Java EE的开发经验,精通Java编程，深入研究Spring、MyBatis、SpringCloud&nbsp;等开源框架，曾参与华为产品线管理平台的研发工作，曾参与研发某互联网公司资源搜索服务平台，及基于SpringCloud平台的企业管理平台的架构搭建。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112756Java-石家庄-李世龙.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>6年开发经验，精通Java技术,对Spring全家桶有深入研究,主导开发了亚都云生活App后台服务，蒙牛智慧园区管理平台，承德政法护路与智慧水务项目，参与了中国铁塔河北省综合视频监控平台，雄安数字城市项目的开发与建设。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112546Java-石家庄-龙小锋.jpg'>
					<div class="li_txt">
						<h3>龙老师</h3>
						<h4>高级讲师</h4>
						<p>6年软件开发与教学经验,&nbsp;先后在深圳市康拓普、东软集团、河北网星担任Java工程师和项目经理，熟练掌握&nbsp;Java SE、Java Web、Spring、SpringMVC&nbsp;、MyBatis、SpringBoot、SpringCloud等技术。教学认真细致、条理清晰、直击核心要点。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200227104101x.jpg'>
					<div class="li_txt">
						<h3>许老师</h3>
						<h4>高级讲师</h4>
						<p>多年互联网项目与游戏项目研发和管理经验，曾带领公司团队研发电商、社交、实时视频等相关领域项目。涉及H5、Unity3D、小程序等不同平台。对Vue，React，微信小程序等都有研究并具备了丰富的项目架构与研发经验。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325113127Java-上海-武磊-1.jpg'>
					<div class="li_txt">
						<h3>武老师</h3>
						<h4>高级讲师</h4>
						<p>多年Java技术栈开发经验，曾在大型ERP公司承担项目构建和开发，拥有丰富软件设计能力。在传智授课5年，擅长微服务技术栈开发授课。熟悉Java EE企业技术开发、SpringCloud分布式技术栈、项目持续集成和部署。擅长启发式教学，培养学员独立思考和解决问题的能力。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200227170743l.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>6年移动互联网开发及教学经验，授课风格风趣幽默，注重与学生的沟通，深得学生好评。在软件开发和培训方面积累了丰富的经验,涉足跨平台技术解决方案，熟练使用Vue、React等框架，熟悉Node、MySQL等。曾服务过阿里巴巴、百度、蒙牛、加多宝、好声音、特仑苏等大型公司的项目开发。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200115170128g.jpg'>
					<div class="li_txt">
						<h3>郭老师</h3>
						<h4>高级讲师</h4>
						<p>5年的Java软件开发经验，5年Java专业教学经验，曾参与设计与开发多个大型互联网项目，主要有质监抽检，青历商城，E贷网P2P，天艺引资评估系统等等。长期致力于Web应用的开发与设计。擅长Java EE核心技术，SSM、Dubbo、SpringBoot、SpringCloud等。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112201Java-太原-李强鹏.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>6年开发经验，2年教学经验。在大型互联网公司担任TL、架构师，参与设计并搭建大数据、物联网等大型项目。精通Java、SSM框架以及SpringCloud、Dubbo、MQ等微服务架构体系。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200220095933h.jpg'>
					<div class="li_txt">
						<h3>黄老师</h3>
						<h4>高级讲师</h4>
						<p>9年开发与教学经验，曾先后于中软、北京海科融通、本来工坊等大中型公司担任开发工程师，参与和主持过POS机收单系统开发，电商网站后台系统、WMS（仓库管理系统）系统等开发。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200220100443l.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>具有多年项目开发和授课经验，毕业于西南大学计算机专业，曾就职于云思创想，263企业通信，聚众网通等互联网公司。先后担任过客户端技术负责人，软件开发工程师等职务，有丰富的项目管理和实战开发经验。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200220100819l.jpg'>
					<div class="li_txt">
						<h3>罗老师</h3>
						<h4>高级讲师</h4>
						<p>11年JAVA开发经验，9年技术团队管理经验，7年项目架构经验（系统架构师职称），在电子政务、企业办公、电子商务、社交网络、移动应用、互金等行业软件方面拥有丰富的项目实战经验。先后在飞利信、高伟达、成都融特、日立、人人贷担任部门经理、TeamLeader、技术经理、Senior Consultant、技术经理，负责全国政协门户、Wradio+、Chinaface、居然在线、个贷官网、人人U学、Crawlers、Babel大数据平台等项目研发。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200220134207l.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>精通Java基础原理，对集合，多线程，网络编程，IO等有深入研究。精通各项Java Web技术，熟练掌握主流框架的使用。曾参与红杉资本领投3亿美元的跨境电商PatPat等多个项目的研发。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200220134450l.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>多年互联网开发经验，深入理解Java虚拟机原理，以及参数优化，对SSM、SpringBoot、SpringCloud微服务等主流框架有深入的理解和使用，对实时流处理框架storm，并Kafka有多年使用经验。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200220134917t.jpg'>
					<div class="li_txt">
						<h3>唐老师</h3>
						<h4>高级讲师</h4>
						<p>7年工作经验，精通Java EE技术体系，对流行框架jQuery、Struts2、Hibernate、Spring、SpringMVC、MyBatis、Lucence、Shiro等有深入研究,任教于湖南城市学院。擅长总结和梳理知识点，能深入浅出的对每个技术点进行讲解。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325113025Java-上海-房吉才.jpg'>
					<div class="li_txt">
						<h3>房老师</h3>
						<h4>高级讲师</h4>
						<p>7年Java开发经验，在多家公司担任软件工程师。有大型系统高可用、高并发开发重构经验,精通掌握Java、MySQL、SpringBoot、MyBatis、SpringCloud、Redis缓存等技术框架。在企业中有丰富的带新人经验，教学擅长理论与实际项目相结合，思路清晰，贴近企业开发。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325114003Java-北京昌平-户有福.jpg'>
					<div class="li_txt">
						<h3>户老师</h3>
						<h4>高级讲师</h4>
						<p>4年Java开发经验、4年教学经验，曾在赛弥斯信用管理、负责企业信用背调的整体设计和开发工作、北京五矿新鑫科技有限公司-负责五矿在线电子商务的在线平台开发。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200220135613y.jpg'>
					<div class="li_txt">
						<h3>袁老师</h3>
						<h4>高级讲师</h4>
						<p>精通C#，Java语言开发，精通MySQL，Oracle，SQL Server数据库，SSM框架，JS，jQuery前段框架。先后在广东源恒科技有限公司、武汉付运通科技有限公司任职, 教学严谨，授课思路清晰，善于语言表达和总结行业经验，因材施教。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200220135740y.jpg'>
					<div class="li_txt">
						<h3>岳老师</h3>
						<h4>高级讲师</h4>
						<p>14年项目经验以及教学经验，先后在北京多家互联网公司担任Java开发、项目经理职务，曾参与过商城项目、物流系统、OA系统、智慧城市等项目的开发，主导过智慧医疗、智慧城市等项目研发，具备一定的项目管理经验。精通Java SE、Java EE、Java主流的开发框架SSM、 Spring、MyBatis、Java Web、MySQL、Oracle、数据结构、Android、Redis、JS、jQuery、SpringMVC等技术，对Java SE集合、线程等有较深入的研究。授课幽默风趣，通俗易懂，注重培养学员独立分析能力及动手能力。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112933Java-深圳-李帅.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发与教学经验，精通Java企业平台开发技术，熟练掌握并使用设计模式、常用开源框架、分布式架构及微服务架构，先后担任过工程师、项目经理等职位，曾参与过商城项目，主导过智慧医疗等项目研发，具备一定的项目管理经验，同时具有丰富的教学经验，授课认真负责，条理清晰。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325113211Java-上海-唐文杰.jpg'>
					<div class="li_txt">
						<h3>唐老师</h3>
						<h4>高级讲师</h4>
						<p>10多年一直从业于软件开发和培训行业，具有丰富的项目开发经验和教学经验。精通Java EE技术体系，擅长MySQL、Oracle等主流数据库，对Java虚拟机有深入的了解，喜欢研究开源技术。曾参与主导中国移动OTA系统、江苏省医护考试平台搭建等。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220802182355Java-厦门-宋少挺.jpg'>
					<div class="li_txt">
						<h3>宋老师</h3>
						<h4>高级讲师</h4>
						<p>6年Java开发经验，曾任项目经理。熟悉前后端开发；擅长复杂项目解构、开发以及团队进度把控；对分布式，微服务系统有深入研究；有微信公众号，小程序项目开发经验。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112908Java-沈阳-蔡国庆.jpg'>
					<div class="li_txt">
						<h3>蔡老师</h3>
						<h4>高级讲师</h4>
						<p>从事软件开发和教学多年，深入掌握MySQL、Oracle、SSM框架、微服务架构体系,Spring全家桶、缓存、分布式、中间件等相关技术，参与了各个政府部门的外事管理系统研发以及各大高校成人自考项目saas版研发,拥有丰富的一线开发和教学经验,擅长总结和梳理知识点，引导式教学，注重培养学员能力。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220722155618邓昌涛(1).png'>
					<div class="li_txt">
						<h3>邓老师</h3>
						<h4>高级讲师</h4>
						<p>10年Java开发及教学经验,曾在多家公司担任软件开发工程师，技术功底深厚，授课幽默风趣，通俗易懂。精通MySQL,Redis及Spring, MyBatis, SpringMVC, SpringBoot, SpringCloud, SpringData系列框架，并对Solr, ElasticSearch, Dubbo, MQ中间件技术有深入研究。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302111846刘老师高级讲师9年一线研发与教学经验.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>9年一线研发与教学经验，曾先后在中石油、久其软件等企业担任研发工程师，参与油气管道全生命周期建设、昆仑燃气等项目，并为国资委、兵工、航天科工等研发CI财报产品。精通Java SE、Java EE技术和SSH/SSM、SpringBoot等常用框架，对Dubbo、ZooKeeper、SpringCloud、MQ、Redis、MongoDB、MySQL等流行框架和技术有深入研究。授课逻辑清晰，通俗易懂，受到众多学生的认可和喜爱。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325105827Java-太原-翟超杰.jpg'>
					<div class="li_txt">
						<h3>翟老师</h3>
						<h4>高级讲师</h4>
						<p>5年Java开发和项目管理经验，3年的授课经验。曾先后于北大医信、泰和诚任开发工程师、项目主管职位，精通Java语言，擅长Java EE技术栈，对MySQL数据库有深入的了解。课堂幽默风趣，善于用生活中的例子讲解Java中晦涩难懂的知识点。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200221143931g.jpg'>
					<div class="li_txt">
						<h3>高老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发和教学经验，曾在中星测控、中软国际担任开发工程师，有移动端、PC端、服务端软件等多类型软件的开发经验，授课不拘一格、深入浅出、风默有趣。精通Java开发，对JVM、数据库、Web规范、数据结构与算法以及主流应用框架均有深入研究。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220221183350java-林颖.jpg'>
					<div class="li_txt">
						<h3>林老师</h3>
						<h4>高级讲师</h4>
						<p>8年Java开发经验，在多家公司担任软件开发工程师。有大型系统高可用，高并发开发重构经验,深入掌握Java、MySQL、SpringBoot、MyBatis、Pulsar等技术框架。在企业中有丰富的带新人经验，教学擅长理论与实际项目相结合，思路清晰，更贴近企业开发。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325113344Java-北京昌平-金龙.jpg'>
					<div class="li_txt">
						<h3>金老师</h3>
						<h4>高级讲师</h4>
						<p>8年开发经验，3年管理经验。从事Java EE技术多年，拥有丰富的一线开发和管理经验，对Java流行框架有深入研究，曾在企业中参与主导智能运维、物联网、实时数仓产品开发，多次主导过大型B端项目微服务架构设计与开发，对敏捷开发有深入理解与实践经验。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200221144328l.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发与教学经验，对Spring生态系统，消息中间件，数据库等技术有深入理解和研究。先后在陕西出版集团，中软、电讯盈科等担任过软件开发工程师职务，参与开发过书海小说网，延安英雄传后端等项目开发。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200221144948l.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>具有8年软件开发与教学经验，具有丰富的开发经验，先后在四方精创、华侨城文旅科技、达普信科技等公司担任技术研发与项目运维等工作，先后经历过中国银行(香港)私人银行业务开发、华侨城文旅科技公司内部网站建设以及海关平台相关业务的需求研发。熟悉使用SSH、SSM、缓存Redis、MySQL、Oracle、数据报表等。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200221145323y.jpg'>
					<div class="li_txt">
						<h3>袁老师</h3>
						<h4>高级讲师</h4>
						<p>从事Java EE开发及教学工作多年，先后在多家公司担任开发工程师，项目经理等职务。精通Redis及Spring、MyBatis、SpringMVC、SpringBoot、SpringCloud系列框架；拥有大数据项目开发经验，对Hadoop生态圈如Hive，Zookeeper，Hbase等技术有深入研究。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200225094547l.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>毕业于东北师范大学，五年以上开发经验，多年软件开发教育培训经验，精通Java SE、MySQL等编程开发语言和开发技术，熟练掌握各种数据结构和算法，精通Spring、SpringMVC、MyBatis等常用框架，熟练掌握微服务框架，授课风格幽默风趣，可以将知识化繁为简、深入浅出的教授给学员。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226095256w.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>5年软件研发与项目管理经验，精通Java开发语言以及MySQL、Oracle数据库，对Java流行框架有深入研究，曾在企业中参与主导旅游、活动竞赛等领域项目开发。在传智播客有三年教学经验，授课认真负责，注重学员独立分析能力。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226095733w.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>5年网络安全和软件开发工作,有丰富的行业知识, 用简洁的方式讲解Java EE方向的课程。擅长Android,Java Web,MySQL,前端等课程的讲解,拥有红帽和安全相关行业认证证书。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112224Java-太原-郭恩谦.jpg'>
					<div class="li_txt">
						<h3>郭老师</h3>
						<h4>高级讲师</h4>
						<p>6年开发经验，1年教学经验，曾担任百度工程师，负责架构设计、技术选型、工程效能、自动化运维等方向的设计与研发，精通Java技术栈对Spring, SpringMVC, MyBatis, SpringBoot, Redis, ElasticSearch, RabbitMQ, Docker, SpringCloud等有深入研究，专注于分布式、高并发、高性能、高可用、微服务架构的设计。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226100658z.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>985,211重点大学毕业，拥有10年的开发经验和架构设计经验，曾在几个大型公司担任系统架构师，精通系统架构，曾主持各种大型网站架构设计与开发，主持设计研发ODPS框架，SWORD框架，授课特点：幽默风趣,通俗易懂,条理清晰,层次分明。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226100802z.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>6年Java软件开发及相关教育工作，熟悉Java EE、Android开发，对主流框架有深入了解。曾参与过联通集成公司的4G系统和结算系统开发；主导过移动健康相关项目应用开发。传智授课3年，讲课风格诙谐幽默，倡导寓教于乐的授课方式。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226100916z.jpg'>
					<div class="li_txt">
						<h3>朱老师</h3>
						<h4>高级讲师</h4>
						<p>6年大型电商项目实战经验，擅长高并发，高可用，大数据量处理平台的搭建。精通Java, JS, MySQL, Oracle等编程语言和数据库系统，对Web框架SpringMVC, Spring, Hibernate, MyBatis, SpringBoot, SpringCloud有丰富使用经验。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302112159刘老师高级讲师多年J2EE项目研发及管理经验.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>多年J2EE项目研发及管理经验，曾就职于多家大型互联网企业，有着多年的一线开发经验，涉及过互联网电商项目，移动管理系统等，企业ERP系统，手机App项目等。精通Java SE，Java Web，对Spring、MyBatis、SpringMVC、SpringBoot、Android、MySQL、Redis、Solr、Dubbo、FastDFS等有深入研究。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302114358肖老师多年开发经验4年教学经验.jpg'>
					<div class="li_txt">
						<h3>肖老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发经验，4年教学经验，曾在大型互联网公司任职，讲解通俗易懂，生动幽默，擅长Web开发，精通Struts、Hibernate、Spring、SpringMVC、MyBatis、SpringBoot SpringCloud等等框架，深受学员喜爱。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302114247吴老师高级讲师8年开发经验5年管理经验.jpg'>
					<div class="li_txt">
						<h3>吴老师</h3>
						<h4>高级讲师</h4>
						<p>10年项目开发经验及教学经验，软件工程师、技术部经理。参与开发电子商城系统、聚合支付等项目，精通Java SE、Java EE企业级开发，主要涉及Java、JDBC、MySQL等编程语言和数据库系统。精通Spring、SpringMVC、SpringCloud、SpringBoot、Hibernate、MyBatis等主流框架。课堂氛围活跃、激情昂扬、善于分享。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302133805周老师高级讲师多年开发和教学经验涉及到手机.jpg'>
					<div class="li_txt">
						<h3>周老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发和教学经验，涉及到手机应用Web后台开发，精通Java SE、 Java EE、Android。曾多次参与开发国家版权局对应版权业务。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302133546张老师高级讲师资深项目工程师.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>多年项目开发经验及丰富授课经验，对Java EE主流技术，JDBC、Struts1/2、Spring、HibernateJBPM、WebService、MyBatis等技术驾轻就熟，对框架底层具有独到见解。精通Java企业平台技术，企业搜索引擎、以及分布式架构等。曾参与人力资源系统、电子教育商城、医疗APP等项目。								</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226163906c.jpg'>
					<div class="li_txt">
						<h3>陈老师</h3>
						<h4>高级讲师</h4>
						<p>6年一线研发经验，2年Java教学经验，先后负责国家电网、质检总局、广西海关等单位的多个大型系统研发，后期主做在线教育互联网项目。精通MVC框架、擅长分布式框架、微服务框架，授课有热情、思路清晰、深入浅出。主讲项目阶段及就业冲刺阶段课程。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226164110c.jpg'>
					<div class="li_txt">
						<h3>陈老师</h3>
						<h4>高级讲师</h4>
						<p>具有5年开发经验和3年的教学经验,曾就职于世界500强的软件开发企业,具有多年开发金融系统、保险系统的经验并担任软件开发工程师职务, 掌握C/S、B/S开发模式,熟练掌握 Java SE、Java EE、Java主流的开发框架（SSH,SSM）、Oracle、MySQL、Redis、SpringBoot等。
							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226164209h.jpg'>
					<div class="li_txt">
						<h3>黄老师</h3>
						<h4>高级讲师</h4>
						<p>拥有5年的企业开发和教学经验，对于目前主流的SSM, SpingBoot, SpingCloud, SQL优化等常用框架和技术都有深入的理解。熟练掌握Redis缓存技术和缓存方案。对于常用的消息中间件RabbitMQ和ActiveMQ等以及定时任务等都有相关的实际开发经验。对于前端框架Vue.jsp以及其他前端基础都有所涉及。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226164319s.jpg'>
					<div class="li_txt">
						<h3>施老师</h3>
						<h4>高级讲师</h4>
						<p>6年软件开发与教学经验,擅长Java Web和Android平台的开发工作。先后在华瀛安盛,安容致远等公司任职,曾参与360公司奇酷手机的电话加密项目,并在密讯、caping、酒仙云进销存等项目中担任主程。教学认真细致，善于深入浅出剖析知识点，课堂风格幽默风趣，能积极带动学生的学习氛围，乐于分享，富有责任心。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112302Java-太原-冯瑞君.jpg'>
					<div class="li_txt">
						<h3>冯老师</h3>
						<h4>高级讲师</h4>
						<p>3年Java开发经验，7年授课经验。擅长Java SE、Java Web等技术点，讲课深入浅出。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220822154656陈老师.jpg'>
					<div class="li_txt">
						<h3>陈老师</h3>
						<h4>高级讲师</h4>
						<p>多年大型项目实战经验，擅长高并发，高可用，大数据量处理平台的搭建。同时拥有丰富的教学经验,擅长Java EE项目，Python Web项目的研究与教学,有丰富的行业知识, 用简洁的方式讲解Java EE方向,Python方向的课程。精通Java SE,Jave EE,JavaScript,Python编程技术，精通Oracle、MySQL等数据库的开发,精通Spring,SpringMVC,MyBatis等Java EE常用框架,精通Django,Flask,Tornado等Python常用框架，熟悉Ruby、PHP、C#等语言。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200227131537x.jpg'>
					<div class="li_txt">
						<h3>徐老师</h3>
						<h4>高级讲师</h4>
						<p>JAVA开发工程师。有着多年的软件开发经验，精通Java EE企业级应用技术，精通MySql、Oracle、DB2等主流关系型数据库，有着丰富的数据库开发经验。曾经参与过移动公司的实时人流监控、用户缴费日志实时分析等大数据项目，熟悉大数据相关开发。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311104911c.jpg'>
					<div class="li_txt">
						<h3>陈老师</h3>
						<h4>高级讲师</h4>
						<p>7年软件研发、项目管理与教学经验，精通Java开发技术，曾先后担任过技术经理、技术主管、项目经理等职位。主导研发超过5个以上大型项目与平台。精通微服务架构，擅长解决高并发，亿级数据量等架构设计，拥有广泛的技术面与实践经验。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302105259程老师高级讲师具有超过6年的互联网企业一线.jpg'>
					<div class="li_txt">
						<h3>程老师</h3>
						<h4>高级讲师</h4>
						<p>具有超过6年的互联网企业一线开发经验，经历过大并发洗礼的开发工程师，擅长将企业开发相关知识与实战相结合，喜欢从架构的角度带着学员们理解程序实现，让同学们知其然并知其所以然。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302111604李老师高级讲师多年开发和教学经验对JavaEEIOS.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发和教学经验，对Java EE，iOS，Android多平台的开发有丰富经验，熟练掌握SSM、Dubbo，Spring Security，SpringBoot等框架，能熟练操作Oracle，MySQL等关系型数据库,&nbsp;&nbsp;&nbsp;授课幽默风趣，通俗易懂，关注学员消化吸收，注重培养学员独立分析能力及动手能力。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302113709孙老师高级讲师多年软件研发软件教学项目管理经验.jpg'>
					<div class="li_txt">
						<h3>孙老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件研发、软件教学、项目管理经验，曾担任项目经理及高工等职务。目前致力于Java教学，追求技术，热爱教育。参与项目涉及电商、物流、企业内部系统等项目。深入掌握市场主流框架，通过分析源码，讲解框架设计原理。授课细致，深入浅出。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325112352Java-郑州-田杰熠.jpg'>
					<div class="li_txt">
						<h3>田老师</h3>
						<h4>高级讲师</h4>
						<p>7年项目研发经验，2年教学经验。曾任郑州宇通客车Java工程师，一线参与研发智能网络公交系统(无人驾驶公交车)， 新能源平台等项目。教学精益求精，授课语言精炼，通俗易懂且又逻辑性强，擅长打造高效课堂。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200227174656s.jpg'>
					<div class="li_txt">
						<h3>束老师</h3>
						<h4>高级讲师</h4>
						<p>10年工作经验，架构师，多年IT领域研发经验、深入的理解SSM、Redis、RocketMQ、Memcached、Quartz、Dubbo、SpringBoot、SpringCloud等框架，主要负责参与的项目《全国数字物价监测中心》、《上海浦发银行信用卡客户服务中心》、《某金融平台统一支付中心》等项目。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200228111852t.jpg'>
					<div class="li_txt">
						<h3>唐老师</h3>
						<h4>高级讲师</h4>
						<p>13年项目开发和教学经验，对SpringData、SpringCloud、Docker等技术有深入的研究，熟练掌握 MySQL、Redis,SSM框架、Dubbo、ZooKeeper等技术，热衷主流Java开源框架，曾参与中国电信计费系统、银行自动服务后台操作系统等。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200228112238z.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>拥有12年的java开发教学经验，精通Java开发技术（JSP/Servlet、mysql 、JDBC、Struts2、Hibernate3、Spring、SpringMVC、Mybatis），热衷于研究主流Java开源框架、Web开发技术。擅长JavaSE研究与教学，有丰富的行业知识、教学经验。上课案例丰富有趣，善于将Java知识点和生活相结合，举例生动形象，让学员产生浓厚的学习兴趣。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200228142358x.jpg'>
					<div class="li_txt">
						<h3>许老师</h3>
						<h4>高级讲师</h4>
						<p>具有多年的教学和项目开发经验。精通Java SE技术，精通Java EE、SSM/SSH等流行框架。精通多种数据库MySQL、Oracle、MongoDB和Redis等。对于开源的项目有深入的研究，精通JVM虚拟机内部机制。对于数据库优化、网络通信，微服务、及各种开源技术有着深厚的研究。多次获得公司优秀员工和年度优秀讲师的称号。上课的风格很受学员欢迎和认可。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220325113840Java-北京昌平-刘博文.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>负责公司后台核心系统、资质审核系统、风控审核系统、标的审核系统的设计与搭建,对接存管银行的API,对接第三方银行机构。后台系统基于大数据的车辆对比系统、车辆实时信息联网查询、车辆电池信息以及前台基于百度地图的路径规划、动态围栏等功能。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200302162513l.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>从事Java EE的开发与教学18年；曾在软件开发企业担任技术总监；2012年~2015年被东软等多家院校外聘为Java EE考评评审；2015年6月出版发行《Java EE SSH框架开发项目教程》；2019年1月出版发行《Java EE Spring MVC 与MyBatis企业开发实战》。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200302162755s.jpg'>
					<div class="li_txt">
						<h3>宋老师</h3>
						<h4>高级讲师</h4>
						<p>10年软件开发经验，曾在用友网络担任项目经理、项目总监等职务，先后主导过佛山美的集团互联网系统应用、白云国际机场商旅电商系统和深圳民太安公估保险移动互联网应用等。 精通Java EE、并发编程、SSM、SpringBoot。对CDN、NoSQL、消息队列、微服务、JVM性能调优、爬虫级各种开源框架等技术。
							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220401104758java-北京-徐磊.jpg'>
					<div class="li_txt">
						<h3>徐老师</h3>
						<h4>高级讲师</h4>
						<p>10年Java从业经验，曾负责安防视频监控系统、华为VMS语言邮箱系统、电信网络质量监控系统、溯源APP等。精通Java SE，Java EE，SSM/SSH，Spring全家桶。对NoSQL、消息队列、服务集成、流程引擎、微服务、持续集成及各种开源技术有着深厚的研究。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200302163444x.jpg'>
					<div class="li_txt">
						<h3>徐老师</h3>
						<h4>高级讲师</h4>
						<p>十年项目经验，曾在大型公司担任系统架构师，参与架构设计并获奖的系统有广东移动手机病毒多维度侦测系统等。曾参与研发《中国电信运营商管理系统》，《韶关社保通》、《智能网系统四期》、《增值业务多维度保障系统》等项目。精通Java EE技术栈，对Dubbo、SpringBoot、SpringCloud、Mycat等技术原理有较为深入的研究。对分布式、Java中间件、微服务架构设计有丰富实战经验。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200302163711y.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>从事Java工作多年，有着丰富的开发和教学经验，Java，JSP，Servlet开发，精通SSM、Dubbo，Spring Security，Struts2，Hibernate等框架，能熟练操作Oracle，MySQL等关系型数据库。授课幽默风趣，通俗易懂。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200302163958z.jpg'>
					<div class="li_txt">
						<h3>郑老师</h3>
						<h4>高级讲师</h4>
						<p>从事Java开发工作多年，精通Java语言和JVM底层原理，擅长高并发下的Web应用开发。精通Spring、SpringMVC、MyBatis、SpringBoot等企业应用框架，dubbo、ZooKeeper、SpringCloud等分布式开发相关技术。熟悉MySQL，Oracle等主流数据库的开发，具有复杂业务系统的数据库设计和性能调优经验。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200302164057z.jpg'>
					<div class="li_txt">
						<h3>钟老师</h3>
						<h4>高级讲师</h4>
						<p>多年教学与开发经验，深入掌握MySQL、SSM框架、Spring全家桶、Dubbo、ZooKeeper 、缓存、NoSQL、消息队列、服务集成、微服务、持续集成及各种开源技术有着深厚的研究。曾参与主持开发太平洋二手车网、亲子网数据分析系统、大型网站用户行为分析系统、公司客户管理系统等项目。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200303154954z.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>从事十年大型互联网软件开发和教学工作，具有丰富的软件开发和项目管理经验，精通Java 、Swift、Python等语言，曾主导并参与多个大型项目，包括W3Mobile华为协同办公平台，迪士尼蓝牙点读笔等。具有丰富的教学经验，授课思路清晰，风趣幽默，通俗易懂。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200317152632w.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>9年Java开发管理和教学,先后在STS（国外）、艾默生网络能源、华胜天成等担任过软件开发工程师、项目主管等职务。精通MySQL、Oracle等数据库以及市场流行的Web框架（SSM、Spring全家桶等）。参与完成的项目主要有:移动国漫项目、短信平台、流量平台、海外物流等。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311110040k.jpg'>
					<div class="li_txt">
						<h3>孔老师</h3>
						<h4>高级讲师</h4>
						<p>先后在宜信、顺丰、美菜担任研发工程师，具有近10年的Java实战研发经验，熟练掌握当今主流技术(MyBatis/iBatis、Spring、SpringMVC、Dubbo、Elasticsearch、SpringBoot、SpringCloud)，曾参与研发基础医疗His、CRM、美菜搜索、顺丰优选等项目。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311110552d.jpg'>
					<div class="li_txt">
						<h3>狄老师</h3>
						<h4>高级讲师</h4>
						<p>10年一线开发和教学经验,精通Java,C#,JS等多门编程语言,精通MySQL,Oracle等主流数据库系统.对流行框架Struts2/SpringMVC, Spring, MyBatis/Hibernate等,有深入研究.先后在国内知名仓储物流电商服务公司和河南省知名医学科技公司中,担任软件开发工程师的职位.主导或参数了仓储物流系统和河南省医疗服务信息化的相关建设工作。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311110931m.jpg'>
					<div class="li_txt">
						<h3>梅老师</h3>
						<h4>高级讲师</h4>
						<p>曾担任过Android应用开发,Java企业级开发工程师,智能家居行业曾获取App软件专利,精通MyBatis，SpringMVC，Spring，Vue等当下主流的框架，以及其底层实现的原理，熟练使用MySQL，Oracle，Redis主流的数据库，有丰富的授课经验。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311111056w.jpg'>
					<div class="li_txt">
						<h3>魏老师</h3>
						<h4>高级讲师</h4>
						<p>曾在中科软担任软件工程师,丰富的Oracle ,MySQL实战经验,丰富的系统调优经验熟悉Java EE ,Spring,MyBatis ,Redis,Dubbo等应用开发,参与过民生保险核心系统研发长城客服系统研发等。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311111220x.jpg'>
					<div class="li_txt">
						<h3>夏老师</h3>
						<h4>高级讲师</h4>
						<p>上海交大软件工程毕业，10年大型项目实战经验，精通C++、Java、JavaScript等多种主流开发语言。曾在多家500强企业任职，参与金融、物联网、通信等多个领域系统的设计和开发，对常用分布式技术和微服务架构均有深入研究。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311111529z.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>曾经主导和参与过：中国银行网点规划系统、河南移动网上营业厅、郑州市科技局综合性门户网站、河南地税缴费系统等等项目。曾经参与策划和编写过多本书籍并出版发行，例如《Ajax+JSP巧学巧用》《Struts2框架开发从入门到精通》《EJB3从入门到精通》等等。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311111823z.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>6年一线教学经验，在教学方面特别注重学员对知识点的消化吸收，对知识点讲解能够深入浅出，精准把握，深受广大学员好评,对Java SE,Java EE项目开发流程和架构非常熟悉，对HTML、CSS、JavaScript、Servlet、JSP、JSON、Ajax、Linux、Spring、SpringMVC、MyBatis、MySQL等开发常用技术有深入研究。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200311111947z.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>郑州大学硕士研究生，先后在亚信科技、北京SUCO等公司担任过工程师及项目经理等职务，熟悉Java EE平台下相关技术及各种数据库应用及开发，曾被郑州大学计算系聘为Java主讲讲师两年，拥有十余年Java平台的开发经验。领导并参与北京省惠O2O和P2P创易金融系统、河南省地税电子政务系统、河南省联通网上营业厅一期二期工程等大型工程项目。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302112242刘老师高级讲师增任Mbp集团.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>曾任Mbp集团研发一部软件开发工程师，6年项目经验。曾参与日本某公司网上商城（JSP + Struts2 + Spring + DBFlute）研发，类似京东商城；物联网监管平台（建设工程质量检测全过程系统）等。讲课细致入微，善于与学生互动，话语通俗，一针见血，发人深省。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302113118陆老师高级讲师Hibemate.jpg'>
					<div class="li_txt">
						<h3>陆老师</h3>
						<h4>高级讲师</h4>
						<p>拥有多年开发和教学经验，精通Java EE领域编程语言。 深入研究流行框架 SpringMVC、Spring、Hibernate、MyBatis、缓存系统Redis等。 教学擅长理论与实际相结合，对复杂简单化。 曾参与研发大型项目《万达慧云系统》、《建筑需求响应运营管理系统》等。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302133638周老师高级讲师2015年加入黑马.jpg'>
					<div class="li_txt">
						<h3>周老师</h3>
						<h4>高级讲师</h4>
						<p>2015年加入黑马，精通Servlet、JSP、JavaMail、JDBC、JMS、WebService、Struts2、Spring、SpringMVC框架、MyBatis等技术；精通MySQL、Oracle数据库，Tomcat、JBoss等服务器的搭建和部署。在中软等企业从事大型Web项目的设计开发多年，曾任项目经理等职位。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302111355雷老师高级讲师拥有10年以上开发及培训经验.jpg'>
					<div class="li_txt">
						<h3>雷老师</h3>
						<h4>高级讲师</h4>
						<p>拥有10年以上Java开发及培训经验。先后在多家上市企业担任研发主管、开发经理等职务；先后主导并参与过东莞汉康ERP系统、安琪酵母网上商城系统、楚天高速治超管理系统、湖北消防信息管理系统；拥有丰富的Java教学与企业培训经验，曾先后就职于多家大型培训机构、三峡大学科技学院等单位从事Java教学工作。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302114131王老师高级讲师多年软件开发及项目管理经验.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发及项目管理经验，精通Java、PHP、C++等编程语言;先后在北京K2地产、由米定制等企业担任开发及管理工作；精通Struts2、Spring、Hibernate、SpringMVC、MyBatis等常用框架;对Oracle,MySQL,Redis,MongoDB等数据库技术有深入研究。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200226164428t.jpg'>
					<div class="li_txt">
						<h3>田老师</h3>
						<h4>高级讲师</h4>
						<p>具有多年的教学和项目开发经验。精通Java SE技术，精通Java EE、SSM/SSH等流行框架。精通多种数据库MySQL、Oracle、MongoDB和Redis等。对于开源的项目有深入的研究，精通JVM虚拟机内部机制。对于数据库优化、网络通信，微服务、及各种开源技术有着深厚的研究。多次获得公司优秀员工和年度优秀讲师的称号。上课的风格很受学员欢迎和认可。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302110931何老师高级讲师拥有多年开发经验先后在中科大洋.jpg'>
					<div class="li_txt">
						<h3>何老师</h3>
						<h4>高级讲师</h4>
						<p>拥有多年开发经验，先后在中科大洋、易宝支付等公司担任软件开发工程师等职务。热衷于研究主流Java开源框架、Web开发技术。擅长J2EE技术栈中的Spring、SpringMVC, MyBatis，SpringBoot等流行框架，以及对Tomcat, ElasticSearch, Oracle, MySQL，Redis等有深入研究。对待学生循循善诱，讲解知识深入浅出。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302111502李老师高级讲师MySQLOracle.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>8年Java EE开发与教学经验，精通Java EE技术体系，对Java Web以及Spring、SpringMVC、Struts2、Hibernate、MyBatis等技术有深入的研究。对微服务架构SpringBoot、SpringData、SpringCloud、Docker等技术有系统的研究。熟练应用Vue.js,Node.js，Angular.js等前端框架。精通MySQL、Oracle、Redis、MongoDB等数据的搭建和优化等，曾参与研发黑龙江联通管理系统，国家电网项目，中国电建招标平台系统等开发与管理工作。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200408163955l.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>拥有6年的工作经验，从事多年软件开发和教育事业，工作期间参与完成了多个智能家居，智能健康，智能手环项目，对软件的架构和开发深刻的认识。熟悉Java SE，Java EE，Android相关的开发，目前主要从事Java SE的教育工作，善于将0基础学员入门Java行业。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302114031王老师高级讲师多年的Java.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>多年的Java软件开发经验，精通Java、Web前端、C语言、MySQL数据库等。曾就职于海派通讯北京研发中心参与联想手机系统的定制工作，在深圳华南城网主导逛市场APP的研发工作等。 在传智教育有3年的Java EE教学经验，授课风格平稳、流畅、思路清晰。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200414150238r.jpg'>
					<div class="li_txt">
						<h3>饶老师</h3>
						<h4>高级讲师</h4>
						<p>Java EE开发与教学多年，精通Java EE技术体系，对流程SSH,SSM以及潮流的SpringData、SpringCloud、Docker等技术有深入的研究。授课逻辑严谨、条理清晰，注重学生独立解决问题的能力，善于总结一类问题，启发式教学。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200823172655Python-广州-李德山.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>从事企业项目研发多年, 精通Python、Java、Objective-C、JS等编程语言，主导与参与开发项目和框架有: 投研ETL, 金融风控系统, 业务提醒平台和ACL权限控制框架等;&nbsp;授课思路清晰,&nbsp;善于引导学生主动思考问题。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220302111228惠老师高级讲师多年互联网金融行业开发经验.jpg'>
					<div class="li_txt">
						<h3>惠老师</h3>
						<h4>高级讲师</h4>
						<p>多年互联网金融行业开发经验,曾在多家公司担任软件开发工程师，能够灵活的运用多种技术完成相关业务的开发工作。熟悉Java SE,SSH、SpringMVC、MyBatis、ExtJs、Dubbo、MySQL等多种技术。</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/web/20200807144558前端-深圳-胡凌皓.jpg'>
					<div class="li_txt">
						<h3>胡老师</h3>
						<h4>高级讲师</h4>
						<p>从事软件开发工作多年，涉及.Net、HTML5、Unity3d、IOS等平台，曾参与乌龟猜猜,敲打乐敲你妹等跨平台游戏项目的开发，之后投身教育行业,授课过程中擅长使用图片、动画把知识点化繁为简,深受学员喜爱。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807144013前端-上海-刘玺.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>后端开发出身，曾在金和软件参与大型SOA项目开发；后入职国美集团旗下，负责前端开发工作。基础扎实，深入原理。热爱技术，喜欢读书，看过大量有关前端方面的书籍。 为人友善，知识面广泛。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115539前端-北京顺义-王猛.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>秉承务实、责任、创新、育人的价值观，用爱成就每一位学生。拥有多年互联网前端应用和软件开发经验，擅长React、Vue。曾就职于TalkingData、用友等公司，负责过多个大型数据分析和可视化平台、移动电商等项目架构和研发工作。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807145537前端-深圳-周林林.jpg'>
					<div class="li_txt">
						<h3>周老师</h3>
						<h4>高级讲师</h4>
						<p>2014年即已投身IT教育，前后端课程均有丰富的教学经验。课堂氛围欢快活跃，讲课极具感染力。整体授课风格幽默，且善于将复杂知识点剖析彻底、缓缓推进的方式让学生听明白，深受广大学员好评。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142029前端-广州-苏杰豪.jpg'>
					<div class="li_txt">
						<h3>苏老师</h3>
						<h4>高级讲师</h4>
						<p>6年+从业经验，精通HTML5、CSS3、JavaSript， 熟悉Vue、React、Angular、jQuery、BootStrap。 特别擅长微信小程序，首次研发和实施了完整的微信小程序商城项目。 教学细腻，能够深入浅出地剖析知识点。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115639前端-北京顺义-张宏昌.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端工程师，具有多年前端开发经验，擅长JavaScript、jQuery、微信小程序的应用。尤其在地图开发方面较为丰富，喜欢将学习的知识应用实践。具备全栈开发能力，可搭建适合公司前端开发的脚手架。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807151943前端-长沙-王蔚.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>具备多年电商&互联网移动APP市场&物联网行业的软件开发经验，对主流MVVM技术框架(React、微信小程序、Vue)，UI框架，模块化，原生JavaScript，Node.js，数据库，代码管理工具等有着丰富的实战运用经验和团队协作经验。曾带领团队完成企业级系统应用设计、搭建、开发、上线等一整套的流程。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807150331前端-武汉-王游游.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>多年前端开发工作经验，精通JavaScript、DOM、jQuery、Ajax、Node.js及一些流行框架Vue等前端技术，在教学方面喜欢以实战方式来教学，对课程知识的细节极为看重，秉承传智播客用心上好每一节课，用心教好每一位学子的理念，让每个传智学子不留遗憾！		</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220526180707西安-潘璞.jpg'>
					<div class="li_txt">
						<h3>潘老师</h3>
						<h4>高级讲师</h4>
						<p>擅长前端企业级项目，在前端领域有自己的发明专利，精通大前端各个方向技术，走在技术的前沿，授课风格幽默，课堂氛围活跃，有强烈的责任心和使命感，能将教学知识与技术应用场景相结合，做到让学生学有所成，学以致用。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220729094351前端-上海-李力强.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>毕业于211院校，曾就职于大型在线教育公司，主导通用组件库的研发，有丰富的项目开发经验和授课经验。擅长移动端开发以及前端主流框架Vue，React。上课风趣幽默，善于将晦涩难懂的术语用生活情境演绎；课后提炼重点，帮助学生高效学习。真正做到让学生知其然，并且知其所以然。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142922前端-南京-孔令飞.jpg'>
					<div class="li_txt">
						<h3>孔老师</h3>
						<h4>高级讲师</h4>
						<p>性格开朗，为人细心，做事认真，有较强的责任心，多年的前端项目开发经验。 先后多家大型公司担任前端开发工程师，精通HTML、CSS、JavaScript、jQuery、Ajax、Node.js等。 多年教辅经验、上课通俗易懂有激情，带班认真负责亲和力强常以幽默的语言活跃课堂气氛。 授课思路清晰，以贴切的案例，让学员轻易掌握知识点并能深刻的理解和运用。
							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807141846前端-广州-梁伟.jpg'>
					<div class="li_txt">
						<h3>梁老师</h3>
						<h4>高级讲师</h4>
						<p>毕业于巴黎第十三大学网络多媒体专业，旅法期间服务于艾姆家居，Cibox（法国），曾任微来中国前端负责人，主导澳蚁，趣拼标前端架构。精通JavaScript、Vue、Node.js、jQuery，熟悉 PHP、MySQL，性格乐观开朗，上课善于带动学生的学习激情。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142649前端-杭州-刘福松.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>从事移动互联开发三年，从事教学工作三年，授课风格风趣幽默，注重与学生的沟通，深得学生好评。在软件开发和培训方面积累了丰富的经验,涉足跨平台技术解决方案，熟练使用Vue、React等框架，熟悉Node.js、MySQL等。曾服务过阿里巴巴、百度、蒙牛、加多宝、好声音、特仑苏等大型公司的项目开发。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142148前端-广州-万绍业.jpg'>
					<div class="li_txt">
						<h3>万老师</h3>
						<h4>高级讲师</h4>
						<p>开发全栈开发工程师，曾主导开发广铁运输、智能设备项目。精通Node.js、Webpack、Vue、React、微信小程序，热衷于技术分享，在B站上发布的微信小程序项目访问排名靠前。教学风格幽默、细腻、能快准狠的将知识传达给学生。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807145236前端-深圳-于洋文美.jpg'>
					<div class="li_txt">
						<h3>于老师</h3>
						<h4>高级讲师</h4>
						<p>先后在深交所等多家大型公司担任前端开发工程师，精通HTML/CSS/JavaScript/jQuery库、Ajax、Node.JS等。多年教辅经验、上课通俗易懂有激情，带班认真负责亲和力强，善于启发学生自我思考来解决问题，一直以“传道，授业，解惑”作为自己的职业座右铭。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807144855前端-深圳-彭林.jpg'>
					<div class="li_txt">
						<h3>彭老师</h3>
						<h4>高级讲师</h4>
						<p>师范大学计算机科学与技术专业毕业。多年互联网和移动互联网开发经验，参与开发项目：广东省移动物流信息管理系统、深圳移动配送一体化平台、深圳移动领导视窗、珠海移动领导视窗等。在移动端主持开发《广东省移动物流信息管理系统-PDA端》等。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/202211241720194-牛曦-总部.jpg'>
					<div class="li_txt">
						<h3>牛老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发经验，曾独立开发国家级别项目，熟练使用前端前沿技术，有丰富的实战经验，授课风格循循善诱，幽默诙谐，注重培养学生的思考学习能力。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/2022112417181911-吕佳琪-总部.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发经验，曾负责上海银行App架构搭建，主导组件化开发；曾负责51CTO主站重构，及直播平台搭建，及负责鸿蒙社区维护，熟练使用redis缓存及服务端渲染；擅长JavaScript、Vue.js技术栈。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807151709前端-长沙-毛盾.jpg'>
					<div class="li_txt">
						<h3>毛老师</h3>
						<h4>高级讲师</h4>
						<p>拥有多年电商&互联网金融行业的软件开发经验，曾在招商基金、eims、TCL集团担任项目经理与技术负责人职位，对主流的MVVM框架、移动端开发框架、UI框架、SPA、构建工具、Serverless、代码版本管理软件、模块化、RxJS、Node.js、数据库等技术有丰富的开发和团队协同经验。												</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807151924前端-长沙-邱唪珉.jpg'>
					<div class="li_txt">
						<h3>邱老师</h3>
						<h4>高级讲师</h4>
						<p>从事多年软件开发，曾在多迪网络，途牛网就职，对前端主流技术(HTML5,CSS3,JavaScript等)，流行框架(Vue,React等)有丰富的运用经验和独到理解，曾在公司中担任项目经理并带领团队完成企业网站的设计，搭建，上线，运营。擅长结合生活中的案例来生动讲解编程技术。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220607184205前端-西安-孙晓旭.jpg'>
					<div class="li_txt">
						<h3>孙老师</h3>
						<h4>高级讲师</h4>
						<p>多年前端开发经验与项目团队管理经验，曾参与民生银行直销银行APP核心业务前端开发，负责前端团队管理，公共组件的封装。熟练使用HTML、CSS3、ES6、React、Angular、Vue等前端前沿技术，具备全栈开发能力以及熟悉敏捷项目管理。带班认真负责亲和力强，激发学生自主思考与能力。课堂氛围活跃。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807151416前端-西安-冯鹏.jpg'>
					<div class="li_txt">
						<h3>冯老师</h3>
						<h4>高级讲师</h4>
						<p>多年前端工作经验，曾任职某央企，参与政府政务系统、办公系统研发。精通HTML5、CSS3、JavaScript、Ajax；对Bootstrap、jQuery等前端框架有深入研究，对Node、Vue有独特理解，在JavaScript面向对象编程方向有一定理论研究。国家认定数据库工程师，熟悉MySQL、MongoDB。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20210505115634吴海涛.jpg'>
					<div class="li_txt">
						<h3>吴老师</h3>
						<h4>高级讲师</h4>
						<p>6年+从业经验，精通HTML5、CSS3、JavaSript、Vue，熟悉React、Angular、微信小程序。教学细腻，能够深入浅出地剖析知识点，教学致力于提高学生自身的开发能力，得到学员的一致好评。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807145114前端-深圳-王绚文.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>八年教学经验，四年教学团队带队经验，涉足Java、.Net、PHP、前端开发等领域。曾进入物流行业，为物流行业打造量身定制的企业内、外部软件系统，并涉足移动互联网，对安卓、iOS等移动平台开发具有很深的研究。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807144726前端-深圳-黄伟.jpg'>
					<div class="li_txt">
						<h3>黄老师</h3>
						<h4>高级讲师</h4>
						<p>多年大中型项目开发经验,对前端Node、Vue、React、小程序等有深入的研究,曾就职于用友软件湖南分公司、光线传媒等大型企业，在软件开发和培训方面积累了丰富的经验,主导并参与餐饮ERP、传媒行业CRM系统等多个大型项目的研发。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807144532前端-深圳-董浩飞.jpg'>
					<div class="li_txt">
						<h3>董老师</h3>
						<h4>高级讲师</h4>
						<p>前端开发工程师，多年大型项目开发经验，曾主导华为人才生态平台开发，农行智能营销系统开发，农行内控管理系统开发，电信大数据管理等大型项目前端开发，有丰富实战经验，精通前端各主流技术。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807144818前端-深圳-林利群.jpg'>
					<div class="li_txt">
						<h3>林老师</h3>
						<h4>高级讲师</h4>
						<p>前端开发工程师，丰富的开发经验以及教学经验。工作态度严谨细致，教学风格以幽默诙谐见长，深受学生喜爱。秉承的授课理念是：编程本质是枯燥的，但授课不是。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807144922前端-深圳-王传鹏.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>拥有多年开发经验，精通HTML、CSS、JavaScript、jQuery、HTML5、Ajax、Vue等各种前端框架和技术，对移动端开发有独到见解，擅长将工作经验融入教学实践，以项目驱动教学。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807145439前端-深圳-张晓坤.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>多年互联网项目开发经验与一线教学经验，精通Web前端与移动端、JavaScript、Ajax、Nodej.s、MySQL、Express、Vue等流行技术，5个以上独立开发经验，10个以上团队开发经验，曾担任过招商银行某金融平台开发团队负责人，擅长培养学生的编程思维与IT学习技巧，以程序灵感来源于生活的教学方式旨在让每一个愿意学习的人能够更加亲切的学习软件开发技术以及面向对象的编程思想！				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115740前端-北京总部-易君军.jpg'>
					<div class="li_txt">
						<h3>易老师</h3>
						<h4>高级讲师</h4>
						<p>曾就职于网康科技、美的集团等企业，担任前端开发工程师，参与过iHR(大型企业级HR系统)、美课（企业级员工培训系统）、美福（员工福利平台）及其他中小型项目，拥有丰富的项目经验。之后投身IT教育事业，并在多家知名IT培训机构中担任前端讲师，拥有丰富的授课经验。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20210505115756赵小兵.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>全栈工程师，精通技术栈包含React、Vue、Nginx、Node.js、Express、MongoDB、Docker。主导开发过线上教育公司网站，包括在线编程工具、线上教室、线上课程、以及后台录入等功能。喜欢技术考古，研究技术实现细节。讲课细致，善于引导。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220426154830前端-太原-杨耀.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端工程师，多年前端开发和实践教学经验，曾参与企业内部OA系统以及小程序项目的研发，精通JavaScript、HTML5、CSS3、jQuery、Vue等前端技术，善于将抽象的内容形象化，注重培养学员的自主学习和解决问题的能力。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220526180951太原-前端-乔文婷.jpg'>
					<div class="li_txt">
						<h3>乔老师</h3>
						<h4>高级讲师</h4>
						<p>4年前端开发经验，3年授课经验，曾任北京立道软件前端开发，参与过京师E课、中央某机构数字图书馆、比特出版管理系统等多个项目。擅长JavaScript、Vue、小程序等前端开发技术。性格活泼开朗，亲和力超强，被学员称为“知心小姐姐”。在工作中，能够更好地结合实际开发经验帮助学员，是太原校区“超好评”的前端老师。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220705134725上海-前端-顾乾峰.jpg'>
					<div class="li_txt">
						<h3>顾老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端开发工程师，从事软件开发多年。擅长JavaScript、Vue、React，小程序等技术。参加过多个开源项目（作为多个开源项目的核心研发人员）。善于把知识点化繁为简并用通俗易懂教给学生，为人和善，幽默风趣。是学生的好老师，好朋友！</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/202211241721537-丁慧-总部.jpg'>
					<div class="li_txt">
						<h3>丁老师</h3>
						<h4>高级讲师</h4>
						<p>前阿里web开发工程师， 深耕前端多年，实战经验丰富，多次参与双十一大促等项目开发，及企业内部组件库搭建， 乐于分享，喜欢钻研新技术。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807141146前端-北京总部-周淑刚.jpg'>
					<div class="li_txt">
						<h3>周老师</h3>
						<h4>高级讲师</h4>
						<p>十年Java与Web前端项目研发与教学经验，曾担任系统架构师、前端主管等职位。曾主导和研发物联网、网银、团购、电商、金融等相关领域的项目。对Node.js、Vue、小程序、React、移动App、数据可视化等前端技术有深入研究并有丰富的项目架构和研发经验。授课条理清晰，循序渐进，深入浅出，认真耐心细致的将知识传授给每一位学员。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115225前端-北京顺义-凡友福.jpg'>
					<div class="li_txt">
						<h3>凡老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端开发工程师，软件设计师，具有多年软件开发经验，曾供职于京东商城，先后参加多个大型管理系统开发，负责前端技术架构，公共业务组件封装。精通前端技术体系，熟练使用CSS3、ES6，TypeScript、Vue、React、Node.js、MySQL等前后端技术。擅长将工作经验融入教学实践，授课清晰，认真负责，热衷于传播实战开发技能，深受学员认可。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142006前端-总部-高凌宇.jpg'>
					<div class="li_txt">
						<h3>高老师</h3>
						<h4>高级讲师</h4>
						<p>八年团队研发经验，前后端各类技术均有涉猎，前后研发了多个平台级项目产品，曾担任某大型软件企业的前端架构师，负责公司平台级应用开发工具的设计和架构，精通OTO类移动开发业务，曾担任某大型餐饮软件公司前端负责人，负责公司移动端产品设计和技术架构的开发工作。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115317前端-北京顺义-刘将.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>拥有多年开发教育经验，精通HTML、CSS、JavaScript、jQuery、PHP、MySQL等技术，在教学过程中认真，知识点讲解细腻，对待学生要求严格，同时风趣幽默的授课风格让学员听得轻松，学的容易，记得更牢固。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115423前端-北京顺义-苏东博.jpg'>
					<div class="li_txt">
						<h3>苏老师</h3>
						<h4>高级讲师</h4>
						<p>十年开发经验，精通JavaScript、微信小程序、Vue、JavaScript、React、React Native、PHP等前后端技术，主导开发了科威特石油系统、宝马供应链系统等大型项目。熟悉项目开发中的前后端交互，擅长将工作经验融入教学实践，以项目驱动教学，风格幽默诙谐，深受学生喜欢。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115301前端-北京顺义-刘朝泽.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>有丰富的项目开发经验和授课经验，具备全栈研发能力。较强的JavaScript语言功底，精通主流框架如Vue、React。擅长将复杂抽象的理论用简单直接的形式去讲解,高效授课,干货满满。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20210416171913康老师1.jpg'>
					<div class="li_txt">
						<h3>康老师</h3>
						<h4>高级讲师</h4>
						<p>10余年IT从业经验，全栈工程师行业经验丰富，曾参与PMS、CRS系统开发，主导开发用户签名管理系统与储值卡系统。具有各种平台服务器部署与维护经验。精通Web前、后端相关技术和各类主流框架。6年以上授课经验，热爱钻研，对各类知识点都有比较深的见解。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220124114331柴鹏（2）.jpg'>
					<div class="li_txt">
						<h3>柴老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端开发工程师，五年开发经验，两年团队管理经验，Vue资深用户。先后参加多个大型管理系统开发，负责前端技术架构，公共业务组件封装；精通前端技术体系，熟练使用CSS3、ES6、Vue、React等前端技术；授课清晰和蔼，擅长调用学员的思考能力，深受学员喜爱。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115459前端-北京顺义-汤凤坡.jpg'>
					<div class="li_txt">
						<h3>汤老师</h3>
						<h4>高级讲师</h4>
						<p>6年开发经验5年教学经验，精通JavaScript、Ajax、Git、jQuery、Node.js、Vue等。曾就职于链接网、高德地图。讲课沉稳、条理清晰，善于使用现实生活中的现象描述编程，启发学生。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807144748前端-深圳-江佳恒.jpg'>
					<div class="li_txt">
						<h3>江老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发经验和教学经验，精通HTML，CSS，JavaScript，ASP.NET等编程语言和数据库系统。深入研究流行框架Bootstrap,LigerUI,EasyUI等前端框架，在js面向对象上有很深的造诣。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807115206前端-北京顺义-段慧林.jpg'>
					<div class="li_txt">
						<h3>段老师</h3>
						<h4>高级讲师</h4>
						<p>前端开发工程师和软件开发工程师， 5年软件开发项目经验，精通网站前端设计和HTML、JavaScript、CSS+DIV、Regular Expressions和Ajax以及客户端技术的使用。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807151512前端-西安-殷凯.jpg'>
					<div class="li_txt">
						<h3>殷老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发经验，曾任职于新浪，搜狗等知名互联网企业，担任软件架构和设计等方面工作。有新浪微盘，搜狗问问等千万级用户体量的软件开发经验。精通Vue，React，Node等前端主流开发框架，对后端开发，移动端开发也有深入研究。擅长用简洁明快的语言来描述晦涩难懂的代码。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142839前端-济南-刘国栋.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>多年前端、移动端开发与教学经验，在JS、Android、iOS领域均有独特的见解。对 Android 源代码与前端流行框架Vue、React、jQuery等有深入研究。在多家公司担任过软件开发工程师、架构师等职位。曾主导开发《灯塔 - 党建在线》等多个大型软件开发项目。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807141309前端-成都-黄金林.jpg'>
					<div class="li_txt">
						<h3>黄老师</h3>
						<h4>高级讲师</h4>
						<p>具有多年的开发经验,喜欢和精通Web前端.包括Vue.js,Node.js,jQuery,Angular,Web工程化,全栈开发等.参与开发恒鼎办公自动化系统,万象网管计费系统,美加美o2o管理系统等项目,讲课逻辑清晰,擅长于把复杂问题细化,拆分到细小简单的问题,并能在学习方法,编程思路技巧等方面,很好得启发学生。	</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/202211241719473-李帅-总部.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>拥有6年+web项目前后端开发经验，擅长JavaScript、Vue.js、微信小程序等前后端技术，热衷全栈技术。授课认真负责、思路清晰、由浅入深，口头禅“没有什么是三遍代码解决不了的“，被同学们亲切的称为“三遍老师”。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807144235前端-上海-芮伟棠.jpg'>
					<div class="li_txt">
						<h3>芮老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端开发工程师，具有多年的Web开发经验和教学经验。精通HTML，CSS、JavaScript等，对于前端主流框架Vue、React等有深入了解。技术基础坚实，前沿应用涉猎广泛。授课风格幽默风趣，讲解课程细致深入浅出，授课过程中注重与学生的沟通，广受学生好评。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807143908前端-上海-蒋鹏.jpg'>
					<div class="li_txt">
						<h3>蒋老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端工程师，多年前端开发和实践教学经验，精通JavaScript、Ajax、jQuery、Vue、React、小程序以及Node.js、PHP、MySQL等前后端技术。喜欢钻研，热爱源码封装，授课风趣幽默，由浅入深，广为好评！							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807143944前端-上海-李涛涛.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>多年项目开发经验，精通JavaScript、Vue、Node.Js、微信小程序等技术。上课语言通俗易懂，对学生平易近人，课程讲解深入浅出，极为擅长培养学生的编程思维。具备丰富前端授课经验。
							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220225113251前端-何武.jpg'>
					<div class="li_txt">
						<h3>何老师</h3>
						<h4>高级讲师</h4>
						<p>拥有8年开发和讲师经验，曾在中软国际担任前端负责人及IT上市教育公司担任教学负责人，主导开发过多个大型互联网项目和课程项目，同时对JS、小程序、Vue、React有深入的研发经验。授课风趣幽默，由浅入深，擅长培养学生分析问题、解决问题的能力。坚持匠心铸造品质，关爱成就学员。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220523154640西安-前端-杨乐.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>多年Web前端开发经验，教育管理硕士，取得高等院校教师资格证书，拥有多种门户网站，后台管理系统，WebApp，微信公众号，小程序和可视化大屏的项目开发经验，尤其擅长前端Vue框架技术和大屏可视化技术，上课方式幽默诙谐轻松，同时擅长教育学和心理学，可给予学生除技术之外的其它方面的指导。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220526181259太原-前端-智晓琴.jpg'>
					<div class="li_txt">
						<h3>智老师</h3>
						<h4>高级讲师</h4>
						<p>曾在平安、美团等大型互联网公司中担任开发工程师的职位。精通H5C3、JavaScript、Vue、ES6等前端技术栈，教学严谨，认真负责，热衷于将实际开发经验跟课堂知识相结合，让每一位学生都能够掌握工作中实用的开发技能。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/202211241720485-赵阳-昌平校区.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>从事互联网开发6年，有丰富的开发和讲课经验，开发过复杂的后台管理，c端 webapp，混合开发，小程序等项目，精通大前端技术栈，对 JavaScript TypeScript Vue React 微信小程序 Node.js，数据结构和算法有深入的理解。教学风格轻松幽默，具有强烈的责任心，善于研究和乐于分享技术，让学生能够理解知识的本质。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/2022112417233212-于浩男-总部.jpg'>
					<div class="li_txt">
						<h3>于老师</h3>
						<h4>高级讲师</h4>
						<p>5年+软件开发经验，前百度高级前端开发工程师，一线项目开发经验丰富，代码⼏万⾏，项⽬⼗⼏个。擅长JavaScript、vue.js、React.js主流技术栈。讲课通俗易懂有激情，带班认真负责亲和力强，善于启发学生自我思考来解决问题。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220325114621前端-上海-李波.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端开发工程师，具有多年的Web开发经验和教学经验。精通HTML，CSS、JavaScript等，对于前端主流框架Vue、React等有深入研究。不但授课清晰, 而且指导超过千余名学生成功就业, 具有丰富的IT行业经验。授课风格幽默风趣，讲解课程细致深入浅出，授课过程中注重与学生的沟通，广受学生好评。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142958前端-南京-李龙.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>2013年开始开发工作，从事前端开发与软件开发。曾参与过某农业大学的全国考试系统、阅卷系统。擅长前端交互，项目经验丰富,讲课沉稳，通俗易懂。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807143515前端-南京-徐冠雄.jpg'>
					<div class="li_txt">
						<h3>徐老师</h3>
						<h4>高级讲师</h4>
						<p>从事Web前端开发十年，先后就职于多家IT互联网公司，曾任职某网络公司技术主管。参与及主导研发过多个省级政府项目及海外项目，涉及金融、汽车、电子等多个领域。精通HTML, CSS, JavaScript, 对前端流行框架有深刻理解。多年前端产品培训，积累了丰富的教学经验。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/2022112417240013-柳军航-沈阳.jpg'>
					<div class="li_txt">
						<h3>柳老师</h3>
						<h4>高级讲师</h4>
						<p>全栈工程师,擅长H5、JavaScript、Vue、Node、PHP等多门前后端编程语言。先后就职于国内多家一线互联网公司，开发和教育行业多年从业经验，擅长并且热衷于技术分享、对前端工程化、架构设计有着深入的研究。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220607183558前端-厦门-黄永鑫.jpg'>
					<div class="li_txt">
						<h3>黄老师</h3>
						<h4>高级讲师</h4>
						<p>8年企业开发经验，精通前端技术栈，深入掌握Vue、Node等前端框架；熟悉全栈开发，深入掌握PHP、MySQL、Redis等技术栈；拥有GitHub 800star开源项目开发经验，项目前端性能优化经验。企业实战经验丰富，擅长前后端结合分析和解决问题。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807143549前端-南京-张联昌.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>熟悉前端、C语言、C#、Java等四种语言，目前主攻前端。
精通现今前端开发流行框架Vue、Angular、React
具有五年多前端开发和教学经验，经常在互联网公司做技术分享。
曾任多家创业型公司前端主力开发，对前端业务架构选型和后期复杂工程优化具有深刻体验。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/2022112417244014-赵健-顺义校区.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>8年开发教学经验，后端开发出身，有全栈开发经验。熟悉.Net平台，SqlServer、MySql数据库。熟悉原生JavaScript及ES Next新特性，熟悉Vue及React框架。曾涉及大型电商平台及在线教育平台的开发。教学幽默风趣，深入浅出，深受学生喜爱。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142707前端-杭州-郑伟.jpg'>
					<div class="li_txt">
						<h3>郑老师</h3>
						<h4>高级讲师</h4>
						<p>7年教学与开发经验，深入研究过php,js等语言，后专注前端开发，精通:Vue,React,Angular,Express等开发框架，MySQL、SQLServer、MongoDB数据库系统。曾参与多个电子商务,物流项目的开发。曾担任聚美优品前端工程师，授课风格：由浅入深，思路清晰，通俗易懂。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20210924094650前端-上海-宋国强.jpg'>
					<div class="li_txt">
						<h3>宋老师</h3>
						<h4>高级讲师</h4>
						<p>六年前端开发经验，曾担任核心技术团队前端负责人，对JavaScript, 小程序、Vue, Node等技术有深入的研发，擅长以项目、案例驱动教学，懂得如何以学生的角度去思考问题，亲和力强。曾参与华为云官网、华为云社区等多个大型项目的研发。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142256前端-广州-张扬波.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>06年软件工程毕业，资深全栈讲师，从前端到后端架构有一套完整体系，入行前带领技术团队完成用户日增长量10W+的翼推送项目、天翼宽带、页游平台及分成系统架构和研发。讲课深入浅出，思路清晰到位，深受学生好评。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807142226前端-广州-伍湖.jpg'>
					<div class="li_txt">
						<h3>伍老师</h3>
						<h4>高级讲师</h4>
						<p>湖南师大毕业，十年开发和教学工作经验，专注于前端产品应用开发，曾主导广东省大学生就业服务平台，长沙市某建材交易信息网的开发。上课幽默风趣，思路清晰，注重学生自主探索，学生评价：上伍老师的课，能够在快乐中学习。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20210924094321前端-上海-王晨光.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>前端从业经验丰富，精通HTML5、CSS3、 JavaScript等。对于前端主流框架Vue、React等有深入研究。曾参与政府办公系统、企业内部OA系统研发等项目。课堂氛围风趣幽默，喜欢用实际开发需求展开知识点的讲解、擅于引导学生掌握正确学习方法以及提高解决问题的能力。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220526180302太原-贾拉弟.jpg'>
					<div class="li_txt">
						<h3>贾老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端工程师，多年前端开发和实践教学经验，擅长HTML5,CSS3,Jquery,Ajax,Node,Vue等前后台技术，幽默风趣，擅长调用学员的学习热情以及学员的思考能力。热爱技术，喜欢钻研，秉承着”用爱成就每一位学生”的理念。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807152127前端-郑州-陈晓强.jpg'>
					<div class="li_txt">
						<h3>陈老师</h3>
						<h4>高级讲师</h4>
						<p>全栈开发工程师，拥有多年开发经验和教学经验，荣获传智播客教育集团2017年度“优秀教师”称号。精通PHP、Python、Linux、MySQL等后端技术，熟练HTML、CSS、JavaScript、jQuery、Ajax、Node.js等前端技术。注重学以致用，善于激发学生独立思考问题的能力。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807152203前端-郑州-韩利杰.jpg'>
					<div class="li_txt">
						<h3>韩老师</h3>
						<h4>高级讲师</h4>
						<p>多年前后端开发和教学经验，对于 C#、PHP、 Python、Web前端等学科有学习和研究。另外对Linux系统和数据库优化有深度的掌握。参与研发项目，多媒体通讯平台、数据处理、电子商务等。授课有序幽默，课上同学的老师，课下同学的朋友。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807152434前端-郑州-梁相辉.jpg'>
					<div class="li_txt">
						<h3>梁老师</h3>
						<h4>高级讲师</h4>
						<p>多年前端开发经验，精通 HTML5，CSS3，JavaScript。对微信小程序，移动APP，Vue，React等热门前端框架有深入研究，热衷钻研新技术，拥抱前端变化，极富热情的将符合当下企业需求的前端技术，认真耐心细致的传授给每一位学员。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807152504前端-郑州-刘亚超.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>10年以上的软件开发经验和丰富的教学经验。精通Java、JavaScript、及Android系统架构，参于过开源项目phoneGap的开发并提交patch（PhoneGap 后改名为 Apache Cordova），主要作品有神州付系列和钱袋宝系列产品，（钱袋宝团队后并入美团支付），指导并参于多个项目：百度输入法、捕鱼达人、百思不得姐、海尔智能家居、乐视机顶盒、口语100等众多软件。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220822140429前端-厦门-林娴（官网尺寸）.jpg'>
					<div class="li_txt">
						<h3>林老师</h3>
						<h4>高级讲师</h4>
						<p>资深前端工程师，架构、研发过多个新技术主导的项目。拥有丰富的多种场景项目的开发经验，并应用于百万级流量的线上服务，是现代前端技术和前端工程化的践行者。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807152610前端-郑州-石浩洋.jpg'>
					<div class="li_txt">
						<h3>石老师</h3>
						<h4>高级讲师</h4>
						<p>多年前后端软件开发和教学经验，精通JavaScript、Ajax、jQuery、Vue等前端技术以及Node.js、PHP、Python、MySQL等后端技术，热爱研究技术，对知识的细节极为看重，秉承传智播客务实的理念，上课语言通俗易懂,热衷把知识传递给每一位学生。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807152635前端-郑州-孙景辉.jpg'>
					<div class="li_txt">
						<h3>孙老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发经验和教学经验，精通HTML、CSS、JavaScript、jQuery、Ajax等。深入研究Bootstrap、Vue、React、React Native、小程序等前端相关技术，在小程序上有很深的造诣。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807152706前端-郑州-王德华.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>毕业于北京大学信息管理专业，精通JavaEE，Andriod，Python，JavaScript，曾参与北京企业信用网，北京企业年检年报系统，北京食品追溯系统等大型电子政务网站，还曾参与千万级用户群的App百思不得解开发设计。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20210910101415前端-长沙-汤浪.jpg'>
					<div class="li_txt">
						<h3>汤老师</h3>
						<h4>高级讲师</h4>
						<p>多年Web开发经验，熟悉前端技术开发架构，喜爱并热衷于前端开发，特别在Vue、Node.js、React等主流技术领域积累了丰富的经验，提出并成功主导了B2C、社交、O2O、IM、OA等众多领域的技术解决方案，同时在结合Linux服务器相关技术优化提升网站性能。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807152729前端-郑州-邢飞亚.jpg'>
					<div class="li_txt">
						<h3>邢老师</h3>
						<h4>高级讲师</h4>
						<p>多年前后端开发和教学经验，精通前端技术体系，对JavaScript、Node.js、Vue、微信小程序、React等有深入理解。授课认真细致，注重细节，善长对复杂知识点的归纳和总结，热衷新技术的研究与探索，项目经验丰富。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20210910101458前端-长沙-易骏.jpg'>
					<div class="li_txt">
						<h3>易老师</h3>
						<h4>高级讲师</h4>
						<p>多年前端开发经验，曾参与某省电信网上营业厅、某旅游平台、某物流平台项目开发。对前端主流框架Vue，微信小程序、UI框架，模块化，原生JavaScript，Node.js，代码管理工具等有着丰富的实战经验。善于将抽象的内容形象化，注重培养学员的自主学习和解决问题的能力。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20210915095540前端-长沙-刘学良.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>Web前端开发工程师，具有五年的Web开发经验，熟悉前端开发框架，拥有多年的Vue开发经验，曾在公司担任核心开发，有丰富的项目实战开发经验。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807150401前端-武汉-肖卅.jpg'>
					<div class="li_txt">
						<h3>肖老师</h3>
						<h4>高级讲师</h4>
						<p>拥有多年前后端开发管理经验，先后开发SNS互联网交友系统、汽车垂直电商项目等。 热钟于全栈技术解决方案，擅长PHP、JavaScript、MySQL数据库,Vue前后端分离技术。 讲课深入浅出，通俗易懂，从学生的角度出发从已有知识推向未知知识点，将理论与实践相结合。	</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20220530191427杭州前端的王如军.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>前端从业经验丰富，精通HTML5、CSS3、 JavaScript等。6年授课经验，授课通俗易懂，注重与学生的沟通，深得学生好评。曾参与中国农科院技术推广平台项目开发、广电智慧图书馆、少儿有声书、伏羲云等产品前端开发；						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807150010前端-武汉-彭廷伟.jpg'>
					<div class="li_txt">
						<h3>彭老师</h3>
						<h4>高级讲师</h4>
						<p>从事前端教学与研发7年，在一线教师岗位上具有丰富的教学和处理学生疑难问题的经验。主攻和研究PHP、JavaScript、SQL Server、MySql、Oracle等编程语言和数据库系统，深入掌握jQuery、Bootstrap、Vue、TypeScript、React、EasyUI等技术框架，熟练应用PHP、Node.js、Python等后端技术。曾先后在高大尚网络等软件企业担任过程序员、技术经理等职务。曾带领团队开发过游戏后台管理系统、游戏官网、游戏平台系统、电子商务系统、微教育平台系统等。授课方式幽默，对简单问题有独到见解，对疑难问题能深入浅出。在引导与启发中挖掘学生潜能。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807151349前端-武汉-杨康康.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>计算机科学与技术专业，4 年一线互联网公司开发经验。曾参与或独立负责PC端、移动端、桌面端项目的开发，如商城网站，各种OA以及桌面端应用。喜欢前端、熟悉后台！喜欢研究各种不同的新技术带来的乐趣，如 TypeScript、Electron，并在实际项目中深度使用；对现有的前端架构体系以及前端框架有深入研究。选择教学，也是选择挑战自己，成就学员，就是成就自己！						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/2022112417221811-吕佳琪-总部.jpg'>
					<div class="li_txt">
						<h3>吕老师</h3>
						<h4>高级讲师</h4>
						<p>前端开发工程师，曾就职于滴滴，参与研发公司内的大型中后台项目以及企业内部组件库的搭建，擅长HTML、CSS、JavaScript、React等各种前端技术，喜欢钻研新技术，项目经验丰富。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200823172605Python-成都-刘亚静.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>硕士研究生学历，精通Linux、Shell、Python语言，熟练掌握Vue，HTML，CSS，JavaScript等前端开发语言，多年从事于互联网行业，具备丰富的DevOPS自动化运维的项目开发经验。对Docker、Kubernetes等云原生技术有深入研究，讲课深入浅出，乐于钻研分享，注重引导学生						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/cloud/20200807153557大数据-北京总部-张敬存.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>Apache Flink源码贡献者，专注大数据实时计算领域，ApacheCon Asia 2022亚洲峰会特邀讲师</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20220805183704大数据-李锋涛.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>985计算机硕士，Apache Doris社区贡献者。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20220804190949赵晨杰.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>985计算机硕士，多年深耕大数据、人工智能领域，ApacheCon Asia 2022亚洲峰会特邀讲师				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/cloud/20200807153210大数据-北京总部-曹宇.jpg'>
					<div class="li_txt">
						<h3>曹老师</h3>
						<h4>高级讲师</h4>
						<p>Apache Flink源码贡献者，擅长大数据云平台技术领域。		</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/cloud/20200807153118大数据-北京昌平-赵佳乐.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>Apache Pulsar社区贡献者，擅长数仓领域技术。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20220804164858康健.jpg'>
					<div class="li_txt">
						<h3>康老师</h3>
						<h4>高级讲师</h4>
						<p>985硕士，擅长数据库与数据挖掘技术领域。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20210610180153陈佳285-430.jpg'>
					<div class="li_txt">
						<h3>陈老师</h3>
						<h4>高级讲师</h4>
						<p>擅长数仓领域技术，有丰富的金融大数据行业经验。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/cloud/20200807153854大数据-上海-闻耀.jpg'>
					<div class="li_txt">
						<h3>闻老师</h3>
						<h4>高级讲师</h4>
						<p>擅长数仓领域技术，擅长海量数据下的流式计算和离线数据处理。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/cloud/20200807153322大数据-北京总部-孙阳征.jpg'>
					<div class="li_txt">
						<h3>孙老师</h3>
						<h4>高级讲师</h4>
						<p>擅长数仓领域技术，主导千亿级数据项目。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/cloud/20200807153412大数据-北京总部-魏建军.jpg'>
					<div class="li_txt">
						<h3>魏老师</h3>
						<h4>高级讲师</h4>
						<p>擅长实时领域，拥有车联网行业大数据应用架构及开发经验。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/cloud/20200807153240大数据-北京总部-孔帅.jpg'>
					<div class="li_txt">
						<h3>孔老师</h3>
						<h4>高级讲师</h4>
						<p>Apache DolphinScheduler社区贡献者，擅长离线数仓领域。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200921162901姚相宇.jpg'>
					<div class="li_txt">
						<h3>姚老师</h3>
						<h4>高级讲师</h4>
						<p>擅长大数据领域技术，12306抢票软件开源作者。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20220805183507大数据-上海-江宗海.jpg'>
					<div class="li_txt">
						<h3>江老师</h3>
						<h4>高级讲师</h4>
						<p>大数据架构师，主导基于Flink的实时反欺诈风控、实时地铁故障预警等流式计算平台的设计和研发。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200921162128Python-北京-朱得君.jpg'>
					<div class="li_txt">
						<h3>朱老师</h3>
						<h4>高级讲师</h4>
						<p>985计算机硕士，擅长大数据/人工智能方向。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/cloud/20200807153523大数据-北京总部-张红保.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>擅长实时领域，拥有金融行业大数据应用架构及开发经验。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200921161932Python-北京-原满.jpg'>
					<div class="li_txt">
						<h3>原老师</h3>
						<h4>高级讲师</h4>
						<p>北京大学计算机硕士，擅长大数据/人工智能领域技术。		</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200921162843谢晨.jpg'>
					<div class="li_txt">
						<h3>谢老师</h3>
						<h4>高级讲师</h4>
						<p>擅长数仓领域技术，拥有丰富的安全领域大数据行业经验。	</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200921161901Python-北京-史修铭.jpg'>
					<div class="li_txt">
						<h3>史老师</h3>
						<h4>高级讲师</h4>
						<p>大数据架构师，拥有丰富的技术攻坚经验。		</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/python/20200823171913Python-北京-王保明.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>毕业于山东大学，计算机硕士。具有10年项目开发、项目管理经验，任事业部技术总监，长期一线项目经理。主持开发过的项目涉及银行、政府等应用领域。多年企业内训培训师，讲课深入浅出，深受学生和企业员工的好评。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ai/20220117133838人工智能-深圳-孟宝亮.jpg'>
					<div class="li_txt">
						<h3>孟老师</h3>
						<h4>高级讲师</h4>
						<p>毕业于俄罗斯圣彼得堡大学，11年开发经验，主要研究算法优化，算法模型底层原理。精通Linux&nbsp;C/C++,&nbsp;Python等开发语言，对算法工程实践有深入的研究，专注机器学习、深度学习相关方面的应用研究。在Linux系统开发、自然语言处理、机器视觉等方面据具有丰富的经验。授课幽默风趣，深入浅出，深受学员喜爱。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ai/20220118103059人工智能-深圳-李健.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>硕士，大数据挖掘和计算机视觉方向，曾主持和参与了多家互联网企业基于海量数据的用户画像、推荐系统及人脸支付相关项目。对大数据领域中的常用框架Hadoop、Hive、Spark等有丰富的实战经验和深入的研究，具有多年人工智能和大数据开发经验；同时有丰富的机器学习、深度学习、计算机视觉、自然语言处理的项目实施经验。理论功底扎实，授课认真有激情、思路清晰、通俗易懂，深受学员欢迎。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ai/20210816155937人工智能讲师-侯晓君.jpg'>
					<div class="li_txt">
						<h3>侯老师</h3>
						<h4>高级讲师</h4>
						<p>多年的软件开发,机器学习和人工智能算法研发经验, 精通C/C++, Python等开发语言, 对框架TensorFlow, Pytorch有丰富的项目授课经验,对项目全流程开发有丰富的架构经验,对算法工程实践有深入的研究.授课风格风趣幽默, 知识讲解结构层次分明。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ai/20220429144028dy-python 朱得军.jpg'>
					<div class="li_txt">
						<h3>朱老师</h3>
						<h4>高级讲师</h4>
						<p>大连理工大学计算机硕士毕业，专注于机器学习，操作系统，推荐，深度学习领域。曾就职于人工智能创业公司，百度公司，任算法工程师。对CV，NLP，风控，强化学习，C++，Python等领域技术有深入研究和项目经验。为人幽默喜气，深受学生欢迎。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200921162105Python-北京-赵艳秋.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>多年开发与IT教学经验，精通Python、MySQL、HTML、CSS、JavaScript等编程语言。技术纯熟，项目经验丰富。授课风趣幽默，以不同的授课风格打破代码课程对学生的常规束缚，引导不同基础的学生日有所长。
</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ai/20220429140131大数据-北京总部-赵晨杰.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>擅长人工智能领域技术，多年模式识别和数据挖掘开发经验，主导研发多项国家和省级科研项目，负责企业级信贷风控模型和智能医疗数据平台开发，专注ML/DL/PR/KG领域相关算法的应用，曾任职美团搜索部负责NER及Bert搜索排序优化对Hadoop、SparkTensorflow和PyTorch等大数据、人工智能技术有多年企业实践经验。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ai/20220429140537dy-原满.jpg'>
					<div class="li_txt">
						<h3>原老师</h3>
						<h4>高级讲师</h4>
						<p>北京大学电子与通信工程硕士, 多年开发经验,对数据分析,大数据,机器学习,后端开发等技术有深入了解, 精通java Python等常用开发语言,在多家软件公司担任软件工程师, 项目经理, 有新浪微博,中新网新闻发布系统等多个大型项目经验。						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/ui/20220125141139王老师高级讲师从事设计行业10余年.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>从事设计行业 10 余年，OSTA 认证设计师，精通 PS/AI/CDR/ID/AE/C4D /3DSMAX ,在广告、印刷、网页及UI设计领域有丰富的项目经验，并有多年的教学经验，已成功将数千名不甘平庸者送上了设计师的岗位。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125140539刘老师高级讲师10余年设计行业经验.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>10余年设计行业经验，精通UI行业相关技术。前Appconomy交互设计师、NeusoftUI设计师。曾服务过家乐福、美的、东航等大型企业。主导设计的津津会员卡APP，曾获得中国电子学会全国移动互联网应用大赛一等奖，并收录在书籍《融合时代》中。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125140637马老师高级讲师.jpg'>
					<div class="li_txt">
						<h3>马老师</h3>
						<h4>高级讲师</h4>
						<p>进入互联网工作8年，对设计有独特见解。具备丰厚的商业绘画及多年教学经验。在创意广告、印刷、网页设计等有较突出的表现，在阿噗网、路客等平台有相关设计经验，原创插画刊登于多家时尚杂志。在授课中，将项目分解与真实工作场景结合，深受学员爱戴。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20210312154356刘槟.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>10年设计及管理经验。毕业于东北师范大学，美术学院视觉传达专业。美术功底深厚，擅长品牌形象设计、字体设计、网页和包装设计及LOGO设计。曾服务于中国疾控、塔塔数据、现代传播集团、新奥集团、太湖金张等国内外知名企事业单位。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125135803金老师高级讲师9年专注于设计和教学研究工作.jpg'>
					<div class="li_txt">
						<h3>金老师</h3>
						<h4>高级讲师</h4>
						<p>9年专注于设计和教学研究工作，曾任多家设计公司设计师。对设计有独特的见解，具备丰厚的绘画经验。多次受邀大型活动、展会现场作画。受邀参与设计的单位有：cctv纪录片频道、湖南省人民政府、北京世通华纳控股集团、北京完美动力动画学院等。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125141410许老师高级讲师10年设计行业经验.jpg'>
					<div class="li_txt">
						<h3>许老师</h3>
						<h4>高级讲师</h4>
						<p>10年设计行业经验，国内知名讲师。注重理论与实践结合，课堂气氛活跃。曾服务过国内外大型企事业单位，如：中国电信、蚂蚁金服、伯俊软件、义信电子商务等，有较丰富项目实战经验。名师寄语：“你负责努力，剩下的交给老师”。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20210312154531杨帆.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>13年视觉设计经验。曾担任网页设计师，负责网页、动画、代码等设计曾从事数字互动设计，带领团队拿下华为、中兴等大型项目，团队作品荣获OneShow金铅笔奖;专注于智能硬件APP设计、擅长电商、UI等视觉设计，对摄影颇有研究。网页设计师联盟专访设计师。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125140112梁老师高级讲师从事艺术设计类行业10多年.jpg'>
					<div class="li_txt">
						<h3>梁老师</h3>
						<h4>高级讲师</h4>
						<p>从事艺术设计类行业10余年，毕业于广西师范大学美术学院。曾在知名广告公司担任设计总监要职，项目实战经验丰富，主要从事品牌Ⅵ设计及推广、平面设计、电商设计，旅游项目策划等。2015年投身教育事业，春风化雨、桃李争艳。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125141547闫老师高级讲师拥有7年的设计经验.jpg'>
					<div class="li_txt">
						<h3>闫老师</h3>
						<h4>高级讲师</h4>
						<p>拥有7年的设计经验，视觉传达设计专业。精通photoshop、illusstrator，Axure等常用设计软件，熟练Html，CSS等前端技术。曾创办独立设计工作室。授课风格幽默，思路清晰。时常告诫学生莫忘设计初心，才能方得始终！					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125142022赵老师高级讲师9年设计经验.jpg'>
					<div class="li_txt">
						<h3>赵老师</h3>
						<h4>高级讲师</h4>
						<p>9年设计行业经验，曾任职联想、万达、帕布洛、台湾普林斯顿等国内外集团负责线上店铺设计。参加过全国“关注自闭症儿童”“红丝带”等公益活动的设计工作；开设“银河漫游”“设计一族联盟”工作室，为几十家线上店铺提供服务。在电商的设计运营方面有极高的造诣。				</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220218111727李慧.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>拥有8年设计经验，艺术设计专业出身。涉及领域包括UI设计、网站设计、平面印刷广告、包装设计、手绘、VI设计等。曾为武汉理工孵化器、中国语料库等知名企业设计VI视觉识别系统，进行企业品牌推广。具备多年的网页与APP项目开发经验。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125135645曾老师高级讲师从事设计行业7年.jpg'>
					<div class="li_txt">
						<h3>曾老师</h3>
						<h4>高级讲师</h4>
						<p>从事设计行业7年，精通多种设计软件。曾在广告公司担任设计师及设计总监。服务企业有深圳海洋局、招商地产、香港珠宝、华润集团等。2012年投身教育事业，深受广大学员爱戴。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220224134457UI-时琨朝.jpg'>
					<div class="li_txt">
						<h3>时老师</h3>
						<h4>高级讲师</h4>
						<p>10年互联网工作经验，艺术学院科班毕业，曾负零到一开发SIK APP，曾任职百度旗下度小满APP设计项目长兼美术指导。对产品开发及界面设计有着丰富的工作经验，擅长移动端设计、B端设计、M端设计。是一直围绕产品核心、用户体验、开发效率教学为主导，擅长传授真实的工作经验。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125135921李老师高级讲师场景式教学倡导者.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>场景式教学倡导者，10余年一线美术设计经验，在交互设计、视觉传达以及美术史论等方向有深入研究。尤其在美术设计教学领域具备多年课程体系研发经验，对于设计类岗位需求动态具备敏锐洞察力，独立研发的艺术设计课程在多个高校被作为核心教学内容。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125135732高老师高级讲师13年设计工作经验.jpg'>
					<div class="li_txt">
						<h3>高老师</h3>
						<h4>高级讲师</h4>
						<p>国内设计色彩搭配知名博主、Adobe认证讲师、十三年工作经验。擅长软件：Photoshop、Illustrator、CorelDRAW、Sketch、AxureRP、C4D、Principle等。服务过的部分知名客户：欧莱雅、万科地产、嘉顿食品、盛大游戏、宝马、阿里巴巴、新浪网、腾讯大粤网、福特汽车等。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125141635杨老师高级讲师8年的设计经验.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>拥有8年的设计经验，长期奋斗在北京电商服务设计岗位，曾为阿里巴巴多家商家做设计及运营培训，专注于天猫、淘宝、京东等第三方平台设计以及运营，精通PS/AI/ID/CDR/C4D等设计软件。风趣幽默的授课方式，对待学生认真负责，耐心引导，条理清晰，深受学生的喜爱。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/ui/20220125140950谭老师高级讲师14年互联网设计经验.jpg'>
					<div class="li_txt">
						<h3>谭老师</h3>
						<h4>高级讲师</h4>
						<p>14年互联网设计经验，首批移动互联网UI设计师，知名WEB设计师，对视觉设计、平面设计、界面设计、体验设计、交互设计、动画制作、影视后期等多方面有研究。曾主导腾讯、小米、IBM、路虎汽车、湖南卫视、上海世博会等500强企业互联网项目。</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/test/20220216100107韩雷.jpg'>
					<div class="li_txt">
						<h3>韩老师</h3>
						<h4>课程研究员</h4>
						<p>在电信核心管线项目中担任过高级测试工程师，落实项目自动化实施；负责过南航飞机载重、呼叫中心重大项目测试实施和性能测试方案落实。组过两个互联网电商系统团队，建立落实自动化解决方案、性能优化方案等。有丰富项目质量体系规划落实经验，熟悉各种自动化方案（接口、UI）体系、性能测试、CI体系等。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200823154505Python-北京顺义-齐瑞华.jpg'>
					<div class="li_txt">
						<h3>齐老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发经验和丰富的教学经验,精通Python、PHP、Objective-C、Swift、MySQL等编程语言,主导并开发过海南移动惠生活、庆红汽车交易发布平台、微课网在线教育平台等项目,讲课富有激情、条理清晰，注重培养学生的学习能力。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200823154240Python-北京-牛领.jpg'>
					<div class="li_txt">
						<h3>牛老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发与It教育培训经验，精通 Python、C/C++、Linux系统编程。熟悉常见的数据库系统，熟悉 HTML/CSS/JS 等前端技术。具有高度的责任心，授课思路清晰，注重培养学生的学习能力，深受学生好评。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200823172515Python-北京总部-邢文鹏.jpg'>
					<div class="li_txt">
						<h3>邢老师</h3>
						<h4>高级讲师</h4>
						<p>10年Linux平台互联网开发经验，业界资深讲师。精通Linux内核开发、内核系统移植、ARM SOC体系结构设计、C/C++、Python、JavaScript、LISP、ARM/X86汇编等编程语言，全栈工程师对计算机原理从上到下融会贯通。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20210621102919软件测试-讲师-王飞.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>11年软件开发经验，先后任职创新工场、网秦科技负责后台服务器的研发、测试等工作。拥有丰富的项目开发、单元测试、性能测试经验。精通C、Java、Python等编程语言，Oracle、MySQL数据库，Linux系统、网络编程等技术，授课风格轻松幽默，细致严谨。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20210205133838张晓彤1.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>8年软件测试及项目管理经验，曾任职于蔚来汽车研发部门，在大型电商公司负责测试平台开发，测试管理工作；参与测试的项目有互联网出行，电子商务等，拥有丰富的Java和Python语言经验，有性能测试、自动化测试及测试平台的开发经验。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20200807111512软件测试-北京昌平-刘伟.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>多年测试开发工作经验，在多家互联网公司担任测试负责人，具有丰富的移动端、Web端、社交、直播类、SAAS类产品测试经验。多年自动化测试框架设计及实践经验，擅长敏捷测试、性能测试及质量体系的搭建分析。授课风格严谨细致。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20200807111443软件测试-北京昌平-刘国云.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>从事软件开发和软件测试10年, 熟悉软件项目开发和软件测试流程；熟悉多种测试环境搭建，熟练操作数据库，熟悉Java、Python、H5语言，对Web端自动化测试、接口测试有着丰富经验积累，并有丰富企培、校企合作专业领域培训经验。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/web/20200807151537前端-西安-郑平.jpg'>
					<div class="li_txt">
						<h3>郑老师</h3>
						<h4>高级讲师</h4>
						<p>5年一线开发经验，4年授课经验，擅长前端、后端、移动端等多个技术方向，精通Java、Python、JS等技术语言。曾工作于一线大公司，时任技术经理，技术功底扎实。授课条理清晰，行云流水，给人酣畅淋漓的感觉。深受学员认可。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20200807111655软件测试-北京总部-李凯歌.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>从事软件开发和软件测试开发10年，精通Java、Python编程语言，曾参与多个大型项目的研发工作。擅长Web项目开发、自动化测试及测试平台的搭建，教学风格严谨，认真负责。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20200807111601软件测试-北京昌平-朱建刚.jpg'>
					<div class="li_txt">
						<h3>朱老师</h3>
						<h4>高级讲师</h4>
						<p>8年以上软件测试及项目管理经验，能熟练运用Python等编程语言，擅长功能测试，接口测试，及自动化测试，能够通过丰富的项目实战经验激发学生学习兴趣，培养学生独立思考和解决问题的能力。具有国家信息系统项目管理师认证、ACP认证。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20200807111829软件测试-北京总部-许超.jpg'>
					<div class="li_txt">
						<h3>许老师</h3>
						<h4>高级讲师</h4>
						<p>10年以上软件测试开发、质量管理、项目管理经验，熟练使用Java、Python开发语言，擅长功能测试、接口测试、自动化测试、性能测试等；具有丰富的教学经验，授课幽默风趣，能积极调动学员的积极性。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20200807111638软件测试-北京昌平-朱景尧.jpg'>
					<div class="li_txt">
						<h3>朱老师</h3>
						<h4>高级讲师</h4>
						<p>15年以上的软件测试及开发经验、有大型软件项目设计和团队管理经验。精通测试与开发技术，精通MySQL、Oracle、SQL Server等关系数据库。讲课深入浅出，将复杂理论转化为通俗易懂的语言，深受学生的好评。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20200807111736软件测试-北京总部-刘铭.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>7年软件项目开发和测试经验；精通C、Python、Oracle数据库、Linux服务器、网络环境等；参与过多个大型项目的性能测试，擅长性能测试方案设计，性能测试结果分析以及调优。授课风格富有激情，有感染力，课堂气氛活跃，对学员认真负责，广受好评。		</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20200807111807软件测试-北京总部-肖洋.jpg'>
					<div class="li_txt">
						<h3>肖老师</h3>
						<h4>高级讲师</h4>
						<p>10年测试经验，擅长系统测试、自动化测试、测试开发，熟悉Selenium、Appium等自动化测试框架，以及JMeter、LoadRunner等性能测试工具。曾参与过公安部网络安全产品测试交付、华为4G网络设备测试交付、腾讯QQ空间APP产品测试交付。拥有丰富的web、APP、嵌入式等各种产品测试经验。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/python/20200921162334Python-深圳-江文聪.jpg'>
					<div class="li_txt">
						<h3>江老师</h3>
						<h4>高级讲师</h4>
						<p>多年研发经验和教学经验。精通Linux操作系统各种应用开发，精通C/C++、Python语言编程，对GTK+、Qt等图形界面编程有深入研究，精通网络编程，交换机、路由器、TCP/IP协议栈等。拥有丰富授课及培训技巧，讲课幽默生动有趣，深入浅出。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20220623155743软件测试-北京-王鹏飞.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件开发经验和丰富的教学经验，擅长移动端、前端、测试等多个技术方向，熟悉Object-C、JavaScript、Python、MySQL等编程语言。授课风格富有激情，有感染力，课堂气氛活跃，对学员认真负责，注重培养学生的学习能力。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20220623160000软件测试-郑州-张云飞.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>拥有10年的互联网从业经验.掌握测试开发及后端开发技能,测试基本功扎实,能够用形象的案例解读测试专业术语和测试技巧.熟练掌握Java和Python代码实现自动化接口测试.熟悉Linux环境下搭建测试环境.擅长性能测试和分布式服务器压力测试。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20220623160246软件测试-杭州-朱玮嘉.jpg'>
					<div class="li_txt">
						<h3>朱老师</h3>
						<h4>高级讲师</h4>
						<p>多年软件测试和测试管理经验,曾任叮咚买菜资深测试工程师，在视在数科、全球时刻、海豚订奶等企业担任测试主管，浩鲸科技担任质量经理；熟练使用Python编程语言；善长自动化测试、性能测试，以及优化提高团队的测试效率和输出质量；						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20220623161142软件测试-西安-王德尊.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>6年测试开发工作经验，在西安华为、联通系统集成等多家公司担任测试工作，具有丰富的移动端（手机系统、APP、小程序）、Web端产品测试经验，交付多个千万级以上项目，多年测试质量体系搭建及实践经验，擅长功能测试、接口测试及性能测试。授课条理清楚，结构严谨。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20220623163004软件测试-南京-刘兆文.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>具有多年软件测试和质量管理经验，能熟练运用Python等编程语言，擅长功能测试，接口测试及自动化测试，授课幽默风趣，认真负责，能积极调动学员的积极性。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/test/20220623163114软件测试-深圳-廖飞.jpg'>
					<div class="li_txt">
						<h3>廖老师</h3>
						<h4>高级讲师</h4>
						<p>13年软件测试及管理工作经验，曾参与CDMA2000基站、iODN智能光网络系统、WMS仓储系统、资管saas系统以及证卷交易系统等项目。熟悉Python语言，拥有丰富的性能测试、自动化测试实战经验。授课条理清晰，善于引导学生分析解决问题，提高学生动手能力。					</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/netmaket/20200917150324新媒体-深圳-刘贵鹏.jpg'>
					<div class="li_txt">
						<h3>刘老师</h3>
						<h4>高级讲师</h4>
						<p>6年的互联网新媒体运营经验，对文字营销和视频营销有着独到的见解，为上百家企业做过新媒体营销策划方案。曾用2个月的时间孵化出0到200万粉丝的种草推荐类短视频账号，对热点事件极具敏感性。擅长讲故事，脱口秀，授课方式轻松幽默。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/netmaket/20210601180954孙桐-讲师jpg.jpg'>
					<div class="li_txt">
						<h3>孙老师</h3>
						<h4>高级讲师</h4>
						<p>7年新媒体运营经验，擅长互联网内容的策划制作与运营，对于营销和策划有独到见解，在喜马拉雅平台策划编导千万级音频节目，曾担任花椒直播主播经纪人，参与策划生存直播真人秀生存之王挑战。善于在案例中萃取底层运营逻辑，被学员誉为“干货型”讲师。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/netmaket/20200917121803新媒体-北京-高镇国.jpg'>
					<div class="li_txt">
						<h3>高老师</h3>
						<h4>高级讲师</h4>
						<p>擅长网络营销实战，11年互联网营销及网站运营经验，4年网络营销服务团队管理经验。精通社会化媒体及新媒体营销，曾服务过数百家B2B门户网站。擅长运用互联网思维，辅以经典案例，以理论+实践深入浅出的授课。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/netmaket/20200917144346新媒体-北京-吴喆.jpg'>
					<div class="li_txt">
						<h3>吴老师</h3>
						<h4>高级讲师</h4>
						<p>互联网行业从业十多年，曾任网站和电子杂志主编、市场营销主管、媒介主管、文案策划主管，文案策划、市场营销、网站运营和媒介监测经验丰富。曾主导腾讯游戏发布、腾讯动漫整体媒介营销、设计行业大赛策划和运营。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/netmaket/20200917150153新媒体-深圳-梁婧.jpg'>
					<div class="li_txt">
						<h3>梁老师</h3>
						<h4>高级讲师</h4>
						<p>7年互联网营销推广工作经验，对互联网+新营销有独到的见解和认知，曾为中国移动，中国电信，爱立信一线运营部进行营销培训，擅长以营销思维和锋利的创意解决问题。讲课风格循序渐进，让受训学员看得见、摸得着、体验得到的亲民教学，落到实处。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/netmaket/20200917145802新媒体-深圳-王德春.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>致力于网站策划运营、网络营销推广SEM/SEO、淘宝SEO、QQ群优化、数据分析等媒体方面的研究与实践五年有余，经验丰富。在多家高热度网站拥有个人专栏，为众多互联网从业人员提供免费职业辅导和工作指导，拥有忠实粉丝圈，口碑在业界广为人知。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/netmaket/20210604110016王顺顺1.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>曾担任多家公司运营总监，擅长社群、公号、短视频整合式运营，曾服务雀巢中国、宝马中国、广汽丰田，和君咨询、奇正藏药集团等大型品牌。广汽丰田集团成立15周年纪念刊特邀主笔。所负责短视频直播带货项目单月单账号营销额破300万。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/netmaket/20200917145303新媒体-上海-王小帅.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>人民大学新闻传播学专业毕业，多年出版社新媒体采编经验，年产文字量20W+，有极强的文案及采编能力。2年上市公司新媒体运营总监经验，500强企业特约职业规划师。运营过百万级账号，熟练掌握各新媒体平台的推广及增长方法。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/netmaket/20210610150203前端南学功.jpg'>
					<div class="li_txt">
						<h3>南老师</h3>
						<h4>高级讲师</h4>
						<p>6年一线大厂开发经验，曾主导千万级用户教育产品研发。精通微信小程序、快应用、NodeJS等技术，对前端工程化、前端3D特效、Cocos Creator、微信周边开发有深入研究。单篇技术播客阅读量15万+,擅长用工程化思维解决学员遇到的问题。						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/pm/20210519152824产品经理 黄老师1.jpg'>
					<div class="li_txt">
						<h3>黄老师</h3>
						<h4>高级讲师</h4>
						<p>多年产品经理实战经验，涉足医疗、早教、地产、社区等诸多领域，负责过用户量百万级的产品，在C端和B端产品均有多年实战经验。擅长产品规划、需求分析、产品设计、数据分析等方向。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20210622114859金志林.jpg'>
					<div class="li_txt">
						<h3>金老师</h3>
						<h4>高级讲师</h4>
						<p>7年互联网产品从业经验，涉足金融、社交、工具、内容等多个领域，策划过多款百万级用户的产品。擅长产品策划、产品运营、项目管理、数据分析等，对产品策划和产品运营有深入的理解。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20210622114621孙长生.jpg'>
					<div class="li_txt">
						<h3>孙老师</h3>
						<h4>高级讲师</h4>
						<p>近10年的互联网产品研发和团队管理工作经历，曾担任工信部教育产品及企业大型电商产品负责人，高校客座讲师和大学生创新创业大赛评委，对产品的设计、交互、数据分析、用户增长等拥有资深造诣和分享经验，对教育、电商、金融等行业领域有深刻研究。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20210810160431产品经理-李海曼.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>近10年的B端产品工作经验，曾任职台湾凌群集团产品经理，深圳美丽加互联网公司产品负责人；熟悉企业级应用开发全流程，0-1主导过多个新项目的上线；热爱产品经理教学工作，希望帮助更多同学走上热爱的产品岗位，实现梦想！						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20210622115231产品经理-北京-曹少寅.jpg'>
					<div class="li_txt">
						<h3>曹老师</h3>
						<h4>高级讲师</h4>
						<p>近十年产品经理一线实战经验，涉足电商、新闻、医疗等行业。服务过京东、当当等知名电商公司以及世界五百强央企中化集团，并主导多次从零到一项目成功上线。对需求调研、分析竞品、产品生命周期、策略研究和数据决策有深入的研究。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20220505144534产品经理-上海-周晓莉.jpg'>
					<div class="li_txt">
						<h3>周老师</h3>
						<h4>高级讲师</h4>
						<p>7年以上产品经理实战以及咨询解决方案经验，曾任职复星集团产品经理，独立负责公司营销中台产品0~1的搭建，从0开始，两年内用户增长突破百万，年流水过亿。主要涉足营销、分销、数据产品等领域。善于产品解决方案、MVP模型、数字驱动迭代领域研究。	</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20220225161053童高建-产品经理.jpg'>
					<div class="li_txt">
						<h3>童老师</h3>
						<h4>高级讲师</h4>
						<p>互联网行业从业近七年，从事过JAVA开发和产品工作。国家工信部认证产品经理，主导过亿级B端产品从0到1全周期，辅导500+位学员高薪就业。精通需求挖掘、需求分析、产品落地方案设计等。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20220803104110苏彬.jpg'>
					<div class="li_txt">
						<h3>苏老师</h3>
						<h4>高级讲师</h4>
						<p>10余年互联网产品设计及团队管理工作，曾就职于阿里，网易，当当，民生电商等互联网企业，并主导过多个从零到一上线的项目。在C端和B端产品均有多年实战经验，在需求分析，产品设计，用户体验及项目管理等方面有着深入的理解。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20220216110950产品经理-深圳-马锦旗.jpg'>
					<div class="li_txt">
						<h3>马老师</h3>
						<h4>高级讲师</h4>
						<p>10年+的互联网从业经验，曾任职于婚礼纪、团车网等行业独角兽公司，具有丰富的产品实战经验，涉及电商、新零售、O2O等行业，擅长用户端、中后台产品规划设计，精通用户调研、需求分析及管理、原型设计、项目管理及数据分析等。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20210622114807陈宇峰.jpg'>
					<div class="li_txt">
						<h3>陈老师</h3>
						<h4>高级讲师</h4>
						<p>互联网行业从业近十年，从事过开发和产品工作。任职过跨境电商、社交、内容付费、早教等诸多领域，其中不乏互联网独角兽企业，同时在C端和B端产品均有多年实战经验。擅长产品战略规划、产品设计、交互设计、数据分析等方向。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/pm/20220216112431产品经理-深圳-毕鹏.jpg'>
					<div class="li_txt">
						<h3>毕老师</h3>
						<h4>高级讲师</h4>
						<p>13年互联网行业从业经验，9年产品设计经验，从事过开发、运营和产品工作，对互联网产品全周期管理有丰富的 实战经验，涉足社交、TMT、在线教育、电商、B端等行业，曾主导完成多家传统企业互联网转型，0-1项目经验丰富。对于产品设计、产品创新、产品开发、产品规划等方面有丰富经验。						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/Linux/20191106180021w.jpg'>
					<div class="li_txt">
						<h3>王老师</h3>
						<h4>高级讲师</h4>
						<p>资深DevOps运维开发工程师，10年以上Linux平台开发与大型项目架构经验。精通C/C++，Shell，PHP，Python等编程语言以及MySQL、Oracle、SQLServer等关系型数据库。热衷Linux技术的解决方案，上课风趣幽默，语言通俗易懂。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/Linux/2020041413064520180522155528龙(1).jpg'>
					<div class="li_txt">
						<h3>龙老师</h3>
						<h4>高级讲师</h4>
						<p>大米运维课堂创始人、CTO架构师。曾于CBS、Opera、探探等知名企业担任架构师。4年开发经验，11年运维架构师经验，技术范畴涉及运维所有相关领域，设计维护过10000+服务器集群架构，讲课幽默诙谐。			</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/Linux/20220401112639Linux-北京-唐方成.jpg'>
					<div class="li_txt">
						<h3>唐老师</h3>
						<h4>高级讲师</h4>
						<p>十年以上运维工作经验，容器化应用布道者，曾就职于易网新动力，担任云计算架构师。擅长Linux云计算平台架构设计、容器化应用实践等等。热衷于新兴运维技术（智能运维、边缘计算等）研究，上课风趣幽默，教学认真负责，广受学员喜爱。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/javaee/20200421112557j.jpg'>
					<div class="li_txt">
						<h3>贾老师</h3>
						<h4>高级讲师</h4>
						<p>DevOps运维开发工程师，多年一线运维管理及运维开发经验，曾就职于纳斯达克上市企业中网在线NASDAQ(CNET)。上课风趣幽默，理论与实践操作相结合，注重学员能力培养，擅长Linux企业级项目架构设计（集群架构、高并发、服务器性能优化）、Web安全防护、Python运维开发等方向。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/Linux/20200423164932l.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>十多年运维与一线教学经历，运维架构师，IT讲师教学网发起人。经历了从rhel5到rhel8,也经历了从物理服务器到容器化的过程。精通linux系统集群架构，存储，自动化运维，安全与优化，云计算与容器。知识全面，教学负责，思路严谨。linux运维知识点繁杂，一直致力于让学员能够将知识点串联与体系化的教学实践中。							</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/robot/20191118150851z.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>系统分析师，中国机器人CR教育培训标准委员会委员，先后任职于Nortel，CIeNET, 爱立信等知名企业。传智播客资深讲师，十年授课经验，善于使用生活中的例子讲解技术原理，对ROS（机器人操作系统）和自动驾驶有一定开发经验。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/robot/20191107104351l.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>传智播客资深讲师，近10年软件开发与IT教育经验，课堂轻松活跃，喜欢挖掘和启发学生潜在能力。横跨互联网产品、技术领域，熟悉嵌入式终端系统，对视觉识别处理及硬件传感器有一定开发经验。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/robot/20191118151324kaijun.jpg'>
					<div class="li_txt">
						<h3>肖老师</h3>
						<h4>高级讲师</h4>
						<p>软件开发工程师，曾就职于知名软件公司，擅长程序中Artificial Intelligence架构，以及有限状态机的设计。传智教育资深讲师，五年授课经验，人工智能以及物联网开发经验丰富。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/robot/20191118151117tagnyang.jpg'>
					<div class="li_txt">
						<h3>唐老师</h3>
						<h4>高级讲师</h4>
						<p>软件架构师，曾从事华为系统应用的研发、联想定制软件的开发。获得两项国家发明专利。对交互系统及Linux有深入研究。对机器视觉、运动控制、路径导航等有独到的见解。授课严谨清晰，注重以实例驱动课程。
</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/robot/20191118151416qi.jpg'>
					<div class="li_txt">
						<h3>肖老师</h3>
						<h4>高级讲师</h4>
						<p>系统架构师，精通JAVA，JS，C/C++，Python，kotlin等编程语言，获得两项国家发明专利，对程序系统架构设计有一定见解。传智教育资深讲师，授课内容丰富，逻辑清晰，注重培养学生编码习惯，引导学生编码思维，提升学生的动手能力。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/robot/20191118151738t.jpg'>
					<div class="li_txt">
						<h3>覃老师</h3>
						<h4>高级讲师</h4>
						<p>讲师，4年项目开发经验5年授课经验，精通java、android、c++ 、javaEE、微服务分布式架构。对ros、机器视觉、运动控制有独到见解。授课风趣幽默，注重培养编程思想。</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/robot/20191118152437wu.jpg'>
					<div class="li_txt">
						<h3>吴老师</h3>
						<h4>高级讲师</h4>
						<p>多年研发与教学经验.曾任职于北京联想研究院. 精通python、c++、go、kotlin、java等多种编程语言.有丰富的大型软件项目经验,参与编写多套课程教材.熟悉硬件底层协议以及开发,串口通信，rs232，rs485，pwm方波以及机器人驱动开发。
</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/robot/20191118152019liang.jpg'>
					<div class="li_txt">
						<h3>梁老师</h3>
						<h4>商务经理</h4>
						<p>有很强的项目，策划、组织和督导能力。传智播客南研究院品牌活动、运营活动的外部合作方拓展的对接人。					</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/robot/20191118151846zhang.jpg'>
					<div class="li_txt">
						<h3>张老师</h3>
						<h4>高级讲师</h4>
						<p>课程设计师，多年课程设计及教学教研经验，具有丰富的学生管理经验。深入研究学生心理发展特点，善于各类课程的设计及精通教材内容编排，擅长线下及线上课程统筹规划。曾参与少儿编程系列课程，传智微学堂在线课程项目。曾担任某知名教育机构课程教研组组长，负责教材研发编写及教学考试资料预测汇编。课程设计理念先进，因时因地因生制宜，深入浅出，注重整体性和易懂性。
						</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="tea_txt ">			<ul>
				<li>
					<img src='images/teacher/uids/20200212103204t.jpg'>
					<div class="li_txt">
						<h3>谭老师</h3>
						<h4>高级讲师</h4>
						<p>国内知名互联网设计师，设计联盟专访设计师。13年互联网设计经验，对视觉设计、平面设计、界面设计、体验设计、交互设计、动画制作、影视后期等诸多方面有深入研究，曾任某大型互联网企业设计总监，服务过多家世界五百强企业包括腾讯、阿里巴巴、小米、IBM、路虎汽车、通用汽车、宝马中国、海尔集团、芒果TV等。
授课风格幽默风趣，通俗易懂，深入浅出，深受学员喜爱。							</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/uids/202002121038003.jpg'>
					<div class="li_txt">
						<h3>杨老师</h3>
						<h4>高级讲师</h4>
						<p>拥有8年的设计经验，长期奋斗在北京电商服务设计岗位，曾为多家阿里巴巴商家做设计及运营培训，专注于天猫、淘宝、京东等第三方平台设计以及运营，精通PS/AI/ID/CDR/C4D等设计软件，风趣幽默的授课方式，对待学生认真负责，耐心引导条理清晰，深受学生的喜爱。						</p>
					</div>
				</li>
				<li>
					<img src='images/teacher/uids/20200212104548lihui.jpg'>
					<div class="li_txt">
						<h3>李老师</h3>
						<h4>高级讲师</h4>
						<p>13年互联网设计经验，资深UI设计师，拥有十多年互联网UI视觉设计及管理经验，擅长2B/2C领域，熟悉并精通互联网产品/设计工作和运营工作中的各个环节和流程。曾任职UC浏览器设计团队及畅游VC设计团队team leader，服务过盛大网络、阿里巴巴、中兴通信、搜狐等公司，活跃于游戏，通讯，互联网，传统IT行业， 精于交互，通达UI。丰富的专业辅导经验，擅长培养学员的创意思维及执行能力，调整学习状态及设计潜力开发。							</p>
					</div>
				</li>
			</ul>
		</div>
</div>

						<i class="before_b"></i>
					</div>
				</div>
			</div>
			<img src="/2020gw/images/flowimg/flowbg1.png" class="flowbg2" />
		</div>
	</div>
</div>	
<div class="footer2">
	<div class="footer_top">
		<div class="footer_ewm clears" style="padding: 20px 0 10px;">
			<div class="inner">
				<div class="footer_ch about clears"><ol><li><h2>关于我们</h2><p><a href="http://www.itheima.com/news/20180412/132556.html" target="_blank" class="a_gd" rel="nofollow">对外合作</a><a href="/special/hmschool/index.shtml" target="_blank" class="a_gd" rel="nofollow">联系我们</a><a href="http://1024.itcast.cn" target="_blank" class="a_gd">1024程序员节</a></p></li><li><h2>学习资源</h2><p><a href="http://yun.itheima.com/gongju" target="_blank" class="a_gd">学习工具</a><a href="http://yun.itheima.com/Open" target="_blank" class="a_gd">免费公开课</a><a href="http://yun.itheima.com/map" target="_blank" class="a_gd">免费视频下载</a></p></li><li><h2>入学攻略</h2><p><a href="/flow/flow.html" target="_blank" class="a_gd" rel="nofollow">报名流程</a><a href="/special/hmschool/index.shtml" target="_blank" class="a_gd" rel="nofollow">校区分布</a><a href="/flow/flowhj.html" target="_blank" class="a_gd" rel="nofollow">住宿环境</a></p></li></ol><ul><li><img alt="黑马程序员公众号" src="/2020gw/images/hmewm.jpg"/><p>黑马程序员</p></li><li><img alt="黑马程序员视频库公众号" src="/2020gw/images/spkewm.jpg"/><p>黑马程序员视频库</p></li><li class="logobot"><a href="http://www.itheima.com/" target="_blank"><img src="/2020gw/images/indeximg/logobot.jpg"/></a></li></ul></div>
							
							
			</div>
		</div>
		<div class="footer_yqlj">
			<div class="inner">
				<ol><li class="cur">精品学科</li><li>教程推荐</li></ol><ul><!-- 精品 --><li class="cur"><a href="https://www.itcast.cn/javaee/" target="_blank">Java培训</a><a href="https://www.itcast.cn/ai/" target="_blank">人工智能课程</a><a href="https://www.itcast.cn/web/" target="_blank">前端培训</a><a href="http://web.ithrima.com/" target="_blank">前端开发培训课程</a><a href="https://python.itcast.cn/" target="_blank">大数据培训班</a><a href="http://pm.itheima.com/" target="_blank">产品经理培训课程</a><a href="http://netmaket.itheima.com/" target="_blank">新媒体运营培训</a><a href="http://ui.itheima.com/" target="_blank">UI设计培训课程</a><a href="https://www.itcast.cn/test/" target="_blank">软件测试培训课程</a><a href="http://java.itcast.cn" target="_blank">java培训课程</a><a href="http://web.itcast.cn" target="_blank">前端培训课程</a><a href="http://linux.itheima.com/" target="_blank">linux培训班</a><a href="http://python.itcast.cn" target="_blank">python培训班</a><a href="https://www.itheima.com/special/pmzly/" target="_blank">产品经理课程</a><a href="https://www.itheima.com/special/pythonzly/" target="_blank">python大数据培训课程</a><a href="https://www.itheima.com/special/testzly/" target="_blank">软件测试课程</a><a href="https://www.itheima.com/special/xmtzly/" target="_blank">新媒体课程</a><a href="https://www.itheima.com/special/aizly/" target="_blank">人工智能课程</a><a href="https://www.itheima.com/special/uizly/" target="_blank">UI设计培训</a></li><!-- IT培训教程 --><li><a href="https://www.itcast.cn/jiaocheng/java.html" target="_blank">Java教程下载</a><a href="https://www.itcast.cn/jiaocheng/python.html" target="_blank">Pthon视频教程</a><a href="https://www.itcast.cn/jiaocheng/web.html" target="_blank">web前端开发教程</a><a href="https://www.itcast.cn/jiaocheng/ui.html" target="_blank">UI设计教程</a><a href="https://www.itcast.cn/jiaocheng/big_data.html" target="_blank">大数据视频教程</a><a href="https://www.itcast.cn/jiaocheng/test.html" target="_blank">软件测试教程下载</a><a href="https://www.itcast.cn/jiaocheng/yunying.html" target="_blank">新媒体+短视频制作教程</a><a href="https://www.itcast.cn/jiaocheng/pm.html" target="_blank">产品经理自学教程</a><a href="https://www.itcast.cn/jiaocheng/c.html" target="_blank">C语言视频教程</a><a href="https://www.itcast.cn/jiaocheng/paishe.html" target="_blank">短视频制作教程</a><a href="https://www.itcast.cn/jiaocheng/linux.html" target="_blank">linux运维开发教程</a><a href="https://www.itcast.cn/jiaocheng/php.html" target="_blank">PHP教程</a><a href="https://www.itcast.cn/news/20191113/11025871604.shtml" target="_blank">Java JDK下载教程</a><a href="https://www.itcast.cn/news/20190919/18402943405.shtml" target="_blank">Python下载和安装教程</a></li></ul>
							
							
			</div>
		</div>
	</div>
	<div class="footer_bot">
		<p class="footer_cz">
    <a href="http://www.itheima.com" target="_blank">PC端</a>|<a href="http://m.itheima.com" target="_blank">移动端</a>|<a href="http://www.itheima.com/sitemap/sitemap.xml" target="_blank">网站地图</a>|<a href="http://wpa.qq.com/msgrd?V=1&uin=2217622915&Site=黑马程序员&Menu=yes" rel="nofollow" target="_blank">申请友链</a>
</p><!-- 
<a href="/news/web_1.html" target="_blank">前端培训资讯</a><a href="/news/javaee_1.html" target="_blank">java培训文章</a><a href="/news/python_1.html" target="_blank">python培训文章</a><a href="/news/cloud_1.html" target="_blank">大数据培训文章</a><a href="/news/ui_1.html" target="_blank">UI设计培训文章</a><a href="/news/ai_1.html" target="_blank">人工智能培训文章</a><a href="/news/test_1.html" target="_blank">软件测试培训文章</a><a href="/news/c_1.html" target="_blank">C/C++培训文章</a><a href="/news/netmaket_1.html" target="_blank">新媒体培训文章</a><a href="/news/pm_1.html" target="_blank">产品经理培训文章</a><a href="/news/linux_1.html" target="_blank">IT运维培训文章</a><a href="/news/android_1.html" target="_blank">安卓技术文章</a><a href="/news/php_1.html" target="_blank">PHP技术文章</a><a href="/news/ios_1.html" target="_blank">IOS技术文章</a><a href="/news/ds_1.html" target="_blank">电商运营文章</a><a href="/news/movies_1.html" target="_blank">影视制作培训</a> -->				
		<div class="foot_ch add"><p>江苏传智播客教育科技股份有限公司 &nbsp;版权所有Copyright 2006-2022, All Rights Reserved <span class="spans">&nbsp;</span>&nbsp;<a href="https://beian.miit.gov.cn/" rel="nofollow" target="_blank">苏ICP备16007882号-1</a> &nbsp;<a href="http://www.itcast.cn/images/yyzz01.jpg" target="_blank" rel="nofollow">营业执照</a>&nbsp;<a href="http://www.itcast.cn/images/zzdx01.jpg" target="_blank" rel="nofollow">增值电信业务经营许可证</a>&nbsp;<a href="http://www.itcast.cn/images/cbwjy.jpg" target="_blank" rel="nofollow">出版物经营许可证 </a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32132202000574" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;" rel="nofollow"><img src="http://www.itheima.com/images/baicon.png" style="float:left;margin-top: 8px;width:15px"/><span style="float:left;height:20px;line-height:20px;margin: 6px 0px 0px 5px;">苏公网安备 32132202000574号</span></a></p></div><script>var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?82912479bba415f10ecaedd004b06710";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();</script><!--黑马web--><script>var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?aae312962a20cfa9a71aa90f0825939b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();</script>							
							
							
							
							
							
							
	</div>
</div>
<!-- 底部  E -->
<script src="/js/jquery-1.10.2.min.js"></script> 
<script src="/js/jquery.SuperSlide.2.1.1.js"></script> 
<script src="/js/global.js"></script>
<div class="hmlist_pc">  
<link rel="stylesheet" type="text/css" href="/css/zx.css?v20220401"/>

<link rel="stylesheet" href="/2020gw/css/prism-Tomorrow Night.css">
<script src="/2020gw/js/prism.js"></script>

<script>
	$(document).ready(function(){
    var doc_pre = $(".sub_txt pre");
    doc_pre.each(function(){
        var class_val = $(this).attr('class');
        var class_arr = new Array();
        class_arr = class_val.split(';');
        class_arr = class_arr['0'].split(':');
        var lan_class = 'language-'+class_arr['1'];
        var pre_content = '<code class="'+lan_class+'">'+$(this).html()+'</code>';
	$(this).attr("class",'line-numbers '+lan_class);
        $(this).html(pre_content);
    });
});
</script>

<style type="text/css">
	.zx{right: 12px;}
	.zx .cxhdpic3{
		position: absolute;
		right: -13px !important;
		top: -86px !important;
		z-index: 99999;
		width: 97px !important;
		display: none;
	}
	.zx img{
		display: block;
		width:100%;
	}
</style>
<script src="//pv.sohu.com/cityjson?ie=utf-8"></script> 
<script>

	// 在 H5 文件中
	let UA = window.navigator.userAgent;
	var regex = /swan\//;
	if(!regex.test(UA)){
		var oscript = document.createElement('script');
		oscript.id = 'qxzxqm';
		oscript.src = 'https://webchat.7moor.com/javascripts/7moorInit.js?accessId=d48d5cf0-2e47-11e8-9db3-3313a60c92e9&autoShow=false&language=ZHCN';
		document.body.appendChild(oscript);
	}else{
		$("body").on("click",".itcast_click",function(){
			window.location.href = 'https://webchat03.7moor.com/wapchat.html?accessId=48bc7230-6252-11e8-917f-9fb8db4dc43c&fromUrl=http://baidu&urlTitle=%E7%99%BE%E5%BA%A6%E5%B0%8F%E7%A8%8B%E5%BA%8F';
		})
	}

	var dataip = returnCitySN["cip"];
	//113.44.99.154 北京
	//157.122.54.188 广州
	//140.206.149.83 上海
	//14.118.128.154 深圳中粮
	//218.17.144.34 深圳富源
	//218.29.75.103 郑州
	//58.56.6.230 济南
	//112.27.244.153 合肥
	//111.40.9.38 哈尔滨
	//153.3.219.42 南京
	//222.240.1.1 长沙
	//223.255.43.138 武汉金融港
	//223.255.43.145 武汉长城园
	//223.255.43.136 武汉云计算
	//101.204.236.149 成都
	//113.204.9.42 重庆
	//183.250.154.51 厦门分校
	//60.16.7.10 沈阳校区
	if(dataip === "210.21.98.31" || dataip === "60.216.88.211" || dataip === "120.224.36.174" || dataip === "36.45.158.229" || dataip === "36.45.158.249" || dataip === "" || dataip === "61.140.238.139" || dataip === "183.227.12.6" || dataip === "106.86.154.24" || dataip === "222.182.124.16" || dataip === "117.136.52.26" || dataip === "113.92.73.154" || dataip === "113.110.203.50" || dataip === "218.18.7.36" || dataip === "113.110.201.80" || dataip === "1.193.127.112" || dataip === "112.64.116.73" || dataip === "113.218.168.192" || dataip === "175.9.140.112" || dataip === "42.80.145.128" || dataip === "175.160.213.10" || dataip === "106.87.81.199" || dataip === "110.240.156.241" || dataip === "222.129.33.236" || dataip === "113.110.203.18" || dataip === "112.27.244.155" || dataip === "39.170.91.36" || dataip === "36.112.0.66" || dataip === "124.202.178.70" || dataip === "157.122.54.188" || dataip === "140.206.149.83" || dataip === "183.47.51.10" || dataip === "119.145.27.196" || dataip === "110.249.174.46" || dataip === "111.21.174.166" || dataip === "223.210.14.12" || dataip === "218.28.194.234" || dataip === "120.224.36.173" || dataip === "112.27.244.153" || dataip === "39.170.91.35" || dataip === "153.3.219.42" || dataip === "120.195.62.138" || dataip === "183.214.198.57" || dataip === "113.57.121.132" || dataip === "113.57.218.176" || dataip === "223.87.220.112" || dataip === "113.204.9.42" || dataip === "183.250.159.90" || dataip === "39.152.30.194"){
		$("#qxzxqm").attr("src","");
		$("body").on("click",".itcast_click",function(){
			alert("公司内部咨询已屏蔽");
		});
	}else{
		setTimeout(function(){
			$(".qimo_zx").show();
		},6000);
		$(".cxhdpic2,.cxhdpic1").hover(function(){
			$(".cxhdpic1").show();
		},function(){
			$(".cxhdpic1").hide();
		})
		
		$("body").on("click",".itcast_click",function(){
			qimosdk.hideChatBox();
			setTimeout(function(){
				qimoChatClick();
			},200);
		});
		
		setTimeout(function(){
			var timer = null;
			var qimo_chatpup = document.getElementById('qimo_chatpup');
			$("body").on("click",".itcast_click",function(){
				qimosdk.hideChatBox();
				qimo_chatpup.style.bottom = "-500px";
				setTimeout(function(){
					qimoChatClick();
					var ind = -500;
					timer = setInterval(function(){
						ind+=20;
						if(ind>-20){clearInterval(timer);}
						qimo_chatpup.style.bottom = ind+"px";
					},1);
				},200);
			});
		},1500);
	}
	
</script>

<!-- 十大学科咨询-->
<div class="zx zx2021">
	<ul>
		<!-- <li class="li_zxtop">
			<a href="javascript:;" class="itcast_click" rel="nofollow">
				<span class="icon_s">&nbsp;</span>
				<p id="loading">咨询</p>
			</a>
		</li> -->
		<li class="li_st">
			<a href="javascript:;" class="itcast_click" rel="nofollow">
				<span class="icon_s">&nbsp;</span>
				<p>试听</p>
			</a>
		</li>
		<li class="li_bm">
			<a href="http://www.itheima.com/flow/flow.html" target="_blank" rel="nofollow">
				<span class="icon_s">&nbsp;</span>
				<p>报名</p>
			</a>
		</li>
	</ul>
	<div class="li_6" id="back">
		<a href="javascript:void(0);" rel="nofollow">
			<span class="icon_s">&nbsp;</span>
		</a>
	</div>
	<!-- <a href="https://h5.itcast.cn/subject/yles22/index.html?hmzxad" target="_blank" class="cxhdpic3"><img src="http://www.itcast.cn/1024img/zx2022pf.png" /></a> -->
	<!-- <a href="https://h5.itcast.cn/subject/yles21/index.html?hmzxad" target="_blank" class="cxhdpic3"><img src="http://www.itcast.cn/1024img/zx2021pf.png" /></a> -->
</div>
<div class="qimo_zx itcast_click" style="display: none;width: 240px;height: 56px;background: #fff;border-radius: 2px;position: fixed;right: 12px;bottom: 12px;z-index: 1000000;cursor: pointer;box-shadow: 0 0 12px rgba(0,0,0,.06);border-radius: 4px;">
	<div style="float: right; width: 58px;height: 56px;background: #e01425 url('/images/indeximg3.png') no-repeat 16px 11px;border-radius: 0 4px 4px 0;"></div>
	<div style="float: right; width: 161px;height: 56px;background: url('/images/indeximg4.png') no-repeat 154px 24px;font-size: 15px;color: #241919;line-height: 56px;padding-left: 21px;">和我们在线交谈！</div>
</div>
<script src="/js/zx.js"></script>
<script src="/js/zxbot.js"></script>
<script>
	var nowtime = new Date().getTime();
	var dtstarttime = new Date("2022/10/20 09:00").getTime();
	//if(nowtime>dtstarttime){
		//$(".cxhdpic3").show();
	//}
</script>
<p style="display:none;"><script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_3144200'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/stat.php%3Fid%3D3144200%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));</script><p>
</div>
<script src="/js/teacher.js"></script>
<script src="/2020gw/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script>
	// $(".auids").remove();
	$(".tea_box6 ol li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".tea_box6 ul li").eq($(this).index()).addClass("show").siblings().removeClass("show");
	});
	jQuery(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,trigger:"click"});
	
	var  teabox2len = $(".teabox2_con .teabox2_main4 .maincon ul li").length;
	$(".teabox2_con .teabox2_main4 .maincon ul").width(teabox2len*257);
	$(window).load(function(){
		$("#content-8").mCustomScrollbar({
			axis:"x",
			theme:"3d",
			scrollbarPosition:"outside",
			mouseWheel:"false",
		});
	});
	
	var timesmcsb = null;
	var mcsbL = 0;
	var mcsbL2 = 0;
	var mcsbW = 0;
	setTimeout(function(){
		mcsbW = $("#examples ul").width();
	})
	$(".teabox2_main4").hover(function(){
		clearInterval(timesmcsb);
	},function(){
		timesmcsb = setInterval(function(){
			mcsbL = $("#mCSB_1_container").position().left;
			mcsbL = Math.abs(mcsbL);
			mcsbL2 = $("#mCSB_1_dragger_horizontal").position().left;
			//mcsbL = (mcsbL+1028)>(mcsbW-1107)?0:(mcsbL+1028);
			//mcsbL2 = (mcsbL2+28)>722?0:(mcsbL2+28);
			mcsbL = (mcsbL+1028)>(mcsbW-1107)?0:(mcsbL+1028);
			mcsbL2 = (mcsbL2+28)>722?0:(mcsbL2+28);
			
			$("#mCSB_1_container").stop().animate({"left": -mcsbL},600);
			$("#mCSB_1_dragger_horizontal").stop().animate({"left": mcsbL2},600);
		},3000);
	});
	timesmcsb = setInterval(function(){
		mcsbL = (mcsbL+1028)>(mcsbW-1107)?0:(mcsbL+1028);
		mcsbL2 = (mcsbL2+28)>722?0:(mcsbL2+28);
		$("#mCSB_1_container").stop().animate({"left": -mcsbL},600);
		$("#mCSB_1_dragger_horizontal").stop().animate({"left": mcsbL2},600);
	},3000);
	
</script>
</body>
</html>`,
  heroList: `<!DOCTYPE HTML>
<html>

<head>
    <meta charset="gbk">
    <meta name="author" content="Tencent-CP">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="Copyright" content="Copyright (c) 2006-2015 TENCENT" />
    <meta name="description" content="������ҫӢ�۽���,ȫ��Ӣ�۴�ȫ,Ӣ�����ԣ�Ӣ��ͼƬ,Ӣ�ۼ��ܶ�λ��Ӣ�۹��£�Ӣ��ͼ����Ƶ���ԣ������ٵ���ǿ���߱���!" />
    <meta name="keywords" content="������ҫӢ��,������ҫӢ�۽���,������ҫӢ�۴�ȫ,������ҫӢ������" />
    <meta name="applicable-device" content="pc">
    <link rel="alternate" href="https://pvp.qq.com/m/m201706/heroList.shtml">
    <title>Ӣ�������б�ҳ-Ӣ�۽���-������ҫ�ٷ���վ-��Ѷ��Ϸ</title>
    <link href="//game.gtimg.cn/images/yxzj/web201706/css/comm-v1.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="css/hero.css" />
</head>

<body class="old-header">
    <div id="header" class="header tganime-header-fix">
    <div class="header-inner">
        <h1><a href="//pvp.qq.com/" class="logo pa" title="������ҫ" onclick="PTTSendClick('headNav','logo','logo');">������ҫ</a></h1>
        <!--=========������==========-->           
		<ul class="main-nav clearfix">
			<li>
        <a href="/web201605/herolist.shtml" target="_blank" title="��Ϸ����" onclick="PTTSendClick('link','data','��Ϸ����');">��Ϸ����<em>DATA</em></a>
      </li>
      <li>
        <a href="/raiders/" target="_blank" title="��������" onclick="PTTSendClick('link','strategy','��������');">��������<em>CONTENTS</em></a>
      </li>
      <li>
        <a href="https://kpl.qq.com/?ADTAG=pvp.index.nav.matchcenter" target="_blank" title="��������" onclick="PTTSendClick('link','match','��������');">��������<em>MATCH</em></a>
      </li>
      <li>
        <a href="/cp/a20171023pvppc/" target="_blank" title="��̬����" onclick="PTTSendClick('link','CULTURE','��̬����');">��̬����<em>CULTURE</em></a>
      </li>
      <li>
        <a href="javascript:void(0)" title="��������" onclick="PTTSendClick('link','Community','��������');">��������<em>COMMUNITY</em></a>
      </li>
      <li>
        <a href="javascript:void(0)" title="���֧��" onclick="PTTSendClick('link','player','���֧��');">���֧��<em>PLAYER</em></a>
      </li>
      <li>
        <a href="javascript:void(0)" title="IP����" onclick="PTTSendClick('link','ipnewgame','IP����');">IP����<em>NEW GAMES</em></a>
      </li>
		</ul>
    </div>
    <!--=====��������=====-->
    <div id="J_subNav" class="sub-nav" style="visibility: hidden;">
			<ul class="sub-nav-inner">
				  <li class="down-nav">
				     <a href="/cp/a20170829bbgxsm/index.html" target="_blank" title="�汾����" onclick="PTTSendClick('link','version','�汾����');">�汾����</a>
				     <a href="/web201605/introduce.shtml" target="_blank" title="��Ϸ����" onclick="PTTSendClick('link','gameinfomation','��Ϸ����');">��Ϸ����</a>
				     <a href="/web201605/herolist.shtml" target="_blank" title="Ӣ������" onclick="PTTSendClick('link','hero','Ӣ������');">Ӣ������</a>
				     <a href="/coming/v2/" target="_blank" title="����վ" onclick="PTTSendClick('link','data_coming','����վ');"><i class="icon-hot"></i>����վ</a>
				     <a href="/ip/index.html?adtag=pvp.pc" target="_blank" title="���������վ" onclick="PTTSendClick('link','data_story','���������վ');"><i class="icon-fans"></i>���������վ</a>
				     <a href="/web201605/wallpaper.shtml" target="_blank" title="��Ϸ��ֽ" onclick="PTTSendClick('link','wallpaper','��Ϸ��ֽ');">��Ϸ��ֽ</a>
				  </li>
				  <li class="down-nav">
				     <a href="/raiders/" target="_blank" title="��������" onclick="PTTSendClick('link','strategy_center','��������');">��������</a>
				     <a href="/sucai/" target="_blank" title="�����زĿ�" onclick="PTTSendClick('link','strategy_sucai','�����زĿ�');">�����زĿ�</a>
				     <a href="https://yyds.qq.com/creation" target="_blank" title="���ݹ���ƽ̨" onclick="PTTSendClick('link','creation','���ݹ���ƽ̨');"><i class="icon-fans"></i>���ݹ���ƽ̨</a>
				  </li>
				  <li class="down-nav">
				    <a href="/match/kpl/kingproleague/index.html" target="_blank" title="KPLְҵ����" onclick="PTTSendClick('link','match_KPL','KPL');"><i class="icon-hot"></i>KPL</a>
				     <a href="/cp/kic2022/index.html" target="_blank" title="����ھ���" onclick="PTTSendClick('link','match_worldcup','����ھ���');"><i class="icon-hot"></i>����ھ���</a>
				     <a href="/match/WCC/KCC2021S2/index.html" target="_blank" title="��ս�߱�" onclick="PTTSendClick('link','match_kcc','��ս�߱�');"><i class="icon-fans"></i>��ս�߱�</a>
				     <a href="/cp/a20220328qgds/index.shtml" target="_blank" title="ȫ������" onclick="PTTSendClick('link','match_city','ȫ������');"><i class="icon-hot"></i>ȫ������</a>
				    <a href="/match/KWO/index.html" target="_blank" title="Ů�ӹ�����" onclick="PTTSendClick('link','match_kwo','Ů�ӹ�����');">Ů�ӹ�����</a>
				    <a href="/match/kgl/index.html" target="_blank" title="K������" onclick="PTTSendClick('link','match_Kjia','K������');">K������</a>
				     <a href="/cp/a20220315open/index.shtml" target="_blank" title="���߸�У����" onclick="PTTSendClick('link','match_gaoxiao','���߸�У����');">��У����</a>
				     <a href="/saibao/index.shtml" target="_blank" title="��������" onclick="PTTSendClick('link','match_saibao','saibao');"><i class="icon-fans"></i>��������</a>
				     <a href="/matchdata/index.html" target="_blank" title="��������" onclick="PTTSendClick('link','match_datamore','��������');"><i class="icon-fans"></i>��������</a>
				  </li>
				  <li class="down-nav">
				     <a href="/memory/index.html" target="_blank" title="��ҫ������" onclick="PTTSendClick('link','culture','��ҫ������');">��ҫ������</a>
				     <a href="/history/" target="_blank" title="�����Ļ�վ" onclick="PTTSendClick('link','history','�����Ļ�վ');">�����Ļ�վ</a>
				     <a href="/wonder/" target="_blank" title="��ǧ����" onclick="PTTSendClick('link','wonder','��ǧ����');">��ǧ����</a>
				     <a href="/cp/a20190102starlight/index.html" target="_blank" title="�ǹ����" onclick="PTTSendClick('link','star','�ǹ����');" >�ǹ����</a>
				     <a href="/cp/a20210427ipgzzt/" target="_blank" title="IP�����ƻ�" onclick="PTTSendClick('link','ip','IP�����ƻ�');"><i class="icon-fans"></i>IP�����ƻ�</a>
				     <a href="//igame.qq.com/newcss/pvp/privilegePC/index.html" target="_blank" title="�̻���Ȩ" onclick="PTTSendClick('link','wifi','�̻���Ȩ');">�̻���Ȩ</a>
				     <a href="https://wangzhe.recogame.com/wangzhe.html" target="_blank" title="�������߿�" onclick="PTTSendClick('link','wangka','�������߿�');"><i class="icon-fans"></i>�������߿�</a>
				  </li>
				  <li class="down-nav">
				    <a href="//pvp.qq.com/hdy/p1/index.html" title="���⻥��Ӫ" onclick="PTTSendClick('link','creative_community','���⻥��Ӫ');"><i class="icon-hot"></i>���⻥��Ӫ</a>
				    <a href="javascript:void(0)" title="����Ӫ��" onclick="TGDialogS('zhushou');PTTSendClick('link','Community_tools','����Ӫ��');"><i class="icon-hot"></i>����Ӫ��</a>
				    <a href="javascript:void(0)" title="΢��Ȧ��" onclick="TGDialogS('weiquan');PTTSendClick('link','Community_wx','΢��Ȧ��');">΢��Ȧ��</a>
				    <a href="//weibo.com/heromoba" target="_blank" title="�ٷ�΢��" onclick="PTTSendClick('link','Community_wb','�ٷ�΢��');">�ٷ�΢��</a>
				    <a href="javascript:void(0)" title="΢�Ź��ں�" onclick="TGDialogS('weixin');PTTSendClick('link','Community_wxgzh','΢�Ź��ں�');">΢�Ź��ں�</a>
				    <a href="javascript:void(0)" title="��Q���ĺ�" onclick="TGDialogS('qq');PTTSendClick('link','Community_qqdyh','��Q���ĺ�');">��Q���ĺ�</a>
				  </li>
				  <li class="down-nav">
				     <a href="https://game.qq.com/act/a20210705protect/index.html" target="_blank" title="��Ѷ��Ϸ������" onclick="PTTSendClick('link','player_addict','��Ѷ��Ϸ������');">��Ѷ��Ϸ������</a>
				     <a href="https://jiazhang.qq.com/jz/home.html" target="_blank" title="�ɳ��ػ�ƽ̨" onclick="PTTSendClick('link','player_watch','�ɳ��ػ�ƽ̨');"><i class="icon-guard"></i>�ɳ��ػ�ƽ̨</a>
				     <a href="/cp/a20190909talk/index.html" target="_blank" title="�Ծֻ����鱨վ" onclick="PTTSendClick('link','player_drj','�Ծֻ����鱨վ');">�Ծֻ����鱨վ</a>
				     <a href="javascript:void(0)" title="�ͷ�ר��" onclick="TGDialogS('kefu');PTTSendClick('link','player_kf','�ͷ�ר��');">�ͷ�ר��</a>
				     <a href="/webplat/info/news_version3/15592/24091/24092/24095/m15241/201508/370256.shtml" title="����һ�" onclick="PTTSendClick('link','player_feedback','����һ�');" target="_blank">����һ�</a>
				     <a href="https://tool.helper.qq.com/v3/wzry/official_website/index.html" title="��������" onclick="PTTSendClick('link','player_service','��������');" target="_blank">��������</a>
				  </li>
				  <li class="down-nav">
				     <a href="https://world.qq.com/" target="_blank" title="����" onclick="PTTSendClick('link','shijie','����');"><i class="icon-fans"></i>������ҫ������</a>
				     <a href="https://poxiao.qq.com?ADTAG=pvp.nav.hokpc" target="_blank" title="����" onclick="PTTSendClick('link','poxiao','����');"><i class="icon-fans"></i>����:����</a>
				     <a href="https://pvp.qq.com/web201605/newsDetail.shtml?G_Biz=18&tid=488378" target="_blank" title="����" onclick="PTTSendClick('link','qicheng','����');"><i class="icon-fans"></i>����:����</a>
				  </li>
				</ul>
    </div>
</div>
    <div class="wrapper">
        <!-- ��������1 S -->
        <div class="zkcontent">
            <div class="zk-con-box">
                <!-- λ����Ϣ S -->
                <div class="zk-con1 zk-con">
                    <div class="con1-pos">
                        <i class="tb1 icon fl"></i>
                        <a href="/" target="_blank" title="������ҫ��ҳ">������ҫ��ҳ</a>
                        <span>></span>
                        <label>Ӣ�۽���</label>
                    </div>
                    <h1 class="herolist-title">Ӣ�۽���</h1>
                    <ul class="herolist-nav">
                        <li class="current"><a href="herolist.shtml" target="_blank">Ӣ��</a></li>
                        <li><a href="item.shtml" target="_blank">���ڵ���</a></li>
                        <li><a href="summoner.shtml" target="_blank">�ٻ�ʦ����</a></li>
                    </ul>
                </div>
                <!-- λ����Ϣ E -->
                <!-- Ӣ�۽��� S -->
                <div class="herolist-box">
                    <div class="clearfix herolist-types">
                        <ul class="types-left">
                            <li>�ۺ�</li>
                            <li>ְҵ</li>
                        </ul>
                        <ul class="clearfix types-ms">
                            <li data-ptype="10">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>�������</label>
                            </li>
                            <li data-ptype="11">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>�����Ƽ�</label>
                            </li>
                        </ul>
                        <ul class="clearfix types-ms">
                            <li class="current" data-type="0">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>ȫ��</label>
                            </li>
                            <li data-type="3">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>̹��</label>
                            </li>
                            <li data-type="1">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>սʿ</label>
                            </li>
                            <li data-type="4">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>�̿�</label>
                            </li>
                            <li data-type="2">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>��ʦ</label>
                            </li>
                            <li data-type="5">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>����</label>
                            </li>
                            <li data-type="6">
                                <span class="ms-radio"><i class="i"></i></span>
                                <label>����</label>
                            </li>
                        </ul>
                        <div class="herosearch">
                            <input type="text" id="search" name="search" class="herosearch-input" value="����������Ҫ������Ӣ����">
                            <a href="javascript:void(0);" class="herosearch-icon" title="�������" id="searchBtn"></a>
                        </div>
                    </div>
                    <div class="herolist-content">
                        <p id="JErroTips" style="display:none;">����Ӣ�۲����ڣ�����������</p>
                        <ul class="herolist clearfix">
                            <li><a href="herodetail/506.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" width="91"
                                        height="91" alt="���о�">���о�</a></li>
                            <li><a href="herodetail/505.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" width="91"
                                        height="91" alt="��">��</a></li>
                            <li><a href="herodetail/529.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg" width="91"
                                        height="91" alt="�̹�">�̹�</a></li>
                            <li><a href="herodetail/511.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg" width="91"
                                        height="91" alt="���˽�">���˽�</a></li>
                            <li><a href="herodetail/515.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" width="91"
                                        height="91" alt="�϶�">�϶�</a></li>
                            <li><a href="herodetail/513.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" width="91"
                                        height="91" alt="�Ϲ����">�Ϲ����</a></li>
                            <li><a href="herodetail/507.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/312.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg" width="91"
                                        height="91" alt="����Ϫ">����Ϫ</a></li>
                            <li><a href="herodetail/508.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg" width="91"
                                        height="91" alt="٤��">٤��</a></li>
                            <li><a href="herodetail/509.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" width="91"
                                        height="91" alt="��ɽ">��ɽ</a></li>
                            <li><a href="herodetail/137.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" width="91"
                                        height="91" alt="˾��ܲ">˾��ܲ</a></li>
                            <li><a href="herodetail/510.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" width="91"
                                        height="91" alt="���">���</a></li>
                            <li><a href="herodetail/125.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg" width="91"
                                        height="91" alt="Ԫ��">Ԫ��</a></li>
                            <li><a href="herodetail/504.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/503.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/197.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/502.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" width="91"
                                        height="91" alt="���ܻ�">���ܻ�</a></li>
                            <li><a href="herodetail/176.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/199.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/501.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/179.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg" width="91"
                                        height="91" alt="Ů�">Ů�</a></li>
                            <li><a href="herodetail/198.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/194.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/195.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg" width="91"
                                        height="91" alt="��������">��������</a></li>
                            <li><a href="herodetail/196.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" width="91"
                                        height="91" alt="������Լ">������Լ</a></li>
                            <li><a href="herodetail/193.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" width="91"
                                        height="91" alt="��">��</a></li>
                            <li><a href="herodetail/189.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/182.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg" width="91"
                                        height="91" alt="�ɽ�Īа">�ɽ�Īа</a></li>
                            <li><a href="herodetail/187.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" width="91"
                                        height="91" alt="����̫һ">����̫һ</a></li>
                            <li><a href="herodetail/191.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/192.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/190.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg" width="91"
                                        height="91" alt="�����">�����</a></li>
                            <li><a href="herodetail/180.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg" width="91"
                                        height="91" alt="��߸">��߸</a></li>
                            <li><a href="herodetail/186.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" width="91"
                                        height="91" alt="̫������">̫������</a></li>
                            <li><a href="herodetail/184.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg" width="91"
                                        height="91" alt="���ļ�">���ļ�</a></li>
                            <li><a href="herodetail/183.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg" width="91"
                                        height="91" alt="�ŵ���">�ŵ���</a></li>
                            <li><a href="herodetail/178.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg" width="91"
                                        height="91" alt="���">���</a></li>
                            <li><a href="herodetail/177.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg" width="91"
                                        height="91" alt="�ɼ�˼��">�ɼ�˼��</a></li>
                            <li><a href="herodetail/175.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" width="91"
                                        height="91" alt="��ظ">��ظ</a></li>
                            <li><a href="herodetail/174.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg" width="91"
                                        height="91" alt="�ݼ�">�ݼ�</a></li>
                            <li><a href="herodetail/173.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg" width="91"
                                        height="91" alt="��Ԫ��">��Ԫ��</a></li>
                            <li><a href="herodetail/171.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" width="91"
                                        height="91" alt="�ŷ�">�ŷ�</a></li>
                            <li><a href="herodetail/170.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/169.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/168.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" width="91"
                                        height="91" alt="ţħ">ţħ</a></li>
                            <li><a href="herodetail/167.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" width="91"
                                        height="91" alt="�����">�����</a></li>
                            <li><a href="herodetail/166.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" width="91"
                                        height="91" alt="��ɪ">��ɪ</a></li>
                            <li><a href="herodetail/163.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" width="91"
                                        height="91" alt="���Ҿ�">���Ҿ�</a></li>
                            <li><a href="herodetail/162.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg" width="91"
                                        height="91" alt="�ȿ�¶¶">�ȿ�¶¶</a></li>
                            <li><a href="herodetail/157.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" width="91"
                                        height="91" alt="��֪����">��֪����</a></li>
                            <li><a href="herodetail/156.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/154.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" width="91"
                                        height="91" alt="��ľ��">��ľ��</a></li>
                            <li><a href="herodetail/153.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/152.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg" width="91"
                                        height="91" alt="���Ѿ�">���Ѿ�</a></li>
                            <li><a href="herodetail/150.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/149.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/148.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/146.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" width="91"
                                        height="91" alt="¶��">¶��</a></li>
                            <li><a href="herodetail/144.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" width="91"
                                        height="91" alt="��ҧ��">��ҧ��</a></li>
                            <li><a href="herodetail/142.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/141.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/140.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/139.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg" width="91"
                                        height="91" alt="�Ϸ���">�Ϸ���</a></li>
                            <li><a href="herodetail/136.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/135.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/134.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" width="91"
                                        height="91" alt="��Ħ">��Ħ</a></li>
                            <li><a href="herodetail/133.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg" width="91"
                                        height="91" alt="���ʽ�">���ʽ�</a></li>
                            <li><a href="herodetail/132.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg" width="91"
                                        height="91" alt="���ɲ���">���ɲ���</a></li>
                            <li><a href="herodetail/131.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg" width="91"
                                        height="91" alt="���">���</a></li>
                            <li><a href="herodetail/130.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg" width="91"
                                        height="91" alt="�������">�������</a></li>
                            <li><a href="herodetail/129.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" width="91"
                                        height="91" alt="��Τ">��Τ</a></li>
                            <li><a href="herodetail/128.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg" width="91"
                                        height="91" alt="�ܲ�">�ܲ�</a></li>
                            <li><a href="herodetail/127.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" width="91"
                                        height="91" alt="�缧">�缧</a></li>
                            <li><a href="herodetail/126.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" width="91"
                                        height="91" alt="�ĺ">�ĺ</a></li>
                            <li><a href="herodetail/124.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg" width="91"
                                        height="91" alt="���">���</a></li>
                            <li><a href="herodetail/123.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/121.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/120.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/119.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg" width="91"
                                        height="91" alt="��ȵ">��ȵ</a></li>
                            <li><a href="herodetail/118.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/117.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/116.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/115.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg" width="91"
                                        height="91" alt="�߽���">�߽���</a></li>
                            <li><a href="herodetail/114.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/113.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" width="91"
                                        height="91" alt="ׯ��">ׯ��</a></li>
                            <li><a href="herodetail/112.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" width="91"
                                        height="91" alt="³���ߺ�">³���ߺ�</a></li>
                            <li><a href="herodetail/111.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" width="91"
                                        height="91" alt="������">������</a></li>
                            <li><a href="herodetail/110.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/109.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" width="91"
                                        height="91" alt="槼�">槼�</a></li>
                            <li><a href="herodetail/108.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" width="91"
                                        height="91" alt="ī��">ī��</a></li>
                            <li><a href="herodetail/107.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                            <li><a href="herodetail/106.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg" width="91"
                                        height="91" alt="С��">С��</a></li>
                            <li><a href="herodetail/105.shtml" target="_blank"><img
                                        src="//game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg" width="91"
                                        height="91" alt="����">����</a></li>
                        </ul>
                    </div>
                </div>
                <!-- Ӣ�۽��� E -->
            </div>
        </div>


    </div>
    <!-- �Ҳ�Ư�� 2022-06-14-asiadai -->
    <style>
    .down_detail{
    position: fixed;
    z-index:99;  
    top: 50%; 
    right: 2px;
    width:128px;
    height:247px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.down_detail img{
    display: block;
}

.down_detail .d_open {
    width:128px;
    height:247px;
    background: url(https://game.gtimg.cn/images/yxzj/web201706/images/comm/floatwindow/down-open.png) no-repeat center;
    background-size: 100% auto;
}
.down_detail .d_open .d_qrcode{
    width:90px;
    height:90px;
    position: relative;
    top: 124px;
    left:50%;
    transform: translateX(-50%);
}



</style>

<div class="down_detail" exposure-tag="down_detail,��ҳ���ظ���">
    <div class="d_open">
        <img class="d_qrcode"  src="https://game.gtimg.cn/images/yxzj/web201706/images/comm/floatwindow/wzry_qrcode.jpg" width="107" height="107"  alt="������Ϸ"/>    
    </div>
</div>                              

<script>
        window.onload=function(){
        // ҳ���������ϱ�һ��
        PTTSendClick('down-nav','down_detail','��ҳ����')
    }
</script> 
    <!-- Lib  -->
<script src="//game.gtimg.cn/images/js/jquery/jquery-1.11.3.min.js"></script>
<script src="//game.gtimg.cn/images/yxzj/web201706/js/lazyload.min.js"></script>
<!-- <script src="//game.gtimg.cn/images/js/milo/milo.js"></script> -->
<script src="//ossweb-img.qq.com/images/js/milo_bundle/milo.js" crossorigin="anonymous"></script>
<script src="//game.gtimg.cn/images/js/ide/latest/ide.gbk.min.js"></script>
<!-- Site header footer  -->
<!-- <script src="ossweb-img/js/header.js"></script> -->
<script src="//game.gtimg.cn/images/yxzj/web201706/js/header.js"></script>
<script src="//game.gtimg.cn/images/yxzj/web201706/js/footer.js"></script>
<script src="//game.gtimg.cn/images/js/title.js"></script>
<!-- AMS KV Link -->
<div id="kvLinkSetDiv" style="display:none">
<div class="kv-bg" style="background-image:url(//ossweb-img.qq.com/upload/webplat/info/yxzj/20221202/24170257750974.jpg);">
	        		<a href="https://pvp.qq.com/coming/v2/heros/544.shtml" onClick="PTTSendClick('btn','topkv','����ר��');"  class="kv_link" title="�鿴����" target="_blank">�鿴����</a>
        </div>

</div>
    <!-- Page js -->
    <!-- ͳ�ƴ��� -->
    <script src="//game.gtimg.cn/images/js/PTT/ping_tcss_tgideas_https_min.js"></script>
    <script type="text/javascript">
        var setSite = {   //������վ����
            siteType: "os",
            pageType: "herolist",   //������:��ҳ��Ķ�λ������ҳ�溬����д����main||list||detail||download||share||page1||pageN
            pageName: "Ӣ���б�-PC",  //������:ҳ��������
            osact: 'pc',    //ѡ����:�Ƿ��ǹ���ר��(�ڹ�����Ӫ��ר��)boolean��Ĭ����0�������������ϼ������osact=1���������
            project: 'base' //ѡ����:�Ƿ���Ҫͳ��ͣ��ʱ��boolean��Ĭ����1
        }
        if (typeof (pgvMain) == 'function') pgvMain();
    </script>
    <script>
        need("biz.login-min", function (LoginManager) {
            LoginManager.checkLogin(function () {
                $("#login_qq_span").html(LoginManager.getUserUin());
            });
        });
        var dataList = new Array();
        (function () {
            $.ajax({
                type: "get",
                url: "/web201605/js/herolist.json",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    $.each(data, function (i, n) {
                        dataList.push(n);
                    });
                    init(data);
                },
                error: function (err) {
                    alert(err)
                }
            });
        })();
        var setall = $('.herolist-types li'),

            faceInit = function (data) {
                var heroContent = $('.herolist');
                var html = '';
                var len = data.length - 1;
                $.each(data, function (i) {
                    // var imgurl = '//game.gtimg.cn/images/yxzj/img201606/heroimg/'+this.ename+'/';
                    // html += '<li><a href="herodetail/'+this.ename+'.shtml" target="_blank"><img src="'+imgurl+this.ename+'.jpg" width="91" alt="'+this.cname+'">'+this.cname+'</a></li>';
                    var f = parseInt(len - i);
                    var _ename = data[f].ename,
                        _cname = data[f].cname,
                        _imgurl = '//game.gtimg.cn/images/yxzj/img201606/heroimg/' + _ename + '/';
                    html += '<li><a href="herodetail/' + _ename + '.shtml" target="_blank"><img src="' + _imgurl + _ename + '.jpg" width="91" height="91" alt="' + _cname + '">' + _cname + '</a></li>';

                })
                heroContent.html(html);
            }, init = function (data) {
                var totalValidatData = [];
                var curPage = 0;
                var getValidateData = function (type) {
                    if (!type) {
                        return data;
                    }
                    var arr = [];
                    $.each(data, function () {
                        if (this.hero_type == type || this.hero_type2 == type || this.pay_type == type) {
                            arr.push(this);
                        }

                    })
                    return arr;
                }
                faceInit(getValidateData());

                var typeMap = {
                    3: '̹��',
                    1: 'սʿ',
                    2: '��ʦ',
                    4: '�̿�',
                    5: '����',
                    6: '����',
                    10: '����',
                    11: '����'
                }
                //�����¼���
                $('.herolist-types').on('click', 'li', function () {
                    var type = $(this).data('type') ? $(this).data('type') : $(this).data('ptype');
                    var typeString = 'ȫ��'
                    if(typeMap[type]){
                        typeString = typeMap[type]
                    }
                    PTTSendClick('btn', 'tabtype', typeString);
                    setall.removeClass('current');
                    $(this).addClass('current');
                    faceInit(getValidateData(type));
                });

            }, LoadItem = function (ItemValue) {
                var html = [];
                for (j = 0; j < dataList.length; j++) {
                    var ItemName = dataList[j].cname;
                    if (ItemName.indexOf(ItemValue) != "-1") {
                        var num = j + 1;
                        var imgurl = '//game.gtimg.cn/images/yxzj/img201606/heroimg/' + dataList[j].ename + '/';
                        html.push('<li><a href="herodetail/' + dataList[j].ename + '.shtml" target="_blank"><img src="' + imgurl + dataList[j].ename + '.jpg" width="91px" alt="' + dataList[j].cname + '">' + dataList[j].cname + '</a></li>');
                        PTTSendClick('btn', 'search', '����');
                    }
                }
                if (html.length == 0) {
                    $(".herolist").html(" ");
                    //$("#JErroTips").show();
                    return;
                }
                $(".herolist").html(html.join(""));
            }, checkInput = function (inptid) {
                var inpt = document.getElementById(inptid), valu = inpt.value;
                inpt.onblur = function () {
                    if (this.value == "") this.value = valu;
                };
                inpt.onfocus = function () {
                    if (this.value == valu) this.value = "";
                }
            };
        checkInput("search");
        $("#search").keyup(function () {
            LoadItem(this.value);
            setall.removeClass("current");
            $(setall[4]).addClass("current");
        });


    </script>
    <script type="text/javascript" src="//ossweb-img.qq.com/htdocs/weiguanwang/statistics.js" charset="utf-8"></script>
</body>

</html>`,
};
