export const filterAccordion = [
  {
    id: 1,
    label: "مرتب سازی",
    name:'arrange',
    radioGroup: [
      {
        id: "newest",
        radioLabel: "جدیدترین",
      },
      {
        id: "oldest",
        radioLabel: "قدیمی ترین",
      },
      {
        id:"popular",
        radioLabel: "محبوب ترین",
      },
    ],
    radio:true
  },
  {
    id: 2,
    label: "دسته بندی",
    name:'order',
    radioGroup: [
      {
        id: "frontend",
        radioLabel: "فرانت اند",
      },
      {
        id: "backend",
        radioLabel: "بک اند",
      },
      {
        id: "python",
        radioLabel: "پایتون",
      },
      {
        id: "miscellaneous",
        radioLabel: "متفرقه",
      },
    ],
  },
  {
    id: 3,
    label: "قیمت",
    name:'price',
    radioGroup: [
      {
        id:"cheapest" ,
        radioLabel: "ارزان ترین",
      },
      {
        id: "expensive",
        radioLabel: "گران ترین",
      },
      {
        id: "discounted",
        radioLabel: "تخفیف خورده ها",
      },
    ],
    radio:true,
  },
];
