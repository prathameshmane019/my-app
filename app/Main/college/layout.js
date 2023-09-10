import { Inter } from 'next/font/google'
import CLogin from './c-login'

const inter = Inter({ subsets: ['latin'] })
export default function CollegeLayout({ children }) {
    return (
      <CLogin/>
    )
  }