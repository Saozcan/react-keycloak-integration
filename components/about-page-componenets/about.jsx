import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import { partnerBrands } from "../../constants/partnerBrands";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div  className="bg-[url(/16.png)]  bg-fixed bg-center bg-cover pt-36 pb-36 max-md:pt-36 max-md:pb-36 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">MENTORLUK HAKKINDA BİLGİ Mİ ARIYORSUN?</h1>
            <p className="text-xl max-w-md">
            Güven, Uyum ve inovasyon!


            </p>
          </div>
          <div className="flex gap-12 max-sm:text-center text-white">
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">5k+</h2>
              <p className="text-lg">Kullanıcı</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">100+</h2>
              <p className="text-lg">Şirket</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* what we offer section start */}
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-between max-md:items-center">
              
             
            </div>
            <div className="w-full">
              <img
                src="/3.png"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
        
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md:grid-rows-3 grid grid-cols-3 grid-rows-1">
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
              Mentorluk İlişkisinin Başlaması

              </h2>
              <p className="text-xl mt-2">
              Mentor ve mentee arasındaki ilişki, hedeflerin belirlenmesi ve bu yönde adımlar atılmasıyla başlar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
              İletişim ve Görüşme Koşulları
              </h2>
              <p className="text-xl mt-2">
              Mentorluk ilişkisinde toplantıların ne zaman ve nasıl yapılacağına ilişkin prensipler belirlenir.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
              Mentor Seçimi
              </h2>
              <p className="text-xl mt-2">
             
              Mentor olacak kişi, mentee'nin hedeflerine ulaşmasında yardımcı olacak kişisel ve profesyonel özelliklere sahip olmalıdır.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-black">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10 py-28  max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center"
          >
            <h1 className="text-5xl font-bold title-font w-max">
           Biz Kim miyiz?
            </h1>
            <p className="text-xl mt-5">
            Uzman olduğu alanda yetkin, deneyimli ve iletişimi güçlü bir kişilerden oluşan bir aileyiz.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full text-white/50"
          >
            <h2 className="text-2xl">Projelerimiz</h2>
            <div className="relative w-fit max-md:mx-auto -mt-7 max-md:-mt-5">
              <h1 className="text-[150px] max-sm:text-[120px] font-semibold relative text-red-500">
                200+
              </h1>
              <div
                className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-no-repeat "
                style={{
                  backgroundImage: "url(/200+.png)",
                  backgroundPosition: "40% 100%",
                  backgroundSize: "95%",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* we focus section start */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex max-md:flex-wrap-reverse justify-center items-end max-md:text-center gap-10 max-md:gap-12  -mt-44 max-md:mt-0 "
          >
            <div className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center">
              <img src="/12.png" alt="" />
            </div>

            <div className=" w-1/2 text-5xl max-lg:text-4xl max-md:w-full ">
              <h1 className="font-semibold ">Öncelliğimiz Sizsiniz</h1>
              <h1 className="font-semibold  text-red-500">
               VE HEP BERABERİZ!
              </h1>
            </div>
          </motion.div>
          <div className="we-focus-cards grid grid-cols-3 max-md:grid-cols-1 grid-rows-1 max-md:grid-rows-3 gap-6 mt-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-01</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
               BT & Telekom Projeleri
              </h2>
              <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"Devam et"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-01</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
               Kurumsal Proje Yönetimi
              </h2>
              <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"Devam et"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-01</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                AR-GE & AB Projeleri Yönetimi
              </h2>
              <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"Devam et"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* we focus section start */}
      <div
        className="bg-[50%] max-lg:bg-[55%] max-md:bg-[90%] bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/faq-bannar.jpg')" }}
      >
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 flex justify-end  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/2 max-lg:w-2/3 max-md:w-full"
          >
            <h1 className="text-5xl ">
            Zaman Her şeydir .<hr></hr>
              <span className="text-red-500">Kaybetme!</span>
            </h1>
            <div className="flex flex-col gap-5 mt-7">
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>BT Projelerimiz</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Yönetim Sistemleri Danışmanlığı</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Mentor Akademi</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Proje Yönetimi ve Seminerlerimiz</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      
     
      {/* review section end */}
      {/* partner brand section start */}
      
        
      {/* partner brand section end */}
    </>
  );
};

export default AboutPage;
