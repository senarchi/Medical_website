import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const reviews = [
  {
    name: "Tammy Wile",
    review: "I had been living with severe knee pain for five years and could barely walk straight or go up and down the stairs without assistance. After my double knee replacement surgery at OrthoUnited, I was up and walking down the hallway in no time. Now, I feel so much relief and can enjoy a pain-free life with my new knees!"
  },
  {
    name: "Frances",
    review: "I lived with knee pain for about 10 years before deciding to have a knee replacement surgery with Dr. Pui at OrthoUnited. I was worried about the recovery process, but when I woke up after my procedure, I was hardly in any pain. I was much more mobile quickly, and I stopped taking pain medication after just a few days. I’m thrilled with the results and grateful for the care I received."
  },
  {
    name: "John D.",
    review: "I had knee replacement surgery using the ROSA Knee robotic system at OrthoUnited. The precision of the surgery and the personalized care I received were exceptional. My recovery was faster than I expected, and I’m now able to engage in activities I thought I’d never be able to do again. Dr. Marshall and his team were amazing!"
  },
  {
    name: "Linda S.",
    review: "Dr. Marshall and the team at OrthoUnited gave me my life back. After suffering from knee pain for years, I finally decided to have a partial knee replacement. The robotic-assisted surgery was a game-changer. My recovery was smooth, and I’m now pain-free and more active than ever. I can’t thank the team enough!"
  }
];

const ReviewCard = ({ name, review }) => {
  return (
    <div className="review-card shadow-lg rounded-lg p-6 my-4">
      <h3 className="text-2xl font-semibold text-blue-500">{name}</h3>
      <p className="mt-4 text-cyan-600">{review}</p>
    </div>
  );
};

const ReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='section' className="pb-12 bg-gray-100 flex flex-col items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center">Patient Reviews</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} name={review.name} review={review.review} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewsSection;
