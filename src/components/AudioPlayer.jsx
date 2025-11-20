import { useRef, useState } from "react";
import { FaPlay, FaPause, FaRandom, FaRedo, FaHeart, FaBackward, FaForward } from "react-icons/fa";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    setProgress((currentTime / duration) * 100 || 0);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center mt-6">

      {/* PLAYER */}
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Barra superior */}
      <div className="w-[90%] max-w-[400px] flex items-center gap-3">
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          className="w-full accent-gold"
        />

        <FaHeart className="text-black-soft text-xl" />
      </div>

      {/* Controles */}
      <div className="flex items-center justify-center gap-6 mt-4 text-black-soft">

        <FaRandom className="text-xl opacity-70" />

        <FaBackward className="text-xl opacity-70" />

        <button
          onClick={togglePlay}
          className="bg-black-soft/90 text-white p-3 rounded-full shadow-lg hover:bg-black-soft transition"
        >
          {playing ? <FaPause /> : <FaPlay />}
        </button>

        <FaForward className="text-xl opacity-70" />

        <FaRedo className="text-xl opacity-70" />
      </div>

      {/* Texto */}
      <p className="mt-4 text-smoke italic text-lg font-titulo">
        Escucha nuestra canción favorita...
      </p>
    </div>
  );
}
