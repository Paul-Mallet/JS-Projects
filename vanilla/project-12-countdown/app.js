// import {timer} from './dom.js'


const section = document.querySelector(".innerJS")

window.addEventListener("load", () => {
    section.innerHTML = `
            <div class="container">
                <article>
                    <img src="./img/iphone-14-purple.jpg" alt="phone-picture"/>
                </article>
                <article class="infos">
                    <h1>OLD IPHONE GIVEAWAY</h1>
                    <h2>Promotion ends on <span></span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod harum itaque ad in sit iste cupiditate aperiam molestias aspernatur quaerat dolorum necessitatibus, tempora unde corporis! Voluptates molestias excepturi quisquam?</p>
                </article>
            </div>
    `
    const spanInfos = document.querySelector("span")
    const articleInfos = document.querySelector(".infos")
    console.log(articleInfos)

    // timer(spanInfos)
})

const divComponent = document.querySelector(".componentReact")

class DecrementerDate extends React.Component {

    constructor (props) {
        super(props)
        this.state = {n: this.props.starter}
        this.timer = null
    }

    componentDidMount() {
        window.setInterval(this.decrement.bind(this), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    decrement() {
        this.setState((state, props) => {
            return {n: state.n - 1}
        })
    }

    render() {
        return <div>
            <h3>{this.state.n}</h3>
            <button>Buy it now</button>
        </div>
    }
}

function All() {
    return <div>
        <DecrementerDate starter={0}/>
    </div>
}

ReactDOM.render(<All/>, document.querySelector(".componentReact"))