import React from 'react';

const EmptyState = () => {
    return (
        <div className="container mx-auto my-8 space-y-10">

            <div className="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center py-12 items-center">
                    <img className="w-64 h-64" src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg" alt="Empty State" />
                    <h1 className="text-gray-700 font-medium text-2xl text-center mb-3">Create a Project and get organized!</h1>
                    <p className="text-gray-500 text-center mb-6">Projects are the backbones of time entry categorization in your workspace.</p>

                </div>
            </div>
        </div>
    );
};

export default EmptyState;
