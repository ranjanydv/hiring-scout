"use client";

const Suggestion = () => {
    return (
        <div className="flex flex-col space-y-4 col-span-2 h-full">
            <div className="flex justify-between items-center">
                <h2 className="text-gray-900 text-3xl">Suggestion</h2>
            </div>
            <div className="flex-grow space-y-6 bg-[#e5e5e5] p-6 rounded-lg">
                <p className="font-semibold text-gray-400 text-sm uppercase">AI Suggestions</p>
                <div className="space-y-5">
                    <p className="text-gray-500 text-3xl">
                        Consider shortlisting candidates faster—your <span className="text-black">TAT is 20% higher than</span> industry average.
                    </p>
                    <p className={`hidden lg:flex text-gray-500 text-3xl`}>
                        Consider finalising candidates for interview faster—your <span className="text-black">TAT is 10% higher than</span> industry
                        average.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
