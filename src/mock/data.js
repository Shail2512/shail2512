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
  paragraphOne: 'Shail Raval is pursuing Masters in Computer Science at Stony Brook University (SUNY) with specialization on the domains of Artificial Intelligence which includes Computer Vision and Natural Language Processing. He worked for 1 year at Crest Data Systems on developing new features and fixing customer issues of Cloud Addons of Splunk for Amazon Web Services, Microsoft Azure and Google Cloud Platform. ',
  paragraphTwo: 'He completed his undergraduation at Vishwakarma Government Engineering College in Information Technology with CGPA - 8.82. He truly believes the fact that theoretical knowledge is incomplete without the practical experience. He has learned more by dealing with edge cases rather than learning from books.',
  paragraphThree: 'He had done freelancing work in making websites, applications, machine learning model and digital marketing. He spend his time in doing online courses, competitive coding, playing piano and doing wildlife photography',
  resume: 'https://drive.google.com/file/d/1NRGmcJpjLb6A_t0Ig0RnpgoFl9QHG_pK/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const internshipData = [
  {
    id: uuidv1(),
    img: 'hlab.PNG',
    title: 'Graduate Researcher at HLAB Stony Brook University, Stony Brook, New York, USA',
    date: 'August 2021 - Present',
    info: 'Working on preditction of Depression and Anxiety for Adolesccent from multi-wave longitudinal data. Created dataset for single and multitask predictions using MySQL and DLATK framework from clinical analysis.',
    info2: 'Developing custom stacked RNN using PyTorch for prediction of disorders in age 15 using age 3 to age 12 data.',
    url: 'https://hlab.cs.stonybrook.edu/',
    repo: '' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'crest.PNG',
    title: 'Software Development Engineer at Crest Data Systems, Ahmedabad, Gujarat, India',
    date: 'September 2020 - August 2021',
    info: 'Developed new features and fixed customer issues for Splunk Add-ons for AWS, Microsoft Azure and Google Cloud Platform such as manipulation of checkpoint files, removal of data duplication and BOTO library upgradation. Worked on building automatic functional and unit test cases for Jenkins and CircleCI pipelines.',
    info2: 'Performed integration of Crowdstrike data with Splunk Add-on for AWS for the input "SQS based S3" in 1 month.',
    url: 'https://www.crestdatasys.com/',
    repo: '' // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'crest.PNG',
    title: 'Software Development Intern at Crest Data Systems, Ahmedabad, Gujarat, India',
    date: 'July 2020 - September 2020',
    info: 'Developed 2 Splunk add-ons to get hands-on for data ingestion and "Search Processing Language" of Splunk .',
		info2: 'Learned to build automation test cases for Jenkins and CircleCI pipelines and understood the working of it.',
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
    title: 'Research Intern at AI/ML Lab Birla Institute of Technology and Science (BITS), Pilani, Rajasthan, India',
    info: 'Researched with Professor Kamlesh Tiwari on a project to develop a novel approach for slap fingerprint segmentation using convolutional autoencoders at AI/ML lab and also performed hand classification. Implemented concepts of image processing, segmentation and object detection using Opencv, Keras and Tensorflow.',
    info2: 'Achieved around 80\% reduction in failure cases using our approach compared to existing approaches.',
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
    img: 'video.PNG',
    title: 'First-Person Action Recognition in Videos',
    info: 'Extracted important image frames from the videos of JPL dataset which were labelled for 7 different activities. Implemented baseline model using pre-trained AlexNet with SVM classification and achieved accuracy of 38\%.',
    info2: 'Fine-Tuned pre-trained ResNet and added classification layer which resulted in the validation accuracy of 71\%. Performed feature extraction using temporal pooling to collect spatial features from videos, trained using fusion of AlexNet and VGG16 and acheived the maximum accuracy of 75\%.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'aspect.PNG',
    title: 'Aspect Based Document Similarity',
    info: 'Built dataset from Cord-19 by analysing similar aspects between 2 documents for multiclass multilabel classification.',
    info2: 'Implemented longformer for sequence classification of 1024, 2048, and 4096 tokens on the documents along with the concept of gradient accumulation and achieved the best f1 score of 0.79.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
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
