import Image from 'next/image';
import React from 'react';
import ProgressBar from '../progressBar/progressBar';
import clsx from 'clsx';

const ProjectCard = ({
    title,
    desc ,
    user ,
    status,
    issues ,
    resolved ,
    comment ,
    progress 
}) => {
    return (
        <div className="border-2 border-gray-300 px-7 py-4 border-dashed flex flex-col rounded-lg w-[422px]">
            <div className="flex justify-end">
            <div className="py-1">
            <p className={clsx(
                'rounded-md',
                {
                    'bg-yellow-600': title === "pending",
                    'bg-green-600': title === "completed",
                    'bg-red-600': title !== "pending" && title !== "completed"
                }
            )}>
                {status}
            </p>
        </div>
            </div>
            <div className="py-1">
                <p className=" font-semibold">{title}</p>
            </div>
            <div className="flex items-center text-sm text-gray-400 gap-1 py-1">
                <Image
                    className="rounded-full"
                    width={20}
                    height={20}
                    src="https://admin.pixelstrap.net/admiro/assets/images/user/4.jpg"
                    alt="User Image"
                />
                <span>{user}</span>
            </div>
            <div className="py-1">
                <p className="text-sm">
                    {desc}
                </p>
            </div>
            <div className="py-1">
                <div className="flex items-center justify-between w-40 text-sm">
                    <p className="text-gray-400">Issues</p>
                    <span className="text-gray-600">{issues}</span>
                </div>
                <div className="flex items-center justify-between w-40 text-sm">
                    <p className="text-gray-400">Resolved</p>
                    <span className="text-gray-600">{resolved}</span>
                </div>
                <div className="flex items-center justify-between w-40 text-sm">
                    <p className="text-gray-400">Comments</p>
                    <span className="text-gray-600">{comment}</span>
                </div>
            </div>
            <div className="py-1">
                <ProgressBar progress={progress} />
            </div>
        </div>
    );
};

export default ProjectCard;
