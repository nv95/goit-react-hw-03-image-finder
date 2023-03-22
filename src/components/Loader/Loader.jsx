import { Loading } from 'notiflix';
import { Component } from 'react';

export class Loader extends Component {
  componentWillUnmount() {
    Loading.remove();
  }
  render() {
    return Loading.circle();
  }
}
