import React, {Suspense} from 'react';
import ErrorBoundary from "@/app/components/public/ErrorBoundary";
import Layout from "@/app/components/tools/drop/room/Layout";


const Page = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <main className="text-gray-800 m-0 p-0">
                <ErrorBoundary>
                    <Layout/>
                </ErrorBoundary>
            </main>
        </Suspense>
    );
};

export default Page;