// src/contactsData.ts
export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export const contactsData: Contact[] = [
  {
    id: "1",
    name: "Random User 1",
    email: "random@user.com",
    phone: "123-456-7890",
  },
  {
    id: "2",
    name: "Random User 2",
    email: "random@user2.com",
    phone: "987-654-3210",
  },
];
