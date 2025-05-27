import React from 'react';

const JobCard = ({ jobTitle }: { jobTitle: string }) => {
    return (
        <div className="flex flex-col justify-between bg-white p-4 rounded-md h-full min-h-[140px]">
            <div className="">
                <div className="flex justify-between items-center">
                    <div className="flex font-medium text-gray-400 text-xs">
                        <p>#1001</p>
                        <p className="mx-1">•</p>
                        <p>California, USA</p>
                        <p className="mx-1">•</p>
                        <p>Remote</p>
                    </div>
                    <div className="flex font-medium text-gray-400 text-xs">
                        <p>Sara Ann</p>
                        <p className="mx-1">•</p>
                        <p>12 Jan 2025</p>
                        <p className="mx-1">•</p>
                        <p>3 Days ago</p>
                    </div>
                </div>
                <div className="flex-1 h-full">
                    <p className="text-3xl">{jobTitle}</p>
                </div>
            </div>
            <div className="flex justify-between items-center -mb-2">
                <div className="flex gap-2 text-gray-400 text-sm">
                    <small>
                        <span className="text-black text-lg">120 </span>Applicants
                    </small>
                    <small>
                        <span className="text-black text-lg">10 </span>Shortlisted
                    </small>
                    <small>
                        <span className="text-black text-lg">4 </span>Pending Interviews
                    </small>
                </div>
                <div className="flex font-medium text-[#25CAAC]">
                  <p>Open</p>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
