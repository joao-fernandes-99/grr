"use client";

import { useState } from "react";
import Head from "next/head";
export default function Home() {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <meta name="google-adsense-account" content="ca-pub-1728156574997000" />
      {!showVideo ? (
        <button
          onClick={handleClick}
          className="bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg border-2 border-gray-800 transition-transform duration-300 ease-in-out hover:bg-yellow-300 hover:scale-105 active:bg-red-500 active:scale-95"
        >
          Don't click here!
        </button>
      ) : (
        <div className="relative w-full max-w-3xl mt-8">
          {" "}
          {/* Adiciona margem superior */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
          >
            X
          </button>
          <video
            controls
            autoPlay
            className="w-full h-auto rounded-lg shadow-lg"
          >
            <source src="/happyend.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      )}
    </div>
  );
}
