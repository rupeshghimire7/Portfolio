import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from './Hero';

/**
 * Small intersection observer hook to fade/slide items in on scroll.
 */
function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [options])
  return { ref, inView }
}


const timeline = [
  {
    year: 'Aug 2024-Present',
    title: "AI/ML Engineer - (R&D Team) — NSDevil",
    details:
      "Worked on improving AI models for Edu-Tech domain by training image-to-text systems that better understand content using efficient learning methods. Built and deployed scalable AI services for web and mobile platforms, ensuring reliable performance and automated workflows for continuous updates. Enhanced mobile AI experiences by enabling collaborative learning across devices and optimizing models to run efficiently on limited hardware.",    
      tags: ["Federated Learning", "Quantization", "Fine-tuning", "PEFT", "LoRA","Transformer architecture", "Sequence-to-sequence", "AI model development", "MLOps","System Design", "Scalable architecture", "Performance tuning", "Pipeline automation", "Model deployment", "Docker"],
  },
  {
    year: 'May 2024 - Aug 2024',
    title: 'AI Research Intern — NSDevil',
    details:
      "Optimized models for accurate, context-aware responses and guiding model selection through focused research analysis. Advanced audio-based learning with a high-performance classification system designed for seamless platform integration.",
      tags: ["Prompt Engineering", "Audio Classification", "STFT", "LogMel Features", "Custom Dataset Creation", "Data Augmentation", "Model Optimization", "Deep Learning", "OpenAI-API", "Literature Review"],
  },
  {
    year: 'Oct 2019 - Apr 2024',
    title: "B.E. Computer Engineering — TU, I.O.E. Paschimanchal",
    details:
      "Graduated with 75.05% aggregate. Studied core and advanced topics in AI, Computer Architecture, Digital Signal Analysis and Processing, Image Pattern Recognition, Engineering Mathematics, Probability and Statistics and Big Data, building a strong foundation for research and industry applications.",
tags: ["Artificial Intelligence", "Image Processing", "Pattern Recognition", "Digital Signal Processing", "Probability & Statistics", "Computer Architecture", "Software Engineering"],
  },
    {
    year: 'June 2023 - Feb 2024',
    title: "Data Science Mentor — Panacea Solution Pvt. Ltd.",
    details:
      "Provided Mentorship sessions for 9 months to 3 batches of students (nearly 50 students total) in a 3-months/60 hour session. Designed and tutored a well structured course using my AI/ML expertise to simplify complex concepts and help them build real projects in Python, Machine Learning, and introductory Deep Learning.",
tags: ["Python", "Data Visualization", "Data Wrangling", "Machine Learning", "Probability & Statistics", "ANN", "Pandas", "Numpy", "Scikit-Learn"],
  },
  {
    year: 'Jan 2023 - Jan 2024',
    title: "Microdegree: AI Fellowship — Fusemachines",
    details:
      "Completed hands-on assignments in Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing, gaining experience with Supervised and Unsupervised Learning, RNNs, CNNs, Transformers, and Language Models. Delivered group projects including Liver Cirrhosis Prediction, Sentiment Analysis using NepBERTa, Image/Video Culture Prediction with YOLO, and Nepali Next-Word Prediction using N-gram modeling, strengthening applied AI and research skills.",
    tags: ["Machine Learning", "Time Series Forecasting", "Reinforcement Learning", "Deep Learning", "Computer Vision", "Object Detection", "Segmentation", "Image Processing", "Natural Language Processing", "Transformers", "Language Models"]
  },
{
  year: 'May 2017 – May 2019',
  title: "High School – Science (STEM) — Nepal Mega College, Kathmandu, Nepal",
  details:
    "Graduated with GPA 3.85/4.0, focusing on core STEM subjects including Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation for advanced studies in engineering and technology.",
  tags: ["Physics", "Chemistry", "Mathematics", "Computer Science", "STEM Education"]
},
]

/**
 * Quick skills & tools preview chips for the home page.
 */
