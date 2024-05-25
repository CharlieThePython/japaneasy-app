import LearnHiraganaStep2 from '@/src/components/Steps/HiraganaSteps/LearnHiraganaStep2'
import React from 'react'

import japaneasyIcon from '@/src/images/japanese_flag.png'

export const metadata = {
  title: 'Japaneasy - Learn Hiragana Step 2',
  description: 'Created by JapaneasyTeam',
  icons: japaneasyIcon.src
}

function Step2() {
  return (
    <LearnHiraganaStep2 />
  )
}

export default Step2