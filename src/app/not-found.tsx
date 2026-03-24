import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      {/* Magic hat illustration */}
      <div className="relative mb-8 animate-float">
        <span className="text-8xl">🎩</span>
        <span className="absolute -top-2 -right-4 text-4xl animate-twinkle">✨</span>
        <span
          className="absolute -bottom-1 -left-3 text-3xl animate-twinkle"
          style={{ animationDelay: "0.5s" }}
        >
          ⭐
        </span>
      </div>

      <h1
        className="text-4xl md:text-5xl text-magic-purple mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Oops! The magic trick went wrong.
      </h1>
      <p className="text-lg text-foreground/70 mb-8 max-w-md">
        We couldn&apos;t find the page you were looking for.
        Maybe the rabbit ran away with it! 🐇
      </p>
      <Link href="/" className="btn-gold text-lg">
        🏠 Back to Home
      </Link>
    </div>
  );
}
