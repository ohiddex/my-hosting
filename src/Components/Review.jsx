import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { StarIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // GSAP fade-in on scroll
  useEffect(() => {
    if (reviews.length > 0) {
      const cards = sectionRef.current.querySelectorAll(".review-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, [reviews]);

  // gradient palette (professional cool hues)
  const gradients = [
    "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%)",
    "linear-gradient(135deg, #111827 0%, #1e40af 50%, #3730a3 100%)",
    "linear-gradient(135deg, #0a0f2c 0%, #3b82f6 50%, #1e1b4b 100%)",
    "linear-gradient(135deg, #0f172a 0%, #2563eb 50%, #312e81 100%)",
  ];

  const handleSlideChange = (swiper) => {
    const slides = swiper.slides;
    slides.forEach((slide) => {
      slide.classList.remove(
        "scale-105",
        "shadow-2xl",
        "z-20",
        "opacity-100",
        "backdrop-blur-none"
      );
      slide.classList.add("opacity-40", "blur-[2px]");
    });

    const activeSlide = slides[swiper.activeIndex];
    if (activeSlide) {
      activeSlide.classList.add(
        "scale-105",
        "shadow-2xl",
        "z-20",
        "opacity-100",
        "backdrop-blur-none"
      );
      const card = activeSlide.querySelector(".review-card");
      if (card) {
        gsap.to(card, {
          background: gradients[Math.floor(Math.random() * gradients.length)],
          duration: 1.2,
          ease: "power2.out",
        });
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
       
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            What Our <span className="text-blue-400">Clients Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Hear from our customers who trust our uptime, blazing speed, and
            24/7 support. Their success stories speak for themselves.
          </p>
        </div>

        
        {loading ? (
          <p className="text-gray-400 italic">Loading reviews...</p>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
            onSlideChange={handleSlideChange}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="transition-all duration-500">
                <div
                  className="review-card rounded-2xl p-8 border border-gray-800 shadow-md transition-all duration-300 ease-out min-h-[440px] flex flex-col justify-between text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%)",
                  }}
                >
                  {/* Reviewer Info (Top) */}
                  <div className="flex flex-col items-center mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full border-2 border-blue-400 object-cover mb-3"
                    />
                    <p className="font-semibold text-white text-lg">{review.name}</p>
                    <p className="text-gray-400 text-sm mb-2">
                      {review.role || "Customer"}
                    </p>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.stars ? "text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                
                  <div className="flex-grow flex items-center justify-center px-3">
                    <p className="text-gray-100 font-medium italic leading-relaxed text-center text-sm sm:text-base">
                      “{review.description}”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Review;
