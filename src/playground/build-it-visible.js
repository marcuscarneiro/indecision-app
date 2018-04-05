class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevstate) => {
            return {
                visibility: !prevstate.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Agora você pode ver</p>}
            </div>
        );
    };
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && <p>Agora você pode ver!</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();