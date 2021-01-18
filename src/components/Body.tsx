import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import Paragraph from './Paragraph'

export default class Body extends Component {
  render() {
    return (
      <div className='body'>
        <Typography className='title' variant='h2'>
          Nathaniel's Mini Bio
        </Typography>
        <Paragraph>
          This website was built from scratch none of it is built from another 3rd party site like
          WordPress, nor square space, as I personally hate working with those websites as they can
          get very messy.
        </Paragraph>
        <Paragraph>
          To Start off I’m a Computer Programmer who grew up in Lehi Utah, but I moved around a lot
          and didn’t really stay in one place for very long. But as of currently I live in eagle
          mountain, Utah, and go to work in Lehi. I’m 1 of 6 kids in my family and the oldest, the
          family is split up of 4 boys and 2 girls, although my family seems big, my mom and dad
          divorced when I was a kid, and so I only really went to see my brothers and sisters here
          and there, I mostly lived alone with my mom.
        </Paragraph>
        <Paragraph>
          I’m currently going to UVU for a bachelor’s in computer science, specifically focusing on
          full-stack development, which this meaning I get to know how to do all sides of
          programming, not just one. This is was not my original goal as I did actually want to go
          to college, I actually went to a coding Bootcamp called Bottega to learn how to program,
          and they taught me a bunch of languages, but the main languages, I use today is React.js,
          Javascript, CSS, SCSS, HTML, Node.js, Python, and a bunch more. The main thing I loved
          about the bootcamp is they didn’t just teach me the languages and moved on but now I can
          go out and teach myself about other languages out there.
        </Paragraph>
        <Paragraph>
          As I progressed along in my new career I hit a few blocks stopping me from progressing
          this being the main of “we won’t hire you unless you have a degree” stuff and this does
          make me upset that people do this with computer programmers, but it can make sense
          depending on the company, a lot of companies like Google, Microsoft, are all not requiring
          degrees anymore, but even with that I feel its best to go and get this degree and I can
          pick up some new skill sets along the way. So after college, I plan to just continue my
          career as a full-stack/frontend developer and gain more experience in this career.
        </Paragraph>
        <Paragraph>
          So with stuff, I currently do while going to school is do my day job which I’m a frontend
          developer at a company called Rovitracker inc. We are a GPS company that monitors company
          assets, and I essentially handle everything the users touch on the platform. The other
          things I do in my free time is playing video games for sure, you have to have fun, but I
          also find programming my own projects at the same time is a huge factor in my life and I
          also find the enjoyment in creating things, it was one of the major things to drive to
          make this website for this mini biography. Also a reason for how long it took to make.
        </Paragraph>
        <Paragraph>
          What makes me unique is I’m a developer, not everyone is a developer and I find it cool to
          say that. With that, I also see myself as a writer and an artist as what I write literally
          creates and brings art to life, and as a bonus makes life easier for us all. Composition
          means to me is how I can take things around me, and other creations I’ve created to go and
          create a much larger and in some sense a better creation. Being in this course, I hope it
          will help me structure how I write things not so much in essay formats but in how do I
          take from my small projects and build a more advanced project or refined project.
        </Paragraph>
      </div>
    )
  }
}
