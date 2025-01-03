import Title from "./title";
import Image from "next/legacy/image";

const ServiceCard = (service: { title: string; description: string }) => (
  <div
    className="relative flex items-end p-4 rounded-lg shadow-lg overflow-hidden group bg-gradient-to-r from-yaleblue to-darkgoldenrod hover:from-darkgoldenrod hover:to-yaleblue"
    style={{
      minHeight: "200px",
    }}
  >
    <div className="absolute inset-0 bg-black backdrop-blur-sm transition-all group-hover:backdrop-blur-md group-hover:bg-black -z-10" />

    <div className="text-white transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 opacity-0">
      <h3 className="text-lg font-bold ">{service.title}</h3>
      <p className="mt-2 text-sm">{service.description}</p>
    </div>

    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white group-hover:opacity-0 transition-opacity">
      {service.title}
    </h3>
  </div>
);

export default function Services({
  services,
}: {
  services: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <section className="py-8 w-full flex flex-col gap-8">
      <Title
        title="What I do"
        icon={
          <Image
            src="/images/services.svg"
            alt="arrow"
            width={24}
            height={24}
            className="animate-pulse"
          />
        }
      />
      <p>I provide various services to my clients. Here are some of them:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
