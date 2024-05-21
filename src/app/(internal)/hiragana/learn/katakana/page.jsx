import LearnKatakanaComponent from '@/src/components/LearnKatakanaComponent/LearnKatakanaComponent'
import React from 'react'

import japaneasyIcon from '@/src/images/japanese_flag.png'

export const metadata = {
  title: 'Japaneasy - Learn Katakana',
  description: 'Created by JapaneasyTeam',
  icons: japaneasyIcon.src
}
function LearnKatakana() {
  return (
    <LearnKatakanaComponent />
  )
}

export default LearnKatakana