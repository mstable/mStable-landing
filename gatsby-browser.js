if (module.hot) {
  module.hot.addStatusHandler((status) => {
    if (status === 'apply') document.location.reload()
  })
}
