import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-12">
      <h2 className="text-4xl md:text-6xl font-bold dark:text-white text-gray-900 mb-4">
        Organize Your Tasks Effortlessly
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
        Manage your projects, track progress, and boost productivity with
        Taskly.
      </p>
    <div className="py-4">
    <Button>Get Started</Button>
    </div>
    </section>
  );
};

export default Hero;
