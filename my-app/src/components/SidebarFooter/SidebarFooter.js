import "./SidebarFooter.css";
const footerLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
  "Ads info",
  "More",
];

export default function SidebarFooter() {
  return (
    <div className="sidebarFooter">
      <div className="footer-links">
        {footerLinks.map((link, index) => (
          <button key={index} className="footer-link">
            {link}
          </button>
        ))}
        <div className="copy-right">© 2023 X Corp.</div>
      </div>
    </div>
  );
}
