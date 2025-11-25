import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { contactDetails, navigationItems } from "../data/admission-content";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader
        navItems={navigationItems}
        contactNumber={contactDetails.hotline}
      />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 ">
        <div>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
