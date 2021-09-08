class CountdownTimer {
  constructor({ selector, targetDate}) {
    this.refs = {
      clockDays: document.querySelector(`${selector} [data-value="days"]`),
      clockHours: document.querySelector(`${selector} [data-value="hours"]`),
      clockMins: document.querySelector(`${selector} [data-value="mins"]`),
      clockSecs: document.querySelector(`${selector} [data-value="secs"]`),
      title: document.querySelector(`${selector} .title`),
    }

    this.start(targetDate)
  }

  pad(value) {
    return String(value).padStart(2, '0')
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)))
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000))

    return { days, hours, mins, secs }
  }

  updateDate({ days, hours, mins, secs }) {
    this.refs.clockDays.textContent = `${days}`
    this.refs.clockHours.textContent = `${hours}`
    this.refs.clockMins.textContent = `${mins}`
    this.refs.clockSecs.textContent = `${secs}`
  }

  start(targetDate) {
    setInterval(() => {
      this.updateDate(this.getTimeComponents(targetDate - Date.now()))
    }, 1000)
  }
}

 new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 17, 2021'),
})
 