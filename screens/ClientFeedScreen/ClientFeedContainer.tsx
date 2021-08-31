import React from "react";
import { DateTime } from "luxon";

import ClientFeedScreen, { ClientFeedProps } from "./ClientFeedScreenView";

const dummyData: ClientFeedProps = {
  posts: [
    {
      id: 1,
      title: "Dove +Men Sale!",
      isFeatured: true,
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      description:
        "Buy 1, get 1 free! On all mens shampoo and conditioner! bluh bluh yup yup On all mens shampoo and conditioner yup yup ",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      title: "Not isFeatured!",
      isFeatured: false,
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      description: "Come in a get back to school trim for good!",
      imageUrl: "https://source.unsplash.com/random",
    },
    {
      id: 5,
      title: "",
      description: "",
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      imageUrl: "https://source.unsplash.com/random",
      isFeatured: false
    },
    {
      id: 3,
      title: "Dove +Men Sale!!",
      isFeatured: false,
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      description: "Come in a get back to school trim for good!",
    },
    {
      id: 4,
      title: "Dove +WOMen Sale!",
      description: "what the what dude",
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      imageUrl: "https://source.unsplash.com/random",
      isFeatured: false
    },
    {
      id: 6,
      title: "",
      description: "what the what dude",
      datePosted: DateTime.local(2021, 8, 25, 11, 30),
      imageUrl: "https://source.unsplash.com/random",
      isFeatured: false
    },
  ],
};

const ClientFeedContainer = () => <ClientFeedScreen posts={dummyData.posts} />;
export default ClientFeedContainer;
