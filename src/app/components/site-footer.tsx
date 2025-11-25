const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#063b0a] text-white py-4">
      <div className="flex items-center max-w-7xl mx-auto px-4 md:px-8 lg:px-12 gap-1">
        <p className="flex items-center justify-center gap-2">
          © মাদরাসাতুল মাদীনা {year} ।। কারিগরী সহযোগতায়
        </p>
        <a
          href="https://www.thezoomit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src="/Zoom-IT.png" alt="" className="w-auto h-5" />
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;
