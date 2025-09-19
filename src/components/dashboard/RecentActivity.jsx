import React from "react";

const RecentActivity = () => {
  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <button className="text-blue-600 hover:underline">View All</button>
          </div>

          <div className="space-y-4">
            {/* Activity Item */}
            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
              <img
                src="https://placehold.co/64x64"
                alt="Gir"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <p>
                  <span className="font-medium">Gir</span> identified
                </p>
                <p className="text-green-600 text-sm font-medium">
                  96.8% confidence
                </p>
              </div>
              <div className="text-right text-gray-500 text-sm">
                <p>2 hours ago</p>
                <p>📍 Gujarat</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
              <img
                src="https://placehold.co/64x64"
                alt="Sahiwal"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <p>
                  <span className="font-medium">Sahiwal</span> identified
                </p>
                <p className="text-green-600 text-sm font-medium">
                  94.2% confidence
                </p>
              </div>
              <div className="text-right text-gray-500 text-sm">
                <p>4 hours ago</p>
                <p>📍 Punjab</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
              <img
                src="https://placehold.co/64x64"
                alt="Red Sindhi"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="flex-1">
                <p>
                  <span className="font-medium">Red Sindhi</span> identified
                </p>
                <p className="text-green-600 text-sm font-medium">
                  91.5% confidence
                </p>
              </div>
              <div className="text-right text-gray-500 text-sm">
                <p>6 hours ago</p>
                <p>📍 Rajasthan</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Information */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">System Information</h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span className="flex items-center space-x-2">
                <span>ℹ️</span>
                <span>Version</span>
              </span>
              <span className="text-blue-600">v2.1.4</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center space-x-2">
                <span>📅</span>
                <span>Last Updated</span>
              </span>
              <span>16 Sep 2025</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center space-x-2">
                <span>📶</span>
                <span>Network Status</span>
              </span>
              <span className="text-green-600">Connected</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center space-x-2">
                <span>💾</span>
                <span>Storage Used</span>
              </span>
              <span>2.3 GB / 5 GB</span>
            </div>

            <hr />

            <div>
              <p className="text-gray-500 text-sm mb-2">Signal Strength</p>
              <div className="flex space-x-1">
                <div className="w-2 h-4 bg-green-500 rounded"></div>
                <div className="w-2 h-5 bg-green-500 rounded"></div>
                <div className="w-2 h-6 bg-green-500 rounded"></div>
                <div className="w-2 h-7 bg-green-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
