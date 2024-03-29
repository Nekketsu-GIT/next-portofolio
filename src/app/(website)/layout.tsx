import '../../styles/globals.scss'
import { Poppins } from "next/font/google";
import  { ThemeProvider } from '@/components/ThemeContext/ThemeContext';
import BodyContainer from '@/components/BodyContainer/BodyContainer';
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <ThemeProvider>
      <BodyContainer>{children}</BodyContainer>
      </ThemeProvider>
      <Analytics/>
    </html>
  )
}
