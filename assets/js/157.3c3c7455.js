(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{467:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"频道编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频道编辑"}},[t._v("#")]),t._v(" 频道编辑")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("vant")]),t._v(" 组件的弹出提示来创建 频道编辑页面")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("vant-cell")]),t._v(" 作标题容器-包含 "),s("code",[t._v("button")]),t._v(" 按钮")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("vant-gird")]),t._v(" 宫格显示每一个频道")]),t._v(" "),s("p",[t._v("调制 "),s("code",[t._v("css")]),t._v(" 尽量和设计稿一致")]),t._v(" "),s("h2",{attrs:{id:"具体步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[t._v("#")]),t._v(" 具体步骤")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("组件通信 ，将频道数据传到编辑频道显示，active显示高亮")])]),t._v(" "),s("li",[s("p",[t._v("封装网络请求，获取所有的频道，过滤出频道推荐")]),t._v(" "),s("p",[t._v("过滤逻辑")]),t._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("computed:{\n\trecommedChannels(){\n\t\tconst channels = []\n\t\tthis.allChannels.forEach(channel=>{\n\t\t\tconst ret = this.myChannels.find(myChannel>{\n\t\t\t\treturn myChannel.id = channel.id\n\t\t\t})\n\t\t\tif(!ret){//如果id频道不在我的频道中则加入推荐频道\n\t\t\t\tchannels.push(ret)\n\t\t\t}\n\t\t})\n\t\treturn channels\n\t}\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("简化版本")]),t._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("computed:{\n\trecommendChannels(){\n\t\treturn this.allChannels.filter(channel=>{\n\t\t\treturn !this.myChannels.find(mychannel=>{\n\t\t\t\treturn mychannle.id === channle.id\n\t\t\t})\n\t\t})\n\t}\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("添加频道到我的频道-需要作持久化")])]),t._v(" "),s("li",[s("p",[t._v("处理 编辑完成图标 ，将推荐频道固定不删除的逻辑功能")])]),t._v(" "),s("li",[s("p",[t._v("我的频道点击事件，利用组件之间的通信")])]),t._v(" "),s("li",[s("p",[t._v("我的频道点击事件删除频道，首先判断是否为固定标签，然后删除频道，然后通知组件，需要注意 激活的 频道问题")])])]),t._v(" "),s("h2",{attrs:{id:"数据持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化"}},[t._v("#")]),t._v(" 数据持久化")]),t._v(" "),s("p",[t._v("分登入和未登入状态")]),t._v(" "),s("h3",{attrs:{id:"未登入状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未登入状态"}},[t._v("#")]),t._v(" 未登入状态")]),t._v(" "),s("p",[t._v("将数据存储到本地中")]),t._v(" "),s("p",[s("strong",[t._v("添加删除")])]),t._v(" "),s("p",[s("strong",[t._v("删除频道")])]),t._v(" "),s("h3",{attrs:{id:"登入状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登入状态"}},[t._v("#")]),t._v(" 登入状态")]),t._v(" "),s("p",[s("strong",[t._v("添加频道")])]),t._v(" "),s("ul",[s("li",[t._v("封装网络请求")]),t._v(" "),s("li",[t._v("获取频道显示")])]),t._v(" "),s("p",[s("strong",[t._v("删除频道")])]),t._v(" "),s("ul",[s("li",[t._v("封装网络请求")]),t._v(" "),s("li",[t._v("删除频道然后显示")])]),t._v(" "),s("h2",{attrs:{id:"数据显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据显示"}},[t._v("#")]),t._v(" 数据显示")]),t._v(" "),s("h3",{attrs:{id:"未登入状态-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未登入状态-2"}},[t._v("#")]),t._v(" 未登入状态")]),t._v(" "),s("p",[t._v("直接将登入的用户接口频道数据显示")]),t._v(" "),s("h3",{attrs:{id:"登入状态-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登入状态-2"}},[t._v("#")]),t._v(" 登入状态")]),t._v(" "),s("p",[t._v("有本地存储直接取数据拿来使用")]),t._v(" "),s("ul",[s("li",[t._v("如果没有本地存储拿为登入状态的默认频道接口")])])])}),[],!1,null,null,null);s.default=e.exports}}]);