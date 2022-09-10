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
      credit: 'ၸဝ်ႈသြသႃႇၵဝိၼ်ႇတ ပိၼ်ႇတႅမ်ႈ'
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
  contributors: [
    {
      name: 'ၸၢႆးသႅၼ်ၾႃႉ (ႁွင်ႉ) ၸၢႆးတူး',
      contribution: 'API / Bots / Desktop App Development',
      link: '',
      image: 'assets/contributors/sai-sen-fa.jpeg'
    },
    {
      name: 'ၸၢႆးၸွမ်တႆး',
      contribution: 'Check and Prepare for Dictionary Data',
      link: '',
      image: 'assets/contributors/sai-zom-tai.jpeg'
    },
    {
      name: 'ၸၢႆးတွင်ႉၾႃႉ',
      contribution: 'Android App Development / Testing',
      link: '',
      image: 'assets/contributors/sai-taung-fa.jpeg'
    },
    {
      name: 'ၸၢႆးသႅင်ၵႅဝ်ႈ',
      contribution: 'Cyber Security / Testing and Desktop App Development',
      link: '',
      image: 'assets/contributors/sai-seng-kyaut.jpeg'
    },
    {
      name: 'ၸၢႆးၼေႃႇသႅင်ၾႃႉ',
      contribution: 'UI/UX Design / Browser Extension and IOS App Development',
      link: '',
      image: 'assets/contributors/sai-nor-hseng-fa.jpeg'
    },
    {
      name: 'ၸၢႆးဢုမ်ႈၶိူဝ်း',
      contribution: 'Front End Web Development / Logo & UI Design',
      link: '',
      image: 'assets/contributors/sai-ohm-khay.jpeg'
    },
    {
      name: 'ၼၢင်းသႅင်ၽွင်း',
      contribution: 'Check and Prepare for Dictionary Data',
      link: '',
      image: 'assets/contributors/nang-seng-phong.jpeg'
    }
  ],
  thanks: [
    {
      name: 'ၸဝ်ႈသြႃႇသုၶမိၼ်ႇတ(ၸဝ်ႈသြႃႇသုၶမ်း)',
      image: 'assets/thank-list/sao-su-kham.jpeg'
    },
    {
      name: 'ၸဝ်ႈၶူး Dr. ပၺ်ၺႃသီရိ သၢႆပွၼ်',
      image: 'assets/thank-list/jao-khu-pnsr.jpeg'
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
    <div className="m-4 p-4 bg-white shadow-lg rounded dark:bg-primary">
      <h2 className="text-xl md:text-2xl my-8 text-center font-bold text-gray-700 dark:text-white">
        🎊 All the credit goes to these wonderful people. 🎊
      </h2>
      <h3 className="md:text-xl my-8 text-center font-bold dark:text-white">
        Data Credit
      </h3>
      <table className="mx-auto p-4 md:mb-8 border text-gray-700 dark:text-white mb-5">
        <thead>
          <tr>
            <th className="border text-left p-4">Id</th>
            <th className="border text-left p-4">Name</th>
            <th className="border text-left p-4">Credit</th>
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
        Contributors
      </h3>
      <div className="md:mb-8 sm:grid sm:grid-cols-12 sm:gap-4 contributor-list">
        {creditData.contributors.map((credit) => {
          return (
            <div className="mb-4 sm:mb-0 sm:col-span-6 md:col-span-4 lg:col-span-3 shadow-blue-100 shadow-lg dark:bg-black dark:text-white dark:shadow-gray-900 bg-white rounded-lg p-4">
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

      <h3 className="md:text-xl my-8 text-center font-bold dark:text-white">
        Thank List
      </h3>
      <div className="sm:grid sm:grid-cols-12 sm:gap-4 contributor-list">
        {creditData.thanks.map((credit) => {
          return (
            <div className="mb-4 sm:mb-0 sm:col-span-6 md:col-span-4 lg:col-span-3 shadow-blue-100 shadow-lg dark:bg-black dark:text-white dark:shadow-gray-900 bg-white rounded-lg p-4">
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
    </div>
  )
}

export default Credit
