import React from "react";
import Layout from "@/app/components/tools/qrcode/Layout";
import ErrorBoundary from "@/app/components/public/ErrorBoundary";

const Page = () => {
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  );
};

export default Page;
