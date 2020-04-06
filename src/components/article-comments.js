import React, {PureComponent} from 'react';
import toggleOpen from '../decorators/toggleOpen';

class ArticleCommnets extends PureComponent {
  render() {
    const { comments, isOpen, toggleOpenItem } = this.props;
    return(
      <div>
        <button onClick = {toggleOpenItem}>{isOpen ? 'closed' : 'open'} comments {comments.length}</button>
        {isOpen && 
          <ul>
            {comments.map(comment =>
              <li key = {comment.id}>
                <h4>{comment.name}</h4>
                <p>{comment.text}</p>
              </li>
            )}
          </ul>
        }
      </div>
    )
  }
}

export default toggleOpen(ArticleCommnets);
