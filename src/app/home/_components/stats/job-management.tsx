import { StackPlus } from '@/lib/icons';
import Link from 'next/link';
import JobCard from './job-card';
import JobFilter from './jobs-filter';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const JobManagement = () => {
    return (
        <div className="space-y-4 col-span-2">
            <div className="flex justify-between items-center">
                <h2 className="text-gray-900 text-3xl">Job Management</h2>
                <Link href={'#'} className="flex items-center gap-2 font-medium text-[#7433FF] text-xl">
                    Create Job
                    <StackPlus />
                </Link>
            </div>
            <div className="space-y-4 bg-[#e5e5e5] shadow-sm p-4 rounded-lg">
                <div className="flex justify-between items-center py-2">
                    <small className="w-full md:w-1/4 font-semibold text-gray-400 text-sm uppercase">Open Jobs</small>
                    <div className="bg-white rounded-3xl w-full md:w-3/4">
                        <JobFilter />
                    </div>
                </div>
                <div className="space-y-5">
                    <JobCard jobTitle={'UX/UI Designer'} />
                    <JobCard jobTitle={'Data Analyst'} />
                    <JobCard jobTitle={'AI Engineer'} />
                </div>
                <div className="flex justify-center items-center gap-3">
                    <Button size="sm" className="flex gap-3 bg-[#7433ff] rounded-full">
                        Load Next Batch(7 more Jobs)
                        <ChevronDown />
                    </Button>
                    <Link href="#" className="text-gradient-1">
                        View All Open Jobs (12 total)
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobManagement;
