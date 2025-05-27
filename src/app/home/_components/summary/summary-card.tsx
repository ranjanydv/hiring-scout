import JobProfileCard from './job-profile-card';

const SummaryCard = ({ summaryText, status = 'success' }: { summaryText: string; status?: 'success' | 'error' }) => {
    return (
        <div
            className={`flex flex-col justify-between bg-gradient-to-r ${
                status === 'success' ? 'from-[#F0FDF4]' : 'from-[#FEF2F2]'
            } to-white p-4 rounded-md h-full min-h-[140px]`}>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div className="flex font-medium text-gray-400 text-xs uppercase">
                        <p>{summaryText}</p>
                    </div>
                    <div className="">
                        <p className={`px-4 py-1 ${status === 'success' ? 'bg-green-600' : 'bg-red-600'} rounded-full text-white`}>23</p>
                    </div>
                </div>
                <div className="flex-1 gap-4 grid grid-cols-3 h-full">
                    <JobProfileCard status={status} />
                    <JobProfileCard status={status} />
                    <JobProfileCard status={status} />
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;
