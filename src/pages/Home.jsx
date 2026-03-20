import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import QuoteCard from "../components/QuoteCard";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const [likedQuotes, setLikedQuotes] = useState(() => {
    const saved = localStorage.getItem("likedQuotes");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) throw new Error();

      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);

    } catch {
      try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();

        setQuote(data.quote);
        setAuthor(data.author);
      } catch {
        setQuote("Something went wrong. Try again.");
        setAuthor("");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
  }, [likedQuotes]);

  const toggleLike = () => {
    const exists = likedQuotes.find(q => q.quote === quote);

    if (exists) {
      setLikedQuotes(likedQuotes.filter(q => q.quote !== quote));
    } else {
      setLikedQuotes([...likedQuotes, { quote, author }]);
    }
  };

  const isLiked = likedQuotes.some(q => q.quote === quote);

  return (
    <div className="h-screen overflow-hidden bg-neutral-950 text-neutral-100">
      <NavBar count={likedQuotes.length} />

      {/* prevent overlap with navbar */}
      <div className="pt-16">
        <QuoteCard
          quote={quote}
          author={author}
          loading={loading}
          onNewQuote={fetchQuote}
          onLike={toggleLike}
          isLiked={isLiked}
        />
      </div>
    </div>
  );
}