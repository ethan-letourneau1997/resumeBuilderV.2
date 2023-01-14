import create from "zustand";

// define the store

export const useStore = create((set) => ({
  firstName: "Ethan",
  setFirstName: (firstName) => set({ firstName }),

  lastName: "Letourneau",
  setLastName: (lastName) => set({ lastName }),

  email: "ethan@ethanlet.com",
  setEmail: (email) => set({ email }),

  phone: "(804)441-5738",
  setPhone: (phone) => set({ phone }),

  address1: "214 Pine Ridge Rd.",
  setAddress1: (address1) => set({ address1 }),

  address2: "",
  setAddress2: (address2) => set({ address2 }),

  city: "Aylett",
  setCity: (city) => set({ city }),

  state: "Virginia",
  setState: (state) => set({ state }),

  zip: "23009",
  setZip: (zip) => set({ zip }),

  country: "United States",
  setCountry: (country) => set({ country }),

  school: "Southern New Hampshire University",
  setSchool: (school) => set({ school }),

  major: "Information Technology",
  setMajor: (major) => set({ major }),

  startDate: "09-01-2020",
  setStartDate: (startDate) => set({ startDate }),

  endDate: "08-14-2022",
  setEndDate: (endDate) => set({ endDate }),

  companyName: "Target",
  setCompanyName: (companyName) => set({ companyName }),

  jobTitle: "Fulfillment Specialist",
  setJobTitle: (jobTitle) => set({ jobTitle }),

  workStart: "10-04-2021",
  setWorkStart: (workStart) => set({ workStart }),

  workEnd: "11-05-2022",
  setWorkEnd: (workEnd) => set({ workEnd }),

  jobDescription:
    "Pick customer orders in a prompt and precise manner. Utilize technology to track progress and meet daily goals.",
  setJobDescription: (jobDescription) => set({ jobDescription }),
}));
