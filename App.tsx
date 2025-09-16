// App.tsx
import React from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, useWindowDimensions } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import "./global.css"

const posts = [
  {
    id: 1,
    user: "Brie",
    handle: "@Sktch_ComedyFan",
    time: "3m",
    text: "Giving standup comedy a go. Open mic starts at 7, hit me up if you want ticket #herrgemoething",
    image: null,
    likes: 8,
    comments: 1,
    retweets: 0,
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    user: "Harold",
    handle: "@h_wang88",
    time: "10m",
    text: "Vacation is going great!",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    likes: 14,
    comments: 3,
    retweets: 5,
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    user: "andrea",
    handle: "@andy_landerson",
    time: "3m",
    text: "How many lemons do I need to make lemonade?",
    image: null,
    likes: 0,
    comments: 0,
    retweets: 0,
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg"
  },
];

const trends = [
  {
    category: "Space",
    title: "Lunar photography improves the discovery of the moon",
    tweets: "10,094 people are Tweeting about this"
  },
  {
    category: "#WorldNews",
    subtitle: "125K Tweets",
    tweets: "5,094 people are Tweeting about this"
  },
  {
    category: "Animals",
    title: "These cats are ready for #InternationalCatDay",
    tweets: "2,757 people are Tweeting about this"
  },
  {
    category: "#GreatestOfAllTime",
    subtitle: "100K Tweets",
    tweets: "4,123 people are Tweeting about this"
  }
];

