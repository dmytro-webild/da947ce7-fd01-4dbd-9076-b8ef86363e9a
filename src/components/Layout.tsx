import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Inicio",
    "href": "#hero"
  },
  {
    "name": "Marcas",
    "href": "#marcas"
  },
  {
    "name": "Categorías",
    "href": "#categorias"
  },
  {
    "name": "Productos",
    "href": "#populares"
  },
  {
    "name": "Tiendas",
    "href": "#tiendas"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Contacto",
    "href": "#contacto"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="JS STORE CR"
      ctaButton={{
        text: "Contáctanos",
        href: "#contacto",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Empresa",
          items: [
            {
              label: "Sobre Nosotros",
              href: "#",
            },
            {
              label: "Marcas",
              href: "#",
            },
          ],
        },
        {
          title: "Ayuda",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contacto",
              href: "#contacto",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Políticas",
              href: "#",
            },
            {
              label: "Privacidad",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 JS STORE CR. Todos los derechos reservados."
      rightText="Seguridad y Tecnología de Confianza"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
