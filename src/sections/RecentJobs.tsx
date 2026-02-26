import { jobs } from '@/data/freelancers';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  DollarSign,
  Calendar
} from 'lucide-react';

export function RecentJobs() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Hace 1 día';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
  };

  const formatBudget = (job: typeof jobs[0]) => {
    const { min, max, type } = job.budget;
    if (type === 'fixed') {
      return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    }
    return `$${min}/hr - $${max}/hr`;
  };

  return (
    <section id="jobs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Trabajos Recientes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Oportunidades disponibles
            </h2>
            <p className="text-lg text-gray-600">
              Empresas buscando talento hispanohablante ahora mismo. 
              Aplica y empieza a trabajar remoto.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 self-start sm:self-auto"
          >
            Ver todos los trabajos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="group border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {job.title}
                      </h3>
                      {job.client.verified && (
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Verificado
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.client.country}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{formatDate(job.postedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{job.proposals} propuestas</span>
                      </div>
                    </div>
                  </div>

                  {/* Budget & CTA */}
                  <div className="lg:text-right flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:min-w-[180px]">
                    <div>
                      <div className="flex items-center lg:justify-end gap-1 text-emerald-600 mb-1">
                        <DollarSign className="w-5 h-5" />
                        <span className="text-xl font-bold">{formatBudget(job)}</span>
                      </div>
                      <div className="flex items-center lg:justify-end gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="capitalize">{job.budget.type === 'fixed' ? 'Precio fijo' : 'Por hora'}</span>
                      </div>
                    </div>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      Aplicar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Eres freelancer? Publica tu perfil y recibe ofertas
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8">
            Crear perfil gratis
          </Button>
        </div>
      </div>
    </section>
  );
}
