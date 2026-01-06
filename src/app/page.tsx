export default function Home() {
  const projectStartDate = new Date("2026-01-06");
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - projectStartDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const caCode = "xxxxxxxxxxxxx";

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Pump</h1>
            <div className="text-sm text-gray-400">
              <span className="font-medium">Day {diffDays}</span>
              <span className="mx-2">·</span>
              <span>Snakehead Project</span>
              <span className="mx-2">·</span>
              <span>CA: {caCode}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Left Column - Main View */}
          <div className="lg:col-span-2 space-y-4">
            {/* Live View Section */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-3">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-white">
                  Live View - Snakehead
                </h2>
                <span className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded">
                  Live
                </span>
              </div>
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center border border-gray-700">
                <p className="text-sm text-gray-400">Loading webcam...</p>
              </div>
            </div>

            {/* Claude's Latest Output */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-3">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-white">
                  Claude's Latest Output
                </h2>
                <span className="text-xs text-gray-400">
                  Connecting to Claude...
                </span>
              </div>
              <div className="bg-gray-900 rounded-lg p-3 min-h-[200px] max-h-[400px] overflow-y-auto border border-gray-700">
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-gray-300">
                    <span className="text-gray-500">[2024-01-15 14:32:15]</span>{" "}
                    System initialized. All sensors operational.
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500">[2024-01-15 14:32:18]</span>{" "}
                    Water temperature stable at 26°C. Heater active.
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500">[2024-01-15 14:32:22]</span>{" "}
                    Filter system running. Flow rate: 2.5 L/min.
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500">[2024-01-15 14:32:25]</span>{" "}
                    Oxygen levels optimal. Soft lighting enabled.
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500">[2024-01-15 14:32:30]</span>{" "}
                    Tank conditions optimal. Fire & Ice coloration vibrant.
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500">[2024-01-15 14:32:35]</span>{" "}
                    Water quality parameters within normal range.
                  </div>
                  <div className="text-gray-300">
                    <span className="text-gray-500">[2024-01-15 14:32:40]</span>{" "}
                    Monitoring active. All environmental parameters within
                    normal range.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sensors */}
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-3">
              <h2 className="text-lg font-semibold text-white mb-3">
                Environmental Sensors
              </h2>
              <div className="space-y-3">
                {/* Temperature */}
                <div className="flex items-center justify-between p-2 bg-gray-900 rounded-lg border border-gray-700">
                  <div>
                    <div className="text-xs text-gray-400">Water Temp</div>
                    <div className="text-lg font-semibold text-white">26°C</div>
                  </div>
                </div>

                {/* pH */}
                <div className="flex items-center justify-between p-2 bg-gray-900 rounded-lg border border-gray-700">
                  <div>
                    <div className="text-xs text-gray-400">pH Level</div>
                    <div className="text-lg font-semibold text-white">7.0</div>
                  </div>
                </div>

                {/* Oxygen */}
                <div className="flex items-center justify-between p-2 bg-gray-900 rounded-lg border border-gray-700">
                  <div>
                    <div className="text-xs text-gray-400">Oxygen</div>
                    <div className="text-lg font-semibold text-white">85%</div>
                  </div>
                </div>

                {/* Flow Rate */}
                <div className="flex items-center justify-between p-2 bg-gray-900 rounded-lg border border-gray-700">
                  <div>
                    <div className="text-xs text-gray-400">Flow Rate</div>
                    <div className="text-lg font-semibold text-white">
                      2.5 L/min
                    </div>
                  </div>
                </div>

                {/* Lighting */}
                <div className="flex items-center justify-between p-2 bg-gray-900 rounded-lg border border-gray-700">
                  <div>
                    <div className="text-xs text-gray-400">Lighting</div>
                    <div className="text-lg font-semibold text-white">Soft</div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Info */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-3">
              <h2 className="text-lg font-semibold text-white mb-3">
                Species Information
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Species</span>
                  <span className="font-medium text-white">Snakehead</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Origin</span>
                  <span className="font-medium text-white">Thai-Myanmar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Size</span>
                  <span className="font-medium text-white">12-15 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Temperament</span>
                  <span className="font-medium text-orange-400">
                    Aggressive
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="font-medium text-green-400">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Update</span>
                  <span className="font-medium text-white">2 min ago</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg border border-gray-700 p-3">
              <h2 className="text-lg font-semibold text-white mb-3">
                Device Status
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Heater</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Filter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Lighting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Circulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
