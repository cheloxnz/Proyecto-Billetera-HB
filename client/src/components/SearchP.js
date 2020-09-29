import * as React from 'react';

import { SearchBar } from 'react-native-elements';

const SearchPayment = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SearchBar
      onChangeText={onChangeSearch}
      value={searchQuery}
      inputStyle={{ backgroundColor: 'white' }}
      containerStyle={{ backgroundColor: 'black', borderRadius: 8 }}
      ForwardRef={'#g5g5g5'}
      placeholder={'Search Company...'}
    />
  );
}

export default SearchPayment;