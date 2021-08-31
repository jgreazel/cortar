import React from "react";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { BarberPostCard } from "../../components";
import { Post } from "../../schema";
import { styles } from "../../styles";

// const localStyles = StyleSheet.create({
//   card: {
//     width: "90%",
//     margin: 8,
//     alignSelf: "center",
//   },
//   selectedCard: {
//     width: "100%",
//     marginBottom: 8,
//     alignSelf: "center",
//   },
//   bold: {
//     fontWeight: "bold",
//     flex: 1,
//   },
//   normal: {
//     flex: 3,
//   },
//   img: {
//     flex: 2,
//     maxHeight: 100,
//   },
//   row: {
//     flexDirection: "row",
//     minHeight: 50,
//     display: "flex",
//     alignItems: "center",
//     padding: 4,
//   },
//   blue: {
//     color: "#3182CE",
//     display: "flex",
//     alignItems: "center",
//     marginRight: 20,
//   },
// });

export type ClientFeedProps = {
  posts: Post[];
};

// const FtSubtitle = (props: any) => (
//   <Text {...props} style={styles.blue}>
//     <Ionicons name="flame-sharp" />
//     Featured!
//   </Text>
// );

// todo paths for images cant be hard coded
// not entirely sure how I'm going to handle images at all
const ClientFeedScreen = (props: ClientFeedProps) => {
  // const ftPost = props.posts.find((x) => x.featured);

  return (
    <View style={styles.topContainer}>
      <ScrollView>
        <View style={styles.centerContainer}>
          {props.posts.map((x) =>
            x.title ? (
              <BarberPostCard {...x} key={x.id} />
            ) : (
              <Image
                style={[styles.image, styles.card]}
                source={{ uri: x.imageUrl }}
              />
            )
          )}
        </View>
        {/* {ftPost && (
        <Card style={styles.selectedCard}>
          <Card.Title title={ftPost.title} right={FtSubtitle} />
          <Card.Content>
            <Divider />
            <View style={styles.row}>
              <Text style={styles.normal}>{ftPost.description}</Text>
              {ftPost.image && (
                <Image
                  source={require("../../assets/cake.jpg")}
                  style={styles.img}
                />
              )}
            </View>
          </Card.Content>
        </Card>
      )}
      {props.posts
        .filter((x) => !x.featured)
        .map((post, idx) => (
          <Card style={styles.card} key={idx}>
            {post.description && (
              <>
                <Card.Title title={post.title} />
                <Card.Content>
                  <Divider />
                  <View style={styles.row}>
                    <Text style={styles.normal}>{post.description}</Text>
                    {post.image && (
                      <Image
                        source={require("../../assets/cake.jpg")}
                        style={styles.img}
                      />
                    )}
                  </View>
                </Card.Content>
              </>
            )}
            {!post.description && post.image && (
              <Card.Cover
                style={{ height: 400, borderRadius: 4 }}
                source={require("../../assets/cake.jpg")}
              />
            )}
          </Card>
        ))} */}
      </ScrollView>
      <View style={styles.floatRight}>
        {/* <IconButton color="#3182CE" icon="filter" onPress={() => console.log("hello")} /> */}
        <Button mode="contained" style={styles.filterButton}>
          <Ionicons name="filter" /> Filter
        </Button>
      </View>
    </View>
  );
};

export default ClientFeedScreen;
