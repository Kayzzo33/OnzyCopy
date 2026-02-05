import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770256384/IMG_8479-scaled_x2otdu.webp",
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770256383/IMG_8477-scaled_bv1agk.webp",
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770256433/IMG_8484-scaled_cknwy5.webp",
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770256383/IMG_8481-scaled_h3sgob.webp",
  "https://res.cloudinary.com/ddxo3s8an/image/upload/v1770256383/IMG_8480-scaled_gjk6zy.webp"
];

const InfluencerCarousel: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
          Produtores de conteúdo que utilizam<br/>
          nosso storytelling para engajar:
        </h2>
      </div>

      <div className="flex w-full overflow-hidden mask-linear-fade">
        <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ width: "fit-content" }}
        >
            {/* Double the array to create seamless loop */}
            {[...images, ...images, ...images].map((src, i) => (
                <div 
                    key={i} 
                    className="w-[280px] md:w-[350px] shrink-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group"
                >
                    <img 
                        src={src} 
                        alt={`Influencer post ${i}`} 
                        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
            ))}
        </motion.div>
      </div>

      <style>{`
            .mask-linear-fade {
                mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            }
        `}</style>
    </div>
  );
};

export default InfluencerCarousel;