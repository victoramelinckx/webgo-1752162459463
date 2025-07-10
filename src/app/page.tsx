
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transforma tu negocio con nuestra web de ventas rápida y soporte 24/7, sin complicaciones." cta1="Digitaliza Ahora" />
<How step1Title="Comparte tu visión" step1Desc="Cuéntanos sobre tu negocio en minutos." step2Title="Hacemos el trabajo" step2Desc="Desarrollamos tu web de ventas." step3Title="Vende en 24h" step3Desc="Lanza tu sitio rápidamente." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Fácilmente" subheadline="Transformamos tu negocio físico en digital sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Gestión Simplificada" beneficio1="Nos encargamos de todo online." beneficiotitulo2="Aumento de Ventas" beneficio2="Convierte recomendaciones en ingresos digitales." />
<Services heading="Impulsa Tus Ventas con Rapidez" description="Webs listas en 24 horas que atraen clientes online." services={[{"name":"Desarrollo Express","icon":"bolt","description":"Webs en menos de 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Posiciona tu web con [producto] y WebGo."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Marketing Digital","icon":"bullhorn","description":"Estrategias para atraer más clientes online."},{"name":"Gestión de Contenido","icon":"edit","description":"Contenido impactante que vende."},{"name":"Análisis de Métricas","icon":"chart-line","description":"Datos clave para mejorar tus ventas."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en proyectos digitales excepcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio?","respuesta":"WebGo transforma tu negocio físico en una tienda online efectiva. Nos encargamos de todo: desde crear un sitio web atractivo hasta implementar estrategias de marketing digital para aumentar tus ventas."},{"pregunta":"No tengo tiempo para gestionar un sitio web. ¿WebGo puede hacerlo por mí?","respuesta":"Sí, en WebGo nos ocupamos de la gestión completa de tu sitio web. Tú te enfocas en tu negocio, nosotros nos encargamos de mantener tu presencia online activa y efectiva."},{"pregunta":"¿Qué beneficios obtengo al vender online con WebGo?","respuesta":"Al vender online con WebGo, llegas a más clientes sin depender solo de recomendaciones. Aumentas tus ventas y tienes acceso a herramientas de marketing digital que hacen crecer tu negocio."},{"pregunta":"¿Cuáles son los primeros pasos para empezar a vender online con WebGo?","respuesta":"El primer paso es contactarnos. Evaluaremos tus necesidades y diseñaremos un plan personalizado para digitalizar tu negocio de manera efectiva y rápida."},{"pregunta":"¿Cómo asegura WebGo que mi sitio web será visible en los motores de búsqueda?","respuesta":"Utilizamos técnicas avanzadas de SEO para asegurar que tu sitio web aparezca en los primeros resultados de búsqueda. Esto aumenta la visibilidad de tu negocio y atrae más clientes potenciales."}]} />
<BookAppointment 
                      heading="Transforma tus Recomendaciones en Ventas Online" 
                      description="WebGo te ayuda a digitalizar tus ventas sin complicaciones, para que puedas enfocarte en hacer crecer tu negocio sin preocuparte por la tecnología."
                      formPostUrl="api/contact-us"
                      projectId="53oJ19HILmQ1r69VkyzxbFe9vMh2"
                    />
<Footer />
    </main>
  );
}
