$(document).ready(function () {
  const $screen1 = $(".screen1")
  const $screen2 = $(".screen2")
  const $biscoitoFechado = $("#biscoitoFechado")
  const $abrirOutroBiscoito = $("#abrirOutroBiscoito")
  const arrFrases = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  ]

  $biscoitoFechado.click(handleTryClick)
  $abrirOutroBiscoito.click(handleResetClick)

  $(document).keydown(function (e) {
    if (e.key === "Enter" && $screen2.hasClass("hide")) {
      handleTryClick()
    } else if (e.key === "Enter" && $screen1.hasClass("hide")) {
      handleResetClick()
    }
  })

  function handleTryClick() {
    toggleScreen()
    pickFortune()
  }

  function handleResetClick() {
    toggleScreen()
  }

  function pickFortune() {
    let allFortunes = arrFrases.length
    let randomNumber = Math.floor(Math.random() * allFortunes)
    $screen2.find("h2").text(arrFrases[randomNumber])
  }

  function toggleScreen() {
    $screen2.toggleClass("hide")
    $screen1.toggleClass("hide")
  }
})
