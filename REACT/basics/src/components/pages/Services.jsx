import Card from "./Card";

const buses = [
  { id: 1, title: "AC Bus", price: 500 },
  { id: 2, title: "Sleeper Bus", price: 800 },
  { id: 3, title: "Luxury Bus", price: 1200 },
  { id: 4, title: "Electric Bus", price: 600 },
  { id: 5, title: "Express Bus", price: 700 },
  { id: 6, title: "Volvo Bus", price: 1500 },
];

function Services() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {
        buses.map((bus) => (
          <Card
            key={bus.id}
            title={bus.title}
            price={bus.price}
          />
        ))
      }
    </div>
  );
}

export default Services;
