import { useStore } from "../store";

export default function Resume() {
  const firstName = useStore((state) => state.firstName);
  const lastName = useStore((state) => state.lastName);
  const email = useStore((state) => state.email);
  const phone = useStore((state) => state.phone);
  const address1 = useStore((state) => state.address1);
  const address2 = useStore((state) => state.address2);
  const city = useStore((state) => state.city);
  const state = useStore((state) => state.state);
  const zip = useStore((state) => state.zip);
  const country = useStore((state) => state.country);
  const school = useStore((state) => state.school);
  const major = useStore((state) => state.major);
  const startDate = useStore((state) => state.startDate);
  const endDate = useStore((state) => state.endDate);
  const companyName = useStore((state) => state.companyName);
  const jobTitle = useStore((state) => state.jobTitle);
  const workStart = useStore((state) => state.workStart);
  const workEnd = useStore((state) => state.workEnd);
  const jobDescription = useStore((state) => state.jobDescription);

  return (
    <div className="pt-10">
      <div className="flex justify-center text-4xl font-bold">
        <span>{firstName}</span>
        <span>&nbsp;&nbsp;</span>
        <span>{lastName}</span>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-2">
          <div>
            <p className="">{address1}</p>
            <p>{address2}</p>
          </div>
          <span>•</span>
          <p>{city},</p>
          <p>{state},</p>
          <p>{zip}</p>
          <span>•</span>
          <p>{country}</p>
          <span>•</span>
          <p>{phone}</p>
        </div>
      </div>
      <div>
        <h2 className="pt-5 pl-10 text-3xl font-bold">Education</h2>
      </div>
      <div className="pt-2 pl-16">
        <div className="text-2xl font-semibold">{school}</div>
        <div className="text-lg">{major}</div>
        <div className="flex gap-3 text-sm">
          <div>{startDate}</div>
          <span>-</span>
          <div>{endDate}</div>
        </div>
      </div>
      <div>
        <h2 className="pt-5 pl-10 text-3xl font-bold">Work</h2>
      </div>
      <div className="pt-2 pl-16">
        <div className="text-2xl font-semibold">{companyName}</div>
        <div className="text-lg">{jobTitle}</div>
        <div className="flex gap-3 text-sm">
          <div>{workStart}</div>
          <span>-</span>
          <div>{workEnd}</div>
        </div>
        <div className="w-1/2">{jobDescription}</div>
      </div>
    </div>
  );
}
