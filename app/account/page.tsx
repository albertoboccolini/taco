import React from "react";
import ErrorBoundary from "@/app/components/public/ErrorBoundary";
import Layout from "@/app/components/account/Layout";

const Page = () => {
  return (
    <main className="m-0 p-0 text-gray-800">
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </main>
  );
};

export default Page;
