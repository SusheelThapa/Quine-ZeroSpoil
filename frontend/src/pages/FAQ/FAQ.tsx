import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Layout from "@/layout/Layout";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import faqImage from "@/assets/img/faq.png";

const faqs = [
  {
    question: "What is ZeroSpoil?",
    answer:
      "ZeroSpoil is a sustainable living app designed to minimize food waste by offering features like intelligent inventory management, community recipe sharing, and surplus food donations.",
  },
  {
    question: "How does ZeroSpoil help reduce food waste?",
    answer:
      "ZeroSpoil helps users manage their food inventory efficiently, suggests recipes based on available ingredients, and facilitates surplus food donations to local charities, contributing to a more sustainable lifestyle.",
  },
  {
    question: "Is ZeroSpoil free to use?",
    answer:
      "Yes, ZeroSpoil is available for free, empowering users to embrace sustainable cooking practices without any cost.",
  },
  {
    question: "Can I customize my dietary preferences in ZeroSpoil?",
    answer:
      "Absolutely! ZeroSpoil allows you to customize your dietary preferences, ensuring that recipe suggestions align with your specific tastes and requirements.",
  },
  {
    question: "How does the surplus food donation feature work?",
    answer:
      "ZeroSpoil connects users with local charities through a donation matching system. Users can post surplus food, and the app facilitates the process of donating to those in need.",
  },
  {
    question: "Is ZeroSpoil available on mobile devices?",
    answer:
      "Yes, ZeroSpoil is accessible on mobile devices through its user-friendly app, making it convenient for users to manage their food inventory and engage with the community on the go.",
  },
  {
    question:
      "Can I track the environmental impact of my food choices with ZeroSpoil?",
    answer:
      "Yes, ZeroSpoil aims to promote eco-conscious living. While using the app, users can track the environmental impact of their food choices, encouraging mindful and sustainable consumption.",
  },
  {
    question: "How can I get involved in the ZeroSpoil community?",
    answer:
      "Joining the ZeroSpoil community is easy! Share your favorite recipes, engage in cooking challenges, and contribute to the platform's positive impact by connecting with fellow users passionate about sustainable living.",
  },
];

const FAQ = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <div className="my-12 bg-stone-50 rounded-3xl ">
          <div className="py-4 pt-10 flex flex-col gap-8 justify-center items-center text-center">
            <h1 className="text-5xl tracking-wide font-bold text-indigo-700">
              Frequently Asked Questions
            </h1>
            <p className="w-2/3 text-gray-500">
              Explore answers to common queries about ZeroSpoil, your go-to app
              for reducing food waste and embracing sustainable living. Discover
              how to make the most of intelligent inventory management,
              community recipe sharing, and surplus food donations. Get started
              on your journey to mindful cooking and a greener lifestyle with
              ZeroSpoil.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 px-8 gap-4 mt-3 justify-center align-center items-center">
            <Accordion type="single" collapsible className="w-full px-10 my-16">
              {faqs.map(({ question, answer }, index) => {
                return (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-base font-bold text-black tracking-wide">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 text-sm ">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            <div className="bg-cover">
              <img src={faqImage} alt="donation of food image"  className="aspect-ratio p-8"/>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default FAQ;
