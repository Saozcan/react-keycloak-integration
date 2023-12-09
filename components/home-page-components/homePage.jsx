import { FaPeriscope } from "react-icons/fa";
import Button from "../buttons-component/solidbutton";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { useToast } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const HomePage = () => {

  const navigate = useNavigate();
  const toast = useToast();
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const handleSearch = () => {
    const searchInp = document.getElementById("searchInp");
    if (searchInp.value && searchInp.value.trim()) {
      navigate(`/search?query=${searchInp.value}`);
    } else {
      errorToast("Fill the first first!", "error");
    }
  };
  return (
    <div className=" w-full overflow-hidden">
      <div className=" flex bg-[url('/s1.png')] pt-36 pb-20 bg-top bg-no-repeat bg-cover">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-12"
        >
          <motion.h1
            variants={animationVariants.fadeLeft}
            className="text-6xl max-lg:mx-auto font-semibold max-sm:text-4xl max-w-lg "
          >
            Yetenekli danışmanlarla büyüyün ve büyütün.
          </motion.h1>
          <motion.p
            variants={animationVariants.fadeLeft}
            className="text-xl max-lg:mx-auto max-w-md  "
          >

          </motion.p>
          <motion.div
            variants={animationVariants.fadeLeft}
            id="search-inp"
            className="max-w-xl max-lg:mx-auto max-lg:w-full relative"
          >
            <FaPeriscope className="text-red-500 text-2xl absolute left-2 top-5 " />
            <input
              placeholder="Arama..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              autoComplete="off"
              id="searchInp"
              className="w-full py-5 pl-10 pr-32 text-black rounded-md focus:outline-none"
              type="text"
            />
            <Button
              content={"Arama"}
              fontSize={"text-xl"}
              padding={"px-5  py-2"}
              furtherClasses={"absolute right-2"}
              styles={{ top: 9.5 }}
              onClick={handleSearch}
            />
          </motion.div>
          <motion.div
            variants={animationVariants.fadeLeft}
            className="flex max-lg:flex-col max-lg:items-center gap-10 w-full justify-between items-end mt-4"
          >


          </motion.div>
        </motion.div>

        {/* </Reveal> */}
      </div>
      {/* about section */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex justify-between items-start p-10 py-28 max-md:py-16 gap-5 max-md:px-5 max-md:flex-col max-md:items-center max-md:text-center"
        >
          <div className="w-2/4 max-md:w-full ">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomOut}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-5xl max-md:text-4xl font-bold title-font">
                Dijital Danışmanlıkta
                <span className=" text-red-500 title-font "> NEDEN FREELANCER?</span>
              </h2>
            </motion.div>
          </div>
          <div className="w-2/4 max-md:w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeRight}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-xl">
                Birçok freelancer çalışan kadromuzla iş sürecinizi profesyonel bir şekilde yönetmek için
              </p>
              <Link onClick={scrollToTop} to={"/about"}>
                <Button
                  content={"Hemen Başla"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>



      {/* appreciation section start */}
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
            “Dijitalleşen dünyada, freelancer olmak çok yükselen bir trend.

            </motion.h1>
            <motion.p
              variants={animationVariants.fadeLeft}
              className="text-2xl"
            >
            Karşılıklı soru-cevap ve sohbet eşliğinde, freelance çalışmaya ve her ne işte olursanız olun, kendi işinizi pazarlamaya ve müşteri bulmaya beraber başlayalım!”
            </motion.p>
            <motion.div
              variants={animationVariants.fadeLeft}
              className="grid grid-cols-2 grid-rows-2 gap-10"
            >
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                 5k+
                </h2>
                <p className="text-xl">
                  Çalışan
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  100+
                </h2>
                <p className="text-xl">
                  Şirket
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  10k+
                </h2>
                <p className="text-xl">
                  Yardım alan
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                 25k+
                </h2>
                <p className="text-xl">
                  Kullanıcı
                </p>
              </div>
            </motion.div>
            <motion.div variants={animationVariants.fadeLeft}>
              <Link onClick={scrollToTop} to={"/contact"}>
                <Button
                  content={"Sen de Katıl"}
                  padding={"px-6 py-3"}
                  fontSize={"text-xl"}
                />
              </Link>
            </motion.div>
          </motion.div>
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src="/17.png"
                className="absolute w-full h-full object-cover object-center "
                alt=""
              />
              <div className="absolute w-full h-full bg-black/50 "></div>

              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20 "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto destination-section p-10 max-md:px-5  pb-28"
        >

        </div>
      </div>
      {/* appreciation section end */}
      {/* review section start */}
      <div
        style={{ maxWidth: 1200 }}
        className=" mx-auto  p-10 py-28 max-md:py-14 max-md:px-5 "
      >
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          className="text-5xl max-md:text-4xl font-semibold text-center  mb-16 max-md:mb-12"
        >
          Müşteriler sıklıkla bunları soruyor
        </motion.h1>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion className="flex max-md:flex-col gap-5 " allowToggle={true}>
            <div className=" w-1/2 max-md:w-full text-xl flex flex-col gap-5 ">
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Neden bir mentöre ihtiyacım var?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Bir mentör, deneyimleri ve bilgisiyle size rehberlik ederek, hedeflerinize daha hızlı ve etkili bir şekilde ulaşmanıza yardımcı olabilir. Ayrıca, kendi deneyimlerinden öğrenebileceğiniz değerli
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Hangi alanlarda mentorluk hizmeti alabilirim?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Mentorluk genellikle kariyer, BT, girişimcilik,AR-GE 
                 ve kişisel gelişim gibi birçok alanda hizmet sunulabilir.
                  İhtiyaçlarınıza ve hedeflerinize bağlı olarak farklı alanlarda mentörlük hizmeti alabilirsiniz.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Mentorluk süreci nasıl işler?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Mentörlük süreci genellikle düzenli toplantılar, hedef belirleme ve ilerlemenin takibi gibi unsurları içerir. 
                Mentor ve menti
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Nasıl bir mentör seçmeliyim?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Mentör seçerken kariyer hedeflerinizle uygun,işinde profesyonel ve sizi ileriye taşıyabileceğinizi düşündüğünüz.
                </AccordionPanel>
              </AccordionItem>
            </div>
            <div className=" w-1/2 max-md:w-full text-xl flex flex-col gap-5 ">
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Mentorluk hizmeti ücretli mi?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                 Evet.Herhangi bir konuda danışmanlık hizmeti almak için ücret ödemelisiniz.Ücretler minimum ve maksimum tarifelerle size en uygun olanını seçmenize yardımcı olacaktır.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Danışmanlarla nasıl iletişime geçeceğim?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Danışmanlarla iletişime geçmek için ilk önce kayıt olmanız gerekiyor. Seçeceğiniz konu ve danışman için ödeme yaptığınızda bir iletişim ekranı çıkacaktır.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Danışmanlık almak istemezsem ücret iadesi alabilecek miyim?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                 Evet.İlk 24 saat için ücretin vergilendirme ve aracı kuruluş finansı hariç alabilirsiniz.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      Danışmanlık aldığım alanı değiştirebilir miyim?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                 Evet.Bir defaya mahsus olarak başka bir danışmanlık hizmeti alabilirsiniz.
                </AccordionPanel>
              </AccordionItem>
            </div>
          </Accordion>
        </motion.div>
      </div>
      {/* what we do section end */}
    </div>
    
      
    

    
  );
};

export default HomePage;
