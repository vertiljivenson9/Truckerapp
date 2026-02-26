import { freelancers } from '@/data/freelancers';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';

export function FeaturedFreelancers() {
  const featuredFreelancers = freelancers.slice(0, 4);

  return (
    <section id="freelancers" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Freelancers Destacados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Los mejores profesionales
            </h2>
            <p className="text-lg text-gray-600">
              Descubre talento verificado con excelentes calificaciones y experiencia comprobada.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 self-start sm:self-auto"
          >
            Ver todos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Freelancers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFreelancers.map((freelancer) => (
            <Card
              key={freelancer.id}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-white"
            >
              <CardContent className="p-0">
                {/* Header with Image */}
                <div className="relative h-24 bg-gradient-to-br from-emerald-500 to-teal-600">
                  <div className="absolute -bottom-10 left-4">
                    <div className="relative">
                      <img
                        src={freelancer.image}
                        alt={freelancer.name}
                        className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-lg"
                      />
                      {freelancer.isVerified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  {freelancer.isPro && (
                    <Badge className="absolute top-3 right-3 bg-amber-400 text-amber-900 hover:bg-amber-400 font-semibold text-xs">
                      PRO
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="pt-12 pb-5 px-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {freelancer.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-1">
                    {freelancer.title}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{freelancer.location}, {freelancer.country}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold text-gray-900">{freelancer.rating}</span>
                    </div>
                    <span className="text-gray-400">·</span>
                    <span className="text-sm text-gray-500">{freelancer.reviews} reseñas</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {freelancer.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {freelancer.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                        +{freelancer.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${freelancer.hourlyRate}</span>
                      <span className="text-gray-500 text-sm">/hora</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Briefcase className="w-4 h-4" />
                      <span>{freelancer.completedJobs}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
