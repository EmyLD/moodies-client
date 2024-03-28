import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { uri } from '~/helpers/uri';

type DatasDiary = {
  diary: string;
  author: string;
  created: string;
};

const Diary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useLocalSearchParams();
  const [diaryInfo, setDiaryInfo] = useState<DatasDiary[]>([]);
  let date;
  useEffect(() => {
    const fetchDatas = async () => {
      setIsLoading(true);
      const response = await fetch(`${uri}/diaries/${userId}`);
      const datas = (await response.json()) as DatasDiary[];
      setDiaryInfo(datas);
      setIsLoading(false);
    };
    fetchDatas();
  }, []);

  if (isLoading) {
    return <Text>Loading..</Text>;
  }
  // TODO Change keys
  return (
    <SafeAreaView>
      {diaryInfo.map((index) => {
        console.log('====================================');
        console.log(typeof index.created);
        console.log('====================================');

        return (
          <>
            <Text key={0}>{index.diary}</Text>
            <Text key={1}>{index.created}</Text>
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
