import React from 'react';
import ErrorBoundary from "@/app/components/public/ErrorBoundary";
import Layout from "@/app/components/account/Layout";

const Page = () => {

    return (
        <main className="text-gray-800 m-0 p-0">
            <ErrorBoundary>
                <Layout/>
            </ErrorBoundary>
        </main>
    );
};

export default Page;