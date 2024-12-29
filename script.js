// Experience data
const experienceData = {
    caterpillar: {
        title: "Autonomy Engineer",
        period: "Feb 2021 - Sep 2023",
        points: [
            "Developed Generative AI-based tool for equipment performance simulation",
            "Deployed Ensemble Predictive Analytics model for equipment failure prediction",
            "Created Reinforcement Learning models optimizing mining operations",
            "Designed embedded Power BI reports for VisionLink application"
        ]
    },
    dxc: {
        title: "Data Architect",
        period: "May 2016 - Feb 2021",
        points: [
            "Integrated stock and order data to create predictive data warehouse",
            "Developed CO2 evaluation metrics for production monitoring",
            "Created and maintained global sales data warehouse",
            "Led cloud migration initiatives to Azure"
        ]
    },
    techmahindra: {
        title: "BI Developer",
        period: "Apr 2012 - May 2016",
        points: [
            "Built comprehensive data warehouse and marts for banking systems",
            "Created Cognos reports and dashboards for financial analysis",
            "Performed extensive data validation and testing",
            "Managed code migration and production support"
        ]
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation scroll behavior
    initNavScroll();
    
    // Initialize project toggles
    initProjectToggles();
});

// Navigation scroll behavior
function initNavScroll() {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('#navbar');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(0, 0, 0, 0.95)'; // Updated to match black theme
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.85)'; // Updated to match black theme
        }
    });
}

// Project toggle functionality
function initProjectToggles() {
    const projectToggles = document.querySelectorAll('.project-toggle');
    
    projectToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const details = toggle.nextElementSibling;
            const icon = toggle.querySelector('.toggle-icon');
            
            // Close all other project details
            document.querySelectorAll('.project-details.active').forEach(detail => {
                if (detail !== details) {
                    detail.classList.remove('active');
                    detail.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
                }
            });
            
            // Toggle current project details
            details.classList.toggle('active');
            icon.textContent = details.classList.contains('active') ? '−' : '+';
        });
    });
}

// Optional: Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Find the GitHub link within the clicked card
            const githubLink = card.querySelector('.project-link');
            
            // Only navigate if we clicked outside of the GitHub link
            // (to prevent double navigation)
            if (!e.target.closest('.project-link') && githubLink) {
                window.open(githubLink.href, '_blank');
            }
        });
    });
});

import React from 'react';
import { 
  Brain, 
  Database, 
  Cloud, 
  GitBranch, 
  Settings, 
  BarChart,
  Network,
  Bot,
  Cpu,
  LineChart,
  TreeDeciduous,
  Workflow,
  MessageSquare,
  Zap,
  Microscope,
  Layers
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Machine Learning",
      icon: <Brain className="w-8 h-8 mb-2" />,
      items: [
        "Linear/Logistic Regression",
        "Decision Trees",
        "Random Forests",
        "Principal Component Analysis",
        "Recommendation Systems"
      ]
    },
    {
      category: "Neural Networks & GenAI",
      icon: <Network className="w-8 h-8 mb-2" />,
      items: [
        "Neural Networks",
        "LSTM & GRU",
        "Transformers",
        "GANs",
        "VAEs"
      ]
    },
    {
      category: "Data Engineering",
      icon: <Database className="w-8 h-8 mb-2" />,
      items: [
        "Data Modeling",
        "Data Warehousing",
        "ETL",
        "Data Governance",
        "Data Integration"
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="w-8 h-8 mb-2" />,
      items: [
        "Cloud Computing",
        "Performance Optimization",
        "Version Control",
        "Infrastructure Management"
      ]
    },
    {
      category: "Analytics & Testing",
      icon: <BarChart className="w-8 h-8 mb-2" />,
      items: [
        "Hypothesis Testing",
        "A/B Testing",
        "Exploratory Data Analysis",
        "Data Visualization"
      ]
    },
    {
      category: "Specialized Skills",
      icon: <Zap className="w-8 h-8 mb-2" />,
      items: [
        "Sustainable Computing",
        "Automation",
        "Requirement Analysis",
        "Process Optimization"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold text-center mb-4">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center p-2 bg-gray-50 rounded hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;