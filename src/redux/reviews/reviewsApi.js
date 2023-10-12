import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goose-track-backend-02.onrender.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: false,
  keepUnusedDataFor: 1,

  endpoints: builder => ({
    fetchReviews: builder.query({
      query: () => '/reviews',
    }),

    getUserReview: builder.query({
      query: () => ({
        url: '/reviews/own',
      }),
    }),

    createReview: builder.mutation({
      query: data => ({
        url: '/reviews/own',
        method: 'POST',
        body: data,
      }),
    }),

    editReview: builder.mutation({
      query: data => ({
        url: '/reviews/own',
        method: 'PATCH',
        body: data,
      }),
    }),

    deleteReview: builder.mutation({
      query: () => ({
        url: '/reviews/own',
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useFetchReviewsQuery,
  useGetUserReviewQuery,
  useCreateReviewMutation,
  useEditReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;
