import { GameData } from '@/app/models/Game';
import { useState ,useEffect} from 'react';
const TabbedContent = (children: GameData) => {
  const [activeTab, setActiveTab] = useState('min');

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };
  useEffect(()=>{

  },[children ])
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        <li className="mr-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'min' ? 'border-blue-500' : ''}`}
            onClick={() => handleTabClick('min')}
          >
            Minimum Requerements
          </button>
        </li>
        <li className="mr-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === 'Recomm' ? 'border-blue-500' : ''}`}
            onClick={() => handleTabClick('Recomm')}
          >
            Recommended Requerements
          </button>
        </li>
        <li className="mr-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === 'settings' ? 'border-blue-500' : ''}`}
            onClick={() => handleTabClick('settings')}
          >
            Settings
          </button>
        </li>
        
      </ul>

      <div id="default-tab-content ">
        <div
          className={`bg-base-200 p-4 rounded-lg  dark:bg-gray-800 ${activeTab === 'min' ? '' : 'hidden'}`}
          role="tabpanel"
        >
          <h5 className="text-2xl leading-7 text-base-content/80 font-semibold mt-8 mb-4s">
            {children.Minimum_Requirements.split(/(?:,| )+/) // Split by comma, space, or both
              .map(item => item.replace(':', ':\n'))
              .join('\n')}
          </h5>
        </div>
        <div
          className={`bg-base-200 p-4 rounded-lg  dark:bg-gray-800 ${activeTab === 'Recomm' ? '' : 'hidden'}`}
          role="tabpanel"
        >
          <h5 className="text-2xl leading-7 text-base-content/80 font-semibold mt-8 mb-4s">
            {children.Recommended_Requirements.split(/(?:,| )+/) // Split by comma, space, or both
              .map(item => item.replace(':', ':\n'))
              .join('\n')}
          </h5>
        </div>
        <div
          className={`bg-base-200 p-4 rounded-lg  dark:bg-gray-800 ${activeTab === 'settings' ? '' : 'hidden'}`}
          role="tabpanel"
        >
          <h5 className="text-2xl leading-7 text-base-content/80 font-semibold mt-8 mb-4s">
            {children.Title}
          1. Extract
          2.Install
          3. Play! 

          </h5>
        </div>
        
        {/* Repeat the above <div> structure for other tabs */}
      </div>
    </div>
  );
};

export default TabbedContent;
