import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import nglogo from './img/ng.jpg'
import cpplogo from './img/cpp.jpg'
import mslogo from './img/ms.jpg'
const Experience = () => {
    return (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="March 2020 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img alt="" style={{ width: "inherit", borderRadius: "50%" }} width={50} src={nglogo} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Northrop Grumman Corporation, Los Angeles, CA</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2019 - March 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img alt="" style={{ width: "inherit", borderRadius: "50%" }} width={50} src={mslogo} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer II</h3>
            <h4 className="vertical-timeline-element-subtitle">Moebius Solutions, San Diego, CA</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016-2019"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<img alt="" style={{ width: "inherit", borderRadius: "50%" }} width={50} src={cpplogo} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Sciene</h3>
            <h4 className="vertical-timeline-element-subtitle">Cal Poly Pomona</h4>
            <p>
              3.72 GPA
      </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: '#2a2a2a', color: '#fff' }}
            icon={<img alt="" src="" />}
          />
        </VerticalTimeline>
      )
}


export default Experience;