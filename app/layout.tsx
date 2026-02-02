import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Arnaud Elphège | Chef de Projet SAP S/4HANA Senior',
  description: 'Expert en intégration SAP S/4HANA, transformation digitale et conduite du changement. Consultant IT basé à Paris.',
  authors: [{ name: 'Arnaud Elphège' }],
  creator: 'Arnaud Elphège',
  icons: {
    icon: '/photo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}