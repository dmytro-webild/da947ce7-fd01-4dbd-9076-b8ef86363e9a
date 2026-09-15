import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TeamProfileCards from '@/components/sections/team/TeamProfileCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Seguridad de Vanguardia"
      title="Seguridad y Tecnología en la que Podés Confiar"
      description="Soluciones avanzadas en CCTV, redes, equipos POS y alarmas para proteger tu hogar y potenciar tu negocio en Costa Rica."
      primaryButton={{
        text: "Solicitar Cotización",
        href: "#contacto",
      }}
      secondaryButton={{
        text: "Ver Catálogo",
        href: "#categorias",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-working-with-devices_23-2149307794.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-round-modern-webcam-with-shadows-background_23-2150808006.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/successful-hacker-celebrating-phishing-achievement-pc-feeling-happy-about-stealing-passwords-night-skilled-spy-enjoying-cyberattack-success-with-malware-break-firewall_482257-66409.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-cybersecurity-concept-design_23-2151841680.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hacker-bypasses-network-security-engages-cyber-crime-with-vr-headset_482257-126453.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="marcas" data-section="marcas">
    <SectionErrorBoundary name="marcas">
          <SocialProofMarquee
      tag="Aliados Tecnológicos"
      title="Nuestras Marcas Aliadas"
      description="Trabajamos con líderes mundiales en tecnología para garantizar calidad y respaldo."
      names={[
        "Hikvision",
        "Dahua",
        "Ezviz",
        "Lenovo",
        "Western Digital",
        "TP-Link",
        "Ruijie",
        "SAT",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="categorias" data-section="categorias">
    <SectionErrorBoundary name="categorias">
          <FeaturesImageBento
      tag="Soluciones"
      title="Categorías de Productos"
      description="Equipos de alto rendimiento diseñados para cubrir todas tus necesidades."
      items={[
        {
          title: "CCTV",
          description: "Cámaras de seguridad inteligentes.",
          imageSrc: "http://img.b2bpic.net/free-photo/rendering-smart-home-device_23-2151039326.jpg",
        },
        {
          title: "POS",
          description: "Equipos para punto de venta.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-showing-digital-tablet-near-croissant-bakery-counter_23-2148189114.jpg",
        },
        {
          title: "Redes",
          description: "Routers, switches y Access Points.",
          imageSrc: "http://img.b2bpic.net/free-photo/wi-fi-sign-wooden-wall-corridor-modern-building_657883-245.jpg",
        },
        {
          title: "Alarmas",
          description: "Sistemas de seguridad activa.",
          imageSrc: "http://img.b2bpic.net/free-photo/home-theater-projector-setup-modern-living-room_23-2151978658.jpg",
        },
        {
          title: "Accesorios",
          description: "Todo lo necesario para tu instalación.",
          imageSrc: "http://img.b2bpic.net/free-photo/notepad-near-retro-cameras-film_23-2147852379.jpg",
        },
        {
          title: "Seguridad IoT",
          description: "Dispositivos conectados.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-round-modern-webcam-with-copy-space_23-2150808003.jpg",
        },
        {
          title: "Servicios",
          description: "Soporte y mantenimiento.",
          imageSrc: "http://img.b2bpic.net/free-photo/easy-wireless-yechnology-payment_23-2149105207.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="populares" data-section="populares">
    <SectionErrorBoundary name="populares">
          <FeaturesImageBento
      tag="Más Vendidos"
      title="Lo Más Popular"
      description="Productos destacados por nuestros clientes por su calidad y confiabilidad."
      items={[
        {
          title: "Cámara Hikvision",
          description: "Alta resolución nocturna.",
          imageSrc: "http://img.b2bpic.net/free-photo/surveillance-camera-built-into-stone-wall-building_93675-131321.jpg",
        },
        {
          title: "NVR 8 Canales",
          description: "Grabación inteligente continua.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-national-secret-service-operation-room-used-follow-safety-alerts_482257-90051.jpg",
        },
        {
          title: "Router TP-Link",
          description: "Conectividad estable avanzada.",
          imageSrc: "http://img.b2bpic.net/free-photo/wifi-spelled-out-with-arrows_23-2148291110.jpg",
        },
        {
          title: "Impresora POS",
          description: "Impresión térmica ultra rápida.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-customer-paying-with-nfc-device_23-2150689992.jpg",
        },
        {
          title: "Switch Ruijie",
          description: "Gestión de red profesional.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-vacuum-cleaner-robot-flat-surface-floor_23-2151736831.jpg",
        },
        {
          title: "Alarma Ezviz",
          description: "Protección inalámbrica instantánea.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-using-smartphone-his-automated-home_23-2149036893.jpg",
        },
        {
          title: "Disco Duro WD",
          description: "Almacenamiento para vigilancia.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-army-command-post-with-russian-flag-running-big-screen_482257-94918.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="tiendas" data-section="tiendas">
    <SectionErrorBoundary name="tiendas">
          <TeamProfileCards
      tag="Visítanos"
      title="Nuestras Tiendas"
      description="Atención personalizada en nuestras sucursales de Alajuela y San Pedro."
      items={[
        {
          title: "JS Store Alajuela",
          description: "Plaza Eliz, Alajuela | Lun-Vie 8am-6pm",
          avatarSrc: "http://img.b2bpic.net/free-photo/women-getting-display-window-japanese-hairdressers-ready_23-2149395754.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-minimal-background-with-floor_23-2149207754.jpg",
          buttonText: "Ver Ubicación",
        },
        {
          title: "JS Store San Pedro",
          description: "Mall San Pedro, 3er piso | Lun-Dom 10am-8pm",
          avatarSrc: "http://img.b2bpic.net/free-photo/african-american-woman-overalls-beret-walking-out-door-outdoor-terrace-with-christmas-decorations_627829-6925.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/village-landscape_1182-836.jpg",
          buttonText: "Ver Ubicación",
        },
        {
          title: "Soporte Técnico",
          description: "Contamos con técnicos expertos para tu ayuda.",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-male-barista-with-tattoos-waiting-outside-coffeehouse-before-opening_23-2149052830.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-minimal-background-with-floor_23-2149207730.jpg",
          buttonText: "Consultar",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Dudas Comunes"
      title="Preguntas Frecuentes"
      description="Resolvemos tus dudas sobre servicios, garantías y equipos."
      items={[
        {
          question: "¿Ofrecen instalación?",
          answer: "Sí, realizamos instalaciones profesionales de todos nuestros equipos.",
        },
        {
          question: "¿Qué garantía tienen?",
          answer: "Todos nuestros productos cuentan con garantía oficial de marca.",
        },
        {
          question: "¿Venden a particulares?",
          answer: "Sí, atendemos tanto a empresas como a clientes finales.",
        },
        {
          question: "¿Hacen envíos al país?",
          answer: "Realizamos envíos a todo Costa Rica vía mensajería.",
        },
        {
          question: "¿Qué formas de pago aceptan?",
          answer: "Aceptamos efectivo, transferencia y tarjetas crédito/débito.",
        },
        {
          question: "¿Tienen soporte post-venta?",
          answer: "Brindamos soporte técnico y mantenimiento especializado.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/social-network-connection-with-woman-video-chatting-smiling_53876-98446.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contacto" data-section="contacto">
    <SectionErrorBoundary name="contacto">
          <ContactCta
      tag="Contacto"
      text="Contanos sobre tu proyecto y te respondemos en 24 horas"
      primaryButton={{
        text: "Enviar Mensaje",
        href: "#",
      }}
      secondaryButton={{
        text: "Ver Catálogo",
        href: "#categorias",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
