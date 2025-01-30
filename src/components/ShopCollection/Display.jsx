import Card from "./Card";
import p1 from "../../assets/image/product/p01.png"
import p2 from "../../assets/image/product/p02.png"
import p3 from "../../assets/image/product/p03.png"
import p4 from "../../assets/image/product/p04.png"
import p5 from "../../assets/image/product/p05.png"
import p6 from "../../assets/image/product/p06.png"


const Display = () => {
    const categories = [
        {
            title: "WOMEN'S PERFUME",
            image: p1,
            link: "/womens-perfume"
        },
        {
            title: "MEN'S COLOGNE",
            image: p2,
            link: "/mens-cologne"
        },
        {
            title: "HAIRCARE",
            image: p3,
            link: "/haircare"
        },
        {
            title: "SKINCARE",
            image: p4,
            link: "/skincare"
        },
        {
            title: "GIFT SETS",
            image: p5,
            link: "/gift-sets"
        },
        {
            title: "BEST SELLERS",
            image: p6,
            link: "/best-sellers"
        }
    ];

    return (
        <div className="max-w-[1234px] mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <Card
                        key={index}
                        title={category.title}
                        image={category.image}
                        link={category.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Display;