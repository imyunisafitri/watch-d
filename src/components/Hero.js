import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex w-full relative top-0 z-[-1]">
      <video loop autoplay="autoplay" muted className="bg-banner">
        <source
          src="https://dl.dropboxusercontent.com/s/ndl9m1ktsa8pprz/de.mp4?dl=0"
          // https://content.rolex.com/dam/homepage/hss/watches/professional-watches/yacht-master/homepage-yacht-master-42_m226659-0002.mp4
          type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
      <div className="absolute top-1/4 md:top-1/2 w-full">
        <div className="text-white text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-4">Explore the Field Otomatic</h1>
          <p className="text-sm md:text-xl">
            Discover the epitome of sophistication and innovation in the Field Otomatic collection.
          </p>
          <div className="cursor-pointer mt-4">
            <Link
              to="/register"
              className="md:hidden px-6 py-2 rounded-full text-white  border-dotted border-2 cursor-pointer hover:border-solid"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
