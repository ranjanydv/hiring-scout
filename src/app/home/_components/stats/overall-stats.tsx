import { cn } from '@/lib/utils';
import React from 'react';

const OverallStats = () => {
    const cardClass = 'bg-[#e5e5e5] shadow-sm p-6 rounded-lg';
    return (
        <div className="space-y-4 col-span-3 h-full">
            <h2 className="text-gray-900 text-3xl">Overall Stats</h2>
            <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
                <div className={cn(cardClass)}>
                    <p className="font-medium text-gray-400 text-sm">TAT FOR SHORTLISTING</p>
                    <h3 className="mt-2 font-medium text-gray-900 text-3xl">4 Days</h3>
                    <p className="mt-1 font-medium text-gray-400 text-sm">FOR LAST 6 MONTHS</p>
                </div>

                <div className={cn(cardClass)}>
                    <p className="font-medium text-gray-400 text-sm">TAT FOR FINAL CLOSURE</p>
                    <h3 className="mt-2 font-medium text-gray-900 text-3xl">4 Days</h3>
                    <p className="mt-1 font-medium text-gray-400 text-sm">FOR LAST 6 MONTHS</p>
                </div>

                <div className={cn(cardClass)}>
                    <p className="font-medium text-gray-400 text-sm">PENDING APPROVALS</p>
                    <h3 className="mt-2 font-medium text-gray-900 text-3xl">10</h3>
                </div>

                <div className={`col-span-1 md:col-span-2 ${cardClass}`}>
                    <div className="flex justify-between items-center mb-4">
                        <p className="font-medium text-gray-400 text-sm">TOTAL REQUIREMENTS</p>
                        <h3 className="font-medium text-gray-900 text-3xl">200</h3>
                    </div>
                    <div className="flex rounded-md font-medium text-xs">
                        <div className="flex items-center bg-green-200 px-3 py-1 text-green-800">
                            {/* <span className="mr-1 font-medium text-sm">
								</span>  */}
                            19 Fulfilled
                        </div>
                        <div className="flex items-center bg-yellow-200 px-3 py-1 text-yellow-800">
                            {/* <span className="mr-1 font-medium text-sm">
								</span>  */}
                            20 On Hold
                        </div>
                        <div className="flex items-center bg-red-200 px-3 py-1 text-red-800">
                            {/* <span className="mr-1 font-medium text-sm"></span> */}
                            33 Cancelled
                        </div>
                        <div className="flex items-center bg-blue-200 px-3 py-1 text-blue-800">
                            {/* <span className="mr-1 font-medium text-sm">
								</span> */}
                            51 Pending Company Approval
                        </div>
                        <div className="flex items-center bg-orange-200 px-3 py-1 text-orange-800">
                            {/* <span className="mr-1 font-medium text-sm">
								</span> */}
                            77 In Progress
                        </div>
                    </div>
                </div>

                <div className={cn(cardClass)}>
                    <p className="font-medium text-gray-400 text-sm">PREMATURE CLOSURE</p>
                    <h3 className="mt-2 font-medium text-gray-900 text-3xl">33</h3>
                </div>

                <div className={`flex flex-col col-span-1 md:col-span-2 ${cardClass}`}>
                    <div className="flex justify-between items-center mb-4">
                        <p className="font-medium text-gray-400 text-sm">Closed Requirements</p>
                        <select className="bg-indigo-700 px-3 py-1 rounded-full focus:outline-none text-white text-sm cursor-pointer">
                            <option>Open vs Closed</option>
                        </select>
                    </div>
                    <h3 className="mb-4 font-medium text-green-500 text-5xl">100%</h3>
                    <div className="flex flex-grow justify-between items-end space-x-1">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={`bar-left-${i}`}
                                className={`w-4 bg-gray-300 rounded-t-sm`}
                                style={{ height: `${Math.random() * 60 + 20}px` }}
                            ></div>
                        ))}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={`bar-right-${i}`}
                                className={`w-4 bg-indigo-500 rounded-t-sm`}
                                style={{ height: `${Math.random() * 80 + 40}px` }}
                            ></div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-gray-500 text-xs">
                        <span>1 Jan</span>
                        <span>7 Jan</span>
                        <span>14 Jan</span>
                        <span>21 Jan</span>
                        <span>28 Jan</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className={cn(cardClass)}>
                        <p className="font-medium text-gray-400 text-sm">Resume Screened</p>
                        <h3 className="mt-2 font-medium text-gray-900 text-3xl">81</h3>
                    </div>

                    <div className={cn(cardClass)}>
                        <p className="font-medium text-gray-400 text-sm">AI Select</p>
                        <h3 className="mt-2 font-medium text-gray-900 text-3xl">44</h3>
                    </div>

                    <div className={cn(cardClass)}>
                        <p className="font-medium text-gray-400 text-sm">Final Select</p>
                        <h3 className="mt-2 font-medium text-gray-900 text-3xl">15</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverallStats;
