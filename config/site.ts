export const siteConfig = {
  name: "youuu",
  description: "计算机核心技术、留学出分与硬核生活控制台",
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
    title: "🎧 雅思冲刺与高频泛听环境",
    items: [
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Aussie English",
        desc: "提前适应悉尼口音与高语速日常对话",
        link: "https://www.youtube.com/@AussieEnglishPodcast"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "IELTS Simon",
        desc: "前考官的神级雅思写作与保分教程",
        link: "https://www.youtube.com/@IELTSimon"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Fastrack IELTS",
        desc: "极速提分策略与实战演练",
        link: "https://www.youtube.com/@FastrackIELTS"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Speaking Success",
        desc: "专攻口语流利度与考官好感度",
        link: "https://www.youtube.com/@EnglishSpeakingSuccess"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "E2 IELTS",
        desc: "雅思考试全面解析与备考技巧",
        link: "https://www.youtube.com/@E2IELTS"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=bbc.co.uk&sz=128",
        title: "BBC Learning English",
        desc: "权威英式新闻语感与听力泛听",
        link: "https://www.youtube.com/@bbclearningenglish"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "AccurateEnglish",
        desc: "专业级发音纠正与语调训练",
        link: "https://www.youtube.com/@AccurateEnglish"
      }
    ]
  },
  {
    title: "💻 计算机基础、AI与前沿底层",
    items: [
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Andrej Karpathy",
        desc: "前 OpenAI 神级大模型底层原理解析",
        link: "https://www.youtube.com/@AndrejKarpathy"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "李宏毅 (Hung-yi Lee)",
        desc: "台大机器学习最强中文公开课",
        link: "https://www.youtube.com/@HungyiLeeNTU"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "CppCon",
        desc: "全球顶级 C++ 开发者大会技术分享",
        link: "https://www.youtube.com/@CppCon"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "The Cherno",
        desc: "硬核 C++ 教学与游戏引擎开发",
        link: "https://www.youtube.com/@TheCherno"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=freecodecamp.org&sz=128",
        title: "freeCodeCamp",
        desc: "全球最大的开源免费编程学习库",
        link: "https://www.youtube.com/@freecodecamp"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Fireship",
        desc: "极速高能的程序员技术栈科普",
        link: "https://www.youtube.com/@Fireship"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Two Minute Papers",
        desc: "前沿 AI 论文与图形学进展速递",
        link: "https://www.youtube.com/@TwoMinutePapers"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "ML Street Talk",
        desc: "深入硬核的顶级 AI 专家圆桌访谈",
        link: "https://www.youtube.com/@MachineLearningStreetTalk"
      }
    ]
  },
  {
    title: "🏋️‍♂️ 科学健美与形体塑造",
    items: [
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "RP Strength",
        desc: "博士级科学增肌与硬核备赛理论",
        link: "https://www.youtube.com/@RenaissancePeriodization"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Jeremy Ethier",
        desc: "基于解剖学文献的最佳动作生物力学",
        link: "https://www.youtube.com/@JeremyEthier"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Jeff Nippard",
        desc: "用最新科学研究优化自然健身计划",
        link: "https://www.youtube.com/@JeffNippard"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Mind Pump Show",
        desc: "打破健身迷思的顶尖私教访谈播客",
        link: "https://www.youtube.com/@MindPumpShow"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Adam Yu",
        desc: "优质中文圈健美理论与肌肉解析",
        link: "https://www.youtube.com/@adamyu"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "shuaisoserious",
        desc: "力量训练与减脂/碳水循环饮食实操",
        link: "https://www.youtube.com/@shuaisoserious"
      }
    ]
  },
  {
    title: "📈 深度认知、商业与播客",
    items: [
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Lex Fridman",
        desc: "对话全球顶级科学家、黑客与思想家",
        link: "https://www.youtube.com/@lexfridman"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "All-In Podcast",
        desc: "硅谷风投大佬的科技与宏观经济圆桌",
        link: "https://www.youtube.com/@AllIn"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Ali Abdaal",
        desc: "剑桥学霸的高效学习与生产力系统",
        link: "https://www.youtube.com/@aliabdaal"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "半拿铁",
        desc: "极具深度的商业史与互联网硬核科普",
        link: "https://www.youtube.com/@bannatie"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Stanford GSB",
        desc: "斯坦福商学院顶级商业与管理演讲",
        link: "https://www.youtube.com/@StanfordGSB"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Veritasium",
        desc: "探究万物本质的高质量物理科学科普",
        link: "https://www.youtube.com/@veritasium"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=economist.com&sz=128",
        title: "The Economist",
        desc: "全球宏观经济、政治与商业深度分析",
        link: "https://www.youtube.com/@TheEconomist"
      },
      {
        icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        title: "Big Think",
        desc: "顶尖思想家探讨改变世界的宏大概念",
        link: "https://www.youtube.com/@BigThink"
      }
    ]
  }
]
