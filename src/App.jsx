import { useState } from "react";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import HomePage from "./components/home-page";
import RulesPage from "./components/rules-page";
import { contactDetails, navigationItems } from "./content/admission-content";
import {
  maktabRulesContent,
  kitabRulesContent,
  admissionApplicationContent,
} from "./content/page-content";

function App() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [activeChildLabel, setActiveChildLabel] = useState("");

  const handleNavChange = (index, childLabel) => {
    setActiveNavIndex(index);
    setActiveChildLabel(childLabel);
  };

  const renderContent = () => {
    // Home page (মূল পাতা)
    if (activeNavIndex === 0) {
      return <HomePage />;
    }

    // অভিভাবকের নিয়মাবলী with children
    if (activeNavIndex === 1) {
      // Check for exact match with child labels
      if (activeChildLabel === "মক্তব বিভাগ") {
        return <RulesPage content={maktabRulesContent} />;
      }
      if (activeChildLabel === "কিতাব বিভাগ") {
        return <RulesPage content={kitabRulesContent} />;
      }
      // Default to Maktab if no child selected (when parent is clicked)
      return <RulesPage content={maktabRulesContent} />;
    }

    // দাখেলার আবেদন
    if (activeNavIndex === 2) {
      return <RulesPage content={admissionApplicationContent} />;
    }

    return <HomePage />;
  };

  return (
    <div className="min-h-screen">
      <SiteHeader
        navItems={navigationItems}
        contactNumber={contactDetails.hotline}
        activeNavIndex={activeNavIndex}
        activeChildLabel={activeChildLabel}
        onNavChange={handleNavChange}
      />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          {renderContent()}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
