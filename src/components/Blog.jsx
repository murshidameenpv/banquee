import BlogCard from "./BlogCard";
import img1 from '../assets/logo/img1.jpeg'
import img2 from '../assets/logo/img2.jpeg'
import img3 from '../assets/logo/img3.jpeg'
const dummyData = [
  {
    title: "How To Start Using Banko For Your Startup",
    blogText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio assumenda recusandae libero voluptatem unde aliquid, totam, dicta molestias repudiandae impedit quasi. Sit odit omnis, iusto ea quo rem quibusdam harum.",
    imageSrc: img1,
    tags: ["web", "money"],
  },
  {
    title: "10 Things Nobody Told You About Banko",
    blogText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio assumenda recusandae libero voluptatem unde aliquid, totam, dicta molestias repudiandae impedit quasi. Sit odit omnis, iusto ea quo rem quibusdam harum.",
    imageSrc: img2,
    tags: ["web", "money"],
  },
  {
    title: "7 Ways To Improve You Saving Habits",
    blogText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio assumenda recusandae libero voluptatem unde aliquid, totam, dicta molestias repudiandae impedit quasi. Sit odit omnis, iusto ea quo rem quibusdam harum.",
    imageSrc: img3,
    tags: ["web", "lifestyle"],
  },
];const Blog = () => {
  return (
    <div className="mt-8 md:mx-16 flex flex-col">
      <div className="flex items-center justify-between mx-8 md:mx-0">
        <h1 className="text-4xl" id="blog">Blog</h1>
        <button className="text-primary px-3 py-2 flex items-center text-xs justify-center gap-2">
          All Articles
          <svg
            width="13"
            height="14"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2284 7.00795L7.79189 1.6874L9.225 0.284857L17.1081 7.99985L9.225 15.7148L7.79189 14.3123L13.2284 8.99175H0.891893L0.891893 7.00795H13.2284Z"
              fill="#5BB5A2"
            />
          </svg>
        </button>
      </div>
      <div className="mt-8 md:mx-10 px-8 py-8">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-4">
          {dummyData.map((data, index) => (
            <BlogCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;