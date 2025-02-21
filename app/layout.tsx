import './globals.css'
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import {ClerkProvider} from "@clerk/nextjs"
import {dark} from "@clerk/themes"
import Provider from './Provider'


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Livedocs',
  description: 'Your GoTo collaborator editor'
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
        variables: {colorPrimary:"#3371FF"},
        
      }}>
    
      <html lang="en" suppressHydrationWarning>
        
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
      
    </ClerkProvider>
  )
}