export default function FeedPage() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 flex-row max-w-screen-xl mx-auto w-full">
        {/* LEFT SIDEBAR */}
        {isDesktop && (
          <View className="w-64 border-r border-gray-200 px-4 py-2">
            {/* Twitter Logo */}
            <View className="p-3 mb-4">
              <View className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Text className="text-white font-bold text-lg">T</Text>
              </View>
            </View>
            
            {/* Navigation */}
            <View className="space-y-1">
              <TouchableOpacity className="flex-row items-center p-3 hover:bg-gray-100 rounded-full">
                <Ionicons name="home" size={24} color="#1DA1F2" />
                <Text className="ml-4 text-xl font-bold text-black">Home</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center p-3 hover:bg-gray-100 rounded-full">
                <Text className="ml-1 mr-4 text-2xl">#</Text>
                <Text className="text-xl text-black">Explore</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center p-3 hover:bg-gray-100 rounded-full">
                <Ionicons name="notifications-outline" size={24} color="black" />
                <Text className="ml-4 text-xl text-black">Notifications</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center p-3 hover:bg-gray-100 rounded-full">
                <Ionicons name="mail-outline" size={24} color="black" />
                <Text className="ml-4 text-xl text-black">Messages</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center p-3 hover:bg-gray-100 rounded-full">
                <Ionicons name="bookmark-outline" size={24} color="black" />
                <Text className="ml-4 text-xl text-black">Bookmarks</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center p-3 hover:bg-gray-100 rounded-full">
                <Ionicons name="list-outline" size={24} color="black" />
                <Text className="ml-4 text-xl text-black">Lists</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center p-3 hover:bg-gray-100 rounded-full">
                <Ionicons name="person-outline" size={24} color="black" />
                <Text className="ml-4 text-xl text-black">Profile</Text>
              </TouchableOpacity>
              
              <TouchableOpacity className="flex-row items-center p-3 hover:bg-gray-100 rounded-full">
                <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="black" />
                <Text className="ml-4 text-xl text-black">More</Text>
              </TouchableOpacity>
            </View>
            
            {/* Tweet Button */}
            <TouchableOpacity className="bg-blue-500 py-3 px-8 rounded-full mt-6 w-full">
              <Text className="text-white text-center font-bold text-lg">Tweet</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* MAIN FEED */}
        <View className={`${isDesktop ? "flex-1" : "flex-1"} border-r border-gray-200 max-w-2xl`}>
          {/* Header */}
          <View className="sticky top-0 bg-white bg-opacity-80 backdrop-blur border-b border-gray-200 px-4 py-3 flex-row items-center justify-between">
            <Text className="text-xl font-bold">Home</Text>
            <TouchableOpacity>
              <Ionicons name="sparkles" size={24} color="#1DA1F2" />
            </TouchableOpacity>
          </View>

          {/* What's happening input */}
          <View className="border-b border-gray-200 p-4">
            <View className="flex-row">
              <Image
                source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
                className="w-12 h-12 rounded-full mr-3"
              />
              <View className="flex-1">
                <TextInput
                  placeholder="What's happening?"
                  className="text-xl text-gray-900 mb-3"
                  multiline
                  placeholderTextColor="#657786"
                />
                <View className="flex-row items-center justify-between">
                  <View className="flex-row space-x-4">
                    <TouchableOpacity>
                      <Ionicons name="image-outline" size={20} color="#1DA1F2" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionicons name="videocam-outline" size={20} color="#1DA1F2" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionicons name="bar-chart-outline" size={20} color="#1DA1F2" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionicons name="happy-outline" size={20} color="#1DA1F2" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity className="bg-blue-500 py-1.5 px-6 rounded-full">
                    <Text className="text-white font-bold">Tweet</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <ScrollView>
            {posts.map((post) => (
              <View key={post.id} className="border-b border-gray-200 p-4 hover:bg-gray-50">
                <View className="flex-row">
                  <Image
                    source={{ uri: post.profileImage }}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <View className="flex-1">
                    {/* Header */}
                    <View className="flex-row items-center mb-1">
                      <Text className="font-bold text-black mr-1">{post.user}</Text>
                      <Text className="text-gray-500 mr-1">{post.handle}</Text>
                      <Text className="text-gray-500">·</Text>
                      <Text className="text-gray-500 ml-1">{post.time}</Text>
                      <View className="ml-auto">
                        <TouchableOpacity>
                          <Ionicons name="ellipsis-horizontal" size={16} color="gray" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                    {/* Content */}
                    <Text className="text-black text-base mb-3 leading-5">{post.text}</Text>
                    
                    {post.image && (
                      <Image
                        source={{ uri: post.image }}
                        className="w-full h-64 rounded-2xl mb-3"
                        resizeMode="cover"
                      />
                    )}
                    
                    {/* Actions */}
                    <View className="flex-row justify-between max-w-md mt-2">
                      <TouchableOpacity className="flex-row items-center space-x-2 hover:bg-blue-50 p-2 rounded-full">
                        <Ionicons name="chatbubble-outline" size={18} color="#657786" />
                        {post.comments > 0 && <Text className="text-gray-500 text-sm">{post.comments}</Text>}
                      </TouchableOpacity>
                      
                      <TouchableOpacity className="flex-row items-center space-x-2 hover:bg-green-50 p-2 rounded-full">
                        <Ionicons name="repeat" size={18} color="#657786" />
                        {post.retweets > 0 && <Text className="text-gray-500 text-sm">{post.retweets}</Text>}
                      </TouchableOpacity>
                      
                      <TouchableOpacity className="flex-row items-center space-x-2 hover:bg-red-50 p-2 rounded-full">
                        <Ionicons name="heart-outline" size={18} color="#657786" />
                        {post.likes > 0 && <Text className="text-gray-500 text-sm">{post.likes}</Text>}
                      </TouchableOpacity>
                      
                      <TouchableOpacity className="hover:bg-blue-50 p-2 rounded-full">
                        <Ionicons name="share-outline" size={18} color="#657786" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* RIGHT SIDEBAR */}
        {isDesktop && (
          <View className="w-80 p-4">
            {/* Search */}
            <View className="bg-gray-100 rounded-full p-3 mb-4 flex-row items-center">
              <Ionicons name="search" size={20} color="#657786" />
              <TextInput
                placeholder="Search Twitter"
                className="ml-3 flex-1 text-base"
                placeholderTextColor="#657786"
              />
            </View>

            {/* Trends */}
            <View className="bg-gray-50 rounded-2xl p-4 mb-4">
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-xl font-bold text-black">Trends for you</Text>
                <TouchableOpacity>
                  <Ionicons name="settings-outline" size={20} color="#657786" />
                </TouchableOpacity>
              </View>
              
              <Text className="text-gray-500 text-sm mb-2">Trending worldwide</Text>
              <Text className="font-bold text-black mb-1">#BreakingNews</Text>
              
              {trends.map((trend, index) => (
                <View key={index} className="mt-3">
                  <Text className="text-gray-500 text-sm">Trending worldwide</Text>
                  {trend.title ? (
                    <>
                      <Text className="text-gray-500 text-sm">{trend.category}</Text>
                      <Text className="text-black text-sm leading-4">{trend.title}</Text>
                    </>
                  ) : (
                    <>
                      <Text className="font-bold text-black">{trend.category}</Text>
                      <Text className="text-gray-500 text-sm">{trend.subtitle}</Text>
                    </>
                  )}
                  <Text className="text-gray-500 text-xs mt-1">{trend.tweets}</Text>
                </View>
              ))}
              
              <TouchableOpacity className="mt-3">
                <Text className="text-blue-500 text-sm">Show more</Text>
              </TouchableOpacity>
            </View>

            {/* Who to follow */}
            <View className="bg-gray-50 rounded-2xl p-4">
              <Text className="text-xl font-bold text-black mb-4">Who to follow</Text>
              
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <Image
                    source={{ uri: "https://randomuser.me/api/portraits/women/5.jpg" }}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <View>
                    <Text className="font-bold text-black">Bessie Cooper</Text>
                    <Text className="text-gray-500 text-sm">@bessie_cooper</Text>
                  </View>
                </View>
                <TouchableOpacity className="bg-black px-4 py-1.5 rounded-full">
                  <Text className="text-white text-sm font-bold">Follow</Text>
                </TouchableOpacity>
              </View>
              
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <Image
                    source={{ uri: "https://randomuser.me/api/portraits/women/6.jpg" }}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <View>
                    <Text className="font-bold text-black">Jenny Wilson</Text>
                    <Text className="text-gray-500 text-sm">@jenny_wilson</Text>
                  </View>
                </View>
                <TouchableOpacity className="bg-black px-4 py-1.5 rounded-full">
                  <Text className="text-white text-sm font-bold">Follow</Text>
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity className="mt-2">
                <Text className="text-blue-500 text-sm">Show more</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}