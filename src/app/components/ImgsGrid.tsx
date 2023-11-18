function ImgsGrid() {
  const imgs = [
    "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3794359/pexels-photo-3794359.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4226882/pexels-photo-4226882.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <div className="flex flex-wrap gap-1 mt-3">
      {imgs.map((img, i) => (
        <img
          src={img}
          key={i}
          className="object-cover w-36 h-36 grow rounded-lg"
        />
      ))}
    </div>
  );
}

export default ImgsGrid;
