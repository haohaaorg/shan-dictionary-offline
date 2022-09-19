import { notyf } from './notyf'

// speak function
export const browserSpeak = (msg: string, vox: string) => {
  const sp = new SpeechSynthesisUtterance()
  sp.voice = window.speechSynthesis.getVoices().filter((e) => {
    return vox == e.name
  })[0]
  sp.text = msg
  speechSynthesis.speak(sp)
}

export const shanTTSSpeak = async (msg: string) => {
  try {
    const e = await fetch(
      import.meta.env.VITE_APP_SHN_TTS_API + '/?text=' + msg
    )
    const { data } = await e.json()
    if (!data) return
    const audio = new Audio(`data:audio/wav;base64,${data}`)
    audio.play()
  } catch (err) {
    notyf.error('သဵင်ဢွၵ်ႇမၼ်းတိုၵ်ႉမီးပၼ်ႁႃဝႆ့ၶႃႈ')
  }
}

const getAudioUrl = async (id: string) => {
  const e = await fetch(
    import.meta.env.VITE_APP_SOUND_OF_TEXT_API + '/sounds/' + id
  )
  const { status, location } = await e.json()
  if (status !== 'Done') {
    return
  }
  return location
}

const fetchSoundOfText = async (text: string, voice: string) => {
  try {
    const e = await fetch(
      import.meta.env.VITE_APP_SOUND_OF_TEXT_API + '/sounds',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          engine: 'Google',
          data: {
            text,
            voice
          }
        })
      }
    )

    const response = await e.json()
    if (!response.success) return
    const url = await getAudioUrl(response.id)
    const audio = new Audio(url)
    audio.play()
  } catch (err) {
    notyf.error('သဵင်ဢွၵ်ႇမၼ်းတိုၵ်ႉမီးပၼ်ႁႃဝႆ့ၶႃႈ')
  }
}

export const speakMe = (speech: string, lang: string) => {
  if (!navigator.onLine) {
    notyf.error('ပေႃးၵွင်ႉ internet ဝႆႉၸင်ႇတေထွမ်ႇသဵင်မၼ်းၶႃႈ')
    return
  }

  if (lang === 'eng2shn') {
    browserSpeak(speech, 'Google US English')
    return
  }
  if (lang === 'tha2shn') {
    fetchSoundOfText(speech, 'th-TH')
    return
  }
  if (lang === 'bur2shn') {
    fetchSoundOfText(speech, 'my')
    return
  }
  shanTTSSpeak(speech)
}
