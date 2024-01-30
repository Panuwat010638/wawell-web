import HomeBanner from "@/components/Home/HomeBanner";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeWedo from "@/components/Home/HomeWedo";
import HomeProduct from "@/components/Home/HomeProduct";
import HomeCollection from "@/components/Home/HomeCollection";
import HomeFloor from "@/components/Home/HomeFloor";
import HomeWall from "@/components/Home/HomeWall";
import HomeProject from "@/components/Home/HomeProject";
import HomeBlog from "@/components/Home/HomeBlog";
import HomeContact from "@/components/Home/HomeContact";
import HomeMap from "@/components/Home/HomeMap";

//Image
import banner01 from "../../public/assets/Images/Home/Banner/banner01.png"
import banner02 from "../../public/assets/Images/Home/Banner/banner02.png"
import banner03 from "../../public/assets/Images/Home/Banner/banner03.png"
import banner04 from "../../public/assets/Images/Home/Banner/banner04.png"
import bannerM01 from "../../public/assets/Images/Home/Banner/bannerM01.png"
import bannerM02 from "../../public/assets/Images/Home/Banner/bannerM02.png"
import bannerM03 from "../../public/assets/Images/Home/Banner/bannerM03.png"
import bannerM04 from "../../public/assets/Images/Home/Banner/bannerM04.png"

const banner = {
  title:'Wawell decor',
  detail:'"Elevate your space\nwith elegant design"',
  images:[
    {image:banner01,imageM:bannerM01,alt:'Home Banner Image 01'},
    {image:banner02,imageM:bannerM02,alt:'Home Banner Image 02'},
    {image:banner03,imageM:bannerM03,alt:'Home Banner Image 03'},
    {image:banner04,imageM:bannerM04,alt:'Home Banner Image 04'},
  ]
}

export default function Home() {
  
  return (
    <main>
      <HomeBanner data={banner}/>
      <HomeAbout/>
      <HomeWedo/>
      <HomeProduct/>
      <HomeCollection/>
      <HomeFloor/>
      <HomeWall/>
      <HomeProject/>
      <HomeBlog/>
      <HomeContact/>
      <HomeMap/>
    </main>
  );
}
