import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const HeroSection: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <Image
        src="/blog-hero.jpg"
        alt="Blog hero image"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center">
          Read, Write, Share
        </h1>
        <p className="text-lg md:text-2xl text-white mb-12 text-center">
          Discover a world of interesting and engaging blogs on a wide range of
          topics with all walks of life.
        </p>
        <Link
          href="/blogs"
          className="flex items-center justify-center bg-white text-black rounded-full py-3 px-6 hover:bg-gray-200 transition duration-300"
        >
          View Blogs <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
