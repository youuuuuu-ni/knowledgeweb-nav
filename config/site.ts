export const siteConfig = {
  name: "Ni Dingyou 的极客导航",
  description: "英语学习、C++ 编程与 AI 工具箱",
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
    title: "🇬🇧 英语学习 (IELTS Focus)",
    items: [
      {
        icon: "https://www.bbc.com/bbcx/favicon-16x16.png",
        title: "BBC Learning English",
        desc: "雅思听力泛听首选，地道英音素材库",
        link: "https://www.bbc.co.uk/learningenglish"
      },
      {
        icon: "https://youglish.com/images/logo.png",
        title: "YouGlish",
        desc: "在 YouTube 视频中搜索单词的真实发音",
        link: "https://youglish.com/"
      },
      {
        icon: "https://cdn.vocabulary.com/images/favicons/favicon-32x32-2frmtt.png",
        title: "Vocabulary.com",
        desc: "智能化词汇学习平台，攻克雅思高频词",
        link: "https://www.vocabulary.com/"
      },
      {
        icon: "https://enpuz.com/favicon.ico",
        title: "Enpuz",
        desc: "AI 英语句子语法分析工具，搞定长难句",
        link: "https://enpuz.com/"
      },
      {
        icon: "https://www.lingohut.com/html/lht/fb-icon-2-min.png",
        title: "LingoHut",
        desc: "分类词汇学习，配真人发音，纠正语调",
        link: "https://www.lingohut.com/"
      }
    ]
  },
  {
    title: "💻 C++ 与 算法逻辑",
    items: [
      {
        icon: "https://cppreference.com/favicon.ico",
        title: "C++ Reference",
        desc: "最权威的 C++ 标准库查询手册，深入底层逻辑",
        link: "https://en.cppreference.com/"
      },
      {
        icon: "https://www.hello-algo.com/favicon.ico",
        title: "Hello 算法",
        desc: "动画图解数据结构与算法，C++ 实战首选",
        link: "https://www.hello-algo.com/"
      },
      {
        icon: "https://leetcode.cn/favicon.ico",
        title: "力扣 LeetCode",
        desc: "每日一题，磨炼编程逻辑与面试技巧",
        link: "https://leetcode.cn/"
      },
      {
        icon: "https://visualgo.net/img/favicon.png",
        title: "VisuAlgo",
        desc: "数据结构和算法动态可视化，看透排序与树",
        link: "https://visualgo.net/"
      }
    ]
  },
  {
    title: "🤖 AI 工具箱",
    items: [
      {
        icon: "https://chatgpt.com/favicon.ico",
        title: "ChatGPT",
        desc: "全能 AI 助手，辅助写代码与润色英语作文",
        link: "https://chatgpt.com/"
      },
      {
        icon: "https://www.toolify.ai/favicon.ico",
        title: "Toolify.ai",
        desc: "全球最大 AI 工具导航，发现最新效率神器",
        link: "https://www.toolify.ai/zh/"
      },
      {
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        title: "Vercel",
        desc: "你的网站托管平台，支持代码自动更新",
        link: "https://vercel.com/dashboard"
      }
    ]
  },
  {
    title: "💪 健身与百科",
    items: [
      {
        icon: "https://exrx.net/favicon.ico",
        title: "ExRx.net",
        desc: "最专业的动作库，查看肌肉受力与训练要点",
        link: "https://exrx.net/"
      },
      {
        icon: "https://www.bodybuilding.com/favicon.ico",
        title: "Bodybuilding.com",
        desc: "全球健身社区，查阅训练计划与补剂知识",
        link: "https://www.bodybuilding.com/"
      }
    ]
  }
]
