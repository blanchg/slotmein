
var React = require('react');
var ReactDOM = require('react-dom');

var TextBox = React.createClass({
    render: function() {
        return (
            <div className="textBox">
                <input type="text" placeholder="bob"/>
            </div>
        );
    }
});

var Item = React.createClass({
    render: function() {
        return (
            <li>{this.props.text}</li>
        );
    }
});

var List = React.createClass({
    render: function() {
        var items = 'abcde'.split('').map(function(d) {
            return (
                <Item text={d}/>
            )
        });
        return (
            <ul>
            {items}
            </ul>
        );
    }
});

ReactDOM.render(
    <div>
    <h1>...</h1>
    <div>Change src/index.js and then reload this page</div>
    <TextBox/>
    <List/>
    </div>,
    document.getElementById('app')
);
