// nav
module.exports = [
  {
    text: '前端|后端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'HTML', link: '/pages/00b11a/' },
      { text: 'CSS', link: '/pages/6cc4d3/' },
      { text: 'JavaScript', link: '/pages/763a9e/' },
      { text: '前端知识', link: '/pages/a55c11/' },
    ],
  },
  {
    text: '框架|软件',
    link: '/software/',
    items: [
      { text: 'Vue', link: '/pages/916d34/' },
      { text: 'MarkDown', link: '/pages/a76118/' },
      { text: 'git', link: '/pages/665f65/' },
      { text: 'Node.js', link: '/pages/33e439/' },
    ],
  },
  {
    text: '系统|硬件',
    link: '/system/',
    items: [
      { text: 'Linux', link: '/pages/f15d96/' },
      { text: '51单片机', link: '/pages/c2f362/' },
    ],
  },
  {
    text: '学业|英语',
    link: '/study/',
    items: [
      { text: '四级', link: '/pages/d835fd/' },
      { text: '第一学期课程', link: '/pages/3e0e9b/' },
    ],
  },
  {
    text: '基础',
    link: '/base/',
    items: [
      { text: '操作系统', link: '/pages/a90dcc/' },
      { text: '计算机网络', link: '/pages/ab252e/' },
      { text: '数据结构', link: '/pages/f9418a/' },
      { text: '计算机组成原理', link: '/pages/5ecc7c/' },
    ],
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '扩展',
    link: '/extend/',
    items: [
      { text: 'HTML5', link: '/pages/3e76f5/' },
      { text: 'Electron', link: '/pages/795b17/' },
    ],
  },
  {
    text: '其它',
    link: '/other/',
    items: [
      { text: '日记便签', link: '/pages/b0d962/' },
      { text: '前端导航', link: '/pages/c35e74/' },
    ],
  },
]
