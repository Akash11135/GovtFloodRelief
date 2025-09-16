import React from 'react';
import { Users, Star, CheckCircle } from 'lucide-react';

interface NGOListProps {
  district: string;
  selectedNGO: string;
  onSelectNGO: (ngo: string) => void;
}

const NGOList: React.FC<NGOListProps> = ({ district, selectedNGO, onSelectNGO }) => {
  const ngoData: Record<string, Array<{name: string; description: string; rating: number; projects: number}>> = {
    hoshiarpur: [
      { name: 'Helping Hands', description: 'Focused on education and child welfare', rating: 4.8, projects: 12 },
      { name: 'Save Kids', description: 'Child healthcare and nutrition programs', rating: 4.7, projects: 8 },
      { name: 'Bright Future', description: 'Educational support and scholarships', rating: 4.9, projects: 15 }
    ],
    ludhiana: [
      { name: 'Care Foundation', description: 'Healthcare and medical assistance', rating: 4.6, projects: 10 },
      { name: 'Hope Initiative', description: 'Women empowerment and skill development', rating: 4.8, projects: 14 }
    ],
    amritsar: [
      { name: 'Education for All', description: 'Primary and secondary education support', rating: 4.9, projects: 18 },
      { name: 'Food Relief Org', description: 'Food security and nutrition programs', rating: 4.5, projects: 9 }
    ]
  };

  const ngos = ngoData[district] || [];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Users className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">
          Available NGOs in {district.charAt(0).toUpperCase() + district.slice(1)}
        </h2>
      </div>

      <div className="space-y-4">
        {ngos.map((ngo) => (
          <div
            key={ngo.name}
            onClick={() => onSelectNGO(ngo.name)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              selectedNGO === ngo.name
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{ngo.name}</h3>
              {selectedNGO === ngo.name && (
                <CheckCircle className="h-5 w-5 text-blue-600" />
              )}
            </div>
            
            <p className="text-gray-600 mb-3">{ngo.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="text-sm text-gray-700">{ngo.rating}</span>
              </div>
              <div className="text-sm text-gray-500">
                {ngo.projects} active projects
              </div>
            </div>
          </div>
        ))}
      </div>

      {ngos.length === 0 && (
        <div className="text-center py-8">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No NGOs available for this district yet.</p>
        </div>
      )}
    </div>
  );
};

export default NGOList;