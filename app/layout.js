import './globals.css'

export const metadata = {
  title: 'Kacper Ryske — Software Engineer',
  description: 'Portfolio of Kacper Ryske — Software Engineer & ML Researcher',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
