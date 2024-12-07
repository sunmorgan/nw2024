import React from 'react';
import { ExternalLink, Linkedin, FileText, Github } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-12">
      {/* Greeting */}
      <h1 className="text-4xl font-bold">
        Hi <span className="inline-block animate-[wave_1.5s_infinite]">👋</span> I'm Morgan!
      </h1>

      {/* Location Box */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-2">
        <div className="flex items-start gap-2">
          <span>📍</span>
          <div>
            <span className="text-gray-600"> Based in</span>{" "}
            <span className="font-medium">Toronto</span>
          </div>
        </div>
      </div>

      {/* Professional Info */}
      <div className="space-y-6">
        <p className="text-lg">
          I'm a software engineer intern at{" "}
          <a href="https://www.ericsson.com/en" className="text-blue-600 hover:underline">
            Ericsson
          </a>{" "}
        </p>

        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <span>🎓</span> cs + math @ uottawa
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/sunmorgan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1e7YmkHeYY57eJxdWaMiKSQARB6QC2DnK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-green-600 transition-colors"
        >
          <FileText className="w-6 h-6" />
          <span className="sr-only">Resume</span>
        </a>
        <a
          href="https://github.com/sunmorgan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600 transition-colors"
        >
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
