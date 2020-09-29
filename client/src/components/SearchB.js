import React from 'react';

import { SearchBar } from 'react-native-elements';

export default class SearchB extends React.Component {

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <SearchBar
        onChangeText={this.updateSearch}
        value={search}
        inputStyle={{ backgroundColor: 'white' }}
        containerStyle={{ backgroundColor: 'black', borderWidth: 1, borderRadius: 8 }}
        ForwardRef={'#g5g5g5'}
        placeholder={'Type Here...'}
      />
    );
  }
}