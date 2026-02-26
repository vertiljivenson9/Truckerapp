import { UserPlus, Search, MessageSquare, Briefcase, Shield, Zap } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Crea tu perfil',
    description: 'Regístrate gratis como freelancer o empresa. Completa tu información y verifica tu cuenta.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Search,
    title: 'Encuentra matches',
    description: 'Busca trabajos o talento según tus necesidades. Filtra por skills, ubicación y presupuesto.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: MessageSquare,
    title: 'Conecta y negocia',
    description: 'Comunícate directamente, revisa portafolios y acuerda términos antes de empezar.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Briefcase,
    title: 'Trabaja y crece',
    description: 'Entrega proyectos de calidad, recibe pagos seguros y construye tu reputación.',
    color: 'from-orange-500 to-amber-500',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Pagos Seguros',
    description: 'Tu dinero está protegido. Liberamos los fondos solo cuando el trabajo está aprobado.',
  },
  {
    icon: Zap,
    title: 'Proceso Rápido',
    description: 'Publica un trabajo en minutos. Recibe propuestas de freelancers calificados en horas.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-4">
            Cómo Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Empieza en 4 simples pasos
          </h2>
          <p className="text-lg text-gray-400">
            Nuestra plataforma conecta empresas con talento hispanohablante 
            de forma rápida, segura y eficiente.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-800 -z-10">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-700 rounded-full" />
                </div>
              )}

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group-hover:bg-gray-800">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-700 text-white text-sm font-bold flex items-center justify-center border-4 border-gray-900">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
