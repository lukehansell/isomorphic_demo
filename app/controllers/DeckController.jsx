var React = require('react');
var Deck = require('../components/deck.jsx');

var IntoSlide = require('../components/slides/Intro.jsx');
var ProblemSlide = require('../components/slides/Problem.jsx');
var SolutionSlide = require('../components/slides/Solution.jsx');
var DemoSlide = require('../components/slides/Demo.jsx');
var TechSlide = require('../components/slides/Tech.jsx');
var QuestionsSlide = require('../components/slides/Questions.jsx');

class DeckController extends React.Component {
	
	constructor(props, context) {
		super(props);
	}
	
	componentDidMount(){
		if(window) window.onkeypress = this.handleClick.bind(this);
	}
	
	render() {
		var newSlideNum = this.props.params.slideNum*1 + 1;
		var nextSlideHref = this.context.router.makeHref('deck', {slideNum: newSlideNum});
		return <Deck onClick={this.handleClick.bind(this)} 
			onKeyPress={this.handleClick.bind(this)} 
			selected={this.props.params.slideNum}>
			<IntoSlide />
			<ProblemSlide />
			<SolutionSlide />
			<DemoSlide />
			<TechSlide />
			<QuestionsSlide />
		</Deck>
	}
	
	handleClick(e) {
		if (e.target.tagName.toLowerCase() === "a") return;
		e.preventDefault();
		var newSlideNum = this.props.params.slideNum*1 + 1;
		return this.context.router.transitionTo('deck', {slideNum: newSlideNum});
	}
}

DeckController.contextTypes = {
	router: React.PropTypes.func
}

module.exports = DeckController;