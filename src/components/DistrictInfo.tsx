import React from 'react';
import { MapPin, Phone, Mail, AlertCircle } from 'lucide-react';

interface DistrictInfoProps {
  district: string;
}

const DistrictInfo: React.FC<DistrictInfoProps> = ({ district }) => {
  const districtData: Record<string, {contact: string; email: string; population: string; needsDescription: string}> = {
    hoshiarpur: {
      contact: '+91-9876543210',
      email: 'hoshiarpur@ngoexample.org',
      population: '15.86 lakh',
      needsDescription: 'Urgent need for educational infrastructure and child healthcare facilities.'
    },
    ludhiana: {
      contact: '+91-9876543211',
      email: 'ludhiana@ngoexample.org',
      population: '34.98 lakh',
      needsDescription: 'Industrial pollution effects require healthcare support and environmental awareness.'
    },
    amritsar: {
      contact: '+91-9876543212',
      email: 'amritsar@ngoexample.org',
      population: '25.43 lakh',
      needsDescription: 'Border district needs support for education and food security programs.'
    }
  };

  const info = districtData[district];

  if (!info) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-500">District information not available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <MapPin className="h-6 w-6 text-red-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">
          {district.charAt(0).toUpperCase() + district.slice(1)} District
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Population</h3>
          <p className="text-2xl font-bold text-blue-600">{info.population}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">State</h3>
          <p className="text-2xl font-bold text-green-600">Punjab</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-1">Current Needs</h3>
            <p className="text-yellow-700 text-sm">{info.needsDescription}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Contact Information</h3>
        
        <div className="flex items-center text-gray-600">
          <Phone className="h-4 w-4 mr-3 text-blue-600" />
          <span>{info.contact}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Mail className="h-4 w-4 mr-3 text-blue-600" />
          <span>{info.email}</span>
        </div>
      </div>
    </div>
  );
};

export default DistrictInfo;