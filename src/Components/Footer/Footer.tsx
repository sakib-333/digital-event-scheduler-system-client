import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="primary-spacing bg-background2 primary-width mx-auto">
      <footer className="footer p-10 justify-items-center">
        <nav className="text-secondary">
          <h6 className="footer-title text-primary">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="text-secondary">
          <h6 className="footer-title text-primary">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-secondary">
          <h6 className="footer-title text-primary">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="www.linkedin.com/in/sakibur-rahman">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/sakib-333">
              <FaGithubSquare className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/sakib071">
              <FaFacebookSquare className="w-5 h-5" />
            </a>
            <a href="https://x.com/sakib_333x">
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-center text-xs text-secondary">Copyright &copy; 2025</p>
    </div>
  );
};

export default Footer;
