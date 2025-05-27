import React from 'react';
import OverallStats from './overall-stats';
import JobManagement from './job-management';

const Stats = () => {
    return (
        <section className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-auto mt-16 container">
            <OverallStats />
            <JobManagement />
        </section>
    );
};

export default Stats;
