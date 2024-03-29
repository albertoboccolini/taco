import React, {Suspense} from 'react';
import ErrorBoundary from "@/app/components/public/ErrorBoundary";
import Layout from "@/app/components/tools/drop/room/Layout";

const RoomPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RoomContent/>
        </Suspense>
    );
};

const RoomContent = () => {

    return (
        <main className="text-gray-800 bg-white m-0 p-0">
            <ErrorBoundary>
                <Layout/>
            </ErrorBoundary>
        </main>
    );
};

export default RoomPage;