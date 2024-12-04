type Skill = {
    logo: string;
    name: string;
    id: number;
  };
  
  export const skills: Skill[] = [
    { logo: "/images/next.png", id: 1, name: "next" },
  
    {
      logo: "/images/ts.jpg",
      id: 2,
      name: "ts",
    },
  
    {
      logo: "/images/tw.png",
      id: 3,
      name: "tw",
    },
  
    {
      logo: "/images/shadcn.jpg",
      id: 4,
      name: "shadcn",
    },
  ];
  
  export default skills;