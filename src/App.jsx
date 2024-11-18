
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Button from './components/Button'
import Image from './components/Image'
import Logo from './assets/logo.png'
import Duft from './assets/Düfte.png'
import thirdlogo from './assets/thirdlogo.png'
import Menu from './components/Menu'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import Heading from './components/Heading'
import one from './assets/one.png'
import two from './assets/two.png'
import three from './assets/three.png'
import four from './assets/four.png'
import five from './assets/five.png'
import six from './assets/six.png'
import seven from './assets/seven.png'
import eight from './assets/eight.png'
import nine from './assets/nine.png'
import ten from './assets/ten.png'
import paymentmethod from './assets/pymentmetod.png'
import perfiumone from './assets/perfiumone.png'
import perfiumtwo from './assets/perfiumtwo.png'
function App() {

  return (
    <>
    {/* Header Part Start  */}
    <div className="bg-white h-[80px]">
      <Container>
        <Flex className={"items-center justify-between"}>
          <div className="Logo_part mt-[15px]">
            <Image src={Logo} alt={Logo}/>
          </div>
          <div className="menu_part mt-[20px]">
            <Flex>
              <Image src={Duft} alt={Duft} className={"mt-1"}/>
              <Menu mText={"Über Uns"} className={"font-mon font-regular text-menuColor text-[16px] px-[50px]"}/>
              <Menu mText={"Blog"} className={"font-mon font-regular text-menuColor text-[16px] "}/>
            </Flex>
          </div>
          <div className="icon_part mt-[15px]">
            <Flex className={"gap-[30px]"}>
            <CiUser className={"text-[20px]"}/>
            <CiShoppingCart className={"text-[20px]"}/>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>

    {/* Header Part End  */}

    {/* Banner Part Start  */}

      <div className="bg-Banner bg-no-repeat bg-cover bg-center pt-[270px] pb-[133px]">
        <Container>
          <div className="w-[546pxx]">
           <Heading text={"Ihr exklusiver Anbieter von Luxus- Parfümproben!"} as={"h3"} className={"font-mon font-semibold text-white text-[64px] pr-[594px]"}/>
           <Heading text={"Bei Duft Samples verstehen wir, dass die Auswahl des perfekten Duftes eine zutiefst persönliche und einzigartige Erfahrung ist."} as={"p"} className={"font-mon font-regular text-white text-[16px] pr-[681px]"}/>
           <Button btnText={"Jetzt einkaufen"} className={"font-mon font-medium text-menuColor text-[16px] bg-white py-[12px] px-[32px] rounded-[8px] mt-[10px]"}/>
          </div>
        </Container>
      </div>


    {/* Banner Part End  */}


    {/* Logo and pik Part Start  */}

    <div className="logoPik_part">
      <Container>
        <Flex className={"items-center gap-[48px]"}>
          <div className="">
            <Image src={one} alt={one}/>
          </div>
          <div className="">
           <Image src={two} alt={two}/>
          </div>
          <div className="">
           <Image src={three} alt={three}/>
          </div>
          <div className="">
           <Image src={four} alt={four}/>
          </div>
          <div className="">
           <Image src={five} alt={five}/>
          </div>
          <div className="">
           <Image src={six} alt={six}/>
          </div>
        </Flex>
        <div className="logoText_part">
        <Heading text={"Unsere Top 4 Mini-Flacons"} as={"h6"} className={"font-mon font-semibold text-menColor text-[38px] text-center"}/>
        </div>

        <div className="product_part mt-[40px]">
        <Flex className={"gap-[12px]"}>
         <div className="shadow-md	">
            <Image src={seven} alt={seven}/>
            <Heading text={"Creed – Aventus"} as={"p"} className={"font-mon font-semibold text-menuColor text-[16px] text-center"}/>
            <Heading text={"6,00 € – 40,00 €"} as={"p"} className={"font-mon font-semibold text-menuColor text-[16px] text-center"}/>
           </div>
           <div className="shadow-md	">
           <Image src={eight} alt={eight}/>
           <Heading text={"Xerjoff – Alexandria 2"} as={"p"} className={"font-mon font-semibold text-menuColor text-[16px] text-center"}/>
           <Heading text={"11,00 € – 79,00 €"} as={"p"} className={"font-mon font-semibold text-menuColor text-[16px] text-center"}/>
           </div>
           <div className="shadow-md	">
           <Image src={nine} alt={nine}/>
           <Heading text={"Xerjoff – Naxos"} as={"p"} className={"font-mon font-semibold text-menuColor text-[16px] text-center"}/>
           <Heading text={"6,00 € – 34,00 €"} as={"p"} className={"font-mon font-semibold text-menuColor text-[16px] text-center"}/>
           </div>
           <div className="shadow-md	">
           <Image src={ten} alt={ten}/>
           <Heading text={"Xerjoff – Accento"} as={"p"} className={"font-mon font-semibold text-menuColor text-[16px] text-center"}/>
           <Heading text={"7,00 € – 37,00 €"} as={"p"} className={"font-mon font-semibold text-menuColor text-[16px] text-center"}/>
          </div>
        </Flex>
        </div>



       </Container>
    </div>

    {/* Logo and pik Part End  */}


    {/* Second Banner Part Start  */}

    <div className="secondBanner_part mt-[60px]">
      <div className="bg-secondBanner bg-no-repeat bg-cover bg-center pt-[96px] pb-[157px]">
        <Container>
         <div className="w-[536px]">
           <Heading text={"MAISON FRANCIS KUhRKDJIAN"} as={"h6"} className={"font-mon font-semibold text-white text-[32px] pr-[35px]"}/>
           <Heading text={"Entdecke die Welt von Maison Francis Kurkdjian mit unseren edlen Duftproben. Erlebe die einzigartigen Düfte und die Exklusivität unserer Marke in kompakten Proben. Genieße den Luxus und die Kunst der Parfümherstellung, bevor du dich für deinen Favoriten entscheidest"} as={"p"} className={"font-mon font-regular text-white text-[16px] pr-[78px]"}/>
           <Button btnText={"ZU MFK"} className={"font-mon font-medium text-menuColor text-[16px] bg-white py-[12px] px-[32px] rounded-[8px] mt-[10px]"}/>
         </div>
        </Container>
      </div>
    </div>
    {/* Second Banner End  */}


    {/* perfium Part Start  */}
    <div className="perfium_part mb-[300px]">
      <Container>
        <Flex className={"gap-[40px]"}>
          <div className="Image_part relative">
            <Image src={perfiumone} alt={perfiumone}/>
            <div className="w-[466px] bg-white px-[20px] py-[20px] m-auto shadow-lg	absolute top-[430px] left-[40px]">
             <Heading text={"LOUIS VUITTON"} as={"p"} className={"font-mon font-semibold text-menuColor text-[20px]"}/>
             <Heading text={"Entdecke Louis Vuitton in kleinen Proben. Teste den Luxus, bevor du dich für das Original entscheidest."} as={"p"} className={"font-mon font-regular text-offblackColor text-[14px] pr-[90px]  mt-[8px] mb-[8px]"}/>
             <Button btnText={"ZU LOUIS VUITTON"} className={"font-mon font-medium text-white text-[16px] bg-menuColor py-[12px] px-[32px] rounded-[8px] mt-[8px]"}/>
            </div>
          </div>
          <div className="Image_part relative">
            <Image src={perfiumtwo} alt={perfiumtwo}/>
            <div className="w-[466px] bg-white px-[20px] py-[20px] m-auto shadow-lg	absolute top-[430px] left-[40px]">
              <Heading text={"CREED"} as={"p"} className={"font-mon font-semibold text-menuColor text-[20px]"}/>
              <Heading text={"Entdecke Creed in kleinen Proben. Teste den Luxus, bevordu dich für das Original entscheidest."} as={"p"} className={"font-mon font-regular text-offblackColor text-[14px] pr-[83px] mt-[8px] mb-[8px]"}/>
              <Button btnText={"ZU LOUIS VUITTON"} className={"font-mon font-medium text-white text-[16px] bg-menuColor py-[12px] px-[32px] rounded-[8px] mt-[10px]"}/>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
    {/* perfium Part End  */}


    {/* FAQ Part Start  */}
    <div className="faq_part">
      <Container>
       <Heading text={"FAQ"} as={"p"} className={"font-mon font-semibold text-menuColor text-[38px] text-center pb-[60px] border-l-white border-b-[2px] w-full"}/>
       <Flex className={"justify-between py-[8px]  border-l-white border-b-[2px] w-full"}>
       <Heading text={"Sind die Düfte original?"} as={"p"} className={"font-mon font-semibold text-offblackColor text-[16px]"}/>
       <IoChevronDownSharp />
       </Flex>
       <Flex className={"justify-between py-[8px]  border-l-white border-b-[2px] w-full"}>
       <Heading text={"Wie werden die Duftproben verpackt?"} as={"p"} className={"font-mon font-semibold text-offblackColor text-[16px]"}/>
       <IoChevronDownSharp />
       </Flex>
       <Flex className={"justify-between py-[8px]  border-l-white border-b-[2px] w-full"}>
       <Heading text={"Haben die Parfümproben einen Zerstäuber?"} as={"p"} className={"font-mon font-semibold text-offblackColor text-[16px]"}/>
       <IoChevronDownSharp />
       </Flex>
       <Flex className={"justify-between py-[8px]  border-l-white border-b-[2px] w-full"}>
       <Heading text={"Wie oft kann ich eine Parfümprobe sprühen?"} as={"p"} className={"font-mon font-semibold text-offblackColor text-[16px]"}/>
       <IoChevronDownSharp />
       </Flex>
      </Container>
    </div>
    {/* FAQ Part End  */}
    {/* Details Part Start  */}

    <div className="bg-black w-full pt-[65px] pb-[45px] mt-[100px]">
      <Container>
        <Flex className={""}>
          <div className="">
            <Flex className={"justify-between"}>
            <div className="third_logo pr-[130px]">
            <Image src={thirdlogo} alt={thirdlogo}/>
          </div>
          <div className="">
           <Heading text={"HILFE"} as={"p"} className={"font-mon font-semibold text-white text-[20px]"}/>
           <Heading text={"FAQ"} as={"p"} className={"font-mon font-regular text-white text-[16px]"}/>
           <Heading text={"Rückgaberecht"} as={"p"} className={"font-mon font-regular text-white text-[16px]"}/>
          </div>
          <div className="ml-[130px]">
            <Heading text={"UNTERNEHMEN"} as={"p"} className={"font-mon font-semibold text-white text-[20px]"}/>
            <Heading text={"Kontakt"} as={"p"} className={"font-mon font-regular text-white text-[16px]"}/>
            <Heading text={"Über Uns"} as={"p"} className={"font-mon font-regular text-white text-[16px]"}/>
          </div>
            </Flex>
          </div>
          <div className="ml-[130px]">
            <Flex>
            <div className="">
            <Heading text={"RECHTLICHES"} as={"p"} className={"font-mon font-semibold text-white text-[20px]"}/>
            <Heading text={"Impressum"} as={"p"} className={"font-mon font-regular text-white text-[16px]"}/>
            <Heading text={"Datenschutzerklärung"} as={"p"} className={"font-mon font-regular text-white text-[16px]"}/>
          </div>
          <div className="ml-[50px]">
            <Heading text={"UNSER ZIEL"} as={"p"} className={"font-mon font-semibold text-white text-[20px]"}/>
              <div className="w-[183px]">
              <Heading text={"Bei Duft Samples verstehen wir, dass die Auswahl des perfekten Duftes eine zutiefst persönliche und einzigartige Erfahrung ist."} as={"p"} className={"font-mon font-regular text-white text-[16px] pr-[16px]"}/>
              </div>
          </div>
            </Flex>
          </div>
        </Flex>
        <div className="pt-[70px]">
            <Flex className={"justify-between"}>
             <Heading text={"DUFTSAMPLES © 2023 . All Rights Reserved."} as={"p"} className={"font-mon font-regular text-white text-[16px]"}/>
             <Image src={paymentmethod} alt={paymentmethod}/>
            </Flex>
          </div>
      </Container>
    </div>
    {/* Details Part Start  */}
    
    </>
  )
}

export default App





















