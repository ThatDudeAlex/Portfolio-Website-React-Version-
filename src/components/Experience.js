import React, { Fragment } from 'react';
import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {

    const fisJobDec = [
        {desc: `Developed multiple programs in COBOL, using in-house files to locate bank accounts and calculate their future balance 
                after interest, generat interest reports showing a monthly interest breakdown, as well as generating personalize 
                notification letters for each inactive bank account on record`},
        {desc: `Participated in weekly learning sessions, where each week a different executive within the company was the guest speaker`},
        {desc: `Collaborated in a group of 20 interns, most of whom were located in Milwaukee, to complete a 7 week long project`},
        {desc: `Attended multiple scrum meetings to observe and learn from an agile development team`}
    ];

    const fisAccomplishments = [
        {desc: `I was the only intern within my development group to be able to complete all 4
                of the COBOL programs assigned to us`},
        {desc: `Out of a class of 17 interns, I was voted as "The Most Inquisitive" by my peers`},
        {desc: `Self-taught myself COBOL by completing an entire training course 1 week ahead of schedule`},
        {desc: `Received a score of 90% or above in all 7 COBOL assessment test, each one consisting of 80 questions on average`}
    ]

    const valenciaJobDec = [
        {desc: `Provide supplemental math tutoring, in subjects such as algebra, calculus, and 
                differential equations to students`},
        {desc: `Host learning seminars that focus on 1 specific math related topics at a time`}
    ];

    const valenciaAccomplishments = [
        {desc: `Promoted from Learning Assistant I to Learning Assistant
                II`},
        {desc: `CRLA certification`}
    ]

    return (
        <Fragment>
            <SectionHeading
                sectionName="Experience"
                headingColor = "black"
            />
            <ExperienceCard 
                companyLogo="/images/experience/FIS_Logo.svg"
                altLogo="FIS logo"
                companyUrl="https://fisglobal.com"
                companyName="FIS Global"
                jobTitle="Software Engineer Intern"
                companyDesc= {`A fortune 500 company, and an international provider of financial service
                             technology, and outsourcing services`}
                jobDesc = {fisJobDec}
                companyLg = "6"
                jobRoleLg = "4"
                companyMd = "3"
                jobRoleMd = "6"
                id = "fisLogo"
                accomplishments = {fisAccomplishments}
                date = {`Jun 2019 - Aug 2019 | Orlando, Fl`}
            />
            <ExperienceCard className="text-center pt-3"
                companyLogo="/images/experience/Valencia_Logo.svg"
                altLogo="Valencia logo"
                companyUrl="https://valenciacollege.edu/"
                companyName="Valencia College"
                jobTitle="Math Tutor"
                companyDesc= {`A public state college, located in Orlando, Florida`}
                jobDesc = {valenciaJobDec}
                companyLg = "6"
                jobRoleLg = "4"
                companyMd = "5"
                jobRoleMd = "4"
                id = "valLogo"
                accomplishments = {valenciaAccomplishments}
                date = {`Jan 2017 - Present | Orlando, Fl`}
            />
        </Fragment>
    );
}

export default Experience;