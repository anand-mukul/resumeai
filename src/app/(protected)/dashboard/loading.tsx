import Loader from "@/components/global/loader";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader className="text-2xl" color="#6366f1" state>
        ...Loading Resumes
      </Loader>
    </div>
  );
};

export default Loading;
