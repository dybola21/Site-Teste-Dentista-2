import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import { getWhatsAppLink } from '../../utils/whatsapp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <a href="#" className="logo">
          <span className="logo-icon"></span>
          <div className="logo-text">
            <strong>Aurora</strong>
            <span>Odontologia</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><a href="#sobre">Sobre a Clínica</a></li>
            <li><a href="#servicos">Tratamentos</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#localizacao">Localização</a></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Agendar Avaliação
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-mobile-list">
            <li><a href="#sobre" onClick={toggleMenu}>Sobre a Clínica</a></li>
            <li><a href="#servicos" onClick={toggleMenu}>Tratamentos</a></li>
            <li><a href="#diferenciais" onClick={toggleMenu}>Diferenciais</a></li>
            <li><a href="#localizacao" onClick={toggleMenu}>Localização</a></li>
            <li>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-btn" onClick={toggleMenu}>
                Agendar Avaliação
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
