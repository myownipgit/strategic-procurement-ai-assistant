import React, { useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement,
  LineElement,
  PointElement
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { 
  executiveKPIs, 
  strategicActions, 
  priceVarianceCrisis, 
  implementationRoadmap,
  riskAssessment,
  executiveMetrics
} from '../data/strategicActionData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('strategic');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Executive KPI Panel Component
  const ExecutiveKPIs = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 rounded-xl shadow-lg">
        <div className="text-3xl font-bold">{formatCurrency(executiveKPIs.totalSpend)}</div>
        <div className="text-red-100 text-sm mt-1">Total Annual Spend</div>
        <div className="text-xs mt-2 bg-red-600 bg-opacity-50 px-2 py-1 rounded">
          {formatNumber(executiveKPIs.totalTransactions)} transactions
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-6 rounded-xl shadow-lg">
        <div className="text-3xl font-bold">{formatNumber(executiveKPIs.totalVendors)}</div>
        <div className="text-orange-100 text-sm mt-1">Active Vendors</div>
        <div className="text-xs mt-2 bg-orange-600 bg-opacity-50 px-2 py-1 rounded">
          Target: 1,500 (-45%)
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-xl shadow-lg">
        <div className="text-3xl font-bold">{formatCurrency(executiveKPIs.potentialSavings)}</div>
        <div className="text-green-100 text-sm mt-1">Immediate Savings</div>
        <div className="text-xs mt-2 bg-green-600 bg-opacity-50 px-2 py-1 rounded">
          420% ROI Year 1
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-xl shadow-lg">
        <div className="text-3xl font-bold">{executiveKPIs.criticalCases}</div>
        <div className="text-purple-100 text-sm mt-1">Critical Cases</div>
        <div className="text-xs mt-2 bg-purple-600 bg-opacity-50 px-2 py-1 rounded">
          Max Variance: 18.4M%
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Strategic Procurement Dashboard</h1>
          <p className="text-blue-100 text-lg">
            Executive Crisis Response Framework - $85M+ Immediate Savings Identified
          </p>
          <div className="mt-4 flex space-x-6 text-sm">
            <span className="bg-red-500 bg-opacity-20 px-3 py-1 rounded-full">
              🚨 URGENT: Board-level intervention required
            </span>
            <span className="bg-green-500 bg-opacity-20 px-3 py-1 rounded-full">
              💰 420% ROI Year 1 Projection
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* Executive KPIs */}
        <ExecutiveKPIs />

        {/* Integration Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🤖</div>
            <div>
              <h3 className="text-xl font-bold text-blue-800">AI Assistant Integration</h3>
              <p className="text-blue-600 text-sm mt-1">
                This dashboard now includes an AI-powered Strategic Procurement Assistant. 
                Click the "AI Assistant" button to interact with your data using natural language queries.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Strategic Actions Preview */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🎯 Strategic Action Preview</h2>
          <p className="text-gray-600 mb-4">
            Preview of strategic actions. Use the AI Assistant for detailed analysis and project planning.
          </p>
          <div className="space-y-4">
            {strategicActions.slice(0, 3).map((action, index) => (
              <div key={index} className={`border-l-4 pl-6 py-4 rounded-r-lg ${
                action.priority === 'Critical' ? 'border-red-500 bg-red-50' :
                action.priority === 'High' ? 'border-orange-500 bg-orange-50' :
                'border-yellow-500 bg-yellow-50'
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{action.action}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    action.priority === 'Critical' ? 'bg-red-500 text-white' :
                    action.priority === 'High' ? 'bg-orange-500 text-white' :
                    'bg-yellow-500 text-white'
                  }`}>
                    {action.priority}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{action.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-semibold">Savings: {formatCurrency(action.savings)}</span>
                  <span className="text-gray-500">Timeline: {action.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;