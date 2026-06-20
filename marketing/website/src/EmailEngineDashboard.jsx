import React from 'react';

const EmailEngineDashboard = () => {
  return (
    <div className="bg-slate-50 min-h-screen p-8">
        <header className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Email Engine Command Center</h1>
                <p className="text-gray-500 font-medium">Tracking conversion, nurture, and recovery flows.</p>
            </div>
            <div className="flex space-x-4">
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-xs font-bold text-gray-400 uppercase block">Total Subscribers</span>
                    <span className="text-xl font-bold text-gray-900">12,482</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-xs font-bold text-gray-400 uppercase block">Avg. Open Rate</span>
                    <span className="text-xl font-bold text-indigo-600">42.8%</span>
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-6">Active Automations</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mr-4 text-xl">
                                    <i className="fas fa-hand-sparkles"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold">Welcome & Indoctrination</h4>
                                    <p className="text-xs text-indigo-600 font-medium">5-Step Sequence | Live</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-indigo-900">58% Open</p>
                                <p className="text-xs text-indigo-400">12.4% Click</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl border border-pink-100">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-pink-600 text-white rounded-lg flex items-center justify-center mr-4 text-xl">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold">Abandoned Cart Recovery</h4>
                                    <p className="text-xs text-pink-600 font-medium">3-Step Sequence | Live</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-pink-900">41% Open</p>
                                <p className="text-xs text-pink-400">8.2% Recovered</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4 text-xl">
                                    <i className="fas fa-newspaper"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold">The Weekly Curator</h4>
                                    <p className="text-xs text-blue-500 font-medium">Recurring | Sent Fridays</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-blue-600">38% Open</p>
                                <p className="text-xs text-blue-400">Next send: 4 days</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-6">Audience Segments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold">New Leads</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">1,240</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-indigo-500 h-2 rounded-full" style={{width: '15%'}}></div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold">Engaged Nurture</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">8,450</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-500 h-2 rounded-full" style={{width: '65%'}}></div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold">Active Members</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">2,100</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold">Cold (90+ Days)</span>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">692</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gray-400 h-2 rounded-full" style={{width: '8%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-xl">
                    <h2 className="text-xl font-bold mb-4">Quick Templates</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center p-2 hover:bg-white/10 rounded cursor-pointer transition">
                            <i className="far fa-file-alt mr-3 text-indigo-400"></i>
                            <span className="text-sm">Welcome Sequence Copy</span>
                        </li>
                        <li className="flex items-center p-2 hover:bg-white/10 rounded cursor-pointer transition">
                            <i className="far fa-file-alt mr-3 text-purple-400"></i>
                            <span className="text-sm">Abandoned Cart Swipe</span>
                        </li>
                        <li className="flex items-center p-2 hover:bg-white/10 rounded cursor-pointer transition">
                            <i className="far fa-file-alt mr-3 text-blue-400"></i>
                            <span className="text-sm">Newsletter "3-2-1" Format</span>
                        </li>
                        <li className="flex items-center p-2 hover:bg-white/10 rounded cursor-pointer transition">
                            <i className="far fa-file-alt mr-3 text-pink-400"></i>
                            <span className="text-sm">Re-engagement Series</span>
                        </li>
                    </ul>
                    <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition shadow-lg shadow-indigo-900/50">
                        Browse All Swipe Files
                    </button>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h2 className="text-lg font-bold mb-4">Optimization Tips</h2>
                    <div className="space-y-4">
                        <div className="flex space-x-3">
                            <i className="fas fa-lightbulb text-yellow-500 mt-1"></i>
                            <p className="text-sm text-gray-600">A/B test your subject lines in the Welcome sequence to hit 60%+ open rates.</p>
                        </div>
                        <div className="flex space-x-3">
                            <i className="fas fa-lightbulb text-yellow-500 mt-1"></i>
                            <p className="text-sm text-gray-600">Add a personal "PS" to every email to increase reply rates and boost deliverability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EmailEngineDashboard;
