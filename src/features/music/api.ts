
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Music } from './types'; // API yanıtları için türleri içe aktarın

// Temel URL'yi tanımlayın
const baseUrl = "https://66141b0b2fc47b4cf27b9bf3.mockapi.io/";

// API modülünü oluşturun
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      // GET servisi tanımlayın
      getMusic: builder.query<Music[], void>({
        query: () => "music",
      }),
      // POST servisi tanımlayın
      addMusic: builder.mutation<Music, Partial<Music>>({
        query: (newMusic) => ({
          url: "music",
          method: "POST",
          body: newMusic,
        }),
      }),
      // PUT servisi tanımlayın
      updateMusic: builder.mutation<Music, { id: number; music: Partial<Music> }>(
        {
          query: ({ id, music }) => ({
            url: `music/${id}`,
            method: "PUT",
            body: music,
          }),
        }
      ),
    }),
  });

// API modülünü dışa aktarın
export const { useGetMusicQuery, useAddMusicMutation, useUpdateMusicMutation } = api;
export default api;