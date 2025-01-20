import React, { useEffect, useState, useRef, forwardRef } from "react";
import gsap from "gsap";

const ServiceItem = ({ service }) => {
  return (
    <div className="service-item py-4 border-l-2 border-customGoldEnd pl-5">
      <div className="flex justify-between items-center">
        <h5>{service.serviceName}</h5>
        <p className="text-customGrayDark font-[400] text-lg">{service.price}</p>
      </div>
      <p className="text-sm text-gray-600 mt-1 max-w-[26rem]">{service.description}</p>
    </div>
  );
};

const ServiceCategory = forwardRef(({ category, services }, ref) => {
  return (
    <div className="mb-[5rem] category-box" ref={ref}>
      <h3 className="pb-5 text-2xl">{category.toUpperCase()}</h3>
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
});

export default function Services() {
  const [services, setServices] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const categoryRefs = useRef([]);

  // Fetch Services Data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setServices(data.services || {});
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  // GSAP Animation
  useEffect(() => {
    if (isLoaded) {
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.from(ref, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.2,
          });
        }
      });
    }
  }, [isLoaded]);

  return (
    <div className="bg-customGrayLight pt-[8rem] min-h-screen">
      <div className="container mx-auto grid gap-10 lg:gap-20">
        <h1 className="border-b border-b-customGrayDark w-fit mx-auto pb-3 text-3xl text-center">
          SERVICES
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[5rem] px-5">
          <div className="grid h-fit">
            {Object.keys(services)
              .filter((category, index) => index < 3) // 첫 3개 카테고리
              .map((category, index) => (
                <ServiceCategory
                  key={category}
                  category={category}
                  services={services[category]}
                  ref={(el) => (categoryRefs.current[index] = el)}
                />
              ))}
          </div>

          <div className="grid">
            {Object.keys(services)
              .filter((category, index) => index >= 3 && index < 6)
              .map((category, index) => (
                <ServiceCategory
                  key={category}
                  category={category}
                  services={services[category]}
                  ref={(el) => (categoryRefs.current[index + 3] = el)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
