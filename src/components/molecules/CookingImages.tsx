const CookingImages = () => (
  <div className="flex flex-col lg:flex-row gap-4 flex-1">
    <div className="flex-1">
      <img
        src="/assets/pot.png"
        alt="Cooking pot"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col gap-4 flex-1">
      <img
        src="/assets/chef.png"
        alt="Chef planning"
        className="w-full object-cover"
      />
      <img
        src="/assets/eggs.png"
        alt="Eggs cooked"
        className="w-full object-cover"
      />
    </div>
  </div>
);

export default CookingImages;
