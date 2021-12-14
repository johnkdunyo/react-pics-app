import React, { Component } from 'react'

export class SearchBar extends Component {
    state= {searchInput : ''};

    onFormSubmit(e){
        e.preventDefault();
        //console.log(this.state.searchInput)
        this.props.onSubmit(this.state.searchInput);

    }





    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className='ui field'>
                        <label>Search</label>
                        <input 
                            type='text' 
                            value={this.state.searchInput}
                            onChange={(e) => this.setState({searchInput: e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
