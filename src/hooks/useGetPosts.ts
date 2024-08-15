import { useEffect, useState } from 'react';
import { getPosts } from '../services';
import { Post } from '../types';

type Props = {
  userName?: string;
};

export const useGetPosts = ({ userName }: Props) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleGetPost = async () => {
    setLoading(true);
    try {
      const res: Post[] = await getPosts();
      setPosts(res);
      setLoading(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userName) {
      handleGetPost();
    }
  }, [userName]);

  return {
    posts,
    loading,
  };
};
