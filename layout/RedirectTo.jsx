// Hooks
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect({ path }) {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${path}`);
  }, []);

  return <p>Redirecting...</p>;
}
