import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full max-w-md mx-auto mt-8 flex flex-col gap-1">
            <span>{progress}% done</span>
            <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">

                <div
                    className="absolute top-0 left-0 h-full bg-red-600 rounded-full"
                    style={{ width: `${progress}%` }}
                >
                </div>
            </div>

        </div>
    );
};

export default ProgressBar;
