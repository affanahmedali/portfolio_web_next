import React from 'react'

const Skills_Section1 = () => {
  return (
    <div className="py-16 px-6 lg:px-24">
  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Skills</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div className="p-6 shadow-lg rounded-2xl border">
      <h3 className="text-xl font-semibold mb-3 text-blue-600">Languages & Tools</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Python</li>
        <li>JavaScript / TypeScript</li>
        <li>SQL</li>
        <li>Git & GitHub</li>
        <li>VS Code</li>
      </ul>
    </div>

    <div className="p-6 shadow-lg rounded-2xl border">
      <h3 className="text-xl font-semibold mb-3 text-green-600">Machine Learning & AI</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Scikit-learn</li>
        <li>Keras / PyTorch</li>
        <li>Pandas, Numpy, Matplotlib</li>
        <li>Computer Vision (YOLO, OpenCV)</li>
        <li>RAG & LLMs (OpenAI APIs)</li>
      </ul>
    </div>

    <div className="p-6 shadow-lg rounded-2xl border">
      <h3 className="text-xl font-semibold mb-3 text-purple-600">Data & Dev Tools</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>ETL Pipelines (Airflow, Pandas)</li>
        <li>Vector DBs (FAISS, Chroma)</li>
        <li>REST APIs / FastAPI</li>
        <li>AWS (S3, EC2)</li>
        <li>Docker (basic)</li>
      </ul>
    </div>

    <div className="p-6 shadow-lg rounded-2xl border">
      <h3 className="text-xl font-semibold mb-3 text-red-600">Web Development</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>MERN Stack</li>
        <li>Next.js / React</li>
        <li>HTML / CSS / Tailwind</li>
        <li>MongoDB / Firebase</li>
      </ul>
    </div>

    <div className="p-6 shadow-lg rounded-2xl border">
      <h3 className="text-xl font-semibold mb-3 text-yellow-600">Automation & Testing</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>pyATS (Cisco Automation)</li>
        <li>Selenium / Playwright</li>
        <li>Unit Testing (pytest, unittest)</li>
        <li>CI/CD Basics</li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Skills_Section1