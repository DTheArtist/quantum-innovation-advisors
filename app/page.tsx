// filepath: /Users/dee/WorkingCode/quantum-innovation-advisors/app/page.tsx
import React from "react";
import HighlightCard from "../components/HighlightCard";
import Card from "../components/Card";

const Page = () => {
  const projects = [
    {
      projectName: "Project Alpha",
      description: "A description of Project Alpha.",
      purpose: "Purpose of Project Alpha.",
      userPainPoint: "Long response times for customer queries.",
      solution: "Provides instant responses to common questions.",
      logo: "highlight-image.jpg",
      caseStudyLink: "/case-studies/alpha",
      productLink: "/projects/alpha",
    },
    {
      projectName: "Project Beta",
      description: "A description of Project Beta.",
      purpose: "Purpose of Project Beta.",
      userPainPoint: "Long response times for customer queries.",
      solution: "Provides instant responses to common questions.",
      logo: "highlight-image.jpg",
      caseStudyLink: "/case-studies/beta",
      productLink: "/projects/beta",
    },
    {
      projectName: "Project Delta",
      description: "A description of Project Delta.",
      purpose: "Purpose of Project Delta.",
      userPainPoint: "Long response times for customer queries.",
      solution: "Provides instant responses to common questions.",
      logo: "highlight-image.jpg",
      caseStudyLink: "/case-studies/delta",
      productLink: "/projects/delta",
    },
    {
      projectName: "Project Omega",
      description: "A description of Project Omega.",
      purpose: "Purpose of Project Omega.",
      userPainPoint: "Long response times for customer queries.",
      solution: "Provides instant responses to common questions.",
      logo: "highlight-image.jpg",
      caseStudyLink: "/case-studies/omega",
      productLink: "/projects/omega",
    },
    {
      projectName: "Project Zeda",
      description: "A description of Project Zeda.",
      purpose: "Purpose of Project Zeda.",
      userPainPoint: "Long response times for customer queries.",
      solution: "Provides instant responses to common questions.",
      logo: "highlight-image.jpg",
      caseStudyLink: "/case-studies/zeda",
      productLink: "/projects/zeda",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="md:col-span-2 md:row-span-2">
        <HighlightCard
            projectName="News of the Month"
            description="Exciting updates on our latest projects and innovations."
            purpose="Highlighting the latest news and updates."
            userPainPoint="Keeping up with the latest developments."
            solution="Monthly updates to keep you informed."
            logo="highlight-image.jpg"
            caseStudyLink="/case-studies/news"
            productLink="https://example.com/news"
            backgroundImage="hero-background.jpg"
          />
        </div>
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Page;