import React from "react";
import Image from "next/image";
import Button from "./Button";

interface CardProps {
	projectName: string;
	description: string;
	purpose: string;
	userPainPoint: string;
	solution: string;
	logo: string;
	caseStudyLink: string;
	productLink: string;
}

const Card: React.FC<CardProps> = ({
	projectName,
	description,
	purpose,
	userPainPoint,
	solution,
	logo,
	caseStudyLink,
	productLink,
}) => {
	return (
		<div className="bg-teal-950 p-4 rounded-lg shadow-md">
			<div className="col-span-1 flex justify-center items-center">
				<Image
					src={`/images/${logo}`}
					alt={projectName}
					className="rounded-full"
					width={100}
					height={100}
				/>
			</div>
			<div className="col-span-3">
				<h3 className="text-lg font-bold">{projectName}</h3>
				<p>{description}</p>
				<p>{purpose}</p>
				<p>{userPainPoint}</p>
				<p>{solution}</p>
			</div>
			<div className="grid grid-cols-2 gap-4 mt-4">
				<Button href={caseStudyLink}>Case Study</Button>
				<Button href={productLink}>Use Product</Button>
			</div>
		</div>
	);
};

export default Card;
