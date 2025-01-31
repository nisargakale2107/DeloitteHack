import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">TrafficOptimizer</h3>
          <p>Intelligent route planning and traffic analysis</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

