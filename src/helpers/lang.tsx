type LangName = {
  English: string
  Shan: string
}

const Lang = {
  English: {
    home: 'Home',
    data: 'Data',
    developers: 'Developers',
    developers_and_contributors: 'Developers / Contributors',
    qna: 'Q&A',
    questions_and_answers: 'Q&A',
    search: 'Search',
    searching: 'Searching...',
    confirm_to_close_announcement: 'Confirmation',
    dont_show_again: "Don't show this message again.",
    no_result: 'No result found',
    no_result_and_error: 'No result found, it seems there is an issue.',
    switched_to: 'Switched to ',
    app_error: 'It seems there is an error.',
    tts_has_no_sound: 'No sound for this word.',
    need_internet_connection: 'You are offline.',
    no_favorite_word: 'No favorite words yet.',
    favorites: 'Favorites',
    favorite_words: 'Favorite Words',
    removed_from_favorites: 'Successfully removed from favorites',
    thanks: 'A special "thanks" goes to',
    data_credit: 'Data Credit',
    id: 'Id',
    dictionary: 'Dictionary',
    credit: 'Credit',
    shan: 'Shan',
    english: 'English',
    added_to_favorite: 'Added to favorites.',
    already_added_to_favorites: 'Already added to favorites'
  },
  Shan: {
    home: 'ၼႃႈႁိူၼ်း',
    data: 'ၶေႃႈမုၼ်း',
    developers: 'ၽူႈၶူင်သၢင်ႈ',
    developers_and_contributors: 'ၽူႈၶူင်သၢင်ႈ / ၽူႈၸွႆႈထႅမ်',
    qna: 'ထၢမ်တွပ်ႇ',
    questions_and_answers: 'ၶေႃႈထၢမ်လႄႈၶေႃႈတွပ်ႇ',
    search: 'ႁႃတူၺ်းၶႃႈ',
    searching: 'တိုၵ်ႉႁႃယူႇၶႃႈ...',
    confirm_to_close_announcement: 'တေမွတ်ႇပႅတ်ႈၶႃႈႁႃႉ ?',
    dont_show_again: 'ယႃႇပေၼေလိၵ်ႈၼႆႉထႅင်ႈ',
    no_result: 'တူဝ်ၼႆႉႁႃဢမ်ႇႁၼ်ၶႃႈ',
    no_result_and_error: 'ႁႃဢမ်ႇႁၼ်ၶႃႈ ဢၢပ်ႇၽိတ်းဝႆႉဢေႃႈ',
    switched_to: 'ၶၢႆႉ ',
    app_error: 'app ၼႆႉတိုၵ်ႉမီးပၼ်ႁႃဝႆႉၶႃႈ',
    tts_has_no_sound: 'သဵင်ဢွၵ်ႇမၼ်းတိုၵ်ႉမီးပၼ်ႁႃဝႆ့ၶႃႈ',
    need_internet_connection: 'ဢမ်ႇမီး internet ၶႃႈ',
    no_favorite_word: 'ဢမ်ႇပႆႇမီးတူဝ်မၢႆဝႆႉသင်ၶႃႈ',
    favorites: 'တူဝ်မၢႆဝႆႉ',
    favorite_words: 'တူဝ်မၢႆဝႆႉ',
    removed_from_favorites: 'မွတ်ႇပႅတ်ႈယဝ်ႉၶႃႈ',
    thanks: 'ယိၼ်းၸူမ်းၶွပ်ႈၸႂ်ယႂ်ႇၼမ်ထိုင်',
    data_credit: 'Credit ၶေႃႈမုၼ်း',
    id: 'မၢႆ',
    dictionary: 'ပပ်ႉသပ်း',
    credit: 'ၸဝ်ႈၶွင်',
    shan: 'တႆး',
    english: 'ဢိင်းၵလိတ်ႉသျ်',
    added_to_favorite: 'သႂ်ႇၼႂ်းတူဝ်မၢႆဝႆႉယဝ်ႉၶႃႈ',
    already_added_to_favorites: 'မီးဝႆႉၼႂ်းတူဝ်မၢႆဝႆႉယဝ်ႉၶႃႈ'
  }
}

export const T = (text: string) => {
  const language = localStorage.getItem('sd_current_language') || 'English'
  const data = Lang[language as keyof LangName]
  const translated = data[text as keyof object]
  return translated
}
