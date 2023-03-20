import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className='bottonsBlock'>
            {options.map((key) => (
                <button key={key} type="button" onClick={() =>  onLeaveFeedback(key)}>{FormatLetter(key)}</button>

            ))}    

        </div>
    )
}

function FormatLetter(key) {
  return key[0].toUpperCase() + key.slice(1);
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
