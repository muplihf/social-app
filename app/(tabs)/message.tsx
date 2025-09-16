// app/(tabs)/messages.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const conversations = [
  { id: '1', name: 'Bessie Cooper', message: 'Hey, how are you?', avatar: 'https://randomuser.me/api/portraits/women/5.jpg', timestamp: '10:00 AM' },
  { id: '2', name: 'Jenny Wilson', message: 'I am good, thanks for asking!', avatar: 'https://randomuser.me/api/portraits/women/6.jpg', timestamp: '10:01 AM' },
  { id: '3', name: 'Devon Lane', message: 'What about you?', avatar: 'https://randomuser.me/api/portraits/women/7.jpg', timestamp: '10:01 AM' },
  { id: '4', name: 'Darlene Robertson', message: 'I am doing great. Just working on a new project.', avatar: 'https://randomuser.me/api/portraits/women/8.jpg', timestamp: '10:02 AM' },
];

const initialMessages = [
  { id: '1', text: 'Hey, how are you?', sender: 'Jane Doe', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', timestamp: '10:00 AM' },
  { id: '2', text: 'I am good, thanks for asking!', sender: 'You', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', timestamp: '10:01 AM' },
];

export default function MessagesScreen() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      const message = {
        id: (messages.length + 1).toString(),
        text: newMessage,
        sender: 'You',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const renderConversation = ({ item }) => (
    <TouchableOpacity style={styles.conversationContainer} onPress={() => setSelectedConversation(item)}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.conversationContent}>
        <View style={styles.conversationHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'You' ? styles.myMessage : styles.theirMessage]}>
      {item.sender !== 'You' && <Image source={{ uri: item.avatar }} style={styles.messageAvatar} />}
      <View style={[styles.messageBubble, item.sender === 'You' ? styles.myMessageBubble : styles.theirMessageBubble]}>
        <Text style={item.sender === 'You' ? styles.myMessageText : styles.theirMessageText}>{item.text}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  if (selectedConversation) {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => setSelectedConversation(null)} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#1DA1F2" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Chat</Text>
        </View>
        <View style={styles.container}>
            <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.messagesList}
            />
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={newMessage}
                onChangeText={setNewMessage}
                placeholder="Start a new message"
                placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
      <FlatList
        data={conversations}
        renderItem={renderConversation}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  conversationContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  conversationContent: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#666',
  },
  messagesList: {
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-end',
  },
  myMessage: {
    justifyContent: 'flex-end',
  },
  theirMessage: {
    justifyContent: 'flex-start',
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 20,
  },
  myMessageBubble: {
    backgroundColor: '#1DA1F2',
    borderBottomRightRadius: 5,
  },
  theirMessageBubble: {
    backgroundColor: '#E5E7EB',
    borderBottomLeftRadius: 5,
  },
  myMessageText: {
    color: 'white',
    fontSize: 16,
  },
  theirMessageText: {
    color: 'black',
    fontSize: 16,
  },
  timestamp: {
    fontSize: 10,
    color: '#999',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});