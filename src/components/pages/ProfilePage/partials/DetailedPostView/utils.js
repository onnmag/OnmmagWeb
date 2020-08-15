const setCarouselData = (posts, id) => {
  const dataToSet = {};
  const index = posts.findIndex(post => post.id === id);
  if (index === 0) {
    // first Post
    dataToSet.activePost = {
      ...posts[index],
    };
    if (posts[index + 1]) {
      dataToSet.nextPost = {
        ...posts[index + 1],
      };
    }
    dataToSet.prevPost = null;
  } else if (index === posts.length - 1) {
    // last post
    dataToSet.activePost = {
      ...posts[index],
    };
    if (posts[index - 1]) {
      dataToSet.prevPost = {
        ...posts[index - 1],
      };
    }
    dataToSet.nextPost = null;
  } else {
    dataToSet.activePost = {
      ...posts[index],
    };
    dataToSet.nextPost = {
      ...posts[index + 1],
    };
    dataToSet.prevPost = {
      ...posts[index - 1],
    };
  }
  return dataToSet;
};

export {
  setCarouselData,
};
