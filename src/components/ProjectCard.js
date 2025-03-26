export default function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out">
      <h3 className="text-2xl font-semibold mb-3 text-[#e6f1ff]">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-gray-400 mb-4">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[#64ffda] hover:underline font-medium"
      >
        View Project →
      </a>
    </div>
  );
}
