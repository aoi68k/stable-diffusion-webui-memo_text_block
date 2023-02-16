onUiLoaded(async () => {
  const divelm = document.createElement('div')
  divelm.classList.add('gr-block', 'gr-box', 'relative', 'w-full', 'border-solid', 'border', 'border-gray-200', 'gr-padded')

  const textarea = document.createElement('textarea')
  textarea.textContent = ''
  textarea.placeholder = 'Memo (Saved to local storage)'
  textarea.classList.add('scroll-hide', 'block', 'gr-box', 'gr-input', 'w-full', 'gr-text-input')
  textarea.value = localStorage.getItem("stable-diffusion-webui-memo_text_block")
  textarea.style = 'overflow-y: scroll; height: auto'
  let h = (20+(textarea.value.split("\n").length*20))
  textarea.style.height = (h<63?63:h) + "px";

  textarea.addEventListener('input', ()=>{
    textarea.style.height = "auto"
    textarea.style.height = (textarea.scrollHeight<63?63:textarea.scrollHeight) + "px"
    localStorage.setItem("stable-diffusion-webui-memo_text_block", textarea.value)
  })

  const txt2imgActionColumn = gradioApp().getElementById('txt2img_prompt_container')
  txt2imgActionColumn.appendChild(divelm).appendChild(textarea)

})
