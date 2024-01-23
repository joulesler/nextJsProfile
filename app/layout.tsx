import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Pathname from './components/pathname'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    absolute: "",
    default: "Julian's Profile Page",
    template: "Joulesler | %s"
  },
  description: "Joulesler"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // throw new Error()
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <header className="navbar bg-base-300">
          <Link href='/' className="btn btn-ghost text-xl">
            Julian <Pathname/>
          </Link>
        </header>

        <main style={{
          padding: "1rem",
          margin: "1rem",
          display: "flex",
          flexDirection: "column"
        }
        }>
          {children}
        </main>

        <footer className="footer p-10 bg-neutral text-neutral-content">
          <p>Copyright &copy; Julian Ho #Joulesler</p>
        </footer>
      </body>
    </html>
  )
}
