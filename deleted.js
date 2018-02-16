class Deleted extends Component{
  constructor(props, styles, parent){
    super(props, styles, parent)
    this.state = {}
    this.struc = [
      {elem: `div`, select: {class: `container`, id: `deleted`}, parent: this.parent},
        {elem: `p`, select: {class: `title deleted`}, text:`Posts`, parent: this.state.container},
      
    ]
    this.render = (this.struc)
  }
}