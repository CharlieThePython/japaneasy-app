import Footer from '@/src/components/Global/Footer'
import Menu from '@/src/components/Global/Menu'
import VocabularyComponent from '@/src/components/VocabularyComponent/VocabularyComponent'
import React from 'react'

import '@/src/styles/Index.css'
import '@/src/styles/Menu.css'
import japaneasyIcon from '@/src/images/japanese_flag.png'

export const metadata = {
  title: 'Japaneasy - Vocabulary',
  description: 'Created by JapaneasyTeam',
  icons: japaneasyIcon.src
}

function Vocabulary() {
  return (
    <>
        <VocabularyComponent />
    </>
  )
}

export default Vocabulary