import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { 
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import { Context } from "../index";
import { ReactComponent as ErrorIcon } from '../assets/icons/error.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg';
import styles from '../styles/Errors.module.css';
import '../styles/transitions.css';

const Errors = observer(() => {
  const { errors } = useContext(Context)
  const { isLength, list } = errors

  return (
    <div>
        {isLength &&
          <TransitionGroup  className={styles.errorsContainer}>
              {list.map(error =>
                <CSSTransition 
                  key={error.id}
                  timeout={200}
                  classNames="item"
                >
                  <div className={styles.error} >
                    <ErrorIcon className={styles.errorIcon}/>

                    <span className={styles.text}>
                      {error.text}
                    </span>

                    
                    <CloseIcon 
                      className={styles.close}
                      onClick={() => errors.deleteError(error.id)}
                    />
                  </div>
                </CSSTransition>
              )}
          </TransitionGroup>
        }
    </div>
  );
})

export default Errors;