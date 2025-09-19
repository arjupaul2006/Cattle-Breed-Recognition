import React from "react";

const StatCard = ({ icon, value, label, valueColor, iconBgColor, iconColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
      {/* Icon */}
      <div
        className={`flex items-center justify-center h-12 w-12 rounded-full mb-4 ${iconBgColor}`}
      >
        {React.cloneElement(icon, { className: `h-6 w-6 ${iconColor}` })}
      </div>

      {/* Value */}
      <div className={`text-4xl font-bold mb-1 ${valueColor}`}>{value}</div>

      {/* Label */}
      <div className="text-sm text-gray-500 font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
