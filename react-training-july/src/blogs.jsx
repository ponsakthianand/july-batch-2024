import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Header from './common/header';
import Footer from './common/fooder';
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
const Blogs = () => {
  const welcomeMessage = 'Hello to my blogs!';
  return <div className='wrapper'>{welcomeMessage}</div>;
};

export default Blogs;
