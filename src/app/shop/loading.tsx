export default function Loading() {
    return (
      <div className="min-h-screen bg-white">
        <div className="container py-12">
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(12)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="bg-pink-50/50 p-6 rounded-lg">
                  <div className="aspect-square bg-gray-200 rounded-full mb-4 animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto mb-2 animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-4 animate-pulse" />
                  <div className="h-10 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  
  