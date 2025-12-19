// "use client";

// import React, { useState, useEffect } from "react";
// import { CheckCircle2 } from "lucide-react";

// const ProjectObj = (props) => {
//   const formattedDescription = description.replace(/break/g, "<br/><br/>");
//   const {
//     items = [
//       {
//         id: 1,
//         title: "Trench Excavation",
//         description: "8746 CCTs excavated in 38 villages",
//         image:
//           "https://csspicker.dev/api/image/?q=excavator+trench&image_type=photo",
//       },
//       {
//         id: 2,
//         title: "Water Conservation",
//         description: "Building dams for sustainable water",
//         image: "https://csspicker.dev/api/image/?q=dam+water&image_type=photo",
//       },
//       {
//         id: 3,
//         title: "River Rejuvenation",
//         description: "Restoring natural flow to dry rivers",
//         image:
//           "https://csspicker.dev/api/image/?q=river+nature&image_type=photo",
//       },
//       {
//         id: 4,
//         title: "Tree Plantation",
//         description: "Green cover expansion in rural areas",
//         image:
//           "https://csspicker.dev/api/image/?q=forest+planting&image_type=photo",
//       },
//       {
//         id: 5,
//         title: "Soil Health",
//         description: "Improving fertility for local farmers",
//         image: "https://csspicker.dev/api/image/?q=soil+farm&image_type=photo",
//       },
//       {
//         id: 6,
//         title: "Village Development",
//         description: "Infrastructure for better living",
//         image:
//           "https://csspicker.dev/api/image/?q=village+construction&image_type=photo",
//       },
//       {
//         id: 7,
//         title: "Canal Cleaning",
//         description: "Ensuring water reaches every farm",
//         image:
//           "https://csspicker.dev/api/image/?q=canal+water&image_type=photo",
//       },
//       {
//         id: 8,
//         title: "Drought Relief",
//         description: "Emergency support during dry seasons",
//         image: "https://csspicker.dev/api/image/?q=dry+land&image_type=photo",
//       },
//     ],
//     title = "Facts About Our Project",
//     subtitle = "Project Achievements",
//     description = `
// Vanmitra Shiksha Sahay – School Support for All & One Family One Tree is a holistic initiative focused on strengthening education and environmental sustainability in tribal and rural communities.
// break
// The project supports Adivasi children from remote and economically disadvantaged areas by providing essential school materials, helping reduce dropouts, improve attendance, and encourage continued education with dignity.
// break
// Alongside this, One Family One Tree promotes environmental conservation through free sapling distribution and community-led tree plantation, enhancing green cover, biodiversity, and climate resilience.
// break
// Together, these initiatives empower communities through education, environmental awareness, and active participation, creating a sustainable future for both children and the environment.
// `,
//   } = props;

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % items.length);
//       setRotation((prev) => prev - 360 / items.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [items.length]);

//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT CONTENT — UPDATED */}
//           <div className="space-y-10">
//             <div className="flex items-start gap-4">
//               {/* <CheckCircle2 className="h-7 w-7 text-primary mt-1 shrink-0" /> */}
//               <div>
//                 <h2 className="text-4xl font-bold text-foreground mb-4">
//                   {title}
//                 </h2>
//                 <p
//                   className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
//                   dangerouslySetInnerHTML={{ __html: formattedDescription }}
//                 />
//                 {description}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CIRCULAR CAROUSEL — UNTOUCHED */}
//           <div className="relative flex items-center justify-center h-[700px]">
//             {/* Main Central Image Container */}
//             <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden shadow-2xl border-8 border-white z-10 transition-all duration-700 ease-in-out">
//               <img
//                 src={items[activeIndex].image}
//                 alt={items[activeIndex].title}
//                 className="w-full h-full object-cover transition-opacity duration-500"
//               />
//               {/* Overlay Text */}
//               <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-6">
//                 <h4 className="text-2xl font-bold mb-2 drop-shadow-md">
//                   {items[activeIndex].title}
//                 </h4>
//                 <p className="text-sm opacity-90 drop-shadow-md">
//                   {items[activeIndex].description}
//                 </p>
//               </div>
//             </div>

//             {/* Orbiting Small Images */}
//             <div
//               className="absolute w-full h-full transition-transform duration-1000 ease-in-out"
//               style={{ transform: `rotate(${rotation}deg)` }}
//             >
//               {items.map((item, index) => {
//                 const angle = (index * 360) / items.length;
//                 const radius = 260;
//                 const x = Math.cos((angle * Math.PI) / 180) * radius;
//                 const y = Math.sin((angle * Math.PI) / 180) * radius;

