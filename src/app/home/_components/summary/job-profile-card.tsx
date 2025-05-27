import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const JobProfileCard = ({ status }: { status: 'success' | 'error' }) => {
    return (
        <div className="flex items-center">
            <Avatar className="mr-4 size-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="Hello" />
                <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
                <div className="">
                    <p className="font-medium text-lg leading-none">Tim Cook</p>
                    <small className="text-xs">
                        {status === 'error' && 'Chief Executive Officer'}
                        {status === 'success' && '7 days pending'}
                    </small>
                </div>
                <button className="block px-2 py-0.5 border-[#461F99] border-2 rounded-md text-xs">
                    {status === 'success' ? 'View Details' : 'Remind Approver'}
                </button>
            </div>
        </div>
    );
};

export default JobProfileCard;
