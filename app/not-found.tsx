import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <div className="container flex max-w-md flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-slate-300">The page you are looking for does not exist or has been moved.</p>

        <button className="inline-flex gap-3 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href="/" className="inline-flex gap-3 justify-center items-center">
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

