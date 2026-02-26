import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Laura Fernández',
    role: 'CEO, StartupBoost',
    country: 'España',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    content: 'Encontré un desarrollador increíble de Argentina en menos de 24 horas. La calidad del trabajo superó mis expectativas y el precio fue muy competitivo.',
    rating: 5,
  },
  {
    name: 'Roberto Silva',
    role: 'Freelancer Designer',
    country: 'Colombia',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    content: 'Gracias a FreelanceLatam he conseguido clientes de España y México. La plataforma me ha permitido crecer profesionalmente y trabajar en proyectos internacionales.',
    rating: 5,
  },
  {
    name: 'Carmen Vargas',
    role: 'Marketing Manager',
    country: 'Chile',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    content: 'Necesitábamos un community manager urgente. En 48 horas teníamos a la persona perfecta trabajando con nosotros. El proceso fue súper fluido.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-gray-600">
            Miles de empresas y freelancers han encontrado el match perfecto 
            a través de nuestra plataforma.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Quote className="w-5 h-5 text-emerald-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} · {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
