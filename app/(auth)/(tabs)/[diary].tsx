import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import index from '..';
import { SafeAreaView } from 'react-native-safe-area-context';

type DatasDiary = {
  diary: string;
  author: string;
  created: string;
};

const Diary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useLocalSearchParams();
  const [diaryInfo, setDiaryInfo] = useState<DatasDiary[]>([]);

  useEffect(() => {
    const fetchDatas = async () => {
      setIsLoading(true);
      const response = await fetch(`https://09ab-91-169-227-245.ngrok-free.app/diaries/${userId}`);
      const datas = (await response.json()) as DatasDiary[];
      setDiaryInfo(datas);

      setIsLoading(false);
    };
    fetchDatas();
  }, []);

  if (isLoading) {
    return <Text>Loading..</Text>;
  }

  return (
    <SafeAreaView>
      {diaryInfo.map((index) => {
        return (
          <>
            <Text>{index.diary}</Text>
            <Text>{index.created}</Text>
          </>
        );
      })}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  coucou: { padding: 45, backgroundColor: 'black' },
});
export default Diary;
