export type PostType = {
  message: string;
  id: string;
  createdAt: string;
  user: {
    name: string;
    image: string;
  };
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
  }[];
};
