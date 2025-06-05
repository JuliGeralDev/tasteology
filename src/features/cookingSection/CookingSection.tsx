import CookingImages from "../../components/molecules/CookingImages";
import CookingText from "../../components/organisms/CookingText";


const CookingSection = () => (
  <section className="">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <CookingImages />
      </div>
      <CookingText />
    </div>
  </section>
);

export default CookingSection;
