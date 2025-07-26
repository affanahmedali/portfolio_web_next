import React from 'react'

const AboutSection = () => {
  return (
    <div className="py-16 px-6 lg:px-24">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
    <p className="text-lg text-gray-700 dark:text-white leading-relaxed">
      I'm <span className="font-semibold text-blue-600">Affan Ahmed Ali</span>, a Computer Systems Engineer with a passion for building smart, scalable, and impactful tech solutions. My journey spans across 
      <span className="font-medium"> machine learning</span>, <span className="font-medium">data engineering</span>, and <span className="font-medium">automation</span> — backed by hands-on experience in both startup and enterprise environments.
    </p>

    <p className="text-lg text-gray-700 dark:text-white leading-relaxed mt-6">
      From developing GenAI assistants and vision-based speed detection systems, to automating test infrastructures for network devices using <span className="font-medium">pyATS</span>, I enjoy solving real-world problems with code. I’ve also built full-stack web apps including a password manager, a Patreon clone, and Netflix-style UI projects.
    </p>

    <p className="text-lg text-gray-700 dark:text-white leading-relaxed mt-6">
      I thrive in environments where I can blend AI with engineering — whether it’s by deploying intelligent pipelines, working with <span className="font-medium">vector databases</span>, or integrating <span className="font-medium">LLMs</span> into modern apps. Currently, I’m working as an Automation Engineer at <span className="font-semibold">Systellex</span>, continuing to grow my skills in scalable systems and QA infrastructure.
    </p>

    <p className="text-lg text-gray-700 dark:text-white leading-relaxed mt-6">
      Outside of work, I’m always exploring the next big idea — whether it’s building an AI-powered tab manager or diving deeper into the intersection of AI and software engineering.
    </p>
  </div>
</div>

  )
}

export default AboutSection