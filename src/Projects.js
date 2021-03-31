import React from 'react'
import mklogo from './img/mk.jpg'
import * as R from 'ramda'
import { FaGithub, FaAndroid, FaApple, FaDownload, FaPlay, FaGlobe } from 'react-icons/fa';
import {ButtonGroup, Button, Badge } from 'react-bootstrap'

const ProjectInstance = (title, description, imgurl, links, tags, key) => {
    const projectIconSize = 16
    const buttons = {
      github: <FaGithub size={projectIconSize} />,
      try: <FaPlay size={projectIconSize} />,
      download: <FaDownload size={projectIconSize} />,
      android: <FaAndroid size={projectIconSize} />,
      website: <FaGlobe size={projectIconSize} />,
      apple: <FaApple size={projectIconSize} />

    }
    return (
      <div key={key} className="row project-row">
        <div className="col-xs-6 project-col">
          <div className="project-image">
            <img alt="" style={{ width: 100, borderRadius: 10 }} src={imgurl} />
          </div>
        </div>
        <div className="col project-col">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
          {
            R.compose(
              R.map(([index, tag]) => {
                return <Badge key={index} variant="secondary">{tag}</Badge>
              }),
              R.toPairs,
            )(tags)
          }
          <div style={{ float: "right" }}>
            <ButtonGroup toggle className="mb-2">
              {
                R.compose(
                  R.map(([index, link]) => {
                    return <Button
                      key={index}
                      variant="dark"
                      href={link}
                      target="_blank"
                    >{R.prop(index, buttons)}</Button>
                  }),
                  R.toPairs,
                )(links)
              }
            </ButtonGroup>
          </div>
        </div>
      </div>
    )
  }

  const projects = [
    {
      title: "easy-socket",
      description: "Modern C++ 11 native, OS agnostic, socket library/starter code with a single header include",
      img: mklogo,
      links: {
        github: "https://github.com/masesk/easy-socket"
      },
      tags: [
        "C++",
        "Library"
      ]

    },
    {
      title: "verification_sms",
      description: "Verification SMS sent from Google Voice account to a given phone number. Useful for unique user account creation and/or 2FA.",
      img: mklogo,
      links: {
        github: "https://github.com/masesk/verification_sms"
      },
      tags: [
        "Python",
        "Flask",
        "Library"
      ]

    },
    {
      title: "webapp-interface-manager",
      description: "React application to mange and display multiple web pages and/or React components in their own window on a single browser tab",
      img: "https://raw.githubusercontent.com/masesk/webapp-interface-manager/master/public/logo192.png",
      links: {
        try: "https://masesk.github.io/webapp-interface-manager/",
        github: "https://github.com/masesk/webapp-interface-manager",
      },
      tags: [
        "JavaScript",
        "ReactJS",
        "Library"
      ]

    },
    {
      title: "process-google-dataset",
      description: "Tool to download and process images for neural networks from a Google Image Search using a Chrome extension and a simple Python code.",
      img: mklogo,
      links: {
        github: "https://github.com/masesk/process-google-dataset",
      },
      tags: [
        "JavaScript",
        "Extension"
      ]

    },
    {
      title: "Road Trivia",
      description: "Hands-free allows you to answer trivia questions while driving your car or operating a vehicle. Simply listen to the question and select your option using only your voice.",
      img: "https://play-lh.googleusercontent.com/2XOLpo7_C0_2hYgHYYwWSfkj-VoQgNFkW8Q6L1Wj7FuJ4Q5thVlfywAp1YCJ7uiEKg=s180-rw",
      links: {
        android: "https://play.google.com/store/apps/details?id=com.masesk.roadtrivia",
        website: "http://roadtrivia.com/"
      },
      tags: [
        "Java",
        "Android",
        "ML/AI",
        "Game"
      ]

    },
    {
      title: "Kalkulator",
      description: "All-in-one, super light, fast, and powerful calculator",
      img: "https://play-lh.googleusercontent.com/HxvTCxu3NleidfDa6FdBAxyiGjEZaahQNdwOmciLQ85Ffdk3PJD7MT2qg9CE88h8O20W=s180-rw",
      links: {
        android: "https://play.google.com/store/apps/details?id=com.masesk.kalkulator"
      },
      tags: [
        "Java",
        "Android"
      ]

    },
    {
      title: "sync-rec-ui/api",
      description: "Flask API for object recognition server using OpenCV and YOLOv3 and React Native UI to serve it to any mobile device.",
      img: mklogo,
      links: {
        try: "https://github.com/masesk/sync-rec-ui",
        github: "https://github.com/masesk/sync-rec-api",
      },
      tags: [
        "Python",
        "JavaScript",
        "AI/ML",
        "React Native",
      ]

    },
    {
      title: "yt-continue",
      description: "Chrome extension that bypasses when YouTube asks 'Continue Watching?' as well as play, pause, and skip a video with voice commands.",
      img: "https://raw.githubusercontent.com/masesk/yt-continue/main/logo.png",
      links: {
        github: "https://github.com/masesk/yt-continue",
      },
      tags: [
        "JavaScript",
        "Extension",
        "AI"
      ]

    },
    {
      title: "offline-pkg-utility",
      description: "Utility tool to download packages and setup a package manager server for an offline environment",
      img: mklogo,
      links: {
        github: "https://github.com/masesk/offline-pkg-utility/",
      },
      tags: [
        "Python"
      ]

    },
    {
      title: "easyandroidgraph",
      description: "A library that simplifies drawing shapes and bitmaps to a single component and utility methods to draw each one.",
      img: mklogo,
      links: {
        github: "https://github.com/masesk/easyandroidgraph"
      },
      tags: [
        "Java",
        "Android",
        "Library"
      ]

    },
    {
      title: "react-gdrive-image-viewer",
      description: "A library that uses Google Drive as a storage to display images on a webpage.",
      img: mklogo,
      links: {
        github: "https://github.com/masesk/react-gdrive-image-viewer"
      },
      tags: [
        "JavaScript",
        "ReactJS",
        "Library"
      ]

    },
    {
      title: "Windows 8/10 Product Key Finder",
      description: "This program runs a line of code that checks the product key for Windows 8 and 10 operating systems that were installed on the motherboard by the manufacturer.",
      img: mklogo,
      links: {
        download: "http://masesk.com/files/win_8_10_keyfinder.zip"
      },
      tags: [
        "C++"
      ]

    },

  ]


  const Projects = () => {
    return <>
      {
        R.compose(
          R.map(([index, project]) => {
            const title = R.prop("title", project)
            const description = R.prop("description", project)
            const img = R.prop("img", project)
            const links = R.prop("links", project)
            const tags = R.prop("tags", project)
            return ProjectInstance(title, description, img, links, tags, index)
          }),
          R.toPairs,
        )(projects)
      }
    </>
  }

export default Projects