const skills = [
  // Machine Learning & AI
  'PyTorch',
  'TensorFlow',
  'Transformers',
  'HuggingFace',
  'Transformer Architectures',
  'PEFT/LoRA',
  'DPO',
  'RAG',
  'Knowledge Graphs',
  'LangChain',
  'LlamaIndex',

  // Research & Model Design
  'Federated Learning',
  'Model Quantization',
  'Custom Model Design',

  // Data & Experimentation
  'Data Augmentation',
  'STFT',
  'LogMel',
  'Evaluation Metrics',
  'Evidently AI',
  'Literature Review',

  // Backend & MLOps
  'FastAPI',
  'Django',
  'Docker',
  'Nginx',
  'MLflow',
  'DVC',
  'Prefect',

  // Data Science & Tools
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'Matplotlib',
  'Vector Databases',

  // Programming
  'Python',
  'C',
  'C++',
  'SQL'
];

/**
 * Featured projects preview (link to /projects for the full list).
 */
const featured = [
  {
    title: 'Gantavya - Landmark Recognition 2024',
    tech: 'YOLO, Transfer Learning, Django, React Native',
    blurb:
      'Developed a landmark recognition system for 15 landmark categories, achieving 97% accuracy with YOLOv8. Built end-to-end mobile app featuring image upload, prediction, map navigation, and JWT authentication.',
    img: '/Portfolio/assets/gantavya.png', // replace with your image path
    cta: {
      to: 'https://github.com/Gantavya-app/gantavya-backend',
      label: 'View on GitHub',
    },
  },
  {
    title: 'Nepali Sentiment Analysis 2023',
    tech: 'BERT, NLP, Flask API',
    blurb:
      'Preprocessed Nepali corpus with SpaCy/NLTK and fine-tuned NepBERTa for sentiment classification. Achieved ~76% accuracy and deployed as real-time API for Nepali text sentiment analysis.',
    img: '/Portfolio/assets/SentimentAnalysis.png', // replace with your image path
    cta: {
      to: 'https://github.com/rupeshghimire7/Nepali-Sentiment-Analysis-Using-NepBERTa',
      label: 'View on GitHub',
    },
  },
  {
    title: 'Book Recommender System',
    tech: 'Collaborative Filtering, Content Based Filtering, Recommender System, Python, Flask ',
    blurb:
      'Used public dataset from Kaggle on Books and cleaned it to build Recommender System on Books using Collaborative Filtering, Content Based Filtering and Hybrid Approaches.',
    img: '/Portfolio/assets/book_recommend.jpg', // replace with your image path
    cta: {
      to: 'https://github.com/rupeshghimire7/Book_Recommender_System',
      label: 'View on GitHub',
    },
  },
];


