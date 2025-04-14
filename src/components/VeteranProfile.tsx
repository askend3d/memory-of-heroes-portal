
import { Star, Medal, Flag, MapPin, Calendar } from "lucide-react";

export interface VeteranProfileProps {
  id: number;
  name: string;
  birthYear: string;
  deathYear: string;
  rank: string;
  service: string;
  photo: string;
  story: string;
  battles?: string[];
  awards?: string[];
  location?: string;
}

const VeteranProfile = ({
  name,
  birthYear,
  deathYear,
  rank,
  service,
  photo,
  story,
  battles = [],
  awards = [],
  location
}: VeteranProfileProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="ribbon h-2 w-full"></div>
      
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Фото и основная информация */}
          <div className="md:col-span-1">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-md mb-4">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold text-victory-dark-blue">{name}</h1>
              
              <div className="flex items-center text-gray-700">
                <Calendar className="w-4 h-4 mr-2 text-victory-dark-red" />
                <span>{birthYear} — {deathYear}</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <Star className="w-4 h-4 mr-2 text-victory-dark-red" />
                <span>{rank}</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <Flag className="w-4 h-4 mr-2 text-victory-dark-red" />
                <span>{service}</span>
              </div>
              
              {location && (
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 mr-2 text-victory-dark-red" />
                  <span>{location}</span>
                </div>
              )}
            </div>
            
            {/* Награды */}
            {awards && awards.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-bold mb-2 flex items-center">
                  <Medal className="w-4 h-4 mr-2 text-victory-gold" />
                  Награды
                </h2>
                <div className="flex flex-wrap gap-2">
                  {awards.map((award, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-victory-gold/10 text-victory-dark-red rounded-full text-sm"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* История и боевой путь */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-victory-dark-blue">Боевой путь и история</h2>
            
            {battles && battles.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Участие в сражениях</h3>
                <div className="space-y-1">
                  {battles.map((battle, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-victory-dark-red rounded-full mr-2"></div>
                      <span>{battle}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="prose max-w-none">
              {story.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeteranProfile;
