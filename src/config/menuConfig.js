const menuList = [
  {
    title: '首页',
    icon: 'slack',
    key: '/home'
  },
  {
    title: 'UI',
    icon: 'radar-chart',
    key: '/ui',
    children: [
      {
        title: '按钮',
        key: '/ui/buttons',
      },
      {
        title: '弹框',
        key: '/ui/modals',
      },
      {
        title: 'Loading',
        key: '/ui/loadings',
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
      },
      {
        title: '全局Message',
        key: '/ui/messages',
<<<<<<< HEAD
=======
      },
      {
        title: 'Tab页签',
        key: '/ui/tabs',
      },
      {
        title: '图片画廊',
        key: '/ui/gallery',
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    icon: 'form',
    children: [
      {
        title: '登录',
        key: '/form/login',
      },
      {
        title: '注册',
        key: '/form/reg',
>>>>>>> 8586e0f50f7f9182447f20a46576d05f2d728ba0
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    icon: 'appstore',
    children: [
      {
        title: '基础表格',
        key: '/table/basic',
      },
      {
        title: '高级表格',
        key: '/table/high',
      }
    ]
  },
  {
<<<<<<< HEAD
=======
    title: '富文本',
    icon: 'book',
    key: '/rich'
  },
  {
    title: '城市管理',
    icon: 'home',
    key: '/city'
  },
  {
    title: '订单管理',
    key: '/order',
    icon: 'money-collect',
    btnList: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/user',
    icon: 'contacts',
  },
  {
    title: '车辆地图',
    key: '/bikeMap',
    icon: 'dashboard',
  },
  {
>>>>>>> 8586e0f50f7f9182447f20a46576d05f2d728ba0
    title: '图标',
    key: '/charts',
    icon: 'deployment-unit',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar'
      },
      {
        title: '饼图',
        key: '/charts/pie'
      },
      {
        title: '折线图',
        key: '/charts/line'
      },
    ]
  },
  {
    title: '富文本',
    key: '/rich'
  },
  {
    title: '权限设置',
    icon: 'setting',
    key: '/permission'
  },
];
export default menuList;