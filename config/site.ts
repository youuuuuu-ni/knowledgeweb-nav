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
    title: "🇬🇧 雅思冲刺与学术出分 (Target 6.5-7.5)",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "IELTS Liz",
        desc: "雅思备考界祖师奶，极度详尽的各科提分技巧与题型拆解",
        link: "https://www.youtube.com/@ieltsliz"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "IELTS Simon",
        desc: "前雅思考官，写作 7.0+ 必备的逻辑框架与极简表达法",
        link: "https://www.youtube.com/@ieltssimonofficial"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Fastrack IELTS",
        desc: "高效出分指南，适合打磨应试技巧与短期冲刺",
        link: "https://www.youtube.com/@FastrackIELTS"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "IELTS Daily",
        desc: "真实的雅思口语模拟与考官打分点评",
        link: "https://www.youtube.com/@IELTSDaily"
      },
      {
        icon: "https://www.apeuni.com/favicon.ico",
        title: "猩际 PTE (Apeuni)",
        desc: "PTE 备考刷题神器，AI 智能打分，留学热门提分通道",
        link: "https://www.apeuni.com/"
      },
      {
        icon: "https://kmf.com/favicon.ico",
        title: "KMF 考满分",
        desc: "托福、GRE 在线刷题与 TPO 模考权威平台",
        link: "https://www.kmf.com/"
      }
    ]
  },
  {
    title: "🎧 真实语速泛听 (训练长难逻辑与抓取主旨)",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "All-In Podcast",
        desc: "硅谷大佬的多人商业对谈，语速极快，训练快速抓取核心主旨的神器",
        link: "https://www.youtube.com/@allin"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Lex Fridman Podcast",
        desc: "硬核科技长篇访谈，常邀请 AI、物理、商业界顶尖学者",
        link: "https://www.youtube.com/@lexfridman"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "The Economist",
        desc: "经济学人官方频道，标准正统的高级学术英语与国际视野",
        link: "https://www.youtube.com/@TheEconomist"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Aussie English",
        desc: "提前适应澳洲俚语、口音与文化，为赴悉尼生活做准备",
        link: "https://www.youtube.com/@AussieEnglishPodcast"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "English with Lucy",
        desc: "纯正英音教学，涵盖高级词汇与地道日常表达",
        link: "https://www.youtube.com/@EnglishwithLucy"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "AccurateEnglish",
        desc: "专业的美式发音纠正与高级口语连读技巧",
        link: "https://www.youtube.com/@AccurateEnglish"
      }
    ]
  },
  {
    title: "💻 C++ 底层架构与算法基础",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "The Cherno",
        desc: "前 EA 游戏引擎工程师，用极致硬核的方式带你吃透 C++ 内存与指针",
        link: "https://www.youtube.com/@TheCherno"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "CppCon",
        desc: "C++ 开发者大会官方频道，追踪现代 C++ 的最新前沿特性",
        link: "https://www.youtube.com/@CppCon"
      },
      {
        icon: "https://www.hello-algo.com/favicon.ico",
        title: "Hello 算法",
        desc: "动画图解数据结构与算法，支持 C++/Java/Python",
        link: "https://www.hello-algo.com/"
      },
      {
        icon: "https://visualgo.net/img/favicon.png",
        title: "VisuAlgo",
        desc: "数据结构动态可视化，直观透视树、图和排序算法的运行过程",
        link: "https://visualgo.net/"
      },
      {
        icon: "https://leetcode.cn/favicon.ico",
        title: "力扣 LeetCode",
        desc: "每日一题，磨炼核心算法逻辑与大厂笔试技巧",
        link: "https://leetcode.cn/"
      },
      {
        icon: "https://cppreference.com/favicon.ico",
        title: "C++ Reference",
        desc: "最权威的 C++ 标准库查询手册",
        link: "https://en.cppreference.com/"
      }
    ]
  },
  {
    title: "🤖 AI 探索与计算机科学前沿",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Andrej Karpathy",
        desc: "前 OpenAI/特斯拉 AI 核心大佬，最通俗易懂的神经网络与大模型硬核教程",
        link: "https://www.youtube.com/@AndrejKarpathy"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Hung-yi Lee (李宏毅)",
        desc: "台大教授，中文互联网最强悍、最幽默的机器学习与深度学习公开课",
        link: "https://www.youtube.com/@HungyiLeeNTU"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Two Minute Papers",
        desc: "两分钟看懂最新 AI 论文与图形学前沿技术突破",
        link: "https://www.youtube.com/@TwoMinutePapers"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "AI Explained",
        desc: "深度剖析大语言模型最新进展与 AI 行业深度新闻",
        link: "https://www.youtube.com/@aiexplained-official"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Latent Space",
        desc: "极客向的 AI 播客，探讨模型构建与提示词工程",
        link: "https://www.youtube.com/@LatentSpacePod"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "IBM Technology",
        desc: "图解复杂计算机原理、量子计算与企业级 AI 架构",
        link: "https://www.youtube.com/@IBMTechnology"
      }
    ]
  },
  {
    title: "🌍 科学通识、商业与生产力黑客",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Ali Abdaal",
        desc: "剑桥医生转型的高效学习法与时间管理大师",
        link: "https://www.youtube.com/@aliabdaal"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Thomas Frank",
        desc: "Notion 大神，专注打造个人数字大脑与学习效率提升",
        link: "https://www.youtube.com/@Thomasfrank"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "MIT OpenCourseWare",
        desc: "麻省理工公开课，探索硬核计算机科学与高等数学原貌",
        link: "https://www.youtube.com/@mitocw"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Veritasium",
        desc: "真理元素，极其精美的硬核物理与科学科普纪录片",
        link: "https://www.youtube.com/@veritasium"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "CrashCourse",
        desc: "高质量速成课，涵盖计算机科学、解剖学到世界历史",
        link: "https://www.youtube.com/@crashcourse"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Vox",
        desc: "精美的数据可视化纪录片，用高级词汇解释复杂社会与科学运作规律",
        link: "https://www.youtube.com/@Vox"
      }
    ]
  },
  {
    title: "🏋️ 科学健美与机能维稳",
    items: [
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Renaissance Periodization",
        desc: "Dr. Mike 主讲，基于运动科学的超一流增肌、代谢与疲劳管理指南",
        link: "https://www.youtube.com/@RenaissancePeriodization"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Jeff Nippard",
        desc: "自然健美大佬，引经据典讲解动作解剖学与最优化训练容量",
        link: "https://www.youtube.com/@JeffNippard"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Mind Pump Show",
        desc: "深度健身播客，探讨补剂、荷尔蒙与长效训练周期",
        link: "https://www.youtube.com/@MindPumpShow"
      },
      {
        icon: "https://www.youtube.com/favicon.ico",
        title: "Jeremy Ethier",
        desc: "注重动作细节、代偿避免与体态矫正的解剖学健身指导",
        link: "https://www.youtube.com/@JeremyEthier"
      },
      {
        icon: "https://cronometer.com/favicon.ico",
        title: "Cronometer",
        desc: "精准饮食计算器，追踪碳水循环与鱼油、维生素等微量元素吸收",
        link: "https://cronometer.com/"
      },
      {
        icon: "https://exrx.net/favicon.ico",
        title: "ExRx.net",
        desc: "骨灰级运动机能学动作库，查阅肌肉发力角度与训练解剖",
        link: "https://exrx.net/"
      }
    ]
  },
  {
    title: "🛠️ 常用开发与效能工具 (保留区)",
    items: [
      {
        icon: "https://chatgpt.com/favicon.ico",
        title: "ChatGPT",
        desc: "全能 AI
