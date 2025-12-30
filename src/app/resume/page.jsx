import Header from "@/components/layout/Header";
import { resumeData } from "@/Data/resumeData";
import { HiOutlineBookOpen } from "react-icons/hi2";


export default function Resume() {
    return (
        <div>
            <Header />
            <article className="resume active" data-page="resume">
                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>

                {/* EDUCATION */}
                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                        <HiOutlineBookOpen />
                        </div>
                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list">
                        {resumeData.education.map((item, index) => (
                            <li className="timeline-item" key={index}>
                                <h4 className="h4 timeline-item-title">{item.title}</h4>
                                <span>{item.period}</span>
                                <p className="timeline-text">{item.text}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* EXPERIENCE */}
                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box sm:">
                        <HiOutlineBookOpen />
                        </div>
                        <h3 className="h3">Experience</h3>
                    </div>

                    <ol className="timeline-list">
                        {resumeData.experience.map((item, index) => (
                            <li className="timeline-item" key={index}>
                                <h4 className="h4 timeline-item-title">{item.title}</h4>
                                <span>{item.period}</span>
                                <p className="timeline-text">{item.text}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* SKILLS */}
                <section className="skill">
                    <h3 className="h3 skills-title">My skills</h3>
                    <ul className="skills-list content-card grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resumeData.skills.map((skill, index) => (
                        <li className="skills-item" key={index}>
                        <div className="title-wrapper">
                            <h5 className="h5">{skill.name}</h5>
                            <data value={skill.value}>{skill.value}%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div
                            className="skill-progress-fill"
                            style={{ width: `${skill.value}%` }}
                            />
                        </div>
                        </li>
                    ))}
                    </ul>
                </section>
            </article>
        </div>
    );
}