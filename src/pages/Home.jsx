import anillos from "../assets/anillos.png";
import AudioPlayerC from "../components/AudioPlayer";
import CarruselPolaroid from "../components/Carrusel";
import yape from "../assets/yape.jpg";
import cancion from "../assets/cancion.mp3";
import Contador from "../components/Contador";
import Fecha from "../components/Fecha";
import SeparadorCorazon from "../components/SeparadorCorazon";
import SeparadorFlores from "../components/SeparadorFlores";
import Itinerario from "../components/Intinerario";
import Confirmacion from "../components/Confirmacion";
import RegalosTransferencia from "../components/RegalosTransferencia";

// fotos recuerdos
import fotos1 from "../assets/fotos/foto1.jpg";
import fotos2 from "../assets/fotos/foto2.jpg";
import fotos3 from "../assets/fotos/foto3.jpg";
import fotos4 from "../assets/fotos/foto4.jpg";
import fotos5 from "../assets/fotos/foto5.jpg";
import fotos6 from "../assets/fotos/foto6.jpg";
import fotos7 from "../assets/fotos/foto7.jpg";
import fotos8 from "../assets/fotos/foto8.jpg";
import fotos9 from "../assets/fotos/foto9.jpg";
import fotos10 from "../assets/fotos/foto10.jpg";
import fotos11 from "../assets/fotos/foto11.jpg";
import fotos12 from "../assets/fotos/foto12.jpg";
import fotos13 from "../assets/fotos/foto13.jpg";
import fotos14 from "../assets/fotos/foto14.jpg";

const Home = () => {
  const fotos = [
    // { src: fotos12, desc: "Viajando juntos." },
    { src: fotos3, desc: "Primera salida juntos" },
    { src: fotos1, desc: "Una salida nocturna de mucha diversión." },
    { src: fotos2, desc: "Actividades juntos." },
    { src: fotos4, desc: "El dia en que nos entramos que sentiamos lo mismo." },
    { src: fotos5, desc: "Dia de la declaración de amor." },
    { src: fotos6, desc: "Primer dia de novios." },
    { src: fotos7, desc: "Dia de la madre juntos." },
    { src: fotos8, desc: "Nuestra confe JAS." },
    { src: fotos10, desc: "El lazo mas fuerte que nos une." },
    { src: fotos9, desc: "Pedida de mano en una hermosa salidita." },
  ];

  const fecha = "2025-12-20T16:00:00";

  return (
    <div className="min-h-screen bg-[#FAF7F2]  font-[Poppins]">
      <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Fondo desenfocado */}
        <img
          src={fotos12}
          alt="Nosotros"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
        />

        {/* Texto arriba */}
        <h2
          className="
    absolute top-16 md:top-24
    text-4xl md:text-5xl
    font-[Playfair_Display] italic
    text-gold z-20
    drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]
  "
        >
          ¡Nos casamos!
        </h2>

        {/* Foto principal */}
        <img
          src={fotos12}
          alt="Nosotros"
          className="relative z-10 w-3/4 md:w-1/2 rounded-3xl shadow-2xl border-4 border-gold"
        />

        {/* Texto abajo */}
        <h3 className="absolute bottom-16 md:bottom-24 text-4xl md:text-6xl font-[Great_Vibes] italic text-white drop-shadow-lg z-20">
          Martín & Fabiola
        </h3>
      </section>

      <section className="text-center py-12 ">
        <p className="font-[Playfair_Display] text-black-soft mb-4 px-2">
          Eres parte de nuestras personas especiales y por eso queremos compartir contigo nuestro
        </p>
        <h1 className="text-5xl font-[Playfair_Display] italic text-[#B28F00] mb-2">
          Matrimonio Civil
        </h1>
        <img
          src={anillos}
          alt="Anillos de boda"
          className="w-auto h-16 mx-auto mb-2"
        />
      </section>

      <div className="my-12">
        <AudioPlayerC src={cancion} />
      </div>
      

      <section className="text-center my-10 font-[Playfair_Display] text-black-soft px-8">
        <p className="mb-4">
          Cuando Dios es el centro del amor en una pareja, el amor se vuelve más
          fuerte, más puro y eterno.
        </p>
        <p className="mb-4">
          Él cruzó nuestros caminos en el momento perfecto, ha sido nuestra
          guía, nuestra fuerza y nuestra luz.
        </p>
        <p className="mb-4">
          Nos enseñó que el verdadero amor es paciente, bondadoso y lleno de fé.
        </p>
        <p className="mb-4">
          Hemos decidido unir nuestras vidas en matrimonio civil, con la certeza
          de que no caminamos solos, porque Dios es y será siempre el centro de
          nuestro amor.
        </p>
        <SeparadorCorazon />
      </section>
      <CarruselPolaroid fotos={fotos} />
      <SeparadorCorazon />
      <Fecha fecha={fecha} foto={fotos3} />
      <section className="py-10 text-center">
        <div>
          <Contador fechaObjetivo={fecha} />
        </div>
      </section>
      <SeparadorFlores />
      <div className="my-12">
        <Itinerario
          fecha={fecha}
          horaCeremonia="3:00 PM"
          lugarCeremonia="Canto Grande"
          mapsCeremonia="https://www.google.com/maps?q=Canto+Grande"
          horaRecepcion="6:00 PM"
          lugarRecepcion="Portada del Sol"
          mapsRecepcion="https://www.google.com/maps?q=Portada+del+Sol"
        />
      </div>
      <div>
        <RegalosTransferencia
          numeroCuenta="Interbank - 8983482700324"
          yapeQR={yape}
        />
      </div>
      <div className="my-2">
        <Confirmacion
          onConfirmar={() => {
            console.log("Asistencia confirmada");
          }}
        />
      </div>
    </div>
  );
};

export default Home;
