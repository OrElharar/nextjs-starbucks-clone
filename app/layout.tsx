import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import LoginContextProvider from "@/app/contexts/login/LoginContext";
import AlertContextProvider from "@/app/contexts/alert/AlertContext";
import Alert from "@/app/components/general/alert/Alert";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Starbucks Clone Project',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
          <title>Starbucks Clone Project</title>
        </head>
      <body className={inter.className}>
      <AlertContextProvider>
          <LoginContextProvider>
              <Alert/>
              <Header/>
              {children}
              <Footer/>
          </LoginContextProvider>
      </AlertContextProvider>
      </body>
    </html>
  )
}
