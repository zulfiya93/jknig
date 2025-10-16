export default function Section({ title, subtitle, children, id }){
  return (
    <section id={id} className="container py-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
