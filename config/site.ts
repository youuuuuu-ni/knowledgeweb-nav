export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "youuu",
  description: "C++ 底层、AI 前沿、语言出分与科学健美",
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
    title: "🇬🇧 雅思/托福/PTE 考证出分 (IELTS Focus)",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "IELTS Liz",
        desc: "雅思界的圣经，全科目满分攻略与详尽的题型拆解",
        link: "https://www.youtube.com/@ieltsliz"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "IELTS Simon",
        desc: "前任考官，写作 7.0+ 必备的逻辑框架与极简表达策略",
        link: "https://www.youtube.com/@ieltssimonofficial"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Fastrack IELTS",
        desc: "高效出分指南，适合短期冲刺与打磨口语细节",
        link: "https://www.youtube.com/@FastrackIELTS"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "IELTS Energy TV",
        desc: "Jessica 老师主讲，不仅是提分技巧，更是真实的英语思维",
        link: "https://www.youtube.com/@IELTSEnergyTV"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "E2 IELTS",
        desc: "全方位的备考直播与学术英语技巧，涵盖 PTE/TOEFL",
        link: "https://www.youtube.com/@E2IELTS"
      },
      {
        icon: "https://www.apeuni.com/favicon.ico",
        title: "猩际 PTE (Apeuni)",
        desc: "PTE 备考刷题神器，AI 智能打分，澳洲留学提分捷径",
        link: "https://www.apeuni.com/"
      }
    ]
  },
  {
    title: "🎧 高阶泛听：突破真实语速与长难逻辑",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "All-In Podcast",
        desc: "硅谷顶级大佬对谈，语速极快，训练在复杂对话中瞬时抓取主旨",
        link: "https://www.youtube.com/@allin"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Lex Fridman Podcast",
        desc: "硬核深度访谈，挑战长达 3 小时的科技与哲学逻辑输出",
        link: "https://www.youtube.com/@lexfridman"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Aussie English",
        desc: "提前适应悉尼语言环境，掌握澳洲口音、俚语与本土文化",
        link: "https://www.youtube.com/@AussieEnglishPodcast"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "The Economist",
        desc: "经济学人官方出品，学习正统高级词汇与国际政经逻辑",
        link: "https://www.youtube.com/@TheEconomist"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Vox",
        desc: "顶级数据可视化纪录片，用高级英语解释复杂世界的运作规律",
        link: "https://www.youtube.com/@Vox"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "English Speaking Success",
        desc: "Keith 老师教你如何像 Native Speaker 一样流利表达",
        link: "https://www.youtube.com/@EnglishSpeakingSuccess"
      }
    ]
  },
  {
    title: "💻 C++ 进阶、算法逻辑与硬核 CS",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "The Cherno",
        desc: "前 EA 引擎工程师，带你深入 C++ 内存管理与底层逻辑的极致频道",
        link: "https://www.youtube.com/@TheCherno"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "CppCon",
        desc: "C++ 开发者大会官方频道，追踪现代 C++ 的最高技术前沿",
        link: "https://www.youtube.com/@CppCon"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "freeCodeCamp.org",
        desc: "全球最大的全栈编程学习社区，涵盖 C++/Java/Python 全流程",
        link: "https://www.youtube.com/@freecodecamp"
      },
      {
        icon: "https://www.hello-algo.com/favicon.ico",
        title: "Hello 算法",
        desc: "动画图解数据结构与算法，C++ 实战派首选，夯实大二绩点",
        link: "https://www.hello-algo.com/"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Fireship",
        desc: "100秒带你快速看懂最新的开发工具与科技栈",
        link: "https://www.youtube.com/@Fireship"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "IBM Technology",
        desc: "资深专家图解计算机科学核心原理，从云计算到量子计算",
        link: "https://www.youtube.com/@IBMTechnology"
      }
    ]
  },
  {
    title: "🤖 AI 浪潮、大模型与前沿技术",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Andrej Karpathy",
        desc: "OpenAI/特斯拉 AI 核心，最透彻的神经网络与 LLM 硬核教程",
        link: "https://www.youtube.com/@AndrejKarpathy"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Hung-yi Lee (李宏毅)",
        desc: "台大教授，中文界机器学习与深度学习的王牌公开课",
        link: "https://www.youtube.com/@HungyiLeeNTU"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Two Minute Papers",
        desc: "两分钟透析 AI 论文，第一时间跟进图形学与神经网络突破",
        link: "https://www.youtube.com/@TwoMinutePapers"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "AI Explained",
        desc: "深度深度剖析大语言模型的最新基准测试与行业巨震",
        link: "https://www.youtube.com/@aiexplained-official"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Matt Wolfe",
        desc: "最快整合 AI 效率工具、大模型应用与科技行业趋势",
        link: "https://www.youtube.com/@mreflow"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "The AI Advantage",
        desc: "实用的 AI 提示词工程与生产力流工作法",
        link: "https://www.youtube.com/@aladvantage"
      }
    ]
  },
  {
    title: "🌍 科学通识、理财思维与生产力黑客",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Ali Abdaal",
        desc: "高效学习与时间管理的领军人物，探索更有意义的生产力",
        link: "https://www.youtube.com/@aliabdaal"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Thomas Frank",
        desc: "Notion 顶级专家，教你如何打造坚不可摧的数字大脑",
        link: "https://www.youtube.com/@Thomasfrank"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Veritasium",
        desc: "真理元素，极其震撼的物理与科学原理可视化纪录片",
        link: "https://www.youtube.com/@veritasium"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "The Plain Bagel",
        desc: "用通俗易懂的逻辑讲解投资、理财与复杂的经济学常识",
        link: "https://www.youtube.com/@ThePlainBagel"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Patrick Boyle",
        desc: "对冲基金经理视角，深度剖析量化金融与全球市场动态",
        link: "https://www.youtube.com/@PatrickBoyle"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Dan Koe",
        desc: "哲学与生产力的结合，探讨如何在信息时代建立个人系统",
        link: "https://www.youtube.com/@DanKoeTalks"
      }
    ]
  },
  {
    title: "🏋️ 科学健美、作息管理与机能维稳",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Renaissance Periodization",
        desc: "Dr. Mike 主讲，基于运动科学的增肌、碳水循环与疲劳管理巅峰频道",
        link: "https://www.youtube.com/@RenaissancePeriodization"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Jeff Nippard",
        desc: "自然健美大佬，引经据典讲解动作解剖学与最优化训练计划",
        link: "https://www.youtube.com/@JeffNippard"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Mind Pump Show",
        desc: "揭露健身行业谎言，深度探讨长期身体素质与荷尔蒙平衡",
        link: "https://www.youtube.com/@MindPumpShow"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Jeremy Ethier",
        desc: "解剖学级别的健身指导，针对 170 斤+ 体量的高质量训练与矫正动作",
        link: "https://www.youtube.com/@JeremyEthier"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Andrew Huberman",
        desc: "斯坦福神经科学家，从深度恢复到补剂协同的科学生活指南",
        link: "https://www.youtube.com/@hubermanlab"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "shuaisoserious",
        desc: "高产高质量的中文健身记录，传递自律与进化的生活态度",
        link: "https://www.youtube.com/@shuaisoserious"
      }
    ]
  },
  {
    title: "🛠️ 极客兵器库 (保留原版精华)",
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
        desc: "全球最大 AI 工具导航，发现最新效率神器",
        link: "https://www.toolify.ai/zh/"
      },
      {
        icon: "https://pythontutor.com/favicon.ico",
        title: "Python Tutor",
        desc: "代码运行可视化工具，一步步看清内存里变量的跳动",
        link: "https://pythontutor.com/"
      },
      {
        icon: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
        title: "Postman",
        desc: "老牌 API 开发和测试工具",
        link: "https://www.postman.com/"
      },
      {
        icon: "/icons/json-cn.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn"
      }
    ]
  }
]
