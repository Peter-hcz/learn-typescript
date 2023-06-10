# 本地搭建

```
作者: 小雨写立可白
时间: '2023-06-10'
```

1、创建并更改为新目录
```html
mkdir vuepress-starter && cd vuepress-starter
```
2、使用首选包管理器初始化
```html
yarn init # npm init
```
3、将vuepress安装为本地依赖
```html
yarn add -D vuepress # npm install -D vuepress
```
4、创建您的第一个文档
5、在package.json中添加一些script，此步骤是可选的，但强烈建议执行，因为文档的其余部分将假定存在这些脚本。
```html
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
6、在本地启动服务器
```html
yarn docs:dev # npm run docs:dev
```

# 二、基础配置
1、在文档目录（docs）下创建一个.vuepress目录，所有的Vuepress相关文件都会被放在这里此时目录结构如下：
```html
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
2、在.vuepress文件夹下添加config.js，配置网站的标题和描述，方便SEO
```html
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```
3、重启本地服务器，此时界面类似于：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34557112/1685877974782-5bb77263-bcd9-41aa-af2d-bc05d66b277d.png#averageHue=%23fefefe&clientId=u7e7b46c2-6d83-4&from=paste&height=804&id=udd12b8ef&originHeight=1407&originWidth=2880&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=26381&status=done&style=shadow&taskId=ud2011ff5-efb7-4c05-9129-5f7c7ef6708&title=&width=1646)
4、添加导航栏
```html
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '小雨写立可白的博客',
                items: [
                    { text: 'Github', link: '...' },
                    { text: '掘金', link: '...' }
                ]
            }
        ]
    }
}
```
重启本地服务器效果如下：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34557112/1685878892706-7bdbe5c7-dd5a-43f1-8224-d6707d25a35e.png#averageHue=%23fefefe&clientId=u7e7b46c2-6d83-4&from=paste&height=854&id=u8f437429&originHeight=1495&originWidth=2880&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=32248&status=done&style=shadow&taskId=ufa00533a-ab17-4c4d-bd09-496281cb98a&title=&width=1645.7142857142858)
更多配置参考官网[VuePress导航栏](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F)
5、添加侧边栏
再添加一些md文档，目录如下：
```html
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
|  └─ handbook
|  	  └─ ConditionalTypes.md
|	    └─ Generics.md
└─ package.json
```
在config.js中配置如下：
```html
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '小雨写立可白的博客',
                items: [
                    { text: 'Github', link: '...' },
                    { text: '掘金', link: '...' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "第一篇", path: "/handbook/ConditionalTypes" },
                    { title: "第二篇", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}

```
重启本地服务器效果如下：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34557112/1685881629703-6c2ce220-a91e-40a8-8c1b-c2a1843f81a9.png#averageHue=%23fefefe&clientId=u5c2a39b8-256c-4&from=paste&height=854&id=u1237ba75&originHeight=1495&originWidth=2880&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=44363&status=done&style=shadow&taskId=ue31bb1a9-673a-49a6-933d-f147678ef76&title=&width=1645.7142857142858)
6、更换主题
现在基本的目录和导航功能已经实现，但如果我还想要加载 loading、切换动画、模式切换（暗黑模式）、返回顶部、评论等功能呢，为了简化开发成本，我们可以直接使用主题，这里使用的主题是 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)：
6.1、安装[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)
```html
npm install vuepress-theme-reco --save-dev
# or
yarn add vuepress-theme-reco
```
6.2、在config.js中引入主题
```html
module.exports = {
    // 引用主题 vuepress-theme-reco 
    theme: 'reco',
    title: '咸鱼咸鱼',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '咸鱼的博客',
                items: [
                    { text: 'Github', link: '...' },
                    { text: '掘金', link: '...' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "第一篇", path: "/handbook/ConditionalTypes" },
                    { title: "第二篇", path: "/handbook/Generics" },
                ],
            }
        ]
    }
}

```
6.3、重启本地服务器，刷新页面有一些细节的改变，比如加载时的 loading 动画、以及支持切换暗黑模式：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34557112/1685925997102-321a59ca-38c4-4b2c-a650-a0b1e8315a68.png#averageHue=%23181818&clientId=u5c2a39b8-256c-4&from=paste&height=854&id=u596b93d0&originHeight=1495&originWidth=2880&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=43664&status=done&style=shadow&taskId=ud0bd81bc-08d3-4d29-b5bc-5ae339f4775&title=&width=1645.7142857142858)
到这里就完成了
7、添加文章信息
```html
---
title: 条件类型
author: 小雨写立可白
date: '2023-06-05'
---
```
8、设置语言
在config.js中配置
```html
module.exports = {
    //设置时间格式
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    // 引用主题 vuepress-theme-reco 
    theme: 'reco',
    title: '小雨写立可白',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '小雨写立可白的博客',
                items: [
                    { text: 'Github', link: '...' },
                    { text: '掘金', link: '...' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "第一篇", path: "/handbook/ConditionalTypes" },
                    { title: "第二篇", path: "/handbook/Generics" },
                ],
            }
        ]
    }
}

```
效果如下:
![image.png](https://cdn.nlark.com/yuque/0/2023/png/34557112/1685926616969-ae7b2e2d-4f9e-4e14-b9b7-d9868fa29d15.png#averageHue=%23f2f1ef&clientId=u5c2a39b8-256c-4&from=paste&height=26&id=u3cc99864&originHeight=50&originWidth=148&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=1764&status=done&style=shadow&taskId=u94e8ba5b-748a-46d4-a3b5-8da4fa57303&title=&width=78)
9、开启目录结构(可选)
在原本的主题里，我们发现每篇文章的目录结构出现在左侧:
而 vuepress-theme-reco 将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在了页面的右侧，如果你要全局开启，可在页面 config.js 里设置开启：
```html
 themeConfig: {
    subSidebar: 'auto'
  }
```
10、修改主题颜色，VuePress 基于 Vue，所以主题色用的是 Vue 的绿色，如果想修改颜色可如下步骤:
10.1、创建一个.vuepress/styles/palette.styl 文件，文件代码如下：
```html
$accentColor = #60ad80
```
更多的颜色修改参考 VuePress 的 [palette.styl](https://vuepress.vuejs.org/zh/config/#palette-styl)。



 
