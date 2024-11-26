import React from "react";
const steps = [
  {
    icon: "/screen.png",
    title: "Initial Screening",
    description: "The candidates will go thru initial screening",
  },
  {
    icon: "/upload.png",
    title: "Upload CV/Resume",
    description:
      "DigiHire will scan your resume and match you with the best job opportunities.",
  },
  {
    icon: "/evaluate.png",
    title: "RPC Evaluates CV",
    description: "The HR will screen your resume with Digihire.",
  },
  {
    icon: "/site.png",
    title: "Go to Site",
    description: "The candidates will go to site for their final interview.",
  },
];
const How = () => {
  return (
    <>
      <div className="bg-gray-50 py-10 px-5 text-center">
        <h2 className="text-3xl font-semibold mb-12">How DigiHire Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          <div className="hidden md:block col-span-1"></div>

          <div className="col-span-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-5 rounded-md flex flex-col items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={step.icon}
                    alt={`${step.title} Icon`}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block col-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default How;
