import React from 'react'
import { HeroSection } from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import { Qoute } from "../components/Qoute";
import { TopChefs } from "../components/TopChefs";

const Home = () => {
  return (
    <>
        <HeroSection/>
        <ImproveSkills/>
        <Qoute/>
        <TopChefs/>
    </>
  )
}

export default Home