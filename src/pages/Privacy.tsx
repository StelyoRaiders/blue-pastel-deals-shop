
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
            
            <div className="space-y-8 text-foreground/80">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">1. Información que Recopilamos</h2>
                <p className="mb-4">
                  En GameFuel Store recopilamos la siguiente información:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Información personal:</strong> Nombre, dirección de correo electrónico</li>
                  <li><strong>Información de pago:</strong> Procesada de forma segura a través de terceros</li>
                  <li><strong>Información de uso:</strong> Páginas visitadas, productos visualizados</li>
                  <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, dispositivo</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">2. Cómo Utilizamos su Información</h2>
                <p className="mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesar y entregar sus pedidos</li>
                  <li>Proporcionar soporte al cliente</li>
                  <li>Mejorar nuestros productos y servicios</li>
                  <li>Enviar actualizaciones importantes sobre su cuenta</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">3. Compartir Información</h2>
                <p className="mb-4">
                  No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesadores de pago autorizados para completar transacciones</li>
                  <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                  <li>Cuando sea requerido por ley o autoridades competentes</li>
                  <li>Para proteger nuestros derechos y la seguridad de nuestros usuarios</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">4. Seguridad de Datos</h2>
                <p className="mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encriptación SSL para todas las transmisiones de datos</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo regular de nuestros sistemas</li>
                  <li>Capacitación del personal en protección de datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">5. Cookies y Tecnologías Similares</h2>
                <p className="mb-4">
                  Utilizamos cookies y tecnologías similares para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mantener su sesión iniciada</li>
                  <li>Recordar sus preferencias</li>
                  <li>Analizar el uso del sitio web</li>
                  <li>Personalizar su experiencia</li>
                </ul>
                <p className="mt-4">
                  Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">6. Sus Derechos</h2>
                <p className="mb-4">
                  Usted tiene derecho a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a su información personal</li>
                  <li>Rectificar datos incorrectos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Restringir el procesamiento de sus datos</li>
                  <li>Portabilidad de datos</li>
                  <li>Oponerse al procesamiento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">7. Retención de Datos</h2>
                <p className="mb-4">
                  Conservamos su información personal solo el tiempo necesario para cumplir con los 
                  propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">8. Cambios en esta Política</h2>
                <p className="mb-4">
                  Nos reservamos el derecho de actualizar esta política de privacidad. Los cambios 
                  significativos serán comunicados a través de nuestro sitio web o por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">9. Contacto</h2>
                <p className="mb-4">
                  Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos sus datos, 
                  contáctenos a través de nuestros canales oficiales de soporte.
                </p>
              </section>

              <div className="border-t border-white/20 pt-6 mt-8">
                <p className="text-sm text-foreground/60">
                  Última actualización: Junio 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
