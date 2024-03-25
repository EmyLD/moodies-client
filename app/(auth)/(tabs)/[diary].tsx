import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DatasDiary {
  diary: string;
}

const Diary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useLocalSearchParams();
  const [diaryInfo, setDiaryInfo] = useState<DatasDiary[]>([]);

  useEffect(() => {
    const fetchDatas = async () => {
      setIsLoading(true);
      const response = await fetch(`https://84ec-91-169-227-245.ngrok-free.app/diaries/${userId}`);
      const datas = await response.json();
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
      <Text>{diaryInfo.diary}</Text>
    </SafeAreaView>
  );
};

export default Diary;
