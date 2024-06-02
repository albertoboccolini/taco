import Layout from "@/app/components/homepage/Layout";
import React from "react";
import ErrorBoundary from "@/app/components/public/ErrorBoundary";

export default function Page() {
  return (
    <main className="m-0 p-0 text-gray-800">
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </main>
  );
}
