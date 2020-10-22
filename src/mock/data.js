import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Shail Raval', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpeg',
  paragraphOne: 'I work as a software development engineer at Crest Data System where I develop softwares related to Big Data and Distributed Database Management Systems. ',
  paragraphTwo: 'I have completed my undergraduation at Vishwakarma Government Engineering College in Information Technology with CGPA - 8.82. I truly believe the fact that theoretical knowledge is incomplete without the practical experience. I have learned more by dealing with edge cases rather than learning from books.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1NRGmcJpjLb6A_t0Ig0RnpgoFl9QHG_pK/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const internshipData = [
  {
    id: uuidv1(),
    img: 'crest.PNG',
    title: 'Software Development Engineer at Crest Data Systems, Ahmedabad, Gujarat, India',
    date: 'September 2020 - Present',
    info: 'Developing softwares in the domain of big data analysis and distributed database management system',
    info2: 'Working on the cloud project utilizing concepts of splunk, python and terraform which deals with AWS, GCP and Azure',
    url: 'https://www.crestdatasys.com/',
    repo: '' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'crest.PNG',
    title: 'Software Development Intern at Crest Data Systems, Ahmedabad, Gujarat, India',
    date: 'July 2020 - September 2020',
    info: 'Trained on python, linux and splunk to develop softwares in the domain of big data analysis and distributed database management system',
    info2: '',
    url: 'https://www.crestdatasys.com/',
    repo: '' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'briskweb.PNG',
    title: 'Freelancer by the name "Briskweb"',
    date: 'April 2020 - July 2020',
    info: 'Developed website and cross-platform applications for businesses to help them grow online with the tools of digital marketing.',
    info2: '',
    url: 'https://www.briskweb.in',
    repo: '' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Pilani.jpg',
    date: 'January 2020 - March 2020',
    title: 'Research Intern at Birla Institute of Technology and Science (BITS), Pilani, Rajasthan, India',
    info: 'Worked in AI/ML lab on the project "Slap Fingerprint Segmentation using Convolutional Autoencoders" where I implemented concepts of image processing, segmentation and object detection using opencv, keras and tensorflow',
    info2: 'Developed a novel approach which reduced 80% of the failure cases of exisiting studies. The research paper regarding the novel approach is ready to publish in a journal',
    url: 'https://aiml-lab.github.io/',
    repo: '' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pdpu.jpg',
    title: "Research Intern at Pandit Dindayal Petroleum University (PDPU), Gandhinagar, Gujarat, India",
    date: 'May 2019 - August 2019',
    info: 'The comparative study on various techniques of dimensionality reduction viz. PCA, T-SNE, Autoencoders, and DBN was done',
    info2: 'I also built neural network using C++',
    url: 'https://www.pdpu.ac.in/',
    repo: '', // if no repo, the button will not show up
  },

];

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'product.png',
    title: 'Product Recommendation System',
    info: 'Implemented Bidirectional LSTM for recommending products based on the user`s purchase history.',
    info2: 'Achieved 70% accuracy in recommending next product and 80% accuracy in recommending type of product.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pd.jpg',
    title: "Early Detection of Parkinson's Disease using Machine Learning and Deep Learning Technqiues",
    info: 'Phase 1 : Clinical Diagnosis focusing on four major symptoms viz. Tremor, Bradykinesia, Rigidity, and Change in Voice. Various Machine Learning approaches along with the ensemble approaches are implemented for the early diagnosis.',
    info2: 'Phase 2 : Classification with the help of Medical Images viz. MRI, SPECT, and fMRI for the early diagnosis of the disease',
    // url: '',
    repo: 'https://github.com/Shail2512/Early-Detection-of-PD-using-SPECT', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ibis.jpg',
    title: 'Indian Birds Identification System',
    info: 'The platform for identification of birds using qualitative data and Images',
    info2: 'Two stack AlexNet Network is used for the classification of the birds though images and NLTK library is used for finding through qualitative data.',
    // url: '',
    repo: 'https://github.com/Meet3698/IBIS', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'codegenital.PNG',
    title: 'Codegenital',
    info: 'The platform for the competitive coding, projects and startups',
    info2: 'Modules like online coding with compilation and chat app are developed.',
    url: 'http://codegenital.herokuapp.com',
    repo: 'https://github.com/Meet3698/CodeGenital', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'roads.PNG',
    title: 'Road Grievances Management System (Marg Sahayak)',
    info: 'Developed and deployed a project(Website and Android App) for Roads and Building Department of Gujarat State to register civilians` complaints regarding road grievances directly to respective government officers.',
    info2: 'Secured second rank in Smart Gujarat for New India Hackathon where I built web portal for the government officers using React JS and Node JS',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// Research Paper DATA
export const publicationsData = [
  {
    id: uuidv1(),
    img: 'ieee.PNG',
    title: 'A Comparative Study on early detection of Parkinson`s Disease using Machine Learning Techniques',
    info: 'Published at 4th International Conference on Trends in Electronics and Informatics (ICOEI 2020)}',
    info2: '',
    url: 'https://ieeexplore.ieee.org/document/9142956',
    repo: '', // if no repo, the button will not show up
  },
]
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'raval.shail1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'instagram',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shail-raval-6a513b139/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Shail2512',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
