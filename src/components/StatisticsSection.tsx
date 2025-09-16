import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const StatisticsSection = () => {
  const donationData = [
    { month: 'Jan', amount: 15000 },
    { month: 'Feb', amount: 18000 },
    { month: 'Mar', amount: 22000 },
    { month: 'Apr', amount: 25000 },
    { month: 'May', amount: 20000 },
    { month: 'Jun', amount: 25000 }
  ];

  const categoryData = [
    { name: 'Education', value: 40, color: '#3B82F6' },
    { name: 'Healthcare', value: 30, color: '#10B981' },
    { name: 'Environment', value: 20, color: '#F59E0B' },
    { name: 'Others', value: 10, color: '#EF4444' }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600">Real numbers, real impact across India</p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-blue-50 p-8 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">₹1,25,000</div>
            <div className="text-lg text-gray-700">Total Donations</div>
            <div className="text-sm text-gray-500 mt-2">USD Equivalent</div>
          </div>
          
          <div className="text-center bg-green-50 p-8 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">45</div>
            <div className="text-lg text-gray-700">Active NGOs</div>
            <div className="text-sm text-gray-500 mt-2">Verified Partners</div>
          </div>
          
          <div className="text-center bg-purple-50 p-8 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 mb-2">32</div>
            <div className="text-lg text-gray-700">Ongoing Projects</div>
            <div className="text-sm text-gray-500 mt-2">Active Campaigns</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Monthly Donations Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={donationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value}`, 'Amount']} />
                <Bar dataKey="amount" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Donation Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;