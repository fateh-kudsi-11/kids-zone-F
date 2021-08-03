import React, { useEffect } from 'react';
import Head from 'next/head';

// Hooks
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function Home() {
  const gender = useSelector((state) => state.navigation.gender);
  const router = useRouter();
  useEffect(() => {
    router.push(`/${gender}`);
  }, []);
  return null;
}

export default Home;
