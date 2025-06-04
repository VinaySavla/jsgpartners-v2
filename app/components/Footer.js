import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-6">About JSG Partners</h3>
            <div className="company-info">
              <h4 className="text-lg mb-4">
                JSG Partners
                <span className="block text-sm text-gray-400 mt-1">A Law Firm</span>
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                JSG Partners is a full-service law firm committed to delivering exceptional legal solutions 
                tailored to meet the diverse needs of clients. Our firm is built on the collective expertise 
                and dynamic experience of our three founding partners — Advocate Arshiya James, Advocate 
                Parichay Sharma and Advocate Mohsin Ghaniwala.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Civil Litigation</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Banking and Financial Law</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Corporate Law</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Family Law</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">Criminal Law</li>
              <li className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">General Legal Advisory</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="contact-info space-y-4">
              <Link 
                href="https://maps.google.com/?q=JSG+Partners+Office+No.+303+B+Wing+03rd+Floor+Oberoi+Chambers+Off+New+Link+Rd+Veera+Desai+Industrial+Estate+Andheri+West+Mumbai+Maharashtra+400053" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-map-marker-alt text-white mt-1"></i>
                <span className="text-sm leading-relaxed">
                  JSG Partners, Office No. 303, B- Wing, 03rd Floor, Oberoi Chambers, 
                  Off New Link Rd, Veera Desai Industrial Estate, Andheri West, 
                  Mumbai, Maharashtra 400053
                </span>
              </Link>
              
              <Link 
                href="https://g.co/kgs/JRCtXdn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-map-marker-alt text-white mt-1"></i>
                <span className="text-sm leading-relaxed">
                  Office no. 205, 2nd Floor, A-Wing, Shreepati Coronet, Nesbit Road, 
                  Opposite Mazgaon Court, Mazgaon, Mumbai - 400010.
                </span>
              </Link>
              
              <Link 
                href="tel:+918655415028" 
                className="contact-item flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-phone text-white"></i>
                <span className="text-sm">+91 86554 15028</span>
              </Link>
              
              <Link 
                href="mailto:info@jsgpartners.in" 
                className="contact-item flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-envelope text-white"></i>
                <span className="text-sm">info@jsgpartners.in</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">&copy; 2025 JSG Partners. All Rights Reserved.</p>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-white text-sm transition-colors">Partners</Link></li>
              <li><Link href="/practice-areas" className="text-gray-400 hover:text-white text-sm transition-colors">Area of Practice</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">Career</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
