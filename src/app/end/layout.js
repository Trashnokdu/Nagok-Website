import '../globals.css'

export const metadata = {
  title: '나곡중학교 축제 공식 웹사이트',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
