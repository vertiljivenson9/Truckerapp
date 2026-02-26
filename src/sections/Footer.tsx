import { Globe, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  paraFreelancers: [
    { label: 'Crear perfil', href: '#' },
    { label: 'Buscar trabajos', href: '#' },
    { label: 'Recursos', href: '#' },
    { label: 'Comunidad', href: '#' },
  ],
  paraEmpresas: [
    { label: 'Publicar trabajo', href: '#' },
    { label: 'Buscar talento', href: '#' },
    { label: 'Precios', href: '#' },
    { label: 'Soluciones', href: '#' },
  ],
  recursos: [
    { label: 'Blog', href: '#' },
    { label: 'Guías', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Soporte', href: '#' },
  ],
  legal: [
    { label: 'Términos de uso', href: '#' },
    { label: 'Privacidad', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">
                Freelance<span className="text-emerald-500">Latam</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Conectamos el mejor talento hispanohablante con empresas de todo el mundo. 
              Trabaja remoto, crece profesionalmente.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Suscríbete a nuestro newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-emerald-500"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600 px-4">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Para Freelancers</h4>
                <ul className="space-y-3">
                  {footerLinks.paraFreelancers.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Para Empresas</h4>
                <ul className="space-y-3">
                  {footerLinks.paraEmpresas.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Recursos</h4>
                <ul className="space-y-3">
                  {footerLinks.recursos.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-400 text-sm">
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>hola@freelancelatam.com</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>+1 (809) 555-0123</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Santo Domingo, República Dominicana</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 FreelanceLatam. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
