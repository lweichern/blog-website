import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Custom404: React.FC = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
    }
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! Looks like the page you're looking for doesn't exist.
      </p>
      <p className="text-sm text-gray-500">
        Redirecting you to a non-existent route in {countdown} seconds...
      </p>
    </div>
  );
};

export default Custom404;
