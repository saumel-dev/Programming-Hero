import Image from "next/image";
import cena from "./../../../public/images.jpg"



export const metadata = {
    title: 'About',
    description: 'About the website',
}

const AboutPage = () => {
    return (
        <div>
            <h2>This is About Page</h2>
            <Image width="900" height="400" alt="next" src={cena}></Image>
        </div>
    );
};

export default AboutPage;