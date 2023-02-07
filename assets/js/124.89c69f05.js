(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{434:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"本地分支的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地分支的操作"}},[s._v("#")]),s._v(" 本地分支的操作")]),s._v(" "),a("p",[s._v("在多人协作开发的时候，为了防止互相干扰，提高协同开发的效率")]),s._v(" "),a("h3",{attrs:{id:"查看所有分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看所有分支"}},[s._v("#")]),s._v(" 查看所有分支")]),s._v(" "),a("p",[s._v("查看 Git 仓库中所有的分支列表")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"创建新分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建新分支"}},[s._v("#")]),s._v(" 创建新分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"切换分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[s._v("#")]),s._v(" 切换分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"快速创建和切换分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速创建和切换分支"}},[s._v("#")]),s._v(" 快速创建和切换分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要先切换到master主分支上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[s._v("#")]),s._v(" 删除分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"本地分支推送到远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地分支推送到远程分支"}},[s._v("#")]),s._v(" 本地分支推送到远程分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -u 表示把本地分支和远程分支进行关联")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" 远程仓库的别名  本地分支名称:远程分支名称\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实际案例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin loginment:login\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以省略使本地分支名和远程分支名保持一致")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin login\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"查看远程仓库分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库分支"}},[s._v("#")]),s._v(" 查看远程仓库分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show origin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"跟踪分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跟踪分支"}},[s._v("#")]),s._v(" 跟踪分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程仓库中，把对应的远程分支下载到本地仓库，保持本地分支和远程分支名称相同")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout 远程分支名称\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout pay\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程仓库中，把对应的远程分支下载到本地仓库，并把下载的本地分支进行重命名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" 本地分支名称  远程仓库名称/远程分支名称\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" payment origin/pay\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"拉取分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取分支"}},[s._v("#")]),s._v(" 拉取分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"删除远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[s._v("#")]),s._v(" 删除远程分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程仓库中，指定名称的远程分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" 远程分支名称\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" pay\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"master主分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master主分支"}},[s._v("#")]),s._v(" master主分支")]),s._v(" "),a("p",[s._v("在实际应用中，master 主分支的作用：用来保存和记录整个项目已完成的功能代码")]),s._v(" "),a("p",[s._v("成需要直接在 master 分支上修改代码，风险太大")]),s._v(" "),a("h2",{attrs:{id:"功能分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能分支"}},[s._v("#")]),s._v(" 功能分支")]),s._v(" "),a("p",[s._v("指的是专门用来开发新功能的分支，它是临时从master主分支上分叉出来的，当新功能开发且测试完毕后，最终需要合并到 master 主分支上")]),s._v(" "),a("h2",{attrs:{id:"冲突分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冲突分支"}},[s._v("#")]),s._v(" 冲突分支")]),s._v(" "),a("p",[s._v("如果在不同的分支中，对同一个文件进行了不同的修改，Git 就没法干净的合并它们。需要 "),a("strong",[s._v("手动解决冲突")]),s._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);