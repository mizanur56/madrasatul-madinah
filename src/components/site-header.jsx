/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SiteHeader = ({
  navItems,
  contactNumber,
  activeNavIndex,
  activeChildLabel,
  onNavChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(activeNavIndex ?? 0);
  const [activeChild, setActiveChild] = useState(activeChildLabel ?? "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  useEffect(() => {
    setActiveIndex(activeNavIndex ?? 0);
    setActiveChild(activeChildLabel ?? "");
  }, [activeNavIndex, activeChildLabel]);

  const handleNavClick = (e, index) => {
    e.preventDefault();
    setActiveIndex(index);
    setActiveChild("");
    setIsMobileMenuOpen(false);
    if (onNavChange) {
      onNavChange(index, "");
    }
  };

  const handleChildClick = (e, index, childLabel) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex(index);
    setActiveChild(childLabel);
    setIsMobileMenuOpen(false);
    if (onNavChange) {
      onNavChange(index, childLabel);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubmenuIndex(null);
  };

  const handleMobileNavClick = (e, index, hasChildren) => {
    e.preventDefault();
    if (hasChildren) {
      setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
    } else {
      handleNavClick(e, index);
    }
  };

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
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <nav
            aria-label="Primary"
            className="hidden w-full sm:block sm:w-auto"
          >
            <ul className="flex flex-wrap items-center gap-2">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, index)}
                    className={`group relative inline-flex flex-col items-center px-4 py-2 text-[16px] font-bold transition ${
                      activeIndex === index
                        ? "bg-[#4d9847] text-white"
                        : "text-black hover:text-[#4d9847]"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <div className="pointer-events-none absolute left-1/2 top-[33px] z-10 hidden -translate-x-1/2 translate-y-2 flex-col bg-[#4d9847] px-4 py-3 text-xs font-medium text-white group-hover:flex group-hover:pointer-events-auto">
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={(e) =>
                              handleChildClick(e, index, child.label)
                            }
                            className={`cursor-pointer whitespace-nowrap py-0.5 ${
                              activeChild === child.label
                                ? "font-semibold text-amber-200"
                                : ""
                            }`}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 text-[16px] font-bold text-[#000] sm:flex">
              <span>যোগাযোগ নাম্বারঃ</span>
              <a href={`tel:${contactNumber.dial}`} className="text-[#1e293b]">
                {contactNumber.display}
              </a>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center gap-1.5 rounded p-2 text-black transition hover:bg-slate-100 sm:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 bg-current transition-all ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-current transition-all ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-current transition-all ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white py-4 sm:hidden">
            <nav aria-label="Mobile Primary">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) =>
                        handleMobileNavClick(e, index, !!item.children)
                      }
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-[16px] font-bold transition ${
                        activeIndex === index
                          ? "bg-[#4d9847] text-white"
                          : "text-black hover:bg-slate-100"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <svg
                          className={`h-5 w-5 transition-transform ${
                            openSubmenuIndex === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </a>
                    {item.children && openSubmenuIndex === index && (
                      <ul className="mt-2 space-y-1 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              onClick={(e) =>
                                handleChildClick(e, index, child.label)
                              }
                              className={`block rounded px-3 py-2 text-sm ${
                                activeChild === child.label
                                  ? "bg-[#4d9847]/20 font-semibold text-[#4d9847]"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 border-t border-slate-200 pt-4">
              <div className="flex flex-col gap-2 px-4 text-[16px] font-bold text-[#000]">
                <span>যোগাযোগ নাম্বারঃ</span>
                <a
                  href={`tel:${contactNumber.dial}`}
                  className="text-[#1e293b] hover:text-[#4d9847]"
                >
                  {contactNumber.display}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full bg-[#043812]">
        <img
          src="/breadcrumb.jpg"
          alt=""
          className="h-48 w-auto object-cover"
        />
        <p className="absolute max-w-7xl mx-auto top-20 left-52 text-[25px] font-bold text-[#fff]">
          {activeChildLabel
            ? `${
                navItems[activeNavIndex ?? activeIndex]?.label
              } / ${activeChildLabel}`
            : navItems[activeNavIndex ?? activeIndex]?.label}
        </p>
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
  activeNavIndex: PropTypes.number,
  activeChildLabel: PropTypes.string,
  onNavChange: PropTypes.func,
};

export default SiteHeader;
