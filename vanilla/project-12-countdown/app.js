import {promotionDate, timer} from './dom.js'

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

    // timer(spanInfos, articleInfos)
})




// React Component Method


// const divComponent = document.querySelector(".componentReact")

// class DecrementerDate extends React.Component {

//     constructor (props) {
//         super(props)
//         this.state = {n: this.props.starter}
//         this.timer = null
//     }

//     componentDidMount() {
//         window.setInterval(this.decrement.bind(this), 1000)
//     }

//     componentWillUnmount() {
//         window.clearInterval(this.timer)
//     }

//     decrement() {
//         this.setState((state, props) => {
//             return {n: state.n - 1}
//         })
//     }

//     render() {
//         return <div>
//             <h3>{this.state.n}</h3>
//             <button>Buy it now</button>
//         </div>
//     }
// }

// function All() {
//     return <div>
//         <DecrementerDate starter={0}/>
//     </div>
// }

// ReactDOM.render(<All/>, document.querySelector(".componentReact"))


// CORRECTION : Aurait du créer les divs dans le HTML -> plus simple pour boucle innerHTML

// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   const weekdays = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];

//   const giveaway = document.querySelector('.giveaway');
//   const deadline = document.querySelector('.deadline');
//   const items = document.querySelectorAll('.deadline-format h4');
  
//   let tempDate = new Date();
//   let tempYear = tempDate.getFullYear();
//   let tempMonth = tempDate.getMonth();
//   let tempDay = tempDate.getDate();
//   // months are ZERO index based;
//   const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  
//   // let futureDate = new Date(2020, 3, 24, 11, 30, 0);
  
//   const year = futureDate.getFullYear();
//   const hours = futureDate.getHours();
//   const minutes = futureDate.getMinutes();
  
//   let month = futureDate.getMonth();
//   month = months[month];
//   const weekday = weekdays[futureDate.getDay()];
//   const date = futureDate.getDate();
//   giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
  
//   const futureTime = futureDate.getTime();
//   function getRemaindingTime() {
//     const today = new Date().getTime();
  
//     const t = futureTime - today;
//     // 1s = 1000ms
//     // 1m = 60s
//     // 1hr = 60m
//     // 1d = 24hr
//     // values in miliseconds
//     const oneDay = 24 * 60 * 60 * 1000;
//     const oneHour = 60 * 60 * 1000;
//     const oneMinute = 60 * 1000;
//     // calculate all values
//     let days = t / oneDay;
//     days = Math.floor(days);
//     let hours = Math.floor((t % oneDay) / oneHour);
//     let minutes = Math.floor((t % oneHour) / oneMinute);
//     let seconds = Math.floor((t % oneMinute) / 1000);
  
//     // set values array
//     const values = [days, hours, minutes, seconds];
//     function format(item) {
//       if (item < 10) {
//         return (item = `0${item}`);
//       }
//       return item;
//     }
  
//     items.forEach(function (item, index) {
//       item.innerHTML = format(values[index]);
//     });
  
//     if (t < 0) {
//       clearInterval(countdown);
//       deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
//     }
//   }

//   // countdown;
//   let countdown = setInterval(getRemaindingTime, 1000);
//   //set initial values
//   getRemaindingTime();