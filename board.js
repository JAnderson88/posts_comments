class Boards extends Component{
  constructor(props, styles, parent){
    super()
    this.state = {
      container: `#boards`
    }
    this.struc = [
      {elem: 'div', select: {class: `contianer`, id: `boards`}},
    ]
    this.render(this.struc)
    this.componentDidMount(document.querySelector(this.state.container))
  }

  componentDidMount(cont){
    const posts = new Posts({}, {}, this.state.container)
    const deleted = new Deleted({}, {}, this.state.component)
  }
}