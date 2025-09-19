import React from "react";
import StatCard from "./StatCard";

const Status = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Total Breeds */}
        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.228 9.247a1 1 0 011.085-1.085l5.247 5.247a1 1 0 01-1.085 1.085l-5.247-5.247zm-1.085-1.085L5.247 5.247a1 1 0 011.085-1.085l5.247 5.247-1.085 1.085zM12 21a9 9 0 100-18 9 9 0 000 18z"
              />
            </svg>
          }
          value="47"
          label="Total Breeds"
          valueColor="text-blue-600"
          iconBgColor="bg-gray-200"
          iconColor="text-gray-500"
        />

        {/* Card 2: Recognition Accuracy */}
        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15a3 3 0 100-6 3 3 0 000 6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.5 12c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5S2.5 9.515 2.5 12zM12 12a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
          }
          value="94.2%"
          label="Recognition Accuracy"
          valueColor="text-green-600"
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />

        {/* Card 3: Daily Identifications */}
        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8L11 2a9 9 0 00-11 9c0 4.97 4.03 9 9 9s9-4.03 9-9"
              />
            </svg>
          }
          value="1,247"
          label="Daily Identifications"
          valueColor="text-yellow-600"
          iconBgColor="bg-yellow-100"
          iconColor="text-yellow-600"
        />

        {/* Card 4: System Status */}
        <StatCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.018A9.955 9.955 0 0112 21a9.955 9.955 0 01-7.618-3.018A10.01 10.01 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10"
              />
            </svg>
          }
          value="Online"
          label="System Status"
          valueColor="text-green-600"
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
      </div>
    </div>
  );
};

export default Status;
