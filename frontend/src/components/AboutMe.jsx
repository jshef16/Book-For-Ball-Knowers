import DarkVeil from "./Background";

import meImg from '../assets/me.jpg';
import logo from '../assets/logo_light.png';

import '../style/AboutMe.css';
import '../style/Home.css';

import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="about-me-container">
        <section className="veil-section-top">
            <DarkVeil />
            <Link to="/">
                <img src={logo} alt="Books for Ball Knowers" className='logo-light'/>
            </Link>
            <p className="welcome">H E L L O  &  W E L C O M E</p>
            <div className="intro">
                <img src={meImg} alt="Me reading a book" className='me-img'/>
                <div className="intro-text">
                    <p style={{fontSize:"5rem", margin:0}}>I'm Jordan</p>
                    <p>It goes without saying that I'm a bibliophile and a sports fanatic. If you somehow got here without knowing that, kudos to you. It's not often that I'm not reading or watching a game, but when that does occur, I'm outside getting active. I love hiking in the summer and skiing in the winter.</p>
                </div>
            </div>
        </section>
        <div className="essay">
            <h1 className="essay-title">An Open Letter to Myself</h1>
            <p className="essay-text">Our school system has ruined reading. There, I said it. Someone had to. The fundamental idea behind comprehending words on a page is not just to teach lessons. That is, of course, an extremely important part, however not the only part. By believing in this idea, that reading is strictly educational, I fear that we have quite literally lost the plot. We are missing what got us into reading. What keeps us reaching for new books. What stokes our flame.</p>
            <p className="essay-text">Enjoyment.</p>
            <p className="essay-text">Allow me - for just a moment - to turn the clock back nearly two decades. A young boy opens his eyes at six o’clock in the morning. A boy who knows only Eggo waffles, Hot Wheels, and the Magic Tree House. The boy could go back to sleep. He doesn’t need to be awake for a couple more hours. The boy could go play with his toys. His parents aren’t awake yet to tell him no. He could creep quietly into the kitchen, eat heaping spoonfuls of ice cream directly out of the carton as fast as he could, carefully replace it, and scurry back to bed, blissfully believing that nobody would be the wiser. These are all options that this young boy could consider. And yet, as enticing as each one sounds, he chooses none of the above. He doesn’t give any of them as much as a second thought. Why? It’s simple. </p>
            <p className="essay-text">The night previous, he fell asleep in the middle of an exhilarating chapter of a chapter book. His first chapter book! The light over the boy’s bed stayed shining into uncharted hours of the night and the boy was effortlessly swept away into a world so different from his own. Despite the heavy eyelids he knows he will feel later in the day, sitting at his lift-top desk, listening to his teacher sing the cursive song, he sits bolt upright. He simply cannot resist the temptations of the fictional small town of Frog Creek and its magic treehouse. It’s the start of something new for the boy. Something that he has only recently gained access to, but something he hopes to never give up. A chapter book. In his eyes, an adult book. He finds his book mark, thinks <i>I’m reading a book that needs a book mark!</i> And meets back up with his newfound friends, Jack and Annie Smith. </p>
            <p className="essay-text">I’m sure, by now, you can tell that this boy is me. I’ve come a long way since the Magic Tree House, but it was not without its challenges. Being forced to read books that I did not want to read extinguished my passion for reading. I was the kid who begged to read more. My insatiable hunger for new stories and other worlds led me to be more emotionally entwined in fictional novels than anything else I can remember. I cried at the end of <i>Harry Potter</i> because I felt that Harry and I had become friends at Hogwarts. I cried at the end of <i>Flat Stanley</i>, overwhelmed with joy that Stanley figured out how to embrace his new, unforeseen circumstances for the better. For god’s sake, I cried at the end of <i>Oggie Cooter</i>. I mean shit, it’s about a fourth grader who accidentally becomes famous beyond his wildest dreams by “charving” (for those of you who this is too deep of a cut for, that’s carving intricate shapes into Kraft singles with your teeth). </p>
            <p className="essay-text">But somewhere along the line, something changed. Little by little, reading became a chore. As students, we lost our privilege to choose what we wanted to read. We were force fed content that someone else decided would be beneficial to our academic development. Content with underlying narratives that some administrator deemed important. I’m sure there were beneficial takeaways from most of these books, and I don’t want to sound like some ungrateful fool, but in having our books chosen for us, I felt I had lost something that brought me great joy. </p>
            <p className="essay-text">I could no longer read just to read.</p>
            <p className="essay-text">By the beginning of high school, I could no longer remember the last time I had read a book that I chose on my own volition, simply because that’s what I wanted to do. Every piece of literature we consumed had to be strongly analyzed, our thoughts and feelings put into organized book reports. With other commitments taking precedence in my list of priorities as I grew up, reading for pleasure continued falling down that list. Throughout college, it got even worse. Sure, as a computer science major, I was no longer responsible for producing book reports, but all of the reading assigned became even more academic. Articles, studies, reports. But no books. I spent four years at the University of Michigan, and by the time I graduated, not a single professor had encouraged me to pick up a book. It had been almost a decade since I read a book that I wanted to read, no strings attached. And the worst part, it had been so long that I no longer felt that anything was missing. It was the new norm. </p>
            <p className="essay-text">And one day, with one sentence, everything changed. A conversation with an old friend reignited a smoldering ember so deep inside me that even I was unaware of its existence. A conversation that placed a borrowed copy of Brandon Sanderson’s <i>Mistborn</i> into my possession with the only preface being that he was our generation’s Tolkien. It was Labor Day, and I took the book with the promise to return it by Thanksgiving. That seemed like enough time to get through several hundred pages. Besides, in my own words, “I’m not much of a reader anymore.” </p>
            <p className="essay-text">I can remember where I was sitting when I opened the prologue. I recall the way the lamplight washed over the page, seemingly making the letters shimmer.  I can feel the way my heart beat as a buried part of my soul shook off years of dust and was found again. I did not need until thanksgiving to finish <i>Mistborn</i>. In fact, I only needed 2 days. With the completion of one book, a hunger inside me started rumbling for more. My love for reading has been born again, and thus the conception of this site. Welcome to Books For Ball Knowers. </p>
            <p className="essay-text">This page is for those who are like me. Who have lost something they love, but are desperately in search of finding it once more. This page is for sports lovers. For those who don’t think reading is for them, but who follow a world intertwined with so many parallels. And this page is for those who are lucky enough to have found a hobby as old as time, and who were aware enough to keep it close as time moved on around them. Together, we will read to learn. We will read to expand. To improve. To grow. But above all, we will read for one thing. </p>
            <p className="essay-text">We read to enjoy. </p>
        </div>
    </div>
  );
};

export default AboutMe;