import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SkillCard from "./SkillCard";
import SectionHeading from "./SectionHeading";


const Skills = () => {

    const languages = [
        {
            imgSource: `c_logo.svg`,
            imgDesc: `C`
        },
        {
            imgSource: `java_logo.svg`,
            imgDesc: `Java`
        },
        {
            imgSource: `cobol_logo.svg`,
            imgDesc: `COBOL`
        },
        {
            imgSource: `mysql_logo.svg`,
            imgDesc: `MySql`
        },
    ];

    const webTech = [
        {
            imgSource: `html5_logo.svg`,
            imgDesc: `HTML`
        },
        {
            imgSource: `css_logo.svg`,
            imgDesc: `CSS`
        },
        {
            imgSource: `javascript_logo.svg`,
            imgDesc: `JavaScript`
        },
        {
            imgSource: `nodejs_logo.svg`,
            imgDesc: `Node.js`
        },
        {
            imgSource: `react_logo.svg`,
            imgDesc: `React`
        },
        {
            imgSource: `expressjs_logo.svg`,
            imgDesc: `Express.js`
        },
        {
            imgSource: `bootstrap_logo.svg`,
            imgDesc: `Bootstrap`
        }
    ];

    const otherTech = [
        {
            imgSource: `data_structures_logo.svg`,
            imgDesc: `Data Structures & Algorithms`
        },
        {
            imgSource: `git_logo.svg`,
            imgDesc: `Git`
        },
        {
            imgSource: `github_logo.svg`,
            imgDesc: `Github`
        },
        {
            imgSource: `heroku_logo.svg`,
            imgDesc: `Heroku`
        },
        {
            imgSource: `android_logo.svg`,
            imgDesc: `Android Development`
        },
        {
            imgSource: `npm_logo.svg`,
            imgDesc: `Npm`
        },
        {
            imgSource: `math_logo.svg`,
            imgDesc: `Mathematics`
        }
    ];

    const softSkills = [
        {
            imgSource: `leadership_logo.svg`,
            imgDesc: `Leadership`
        },
        {
            imgSource: `thinking_logo.svg`,
            imgDesc: `Critical Thinkinig`
        },
        {
            imgSource: `dedication_logo.svg`,
            imgDesc: `Hard Work & Dedication`
        },
        {
            imgSource: `teamwork_logo.svg`,
            imgDesc: `Team Work`
        },
        {
            imgSource: `positive_logo.svg`,
            imgDesc: `Confidence & Positive Attitude`
        }
    ];


    return (
        <Fragment>
            <SectionHeading
                sectionName="SKILLS"
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
        </Fragment>

    );
}

export default Skills;