export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView()
  const { ref: tlRef, inView: tlInView } = useInView()
  const { ref: skillsRef, inView: skillsInView } = useInView()
  const { ref: featRef, inView: featInView } = useInView()

  return (
    <section className="container mx-auto px-4 py-10 sm:py-14">
      <Helmet>
        <title>Rupesh Ghimire</title>
        <meta
          name="description"
          content="Rupesh Ghimire — AI/ML Engineer & Researcher specializing in Trustworthy AI, Federated Learning, and efficient model optimization through compression and quantization. Experienced in designing production-ready ML pipelines and deploying scalable AI systems, currently contributing at North Star Developer's Village."
        />
      </Helmet>

      {/* HERO */}
      <div
        ref={heroRef}
        className={[
          'relative overflow-hidden rounded-3xl p-8 md:p-10 lg:p-12',
          'bg-gradient-to-br from-primary/10 via-violet/10 to-accent/10',
          'dark:from-primary/20 dark:via-violet/20 dark:to-accent/20',
          'ring-1 ring-slate-200 dark:ring-slate-700',
          'transition-all duration-700',
          heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        ].join(' ')}
      >
        <div className="grid lg:grid-cols-[auto,1fr] gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/Portfolio/assets/portrait.jpg"
                alt="Rupesh Ghimire"
                className="w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
              />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 animate-pulse" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
            <Hero/>
            </h1>
            <h2 className="text-1xl sm:text-1xl font-extrabold tracking-tight ml-3">
            - I design and build <span className="text-primary">advanced AI systems</span> that transform ideas into intelligent solutions.
            </h2>


            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-7xl">
            AI/ML Engineer and Researcher with over a year of experience developing and evaluating advanced machine learning models, including LLMs and multimodal systems. I am skilled in pretraining, instruction tuning, LoRA fine-tuning, DPO, and large-scale AI pipelines engineering. I have built high-performing models across image, audio, and text domains. I am passionate about exploring AI efficacy, security, and transparency through applied research and academic inquiry.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="px-4 py-2 rounded-xl bg-primary text-white shadow hover:shadow-md hover:scale-[1.02] transition"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-white/60 dark:hover:bg-slate-800/60 transition"
              >
                Contact
              </Link>
              <a
                href="/Portfolio/assets/Rupesh_Ghimire_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white text-slate-900 hover:opacity-90 transition"
              >
                Download CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href="https://github.com/rupeshghimire7"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rupesh-ghimire7"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                LinkedIn
              </a>
              {/* <a
                href="mailto:rupeshghimire17@gmail.com"
                className="underline underline-offset-4 hover:text-primary"
              >
                rupeshghimire17@gmail.com
              </a> */}
              <a
                href="https://medium.com/@rupeshghimire7"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mt-12 sm:mt-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Career & Research Timeline</h2>

        </div>

        <div
          ref={tlRef}
          className={[
            'relative',
            'transition-all duration-700',
            tlInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ].join(' ')}
        >
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-slate-300/40 to-violet/40 dark:from-primary/60 dark:via-slate-600/60 dark:to-violet/60" />

          <div className="space-y-8 sm:space-y-14">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className={[
                    'relative grid sm:grid-cols-2 gap-6 sm:gap-8 items-start',
                    isLeft ? 'sm:pr-10' : 'sm:pl-10',
                  ].join(' ')}
                >
                  {/* Dot */}
                  <div
                    className={[
                      'absolute top-3 sm:top-2 w-3 h-3 rounded-full ring-4 ring-white dark:ring-slate-900',
                      'bg-primary',
                      'left-[10px] sm:left-1/2 -translate-x-1/2',
                    ].join(' ')}
                  />
                  {/* Card */}
                  <div
                    className={[
                      'p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700',
                      'transition hover:shadow-md',
                      isLeft ? 'sm:col-start-1' : 'sm:col-start-2',
                    ].join(' ')}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-slate-600 dark:text-slate-300">{item.details}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer to alternate sides */}
                  <div className={isLeft ? 'hidden sm:block' : 'hidden sm:block'} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* SKILLS PREVIEW */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl font-bold mb-4">Core Competencies</h2>
        <div
          ref={skillsRef}
          className={[
            'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-white-500 dark:text-green-100',
            'transition-all duration-700',
            skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ].join(' ')}
        >
          {skills.map((s) => (
            <div
              key={s}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-center text-sm shadow-sm hover:shadow-md hover:scale-[1.01] transition"
            >
              {s}
            </div>
          ))}
        </div>
      </div>

  {/* FEATURED PROJECTS */}
<div className="mt-12 sm:mt-16">
  <div className="flex items-end justify-between mb-4">
    <h2 className="text-2xl font-bold">Selected Projects</h2>
  </div>

  <div
    ref={featRef}
    className={[
      'grid md:grid-cols-3 gap-6',
      'transition-all duration-700',
      featInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
    ].join(' ')}
  >
    {featured.map((p) => (
      <article
        key={p.title}
        className="p-5 rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm hover:shadow-md transition"
      >
        <div className="h-36 rounded-xl overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-slate-800">
          <img
            src={p.img}
            alt={p.title}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.tech}</p>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{p.blurb}</p>

        <a
          href={p.cta.to}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          {p.cta.label} →
        </a>
      </article>
    ))}
  </div>
</div>


      {/* CTA STRIP */}
      <div className="mt-14">
        <div className="rounded-2xl p-6 md:p-8 bg-slate-900 text-slate-600 dark:text-slate-300 dark:bg-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Open to research collaboration & MRes/PhD</h3>
              <p className="mt-1 text-slate-300">
                Interested in Trustworthy AI, Adversarial ML, Model Quantization and Cybersecurity ML.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="px-4 py-2 rounded-xl bg-white text-slate-900 hover:opacity-90 transition"
              >
                Contact me
              </Link>
              <a
                href="/Portfolio/assets/Rupesh_Ghimire_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white text-slate-900 hover:opacity-90 transition"
              >
                Download CV
              </a>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
