import { T } from '../helpers/lang'

const creditData = {
  dictionaries: [
    {
      dictionary: 'Shan to Shan Dictionary',
      credit: 'ၸဝ်ႈသြႃႇသုၶမ်း, SIIT, Shan Wiktionary Team'
    },
    {
      dictionary: 'English to Shan Dictionary',
      credit:
        'ၸဝ်ႈၶူး Dr. ပၺ်ၺႃသီရိ သၢႆပွၼ်, Meet Developer (English Dictionary)'
    },
    {
      dictionary: 'ဢၽိꩪၢၼ်ႇ ပႃႇလိ - တႆး',
      credit:
        'ၸဝ်ႈသြႃႇၵဝိၼ်ႇတ ပိၼ်ႇတႅမ်ႈ၊ မူၼ်ႉမႄးပႃႇလိမၢၼ်ႈပဵၼ်ပႃႇလိတႆး Unicode (ၸဝ်ႈၶူးၺႃႇၼသႃႇမိ SSBU)၊ ပေႃႉလိၵ်ႈ ၼၢင်းမွၵ်ႇႁွမ်ၽူၺ်း'
    },
    {
      dictionary: 'Shan to English Dictionary',
      credit: 'မေႃသွၼ် မွၼ်းၶိူဝ်း -ၵဵင်းတုင်'
    },
    {
      dictionary: 'Shan to Burmese Dictionary',
      credit:
        'ၸၢႆးသုၼ်ယုၵ်ႉ ၊ ၸၢႆးၼုမ်ႇၶိူဝ်း - ၵႂၢမ်းတႅတ်ႈတႆး, ၸၢႆးထုၼ်းၵျေႃႇ , Shan Unicode Team'
    },
    {
      dictionary: 'Thai to Shan Dictionary',
      credit: 'ၸၸုမ်းသၢင်ႇၶ ၸိုင်ႈထႆး | မူၼ်ႉ​​မေး ထတ်းၽိူမ်ႉ PJailon-SIIT'
    }
  ],
  thanks: [
    {
      name: 'ၸဝ်ႈသြႃႇသုၶမိၼ်ႇတ\n(ၸဝ်ႈသြႃႇသုၶမ်း)',
      image: 'assets/thank-list/sao-su-kham.jpeg'
    },
    {
      name: 'ၸဝ်ႈၶူး Dr. ပၺ်ၺႃသီရိ သၢႆပွၼ်',
      image: 'assets/thank-list/jao-khu-pnsr.jpeg'
    },
    {
      name: 'ၸဝ်ႈၶူးၺႃႇၼသႃႇမိ SSBU',
      image: 'assets/thank-list/jaokhu-nyana.jpg'
    },
    {
      name: 'ၸဝ်ႈၶူးၸၼိင်ႇတ',
      image: 'assets/thank-list/jao-khu-jnin.jpeg'
    },
    {
      name: 'မေႃသွၼ် မွၼ်းၶိူဝ်း ၵဵင်းတုင်',
      image: 'assets/thank-list/maw-swan-mwan-khur.jpeg'
    },
    {
      name: 'ပီႈၸၢႆးလူင်',
      image: 'assets/thank-list/p-jai-long.jpeg'
    },
    {
      name: 'ၸၢႆးမွၼ်းၶမ်း',
      image: 'assets/thank-list/sai-mwan-kham.jpeg'
    },
    {
      name: 'ၸၢႆးၸွမ်တႆး',
      image: 'assets/thank-list/sai-zom-tai.jpeg'
    },
    {
      name: 'ၼၢင်းသႅင်ၽွင်း',
      image: 'assets/thank-list/nang-seng-phong.jpeg'
    }
  ]
}

const Credit = () => {
  return (
    <>
      <h3 className="md:text-xl my-8 text-center font-bold dark:text-white">
        {T('data_credit')}
      </h3>
      <table className="mx-auto p-4 md:mb-8 border text-gray-700 dark:text-white mb-5  max-w-[800px]">
        <thead>
          <tr>
            <th className="border text-left p-4">{T('id')}</th>
            <th className="border text-left p-4">{T('dictionary')}</th>
            <th className="border text-left p-4">{T('credit')}</th>
          </tr>
        </thead>
        <tbody>
          {creditData.dictionaries.map((credit, index) => {
            return (
              <tr key={index}>
                <td className="p-4 border">{index + 1}</td>
                <td className="p-4 border">{credit?.dictionary}</td>
                <td className="p-4 border">{credit?.credit}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <h3 className="md:text-xl my-8 text-center font-bold dark:text-white">
        🎊 {T('thanks')} 🎊
      </h3>
      <div className="sm:grid sm:grid-cols-12 sm:gap-4 contributor-list">
        {creditData.thanks.map((credit) => {
          return (
            <div
              key={credit.name}
              className="whitespace-pre-line mb-4 sm:mb-0 sm:col-span-6 md:col-span-4 shadow-blue-100 shadow-lg dark:bg-black dark:text-white dark:shadow-gray-900 bg-white rounded-lg p-4"
            >
              <div className="contributor text-center">
                <img
                  src={credit.image}
                  className="w-14 h-14 rounded-full mx-auto my-4 p-1 border-2 border-blue-600"
                  alt=""
                />
                <div className="my-3">{credit.name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Credit
