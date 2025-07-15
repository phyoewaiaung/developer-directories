import Component from '@glimmer/component';

export default class Message extends Component {
  //   substring = (string, start, end) => string.substring(start, end);
  substring = (string, options) => string.substring(options.start, options.end);
}
