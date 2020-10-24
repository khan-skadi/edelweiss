import React, { useEffect } from 'react';
import { useToast } from './ToastProvider';
import { animated } from 'react-spring';

const Toast = ({ children, id, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return <animated.div style={style}>{children}</animated.div>;
};

export default Toast;
