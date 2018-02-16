class Component{
  constructor(props, styles, parent){
    this.props = props || {}
    this.styles = styles || {}
    this.struc = []
    this.store = []
    this.parent = parent || document.querySelector(".app")
    // this.elements = []
    this.componentDidMount = this.componentDidMount.bind(this)
    this.setState = this.setState.bind(this)
  }

  componentWillMount(){
    //Component will toggle to appropriate state and remove former state
    //Component call to server to grab appropriate information
  }

  componentDidMount(cont){
    //select the elements to add eventListeners to
    //pass in the functionsList and data that needs to be used by the functions

  }

  componentWillUnmount(){
    // removes components InnerHTML and 0
  }

  componentDidUnmount(){

  }

  setState(change){
    Object.assign(this.state, change)
    this.render(this.struc, this.state.container)
  }

  removeState(){
    //removes InnerHTML of currentState
  }

  render(htmlElements, cont){
    if(document.querySelector(cont)) { document.querySelector(cont).innerHTML = ``}
    htmlElements.forEach(el=>{
      const elem = (typeof(el[`elem`]) !== "undefined") ? document.createElement(el.elem) : null
      if (elem.localName === "undefined"){ 
        console.error(`Can not create this element, ${el.elem} is not a html element`) 
        return 
      }
      if (typeof(el.select) !== `undefined` && typeof(el.select[`class`]) !== "undefined") elem.classList = el.select.class 
      if (typeof(el.select) !== `undefined` && typeof(el.select[`id`]) !== "undefined") elem.id = el.select.id 
      if (typeof(el['attr']) !== "undefined"){
        for(let attr in el.attr){
          elem.setAttribute(attr, el.attr[attr])
        }
      }
      if (typeof(el[`text`]) !== "undefined") elem.textContent = el.text
      if(typeof(el[`html`]) !== `undefined`) elem.innerHTML = el.html
      if (typeof(el['parent']) === "undefined") { 
        (el.select.class.includes('app')) 
          ? document.querySelector(`body`).insertBefore(elem, document.querySelector(`body`).firstChild) 
          : document.querySelector('.app').appendChild(elem)
      }
      if(typeof(el['parent']) !== "undefined") document.querySelector(el.parent).appendChild(elem)
      if(typeof(el['styles']) !== "undefined"){
        for(let prop in el.styles){
          elem.style[`${prop}`] = el.styles[`${prop}`]
        }
      }
    })
  }

  action(){

  }

  reducer(){

  }
}