import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";

export default function Liked() {
  const [likedQuotes, setLikedQuotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("likedQuotes")) || [];
    setLikedQuotes(saved);
  }, []);

  const deleteQuote = (quoteToDelete) => {
    const updated = likedQuotes.filter(q => q.quote !== quoteToDelete);
    setLikedQuotes(updated);
    localStorage.setItem("likedQuotes", JSON.stringify(updated));
  };

  return (
    <div className="h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <NavBar count={likedQuotes.length} />

      {/* MAIN CONTENT AREA */}
      <div className="pt-16 flex-1 flex items-center justify-center px-6">
        
        {likedQuotes.length === 0 ? (
          <p className="text-neutral-400 text-lg text-center">
            No liked quotes yet.
          </p>
        ) : (
          <div className="w-full max-w-3xl space-y-4 overflow-y-auto max-h-[80vh] pr-2">
            
            {likedQuotes.map((q, i) => (
              <div
                key={i}
                className="bg-neutral-800 p-4 rounded flex justify-between items-start gap-4"
              >
                
                <div>
                  <p>"{q.quote}"</p>
                  <p className="text-sm text-neutral-400 mt-1">
                    - {q.author}
                  </p>
                </div>

                <button
                  onClick={() => deleteQuote(q.quote)}
                  className="text-neutral-400 hover:text-red-500 transition-colors"
                >
                  ❌
                </button>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}