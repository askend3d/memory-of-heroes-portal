
import { Link } from "react-router-dom";

export interface VeteranProps {
  id: number;
  name: string;
  years: string;
  rank: string;
  service: string;
  photo: string;
  awards?: string[];
}

const VeteranCard = ({ id, name, years, rank, service, photo, awards = [] }: VeteranProps) => {
  return (
    <Link to={`/veteran/${id}`} className="veteran-card block">
      <div className="ribbon h-1.5 w-full"></div>
      <div className="p-4">
        <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-gray-200 rounded-md">
          <img
            src={photo}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold mb-1 text-victory-dark-green">{name}</h3>
        <p className="text-gray-600 text-sm mb-1">{years}</p>
        <p className="text-victory-dark-red font-medium">{rank}</p>
        <p className="text-gray-600 text-sm">{service}</p>
        
        {awards && awards.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {awards.map((award, index) => (
              <span 
                key={index} 
                className="inline-block bg-victory-light-green/10 text-victory-dark-green text-xs px-2 py-1 rounded-full"
              >
                {award}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default VeteranCard;
