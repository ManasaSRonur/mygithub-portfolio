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

// Navigation bar
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close the menu when any link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navLinksContainer = document.querySelector('.nav-links');
        navLinksContainer.classList.remove('active');
    });
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all functionality
  initNavScroll();
  initProjectToggles();
  initProjectCards();
});

// Navigation scroll behavior
function initNavScroll() {
  window.addEventListener('scroll', () => {
      const nav = document.querySelector('#navbar');
      if (nav) {
          if (window.scrollY > 50) {
              nav.style.background = 'rgba(0, 0, 0, 0.95)';
          } else {
              nav.style.background = 'rgba(0, 0, 0, 0.85)';
          }
      }
  });
}

// Project toggle functionality - Updated version with multiple item support
function initProjectToggles() {
  const projectToggles = document.querySelectorAll('.project-toggle');
  const MAX_OPEN_ITEMS = 3;
  
  projectToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          
          const details = toggle.nextElementSibling;
          const icon = toggle.querySelector('.toggle-icon');
          
          if (!details || !icon) {
              console.error('Required elements not found');
              return;
          }
          
          const isExpanding = !details.classList.contains('active');
          
          if (isExpanding) {
              // Check number of currently open items
              const openItems = document.querySelectorAll('.project-details.active');
              
              // If we're at the maximum, close the oldest one
              if (openItems.length >= MAX_OPEN_ITEMS) {
                  const oldestItem = openItems[0];
                  oldestItem.classList.remove('active');
                  const oldestIcon = oldestItem.previousElementSibling.querySelector('.toggle-icon');
                  if (oldestIcon) {
                      oldestIcon.textContent = '+';
                  }
              }
          }
          
          // Toggle current project details
          details.classList.toggle('active');
          icon.textContent = isExpanding ? '−' : '+';
          
          // Optional: Smooth scroll to expanded content
          if (isExpanding) {
              setTimeout(() => {
                  details.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'nearest',
                      inline: 'nearest'
                  });
              }, 100);
          }
      });
  });
}

// Project cards functionality
function initProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
      card.addEventListener('click', (e) => {
          const githubLink = card.querySelector('.project-link');
          if (!e.target.closest('.project-link') && githubLink) {
              window.open(githubLink.href, '_blank');
          }
      });
  });
}

// Smooth scroll for navigation links
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
    // Example data for certifications (can be replaced with API or other data sources)
    const certifications = [
        {
            title: "Solution Architect Associate",
            issuer: "AWS",
            earned: "September 2021",
            image: "images/AWS.png",
            alt: "AWS Certified: Solution Architect"
        },
        {
            title: "Power BI Data Analyst",
            issuer: "Microsoft",
            earned: "November 2021",
            image: "images/pbi.png",
            alt: "Microsoft Certified: Power BI"
        }
       
    ];

    // Target the certifications grid container
    const certificationsGrid = document.querySelector('.certifications-grid');

    if (certificationsGrid) {
        // Clear any existing content
        certificationsGrid.innerHTML = '';

        // Dynamically generate certification cards
        certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'certification-card';

            // Add inner HTML for the card
            card.innerHTML = `
                <div class="certification-image">
                    <img src="${cert.image}" alt="${cert.alt}" style="width: 100px; height: 100px; object-fit: contain;">
                </div>
                <h4>${cert.title}</h4>
                <p>Issued by ${cert.issuer}</p> 
                <p> Earned: ${cert.earned}</p>
            `;

            // Append the card to the grid
            certificationsGrid.appendChild(card);
        });
    }
});


