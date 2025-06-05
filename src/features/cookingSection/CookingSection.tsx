const CookingSection = () => {
  return (
    <section className="px-6 py-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left images */}
            <div className="lg:col-span-2 flex flex-col lg:flex-row gap-4">
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

            {/* Right content */}
            <div className="flex flex-col justify-center">
            <h2 className="text-white text-xl tracking-widest uppercase font-medium">
                What does cooking mean?
            </h2>
            <hr className="my-3 border-gray-600 w-3/4" />
            <p className="text-gray-300 leading-relaxed ">
                Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...
            </p>
            <p className="mt-6 text-[#d92c2c]  font-semibold tracking-wider">
                THE PERFECT EGG
            </p>
            <p className="text-white font-semibold ">
                Keep water between 67 and 68°C <br />
                for a flavourful, tender yolk
            </p>
            </div>
        </div>
    </section>
  );
};

export default CookingSection;