(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{433:function(e,t,n){"use strict";n.r(t);var a=n(2),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"本地搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地搭建"}},[e._v("#")]),e._v(" 本地搭建")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("作者: 小雨写立可白\n时间: '2023-06-10'\n")])])]),t("p",[e._v("1、创建并更改为新目录")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("mkdir vuepress-starter && cd vuepress-starter\n")])])]),t("p",[e._v("2、使用首选包管理器初始化")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("yarn init # npm init\n")])])]),t("p",[e._v("3、将vuepress安装为本地依赖")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("yarn add -D vuepress # npm install -D vuepress\n")])])]),t("p",[e._v("4、创建您的第一个文档\n5、在package.json中添加一些script，此步骤是可选的，但强烈建议执行，因为文档的其余部分将假定存在这些脚本。")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n}\n')])])]),t("p",[e._v("6、在本地启动服务器")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("yarn docs:dev # npm run docs:dev\n")])])]),t("h1",{attrs:{id:"二、基础配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、基础配置"}},[e._v("#")]),e._v(" 二、基础配置")]),e._v(" "),t("p",[e._v("1、在文档目录（docs）下创建一个.vuepress目录，所有的Vuepress相关文件都会被放在这里此时目录结构如下：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),t("p",[e._v("2、在.vuepress文件夹下添加config.js，配置网站的标题和描述，方便SEO")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("module.exports = {\n  title: 'Hello VuePress',\n  description: 'Just playing around'\n}\n")])])]),t("p",[e._v("3、重启本地服务器，此时界面类似于：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/34557112/1685877974782-5bb77263-bcd9-41aa-af2d-bc05d66b277d.png#averageHue=%23fefefe&clientId=u7e7b46c2-6d83-4&from=paste&height=804&id=udd12b8ef&originHeight=1407&originWidth=2880&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=26381&status=done&style=shadow&taskId=ud2011ff5-efb7-4c05-9129-5f7c7ef6708&title=&width=1646",alt:"image.png"}}),e._v("\n4、添加导航栏")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("module.exports = {\n    title: 'Hello VuePress',\n    description: 'Just playing around',\n    themeConfig: {\n        nav: [\n            { text: '首页', link: '/' },\n            {\n                text: '小雨写立可白的博客',\n                items: [\n                    { text: 'Github', link: '...' },\n                    { text: '掘金', link: '...' }\n                ]\n            }\n        ]\n    }\n}\n")])])]),t("p",[e._v("重启本地服务器效果如下：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/34557112/1685878892706-7bdbe5c7-dd5a-43f1-8224-d6707d25a35e.png#averageHue=%23fefefe&clientId=u7e7b46c2-6d83-4&from=paste&height=854&id=u8f437429&originHeight=1495&originWidth=2880&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=32248&status=done&style=shadow&taskId=ufa00533a-ab17-4c4d-bd09-496281cb98a&title=&width=1645.7142857142858",alt:"image.png"}}),e._v("\n更多配置参考官网"),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress导航栏"),t("OutboundLink")],1),e._v("\n5、添加侧边栏\n再添加一些md文档，目录如下：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n|  └─ handbook\n|  \t  └─ ConditionalTypes.md\n|\t    └─ Generics.md\n└─ package.json\n")])])]),t("p",[e._v("在config.js中配置如下：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("module.exports = {\n    title: 'Hello VuePress',\n    description: 'Just playing around',\n    themeConfig: {\n        nav: [\n            { text: '首页', link: '/' },\n            {\n                text: '小雨写立可白的博客',\n                items: [\n                    { text: 'Github', link: '...' },\n                    { text: '掘金', link: '...' }\n                ]\n            }\n        ],\n        sidebar: [\n            {\n                title: '欢迎学习',\n                path: '/',\n                collapsable: false, // 不折叠\n                children: [\n                    { title: \"学前必读\", path: \"/\" }\n                ]\n            },\n            {\n                title: \"基础学习\",\n                path: '/handbook/ConditionalTypes',\n                collapsable: false, // 不折叠\n                children: [\n                    { title: \"第一篇\", path: \"/handbook/ConditionalTypes\" },\n                    { title: \"第二篇\", path: \"/handbook/Generics\" }\n                ],\n            }\n        ]\n    }\n}\n\n")])])]),t("p",[e._v("重启本地服务器效果如下：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/34557112/1685881629703-6c2ce220-a91e-40a8-8c1b-c2a1843f81a9.png#averageHue=%23fefefe&clientId=u5c2a39b8-256c-4&from=paste&height=854&id=u1237ba75&originHeight=1495&originWidth=2880&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=44363&status=done&style=shadow&taskId=ue31bb1a9-673a-49a6-933d-f147678ef76&title=&width=1645.7142857142858",alt:"image.png"}}),e._v("\n6、更换主题\n现在基本的目录和导航功能已经实现，但如果我还想要加载 loading、切换动画、模式切换（暗黑模式）、返回顶部、评论等功能呢，为了简化开发成本，我们可以直接使用主题，这里使用的主题是 "),t("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-reco"),t("OutboundLink")],1),e._v("：\n6.1、安装"),t("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-reco"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("npm install vuepress-theme-reco --save-dev\n# or\nyarn add vuepress-theme-reco\n")])])]),t("p",[e._v("6.2、在config.js中引入主题")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("module.exports = {\n    // 引用主题 vuepress-theme-reco \n    theme: 'reco',\n    title: '咸鱼咸鱼',\n    description: 'Just playing around',\n    themeConfig: {\n        nav: [\n            { text: '首页', link: '/' },\n            {\n                text: '咸鱼的博客',\n                items: [\n                    { text: 'Github', link: '...' },\n                    { text: '掘金', link: '...' }\n                ]\n            }\n        ],\n        sidebar: [\n            {\n                title: '欢迎学习',\n                path: '/',\n                collapsable: false, // 不折叠\n                children: [\n                    { title: \"学前必读\", path: \"/\" }\n                ]\n            },\n            {\n                title: \"基础学习\",\n                path: '/handbook/ConditionalTypes',\n                collapsable: false, // 不折叠\n                children: [\n                    { title: \"第一篇\", path: \"/handbook/ConditionalTypes\" },\n                    { title: \"第二篇\", path: \"/handbook/Generics\" },\n                ],\n            }\n        ]\n    }\n}\n\n")])])]),t("p",[e._v("6.3、重启本地服务器，刷新页面有一些细节的改变，比如加载时的 loading 动画、以及支持切换暗黑模式：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/34557112/1685925997102-321a59ca-38c4-4b2c-a650-a0b1e8315a68.png#averageHue=%23181818&clientId=u5c2a39b8-256c-4&from=paste&height=854&id=u596b93d0&originHeight=1495&originWidth=2880&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=43664&status=done&style=shadow&taskId=ud0bd81bc-08d3-4d29-b5bc-5ae339f4775&title=&width=1645.7142857142858",alt:"image.png"}}),e._v("\n到这里就完成了\n7、添加文章信息")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("---\ntitle: 条件类型\nauthor: 小雨写立可白\ndate: '2023-06-05'\n---\n")])])]),t("p",[e._v("8、设置语言\n在config.js中配置")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("module.exports = {\n    //设置时间格式\n    locales: {\n        '/': {\n            lang: 'zh-CN'\n        }\n    },\n    // 引用主题 vuepress-theme-reco \n    theme: 'reco',\n    title: '小雨写立可白',\n    description: 'Just playing around',\n    themeConfig: {\n        nav: [\n            { text: '首页', link: '/' },\n            {\n                text: '小雨写立可白的博客',\n                items: [\n                    { text: 'Github', link: '...' },\n                    { text: '掘金', link: '...' }\n                ]\n            }\n        ],\n        sidebar: [\n            {\n                title: '欢迎学习',\n                path: '/',\n                collapsable: false, // 不折叠\n                children: [\n                    { title: \"学前必读\", path: \"/\" }\n                ]\n            },\n            {\n                title: \"基础学习\",\n                path: '/handbook/ConditionalTypes',\n                collapsable: false, // 不折叠\n                children: [\n                    { title: \"第一篇\", path: \"/handbook/ConditionalTypes\" },\n                    { title: \"第二篇\", path: \"/handbook/Generics\" },\n                ],\n            }\n        ]\n    }\n}\n\n")])])]),t("p",[e._v("效果如下:\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/34557112/1685926616969-ae7b2e2d-4f9e-4e14-b9b7-d9868fa29d15.png#averageHue=%23f2f1ef&clientId=u5c2a39b8-256c-4&from=paste&height=26&id=u3cc99864&originHeight=50&originWidth=148&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=1764&status=done&style=shadow&taskId=u94e8ba5b-748a-46d4-a3b5-8da4fa57303&title=&width=78",alt:"image.png"}}),e._v("\n9、开启目录结构(可选)\n在原本的主题里，我们发现每篇文章的目录结构出现在左侧:\n而 vuepress-theme-reco 将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在了页面的右侧，如果你要全局开启，可在页面 config.js 里设置开启：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v(" themeConfig: {\n    subSidebar: 'auto'\n  }\n")])])]),t("p",[e._v("10、修改主题颜色，VuePress 基于 Vue，所以主题色用的是 Vue 的绿色，如果想修改颜色可如下步骤:\n10.1、创建一个.vuepress/styles/palette.styl 文件，文件代码如下：")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[e._v("$accentColor = #60ad80\n")])])]),t("p",[e._v("更多的颜色修改参考 VuePress 的 "),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#palette-styl",target:"_blank",rel:"noopener noreferrer"}},[e._v("palette.styl"),t("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);t.default=s.exports}}]);