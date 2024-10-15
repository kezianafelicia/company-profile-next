"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import ITeams from "@/view/components/iteams";
import Cards from "@/view/components/card";

export default function Teams() {
  const [teams, setTeams] = useState<ITeams[]>([]);

  const getTeams = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=6");
      setTeams(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);


  const positions = [
    {
      position: "Floor Cleaner",
      descriptions: "Expert in using cleaning machines and maintaining large floor areas"
    },
    {
      position: "Window Cleaner",
      descriptions: "Skilled at cleaning high-rise windows and hard-to-reach places"
    },
    {
      position: "Carpet Cleaner",
      descriptions: "Specialist in removing stains and dirt from various types of carpets"
    },
    {
      position: "Sanitization Specialist",
      descriptions: "Ensures places are sanitized and maintains high hygiene standards"
    },
    {
      position: "Office Cleaner",
      descriptions: "Responsible for maintaining a clean and organized office environment"
    },
    {
      position: "Restroom Cleaner",
      descriptions: "Expert in maintaining cleanliness and hygiene in restrooms"
    }
  ];

  return (
    <div className="py-8 px-4">
      <div className="text-center max-w-4xl mx-auto py-12">
        <h2 className="text-5xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-xl py-6 text-gray-800">
          Our team is the heart of our company. At Cleanex, we believe that the
          strength of our service comes from the people behind it. Every team
          member is carefully selected, fully trained, and shares our commitment
          to providing outstanding service. Here are a few key members of our
          exceptional team:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto w-full py-4 text-[#493628]">
        {teams?.map((team, index) => (
          <Cards
            key={index}
            imageUrl={team.picture.large}
            title={`${team.name.first} ${team.name.last} - ${positions[index].position}`}
            description={[`Email: ${team.email}`, `Phone: ${team.phone}`, `${positions[index].descriptions}`]}
          />
        ))}
      </div>
    </div>
  );
}
