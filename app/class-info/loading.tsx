export default function Loading() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-4xl mx-auto px-6 py-16 pt-20 lg:pt-16">
        <div className="animate-pulse">
          <div className="h-10 bg-paper-2 rounded w-3/4 mb-8"></div>
          <div className="h-4 bg-paper-2 rounded w-1/3 mb-12"></div>

          <div className="space-y-6">
            <div className="h-6 bg-paper-2 rounded w-1/2"></div>
            <div className="h-4 bg-paper-2 rounded w-full"></div>
            <div className="h-4 bg-paper-2 rounded w-full"></div>
            <div className="h-4 bg-paper-2 rounded w-3/4"></div>
            <div className="h-6 bg-paper-2 rounded w-1/2 mt-8"></div>
            <div className="h-4 bg-paper-2 rounded w-full"></div>
            <div className="h-4 bg-paper-2 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
