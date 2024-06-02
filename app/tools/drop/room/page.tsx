import React, { Suspense } from "react";
import ErrorBoundary from "@/app/components/public/ErrorBoundary";
import Layout from "@/app/components/tools/drop/room/Layout";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Page;
