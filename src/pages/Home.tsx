import React, { useEffect, useMemo, useState } from 'react';
import { noop } from '../utils';
import { useGetPosts } from '../hooks/useGetPosts';
import Input from '../components/Input';
import Button from '../components/Button';
import { PostCard } from '../components/PostCard';
import { PostLoader } from '../components/PostLoader';
import { LoginAndSignUpOverlay } from '../components/LoginAndSignUpOverlay';

export function Home() {
  const [content, setContent] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const userName = useMemo(() => sessionStorage.getItem('loggedInUser'), []);

  const { posts, loading } = useGetPosts({
    userName: userName ?? '',
  });

  const toggleOverlay = () => {
    setShowOverlay((prev) => !prev);
  };

  useEffect(() => {
    if (!showOverlay && !userName) {
      toggleOverlay();
    }
  }, []);

  const onClose = () => {
    setShowOverlay(false);
  };

  return (
    <>
      {showOverlay && (<LoginAndSignUpOverlay withOverLay onClose={onClose} />)}
      <div className="w-full h-full py-[4.5rem] pb-12 overflow-hidden mx-auto max-w-[44rem] flex flex-col">
        <div className="flex space-y-3 flex-col flex-shrink-0">
          <span className="text-3xl text-title capitalize">{`Hello ${userName ?? ''}`}</span>
          <span className="text-base font-normal text-subTitle">
            How are you doing today? Would you like to share something with the community 🤗
          </span>
        </div>
        <div className="flex flex-col justify-start space-y-4 mt-10 overflow-y-auto h-full flex-grow">
          {loading && <PostLoader />}
          {!loading && (
            <>
              <PostCard
                title="Create post"
                postContent={(
                  <Input
                    className="flex-1 !border-0 !text-subTitle"
                    value={content}
                    onChange={setContent}
                    placeholder="How are you feeling today?"
                  />
                )}
                postEmoji="💬"
                isPost={false}
                actions={(
                  <div className="flex justify-end items-center">
                    <Button className="!bg-blue !w-28" onClick={noop}>
                      Post
                    </Button>
                  </div>
                )}
              />
              {posts.map(({
                id,
                content,
                comments,
                user,
                userAvatar,
                metaInfo,
                emoji,
              }) => (
                <PostCard
                  key={id}
                  title={user}
                  subTitle={metaInfo}
                  postContent={content}
                  commentsCount={comments}
                  avatarUrl={userAvatar}
                  postEmoji={emoji}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
