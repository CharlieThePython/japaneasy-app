import KanjiComponent from '@/src/components/KanjiComponent/KanjiComponent'
import React from 'react'

import japaneasyIcon from '@/src/images/japanese_flag.png'

export const metadata = {
  title: 'Japaneasy - Kanji',
  description: 'Created by JapaneasyTeam',
  icons: japaneasyIcon.src
}

function Kanji() {
  return (
    <KanjiComponent />
  )
}

export default Kanji