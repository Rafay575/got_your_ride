import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";


import image17 from "../assets/nick-night-6ckbKRjydSw-unsplash.png";
import image18 from "../assets/SVGRepo_iconCarrier_1.png";
import image19 from "../assets/SVGRepo_iconCarrier_2.png";
import image20 from "../assets/SVGRepo_iconCarrier_3.png";
import image24 from "../assets/SVGRepo_iconCarrier_4.png";
import image25 from "../assets/SVGRepo_iconCarrier_5.png";
import image26 from "../assets/SVGRepo_iconCarrier_6.png";
// 🔸 simple re‑usable fade‑up variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function WhyChooseUs() {
  return (
    <section>
      {/* ─── Heading ─────────────────────────────────────────── */}
      <motion.div
        className="text-center my-14"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
     
        <h1 className="font-bold text-2xl lg:text-4xl">Why Choose Us</h1>
      </motion.div>

      {/* ─── Hero image ─────────────────────────────────────── */}
      <motion.div
        className="w-4/5 lg:max-w-5xl mx-auto"
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={image17} alt="" className="rounded-2xl shadow-lg" />
      </motion.div>

      {/* ─── Slider ──────────────────────────────────────────── */}
      <motion.div
        className="w-4/5 mx-auto mt-16"
        variants={fadeUp}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {/* slide helper to avoid repetition */}
          {[
            {
              img: image18,
              title: "Experienced Travel Experts",
              text: "Rely on our knowledgeable travel agents to create the perfect journey tailored just for you.",
            },
            {
              img: image20,
              title: "Effortless Booking Made Simple",
              text: "Our easy‑to‑use booking platform makes planning your ideal trip a breeze, so you can focus on enjoying the journey from the start.",
            },
            {
              img: image19,
              title: "Local Guide Services",
              text: "Professional local guides for city tours, nature excursions, or cultural experiences. Multi‑lingual guides.",
            },
            {
              img: image24,
              title: "Complete Travel Security",
              text: "Your safety and peace of mind are our top priorities, ensuring that your journey is fully protected at all times.",
            },
            {
              img: image25,
              title: "Travel Insurance",
              text: "Offering travel insurance packages that cover health, lost luggage, trip cancellations.",
            },
            {
              img: image26,
              title: "Recommendations – Restaurants",
              text: "Reservations at local restaurants during your travel to make your journey happy.",
            },
          ].map(({ img, title, text }, i) => (
            <SwiperSlide key={i}>
              {/* card with hover pop */}
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center shadow-md"
              >
                <div className="mt-3 w-1/2 h-[120px] flex items-center justify-center">
                  <img src={img} alt="" className="max-h-full" />
                </div>
                <h2 className="text-center mt-8 font-bold">{title}</h2>
                <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]">{text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
