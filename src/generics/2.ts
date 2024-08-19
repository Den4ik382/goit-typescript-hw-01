type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType>(top: T, bottom: T): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const user = compare(
  {
    name: "Anrdrey",
    position: 10,
    color: "white",
    weight: 100,
  },
  {
    name: "Sergey",
    position: 120,
    color: "blue",
    weight: 30,
  }
);

console.log(user);
