class App extends Component{
  constructor(){
    super()
    this.render([
      {elem: `div`, select: {class: `app state1`}}
    ])
  }

  setChildren(child){
    this.self.children.push(child)
  }

  getChildren(child){
    return this.self.children.indexOf(child)
  }
}