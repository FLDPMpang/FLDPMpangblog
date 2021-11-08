// 插件配置
module.exports = [
  //  // 本地插件
  //  [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //    color: '#11a8cd', // 爱心颜色，默认随机色
  //     excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  //  }],

  // 'vuepress-plugin-baidu-autopush', // 百度自动推送

  [
    "one-click-copy",
    {
      // 代码块复制按钮
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // String or Array
      copyMessage: "复制成功", // default is 'Copy successfully and then paste
      // it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    "vuepress-plugin-comment",
    {
      choosen: "gitalk",
      options: {
        clientID: "a233dc97bd36a943ce2f",
        clientSecret: "15502732c536e5d629d72c111e78fe522e2a1546",
        owner: "FLDPMpang",
        repo: "FLDPMpangblog",
        admin: ["FLDPMpang"],
        distractionFreeMode: false,
      },
    },
  ],
  [
    "sitemap",
    {
      hostname: "https://fldpmpang.com",
    },
  ],
  [
    "@vuepress/google-analytics",
    {
      ga: "G-RNMS7M4PZG", // UA-00000000-0
    },
  ],
  [
    "vuepress-plugin-mathjax",
    {
      target: "svg",
      macros: {
        "*": "\\times",
      },
    },
  ],
  [
    "vuepress-plugin-zooming", // 放大图片
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  [
    "@vuepress/last-updated", // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require("dayjs"); // https://day.js.org/
        return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
      },
    },
  ],
];
