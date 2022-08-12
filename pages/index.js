import HomePage from '../components/home'
import { Footer, SocialBar } from '../components/shared'
export default function Home() {
  return (
    <div>
      {/* Social bar */}
      <SocialBar />
      {/* HomePage */}
      <HomePage />
      {/* Footer */}
      <Footer />
    </div>
  )
}
