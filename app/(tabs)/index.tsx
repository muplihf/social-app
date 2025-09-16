// FeedPage.tsx
import React from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, useWindowDimensions } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import "../../global.css"

const posts = [
  {
    id: 1,
    user: "Devon Lane",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://picsum.photos/500/300?random=1",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 2,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://picsum.photos/500/301?random=2",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 3,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://picsum.photos/500/301?random=3",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
  {
    id: 4,
    user: "Darlene Robertson",
    handle: "@johndue",
    text: "Tom is in a big hurry.",
    image: "https://picsum.photos/500/301?random=4",
    likes: "6.2K",
    comments: 61,
    shares: 12,
  },
];

// Komponen untuk setiap item menu agar tidak repetitif
const NavItem = ({ iconName, text }) => (
    <TouchableOpacity className="flex-row items-center space-x-4 p-3 rounded-full hover:bg-gray-100 my-1">
        <Ionicons name={iconName} size={26} color="black" />
        <Text className="text-xl">{text}</Text>
    </TouchableOpacity>
);


export default function FeedPage() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768; // switch layout for tablet/desktop

  return (
    <View className="flex-1 md:items-center md:justify-center">
      <View className="flex-1 bg-white max-w-screen-2xl">
          <View className="flex-1 flex-row">

            {/* LEFT SIDEBAR (Desktop Only) */}
            {isDesktop && (
              <View className="w-1/5 border-r border-gray-200 p-4">
                <View className="flex-1 justify-between">
                    <ScrollView>
                        {/* Logo Twitter */}
                        <View className="p-2 mb-2">
                           <Ionicons name="logo-twitter" size={32} color="#1DA1F2" />
                        </View>
                        
                        {/* Navigation Links */}
                        <NavItem iconName="home-outline" text="Home" />
                        <NavItem iconName="compass-outline" text="Explore" />
                        <NavItem iconName="notifications-outline" text="Notifications" />
                        <NavItem iconName="mail-outline" text="Messages" />
                        {/* Menu tambahan yang diminta */}
                        <NavItem iconName="bookmark-outline" text="Bookmarks" />
                        <NavItem iconName="list-outline" text="Lists" />
                        <NavItem iconName="person-outline" text="Profile" />
                        <NavItem iconName="ellipsis-horizontal-circle-outline" text="More" />

                        <TouchableOpacity className="bg-sky-500 py-3 px-4 rounded-full mt-4">
                            <Text className="text-white text-center font-bold text-lg">Tweet</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    
                    {/* User Profile Section */}
                    <TouchableOpacity className="flex-row items-center space-x-3 p-2 rounded-full hover:bg-gray-100 mt-4">
                        <Image source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} className="w-10 h-10 rounded-full" />
                        <View>
                            <Text className="font-bold">Your Name</Text>
                            <Text className="text-gray-500">@yourhandle</Text>
                        </View>
                    </TouchableOpacity>
                </View>
              </View>
            )}

            {/* MAIN FEED */}
            <View className={`${isDesktop ? "w-3/5" : "flex-1"} border-r border-gray-200`}>
              <View className="flex-row items-center p-4 border-b border-gray-200">
                <Image
                  source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <TextInput
                  placeholder="What's happening?"
                  className="flex-1 text-base"
                  multiline
                />
              </View>

              <ScrollView>
                {posts.map((post) => (
                  <View key={post.id} className="border-b border-gray-200 p-4">
                    <View className="flex-row items-center mb-2">
                      <Image
                        source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <View>
                        <Text className="font-bold">{post.user}</Text>
                        <Text className="text-gray-500">{post.handle}</Text>
                      </View>
                    </View>
                    <Text className="mb-2">{post.text}</Text>
                    {post.image && (
                      <Image
                        source={{ uri: post.image }}
                        className="w-full h-48 rounded-xl mb-2"
                        resizeMode="cover"
                      />
                    )}
                    <View className="flex-row justify-between mt-2">
                      <View className="flex-row items-center space-x-1">
                        <Ionicons name="chatbubble-outline" size={20} color="gray" />
                        <Text className="text-gray-500">{post.comments}</Text>
                      </View>
                      <View className="flex-row items-center space-x-1">
                        <Ionicons name="repeat" size={20} color="gray" />
                        <Text className="text-gray-500">{post.shares}</Text>
                      </View>
                      <View className="flex-row items-center space-x-1">
                        <Ionicons name="heart-outline" size={20} color="gray" />
                        <Text className="text-gray-500">{post.likes}</Text>
                      </View>
                      <Feather name="share" size={20} color="gray" />
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>

            {/* RIGHT SIDEBAR (Desktop Only) */}
            {isDesktop && (
              <View className="w-1/5 p-4">
                <ScrollView>
                     {/* Search Bar */}
                     <View className="flex-row items-center bg-gray-100 rounded-full p-3 mb-4">
                         <Feather name="search" size={20} color="gray" />
                         <TextInput placeholder="Search Twitter" className="flex-1 ml-3 text-base" />
                     </View>
 
                    <Text className="font-bold mb-4 text-lg">What's happening</Text>
                    <Text className="text-gray-600 mb-2">COVID19 · Last night</Text>
                    <Text className="text-sm mb-4">
                        England’s Chief Medical Officer says the UK is at the most dangerous time.
                    </Text>

                    <Text className="font-bold mb-4 text-lg">Who to follow</Text>
                    <View className="mb-3">
                        <Text>Bessie Cooper</Text>
                        <TouchableOpacity className="bg-sky-500 px-3 py-1 rounded-full mt-1 w-20">
                            <Text className="text-white text-center">Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>Jenny Wilson</Text>
                        <TouchableOpacity className="bg-sky-500 px-3 py-1 rounded-full mt-1 w-20">
                            <Text className="text-white text-center">Follow</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
              </View>
            )}
          </View>
        </View>
    </View>
  );
}

