import CookingImages from "../../components/organisms/CookingImages";
import CookingText from "../../components/organisms/CookingText";


const CookingSection = () => (
  <section>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
      <div className="lg:col-span-2">
        <CookingImages />
      </div>
      <CookingText />
    </div>
  </section>
);

export default CookingSection;
