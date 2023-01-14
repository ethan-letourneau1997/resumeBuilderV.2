import { useStore } from "../store";

export default function WorkForm() {
  const companyName = useStore((state) => state.companyName);
  const setCompanyName = useStore((state) => state.setCompanyName);

  const jobTitle = useStore((state) => state.jobTitle);
  const setJobTitle = useStore((state) => state.setJobTitle);

  const workStart = useStore((state) => state.workStart);
  const setWorkStart = useStore((state) => state.setWorkStart);

  const workEnd = useStore((state) => state.workEnd);
  const setWorkEnd = useStore((state) => state.setWorkEnd);

  const jobDescription = useStore((state) => state.jobDescription);
  const setJobDescription = useStore((state) => state.setJobDescription);

  return (
    <section className="flex flex-col p-5 text-white">
      <h3 className="flex justify-center pt-3 text-xl font-light">Work</h3>

      <form className="grid grid-cols-2 gap-6 pt-3">
        <div className="flex flex-col col-span-2 gap-2">
          <label className="text-sm" for="company">
            Company Name
          </label>
          <input
            id="company"
            className="h-8 pl-2 text-black rounded bg-stone-100"
            placeholder="Work LLC"
            value={companyName}
            name="companyName"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="flex flex-col col-span-2 gap-2">
          <label className="text-sm" for="job">
            Job Title
          </label>
          <input
            id="jobTitle"
            className="h-8 pl-2 text-black rounded bg-stone-100"
            placeholder="Software Engineer"
            value={jobTitle}
            name="jobTitle"
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" for="work-start">
            Start Date
          </label>
          <input
            id="work-start"
            type="date"
            className="h-8 pl-2 text-black rounded bg-stone-100"
            value={workStart}
            name="workStart"
            onChange={(e) => setWorkStart(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" for="work-end">
            End Date
          </label>
          <input
            id="work-end"
            type="date"
            className="h-8 pl-2 text-black rounded bg-stone-100"
            value={workEnd}
            name="workEnd"
            onChange={(e) => setWorkEnd(e.target.value)}
          />
        </div>
        <div className="flex flex-col col-span-2 gap-2">
          <label className="text-sm" for="job-description">
            Job Description
          </label>
          <textarea
            className="pl-2 text-black rounded "
            id="job-description"
            rows="5"
            value={jobDescription}
            name="jobDescription"
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
}
