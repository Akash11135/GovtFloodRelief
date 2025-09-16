import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Building,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  MessageSquare,
  Eye,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import CreateCampaignForm from "./CreateCampaignForm";

const NGODashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [selectedState, setSelectedState] = useState("Punjab"); // default user state
  const statesList = [
    "Punjab",
    "Kerala",
    "Maharashtra",
    "Haryana",
    "Delhi",
    "Karnataka",
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Sample data for charts
  const monthlyDonations = [
    { month: "Jan", amount: 25000 },
    { month: "Feb", amount: 32000 },
    { month: "Mar", amount: 28000 },
    { month: "Apr", amount: 45000 },
    { month: "May", amount: 38000 },
    { month: "Jun", amount: 52000 },
  ];

  const projectProgress = [
    { project: "Education", completed: 75, ongoing: 25 },
    { project: "Healthcare", completed: 60, ongoing: 40 },
    { project: "Environment", completed: 85, ongoing: 15 },
    { project: "Relief", completed: 90, ongoing: 10 },
  ];

  const donationRequests = [
    {
      id: 1,
      donor: "Rajesh Kumar",
      amount: 5000,
      date: "2024-01-15",
      status: "Pending",
      district: "Hoshiarpur",
    },
    {
      id: 2,
      donor: "Priya Singh",
      amount: 10000,
      date: "2024-01-14",
      status: "Approved",
      district: "Ludhiana",
    },
    {
      id: 3,
      donor: "Amit Sharma",
      amount: 2500,
      date: "2024-01-13",
      status: "Processing",
      district: "Amritsar",
    },
    {
      id: 4,
      donor: "Sunita Devi",
      amount: 7500,
      date: "2024-01-12",
      status: "Approved",
      district: "Hoshiarpur",
    },
  ];

  const campaigns = [
    {
      id: 1,
      name: "Education for Rural Children",
      target: 100000,
      raised: 65000,
      donors: 45,
      status: "Active",
    },
    {
      id: 2,
      name: "Healthcare Support Program",
      target: 75000,
      raised: 50000,
      donors: 32,
      status: "Active",
    },
    {
      id: 3,
      name: "Clean Water Initiative",
      target: 50000,
      raised: 48000,
      donors: 28,
      status: "Almost Complete",
    },
  ];

  const contactRequests = [
    {
      id: 1,
      name: "Local Government Official",
      subject: "Partnership Opportunity",
      date: "2024-01-15",
      priority: "High",
    },
    {
      id: 2,
      name: "Corporate Donor",
      subject: "CSR Collaboration",
      date: "2024-01-14",
      priority: "Medium",
    },
    {
      id: 3,
      name: "Volunteer Group",
      subject: "Event Support",
      date: "2024-01-13",
      priority: "Low",
    },
  ];

  // Navigate to donate page and pass campaign + selectedState in location.state
    const handleDonateNavigate = (campaign: any) => {
      navigate(`/donate/${selectedState.toLowerCase()}`, {
        state: { campaign, state: selectedState },
      });
    };

    const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-lg font-semibold text-gray-900">
                NGO Dashboard
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">NGO Management Dashboard</h1>
          <p className="text-blue-100">
            Monitor your campaigns, donations, and community impact
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Raised</p>
                <p className="text-2xl font-bold text-green-600">₹2,20,000</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Campaigns</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Donors</p>
                <p className="text-2xl font-bold text-purple-600">156</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">This Month</p>
                <p className="text-2xl font-bold text-orange-600">₹52,000</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Monthly Donation Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyDonations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value}`, "Amount"]} />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#3B82F6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Project Completion Status
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="project" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" fill="#10B981" name="Completed %" />
                <Bar dataKey="ongoing" fill="#F59E0B" name="Ongoing %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* STATE DROPDOWN (above Donation & Contact requests) */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">
              Select State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {statesList.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-600">
            Showing data for{" "}
            <span className="font-semibold">{selectedState}</span>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Donation Requests */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Recent Donation Requests
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-gray-600">Donor</th>
                    <th className="text-left py-2 text-gray-600">Amount</th>
                    <th className="text-left py-2 text-gray-600">District</th>
                    <th className="text-left py-2 text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {donationRequests.map((request) => (
                    <tr key={request.id} className="border-b hover:bg-gray-50">
                      <td className="py-3">{request.donor}</td>
                      <td className="py-3 font-medium">₹{request.amount}</td>
                      {/* district replaced by selectedState for simplicity */}
                      <td className="py-3">{selectedState}</td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            request.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : request.status === "Processing"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Requests */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Contact Requests
            </h3>
            <div className="text-sm text-gray-600 mb-4">
              Showing contact requests for{" "}
              <span className="font-semibold">{selectedState}</span>
            </div>
            <div className="space-y-4">
              {contactRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {request.name}
                      </h4>
                      <p className="text-sm text-gray-600">{request.subject}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {request.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          request.priority === "High"
                            ? "bg-red-100 text-red-700"
                            : request.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {request.priority}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Active Campaigns
              </h3>
              <div className="text-sm text-gray-600">
                Active Campaigns for{" "}
                <span className="font-semibold">{selectedState}</span>
              </div>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              + Create New Campaign
            </button>
          </div>

          {/* Show Form in Modal */}
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
                <CreateCampaignForm onClose={() => setShowForm(false)} />
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900">
                    {campaign.name}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      campaign.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Raised: ₹{campaign.raised}</span>
                    <span>Target: ₹{campaign.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(campaign.raised / campaign.target) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {campaign.donors} donors •{" "}
                    {Math.round((campaign.raised / campaign.target) * 100)}%
                    complete
                  </div>
                </div>

                <div className="flex space-x-2">
                  {/* DONATE button: navigates to /donate and passes campaign + state */}
                  <button
                    onClick={() => handleDonateNavigate(campaign)}
                    className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    Donate
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;
