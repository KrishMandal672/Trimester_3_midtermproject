export default function QuoteCard({
  quote,
  author,
  loading,
  onNewQuote,
  onLike,
  isLiked,
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-6 pb-20">
      
      {/* CONTENT */}
      {loading ? (
        <p className="text-neutral-500 text-lg animate-pulse">
          Loading...
        </p>
      ) : (
        <>
          <p className="text-3xl md:text-5xl font-semibold leading-relaxed max-w-4xl text-neutral-100 tracking-wide">
            "{quote}"
          </p>

          <p className="mt-6 text-neutral-400 text-lg">
            — {author}
          </p>
        </>
      )}

      {/* FOOTER BUTTONS */}
      {!loading && (
        <div className="fixed bottom-0 left-0 w-full flex">
          
          {/* New Quote */}
          <button
            onClick={onNewQuote}
            className="w-1/2 py-4 bg-neutral-800 text-neutral-200 
                       hover:bg-green-600 hover:text-white 
                       transition-all duration-300"
          >
            New Quote
          </button>

          {/* Like */}
          <button
            onClick={onLike}
            className={`w-1/2 py-4 transition-all duration-300 ${
              isLiked
                ? "bg-red-600 text-white"
                : "bg-neutral-800 text-neutral-200 hover:bg-red-600 hover:text-white"
            }`}
          >
            {isLiked ? "❤️ Liked" : "🤍 Like"}
          </button>

        </div>
      )}
    </div>
  );
}