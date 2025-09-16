import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Avatar } from '@rneui/themed'
import { Session } from '@supabase/supabase-js'

// Komponen untuk menampilkan avatar pengguna dengan fallback
function UserAvatar({ url }: { url: string | undefined }) {
    // Jika ada URL avatar, tampilkan gambar
    if (url) {
        return <Avatar size={120} rounded source={{ uri: url }} containerStyle={styles.avatar} />;
    }
    // Jika tidak, tampilkan ikon pengguna sebagai default
    return <Avatar size={120} rounded icon={{ name: 'user', type: 'font-awesome' }} containerStyle={styles.avatar} />;
}

export default function Account({ session }: { session: Session }) {
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>()

  // useEffect untuk mengambil avatar_url saat sesi berubah
  useEffect(() => {
    if (session) {
      getAvatarUrl();
    }
  }, [session]);

  // Fungsi untuk mengambil URL avatar dari profil pengguna
  async function getAvatarUrl() {
    try {
      if (!session?.user) return; // Keluar jika tidak ada user

      const { data, error } = await supabase
        .from('profiles')
        .select('avatar_url')
        .eq('id', session.user.id)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      // Tidak menampilkan alert jika gagal, cukup tidak menampilkan avatar
      if (error instanceof Error) {
        console.log("Error getting avatar:", error.message);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Account</Text>
      
      <UserAvatar url={avatarUrl} />
      
      <Text style={styles.emailText}>{session?.user?.email}</Text>
      <Text style={styles.infoText}>
        You are currently signed in.
      </Text>

      <Button
        title="Sign Out"
        onPress={() => supabase.auth.signOut()}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        containerStyle={styles.buttonContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f9fc', // Warna latar belakang yang lembut
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a202c',
    position: 'absolute',
    top: 60,
  },
  avatar: {
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#fff',
    elevation: 8, // Efek shadow untuk Android
    shadowColor: '#000', // Efek shadow untuk iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  emailText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '90%',
    borderRadius: 50,
  },
  button: {
    backgroundColor: '#e53e3e', // Warna merah yang tegas untuk logout
    paddingVertical: 15,
    borderRadius: 50,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
