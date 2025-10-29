export default function ProjectDocuments({ projectName }: { projectName: string }) {
  // For now, mock data
  const docs = ["Requirements.pdf", "Design.sketch", "Specs.docx"]

  return (
    <div>
      <h2 className="text-lg font-semibold">Documents</h2>
      <ul className="list-disc ml-6">
        {docs.map((doc) => (
          <li key={doc}>{doc}</li>
        ))}
      </ul>
    </div>
  )
}
