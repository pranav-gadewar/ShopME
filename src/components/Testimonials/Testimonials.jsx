import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Absolutely love the sports shoes I ordered! Great quality, comfortable fit, and fast delivery. Will definitely shop here again.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "I bought a range of football gear for my son — excellent products and reliable service. The quality exceeded expectations!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Best site for professional-grade cricket accessories. Super happy with the bat and gloves. Perfect for training and matches.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Impressed by the variety and quality of sports equipment. Great prices and amazing customer support too!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What Athletes Are Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Customer Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear from athletes and sports enthusiasts who trust our products for their performance and comfort on the field.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="space-y-3">
                      <p className="text-sm dark:text-slate-300 text-gray-600">
                        "{data.text}"
                      </p>
                      <h1 className="text-lg font-bold dark:text-slate-300 text-black/80">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/10 text-9xl font-serif absolute top-0 right-4">“</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
