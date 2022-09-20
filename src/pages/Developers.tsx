import { T } from '../helpers/lang'

const contributors = [
  {
    name: 'ၸၢႆးသႅၼ်ၾႃႉ (ႁွင်ႉ) ၸၢႆးတူး',
    contribution: 'API / Bots / Desktop App Development',
    link: 'https://github.com/ronaldaug',
    image: 'assets/contributors/sai-sen-fa.jpeg'
  },
  {
    name: 'ၸၢႆးၸွမ်တႆး',
    contribution: 'Check and Prepare for Dictionary Data',
    link: 'https://github.com/SZTSIIT',
    image: 'assets/contributors/sai-zom-tai.jpeg'
  },
  {
    name: 'ၸၢႆးတွင်ႉၾႃႉ',
    contribution: 'Android App Development / Testing',
    link: 'https://github.com/saitawngpha',
    image: 'assets/contributors/sai-taung-fa.jpeg'
  },
  {
    name: 'ၸၢႆးသႅင်ၵႅဝ်ႈ',
    contribution: 'Cyber Security / Testing and Desktop App Development',
    link: 'https://github.com/sengkyaut',
    image: 'assets/contributors/sai-seng-kyaut.jpeg'
  },
  {
    name: 'ၸၢႆးၼေႃႇသႅင်ၾႃႉ',
    contribution: 'UI/UX Design / Browser Extension and IOS App Development',
    link: 'https://github.com/NoerNova',
    image: 'assets/contributors/sai-nor-hseng-fa.jpeg'
  },
  {
    name: 'ၸၢႆးဢုမ်ႈၶိူဝ်း',
    contribution: 'Front End Web Development / Logo & UI Design',
    link: 'https://github.com/OhmKhay',
    image: 'assets/contributors/sai-ohm-khay.jpeg'
  },
  {
    name: 'ၼၢင်းသႅင်ၽွင်း',
    contribution: 'Check and Prepare for Dictionary Data',
    link: 'https://www.facebook.com/profile.php?id=100008540440842',
    image: 'assets/contributors/nang-seng-phong.jpeg'
  }
]

const Developers = () => {
  return (
    <>
      <h3 className="md:text-xl my-8 text-center font-bold dark:text-white">
        {T('developers_and_contributors')}
      </h3>
      <div className="md:mb-8 sm:grid sm:grid-cols-12 sm:gap-4 contributor-list">
        {contributors.map((credit) => {
          return (
            <div
              key={credit.name}
              className="mb-4 sm:mb-0 sm:col-span-6 md:col-span-4 shadow-blue-100 shadow-lg dark:bg-black dark:text-white dark:shadow-gray-900 bg-white rounded-lg p-4"
            >
              <div className="contributor text-center">
                <a target="_blank" href={credit.link}>
                  <img
                    src={credit.image}
                    className="w-14 h-14 rounded-full mx-auto my-4 p-1 border-2 border-blue-600"
                    alt={credit.name}
                  />
                </a>
                <div className="my-3">
                  <a target="_blank" href={credit.link}>
                    {credit.name}
                  </a>
                </div>
                <div className="my-3">
                  <small>{credit.contribution}</small>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Developers
