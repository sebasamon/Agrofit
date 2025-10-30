import { Leaf, Users, Shield } from 'lucide-react';
import { getESGColor, getESGLabel } from '@/lib/utils';

interface ESGBadgeProps {
  environmental: number;
  social: number;
  governance: number;
  overall: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function ESGBadge({ environmental, social, governance, overall, size = 'md' }: ESGBadgeProps) {
  const iconSize = size === 'sm' ? 'h-5 w-5' : size === 'lg' ? 'h-8 w-8' : 'h-6 w-6';
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base';
  const scoreSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-4xl' : 'text-3xl';

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      {/* Overall Score */}
      <div className="text-center mb-6">
        <div className={`${scoreSize} font-bold ${getESGColor(overall)} mb-2`}>
          {overall}
        </div>
        <div className="text-gray-600 font-semibold">Puntuación ESG Global</div>
        <div className={`text-sm ${getESGColor(overall)} font-medium`}>
          {getESGLabel(overall)}
        </div>
      </div>

      {/* Individual Scores */}
      <div className="space-y-4">
        {/* Environmental */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Leaf className={`${iconSize} ${getESGColor(environmental)}`} />
            <div>
              <div className={`${textSize} font-semibold text-gray-900`}>Ambiental</div>
              <div className="text-xs text-gray-500">{getESGLabel(environmental)}</div>
            </div>
          </div>
          <div className={`${textSize} font-bold ${getESGColor(environmental)}`}>
            {environmental}
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users className={`${iconSize} ${getESGColor(social)}`} />
            <div>
              <div className={`${textSize} font-semibold text-gray-900`}>Social</div>
              <div className="text-xs text-gray-500">{getESGLabel(social)}</div>
            </div>
          </div>
          <div className={`${textSize} font-bold ${getESGColor(social)}`}>
            {social}
          </div>
        </div>

        {/* Governance */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className={`${iconSize} ${getESGColor(governance)}`} />
            <div>
              <div className={`${textSize} font-semibold text-gray-900`}>Gobernanza</div>
              <div className="text-xs text-gray-500">{getESGLabel(governance)}</div>
            </div>
          </div>
          <div className={`${textSize} font-bold ${getESGColor(governance)}`}>
            {governance}
          </div>
        </div>
      </div>
    </div>
  );
}
