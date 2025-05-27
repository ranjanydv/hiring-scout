'use client';
import React, { useState } from 'react';

const Filters = () => {
    const [activeFilter, setActiveFilter] = useState('DATE RANGE [13/03/2024-12/03/2024]');
    return (
        <nav className="flex flex-wrap items-center gap-4 py-3 overflow-x-auto">
            {['Hiring Manager', 'Software Engineer', 'DATE RANGE [13/03/2024-12/03/2024]', 'Product Manager', 'Data Scientist'].map((filter) => (
                <span
                    onClick={() => setActiveFilter(filter)}
                    className={`${
                        activeFilter === filter ? 'bg-[#2DEAC7] text-black' : 'bg-white hover:bg-gray-200 '
                    } px-3 py-2 rounded-full uppercase break-words text-xs cursor-pointer transition-colors duration-200`}
                    key={filter}>
                    {filter}
                </span>
            ))}
        </nav>
    );
};

export default Filters;
