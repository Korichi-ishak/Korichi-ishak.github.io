export default function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-4">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}
