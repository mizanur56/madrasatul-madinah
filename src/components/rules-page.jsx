import PropTypes from "prop-types";
import ApplyBanner from "../common/ApplyBanner";

const RulesPage = ({ content }) => {
  // console.log(content);
  const { title, intro, sections } = content;

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-sm text-slate-600 ">{intro.main}</h1>
        <p className="text-xl font-semibold text-slate-900">{intro.sub}</p>
        <p>{title}</p>
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
                {section?.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2 text-slate-700"
                  >
                    <span> {itemIdx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
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

RulesPage.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    intro: PropTypes.shape({
      main: PropTypes.string.isRequired,
      sub: PropTypes.string.isRequired,
    }).isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default RulesPage;
