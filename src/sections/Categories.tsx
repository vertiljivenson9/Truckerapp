import { categories } from '@/data/freelancers';
import { Palette, Code, TrendingUp, FileText, Video, Headphones, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Code,
  TrendingUp,
  FileText,
  Video,
  Headphones,
};

export function Categories() {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Categorías Populares
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Encuentra talento en cada especialidad
          </h2>
          <p className="text-lg text-gray-600">
            Desde diseño gráfico hasta programación, tenemos freelancers expertos 
            en las áreas más demandadas del mercado digital.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Palette;
            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-emerald-200 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900">{category.freelancerCount.toLocaleString()}</span>
                    {' '}freelancers
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900">{category.jobCount}</span>
                    {' '}trabajos
                  </span>
                </div>

                {/* CTA */}
                <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            Ver todas las categorías
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
