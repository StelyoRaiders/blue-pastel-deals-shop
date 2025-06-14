
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-electric-blue-400 to-pastel-purple-400 bg-clip-text text-transparent">
              Términos y Condiciones
            </h1>
            
            <div className="space-y-8 text-foreground/80">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">1. Aceptación de Términos</h2>
                <p className="mb-4">
                  Al acceder y utilizar GameFuel Store, usted acepta cumplir con estos términos y condiciones. 
                  Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">2. Productos y Servicios</h2>
                <p className="mb-4">
                  GameFuel Store ofrece productos digitales incluyendo pero no limitado a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Suscripciones de Discord Nitro</li>
                  <li>Cuentas premium de plataformas de streaming</li>
                  <li>Productos de gaming y software</li>
                  <li>Otros productos digitales según disponibilidad</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">3. Política de Entrega</h2>
                <p className="mb-4">
                  Los productos digitales se entregan de forma instantánea a través de correo electrónico o 
                  panel de cliente. El tiempo de entrega máximo es de 24 horas desde la confirmación del pago.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">4. Política de Reembolso</h2>
                <p className="mb-4">
                  Ofrecemos garantía de reembolso en los siguientes casos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Producto no entregado después de 24 horas</li>
                  <li>Producto defectuoso o no funcional</li>
                  <li>Error en el pedido por parte nuestra</li>
                </ul>
                <p className="mt-4">
                  Las solicitudes de reembolso deben realizarse dentro de 7 días desde la compra.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">5. Uso Responsable</h2>
                <p className="mb-4">
                  El usuario se compromete a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utilizar los productos adquiridos de forma personal y legal</li>
                  <li>No revender los productos sin autorización</li>
                  <li>No compartir credenciales de acceso con terceros</li>
                  <li>Cumplir con los términos de servicio de las plataformas originales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">6. Limitación de Responsabilidad</h2>
                <p className="mb-4">
                  GameFuel Store no se hace responsable por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cambios en las políticas de las plataformas originales</li>
                  <li>Suspensión de cuentas por mal uso del usuario</li>
                  <li>Pérdida de acceso por factores externos a nuestro control</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue-400">7. Contacto</h2>
                <p className="mb-4">
                  Para consultas sobre estos términos, contáctanos a través de nuestro panel de soporte 
                  o los canales oficiales de comunicación.
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

export default Terms;
