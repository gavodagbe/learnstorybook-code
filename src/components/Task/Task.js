import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
          style={{ textOverflow: 'ellipsis' }}        
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  /**
   * Description of the task. Is very important.
   */
  task: PropTypes.shape({
    /**
     * Id of the task
     */
    id: PropTypes.string.isRequired,
    /**
     * Title of the task.
     */
    title: PropTypes.string.isRequired,
    /**
     * State of the component task
     */
    state: PropTypes.string.isRequired,
  }),
  /**
   * Archive function
   */
  onArchiveTask: PropTypes.func,
  /**
   * Pin function
   */
  onPinTask: PropTypes.func,
};
