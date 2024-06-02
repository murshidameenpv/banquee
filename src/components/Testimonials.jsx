import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    rating: 5,
    heading: "Best Experience Ever!",
    description:
      "Lorem ipsum dolor sit amet, consectetur  ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit.adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    name: "John Doe",
    position: "CEO, ABC Corporation",
  },
  {
    rating: 4,
    heading: "Great Service!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    name: "Jane Smith",
    position: "Marketing Manager, DEF Inc.",
  },
  {
    rating: 5,
    heading: "Awesome Product!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    name: "Bob Johnson",
    position: "CTO, GHI Corp.",
  },
  {
    rating: 4,
    heading: "Easy to Use!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    name: "Alice Brown",
    position: "UX Designer, JKL Ltd.",
  },
  {
    rating: 5,
    heading: "Fast Support!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum , ipsum dolor sit amet, consectetur adipiscing elit.magna sed, convallis ex.",
    name: "Mike Davis",
    position: "Software Engineer, MNO Inc.",
  },
  {
    rating: 4,
    heading: "Good Value!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing , ipsum dolor sit amet, consectetur adipiscing elit.elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    name: "Emily Chen",
    position: "Financial Analyst, PQR Corp.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col mt-16 ml-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <h1 className="flex flex-col text-4xl font-sans">
          <span>People all over the</span>
          <span>world use banko.</span>
        </h1>
        <span className="flex items-center gap-3 justify-center text-xs mr-16 ">
          {" "}
          <div className="flex items-center justify-start gap-3">
            <div className="flex items-center justify-center bg-bgSecondary rounded-full w-5 h-5">
              {" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 16.3023L4.53475 19.9213L5.9785 12.654L0.538086 7.62334L7.89617 6.75067L11 0.0223389L14.1038 6.75067L21.4619 7.62334L16.0215 12.654L17.4653 19.9213L11 16.3023Z"
                  fill="#5BB5A2"
                />
              </svg>
            </div>
          </div>
          Rated over 4.8/5 Users
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            rating={testimonial.rating}
            heading={testimonial.heading}
            description={testimonial.description}
            name={testimonial.name}
            position={testimonial.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
