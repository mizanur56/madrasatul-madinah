import ApplyBanner from "./ApplyBanner";
import type { RuleContent, SectionItem, NestedSectionItem } from "../data/page-content";

type RulesPageProps = {
  content: RuleContent;
};

const isNestedItem = (item: SectionItem): item is NestedSectionItem => {
  return typeof item === "object" && "type" in item && item.type === "nested";
};

const RulesPage = ({ content }: RulesPageProps) => {
  const { title, intro, sections } = content;

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-sm text-slate-600 ">{intro.main}</h1>
        <p className="text-xl font-semibold text-slate-900">{intro.sub}</p>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-semibold text-slate-900">নিয়মাবলী</h2>
        <div className="space-y-8">
          {sections?.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section?.items.map((item, itemIdx) => {
                  if (isNestedItem(item)) {
                    return (
                      <li key={itemIdx} className="space-y-3 ">
                        <div className="flex items-start gap-2 text-[#1B1B1B]">
                          <span>{itemIdx + 1}.</span>
                          <span className="font-semibold">{item.label}</span>
                        </div>
                        <div className="ml-6 space-y-4">
                          {item.subsections?.map((subsection, subIdx) => (
                            <div key={subIdx} className="space-y-2">
                              <h4 className="font-semibold text-slate-800">
                                {subsection.title}
                              </h4>
                              <ul className="ml-4 space-y-1.5">
                                {subsection.items?.map(
                                  (subItem, subItemIdx) => (
                                    <li
                                      key={subItemIdx}
                                      className="text-[#1B1B1B] leading-relaxed"
                                    >
                                      {subItem}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </li>
                    );
                  }
                  // Regular string item
                  return (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-[#1B1B1B]"
                    >
                      <span>{itemIdx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[#1B1B1B] text-center font-semibold">
          {" "}
          (আমাদের সন্তানদের আবাদি ও বরবাদি এ সবের উপর নির্ভর করে। আল্লাহ তায়ালা
          এসব থেকে আমাদেরকে বেঁচে থাকার তৌফিক দান করুন)
        </p>
        <p className="text-center">
          {" "}
          সর্বাবস্থায় তালেবে ইলমের কল্যাণ চিন্তা করে মাদরাসা যে কোন সিদ্ধান্ত
          গ্রহণের ইখতিয়ার রাখে ।
        </p>
      </div>
      {title !== "মক্তব বিভাগ" && title !== "কিতাব বিভাগ" && (
        <div>
          <ApplyBanner />
        </div>
      )}
    </div>
  );
};

export default RulesPage;
