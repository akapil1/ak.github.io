document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

   // Toggle navigation menu visibility
   hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Show or hide nav-links
    hamburgerMenu.classList.toggle("open"); // Change hamburger icon state
});
    // Automatically show nav-links for 5 seconds on page load
    navLinks.classList.add("active");
    setTimeout(() => {
        navLinks.classList.remove("active");
    }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    const skillContainers = document.querySelectorAll(".skills-container",".exposure-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% visible
    );

    skillContainers.forEach((container) => observer.observe(container));
});

// JavaScript to handle scroll-triggered animation with consistency
document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector(".skills-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillsSection.classList.add("animate"); // Add the animation class
                } else {
                    skillsSection.classList.remove("animate"); // Remove it when out of view
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(skillsSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector(".skills-section");
    const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links
    const navBarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillsSection.classList.add("animate"); // Add animation when in view
                } else {
                    skillsSection.classList.remove("animate"); // Reset animation when out of view
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(skillsSection);

    // Smooth scrolling with offset for navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionTop = targetSection.offsetTop; // Top position of the section
                const scrollOffset = sectionTop - navBarHeight; // Adjust for navbar height

                // Scroll to the target section with offset
                window.scrollTo({
                    top: scrollOffset,
                    behavior: "smooth",
                });

                // Manually trigger the fade-in animation for the skills section
                if (targetId === "skills") {
                    setTimeout(() => {
                        skillsSection.classList.add("animate");
                    }, 300); // Delay to ensure smooth transition
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const exposureSection = document.querySelector(".exposure-section");

    // Create Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    exposureSection.classList.add("fade-in"); // Add fade-in class
                } else {
                    exposureSection.classList.remove("fade-in"); // Remove fade-in class
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    // Observe the exposure section
    observer.observe(exposureSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const details = {
      "writing-coach": {
        title: "Writing Coach",
        date: "July, 2023 - Present",
        company: "Arizona State University",
        description: [
          "Assisted more than 500 students in improving writing skills and grades.",
          "Spearheaded discussions and played a pivotal role in the AI writing tools workshop.",
          "Organized bi-weekly seminars on writing techniques, research methodologies, and citation standards.",
          "Received positive feedback for explaining complex concepts clearly to students, peers, and faculty."
        ]
      },
      "marketing-designer": {
        title: "Marketing Designer Intern",
        date: "May - August, 2024",
        company: "DineLocal",
        description: [
          "Collaborated with restaurant owners to design and create marketing assets tailored to their needs.",
          "Developed engaging visual content for the Dine Local app, enhancing brand visibility and customer engagement.",
          "Addressed and resolved restaurant owners' concerns with professional and timely communication.",
          "Ensured consistent branding and messaging across all marketing channels through team collaboration."
        ]
      },
      "cloud-infrastructure": {
        title: "Cloud Infrastructure Intern",
        date: "April - May, 2024",
        company: "Verizon",
        description: [
          "Engineered and optimized a VPN product with redundancy, resiliency, and least-privilege principles using advanced Python.",
          "Executed rigorous cloud-native infrastructure testing focused on security and performance.",
          "Delivered in-depth presentations on cloud security strategies to enhance team expertise and collaboration."
        ]
      },
      "data-analyst": {
        title: "Data Analyst Intern",
        date: "June - July, 2023",
        company: "LTIMindtree",
        description: [
          "Proficient in data extraction using REST APIs and RDBMS with a strong analytical mindset.",
          "Experienced with Kafka, microservices vs monolithic architectures, and AngularJS for web interfaces.",
          "Worked with H2 Database, Java APIs, and JPA for CRUD operations, demonstrating technical adeptness.",
          "Showcased dedication in database and software evaluation for coding viability."
        ]
      },
      "uiux-designer": {
        title: "UI/UX Designer Intern",
        date: "May - June, 2023",
        company: "Centre for Railway Information Systems",
        description: [
          "Led cross-functional projects, integrating ticket systems with the national digital payment gateway.",
          "Leveraged Tableau and Google Analytics for UI enhancements in the Freight Operations System.",
          "Proficient in Adobe XD and Sketch for high-fidelity prototyping.",
          "Expertise in comprehensive user research to inform design decisions."
        ]
      }
    };
  
    const modal = document.getElementById("job-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDate = document.getElementById("modal-date");
    const modalCompany = document.getElementById("modal-company");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close-button");
  
    document.querySelectorAll(".timeline-item").forEach((item) => {
      item.addEventListener("click", () => {
        const key = item.dataset.key;
        const data = details[key];
  
        modalTitle.textContent = data.title;
        modalDate.textContent = data.date;
        modalCompany.textContent = data.company;
        modalDescription.innerHTML = data.description.map((desc) => `<li>${desc}</li>`).join("");
  
        modal.style.display = "flex";
      });
    });
  
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  // Fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
    const certificationsSection = document.querySelector('#certifications');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                certificationsSection.classList.add('active');
            }
        });
    });

    observer.observe(certificationsSection);
});
