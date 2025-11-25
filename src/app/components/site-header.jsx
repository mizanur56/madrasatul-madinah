import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SiteHeader = ({ navItems, contactNumber }) => {
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const getActiveNavIndex = () => {
    const currentPath = location.pathname;
    const decodedPath = decodeURIComponent(currentPath);

    // Check exact matches first
    if (currentPath === "/" || decodedPath === "/") return 0;

    // Check for rules pages (both encoded and decoded)
    const rulesPath = "/অভিভাবকের-নিয়মাবলী";
    if (
      currentPath.startsWith(rulesPath) ||
      decodedPath.startsWith(rulesPath) ||
      currentPath.includes("অভিভাবকের-নিয়মাবলী")
    ) {
      return 1;
    }

    // Check for admission application
    const admissionPath = "/দাখেলার-আবেদন";
    if (
      currentPath === admissionPath ||
      decodedPath === admissionPath ||
      currentPath.includes("দাখেলার-আবেদন")
    ) {
      return 2;
    }

    return 0;
  };

  const getActiveChildLabel = () => {
    const currentPath = location.pathname;
    const decodedPath = decodeURIComponent(currentPath);

    // Check for Maktab division
    const maktabPath = "/অভিভাবকের-নিয়মাবলী/মক্তব-বিভাগ";
    if (
      currentPath === maktabPath ||
      decodedPath === maktabPath ||
      currentPath.includes("মক্তব-বিভাগ") ||
      decodedPath.includes("মক্তব-বিভাগ")
    ) {
      return "মক্তব বিভাগ";
    }

    // Check for Kitab division
    const kitabPath = "/অভিভাবকের-নিয়মাবলী/কিতাব-বিভাগ";
    if (
      currentPath === kitabPath ||
      decodedPath === kitabPath ||
      currentPath.includes("কিতাব-বিভাগ") ||
      decodedPath.includes("কিতাব-বিভাগ")
    ) {
      return "কিতাব বিভাগ";
    }

    return "";
  };

  const activeIndex = getActiveNavIndex();
  const activeChildLabel = getActiveChildLabel();

  return (
    <header id="home" className="w-full bg-white/95 shadow-sm backdrop-blur">
      <div className="w-full bg-[#193a1b]">
        <img
          src="/header-logo.png"
          alt="Madrasatul Madina Header"
          loading="lazy"
          className="mx-auto w-full max-w-6xl"
        />
      </div>
      <div className="mx-auto max-w-6xl ">
        <div className="flex items-center justify-between gap-2 sm:gap-4 flex-nowrap">
          <nav aria-label="Primary" className="flex-1 min-w-0">
            <ul className="flex items-center gap-1 sm:gap-2 flex-nowrap">
              {navItems.map((item, index) => (
                <li key={item.label} className="flex-shrink-0">
                  <Link
                    to={item.href}
                    className={`group relative cursor-pointer inline-flex flex-col items-center px-1.5 sm:px-2 md:px-4 py-4 text-xs sm:text-sm md:text-[16px] font-bold transition whitespace-nowrap ${
                      activeIndex === index
                        ? "bg-[#4d9847] text-white"
                        : "text-black hover:text-[#4d9847]"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <div className="pointer-events-none divide-y divide-gray-400 absolute w-full left-1/2 md:top-[44px] top-[30px] z-10 hidden -translate-x-1/2 translate-y-2 flex-col bg-[#4d9847] px-4 py-3 text-xs font-semibold text-white group-hover:flex group-hover:pointer-events-auto">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`cursor-pointer whitespace-nowrap py-2 ${
                              isActiveRoute(child.href)
                                ? "font-semibold text-amber-200"
                                : ""
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center pr-1 gap-1  text-[11px] md:text-[16px] font-bold text-[#000] flex-shrink-0">
            <span className="hidden md:inline">যোগাযোগ নাম্বার :</span>
            <span className="md:hidden inline">যোগাযোগ :</span>
            <p className="text-[#1e293b] whitespace-nowrap">
              {contactNumber.display}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full bg-[#043812]">
        <img
          src="/breadcrumb.jpg"
          alt=""
          className="h-40 w-auto object-cover"
        />

        {/* Overlay Text → Always Centered & Stable */}
        <div className="absolute inset-0 flex items-center justify-start max-w-6xl mx-auto px-4">
          <p className="text-[30px] font-bold text-white text-center drop-shadow-lg">
            {activeChildLabel
              ? `${navItems[activeIndex]?.label} / ${activeChildLabel}`
              : navItems[activeIndex]?.label}
          </p>
        </div>
      </div>
    </header>
  );
};

SiteHeader.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  contactNumber: PropTypes.shape({
    display: PropTypes.string.isRequired,
    dial: PropTypes.string.isRequired,
  }).isRequired,
};

export default SiteHeader;
