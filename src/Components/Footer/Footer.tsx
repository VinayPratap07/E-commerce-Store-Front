import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#212121] text-gray-300 font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Help Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Delivery
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Corporate Gifting
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Cookie Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Website Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Privacy Notice
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Personal Data Request Form
                </a>
              </li>
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Terms of Sale
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center space-x-3 hover:text-white transition-colors"
                >
                  <FacebookIcon className="h-6 w-6" />
                  <span>Facebook</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="flex items-center space-x-3 hover:text-white transition-colors"
                >
                  <InstagramIcon className="h-6 w-6" />
                  <span>Instagram</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="flex items-center space-x-3 hover:text-white transition-colors"
                >
                  <TwitterIcon className="h-6 w-6" />
                  <span>Twitter</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Velora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

type IconProps = {
  className?: string; // className is an optional string
};

const FacebookIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);

const TwitterIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.215 3.791 4.649-.69.188-1.42.224-2.164.085.618 1.954 2.423 3.377 4.564 3.414-1.798 1.407-4.069 2.245-6.516 2.245-.42 0-.833-.024-1.238-.074 2.289 1.464 5.023 2.32 7.964 2.32 9.593 0 14.853-7.954 14.853-14.853 0-.226-.005-.452-.015-.676.988-.713 1.85-1.602 2.53-2.637z" />
  </svg>
);
