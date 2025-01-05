import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface HighlightCardProps {
  projectName: string;
  description: string;
  purpose: string;
  userPainPoint: string;
  solution: string; // Should be limited in length
  logo: string; // URL for the logo/icon
  caseStudyLink: string; // Hyperlink to explore the product case study
  productLink: string; // Hyperlink to the product
  backgroundImage: string; // URL for the background image
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  projectName,
  description,
  purpose,
  userPainPoint,
  solution,
  logo,
  caseStudyLink,
  productLink,
  backgroundImage,
}) => {
  return (
    <div className="bg-teal-950 p-20 rounded-lg shadow-md h-full flex flex-col items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none" style={{ backgroundImage: `url(/images/${backgroundImage})` }}></div>
      <Image src={`/images/${logo}`} alt={`${projectName} logo`} className="rounded-full mb-4" width={150} height={150} />
      <h2 className="text-4xl font-bold text-beige-100 mb-4">{projectName}</h2>
      <p className="mb-4">{description}</p>
      <p className="mb-4"><strong>Purpose:</strong> {purpose}</p>
      <p className="mb-4"><strong>User Pain Point:</strong> {userPainPoint}</p>
      <p className="mb-4"><strong>Solution:</strong> {solution.length > 100 ? `${solution.substring(0, 97)}...` : solution}</p>
      <div className="grid grid-cols-2 gap-4 mt-4 w-full">
        <Button href={caseStudyLink}>Case Study</Button>
        <Button href={productLink}>Use Product</Button>
      </div>
    </div>
  );
};

export default HighlightCard;