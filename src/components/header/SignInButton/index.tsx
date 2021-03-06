import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return isUserLoggedIn ? (
    <button className={styles.content} type='button'>
      <FaGithub color='#04d361' />
      Diego Almeida
      <FiX className={styles.close} color='#737380' />
    </button>
  ) : (
    <button className={styles.content} type='button'>
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  )
}