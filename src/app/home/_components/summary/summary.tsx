import { Button } from '@/components/ui/button';
import SummaryCard from './summary-card';
import { ChevronDown } from 'lucide-react';

const Summary = () => {
    return (
        <div className="space-y-4 col-span-2 h-full">
            <h2 className="text-gray-900 text-3xl">Candidate Summary</h2>
            <div className="space-y-4 bg-[#e5e5e5] shadow-sm p-4 rounded-lg">
                <div className="space-y-5">
                    <SummaryCard summaryText="Candidates gone through Customer interview but Final Decision" status="error" />
                    <SummaryCard summaryText="Recommended candidate pending customer Interview" />
                </div>
                <Button variant="link" className="text-[#461F99] cursor-pointer">
                    Expand All <ChevronDown />
                </Button>
            </div>
        </div>
    );
};

export default Summary;
