import { homePageContent } from "../data/page-content";
import ApplyBanner from "../components/ApplyBanner";

const HomePage = () => {
  const { title, intro, sections, importantNotes } = homePageContent;

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900 text-center">
          {title}
        </h1>
        <p className="text-lg text-slate-700 text-center">{intro}</p>
        <h2 className="text-lg text-slate-700 text-center">
          দাখেলার ন্যূনতম যোগ্যতা:
        </h2>
        <h3 className="text-lg font-bold text-slate-900 text-center">
          {sections.maktab.title}
        </h3>
      </div>

      <div className="space-y-6">
        <div className="mb-6 space-y-6">
          <div>
            <div className="space-y-4">
              {sections.maktab.classes.map((classItem) => (
                <div
                  key={classItem.label}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <h4 className="mb-2 font-semibold text-slate-900">
                    {classItem.label}:
                  </h4>
                  <ul className="ml-4 space-y-1">
                    {classItem.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-6 font-bold text-slate-900 text-center">
              {sections.kitab.title}
            </h3>
            <div className="space-y-4">
              {sections.kitab.groups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <h4 className="mb-2 font-semibold text-slate-900">
                    {group.label}:
                  </h4>
                  <ul className="ml-4 space-y-1">
                    {group.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <h3 className="mb-3 text-xl font-semibold text-amber-900">
            গুরুত্বপূর্ণ নির্দেশনা
          </h3>
          <ul className="ml-4 space-y-2">
            {importantNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2 text-amber-900">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600" />
                <span className="font-medium">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ApplyBanner />
      </div>
    </div>
  );
};

export default HomePage;
