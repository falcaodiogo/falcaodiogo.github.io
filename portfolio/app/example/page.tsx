'use client';

import TextPressure from "../components/textPressure";

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`bg-black text-white p-6 rounded-2xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10 grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3">
      {/* Title Section */}
      <div className="md:col-span-3 flex justify-center">
        <TextPressure
          text="Diogos Portofolio"
          fontFamily="Compressa VF"
          fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
          width
          weight
          italic
          flex
          stroke={false}
          scale={false}
          strokeWidth={2}
        />
      </div>

      {/* Design Studio Card */}
      <Card className="md:col-span-2 bg-slate-700">
        <h2 className="text-2xl font-serif italic">DESIGN & 3D <span className="not-italic font-normal">studio for FASHION</span> and entertainment</h2>
        <p className="mt-2 text-sm">3D • BRANDING • WEBSITES</p>
      </Card>

      {/* Animated Logo Placeholder */}
      <Card className="flex justify-center items-center bg-slate-400">
        <div className="w-24 h-24 bg-white rounded-full"></div>
      </Card>

      {/* About Section */}
      <Card className="bg-slate-100 text-black">
        <p>
          Founded by siblings with a shared vision, OTHRWRLD empowers brands to
          express their authentic selves. Specializing in 3D, branding, and web
          design, we craft immersive and engaging experiences that inspire and
          connect with audiences.
        </p>
      </Card>

      {/* Contact Card */}
      <Card className="flex justify-between items-center bg-gray-800">
        <p>Have some questions?</p>
        <span className="text-xl">→</span>
      </Card>

      {/* Entertainment Section */}
      <Card className="md:col-span-1 bg-slate-500">
        <h3 className="text-lg uppercase">Curate Entertainment</h3>
        <div className="w-full h-32 bg-white rounded-lg mt-2"></div>
        <ul className="mt-2 text-sm">
          <li>META</li>
          <li>CURATE TO THE WORLD</li>
          <li>DJ MALIKE</li>
        </ul>
      </Card>

      {/* Footer Links */}
      <div className="md:col-span-3 flex justify-around text-gray-400 text-sm">
        <a href="#">instagram</a>
        <a href="#">awwwards</a>
        <a href="#">linkedin</a>
      </div>
    </div>
  );
}