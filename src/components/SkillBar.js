export default function SkillBar({ name, level }) {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  }