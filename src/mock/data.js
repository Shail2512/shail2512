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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1NRGmcJpjLb6A_t0Ig0RnpgoFl9QHG_pK/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const internshipData = [
  {
    id: uuidv1(),
    img: 'Pilani.jpg',
    title: 'Research Intern at Birla Institute of Technology and Science (BITS), Pilani, Rajasthan, India (January 2020 - March 2020)',
    info: 'Project on "Slap Fingerprint Segmentation using Convolutional Autoencoders"',
    info2: 'Developed a novel approach which reduced 80% of the failure cases of exisiting studies. The research paper regarding the novel approach is ready to publish in a journal',
    url: '',
    repo: '' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pdpu.jpg',
    title: "Research Intern at Pandit Dindayal Petroleum University (PDPU), Gandhinagar, Gujarat, India (May 2019 - August 2019)",
    info: 'The comparative study on various techniques of dimensionality reduction viz. PCA, T-SNE, Autoencoders, and DBN',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },

];

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'speedwell.PNG',
    title: 'Responsive E-Commerce Website for Speedwell Cycle Industries',
    info: 'This responsive website is built using React JS. The material UI is used for adding styling to the components.',
    info2: '',
    url: 'https://www.speedwells.in',
    repo: 'https://github.com/Shail2512/speedwell', // if no repo, the button will not show up
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
];

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