//                 return (
//                   <div
//                     key={item.id}
//                     className={`absolute w-24 h-24 rounded-full border-4 transition-all duration-500 overflow-hidden cursor-pointer
//                     ${
//                       index === activeIndex
//                         ? "border-[#e66a6a] scale-125 z-20"
//                         : "border-gray-400 scale-100 z-0"
//                     }
//                   `}
//                     style={{
//                       left: `calc(50% + ${x}px - 48px)`,
//                       top: `calc(50% + ${y}px - 48px)`,
//                       transform: `rotate(${-rotation}deg)`, // Keep images upright
//                     }}
//                     onClick={() => {
//                       setActiveIndex(index);
//                       setRotation(-(index * (360 / items.length)));
//                     }}
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Decorative Outer Ring */}
//             <div className="absolute w-[520px] h-[520px] border border-dashed border-gray-200 rounded-full pointer-events-none"></div>
//           </div>
//         </div>
//         <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-fade {
//           animation: fadeIn 0.5s ease-out forwards;
//         }
//       `}</style>
//       </div>
//     </section>
//   );
// };

// export default ProjectObj;

"use client";

import React, { useState, useEffect } from "react";

const ProjectObj = (props) => {
  const {
    items = [
      {
        id: 1,
        title: "Trench Excavation",
        description: "8746 CCTs excavated in 38 villages",
        image:
          "https://csspicker.dev/api/image/?q=excavator+trench&image_type=photo",
      },
      {
        id: 2,
        title: "Water Conservation",
        description: "Building dams for sustainable water",
        image: "https://csspicker.dev/api/image/?q=dam+water&image_type=photo",
      },
      {
        id: 3,
        title: "River Rejuvenation",
        description: "Restoring natural flow to dry rivers",
        image:
          "https://csspicker.dev/api/image/?q=river+nature&image_type=photo",
      },
      {
        id: 4,
        title: "Tree Plantation",
        description: "Green cover expansion in rural areas",
        image:
          "https://csspicker.dev/api/image/?q=forest+planting&image_type=photo",
      },
      {
        id: 5,
        title: "Soil Health",
        description: "Improving fertility for local farmers",
        image: "https://csspicker.dev/api/image/?q=soil+farm&image_type=photo",
      },
      {
        id: 6,
        title: "Village Development",
        description: "Infrastructure for better living",
        image:
          "https://csspicker.dev/api/image/?q=village+construction&image_type=photo",
      },
      {
        id: 7,
        title: "Canal Cleaning",
        description: "Ensuring water reaches every farm",
        image:
          "https://csspicker.dev/api/image/?q=canal+water&image_type=photo",
      },
      {
        id: 8,
        title: "Drought Relief",
        description: "Emergency support during dry seasons",
        image: "https://csspicker.dev/api/image/?q=dry+land&image_type=photo",
      },
    ],
    title = "Facts About Our Project",
    subtitle = "Project Achievements",
    description = `
Vanmitra Shiksha Sahay – School Support for All & One Family One Tree is a holistic initiative focused on strengthening education and environmental sustainability in tribal and rural communities.
break
The project supports Adivasi children from remote and economically disadvantaged areas by providing essential school materials, helping reduce dropouts, improve attendance, and encourage continued education with dignity.
break
Alongside this, One Family One Tree promotes environmental conservation through free sapling distribution and community-led tree plantation, enhancing green cover, biodiversity, and climate resilience.
break
Together, these initiatives empower communities through education, environmental awareness, and active participation, creating a sustainable future for both children and the environment.
`,
  } = props;

  // ✅ NOW description exists
  const formattedDescription = description.replace(/break/g, "<br/><br/>");

  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
      setRotation((prev) => prev - 360 / items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="py-20 bg-[#f7fdf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>

              <p
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                dangerouslySetInnerHTML={{ __html: formattedDescription }}
              />
            </div>
          </div>

          {/* RIGHT CIRCULAR CAROUSEL — UNTOUCHED */}
          <div className="relative flex items-center justify-center h-[700px]">
            <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden shadow-2xl border-8 border-white z-10">
              <img
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-6">
                <h4 className="text-2xl font-bold mb-2">
                  {items[activeIndex].title}
                </h4>
                <p className="text-sm opacity-90">
                  {items[activeIndex].description}
                </p>
              </div>
            </div>

            <div
              className="absolute w-full h-full transition-transform duration-1000"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {items.map((item, index) => {
                const angle = (index * 360) / items.length;
                const radius = 260;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={item.id}
                    className={`absolute w-24 h-24 rounded-full border-4 overflow-hidden cursor-pointer
                    ${
                      index === activeIndex
                        ? "border-[#e66a6a] scale-125 z-20"
                        : "border-gray-400"
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 48px)`,
                      top: `calc(50% + ${y}px - 48px)`,
                      transform: `rotate(${-rotation}deg)`,
                    }}
                    onClick={() => {
                      setActiveIndex(index);
                      setRotation(-(index * (360 / items.length)));
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>

            <div className="absolute w-[520px] h-[520px] border border-dashed border-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectObj;
