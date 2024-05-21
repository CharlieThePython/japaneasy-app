import VocabularyComponent from '@/src/components/VocabularyComponent/VocabularyComponent'
import VocabularyLessonComponent from '@/src/components/VocabularyLessonComponent/VocabularyLessonComponent'
import React from 'react'

import japaneasyIcon from '@/src/images/japanese_flag.png'

export const metadata = {
  title: `Japaneasy - Vocabulary Lesson`,
  description: 'Created by JapaneasyTeam',
  icons: japaneasyIcon.src
}
function VocabularyLesson({params}) {
  return (
    <VocabularyLessonComponent name={params.lesson}/>
  )
}

export default VocabularyLesson