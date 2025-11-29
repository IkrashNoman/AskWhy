import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import OpeningModal from "@/components/OpeningModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addTopic, removeTopic } from "../store/topicsSlice";

import { motion } from "framer-motion";
import ModuleHeader from "@/components/ModuleHeader";
import ClosingModal from "@/components/ClosingModal";

interface Topic {
  id: number;
  category: string;
  title: string;
  voted: "interested" | "not-interested" | null;
}

const Interest = () => {
  const [searchParams] = useSearchParams();
  const moduleId = searchParams.get("id") || "M1";

  const [isComplete, setIsComplete] = useState(false);

  const [topics, setTopics] = useState<Topic[]>([
    { id: 0, category: "Entertainment", title: "Blake Lively 'It Ends With Us' Controversy", voted: null },
    { id: 1, category: "Pop Culture", title: "Gen z Vs Millennial's mental health", voted: null },
    { id: 2, category: "Health", title: "Barbie Movie Oscar Nominations", voted: null },
    { id: 3, category: "Education", title: "ChatGPT’s Ghibli Art Trend", voted: null },
    { id: 4, category: "Politics", title: "AI & Job Displacement", voted: null },
    { id: 5, category: "Sports", title: "Covid-19 Vaccine & Billgate’s Predictions", voted: null },
    { id: 6, category: "Technology", title: "Simpson’s Predictions of the real world ", voted: null },
    { id: 7, category: "Pop Culture", title: "Space Technology: 31/Atlas", voted: null },
    { id: 8, category: "Lifestyle", title: "College Degrees: Yes or No?", voted: null },
    { id: 9, category: "Law & Order", title: "Karachi’s E-Challan System", voted: null },
    { id: 10, category: "Space", title: "Netflix Original: The social Dilemma", voted: null },
    { id: 11, category: "Music", title: "Taylor Swift’s new album controversy", voted: null },
  ]);

  const dispatch = useDispatch<AppDispatch>();
  const topic = useSelector((state: RootState) => state.topics.topics);
  const score = useSelector((state: RootState) => state.topics.score);
  const selectedCount = topics.filter((t) => t.voted === "interested").length;

  const handleVote = (id: number, vote: "interested" | "not-interested", title: string) => {
    if (vote === "interested") dispatch(addTopic(id));
    else if (vote === "not-interested") dispatch(removeTopic(id));

    setTopics((prev) => {
      const updated = prev.map((topic) =>
        topic.id === id ? { ...topic, voted: vote } : topic
      );
      if (updated.filter((t) => t.voted === "interested").length >= 7) {
        setTimeout(() => setIsComplete(true), 500);
      }
      return updated;
    });
  };

  const [showIntroModal, setShowIntroModal] = useState(true);
  const [done, setDone] = useState(false);

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <ClosingModal
          module={1}
          text={"7/7 Score interests narrowed!"}
          src={"/exercise"}
          ending={"GOOOD JOB! We’ll start calculating from the next module...."}
          score={score}
        />
      </motion.div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 flex justify-center w-full">
      <div className="w-full max-w-10xl h-[90vh] overflow-auto py-4 sm:py-6 md:py-8 rounded-3xl bg-[#F8F1E7]">
        <OpeningModal
          phase="I"
          module="Module 1: Find your vibe"
          description="In this module, students will filter out content for themselves. From a pool of 50 topics, they are supposed to narrow down 15 by simply clicking on the of ‘Interested’ & ‘Not Interested’ buttons. These picks will shape their personalized explore feed for the next module."
          time="2:00"
          calculated="not"
          level="Beginner"
          src={"/opening11.svg"}
          showIntroModal={showIntroModal}
          moduleId={moduleId}
          setShowIntroModal={setShowIntroModal}
        />

        <div className={`px-4 sm:px-6 md:px-8 lg:px-16 transition-all duration-300 ${showIntroModal ? "blur-sm pointer-events-none" : ""}`}>
          <ModuleHeader
            polarizationScore={score}
            setDone={setDone}
            module={1}
            src={"/opening11.svg"}
            heading={"Find your Vibe"}
            description="Let’s help you build a feed!"
            time={60}
            left={7 - selectedCount}
          />

          <div className="mb-6">
            <h1 className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-black">
              Click to narrow down your interests
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-9">
  {topics.map((topic) => (
    <Card
      key={topic.id}
      className="flex flex-col items-center justify-between px-18 py-4 sm:p-5 md:p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
    >
      <div className="mb-2">
        <span
          className="inline-block px-3 py-1 text-xs sm:text-sm font-normal rounded-full uppercase tracking-wider"
          style={{ backgroundColor: "#DFD3E5", color: "#32302E" }}
        >
          {topic.category}
        </span>
      </div>

      <h3 className="font-semibold text-base sm:text-lg md:text-xl leading-snug text-center my-3 flex-grow flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis">
        {topic.title}
      </h3>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-3">
       <Button
  size="sm"
  onClick={() => handleVote(topic.id, "interested", topic.title)}
  className={`
    font-medium text-xs sm:text-sm md:text-base 
    px-4 py-2 transition-all duration-300 
    flex items-center justify-center gap-2
    ${
      topic.voted === "interested"
        ? "bg-[#D0193E] text-white w-[350px]"   
        : "bg-[#F1F5F9] text-[#4C1C62] w-[120px]"
    }
  `}
>
  {topic.voted !== "interested" ? (
    <img src="/love.svg" className="w-4 h-4" alt="Love Icon" />
  ) : (
    <img src="/whitelove.svg" className="w-4 h-4" alt="White Love Icon" />
  )}
  Interested
</Button>

      </div>
    </Card>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Interest;
