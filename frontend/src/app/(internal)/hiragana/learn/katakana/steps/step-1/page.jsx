
import japaneasyIcon from '@/src/images/japanese_flag.png'
import LearnKatakanaStep1 from '@/src/components/Steps/KatakanaSteps/LearnKatakanaStep1'

export const metadata = {
  title: 'Japaneasy - Learn Katakana: Step 1',
  description: 'Created by JapaneasyTeam',
  icons: japaneasyIcon.src
}

function Step1() {
  return (
    <LearnKatakanaStep1 />
  )
}

export default Step1