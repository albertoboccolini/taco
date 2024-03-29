import React from 'react';
import Layout from "@/app/components/tools/palette/Layout";
import ErrorBoundary from "@/app/components/public/ErrorBoundary";

const Page = () => {
    return (
        <main className="text-gray-800 bg-white m-0 p-0">
            <ErrorBoundary>
                <Layout></Layout>
            </ErrorBoundary>
        </main>
    );
};

export default Page;