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