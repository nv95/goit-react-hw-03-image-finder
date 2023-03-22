import { Notify } from 'notiflix';
import { Component } from 'react';
import { Button, Form, Header, Input, Label } from './SearchBar.styled';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      Notify.warning('Search empty');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            🔎
            <Label>Search</Label>
          </Button>

          <Input
            class="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
