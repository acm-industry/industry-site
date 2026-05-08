export const roles = ['All', 'Leadership', 'Advisors', 'Developers', 'Outreach']

export type TeamMember = {
  name: string
  group: string[]
  role: string
  img: string
  linkedin: string
  project?: string
}

export const years = ['2025-26', '2024-25'] as const
export type Year = typeof years[number]

export const rolesByYear: Record<Year, string[]> = {
  '2025-26': ['All', 'Leadership', 'Advisors', 'Developers', 'Outreach'],
  '2024-25': ['All', 'Leadership', 'Developers'],
}

export const teamMembersByYear: Record<Year, TeamMember[]> = {
  '2025-26': [
    {
      name: 'Aman Desai',
      group: ['Advisors', 'Developers'],
      role: 'Founder & Advisor',
      img: '/team/aman.JPG',
      linkedin: 'https://www.linkedin.com/in/amanpdesai/',
    },
    {
      name: 'Vala Bahrami',
      group: ['Advisors', 'Outreach'],
      role: 'Founder & Advisor',
      img: '/team/vala.JPG',
      linkedin: 'https://www.linkedin.com/in/va1a/',
    },
    {
      name: 'Akhil Gorla',
      group: ['Advisors', 'Developers'],
      role: 'Founder & Advisor',
      img: '/team/akhil.JPG',
      linkedin: 'https://www.linkedin.com/in/akhil-gorla/',
    },
    {
      name: 'Sachit Madaan',
      group: ['Leadership', 'Outreach', 'Developers'],
      role: 'Co-President',
      img: '/team/sachit.JPG',
      linkedin: 'https://www.linkedin.com/in/sachit-madaan-239235282/',
      project: 'turing'
    },
    {
      name: 'Aditya Iyer',
      group: ['Advisors', 'Developers'],
      role: 'Advisor',
      img: '/team/aditya.jpeg',
      linkedin: 'https://www.linkedin.com/in/aditya-a-iyer/',
      project: 'probability-management'
    },
    {
      name: 'Sanjana Bhupathi',
      group: ['Leadership', 'Marketing'],
      role: 'Co-President',
      img: '/team/sanjana.jpg',
      linkedin: 'https://www.linkedin.com/in/sanjanabhupathi/',
      project: 'unwrap'
    },
    {
      name: 'Simon Yan',
      group: ['Leadership', 'Developers'],
      role: 'Project Executive',
      img: '/team/simon.jpg',
      linkedin: 'https://www.linkedin.com/in/simon-yan/',
      project: 'rtx'
    },
    {
      name: 'Aarush Narang',
      group: ['Leadership','Developers'],
      role: 'Co-President',
      img: '/team/arush.JPG',
      linkedin: 'https://www.linkedin.com/in/aarush-narang/',
      project: 'rtx'
    },
    {
      name: 'Kenneth Tan',
      group: ['Leadership', 'Developers'],
      role: 'Project Executive',
      img: '/team/kenneth.JPG',
      linkedin: 'https://www.linkedin.com/in/kenneth-i-tan/',
      project: 'rtx'
    },
    {
      name: 'Varsha Narasiman',
      group: ['Leadership', 'Developers'],
      role: 'Project Executive',
      img: '/team/varsha.png',
      linkedin: 'https://www.linkedin.com/in/varsha-narasiman/',
      project: 'unwrap'
    },
    {
      name: 'Yash Chanchani',
      group: ['Leadership', 'Developers'],
      role: 'Project Executive',
      img: '/team/yash.JPG',
      linkedin: 'https://www.linkedin.com/in/yash-chanchani-3392a4216/',
      project: 'turing'
    },
    {
      name: 'Jay Udall',
      group: ['Leadership', 'Developers'],
      role: 'Project Executive',
      img: '/team/jay.png',
      linkedin: 'https://www.linkedin.com/in/jayden-udall-926716253/',
      project: 'unwrap'
    },
    {
      name: 'Christian Cabacungan',
      group: ['Leadership', 'Developers', 'Outreach'],
      role: 'Project Executive',
      img: '/team/christian.png',
      linkedin: 'https://www.linkedin.com/in/christiancabacungan',
      project: 'iv-outfitters'
    },
    {
      name: 'Katie Pyo',
      group: ['Leadership', 'Outreach'],
      role: 'Technical Director',
      img: '/team/katie.JPG',
      linkedin: 'https://www.linkedin.com/in/katie-pyo-5b478b318/',
      project: 'iv-outfitters'
    },
    {
      name: 'Jayden Tan',
      group: ['Developers'],
      role: 'Full Stack Engineer',
      img: '/team/jayden.jpeg',
      linkedin: 'https://www.linkedin.com/in/jaydentan1206/',
      project: 'unwrap'
    },
    {
      name: 'Sarah Hong',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/sarah.jpg',
      linkedin: 'https://www.linkedin.com/in/s-arahhong/',
      project: 'iv-outfitters'
    },
    {
      name: 'Ian Sequeira',
      group: ['Leadership', 'Developers'],
      role: 'Project Executive',
      img: '/team/ian.jpeg',
      linkedin: 'https://www.linkedin.com/in/ian-sequ7',
      project: 'turing'
    },
    {
      name: 'Julianna Flores',
      group: ['Leadership', 'Outreach'],
      role: 'Director of Marketing',
      img: '/team/julianna.jpg',
      linkedin: 'https://www.linkedin.com/in/juliannaflores/',
    },
    {
      name: 'Bobby Chavez',
      group: ['Leadership', 'Developers'],
      role: 'Technical Director',
      img: '/team/bobby.jpeg',
      linkedin: 'https://www.linkedin.com/in/bobby-chavez',
      project: 'rtx'
    },
    {
      name: 'Rohan Nihalani',
      group: ['Leadership', 'Developers'],
      role: 'Technical Director',
      img: '/team/rohan.JPG',
      linkedin: 'https://www.linkedin.com/in/rohannihalani',
      project: 'iv-outfitters'
    },
    {
      name: 'Mason Le',
      group: ['Outreach'],
      role: 'Marketing Intern',
      img: '/team/mason.png',
      linkedin: 'https://www.linkedin.com/in/mason-le-68b75a274/',
    },
    {
      name: 'Joshua Lee',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/joshua-lee.JPG',
      linkedin: 'https://www.linkedin.com/in/joshlee1215/',
      project: 'unwrap'
    },
    {
      name: 'Ana Carthikeyan',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/ana.jpg',
      linkedin: 'https://www.linkedin.com/in/anandika-carthikeyan',
      project: 'iv-outfitters'
    },
    {
      name: 'Red Macasa',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/red-macasa.jpeg',
      linkedin: 'https://www.linkedin.com/in/ramon-red-macasa-78632a360/',
      project: 'iv-outfitters'
    },
    {
      name: 'Shahin Sheikh',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/shahin.jpg',
      linkedin: 'https://www.linkedin.com/in/shahin-sheikh-711104275/',
      project: 'turing'
    },
    {
      name: 'Tanuj Siripurapu',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/tanuj.JPG',
      linkedin: 'https://www.linkedin.com/in/tanuj-siripurapu/',
      project: 'rtx'
    },
    {
      name: 'Don Tran',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/don.JPG',
      linkedin: 'https://www.linkedin.com/in/donqltran/',
      project: 'rtx'
    },
    {
      name: 'Prajwal Vandana',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/prajwal.jpg',
      linkedin: 'https://www.linkedin.com/in/prajwalvandana',
      project: 'rtx'
    },
    {
      name: 'Rohan Iyer',
      group: ['Developers'],
      role: 'AI/ML Engineer',
      img: '/team/rohan-iyer.jpeg',
      linkedin: 'https://www.linkedin.com/in/rohaniyer06/',
      project: 'turing'
    },
    {
      name: 'Akarsh Shetty',
      group: ['Developers'],
      role: 'Full Stack Engineer',
      img: '/team/akarsh.jpg',
      linkedin: 'https://www.linkedin.com/in/akarsh-shetty-ab328a213/',
      project: 'unwrap'
    },
    {
      name: 'Saqif Ayaan Sudheer',
      group: ['Leadership', 'Developers'],
      role: 'Project Executive',
      img: '/team/saqif.jpg',
      linkedin: 'https://www.linkedin.com/in/saqif-ayaan-sudheer-2a5b673a9/',
      project: 'turing'
    }
  ],
  '2024-25': [
    {
      name: 'Aman Desai',
      group: ['Leadership'],
      role: 'President',
      img: '/team/aman.JPG',
      linkedin: 'https://www.linkedin.com/in/amanpdesai/',
    },
    {
      name: 'Akhil Gorla',
      group: ['Leadership'],
      role: 'Technical Director',
      img: '/team/akhil.JPG',
      linkedin: 'https://www.linkedin.com/in/akhil-gorla/',
      project: 'finsight'
    },
    {
      name: 'Vala Bahrami',
      group: ['Leadership'],
      role: 'Vice President',
      img: '/team/vala.JPG',
      linkedin: 'https://www.linkedin.com/in/va1a/',
    },
    {
      name: 'Sachit Madaan',
      group: ['Leadership'],
      role: 'Director of Outreach',
      img: '/team/sachit.JPG',
      linkedin: 'https://www.linkedin.com/in/sachit-madaan-239235282/',
      project: 'data-constr-innov'
    },
    {
      name: 'Aditya Iyer',
      group: ['Leadership'],
      role: 'Project Executive',
      img: '/team/aditya.jpeg',
      linkedin: 'https://www.linkedin.com/in/aditya-a-iyer/',
      project: 'probability-management'
    },
    {
      name: 'Hami Hoshiyama',
      group: ['Developers'],
      role: 'AI/ML Engineer',
      img: '/team/hami.jpg',
      linkedin: 'https://www.linkedin.com/in/hami-hoshiyama',
      project: 'finsight'
    },
    {
      name: 'Xuanye Wang',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/xuanye.JPG',
      linkedin: 'https://www.linkedin.com/in/xuanye-wang-9387bb297/',
      project: 'probability-management'
    },
    {
      name: 'Natasha Joshi',
      group: ['Developers'],
      role: 'AI/ML Engineer',
      img: '/team/natasha.png',
      linkedin: 'https://www.linkedin.com/in/natasha-joshi-89818234a/',
      project: 'paskin'
    },
    {
      name: 'Samprita Chakraborty',
      group: ['Developers'],
      role: 'Full Stack Engineer',
      img: '/team/samprita.jpeg',
      linkedin: 'https://www.linkedin.com/in/samprita-c',
      project: 'paskin'
    },
    {
      name: 'Akul Singh',
      group: ['Developers'],
      role: 'AI/ML Engineer',
      img: '/team/akul.jpeg',
      linkedin: 'https://www.linkedin.com/in/akulsingh108',
      project: 'paskin'
    },
    {
      name: 'Junhyung Yoon',
      group: ['Developers'],
      role: 'AI/ML Engineer',
      img: '/team/junhyung.jpg',
      linkedin: 'https://www.linkedin.com/in/junhyungyoon/',
      project: 'paskin'
    },
    {
      name: 'Shuang Li',
      group: ['Developers'],
      role: 'Full Stack Engineer',
      img: '/team/shuang.jpg',
      linkedin: 'https://www.linkedin.com/in/shuang-li-12717a2a2/',
      project: 'data-constr-innov'
    },
    {
      name: 'Jayden Tan',
      group: ['Developers'],
      role: 'Full Stack Engineer',
      img: '/team/jayden.jpeg',
      linkedin: 'https://www.linkedin.com/in/jaydentan1206/',
      project: 'data-constr-innov'
    },
    {
      name: 'Joshua Gray',
      group: ['Developers'],
      role: 'Full Stack Engineer',
      img: '/team/joshua.jpeg',
      linkedin: 'https://www.linkedin.com/in/joshuaegray/',
      project: 'data-constr-innov'
    },
    {
      name: 'Aarush Narang',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/arush.JPG',
      linkedin: 'https://www.linkedin.com/in/aarush-narang/',
      project: 'finsight'
    },
    {
      name: 'Kenneth Tan',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/kenneth.JPG',
      linkedin: 'https://www.linkedin.com/in/kenneth-i-tan/',
      project: 'finsight'
    },
    {
      name: 'Simon Yan',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/simon.jpg',
      linkedin: 'https://www.linkedin.com/in/simon-yan/',
      project: 'finsight'
    },
    {
      name: 'Srinandha Murugesan',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/srinandha.PNG',
      linkedin: 'https://www.linkedin.com/in/srinandham/',
      project: 'finsight'
    },
    {
      name: 'Christian Cabacungan',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/christian.png',
      linkedin: 'https://www.linkedin.com/in/christiancabacungan',
      project: 'finsight'
    },
    {
      name: 'Katie Pyo',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/katie.JPG',
      linkedin: 'https://www.linkedin.com/in/katie-pyo-5b478b318/',
      project: 'finsight'
    },
    {
      name: 'Yash Chanchani',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/yash.JPG',
      linkedin: 'https://www.linkedin.com/in/yash-chanchani-3392a4216/',
      project: 'finsight'
    },
    {
      name: 'Jay Udall',
      group: ['Developers'],
      role: 'Software Engineer',
      img: '/team/jay.png',
      linkedin: 'https://www.linkedin.com/in/jayden-udall-926716253/',
      project: 'probability-management'
    },
  ],
}

export const teamMembers = teamMembersByYear['2025-26']
