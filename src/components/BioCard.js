import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import "../css/cards.css";

const BioCard = () => {
    return (
        <div className="pb-5">
            <Card >
                <CardBody>
                    <Row>
                        <Col md="6">
                            <p className="text-bio-par">
                                I was born in the Dominican Republic and lived there for most of my childhood. My
                                interest
                                for both entrepreneurship and technology started when I was a child living there. Where
                                I
                                lived, there weren’t any big grocery stores or large restaurant chains, instead every
                                business in the area was a small business created by a member of the community. At the
                                <strong> age of 5</strong>, I decided to try and sell candies and drawings and I achieved
                                some <strong>mild success</strong>,
                                that
                                taught me that it’s possible for anyone to start a business, and so began my love for
                                entrepreneurship. Around the same age, I had my first encounter with video games and
                                instantly became fascinated by them. In wanting to create my own video game, I learned
                                about
                                what computers were and became obsessed with owning one, but unfortunately during that
                                time
                                computers were extremely expensive. At the <strong>age of nine</strong>, I was able to
                                    move to the United
                                     States and about a year later my mother was able to buy a computer. Since that day,
                                    computers and technology became such an important part of life, that I enrolled into
                                    every
                                computer-based class that I could in school. <strong>At 11</strong>, I started creating
                                video games using
                                 a
                                 program called “RPG Maker” and that led into me learning about what
                                programming was.
                            </p>
                        </Col>

                        <Col md="6">
                            <p className="text-bio-par">
                                In my pursuit of wanting to learn more, I decided to attend a technical high school
                                that
                                offered a <strong>“Business Computer Programming”</strong> program. My sophomore year of
                                high school I
                                entered the program and <strong>at 15 I officially started learning how to
                                    code</strong>. I quickly fell
                                in
                                 love with it and realized that I could leverage my technical skills with my dreams of
                                entrepreneurship. <strong>At 18</strong> I enrolled into college, majoring in
                                <strong>computer science</strong>. For the
                                next
                                couple of years my life unfortunately went down a bad road, leading to me almost losing
                                my
                                life in a horrible car accident, and having to put college on hold. At <strong>aged
                                    23</strong>, I
                                enrolled
                                back into college, with a burning desire to finish my degree. Currently I’m the project
                                manager of a senior design team of 5 members and we’re working on completing a
                                yearlong,
                                open source research project, and on track to graduate <strong>December 2019</strong>.
                                At a young age I
                                told
                                my mother that I will be successful enough to buy her a house to honor the sacrifices
                                she had to make, to be able to bring me to the United States. I wholeheartedly intend to
                                keep the promise I
                                to her,
                                and I’m determined to keep working as hard as I can until that day
                                comes.<strong> If you would like to get in touch or see my learning progress on
                                Treehouse, you can do so via the methods below </strong>
                            </p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}

export default BioCard;