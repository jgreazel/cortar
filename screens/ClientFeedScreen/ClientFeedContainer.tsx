import React from "react";
import { DateTime } from "luxon";

import ClientFeedScreen, { ClientFeedProps } from "./ClientFeedScreenView";

const dummyData: ClientFeedProps = {
  posts: [
    {
      title: "Dove +Men Sale!",
      featured: true,
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      description:
        "Buy 1, get 1 free! On all mens shampoo and conditioner! bluh bluh yup yup On all mens shampoo and conditioner yup yup ",
      image: "./bird.jpg",
    },
    {
      title: "Not featured!",
      featured: false,
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      description: "Come in a get back to school trim for good!",
      image: "./bird.jpg",
    },
    {
      title: "Dove +Men Sale!",
      featured: false,
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      description: "Come in a get back to school trim for good!",
    },
    {
      title: "Dove +Men Sale!",
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      image: "./bird.jpg",
    },
  ],
};

const ClientFeedContainer = () => <ClientFeedScreen posts={dummyData.posts} />;
export default ClientFeedContainer;
