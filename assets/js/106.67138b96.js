(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{419:function(s,a,t){"use strict";t.r(a);var v=t(7),e=Object(v.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"网易云案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网易云案例"}},[s._v("#")]),s._v(" 网易云案例")]),s._v(" "),a("h2",{attrs:{id:"跨域、反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域、反向代理"}},[s._v("#")]),s._v(" 跨域、反向代理")]),s._v(" "),a("p",[s._v("本地node服务器开启 "),a("code",[s._v("cors")]),s._v("，负责请求的转发和数据接收回传")]),s._v(" "),a("h2",{attrs:{id:"运行步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行步骤"}},[s._v("#")]),s._v(" 运行步骤")]),s._v(" "),a("ul",[a("li",[s._v("安装到本地网易云 "),a("code",[s._v("Node.js API")]),s._v("  , "),a("code",[s._v("npm i")]),s._v(" 安装需要的包，"),a("code",[s._v("node app.js")]),s._v(" 运行")]),s._v(" "),a("li",[s._v("初始化工程\n"),a("ul",[a("li",[s._v("下载所需的第三方包（"),a("code",[s._v("axios、vant、vue-router")]),s._v("）安装自动按需导入插件")]),s._v(" "),a("li",[s._v("配置组件库")]),s._v(" "),a("li",[s._v("环境配置结束")])])])]),s._v(" "),a("h3",{attrs:{id:"四个页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四个页面"}},[s._v("#")]),s._v(" 四个页面")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Layout/index.vue")])]),s._v(" "),a("li",[a("code",[s._v("Home/index.vue")])]),s._v(" "),a("li",[a("code",[s._v("Search/index.vue")])]),s._v(" "),a("li",[a("code",[s._v("Play/index.vue")])])]),s._v(" "),a("p",[s._v("复制样式")]),s._v(" "),a("ul",[a("li",[s._v("引入路由")])]),s._v(" "),a("h3",{attrs:{id:"使用tarbar组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用tarbar组件"}},[s._v("#")]),s._v(" 使用"),a("code",[s._v("TarBar")]),s._v("组件")]),s._v(" "),a("h3",{attrs:{id:"使用-navbar-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-navbar-组件"}},[s._v("#")]),s._v(" 使用 "),a("code",[s._v("NavBar")]),s._v(" 组件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("标题切换")])]),s._v(" "),a("li",[a("p",[s._v("搜索")])])]),s._v(" "),a("h3",{attrs:{id:"封装网络请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装网络请求"}},[s._v("#")]),s._v(" 封装网络请求")]),s._v(" "),a("p",[s._v("目的：网络请求，不散落在各个逻辑页面，封装起来方便以后修改")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("utils/request.js")]),s._v(" -对 "),a("code",[s._v("axios")]),s._v(" 进行二次封装，制定项目的地址")]),s._v(" "),a("div",{staticClass:"language-request.js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"})])]),s._v(" "),a("li",[a("p",[a("code",[s._v("api/Home.js")]),s._v(" - 统一管理所有需要的 "),a("code",[s._v("url")]),s._v(" 地址，封装网络请求的方法并导出")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v('export const recommedMusic = params=>request({\n\turl:"/personalized",\n\tparams\n})\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("api/index.js")]),s._v(" -通以导出接口")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("import {recommendMusix} from '@/api/Home'\nexport const recommedMusicAPI = recommendMusic \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])]),s._v(" "),a("p",[a("strong",[s._v("具体步骤")])]),s._v(" "),a("ol",[a("li",[a("code",[s._v("src/utils/request.js")]),s._v(" 设置基地址，对"),a("code",[s._v("axios")]),s._v(" 二次封装")]),s._v(" "),a("li",[a("code",[s._v("src/api/Home.js")]),s._v(" 请求方法-请求方法 "),a("code",[s._v("axios")])]),s._v(" "),a("li",[a("code",[s._v("src/api/index.js")]),s._v(" -把其它请求模块里的函数引入统一导出")]),s._v(" "),a("li",[s._v("具体使用的逻辑页面")])]),s._v(" "),a("h2",{attrs:{id:"推荐歌单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐歌单"}},[s._v("#")]),s._v(" 推荐歌单")]),s._v(" "),a("ul",[a("li",[s._v("使用 组件库栅栏系统（van-row 、van-col）")]),s._v(" "),a("li",[s._v("使用 组件库图片系统 (van-image、p)")]),s._v(" "),a("li",[s._v("调整间距和属性")]),s._v(" "),a("li",[s._v("获取 "),a("code",[s._v("API")]),s._v(" 得到的对象 ，封装需要用到的对象")]),s._v(" "),a("li",[a("code",[s._v("v-for")]),s._v(" 循环标签，铺设数据")])]),s._v(" "),a("h2",{attrs:{id:"最新音乐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最新音乐"}},[s._v("#")]),s._v(" 最新音乐")]),s._v(" "),a("ul",[a("li",[s._v("写页面")]),s._v(" "),a("li",[s._v("封装请求方法，获取得到的对象，封装需要用到的对象")]),s._v(" "),a("li",[a("code",[s._v("v-for")]),s._v(" 循环标签，铺设数据")])]),s._v(" "),a("h2",{attrs:{id:"搜索页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜索页面"}},[s._v("#")]),s._v(" 搜索页面")]),s._v(" "),a("ul",[a("li",[s._v("注册搜索组件（van-search）")])]),s._v(" "),a("p",[a("strong",[s._v("热搜关键字")])]),s._v(" "),a("ul",[a("li",[s._v("使用标题，关键词容器写页面")]),s._v(" "),a("li",[s._v("封装请求方法，获取得到的对象，封装需要用到的对象")]),s._v(" "),a("li",[s._v("在需要的组件页面，使用")]),s._v(" "),a("li",[s._v("循环 "),a("code",[s._v("hot_item")]),s._v(" 类 "),a("code",[s._v("span")]),s._v(" 给绑定点击事件，将其值输入的搜索框")])]),s._v(" "),a("p",[a("strong",[s._v("搜索结果")])]),s._v(" "),a("ul",[a("li",[s._v("封装方法")]),s._v(" "),a("li",[s._v("调用点击事件，获取到 "),a("code",[s._v("promise")]),s._v(" 方法")]),s._v(" "),a("li",[s._v("铺设页面")]),s._v(" "),a("li",[a("code",[s._v("if-else")]),s._v(" 互斥搜索关键字和搜索结果")])]),s._v(" "),a("p",[a("strong",[s._v("输入框搜索")])]),s._v(" "),a("ul",[a("li",[s._v("绑定 @"),a("code",[s._v("input")]),s._v(" 事件")]),s._v(" "),a("li",[s._v("将搜索结果保存到 "),a("code",[s._v("resultList")])]),s._v(" "),a("li",[s._v("如果关键词为空，阻止网络请求")])]),s._v(" "),a("p",[a("strong",[s._v("加载下页数据")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("van-list")]),s._v(" 组件检测执行 "),a("code",[s._v("onload")]),s._v(" 事件")]),s._v(" "),a("li",[s._v("配合后台接口，传递下一页标识")]),s._v(" "),a("li",[s._v("拿到下一页数据后追加数组")]),s._v(" "),a("li",[s._v("几个关键词 "),a("code",[s._v("loading、finishing、offset")])])]),s._v(" "),a("p",[a("code",[s._v("loading")]),s._v(" ：需要在偏移后设置会 false，继续偏移")]),s._v(" "),a("p",[a("code",[s._v("finished")]),s._v(" ： 如果没有数据，或数据加载完成 两处地方判断一下阻止网络请求")]),s._v(" "),a("p",[s._v("如果是数据加载完成，"),a("code",[s._v("finished")]),s._v(" 需要将值设置为 "),a("code",[s._v("true")]),s._v("，但是需要在重新搜索，或者新加数据里重置回 "),a("code",[s._v("false")])]),s._v(" "),a("h2",{attrs:{id:"问题以及解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题以及解决"}},[s._v("#")]),s._v(" 问题以及解决")]),s._v(" "),a("h3",{attrs:{id:"输入框防抖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入框防抖"}},[s._v("#")]),s._v(" 输入框防抖")]),s._v(" "),a("blockquote",[a("p",[s._v("每次删除输入框都会发起网络请求")])]),s._v(" "),a("p",[s._v("在输入框改变的函数里")]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("if(this.timer)clearTimeout(this.timer)//如果有定时器就删除，不然其发起网络请求\nthis.timer = setTimeoust(async()=>{...})//如果在一定时间内没有触发输入框改变，就发起请求\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"页面修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面修复"}},[s._v("#")]),s._v(" 页面修复")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("onload")]),s._v(" 函数中对 "),a("code",[s._v("page++")]),s._v(" ，清空输入框后没有对其进行清零操作")]),s._v(" "),a("ul",[a("li",[s._v("点击搜索 page重新赋值为1")]),s._v(" "),a("li",[s._v("输入框改变 page 重新赋值为 1")])]),s._v(" "),a("h3",{attrs:{id:"上下页面导航边距修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下页面导航边距修复"}},[s._v("#")]),s._v(" 上下页面导航边距修复")]),s._v(" "),a("h2",{attrs:{id:"播放音乐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#播放音乐"}},[s._v("#")]),s._v(" 播放音乐")]),s._v(" "),a("h3",{attrs:{id:"创建-songitem-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-songitem-组件"}},[s._v("#")]),s._v(" 创建 "),a("code",[s._v("SongItem")]),s._v(" 组件")]),s._v(" "),a("p",[s._v("代替最新音乐和搜索结果使用到的 音乐框")]),s._v(" "),a("h3",{attrs:{id:"播放音乐-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#播放音乐-2"}},[s._v("#")]),s._v(" 播放音乐")]),s._v(" "),a("ul",[a("li",[s._v("封装方法")]),s._v(" "),a("li",[s._v("路由")])]),s._v(" "),a("h2",{attrs:{id:"vant-适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vant-适配"}},[s._v("#")]),s._v(" "),a("code",[s._v("vant")]),s._v(" 适配")]),s._v(" "),a("p",[a("strong",[s._v("postcss")]),s._v("  配合 "),a("code",[s._v("webpakc")]),s._v(" 翻译 "),a("code",[s._v("css")]),s._v(" 代码")]),s._v(" "),a("p",[s._v("插件 "),a("code",[s._v("postcss-pxtorem")]),s._v(" ，自动把 "),a("code",[s._v("px")]),s._v(" 自动转换为 "),a("code",[s._v("rem")])]),s._v(" "),a("p",[a("strong",[s._v("配置")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'postcss-pxtorem'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rootValue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//基准值\t例如 72px会转换为2rem")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("propList")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);