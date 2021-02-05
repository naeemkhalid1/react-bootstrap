console.log("this is running");

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
 
        render() {
            return (
                <div>
                    <h1>Visibility Toggler!</h1>
                    <button onClick={this.handleToggleVisibility}>
                        {this.state.visibility ? 'Hide details' : 'Show details'}
                    </button>
                    {this.state.visibility && (
                        <div>
                            <p>You can now see and read me man!</p>
                    <p> I am using <strong>state</strong> to toggle this info instead of <em>if</em> and <em>else</em> </p>
                        </div>
                    )}
                
                </div>
            );
        }


}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


//let visibility = false;
//
//const toggleVisibility = () => {
//    visibility = !visibility;
//    render();
//};
//
//const render = () => {
//    const jsx = (
//        <div>
//            <h1>Visibility Toggler!</h1>
//            <button onClick={toggleVisibility}>
//                {visibility ? 'Hide details' : 'Show details'}
//            </button>
//            {visibility && (
//                <div>
//                    <p>You can now see and read me man!</p>
//                </div>
//            )}
//        
//        </div>
//    );
//
//
//    ReactDOM.render(jsx, document.getElementById('app'));
//};
//
//
//render()

//NOTES
// this is clever - so we set the initial state of visibility to false, that way we
// when we do a trunary test, it equals the last part - show details. It then puts that text into the button.
// when the button is clicked, the toggleVisibility function turns whatever it is (initially false) into
// !whatever it is not (in this case true). That then changes the turnary test into a true and displays Hide details
// inside the button instead!
// we then test if visibilty is true (hide button active) then it displays some content.
// if it is false (show details button active) then it does not show the text. SImple, but it took me a while!