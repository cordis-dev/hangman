import React from 'react';
import styled from 'styled-components';

import LetterButtonGroup from 'components/letter-button-group';
import BasicButton from 'components/basic-button';

export class GamePanel extends React.PureComponent {
  static propTypes = {
    life: React.PropTypes.number,
    mask: React.PropTypes.string,
    complete: React.PropTypes.bool,
    guessed: React.PropTypes.object,
    guess: React.PropTypes.func,
    next: React.PropTypes.func,
  };

  render() {
  	const {className, life, mask, complete, guessed} = this.props;
  	const {guess, next} = this.props;
    return (
		<div className={className}>
			<div className='life'>Life: {life}</div>
			<div>Animal Name: {mask}</div>
			{complete || life === 0 ? null : <LetterButtonGroup guess={guess} guessed={guessed} />}
			{complete ? <div>You have got the right word!</div> : null}
			{life === 0 ? <div>Sorry, you didn't get it this time.</div> : null}
			<BasicButton className='nextButton' func={next} text='Next Word' />
		</div>
    );
  }
}

export default styled(GamePanel)`
	.life {
		float: right;
	}

	.nextButton {
		background: lightgreen;
		margin-top: 20px;
	}
`;