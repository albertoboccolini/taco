import React from "react";
import ErrorBoundary from "@/app/components/public/ErrorBoundary";
import Layout from "@/app/components/tools/remover/Layout";

const Page: React.FC = () => {
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  );
};

export default Page;
