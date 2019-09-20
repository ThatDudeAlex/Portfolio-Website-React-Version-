import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SkillCard from "./SkillCard";
import SectionHeading from "./SectionHeading";


const Skills = ({id}) => {

    const languages = [
        {
            imgSource: `c_logo.svg`,
            imgDesc: `C`,
            lg: `3`
        },
        {
            imgSource: `java_logo.svg`,
            imgDesc: `Java`,
            lg: `3`
        },
        {
            imgSource: `cobol_logo.svg`,
            imgDesc: `COBOL`,
            lg: `3`
        },
        {
            imgSource: `mysql_logo.svg`,
            imgDesc: `MySql`,
            lg: `3`
        },
    ];

    const webTech = [
        {
            imgSource: `html5_logo.svg`,
            imgDesc: `HTML`,
            lg: `3`
        },
        {
            imgSource: `css_logo.svg`,
            imgDesc: `CSS`,
            lg: `3`
        },
        {
            imgSource: `javascript_logo.svg`,
            imgDesc: `JavaScript`,
            lg: `3`
        },
        {
            imgSource: `nodejs_logo.svg`,
            imgDesc: `Node.js`,
            lg: `3`
        },
        {
            imgSource: `react_logo.svg`,
            imgDesc: `React`,
            lg: `3`
        },
        {
            imgSource: `expressjs_logo.svg`,
            imgDesc: `Express.js`,
            lg: `3`
        },
        {
            imgSource: `bootstrap_logo.svg`,
            imgDesc: `Bootstrap`,
            lg: `3`
        }
    ];

    const otherTech = [
        {
            imgSource: `data_structures_logo.svg`,
            imgDesc: `Data Structures & Algorithms`,
            lg: `3`
        },
        {
            imgSource: `git_logo.svg`,
            imgDesc: `Git`,
            lg: `3`
        },
        {
            imgSource: `github_logo.svg`,
            imgDesc: `Github`,
            lg: `3`
        },
        {
            imgSource: `heroku_logo.svg`,
            imgDesc: `Heroku`,
            lg: `3`
        },
        {
            imgSource: `android_logo.svg`,
            imgDesc: `Android Development`,
            lg: `3`
        },
        {
            imgSource: `npm_logo.svg`,
            imgDesc: `Npm`,
            lg: `3`
        },
        {
            imgSource: `math_logo.svg`,
            imgDesc: `Mathematics`,
            lg: `3`
        }
    ];

    const softSkills = [
        {
            imgSource: `leadership_logo.svg`,
            imgDesc: `Leadership`,
            lg: `2`
        },
        {
            imgSource: `thinking_logo.svg`,
            imgDesc: `Critical Thinkinig`,
            lg: `2`
        },
        {
            imgSource: `dedication_logo.svg`,
            imgDesc: `Hard Work & Dedication`,
            lg: `2`
        },
        {
            imgSource: `teamwork_logo.svg`,
            imgDesc: `Team Work`,
            lg: `2`
        },
        {
            imgSource: `positive_logo.svg`,
            imgDesc: `Confidence & Positive Attitude`,
            lg: `2`
        }
    ];


    return (
        <div id={id}>
            <SectionHeading
                sectionName="SKILLS"
                headingColor = "black"
            />
            <SkillCard
                cardTitle="Languages & Databases"
                images={languages}
            />
            <SkillCard
                cardTitle="Web Technologies"
                images={webTech}
            />
            <SkillCard
                cardTitle="Other Technical Skills"
                images={otherTech}
            />
            <SkillCard
                cardTitle="Soft Skills"
                images={softSkills}
            />
        </div>

    );
}

export default Skills;