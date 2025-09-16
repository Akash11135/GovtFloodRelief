import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ArrowLeft, Heart, LogOut } from "lucide-react";
import DonationForm from "./DonationForm";
import NGOList from "./NGOList";
import DistrictInfo from "./DistrictInfo";

const DonationPage = () => {
  const { district } = useParams<{ district: string }>();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedNGO, setSelectedNGO] = useState<string>("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={handleBack}
                className="flex items-center text-blue-600 hover:text-blue-700 mr-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </button>
              <Heart className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-lg font-semibold text-gray-900">
                Donate to{" "}
                {district?.charAt(0).toUpperCase() + district?.slice(1)}
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
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - District Info & NGO List */}
          <div className="space-y-6">
            <DistrictInfo district={district || ""} />
            <NGOList
              district={district || ""}
              selectedNGO={selectedNGO}
              onSelectNGO={setSelectedNGO}
            />
          </div>

          {/* Right Column - Donation Form */}
          <div>
            <DonationForm district={district || ""} selectedNGO={selectedNGO} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
