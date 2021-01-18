import React, { Component } from 'react'

interface IProps {
  word: string
}

export default class SlideWords extends Component<IProps> {
  createString(word: string) {
    let wordArr = word.split('')
    return wordArr.map((letter) => <span className='letter'>{letter}</span>)
  }

  render() {
    return this.createString(this.props.word)
  }
}
