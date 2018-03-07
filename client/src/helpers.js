import React from 'react'
import { Redirect } from 'react-router-dom'
import { randomBorders } from 'index/constants'
import { TweenLite } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Power2 } from 'gsap/src/uncompressed/easing/EasePack'

export const combineClasses = (...classNames) =>
  Array.from(classNames).join(' ')


export const randomInteger = (min = randomBorders.min, max = randomBorders.max) =>
  Math.floor(min + Math.random() * (max + 1 - min))

export const scrollTop = (scrollContainer = document.querySelector('html')) => () =>
  TweenLite.to(scrollContainer, 1, {scrollTo: 0, ease: Power2.easeOut})
