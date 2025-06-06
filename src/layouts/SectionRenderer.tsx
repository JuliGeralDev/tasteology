import useGetSection from "../hooks/useGetSection";
import CookingSection from "../features/cookingSection/CookingSection";
import TasteSection from "../features/TasteSection/TasteSection";
const SectionRenderer = () => {

    const sections = useGetSection(); 

    return (
        <>
            {sections.map((section) => {
                console.log("SectionRenderer", section);
            const type = section.type;

            let Component = null;
            switch (type) {
                case "image-grid":
                    Component = <CookingSection section={section} />;
                break;
                case "card-grid":
                    Component = <TasteSection section={section} />;
                break;
                default:
                    return null;
            }

            return (
                <section key={section.id}>
                    {Component}
                </section>
            );
            })}
        </>
    );
}

export default SectionRenderer;