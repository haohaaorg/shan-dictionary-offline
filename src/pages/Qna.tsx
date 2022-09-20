import React from 'react'
import { T } from '../helpers/lang'
const qna = [
  {
    question:
      'ၸုမ်း Hao Haa (ႁဝ်းႁႃး) ၼႆႉပဵၼ်ၽႂ်လၢႆလၢႆ၊ ယိူင်းဢၢၼ်းမီးၸိူင်ႉႁိုဝ်?',
    answer:
      'ၸုမ်း Hao Haa (ႁဝ်းႁႃး) ၼႆႉလုၵ်ႉတီႈ ၵူၼ်းၼုမ်ႇတႆးႁဝ်းၶႃႈ ဢၼ်ႁၵ်ႉၽႃႇသႃႇလိၵ်ႈလၢႆးတႆး လႄႈ IT တႆးသေ လႆႈၵေႃႇတင်ႈပဵၼ်မႃးၶႃႈ \n\n ယိူင်းဢၢၼ်း \n တႃႇၵူၼ်းၼုမ်ႇႁဝ်းလႅၵ်ႈလၢႆႈ ၸႅၵ်ႇၽေတၢင်းႁူႉၵၼ်\n တႃႇၽႃႇသႃႇလိၵ်ႈလၢႆးၵႂၢမ်းလၢတ်းတႆးလႄႈ IT တႆးႁဝ်းၶိုၼ်ႈယႂ်ႇလႄႈ\n တႃႇႁူႉၸၵ်းမိုတ်ႈၵိုဝ်းၸၢမ်ၸႂ်ၵၼ်'
  },
  {
    question: 'ၸုမ်းႁဝ်းႁႃးၼႆႉ တေႇမႃး မိူဝ်ႈလႂ်?',
    answer: 'တႄႇမႃး 10/2021 (ႁင်ပီ 2021)ၶႃႈ'
  },
  {
    question: 'ႁဵတ်းၸိူင်ႉႁိူဝ် လႆႈၺႃးၵၼ်?',
    answer:
      'ၸုမ်းႁဝ်းၶႃႈ လႆႈထူပ်းၺႃးၵၼ် လုၵ်ႉတီႈ Conference ၵဵဝ်ႇၵပ်း ဢၢႆႇထီႇ (ႁဵၼ်းႁူႉၼႂ်းထမ်း ၸွမ်းယၢမ်း IT ပၢၼ်မႂ်ႇ) တီႈ  LABC (LoiLem Ananda Buddha College) လွႆလႅမ်သေ ႁဝ်းၶႃႈ လႆႈတိတ်းတေႃႇၵၼ်မႃး။'
  },
  {
    question: 'လွင်ႈပဵၼ်မႃး Shan Dictionary?',
    answer:
      'လွင်းတင်းမၼ်းတႄႉ မိူဝ်ႈပူၼ်ႉမႃး သွင်၊သၢမ် ပီၼႆႉ ပပ်ႉသပ်း တႆးႁဝ်းၶႃႈ ဢၼ်ၸူႉႁွမ်တွမ်တီႈလဵဝ်ၵၼ်သေ ႁႂ်ႈၸႂ်ႉလႆႈ ၶိုၵ်ႉၶိုၵ်ႉလီၼၼ်ႉ (တူဝ်ယၢင်ႇ -  Cross platform app ) ၸိူဝ်းၼႆႉ ပႆႇယၢမ်ႈမီးမႃးၼႆၶႃႈလႄႈ Developers တႆး ႁဝ်းၶႃႈၵေႃႈ ဢွၼ်ၵၼ်ၽွမ်ႉၵၼ်သေ ၶတ်းၸႂ်ၶူင်သၢင်ႈႁဵတ်းဢွၵ်ႇမႃး ၶႃႈဢေႃႈ။'
  },
  {
    question: 'ပပ်ႉသပ်း Shan Dictionary ၼႆႉမီးၽွၼ်းလီသင်?',
    answer:
      'တႃႇၽႃႇသႃႇလိၵ်ႈလၢႆးႁဝ်းၶႃႈ ၶိုၼ်ႈယႂ်ႇမႃး\n တႃႇပဵၼ် ဢၼ် ၶွင် ၵမ်ႉထႅမ်ပၼ် ၵၢၼ်ႁဵၼ်း\n တႃႇ ႁဵတ်းႁႂ်ႈ တင်းႁူႉႁဝ်းၶႃႈ ၵႂင်ႈၶႂၢင်တိူဝ်းၼမ် မႃး'
  },
  {
    question: 'လွင်ႈယၢပ်ႇမီးသင်လၢႆလၢႆ?',
    answer:
      'ၶၢဝ်းယၢမ်းႁဝ်းၶႃႈ ဢမ်ႇမိူၼ်ၵၼ် လႄႈ တႃႇတေထူပ်းၵၼ်ၼႆႉ မၼ်းယၢပ်ႇ၊ ယဝ်ႉၵေႃႈလွင်ႈငိုၼ်းၵွင်ၵၢင်ႁဝ်းၶႃႈ'
  },
  {
    question: 'ပေႃးၶႂ်ႈၸွႆႈထႅမ်ငိုၼ်းၵွင်ၵၢင်ၼႆတေလႆႈႁဵတ်းႁိုဝ်?',
    answer:
      'တေၸွႆႈထႅမ်ငိုၼ်းလႆႈ တီႈ <a href="https://www.haohaa.com/donate" class="hover:text-blue-600" target="_blank">https://www.haohaa.com/donate</a> ၼႆႉၶႃႈ၊ တႃႇႁပ်ႉငိုၼ်း လူႇၶၢမ်ႇ တီႈမိူင်း USA တေမီး ပီႈၸွမ်တႆး တေႁပ်ႉဝႆႉပၼ်၊ မိူင်းထႆးသမ်ႉ ၼေႃႇသႅင်ၾႃႉ (ႁွင်ႉ) ၼူဝ်းၼူဝ်း တေႁပ်ႉဝႆႉပၼ်၊ မိူင်းမၢၼ်ႈတႄႉ တေပဵၼ် ၸၢႆးဢုမ်ႈၶိူဝ်း လႄႈ ၸၢႆးတူးၶႃႈ။'
  },
  {
    question: 'ၼႂ်းပပ်ႉသပ်းၼႆႉတေမီး Features သင်လၢႆလၢႆ?',
    answer:
      '- Shan to English, English to Shan, Shan to Shan, Shan to Burmese, Burmese to Shan, Pali to Shan and Thai to Shan \n - Cross platforms ( Window, Linux, Mac, Android, IOS, Browser extensions, Messaging Bots )\n - Accessible both online and offline.\n - Text to speech for words (Shan,English, Thai, Burmese)\n - Synonyms and Antonyms (English)'
  },
  {
    question:
      'သင်ဝႃႈမီးၼမ်ႉၸႂ် ၶႂ်ႈၸွႆးထႅမ် ၸုမ်း ႁဝ်းႁႃး ၼႆ ၵပ်းသိုပ်ႇမႃး တီႈ?',
    answer:
      'Email: hello@haohaa.com \n website: <a class="hover:text-blue-600" href="https://shandictionary.com">Shan Dictionary</a> \n Facebook : <a class="hover:text-blue-600" href="https://fb.com/official.haohaa">Haohaa</a> \n Facebook: <a class="hover:text-blue-600" href="https://fb.com/shandictionary" target="_blank">Shan Dictionary</a>'
  },
  {
    question: 'တေႁဵတ်း release သေ ပိုၼ်ၶၢဝ်ႇမၼ်းမိူဝ်ႈလႂ်?',
    answer: 'v1 တေဢွၵ်ႇမႃး 24 Sept, 2022 ၼႆႉၶႃႈ'
  }
]

const Qna = () => {
  const openToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const closestAnswer = e.currentTarget.querySelector('.answer')
    const arrowIconRight = e.currentTarget.querySelector('svg')
    closestAnswer?.classList.toggle('hidden')
    arrowIconRight?.classList.toggle('rotate-90')
  }
  return (
    <>
      <h3 className="text-xl md:text-2xl my-8 text-center font-bold dark:text-white">
        {T('questions_and_answers')}
      </h3>

      <div className="qna-wrap whitespace-pre-line">
        {qna &&
          qna.map((q, index) => {
            return (
              <div
                key={index}
                onClick={(e) => openToggle(e)}
                className="qna cursor-pointer p-2 mb-4 shadow transition hover:bg-gray-200 dark:hover:bg-black mx-auto max-w-[600px] rounded"
              >
                <div className="question flex justify-between gap-2">
                  <h4 className="text-black dark:text-white font-bold text-xl">
                    {q?.question}
                  </h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-right transition"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </div>
                <div className="answer transition fadeInUp hidden">
                  <p
                    className="text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: q?.answer }}
                  ></p>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Qna
