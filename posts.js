class Post extends Component {
  constructor(props, styles, parent){
    super(props, styles, parent)
    this.state = {
      container: `.post`, 
      numPosts: 0
    }
    this.struc = [
      {elem: `div`, select: {class: `post`}, parent: this.parent},
      {elem: `div`, select: {class: `title comm`}, parent: this.state.container},
    ]
    this.render(this.struc)
  }

  createComment(comment){
    this.struc.push({elem: `div`, attr:{"data-order": `${this.state.numPosts}`}, select: {class: `title comment`}, html: `${comment} <button> X </button>`, parent: this.state.container})
    this.setState({numPosts: this.state.numPosts+1}, this.parent)
  }
}

class Posts extends Component{
  constructor(props, styles, parent){
    super(props, styles, parent)
    this.state = {
      container: `#posts`
    }
    this.struc = [
      {elem: `div`, select: {class: `contianer`, id: `posts`}, parent: this.parent},
        {elem: `p`, select: {class: `title posts`}, text:`Posts`, parent: this.state.container},
    ]
    this.render(this.struc)
    this.componentDidMount(document.querySelector(this.state.contianer))
  }

  componentDidMount(cont){
    const post1 = new Post({}, {}, this.state.container)
    post1.createComment(`Comment 1`)
    post1.createComment(`Comment 2`)
    console.log(post1)
  }
}