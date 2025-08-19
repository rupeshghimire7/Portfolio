import React from "react";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I’m <span className="font-semibold">Rupesh Ghimire</span>, a Computer Engineer 
          passionate about building <strong>trustworthy, efficient, and impactful AI systems</strong>.  
          My journey blends <span className="italic">research, engineering, and innovation  </span> 
          to bridge the gap between theory and real-world applications.
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-8 shadow-lg backdrop-blur mb-12">
        <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
          With <strong>2+ years of professional experience</strong> where as an 
          AI/ML Engineer and Researcher, I’ve worked on <strong>large language models, 
          multimodal systems, federated learning, and model quantization</strong>.  
          I thrive on creating resource-efficient AI pipelines, advancing trustworthy ML, 
          and contributing to <strong>R&D projects in robotics, NLP, and multimodal AI</strong>.
        </p>
      </div>

      {/* Grid: Education & Experience */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Education */}
        <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-6 shadow-md backdrop-blur">
          <h2 className="text-xl font-bold mb-4">🎓 Education</h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>
              <strong>B.E. Computer Engineering</strong> — Tribhuvan University  
              <br /> Graduated with <strong>75.05%</strong>  
            </li>
            <li>
              <strong>AI Fellowship Scholar</strong> — Fusemachines  
              <br /> Microdegree in <em>ML, DL, NLP, RL, Transformers</em>
            </li>
            <li>
              <strong>High School – Science (STEM) — Nepal Mega College</strong> 
              <br/>Graduated with GPA 3.85/4.0, focusing on core STEM subjects  
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-6 shadow-md backdrop-blur">
          <h2 className="text-xl font-bold mb-4">💼 Experience</h2>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>
              <strong>AI/ML Engineer</strong> — North Star Developer’s Village  
              <br /> Built <em>Company specific AI system design, RAG Projects, Custom Transformer Models, MLOps automation Pipeline, Deployment Workflows. Performed Pretraining, Instruction and PEFT finetune and RL (DPO) on LLMs</em>
            </li>
            <li>
              <strong>AI Research Intern</strong> — North Star Developer’s Village  
              <br /> Worked on <em> Literature Review, Prompt Engineering, and Custom Audio Classication Model</em>
            </li>
            <li>
              <strong>Data Science Mentor </strong> — Panacea Solutions Pvt. Ltd.
              <br /> Guiding students with <em>fundamentals of Machine Learning and Deep Learning</em>
            </li>
          </ul>
        </div>
      </div>

      {/* Research Interests */}
      

      <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 
                dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 
                rounded-2xl p-8 mb-12 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">🔬 Research Interests</h2>
        <p className="text-center text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed">
          My curiosity lies at the <strong>intersection of AI and Security</strong>, where I explore 
          <strong> Trustworthy AI, Adversarial ML, System AI, Model Quantization, Multimodal Learning, NLP, 
          and Robotics & Automation</strong>.  
        </p>
        <p className="text-center text-slate-700 dark:text-slate-200 max-w-3xl mx-auto mt-4 leading-relaxed">
          I am motivated by building AI systems that are not only <em>powerful</em>, 
          but also <em>reliable, transparent, and accessible</em> — advancing both innovation 
          and reliability in real-world applications.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">🤝 Let’s Collaborate</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          I’m eager to work with <strong>researchers, professors, and industry leaders </strong> 
           to advance AI innovation through ensuring safety, reliability, accountability and robustness, providing real-world impact.
        </p>
        <a
          href="/Portfolio/assets/Rupesh_Ghimire_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-block px-3 py-2 rounded-md bg-primary text-white text-sm"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
