export function getAboutUsParagraphsBasedOnCurrentBrandName(brandName: string) {
    return {
        mazecar: [
            {
                key: "paragraph-1",
                paragraph: "Welcome to Maze Cars, where driving dreams come to life. At Maze Cars, we believe that the journey is just as important as the destination, and our commitment to delivering exceptional vehicles reflects this philosophy."
            },
            {
                key: "paragraph-2",
                paragraph: "Established with a passion for automotive excellence, Maze Cars has become a hallmark in the industry for providing high-quality, reliable, and stylish vehicles that cater to the diverse needs and tastes of our valued customers. With a rich history rooted in a love for innovation and performance, Maze Cars has consistently set the standard for cutting-edge design and engineering."
            },
            {
                key: "paragraph-3",
                paragraph: "At Maze Cars, we understand that every driver is unique, and that's why we offer a diverse range of models to suit various lifestyles. Whether you're seeking the thrill of a sports car, the versatility of an SUV, or the sophistication of a luxury sedan, Maze Cars has the perfect vehicle to match your desires."
            },
            {
                key: "paragraph-4",
                paragraph: "As we continue to pave the way for the future of driving, Maze Cars remains dedicated to pushing boundaries, embracing innovation, and delivering vehicles that embody the spirit of adventure. Join us on this exciting journey, and let Maze Cars be the companion on your road to unparalleled driving pleasure."
            }
        ],
        mazemotorcycle: [
            {
                key: "paragraph-1",
                paragraph: "Welcome to Maze Motorcycles, where the open road meets two-wheeled perfection. At Maze Motorcycles, our passion for motorcycles is more than a commitment; it's a lifestyle. Born from a deep love for the freedom of the ride, Maze Motorcycles stands as a testament to the artistry, performance, and innovation that define the world of two-wheeled exhilaration."
            }, 
            {
                key: "paragraph-2",
                paragraph: "At Maze Motorcycles, we recognize that each rider has a distinct taste and preference. That's why our lineup caters to a diverse range of riders, whether you're drawn to the power and precision of a sportbike, the versatility of an adventure bike, or the classic allure of a cruiser. Maze Motorcycles offers a model for every rider seeking the perfect balance between performance and style."
            },
            {
                key: "paragraph-3",
                paragraph: "What truly sets Maze Motorcycles apart is our unwavering commitment to rider satisfaction. We understand that the bond between a rider and their motorcycle is unique and sacred. Therefore, we strive to provide not just a means of transportation but a companion that resonates with your passion for the road."
            },
            {
                key: "paragraph-4",
                paragraph: "As Maze Motorcycles continues to carve its path in the world of two-wheeled wonders, we invite you to join us on this thrilling journey. Whether you're a seasoned rider or a newcomer to the world of motorcycles, Maze Motorcycles is here to make your riding dreams a reality. Embrace the freedom, embrace the journey, and let Maze Motorcycles be your trusted partner on the road to unbridled adventure."
            },
        ]
    }[brandName]
}