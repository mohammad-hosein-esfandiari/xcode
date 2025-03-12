export const filterAccordion = [
  {
    id: 1,
    label: "Sort by",
    name:'arrange',
    radioGroup: [
      {
        id: "newest",
        radioLabel: "The Newest",
      },
      {
        id: "oldest",
        radioLabel: "The Oldest",
      },
      {
        id:"popular",
        radioLabel: "Most Popular",
      },
    ],
    radio:true
  },
  {
    id: 2,
    label: "Category",
    name:'order',
    radioGroup: [
      {
        id: "frontend",
        radioLabel: "Frontend",
      },
      {
        id: "backend",
        radioLabel: "Backend",
      },
      {
        id: "python",
        radioLabel: "Python",
      },
      {
        id: "miscellaneous",
        radioLabel: "Miscellaneous",
      },
    ],
  },
  {
    id: 3,
    label: "Level",
    name:'level',
    radioGroup: [
      {
        id: "preliminary",
        radioLabel: "Preliminary",
      },
      {
        id: "intermediate",
        radioLabel: "Intermediate",
      },
      {
        id: "advanced",
        radioLabel: "Advanced",
      },

    ],
  },
  {
    id: 4,
    label: "Price",
    name:'price',
    radioGroup: [
      {
        id:"cheapest" ,
        radioLabel: "The Cheapest",
      },
      {
        id: "expensive",
        radioLabel: "Most Expensive",
      },
      {
        id: "discounted",
        radioLabel: "Discounted",
      },
    ],
    radio:true,
  },
];
