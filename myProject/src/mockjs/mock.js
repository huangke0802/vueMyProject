import Mock from "mockjs";
//mockjs当后端没有提供接口是，使用模拟后端的接口的
//第一个参数是正则
Mock.mock(/getNewsList/, {
  //包含5个元素
  'list|5': [
    {
      title: "@ctitle(5,20)", //随机生成title 5到20个字符
      url: "@url" //随机生成url
    }
  ]
});

Mock.mock(/api\/getPrice/, {
  amount: 1678
});

Mock.mock(/getBoardList/, {
  boardList : [
    {
      title: "开放产品",
      description: "开放产品是一款开放产品",
      id: "car",
      toKey: "analysis",
      saleout: false
    },
    {
      title: "品牌营销",
      description: "品牌营销帮助你的产品更好地找到定位",
      id: "earth",
      toKey: "count",
      saleout: false
    },
    {
      title: "使命必达",
      description: "使命必达快速迭代永远保持最前端的速度",
      id: "loud",
      toKey: "forecast",
      saleout: true
    },
    {
      title: "勇攀高峰",
      description: "帮你勇闯高峰，到达事业的顶峰",
      id: "hill",
      toKey: "publish",
      saleout: false
    }
  ]
});

Mock.mock(/productList/, {
  list: {
    pc: {
      title: "PC产品",
      list: [
        {
          name: "数据统计",
          url: "detail/count"
        },
        {
          name: "数据预测",
          url: "detail/forecast"
        },
        {
          name: "流量分析",
          url: "detail/analysis",
          hot: true
        },
        {
          name: "广告发布",
          url: "detail/publish"
        }
      ]
    },

    app: {
      title: "手机应用类",
      last: true,
      list: [
        {
          name: "91助手",
          url: "http://weixin.com"
        },
        {
          name: "产品助手",
          url: "http://twitter.com",
          hot: true
        },
        {
          name: "智能地图",
          url: "http://maps.com"
        },
        {
          name: "团队语音",
          url: "http://phone.com"
        }
      ]
    }
  }
});

Mock.mock(/login/, {
  userName : "黄克",
  passWord : "####"
})
