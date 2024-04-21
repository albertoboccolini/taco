import React from 'react';
import Layout from "@/app/components/tools/palette/Layout";
import ErrorBoundary from "@/app/components/public/ErrorBoundary";

const Page = () => {
    return (
        <ErrorBoundary>
            <Layout></Layout>
        </ErrorBoundary>
    );
};

export default Page;