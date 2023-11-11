export interface Profession {
    name: string;
    person: string;
    available: string;
    hour: string;
    week: string;
  }
  
  export interface Contracts {
    name: string;
    professions: Profession[];
  }

  export const ContractsData: Contracts[] = [
    {
      name: "All Contracts",
      professions: [
        { name: "UI/UX Designer for company landing page design",
        person: "Hired by: Jone Doe",
        available: "Active",
        hour: "$2.50 (Hourly)",
        week: "20hours (Weekly limit)"
      },
        { name: "UI/UX Designer for company landing page design",
        person: "Hired by: Smith Ban",
        available: "Active",
        hour: "$150.00 (Budget)",
        week: "$80.00 (in Escrow)"
      },
        { name: "UI/UX Designer for Edutech project",
        person: "Hired by: Arash Sung",
        available: "Active",
        hour: "$150.00 (Budget)",
        week: "$80.00 (in Escrow)"
      },
        { name: "UI/UX Designer for Edutech project",
        person: "Hired by: Arash Sung",
        available: "Active",
        hour: "$160.00 (Budget)",
        week: "$80.00 (in Escrow)"
      },
    ],
  },
  {
    name: "Hourly (1)",
    professions: [],
  },
  {
    name: "Active Millestone (3)",
    professions: [],
  },
  {
    name: "Awaiting Millestones (0)",
    professions: [],
  },
  {
    name: "Payment Requests (0)",
    professions: [],
  },
];