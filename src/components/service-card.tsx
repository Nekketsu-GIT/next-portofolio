export default function ServiceCard(service: { title: string; description: string }) {
  return (
    <div
      className="relative flex items-end p-6 rounded-lg shadow-lg overflow-hidden group bg-gradient-to-r from-yaleblue to-darkgoldenrod hover:from-darkgoldenrod hover:to-yaleblue transition-all duration-500"
      style={{
        minHeight: "200px",
      }}
    >
      {/* Background overlay with blur effect */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 group-hover:backdrop-blur-md group-hover:bg-black/30 -z-10" />

      {/* Hidden content (revealed on hover) */}
      <div className="text-white transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-6 opacity-0">
        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
        <p className="text-sm leading-relaxed text-gray-100">{service.description}</p>
      </div>

      {/* Default visible title */}
      <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white group-hover:opacity-0 transition-opacity duration-500">
        {service.title}
      </h3>
    </div>
  );
}