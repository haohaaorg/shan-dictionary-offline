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
    searching: 'Searching... πͺ',
    confirm_to_close_announcement: 'Confirmation',
    dont_show_again: "Don't show this message again.",
    no_result: 'No result found π',
    no_result_and_error: 'No result found π , it seems there is an issue.',
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
    home: 'αΌαααα­α°αΌαΊαΈ',
    data: 'αΆα±αααα―αΌαΊαΈ',
    developers: 'α½α°ααΆα°ααΊαα’ααΊα',
    developers_and_contributors: 'α½α°ααΆα°ααΊαα’ααΊα / α½α°ααΈα½ααααααΊ',
    qna: 'αα’ααΊαα½ααΊα',
    questions_and_answers: 'αΆα±αααα’ααΊααααΆα±αααα½ααΊα',
    search: 'αααα°αΊαΊαΈαΆαα',
    searching: 'αα­α―α΅αΊαααααα°ααΆαα πͺ',
    confirm_to_close_announcement: 'αα±αα½ααΊαααααΊααΆααααα ?',
    dont_show_again: 'ααααα±αΌα±αα­α΅αΊααΌααααααΊα',
    no_result: 'αα°ααΊαΌααααα’ααΊαααΌαΊαΆαα π',
    no_result_and_error: 'ααα’ααΊαααΌαΊαΆαα π α’α’ααΊαα½α­ααΊαΈαααα’α±αα',
    switched_to: 'αΆα’αα ',
    app_error: 'app αΌαααα­α―α΅αΊααα?αΈααΌαΊααααααΆαα',
    tts_has_no_sound: 'αα΅ααΊα’α½α΅αΊαααΌαΊαΈαα­α―α΅αΊααα?αΈααΌαΊααααα·αΆαα',
    need_internet_connection: 'α’ααΊααα?αΈ internet αΆαα',
    no_favorite_word: 'α’ααΊαααααα?αΈαα°ααΊαα’αααααααΊαΆαα',
    favorites: 'αα°ααΊαα’αααα',
    favorite_words: 'αα°ααΊαα’αααα',
    removed_from_favorites: 'αα½ααΊαααααΊααααΊααΆαα',
    thanks: 'αα­αΌαΊαΈαΈα°ααΊαΈαΆα½ααΊααΈααΊαααΊααΌααΊαα­α―ααΊ',
    data_credit: 'Credit αΆα±αααα―αΌαΊαΈ',
    id: 'αα’α',
    dictionary: 'αααΊααααΊαΈ',
    credit: 'αΈααΊααΆα½ααΊ',
    shan: 'αααΈ',
    english: 'α’α­ααΊαΈα΅αα­ααΊααα»αΊ',
    added_to_favorite: 'αααΊααΌααΊαΈαα°ααΊαα’αααααααΊααΆαα',
    already_added_to_favorites: 'αα?αΈααααΌααΊαΈαα°ααΊαα’αααααααΊααΆαα'
  }
}

export const T = (text: string) => {
  const language = localStorage.getItem('sd_current_language') || 'English'
  const data = Lang[language as keyof LangName]
  const translated = data[text as keyof object]
  return translated
}
