import React from 'react'
import { Helmet } from 'react-helmet-async'

// Featured Projects
const featured = [
  {
    id: 1,
    title: 'Gantavya – Landmark Recognition',
    desc: 'YOLOv8-based system achieving 97% accuracy on 15 landmark classes. Includes Django backend and React Native mobile app with image upload, map navigation, and JWT authentication.',
    repo: 'https://github.com/Gantavya-app/gantavya-backend',
  },
  {
    id: 2,
    title: 'Nepali Sentiment Analysis (NepBERTa)',
    desc: 'Fine-tuned NepBERTa on a large Nepali corpus for sentiment classification. Achieved 76% accuracy and served via Flask for real-time predictions.',
    repo: 'https://github.com/rupeshghimire7/Nepali-Sentiment-Analysis-Using-NepBERTa',
  },
  {
    id: 3,
    title: 'Summarizer & QnA',
    desc: 'Web app for abstractive summarization and question answering over uploaded text articles. Built with transformer-based models and Flask backend.',
    repo: 'https://github.com/rupeshghimire7/Summarizer-And-QnA',
  },
  {
    id: 4,
    title: 'Book Recommender System',
    desc: 'Hybrid recommendation engine combining collaborative filtering with popularity-based ranking for personalized book suggestions.',
    repo: 'https://github.com/rupeshghimire7/Book_Recommender_System',
  },
  {
    id: 5,
    title: 'Text Processing & Modeling',
    desc: 'Pipeline for scraping, preprocessing, and modeling text. Includes topic modeling (LDA), named entity recognition, and evaluation pipelines.',
    repo: 'https://github.com/rupeshghimire7/Text-Processing-Modeling',
  },
  {
    id: 6,
    title: 'Liver Cirrhosis Prediction',
    desc: 'Medical ML project using Random Forest, SVM, and logistic regression to predict cirrhosis progression from patient data.',
    repo: 'https://github.com/rupeshghimire7/Liver_Cirrhosis_Prediction',
  },
]

// Other Notable Projects (short mentions)
const additional = [
  { title: 'BrainMRI Tumor Segmentation', desc: 'U-Net for brain tumor segmentation.', repo: 'https://github.com/rupeshghimire7/BrainMRI_TumorSegmentation' },
  { title: 'Nepali Next-Word Prediction', desc: 'N-gram based language model for word prediction.', repo: 'https://github.com/rupeshghimire7/Nepali-Next-Word-Prediction' },
  { title: 'OCR of Docs', desc: 'OCR pipeline for structured survey forms.', repo: 'https://github.com/rupeshghimire7/OCR-of-docs' },
  { title: 'GANs', desc: 'Implementations of GAN architectures (DCGAN, CycleGAN, etc).', repo: 'https://github.com/rupeshghimire7/GANs' },
  { title: 'SP500 Time Series Forecasting', desc: 'Random Forest + LSTM hybrid forecasting model.', repo: 'https://github.com/rupeshghimire7/SP500_TimeSeries_Forecasting' },
  { title: 'Deep Learning', desc: 'Experiments with CNNs, RNNs, Seq2Seq (with/without attention).', repo: 'https://github.com/rupeshghimire7/Deep_Learning' },
  { title: 'Machine Translation', desc: 'Seq2Seq English→French translation system.', repo: 'https://github.com/rupeshghimire7/MachineTranslation' },
  { title: 'Transformer Notebook', desc: 'PyTorch implementation of the Transformer architecture.', repo: 'https://github.com/rupeshghimire7/Transformer-Pytorch-Notebook' },
]

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Helmet>
        <title>Projects — Rupesh</title>
        <meta
          name="description"
          content="Featured projects and research works: NepBERTa, Gantavya, Summarizer, and more."
        />
      </Helmet>

      {/* Featured Projects */}
      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featured.map((p) => (
          <article
            key={p.id}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Code →
            </a>
          </article>
        ))}
      </div>

      {/* Other Notable Projects */}
      <h2 className="text-2xl font-bold mb-6">Other Notable Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additional.map((p, i) => (
          <article
            key={i}
            className="p-5 rounded-xl bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-medium text-md">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-primary hover:underline underline-offset-4"
            >
              Code →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
