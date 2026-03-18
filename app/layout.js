import './globals.css'

export const metadata = {
  title: 'Kacper Ryske — Software Developer',
  description: 'Portfolio of Kacper Ryske — Software Developer & ML Researcher',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
