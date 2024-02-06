import Layout from "@/app/components/homepage/Layout";
import React from "react";
import ErrorBoundary from "@/app/components/public/ErrorBoundary";

export default function Home() {
    return (
        <main className="font-roboto text-gray-800 bg-white m-0 p-0">
            <ErrorBoundary>
                <Layout></Layout>
            </ErrorBoundary>
        </main>
    );
}
