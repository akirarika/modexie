(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{376:function(t,a,s){t.exports=s.p+"assets/img/illu.ca8c68a2.jpg"},396:function(t,a,s){"use strict";s.r(a);var r=s(43),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/akirarika/kurimudb",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/github-kurimudb-white.svg",alt:""}}),r("OutboundLink")],1),t._v(" "),r("img",{attrs:{src:"https://img.shields.io/github/forks/akirarika/kurimudb",alt:""}}),t._v(" "),r("img",{attrs:{src:"https://img.shields.io/github/stars/akirarika/kurimudb",alt:""}}),t._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/language-javascript-orange.svg",alt:""}}),t._v(" "),r("img",{attrs:{src:"https://img.shields.io/github/license/akirarika/kurimudb",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"kurimudb-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kurimudb-是什么"}},[t._v("#")]),t._v(" Kurimudb 是什么")]),t._v(" "),r("p",[r("img",{staticStyle:{"margin-top":"-32px",width:"240px",float:"right"},attrs:{src:s(376)}})]),t._v(" "),r("p",[t._v("Kurimudb 是一款渐进式的 "),r("strong",[t._v("Web 数据仓库")]),t._v("，可以帮你将你应用的数据，存储在 Memory 或 IndexedDB 里、和成为你应用真正的单一数据源。")]),t._v(" "),r("p",[t._v("Kurimudb 在保持语法简单的同时，还提供了"),r("a",{attrs:{href:"https://akirarika.github.io/kurimudb/intro/#%e6%a8%a1%e5%9e%8b",target:"_blank",rel:"noopener noreferrer"}},[t._v("模块化"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://akirarika.github.io/kurimudb/monitor/",target:"_blank",rel:"noopener noreferrer"}},[t._v("订阅数据更新"),r("OutboundLink")],1),t._v("和"),r("a",{attrs:{href:"https://akirarika.github.io/kurimudb/monitor/#%e7%8a%b6%e6%80%81%e7%ae%a1%e7%90%86-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态管理 (如代替 Vuex)"),r("OutboundLink")],1),t._v(" 的能力。")]),t._v(" "),r("h3",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("语法足够简单 ✔️")]),t._v(" "),r("ul",[r("li",[t._v("Kurimudb 努力保持语法简单，进行增删改查就像操作普通的 Javascript 对象。")])])]),t._v(" "),r("li",[r("strong",[t._v("读取按需加载 ✔️")]),t._v(" "),r("ul",[r("li",[t._v("Kurimudb 筛选时仅会按需读取数据，即使缓存了巨量的数据，也不用担心。")])])]),t._v(" "),r("li",[r("strong",[t._v("数据可持久化 ✔️")]),t._v(" "),r("ul",[r("li",[t._v("Kurimudb 能将数据存储到 IndexedDB 中，即使用户刷新，数据也不会丢失。")])])])]),t._v(" "),r("h2",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i kurimudb "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or yarn add kurimudb")]),t._v("\n")])])]),r("h2",{attrs:{id:"快速体验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速体验"}},[t._v("#")]),t._v(" 快速体验")]),t._v(" "),r("p",[t._v("想快速体验的话，可以直接使用 Kurimudb 内置的 "),r("code",[t._v("local")]),t._v(" 和 "),r("code",[t._v("session")]),t._v(" 对象。下面是一个增删改查的例子：")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" local"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kurimudb"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// local 和 session 的用法是一致的喔~")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 区别是，local 的数据会被存储到 IndexedDB 里，刷新后还在，")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 而 session 则不会，关掉页面，里面的数据就没有了 (๑´ㅂ`๑)")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建或更新..")]),t._v("\nlocal"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取..")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" local"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除..")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" local"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否存在..")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"say"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" local"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// or local.has("say");')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取所有数据..")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" local"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("如你所见，Kurimudb 的语法很简单，就像操作一个普通的 Javascript 对象一样。但是，在背后，你的数据已经被存储到了 IndexedDB 里啦。")]),t._v(" "),r("p",[t._v("Kurimudb 还整合了 "),r("a",{attrs:{href:"https://rxjs.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RxJS"),r("OutboundLink")],1),t._v("，只要你在变量名后加上 "),r("code",[t._v("$")]),t._v("，你就可以获得一个此值的 "),r("a",{attrs:{href:"https://rxjs.dev/guide/subject#behaviorsubject",target:"_blank",rel:"noopener noreferrer"}},[t._v("BehaviorSubject 对象"),r("OutboundLink")],1),t._v("。我们可以通过这种方式来订阅此变量，在它被改变时做点什么：")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("br"),r("br"),r("div",{staticClass:"highlighted"},[t._v(" ")]),r("br"),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" local "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kurimudb"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 订阅这个变量.. (based on RxJS)")]),t._v("\nlocal"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("say$"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"what you want to say: "')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" val"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("h2",{attrs:{id:"准备好了吗"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备好了吗"}},[t._v("#")]),t._v(" 准备好了吗？")]),t._v(" "),r("p",[t._v("我们刚刚介绍了 Kurimudb 的核心用法——但这些对于复杂的应用来说可能还不够，所以，请务必读完整个教程！")])])}),[],!1,null,null,null);a.default=n.exports}}]);