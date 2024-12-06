import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { DatosHistorialMedicoProvider } from "@/app/provider/datosHistorialMedicoProvider";
import { DatosIdentificacionProvider } from "@/app/provider/datosIdentificaciónProvider";
import { DatosMedicosProvider } from "@/app/provider/datosMedicosProvider";
import { DatosAfiliacionServiciosSaludProvider } from "./provider/datosAfiliaciónServiciosSaludProvider";
import { DatosAntecedentesPsicologicosProvider } from "./provider/datosAntecedentesPsicologicosProvider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <DatosIdentificacionProvider>
            <DatosMedicosProvider>
              <DatosHistorialMedicoProvider>
                <DatosAfiliacionServiciosSaludProvider>
                  <DatosAntecedentesPsicologicosProvider>
                    <main>
                      {children}
                    </main>
                  </DatosAntecedentesPsicologicosProvider>
                </DatosAfiliacionServiciosSaludProvider>
              </DatosHistorialMedicoProvider>
            </DatosMedicosProvider>
          </DatosIdentificacionProvider>
        </Providers>
      </body>
    </html>
  );
}
