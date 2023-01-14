import { useStore } from "../store";

export default function EducationForm() {
  const school = useStore((state) => state.school);
  const setSchool = useStore((state) => state.setSchool);

  const major = useStore((state) => state.major);
  const setMajor = useStore((state) => state.setMajor);

  const startDate = useStore((state) => state.startDate);
  const setStartDate = useStore((state) => state.setStartDate);

  const endDate = useStore((state) => state.endDate);
  const setEndDate = useStore((state) => state.setEndDate);

  return (
    <section className="flex flex-col p-5 text-white">
      <h3 className="flex justify-center pt-3 text-xl font-light">Education</h3>

      <form className="grid grid-cols-2 gap-6 pt-3">
        <div className="flex flex-col col-span-2 gap-2">
          <label className="text-sm" for="school">
            School Name
          </label>
          <input
            id="school"
            className="h-8 pl-2 text-black rounded bg-stone-100"
            placeholder="Jefferson University"
            value={school}
            name="school"
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div className="flex flex-col col-span-2 gap-2">
          <label className="text-sm" for="major">
            Major
          </label>
          <input
            id="major"
            className="h-8 pl-2 text-black rounded bg-stone-100"
            placeholder="Work LLC"
            value={major}
            name="major"
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" for="school-start">
            Start Date
          </label>
          <input
            type="date"
            id="school-start"
            className="h-8 pl-2 text-black rounded bg-stone-100"
            value={startDate}
            name="startDate"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" for="school-end">
            End Date
          </label>
          <input
            type="date"
            id="school-end"
            className="h-8 pl-2 text-black rounded bg-stone-100"
            value={startDate}
            name="endDate"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
}
