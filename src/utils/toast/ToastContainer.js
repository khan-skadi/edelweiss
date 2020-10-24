import React from 'react';
import { createPortal } from 'react-dom';
import { useTransition } from 'react-spring';

import Toast from './Toast';

const ToastContainer = ({ toasts }) => {
  const transitions = useTransition(toasts, (toast) => toast.id, {
    from: { right: '-100%' },
    enter: { right: '0%' },
    leave: { right: '-100%' }
  });

  return createPortal(
    <div>
      {transitions.map(({ item, key, props }) => (
        <Toast key={key} id={item.id} style={props}>
          {item.content}
        </Toast>
      ))}
    </div>,
    document.body
  );
};

export default ToastContainer;
