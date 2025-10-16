export function Timeline({ items }){
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
      <ol className="space-y-6">
        {items.map((a, idx) => (
          <li key={idx} className="pl-10 relative">
            <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border flex items-center justify-center text-xs font-semibold">
              {a.year.toString().slice(-2)}
            </span>
            <div className="p-4 border rounded-xl hover:shadow-sm transition">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold">{a.title}</h3>
                <span className="badge">{a.year}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{a.desc}</p>
              {a.links?.length>0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {a.links.map((l,i)=>(<a key={i} className="text-sm text-blue-600 hover:underline" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
