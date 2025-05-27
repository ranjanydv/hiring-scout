'use client';
import React, { useState } from 'react';

const JobFilter = () => {
    const [activeFilter, setActiveFilter] = useState('All Jobs');

    return (
        <nav className="flex items-center gap-4 px-3 py-3 overflow-x-auto">
            {['All Jobs', 'Created By Me', 'Team Member', 'Tagged / Assigned'].map((filter) => (
                <span
                    onClick={() => setActiveFilter(filter)}
                    className={`${
                        activeFilter === filter ? 'bg-gradient-to-r from-[#7433ff] to bg-[#461f99] text-white' : ' text-gray bg-transparent hover:bg-gray-200 '
                    } px-3 py-2 rounded-[14px] text-center uppercase text-xs cursor-pointer transition-colors duration-200`}
                    key={filter}>
                    {filter}
                </span>
            ))}
        </nav>
    );
};

export default JobFilter;
