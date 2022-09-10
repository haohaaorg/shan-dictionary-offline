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
    notyf.error('TTS တႆးႁဝ်းဢမ်ႇပႆႇလႆႈၶႃႈ')
  }
}

export const speakMe = (speech: string, lang: string) => {
  if (lang === 'eng2shn') {
    browserSpeak(speech, 'Google US English')
    return
  }
  shanTTSSpeak(speech)
}
