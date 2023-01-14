import { useState } from "react";
import GeneralForm from "./GeneralForm";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";

export default function Tabs() {
  const [tab, setTab] = useState("about");

  function setAbout() {
    setTab("about");
  }
  function setEducation() {
    setTab("education");
  }
  function setWork() {
    setTab("work");
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <section>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="w-4/12">
            <a
              href="#"
              aria-current="page"
              className={`${
                tab === "about"
                  ? "inline-block w-10/12 p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                  : "inline-block w-10/12 p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
              onClick={setAbout}
            >
              About
            </a>
          </li>
          <li className="w-4/12">
            <a
              href="#"
              className={`${
                tab === "education"
                  ? "inline-block w-10/12 p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                  : "inline-block w-10/12 p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
              onClick={setEducation}
            >
              Education
            </a>
          </li>
          <li class="w-4/12">
            <a
              href="#"
              className={`${
                tab === "work"
                  ? "inline-block w-10/12 p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
                  : "inline-block w-10/12 p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              }`}
              onClick={setWork}
            >
              Work
            </a>
          </li>
        </ul>
      </section>
      <section className="row-start-2 ">
        {tab === "about" ? <GeneralForm /> : null}
        {tab === "education" ? <EducationForm /> : null}
        {tab === "work" ? <WorkForm /> : null}
      </section>
    </div>
  );
}
