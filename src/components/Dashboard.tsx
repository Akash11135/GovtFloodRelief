import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { MapPin, LogOut, Home, Heart, ArrowRight } from "lucide-react";
import StatisticsSection from "./StatisticsSection";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const districts = [
    { name: "Hoshiarpur", area: "Punjab", needsHelp: true },
    { name: "Ludhiana", area: "Punjab", needsHelp: true },
    { name: "Amritsar", area: "Punjab", needsHelp: true },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDistrictClick = (district: string) => {
    navigate(`/donate/${district.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-lg font-semibold text-gray-900">
                Donor Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600">
            Choose a district to see NGOs and make donations where help is
            needed most.
          </p>

          {/* Quick Donation CTA */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Ready to Make a Difference?
                </h3>
                <p className="text-gray-600 text-sm">
                  Select a district below to find NGOs and start donating
                </p>
              </div>
              <div className="flex items-center text-green-600">
                <Heart className="h-5 w-5 mr-1" />
                <span className="font-medium">Donate Now</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Areas that need help */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Current Areas That Need Help
            </h2>

            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center mb-2">
                <Heart className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-900">How to Donate</h3>
              </div>
              <p className="text-blue-700 text-sm">
                Click on any district below to view available NGOs and access
                the donation form. You can select specific NGOs and causes that
                matter most to you.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-red-500 mr-2" />
                Punjab Districts
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                {districts.map((district) => (
                  <div
                    key={district.name}
                    onClick={() => handleDistrictClick(district.name)}
                    className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg cursor-pointer hover:from-blue-100 hover:to-blue-200 transition-all duration-200 transform hover:scale-105 border border-blue-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {district.name}
                      </h4>
                      {district.needsHelp && (
                        <div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                          Needs Help
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {district.area}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>View NGOs & Donate</span>
                      </div>
                      <svg
                        className="h-4 w-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    High Priority Areas
                  </h3>
                  <p className="mt-1 text-sm text-yellow-700">
                    These districts urgently need support for education,
                    healthcare, and basic necessities. Your donation can make an
                    immediate impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
