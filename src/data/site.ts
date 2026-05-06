export const site = {
  name: "Jiacheng Xue",
  nameZh: "薛嘉诚",
  title: "Master student, ME, XJTU",
  location: "Xi'an, China",
  emailPrimary: "jiachengxue2001@gmail.com",
  emailAlt: "xuejiacheng2022@163.com",
  links: {
    github: "https://github.com/jcXue001",
    scholar: "https://scholar.google.com/citations?user=oS-BHzcAAAAJ&hl=en",
    xjtu: "https://en.xjtu.edu.cn/",
    mec: "https://mec.xjtu.edu.cn/",
    advisor: "https://gr.xjtu.edu.cn/en/web/lingling.wu/home",
  },
  bio:
    "My work focuses on mechanical metamaterials, robot development based on STM32 microcontrollers, and online monitoring for 3D printing.",
  researchInterests: [
    {
      title: "Robotics",
      desc: "Design and control of robotic arms and adaptive robotic systems for manufacturing, inspection, and human-robot interaction.",
    },
    {
      title: "AI-based metamaterials design",
      desc: "Inverse design of mechanical metamaterials driven by artificial intelligence, especially under multiple functional and environmental constraints.",
    },
    {
      title: "AI-assisted 3D printing",
      desc: "Closed-loop control and online monitoring for additive manufacturing, with an emphasis on defect detection and real-time correction.",
    },
  ],
  internships: [
    {
      org: "DJI (Structural Engineer Intern)",
      orgUrl: "https://www.dji.com/cn",
      when: "Oct 2025 – Jan 2026",
      bullets: ["Structural engineering internship at DJI."],
    },
    {
      org: "DJI (RoboMaster Department)",
      orgUrl: "https://www.dji.com/cn",
      when: "May 2024",
      bullets: [
        "Supported robotics research and technical documentation.",
        "Improved communication skills through interviews with robot developers from different teams.",
      ],
    },
    {
      org: "Phibotnacci (Motor Control)",
      orgUrl: "https://www.phibotnacci.com/home",
      when: "July 2024",
      bullets: [
        "Applied Field-Oriented Control (FOC) to improve motor performance in robotic systems.",
        "Explored integration between FOC and real-time feedback for more precise robotic motion.",
      ],
    },
  ],
  news: [
    {
      when: "July 2025",
      text: "My paper was published in Extreme Mechanics Letters.",
      href: "/publications/",
    },
    {
      when: "June 2025",
      text: "My submission to Materials & Design was rejected, but the reviewer feedback was useful and will be incorporated into the next revision.",
    },
    {
      when: "May 2025",
      text: "I scored 98/120 on the TOEFL through self-study: Reading 29, Listening 22, Speaking 22, Writing 25.",
    },
    {
      when: "February 2025",
      text: "I submitted a research paper to Materials & Design on generative neural networks.",
    },
  ],
  publications: [
    {
      title:
        "Inverse Design of Mechanical Metamaterials Balancing Manufacturability and Compactness: A Case Study on Lattice Cells",
      venue: "Extreme Mechanics Letters",
      when: "July 25, 2025 (online)",
      href: "https://doi.org/10.1016/j.eml.2025.102395",
      role: "Primary Researcher and Lead Author",
    },
    {
      title:
        "Machine Learning-Based Online Monitoring and Closed-Loop Controlling for 3D Printing of Continuous Fiber-Reinforced Composites",
      venue: "Additive Manufacturing Frontiers",
      when: "March 18, 2025",
      href: "https://doi.org/10.1016/j.amf.2025.200196",
      role: "Hardware and Software Engineering; Literature Writing (co-first author)",
    },
    {
      title: "3D-Printed Metamaterials with Versatile Functionalities",
      venue: "Additive Manufacturing Frontiers",
      when: "September 22, 2023",
      href: "https://doi.org/10.1016/j.cjmeam.2023.100091",
      role: "Literature Search and Writing",
    },
    {
      title: "Mechanical Metamaterials for Handwritten Digits Recognition",
      venue: "Advanced Science",
      when: "December 25, 2023",
      href: "https://doi.org/10.1002/advs.202308137",
      role: "Machine Learning Development",
    },
    {
      title:
        "Genetic Algorithm-Enabled Mechanical Metamaterials for Vibration Isolation with Different Payloads",
      venue: "Journal of Materiomics",
      when: "November 23, 2024",
      href: "https://doi.org/10.1016/j.jmat.2024.100944",
      role: "Hardware Development",
    },
  ],
  projects: [
    {
      title: "Inverse Design for Metamaterials",
      desc: "Inverse design methodologies leveraging machine learning to create diverse, high-accuracy structures with tailored properties.",
      image: "/images/inverse_design.jpg",
    },
    {
      title: "Mobile Robotics Development",
      desc: "Mobile robotics research and development, including an omnidirectional chassis and robot arm for mobile 3D printing.",
      image: "/images/fixed_research.jpg",
    },
    {
      title: "Online Monitoring of 3D Printing",
      desc: "Mask-RCNN + OctoPrint integration for real-time fracture detection and parameter monitoring in 3D printing.",
      image: "/images/online_monitoring.jpg",
    },
  ],
};
