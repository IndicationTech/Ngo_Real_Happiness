// "use client";

// import { motion } from "framer-motion";

// export default function OurReachMaharashtra() {
//   return (
//     <section className="w-full py-8 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-[35%_65%] gap-14 items-start px-6">
//         {/* LEFT TEXT – 30% */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Reach</h2>
//           <p className="text-gray-600 leading-relaxed">
//             We are actively working across key regions of Maharashtra, reaching
//             communities through education, healthcare, and empowerment
//             initiatives.
//           </p>
//         </motion.div>

//         {/* VIDEO – 70% */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="h-full"
//         >
//           <div className="relative w-full aspect-[4/3]">
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="auto"
//               className="w-full h-full object-contain block"
//             >
//               <source src="/mapvid.mp4" type="video/mp4" />
//             </video>
//             {/* <img src="/Map.svg" alt="" /> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function OurReachMaharashtra() {
  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 items-start px-8">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-5">Our Reach</h2>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            We are actively working across key regions of Maharashtra, reaching
            communities through education, healthcare, and empowerment
            initiatives.
          </p>
        </motion.div>

        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="relative w-full aspect-[16/9]  overflow-hidden ">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-fit"
            >
              <source src="/mapvid.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
