(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{484:function(t,e,s){"use strict";s.r(e);var a=s(7),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql总结"}},[t._v("#")]),t._v(" MySQL总结")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("blockquote",[e("p",[t._v("MySQL 是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，目前属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库管理系统之一，在WEB应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统) 应用软件。")]),t._v(" "),e("p",[t._v("MySQL是一种关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提供了灵活性。")]),t._v(" "),e("p",[t._v("MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型网站的开发者都选择 MySQL 作为网站数据库。由于其社区版的性能卓越，搭配 PHP 和 Apache 可组成良好的开发环境。")])]),t._v(" "),e("p",[t._v("为了效果的直观显示，这里创建几个数据库表格作为示例")]),t._v(" "),e("p",[e("strong",[t._v("users表")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.yuadh.com/imgs/2022/09/13/1663031323819.png",alt:"1663031323819.png"}})]),t._v(" "),e("h2",{attrs:{id:"检索数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检索数据"}},[t._v("#")]),t._v(" 检索数据")]),t._v(" "),e("ol",[e("li",[t._v("检索所有列")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("检索单个列")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select user_id from users;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("检索多个列")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select user_id,username from users;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("检索不同行")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select user_id from users;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("限制结果")])]),t._v(" "),e("p",[t._v("检索的结果不超过5")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select user_id from user limit 5;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("从第6行开始检索 user_id ，检索5行，也就是 "),e("code",[t._v("6-11")]),t._v(" 行的数据")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select user_id from users limit 5,5;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("完全限定的表名")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from webdatabase.users;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("等同于")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"排序检索数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序检索数据"}},[t._v("#")]),t._v(" 排序检索数据")]),t._v(" "),e("ol",[e("li",[t._v("排序数据")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select coin from users;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("上面这条 mysql 语句是没有特定的顺序排序的")]),t._v(" "),e("p",[e("code",[t._v("使用 order by（默认从小到大） 按照coin顺序排序")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select coin from users order by coin;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("按多个列排序")])]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("order by")]),t._v(" 按照 "),e("code",[t._v("coin user_id")]),t._v(" 多个列排序")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select user_id,coin from users order by user_id,coin;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("按指定排序方向")])]),t._v(" "),e("p",[e("code",[t._v("desc")]),t._v(" ：降序排序")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select user_id from users by user_id desc;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"过滤数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过滤数据"}},[t._v("#")]),t._v(" 过滤数据")]),t._v(" "),e("p",[e("strong",[t._v("使用where子句")])]),t._v(" "),e("p",[t._v("查找  "),e("code",[t._v("user_id=4")]),t._v(" 的匹配结果")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where user_id = 4;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("where子句操作符")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("运算符")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("=")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("等于")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("<>")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不等于。**注释：**在 SQL 的一些版本中，该操作符可被写成 !=")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("大于")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("<")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("小于")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(">=")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("大于等于")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("<=")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("小于等于")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("BETWEEN")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在某个范围内")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("LIKE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("搜索某种模式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IN")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定针对某个列的多个可能值")])])])]),t._v(" "),e("ol",[e("li",[t._v("检查单个值")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username='yuadh';\nselect * from users where user_id>4;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("不匹配检查")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where user_id != 4;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where user_id <> 4;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("范围值检查")])]),t._v(" "),e("p",[t._v("检测 "),e("code",[t._v("coin")]),t._v(" 范围在 "),e("code",[t._v("0-999")]),t._v(" 之间的所有数据")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where coin between 0 and 999;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("空值检查")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where user_pic is null;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("数据过滤")])]),t._v(" "),e("ol",[e("li",[e("code",[t._v("and")]),t._v(" 操作符")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where id = 4 and coin > 999;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[e("code",[t._v("or")]),t._v(" 操作符")])]),t._v(" "),e("blockquote",[e("p",[t._v("当 or 和 and 一起的时候，优先处理 and 操作符")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where user_id =4 or user_id = 8 and coin >999;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("相当于执行的操作是")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where user_id =4 or (user_id = 8 and coin >999);\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("想要正确赛选 ，正确的 mysql 语句是")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where (user_id =4 or user_id = 8) and coin >999;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[e("code",[t._v("in")]),t._v("  操作符")])]),t._v(" "),e("p",[t._v("找出 "),e("code",[t._v("users")]),t._v(" 的"),e("code",[t._v("coin")]),t._v(" 访问在括号中值所匹配的结果")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where coin in (0,999) order by user_id;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[e("code",[t._v("not")]),t._v(" 操作符")])]),t._v(" "),e("p",[t._v("找出 "),e("code",[t._v("users")]),t._v(" 的 "),e("code",[t._v("coin")]),t._v(" 不在 "),e("code",[t._v(">1000")]),t._v(" 的匹配结果")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where not (coin>1000)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"通配符过滤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通配符过滤"}},[t._v("#")]),t._v(" 通配符过滤")]),t._v(" "),e("ol",[e("li",[t._v("百分号 "),e("code",[t._v("%")]),t._v("  通配符")])]),t._v(" "),e("p",[t._v("找出所有 "),e("code",[t._v("yuadh")]),t._v(" 开头的用户")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username like 'yuadh%'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("找出包含 "),e("code",[t._v("1")]),t._v(" 的用户")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username like '%1%'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("下划线 "),e("code",[t._v("_")]),t._v(" 通配符")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username like '_yuadh'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("思考")])]),t._v(" "),e("p",[t._v("为什么使用"),e("code",[t._v("_")]),t._v(" 和 "),e("code",[t._v("%")]),t._v(" 返回的结果不一样？少了部分结果？")]),t._v(" "),e("p",[e("strong",[t._v("解答")]),t._v("：因为下划线(_)只可以匹配一个字符，不能多，也不能少！而百分号(%)就不一样了，它没有限制！")]),t._v(" "),e("h2",{attrs:{id:"正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("例子")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("示例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("^")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配文本的开始字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("^b")]),t._v("匹配以字母 "),e("code",[t._v("b")]),t._v(" 开头的字符串")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("book、big、banana、bike")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("$")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配文本的结束字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("st$")]),t._v(" 匹配以 "),e("code",[t._v("st")]),t._v(" 结尾的字符串")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("test、resist、persist")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v(".")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配任意单个字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("b.t")]),t._v("匹配任意b和t之间有一个字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("bit、bat、but、bite")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("*")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配零个或多个在它前面的字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("f*n")]),t._v("匹配字符n前面有任意字符"),e("code",[t._v("f")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("fan、fn、faan、abcn")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("+")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配前面的字符1次或多次")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("ba+")]),t._v("匹配b后面至少一个 "),e("code",[t._v("a")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("ba、bay、bare、battle")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("<字符串>")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配包含指定的字符串的文本")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("'fa'")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("fan、afa、faad")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("[字符集合]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配字符集合中的任意一个字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("[xz]")]),t._v("匹配 "),e("code",[t._v("x")]),t._v(" 或者 "),e("code",[t._v("z")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("dizzy,zebra,x-ray,extra")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("[^]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配不在括号中的任何字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("[^abc]")]),t._v(" 匹配任意不包含 "),e("code",[t._v("a、b、c")]),t._v("的字符串")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("desk, fox, f8ke")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("字符串{n,}")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配前面的字符串至少 n 次")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("b{2")]),t._v("}匹配2个或者更多的b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("bbb,bbbb,bbbbb")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("字符串{n,m}")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("匹配前面的字符串至少 n 次，至多 m 次")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("b{2, 4}")]),t._v("匹配最少2个，最多4个b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("bb,bbb,bbbb")])])])]),t._v(" "),e("ol",[e("li",[t._v("匹配检索 "),e("code",[t._v(".000")]),t._v(" 的字符，000前有一个字符的数据")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username regexp '.ua'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("进行 or 匹配")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where coin regexp '1000|2000'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("匹配几个字符之一")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where coin regexp '[123]'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("匹配范围")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where coin regexp '[0-1000]'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("匹配特殊字符")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username regexp '\\.'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("匹配多个实例")])]),t._v(" "),e("p",[t._v("匹配包含 0-9 的任意数字、yuadhs的s可选")]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username regexp '\\[0-9]yuadhs?\\'\n\n//value-start\n1yuadh\n2yuadh\n3yuadhs\n4yuadh\n//value-end\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("ol",{attrs:{start:"7"}},[e("li",[t._v("匹配指定的多个数字")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username regexp '\\[:digit:]{4}\\'\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("strong",[t._v("说明：")])]),t._v(" "),e("p",[t._v("[:digit:]匹配任意数字，因而它为数字的一个集合。")]),t._v(" "),e("p",[t._v("{4}确切地要求它前面的字符（任意数字）出现四次。")]),t._v(" "),e("p",[t._v("所以，[[:digit:]]{4}匹配连在一起的任意四位数字。")]),t._v(" "),e("h2",{attrs:{id:"定位符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定位符"}},[t._v("#")]),t._v(" 定位符")]),t._v(" "),e("ol",[e("li",[t._v("找出所有以一个数或小数点开头的username")])]),t._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select * from users where username regexp '^[0-9\\.]';\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"计算字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算字段"}},[t._v("#")]),t._v(" 计算字段")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("普通拼接 "),e("code",[t._v("concat()")])]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" concat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vend_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'('")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vend_country"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" vendors "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" vend_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("查询结果")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("ACME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("USA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nY X"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CHINA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("rtrim()")])]),t._v(" "),e("p",[t._v("去掉右边的所有空格")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" concat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rtrim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vend_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'('")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rtrim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vend_country"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" vend_title "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" vendors "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" vend_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("查询结果")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("vend_title\nACME "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("USA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAnvils R Us "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("USA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nFurball Inc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("USA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nJet "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("England"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nJouets Et Ours "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("France"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nLT Supplies "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("USA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])])]),t._v(" "),e("h2",{attrs:{id:"算术运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算术运算"}},[t._v("#")]),t._v(" 算术运算")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" prod_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       quantity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       item_price"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       quantity"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("item_price "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" expanded_price\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orderitems\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" order_num "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2005")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h2",{attrs:{id:"使用数据处理函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用数据处理函数"}},[t._v("#")]),t._v(" 使用数据处理函数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("调用示例")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("示例结果")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("left")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("left('abc123',3)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("abc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回从左边取指定长度的子串")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("right")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("right('abc123',3)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("123")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("回从右边取指定长度的子串")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("length")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("length('abc')")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回字符串的长度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("lower")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("lower('ABC')")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("abc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回小写格式字符串")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("upper")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("upper('abc')")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("ABC")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回大写格式字符串")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ltrim")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("ltrim(' abc')")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("abc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("将字符串左边空格去除后返回")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rtrim")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("rtrim('abc ')")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("abc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("将字符串右边空格去除后返回")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("substring")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("substring('abc123',2,3)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("bc1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("从字符串第2位开始截取3位字符")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("concat")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("concat('abc','123','xyz')")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("abc123xyz")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("将各个字符串参数拼接成一个新字符串")])])])]),t._v(" "),e("h2",{attrs:{id:"创建和操作表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建和操作表"}},[t._v("#")]),t._v(" 创建和操作表")])])}),[],!1,null,null,null);e.default=n.exports}}]);