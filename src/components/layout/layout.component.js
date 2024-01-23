export class Layout {
  constructor({router, children}){
    this.router = router
    this.children = children
  }

  render(){
    const headerHTML = `
    Header
    <header>
      <a href="/">Home</a>
      <a href="/auth">Auth</a>
      <a href="/about-us">About Us</a>
    </header>
    `

    return `
      ${headerHTML}
      <main>
        ${this.children}
      </main>
    `
  }
}