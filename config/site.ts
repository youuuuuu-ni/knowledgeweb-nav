export const siteConfig = {
  name: "youuu",
  description: "全栈开发、留学备考与硬核生活指南",
  mainNav: [],
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  }
}

export interface NavLink {
  icon: string
  title: string
  desc: string
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "🇬🇧 留学与语言出分 (IELTS/PTE/GRE)",
    items: [
      {
        icon: "https://www.bbc.com/bbcx/favicon-16x16.png",
        title: "BBC Learning English",
        desc: "雅思听力泛听首选，地道英音素材库与跟读练习",
        link: "https://www.bbc.co.uk/learningenglish"
      },
      {
        icon: "https://www.apeuni.com/favicon.ico",
        title: "猩际 PTE (Apeuni)",
        desc: "PTE 备考神器，AI 智能打分，澳洲留学热门提分通道",
        link: "https://www.apeuni.com/"
      },
      {
        icon: "https://kmf.com/favicon.ico",
        title: "KMF 考满分",
        desc: "托福、GRE 在线刷题与 TPO 模考权威平台",
        link: "https://www.kmf.com/"
      },
      {
        icon: "https://cdn.vocabulary.com/images/favicons/favicon-32x32-2frmtt.png",
        title: "Vocabulary.com",
        desc: "智能化词汇学习平台，攻克雅思与 GRE 核心高频词",
        link: "https://www.vocabulary.com/"
      },
      {
        icon: "https://youglish.com/images/logo.png",
        title: "YouGlish",
        desc: "在 YouTube 真实语境中搜索单词发音，纠正口语",
        link: "https://youglish.com/"
      }
    ]
  },
  {
    title: "💻 数据结构与底层逻辑",
    items: [
      {
        icon: "https://www.hello-algo.com/favicon.ico",
        title: "Hello 算法",
        desc: "动画图解数据结构与算法，支持 C++/Java/Python，极度新手友好",
        link: "https://www.hello-algo.com/"
      },
      {
        icon: "https://visualgo.net/img/favicon.png",
        title: "VisuAlgo",
        desc: "数据结构动态可视化，直观透视树、图和排序算法",
        link: "https://visualgo.net/"
      },
      {
        icon: "https://leetcode.cn/favicon.ico",
        title: "力扣 LeetCode",
        desc: "每日一题，磨炼核心算法逻辑与大厂面试技巧",
        link: "https://leetcode.cn/"
      },
      {
        icon: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
        title: "GeeksforGeeks",
        desc: "全球最大的计算机科学大百科，算法解析极其详尽",
        link: "https://www.geeksforgeeks.org/"
      }
    ]
  },
  {
    title: "👨‍💻 编程语言储备 (C++/Java/Python)",
    items: [
      {
        icon: "https://cppreference.com/favicon.ico",
        title: "C++ Reference",
        desc: "最权威的 C++ 标准库查询手册，吃透内存管理与指针",
        link: "https://en.cppreference.com/"
      },
      {
        icon: "https://pythontutor.com/favicon.ico",
        title: "Python Tutor",
        desc: "代码运行过程可视化工具，一步步看懂内存里的变量变化",
        link: "https://pythontutor.com/"
      },
      {
        icon: "https://spring.io/favicon.ico",
        title: "Spring Framework",
        desc: "Java 企业级开发核心框架官方文档，后端进阶必读",
        link: "https://spring.io/"
      },
      {
        icon: "https://c.runoob.com/favicon.ico",
        title: "菜鸟工具合集",
        desc: "支持多种语言的在线编译器，随时随地测试代码片段",
        link: "https://c.runoob.com/"
      }
    ]
  },
  {
    title: "🤖 AI 与效率工具箱",
    items: [
      {
        icon: "https://chatgpt.com/favicon.ico",
        title: "ChatGPT",
        desc: "全能 AI 导师，辅助 Debug、解释算法与润色学术英语",
        link: "https://chatgpt.com/"
      },
      {
        icon: "https://www.toolify.ai/favicon.ico",
        title: "Toolify.ai",
        desc: "全球最大 AI 工具导航，发现营销、数据分析最新神器",
        link: "https://www.toolify.ai/zh/"
      },
      {
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        title: "Vercel",
        desc: "网站托管控制台，管理你的个人云端资产",
        link: "https://vercel.com/dashboard"
      }
    ]
  },
  {
    title: "🔋 极客生活与硬体维稳",
    items: [
      {
        icon: "https://cronometer.com/favicon.ico",
        title: "Cronometer",
        desc: "极度精准的饮食计算器，追踪碳水循环、蛋白质及各类微量补剂吸收",
        link: "https://cronometer.com/"
      },
      {
        icon: "https://exrx.net/favicon.ico",
        title: "ExRx.net",
        desc: "骨灰级运动机能学动作库，查阅肌肉发力角度与训练解剖学",
        link: "https://exrx.net/"
      },
      {
        icon: "https://sleepopolis.com/wp-content/uploads/2023/03/sleep-calculator-icon.png",
        title: "Sleep Calculator",
        desc: "睡眠周期倒推工具，科学保障高质量的神经恢复与增肌作息",
        link: "https://sleepopolis.com/calculators/sleep/"
      },
      {
        icon: "https://incidecoder.com/favicon.ico",
        title: "INCIdecoder",
        desc: "硬核护肤品成分透视镜，秒查洗护产品的控油与致痘风险",
        link: "https://incidecoder.com/"
      }
    ]
  }
]
