const React = require('react');
const {connect} = require('react-redux');
const Search = require('Search');

console.log(Search.props);

const actions = require('actions');


class Recent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // clear storageReducer every time so the component refreshes when query is made (and new state in storageReducer is changed)
        this.props.clearLocal();
        const getList = () => {
            
            if(this.props.storageReducer !== '' || window.localStorage.getItem('list')) {
            //     const list = (JSON.parse(window.localStorage.getItem('list')) || []).map((el) => {
            //         React.createElement('span', {onClick: Search.submitInput(event, el)}, el);
                    
            //     })
            //     .join(', ');
                
                const list = (JSON.parse(window.localStorage.getItem('list')) || []).join(', ');
                return list;
            } else {
                return [];
            }   
            
        };
        
        return (
            <div id='recent'>
                <span>Recent searches: </span><span id='recentList'>{getList()}</span>
            </div>
            
            );
    }   
}


const mapStateToProps = (state) => {
    return {storageReducer} = state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearLocal: () => {
            dispatch(actions.clearLocal());
        }
    };
};


const Container = connect(mapStateToProps, mapDispatchToProps)(Recent);


module.exports = Container;