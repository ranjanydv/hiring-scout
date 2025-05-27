'use client';
import { cn } from '@/lib/utils';
import JobProfileCard from './job-profile-card';
import { useIsMobile } from '@/hooks/use-mobile';

const SummaryCard = ({ summaryText, status = 'success', className }: { summaryText: string; status?: 'success' | 'error'; className?: string }) => {
    const isMobile = useIsMobile();
    const cardsToShow = isMobile ? 2 : 3;
    return (
        <div
            className={cn(
                'flex flex-col justify-between',
                !isMobile &&     'bg-gradient-to-r',
                !isMobile && status === 'success' ? 'from-[#F0FDF4]' : 'from-[#FEF2F2]',
                'to-white p-4 rounded-md h-full min-h-[140px]',
                className
            )}>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div className="flex font-medium text-gray-400 text-xs uppercase">
                        <p>{summaryText}</p>
                    </div>
                    <div className="">
                        <p className={`px-4 py-1 ${status === 'success' ? 'bg-green-600' : 'bg-red-600'} rounded-full text-white`}>23</p>
                    </div>
                </div>
                <div className="flex-1 gap-4 grid grid-cols-1 lg:grid-cols-3 h-full">
                    {Array(cardsToShow)
                        .fill(null)
                        .map((_, index) => (
                            <JobProfileCard key={index} status={status} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;
